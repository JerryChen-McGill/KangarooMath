const assert=require('node:assert/strict'),fs=require('node:fs'),vm=require('node:vm');
const {pathToFileURL}=require('node:url');
const path=require('node:path');
const {chromium}=require(process.env.PLAYWRIGHT_MODULE||'playwright');
const scripts=[...fs.readFileSync('index.html','utf8').matchAll(/<script src="([^"]+)"/g)].map(m=>m[1]);
const data=JSON.parse(vm.runInNewContext(scripts.map(f=>fs.readFileSync(f,'utf8')).join('\n')+';JSON.stringify({papers:KANGAROO_DATA,extensions:KANGAROO_EXTENSIONS})'));
// Independently transcribed from page 6 of each local original paper.
const expected={
  2004:{key:'CCEEEDDBCDDEDBBBECCDCBBACADDAC',figures:[2,6,11,12,13,16,17,18,22,23,24,26]},
  2005:{key:'ECBDDDDAECCDCEBBBECEEDDDDCDDBD',figures:[1,3,6,8,13,16,19,20,22,25,29]},
  2006:{key:'DEDBEADACDDDEABABCBBEBDCEDABEC',figures:[2,4,5,7,9,11,13,14,16,17,18,19,23,25,26]},
  2007:{key:'DDDCBBADCADCCBBCBCDBDBDEEBCDAA',figures:[6,7,14,15,19,21,23,25,26,28,29,30]},
  2008:{key:'CCBDECBEAEEBDEDDCCBCECDCDCDDDC',figures:[2,4,5,6,7,9,10,11,12,16,18,21,23,24]}
};
for(const [year,check] of Object.entries(expected)){
 const qs=data.papers[`${year}-g5-6`];assert.equal(qs.length,30);
 assert.equal(qs.map(q=>q.answer||q.sourceAnswer).join(''),check.key);
 assert.deepEqual(qs.filter(q=>q.figure).map(q=>q.no),check.figures);
 for(const [i,q] of qs.entries()){
  assert.equal(q.no,i+1);assert.equal(q.grade,'5-6');assert.equal(q.points,i<10?3:i<20?4:5);
  assert.ok(q.text.trim());assert.deepEqual(Object.keys(q.options),['A','B','C','D','E']);
  assert.ok(Object.values(q.options).every(v=>v.trim()&&!v.includes('[missing]')));
  assert.equal(q.hints.length,3);assert.ok(q.hints.every(h=>h.trim()));
  assert.doesNotMatch(JSON.stringify(q),/Copyright|Points Each|Published Answer:|please refer to|consult the original|extracted text omits|not yet prepared/i);
  if(q.figure)assert.ok(fs.existsSync(q.figure));
 }
}
assert.deepEqual(data.papers['2004-g5-6'].filter(q=>!q.answer).map(q=>q.no),[1,22]);
assert.equal(Object.keys(data.extensions).filter(k=>k.startsWith('2005-g5-6-')).length,10);
assert.equal(data.papers['2008-g5-6'][5].options.C,'2');
assert.equal(data.papers['2006-g5-6'][23].options.C,'1/10, 9/80, 1/8');
async function select(page,id){await page.selectOption('#gradeSel','5-6');await page.selectOption('#yearSel',id);}
(async()=>{
 const browser=await chromium.launch({headless:true,channel:'msedge'});
 try{
  const page=await browser.newPage({viewport:{width:1280,height:900}}),errors=[];
  page.on('pageerror',e=>errors.push(e.message));page.on('dialog',d=>d.accept());
  await page.goto(pathToFileURL(path.resolve('index.html')).href);
  assert.equal(await page.locator('.q-card').count(),Object.values(data.papers).flat().length);
  for(const year of Object.keys(expected)){
   const id=`${year}-g5-6`;await select(page,id);
   assert.equal(await page.locator('.q-card').count(),30);assert.equal(await page.locator('.option').count(),150);
   for(const img of await page.locator('.question-figure img').all()){
    await img.scrollIntoViewIfNeeded();await img.evaluate(el=>el.decode());assert.ok(await img.evaluate(el=>el.naturalWidth>30&&el.naturalHeight>20));
   }
   const q2=page.locator('.q-card[data-no="2"]');assert.equal(await q2.locator('.option.correct').count(),0);
   await q2.locator(`[data-letter="${data.papers[id][1].answer}"]`).click();assert.equal(await q2.locator('.option.correct').count(),1);
   await q2.getByRole('button',{name:'Hint',exact:true}).click();assert.equal(await q2.locator('.hint li').count(),3);
   for(const q of data.papers[id])assert.equal(await page.locator(`.q-card[data-no="${q.no}"]`).getByRole('button',{name:'延申拓展',exact:true}).count(),data.extensions[`${id}-${q.no}`]?1:0);
   await q2.getByRole('button',{name:'延申拓展',exact:true}).click();assert.equal(await q2.locator('.extension-text').innerText(),data.extensions[`${id}-2`].text);
   await page.selectOption('#viewSel','single');await page.fill('#singleNo',String(expected[year].figures[0]));
   await page.screenshot({path:`tmp/pdfs/${id}-desktop.png`});
   await page.setViewportSize({width:390,height:844});await page.selectOption('#viewSel','list');
   assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth));
   for(const card of await page.locator('.q-card').all())assert.ok(await card.evaluate(el=>el.scrollWidth<=el.clientWidth));
   await page.screenshot({path:`tmp/pdfs/${id}-mobile.png`});await page.setViewportSize({width:1280,height:900});
  }
  await select(page,'2004-g5-6');
  const invalid=page.locator('.q-card[data-no="1"]');await invalid.locator('[data-letter="C"]').click();assert.equal(await invalid.locator('.option.correct').count(),0);
  await page.locator('#modeToggle').click();const q2=page.locator('.q-card[data-no="2"]');
  await q2.getByRole('button',{name:'Hint',exact:true}).click();assert.ok(await q2.locator('.hint').isVisible());
  assert.deepEqual(errors,[]);
  console.log('PASS: 150 questions, 64 original figures, answer keys, available teaching content, isolated attempts, hints and mobile layout.');
 }finally{await browser.close();}
})().catch(e=>{console.error(e);process.exitCode=1;});
