const {chromium} = require(process.env.PLAYWRIGHT_MODULE || 'playwright');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const {pathToFileURL} = require('node:url');
const data = vm.runInNewContext(['site_data.js','hints.js','extensions.js','paper-1999-g5-6.js'].map(f => fs.readFileSync(f,'utf8')).join('\n') + ';JSON.stringify({questions:KANGAROO_DATA, extensions:KANGAROO_EXTENSIONS})');
const {questions,extensions} = JSON.parse(data);
const paper = questions['1999-g5-6'];
const oldTags = new Set([...questions['1999'],...questions['2002']].flatMap(q=>q.tags));
assert.equal(paper.length,30);
assert.deepEqual(paper.filter(q=>q.figure).map(q=>q.no),[2,4,6,7,10,14,15,19,27,28,29]);
paper.forEach((q,i) => {
  assert.equal(q.no,i+1); assert.equal(q.grade,'5-6');
  assert.equal(q.points,i<10?3:i<20?4:5);
  assert.deepEqual(Object.keys(q.options),['A','B','C','D','E']);
  assert.equal(q.hints.length,3); assert.ok(q.methods.length && q.solution && q.tip);
  q.tags.forEach(tag=>assert.ok(oldTags.has(tag),`Unnecessary new tag: ${tag}`));
  assert.ok(extensions['1999-g5-6-'+q.no]);
  if(q.figure) assert.ok(fs.existsSync(q.figure));
});
assert.equal(paper[0].answer,null); assert.equal(1999-999-99-9,892);
// Enumerate all digit completions rather than accepting the guide's sole example.
const sums=[];
for(let a=0;a<=9;a++)for(let b=0;b<=9;b++)if((704+10*a)*5===3070+100*b)sums.push(a+b);
assert.equal(extensions['1999-g5-6-14'].answer,sums.join(', '));
// Scan the actual digital-clock sequence independently of the explanation.
const start=19*3600+58*60+47;
const display=t=>[Math.floor(t/3600)%24,Math.floor(t/60)%60,t%60].map(n=>String(n).padStart(2,'0')).join('');
let elapsed=1; while(new Set(display(start+elapsed)).size!==6)elapsed++;
assert.equal(Number(paper[29].options[paper[29].answer]),elapsed);
// Original 4x4 grid plus the three overlapping central unit-square outlines.
const segments=[];
for(let n=0;n<=8;n+=2){segments.push([n,0,n,8],[0,n,8,n]);}
segments.push([3,1,3,7],[5,1,5,7]);
for(const y of [1,3,5,7])segments.push([3,y,5,y]);
const covered=(x,y,dx,dy,len)=>Array.from({length:len},(_,i)=>[x+dx*i,y+dy*i]).every(([a,b])=>segments.some(([x1,y1,x2,y2])=> dx ? y1===b&&y2===b&&x1<=a&&x2>=a+1 : x1===a&&x2===a&&y1<=b&&y2>=b+1));
let squares=0;
for(let size=1;size<=8;size++)for(let x=0;x+size<=8;x++)for(let y=0;y+size<=8;y++)if(covered(x,y,1,0,size)&&covered(x,y+size,1,0,size)&&covered(x,y,0,1,size)&&covered(x+size,y,0,1,size))squares++;
assert.equal(Number(paper[28].options[paper[28].answer]),squares);
(async()=>{
  const browser=await chromium.launch({headless:true,channel:'msedge'});
  try {
    const page=await browser.newPage({viewport:{width:1280,height:900}});
    const errors=[];page.on('pageerror',e=>errors.push(e.message));
    await page.goto(pathToFileURL(path.resolve('index.html')).href);
    await page.selectOption('#yearSel','1999-g5-6');
    assert.equal(await page.locator('.q-card').count(),30);
    const first=page.locator('.q-card').first();
    assert.match(await first.locator('.q-title').innerText(),/1999 · Grade 5-6/);
    await first.locator('[data-letter="B"]').click();
    assert.equal(await first.locator('.option.correct,.option.incorrect').count(),0);
    assert.match(await first.locator('.source-issue').innerText(),/892/);
    await page.selectOption('#viewSel','answers');
    assert.equal(await page.locator('.ans-cell').count(),30);
    assert.match(await page.locator('.ans-cell').first().innerText(),/892/);
    assert.match(await page.locator('.view-ans h3').innerText(),/1999 年 · Grade 5-6/);
    await page.selectOption('#viewSel','list');
    for(const q of paper.filter(q=>q.figure)){
      const img=page.locator(`.q-card[data-no="${q.no}"] img`);
      await img.scrollIntoViewIfNeeded();
      await img.evaluate(el=>el.decode());
      assert.ok(await img.evaluate(el=>el.naturalWidth>0));
    }
    const second=page.locator('.q-card[data-no="2"]');
    await second.locator('[data-letter="D"]').click();
    await second.locator('[onclick="showHint(this)"]').click();
    await second.getByRole('button',{name:'编辑 Hint',exact:true}).click();
    await page.locator('textarea').first().fill('Only for 1999 Grade 5–6');
    await page.getByRole('button',{name:'保存 Hint',exact:true}).click();
    await page.selectOption('#yearSel','1999');
    assert.equal(await second.locator('.correct.option').count(),0);
    await second.locator('[onclick="showHint(this)"]').click();
    assert.doesNotMatch(await second.locator('.hint').innerText(),/Only for/);
    await page.selectOption('#yearSel','1999-g5-6');
    assert.equal(await second.locator('.correct.option').getAttribute('data-letter'),'D');
    assert.match(await second.locator('.hint').innerText(),/Only for/);
    await page.reload();
    await page.selectOption('#yearSel','1999-g5-6');
    await second.locator('[onclick="showHint(this)"]').click();
    assert.match(await second.locator('.hint').innerText(),/Only for/);
    await page.click('#modeToggle');
    assert.equal(await page.locator('#btnToggleAns').isVisible(),false);
    assert.equal(await page.locator('#btnExpandSol').isVisible(),false);
    page.once('dialog',d=>d.accept());
    await second.locator('[onclick="showHint(this)"]').click();
    await second.getByRole('button',{name:'延申拓展',exact:true}).click();
    page.once('dialog',d=>d.dismiss());
    await second.locator('.extension-answer summary').click();
    assert.equal(await second.locator('.extension-answer[open]').count(),0);
    await page.selectOption('#viewSel','single');
    await page.fill('#singleNo','27');
    assert.match(await first.locator('.q-title').innerText(),/Q27/);
    fs.mkdirSync('tmp/pdfs',{recursive:true});
    await first.locator('img').evaluate(el=>el.decode());
    await page.screenshot({path:'tmp/pdfs/new-paper-desktop.png'});
    await page.setViewportSize({width:390,height:844});
    await page.fill('#singleNo','15');
    await first.locator('img').evaluate(el=>el.decode());
    assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),true);
    assert.equal(await first.evaluate(el=>el.scrollWidth<=el.clientWidth),true);
    await page.screenshot({path:'tmp/pdfs/new-paper-mobile.png'});
    assert.deepEqual(errors,[]);
    console.log('PASS: 30 new questions, reused tags, source corrections, diagrams, separate grade state, hint persistence, confirmation and mobile layout.');
  } finally {await browser.close();}
})().catch(e=>{console.error(e);process.exitCode=1;});
