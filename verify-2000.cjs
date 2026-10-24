const selectPaper = require('./verify-select-paper.cjs');
const {chromium} = require(process.env.PLAYWRIGHT_MODULE || 'playwright');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const {pathToFileURL} = require('node:url');
const files = ['site_data.js','hints.js','extensions.js','paper-1999-g5-6.js','paper-2000-g3-4.js'];
const {questions,extensions} = JSON.parse(vm.runInNewContext(files.map(f=>fs.readFileSync(f,'utf8')).join('\n')+';JSON.stringify({questions:KANGAROO_DATA,extensions:KANGAROO_EXTENSIONS})'));
const paper = questions['2000-g3-4'];
const tags = new Set([...questions['1999'],...questions['2002']].flatMap(q=>q.tags));
// Independently transcribed from the original PDF answer key.
const key = 'BCDBBCBC' + 'BDBDBCCC' + 'BBECCAEA';
assert.equal(paper.length,24);
assert.equal(paper.map(q=>q.answer).join(''),key);
assert.equal(paper.reduce((sum,q)=>sum+q.points,0),96);
for(const [i,q] of paper.entries()) {
  assert.equal(q.no,i+1); assert.equal(q.grade,'3-4');
  assert.equal(q.points,i<8?3:i<16?4:5);
  assert.deepEqual(Object.keys(q.options),['A','B','C','D','E']);
  assert.equal(q.hints.length,3); assert.equal(q.methods.length,2);
  for(const field of ['text','solution','tip','title']) assert.ok(q[field]?.trim());
  for(const tag of q.tags) assert.ok(tags.has(tag),`New tag: ${tag}`);
  for(const field of ['text','change','method','answer','solution']) assert.ok(extensions[`2000-g3-4-${q.no}`][field]?.trim());
  assert.doesNotMatch(q.text,/Copyright|Points Each|ANSWER:/);
  if(q.figure) assert.ok(fs.existsSync(q.figure));
}
// Audited against all four question pages, including graphical answer choices.
assert.deepEqual(paper.filter(q=>q.figure).map(q=>q.no),[7,14,15,16,18,20,22,23]);
// Enumerate order-preserving subsequences for the original and extension digit puzzle.
function smallestThree(s) {
  const numbers=[];
  for(let a=0;a<s.length;a++)for(let b=a+1;b<s.length;b++)for(let c=b+1;c<s.length;c++)
    if(s[a]!=='0')numbers.push(Number(s[a]+s[b]+s[c]));
  return Math.min(...numbers);
}
assert.equal(smallestThree('4921508'),108);
assert.equal(smallestThree('5832047'),204);
assert.match(extensions['2000-g3-4-10'].answer,/204/);
// Clock hands coincide at 8:43 7/11; only one opposite position falls between 14:00 and 15:00.
const departure=8*360/330;
const returns=Array.from({length:30},(_,k)=>(180+360*k)/330).filter(t=>t>=14&&t<15);
assert.equal(returns.length,1);
assert.ok(Math.abs(returns[0]-departure-6)<1e-10);
assert.equal(Number(paper[19].options[paper[19].answer].split(' ')[0]),6);

(async()=>{
  const browser=await chromium.launch({headless:true,channel:'msedge'});
  try {
    const page=await browser.newPage({viewport:{width:1280,height:900}});
    const errors=[];page.on('pageerror',e=>errors.push(e.message));
    await page.goto(pathToFileURL(path.resolve('index.html')).href);
    await selectPaper(page, '2000-g3-4');
    assert.equal(await page.locator('.q-card').count(),24);
    const first=page.locator('.q-card').first();
    assert.match(await first.locator('.q-title').innerText(),/2000 · Grade 3-4/);
    for(const q of paper.filter(q=>q.figure)) {
      const img=page.locator(`.q-card[data-no="${q.no}"] img`);
      await img.scrollIntoViewIfNeeded(); await img.evaluate(el=>el.decode());
      assert.ok(await img.evaluate(el=>el.naturalWidth>0));
    }
    await page.selectOption('#viewSel','answers');
    assert.equal(await page.locator('.ans-cell').count(),24);
    assert.equal((await page.locator('.ans-cell .a').allTextContents()).join(''),key);
    await page.selectOption('#viewSel','list');
    await first.locator('[data-letter="B"]').click();
    assert.equal(await first.locator('.option.correct').getAttribute('data-letter'),'B');
    await first.locator('[onclick="showHint(this)"]').click();
    await first.getByRole('button',{name:'编辑 Hint',exact:true}).click();
    await page.locator('textarea').first().fill('Only for 2000 Grade 3–4');
    await page.getByRole('button',{name:'保存 Hint',exact:true}).click();
    await selectPaper(page, '1999');
    assert.equal(await first.locator('.option.correct').count(),0);
    await first.locator('[onclick="showHint(this)"]').click();
    assert.doesNotMatch(await first.locator('.hint').innerText(),/Only for 2000/);
    await selectPaper(page, '2000-g3-4');
    assert.equal(await first.locator('.option.correct').getAttribute('data-letter'),'B');
    await page.reload();
    await selectPaper(page, '2000-g3-4');
    await first.locator('[onclick="showHint(this)"]').click();
    assert.match(await first.locator('.hint').innerText(),/Only for 2000/);
    await page.click('#modeToggle');
    page.once('dialog',d=>d.accept());
    await first.locator('[onclick="showHint(this)"]').click();
    await first.getByRole('button',{name:'延申拓展',exact:true}).click();
    page.once('dialog',d=>d.dismiss());
    await first.locator('.extension-answer summary').click();
    assert.equal(await first.locator('.extension-answer[open]').count(),0);
    page.once('dialog',d=>d.accept());
    await first.locator('.extension-answer summary').click();
    assert.equal(await first.locator('.extension-answer[open]').count(),1);
    await page.click('#modeToggle');
    await page.selectOption('#viewSel','single');
    await page.fill('#singleNo','14');
    await first.getByRole('button',{name:'详解',exact:true}).click();
    await first.locator('img').evaluate(el=>el.decode());
    fs.mkdirSync('tmp/pdfs',{recursive:true});
    await page.screenshot({path:'tmp/pdfs/2000-desktop.png'});
    await page.setViewportSize({width:390,height:844});
    for(const q of paper) {
      await page.fill('#singleNo',String(q.no));
      if(q.figure)await first.locator('img').evaluate(el=>el.decode());
      assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),true);
      assert.equal(await first.evaluate(el=>el.scrollWidth<=el.clientWidth),true);
    }
    await page.fill('#singleNo','15');
    await first.locator('img').evaluate(el=>el.decode());
    await page.screenshot({path:'tmp/pdfs/2000-mobile.png'});
    assert.deepEqual(errors,[]);
    console.log('PASS: 2000 Grade 3–4, 24 answers, 8 figures, 24 extensions, math checks, isolated state, hint persistence, practice confirmation and all mobile cards.');
  } finally {await browser.close();}
})().catch(e=>{console.error(e);process.exitCode=1;});
