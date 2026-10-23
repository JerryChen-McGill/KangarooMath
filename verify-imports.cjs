const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const path = require('node:path');
const {pathToFileURL} = require('node:url');
const {chromium} = require(process.env.PLAYWRIGHT_MODULE || 'playwright');
const source = fs.readFileSync('index.html','utf8');
const scripts = [...source.matchAll(/<script src="([^"]+)"/g)].map(m=>m[1]);
const {papers,extensions} = JSON.parse(vm.runInNewContext(scripts.map(f=>fs.readFileSync(f,'utf8')).join('\n')+';JSON.stringify({papers:KANGAROO_DATA,extensions:KANGAROO_EXTENSIONS})'));
// Answer keys and figure locations independently checked against the original pages.
const expected = {
  '2000-g5-6': {key:'CADEDEDBEEBEDBCEDEDD DDBBAADEDA'.replace(/ /g,''), figures:[6,8,9,10,13,15,18,22,24,26,29]},
  '2001-g5-6': {key:'BDCBECDECA' + 'DACCBDCDEB' + 'ABACEDACCD', figures:[2,3,8,9,10,14,19,22,23,24,25,27,29]},
  '2003-g5-6': {key:'CAACBAEDACCBDCBDBBCACDDBDEADCB', figures:[5,7,10,11,12,13,15,22,24,25,27,28]}
};
const ids = process.argv[2] ? [process.argv[2]] : Object.keys(expected).filter(id=>papers[id]);
const oldTags = new Set([...papers['1999'],...papers['2002']].flatMap(q=>q.tags));
for (const id of ids) {
  const qs=papers[id], check=expected[id];
  assert.equal(qs.length,30);
  assert.equal(qs.map(q=>q.answer).join(''),check.key,id+' answer key');
  assert.deepEqual(qs.filter(q=>q.figure).map(q=>q.no),check.figures);
  for(const [i,q] of qs.entries()) {
    assert.equal(q.no,i+1);assert.equal(q.grade,'5-6');assert.equal(q.points,i<10?3:i<20?4:5);
    assert.deepEqual(Object.keys(q.options),['A','B','C','D','E']);
    for(const k of ['text','title','solution','tip'])assert.ok(q[k]?.trim(),`${id} Q${q.no} ${k}`);
    assert.equal(q.hints.length,3);assert.equal(q.methods.length,2);
    q.tags.forEach(t=>assert.ok(oldTags.has(t),`Unexpected tag ${t}`));
    const ext=extensions[`${id}-${q.no}`];
    for(const k of ['text','answer','solution','change','method'])assert.ok(ext[k]?.trim());
    assert.doesNotMatch(q.text,/Copyright|Points Each|Answers key/);
    if(q.figure)assert.ok(fs.existsSync(q.figure));
  }
}
// Independently enumerate the combinatorial/numerical questions.
if(ids.includes('2000-g5-6')) {
  assert.equal(Array.from({length:9000},(_,i)=>i+1000).filter(n=>[...String(n)].reduce((s,d)=>s+Number(d),0)===3).length,10);
  const weights=new Set();for(let a=-1;a<=1;a++)for(let b=-1;b<=1;b++)for(let c=-1;c<=1;c++)if(a+3*b+9*c>0)weights.add(a+3*b+9*c);
  assert.equal(weights.size,13);
  assert.equal(1.1*0.9,0.9900000000000001);
}
(async()=>{
 const browser=await chromium.launch({headless:true,channel:'msedge'});
 try {
  const page=await browser.newPage({viewport:{width:1280,height:900}}), errors=[];
  page.on('pageerror',e=>errors.push(e.message));
  await page.goto(pathToFileURL(path.resolve('index.html')).href);
  assert.equal(await page.locator('.q-card').count(),Object.values(papers).flat().length);
  for(const id of ids) {
   await page.selectOption('#yearSel',id);
   assert.equal(await page.locator('.q-card').count(),30);
   for(const q of papers[id].filter(q=>q.figure)) {
    const img=page.locator(`.q-card[data-no="${q.no}"] .question-figure img`);
    await img.scrollIntoViewIfNeeded();await img.evaluate(el=>el.decode());
    assert.ok(await img.evaluate(el=>el.naturalWidth>0));
   }
   await page.selectOption('#viewSel','answers');
   assert.equal((await page.locator('.ans-cell .a').allTextContents()).join(''),expected[id].key);
   await page.selectOption('#viewSel','list');
   const first=page.locator('.q-card').first();
   await first.locator(`[data-letter="${papers[id][0].answer}"]`).click();
   assert.equal(await first.locator('.option.correct').count(),1);
   await page.selectOption('#yearSel','1999');
   assert.equal(await first.locator('.option.correct').count(),0);
   await page.selectOption('#yearSel',id);
   assert.equal(await first.locator('.option.correct').count(),1);
   await first.getByRole('button',{name:'延申拓展',exact:true}).click();
   assert.ok(await first.locator('.extension').isVisible());
   await page.selectOption('#viewSel','single');await page.fill('#singleNo',String(expected[id].figures[0]));
   await page.screenshot({path:`tmp/pdfs/${id}-desktop.png`});
   await page.setViewportSize({width:390,height:844});await page.selectOption('#viewSel','list');
   assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),true);
   for(const card of await page.locator('.q-card').all()) assert.ok(await card.evaluate(el=>el.scrollWidth<=el.clientWidth));
   await page.screenshot({path:`tmp/pdfs/${id}-mobile.png`});
   await page.setViewportSize({width:1280,height:900});
  }
  assert.deepEqual(errors,[]);
  console.log('PASS:',ids.join(', '),'answer keys, full teaching content, figures, answer isolation, extensions and mobile layout.');
 } finally {await browser.close();}
})().catch(e=>{console.error(e);process.exitCode=1;});
