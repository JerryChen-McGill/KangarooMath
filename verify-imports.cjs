const selectPaper = require('./verify-select-paper.cjs');
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
  '2003-g5-6': {key:'CAACBAEDACCBDCBDBBCACDDBDEADCB', figures:[5,7,8,10,11,12,13,15,16,22,24,25,27,28]}
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
if(ids.includes('2001-g5-6')) {
  const products=[];
  for(let d=1;d<=9;d++){const p=45*(10*d+3);if(p>=3000&&p<4000)products.push([10*d+3,p]);}
  assert.deepEqual(products,[[73,3285],[83,3735]]);
  const permutations=a=>a.length===0?[[]]:a.flatMap((n,i)=>permutations(a.filter((_,j)=>j!==i)).map(rest=>[n,...rest]));
  const gaps=permutations([1,2,3,4,5,6]).map(a=>Math.abs(100*a[0]+10*a[1]+a[2]-100*a[3]-10*a[4]-a[5]));
  assert.equal(Math.min(...gaps),47);
  let remaining=0;
  for(let x=0;x<5;x++)for(let y=0;y<5;y++)for(let z=0;z<5;z++) {
    const removed=(y===2&&z>=1&&z<=3)||(z===2&&x>=1&&x<=3)||(x===2&&y>=1&&y<=3);
    if(!removed)remaining++;
  }
  assert.equal(remaining,88);
}
if(ids.includes('2003-g5-6')) {
  let maxSum=0;
  for(let h=0;h<24;h++)for(let m=0;m<60;m++)maxSum=Math.max(maxSum,[...String(h)+String(m)].reduce((s,d)=>s+Number(d),0));
  assert.equal(maxSum,24);
  const sides=[1,2,3,2001,2002,2003], triangles=[];
  for(let a=0;a<6;a++)for(let b=a+1;b<6;b++)for(let c=b+1;c<6;c++)if(sides[a]+sides[b]>sides[c])triangles.push([sides[a],sides[b],sides[c]]);
  assert.equal(triangles.length,6);
  const marked=new Set();for(let n=1;n<=17;n+=2)marked.add(n);for(let n=17;n>=1;n-=3)marked.add(n);
  assert.equal(17-marked.size,5);
  assert.equal(new Date(Date.UTC(2003,2,21,20,3)+2003*60000).toISOString(),'2003-03-23T05:26:00.000Z');
  let factorial=1n;for(let n=1n;n<=50n;n++)factorial*=n;
  assert.equal(factorial.toString().match(/0+$/)[0].length,12);
  const digits=[];for(let s=1;s<=9;s++)for(let t=0;t<=9;t++)for(let c=0;c<=9;c++)if(new Set([s,t,c]).size===3&&321*s+11*t+c===2003)digits.push([s,t,c]);
  assert.deepEqual(digits,[[6,7,0]]);
  const dragons=[];for(let r=0;r<=22;r++)for(let g=0;g<=11;g++)if(2*r+4*g===44&&6*g===6*r-6)dragons.push([r,g]);
  assert.deepEqual(dragons,[[8,7]]);
}
(async()=>{
 const browser=await chromium.launch({headless:true,channel:'msedge'});
 try {
  const page=await browser.newPage({viewport:{width:1280,height:900}}), errors=[];
  page.on('pageerror',e=>errors.push(e.message));
  await page.goto(pathToFileURL(path.resolve('index.html')).href);
  assert.equal(await page.locator('.q-card').count(),Object.values(papers).flat().length);
  for(const id of ids) {
   await selectPaper(page, id);
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
   await selectPaper(page, '1999');
   assert.equal(await first.locator('.option.correct').count(),0);
   await selectPaper(page, id);
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
