const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const path = require('node:path');
const {pathToFileURL} = require('node:url');
const {chromium} = require(process.env.PLAYWRIGHT_MODULE || 'playwright');
const scripts = [...fs.readFileSync('index.html','utf8').matchAll(/<script src="([^"]+)"/g)].map(m=>m[1]);
const papers = JSON.parse(vm.runInNewContext(scripts.map(f=>fs.readFileSync(f,'utf8')).join('\n')+';JSON.stringify(KANGAROO_DATA)'));
const ids = process.argv[2] ? [process.argv[2]+'-amc8'] : Object.keys(papers).filter(id=>id.endsWith('-amc8'));
for (const id of ids) {
  const source = JSON.parse(fs.readFileSync(`data/${id}-source.json`,'utf8'));
  const qs = papers[id]; assert.equal(qs.length,25);
  for(const [i,q] of qs.entries()) {
    assert.equal(q.no,i+1); assert.equal(q.grade,'amc8'); assert.equal(q.points,1);
    assert.equal(q.hints.length,0); assert.equal(q.methods.length,2); assert.ok(q.tags.length);
    assert.ok(fs.existsSync(q.questionImage));
    assert.ok(q.solutionUrl.endsWith(`/Problem_${q.no}`));
    assert.ok(q.solutionUrl.includes(String(source.year)));
    if(q.answer) assert.equal(q.answer,source.answerKey[q.no]);
    else assert.ok(q.issue && q.answerDisplay);
    assert.equal(Boolean(q.solution),false); assert.equal(Boolean(q.tip),false);
  }
}
(async()=>{
  const browser=await chromium.launch({headless:true,channel:'msedge'});
  try {
    const page=await browser.newPage({viewport:{width:1440,height:900}}),errors=[];
    page.on('pageerror',e=>errors.push(e.message));
    await page.goto(pathToFileURL(path.resolve('index.html')).href);
    assert.deepEqual(await page.locator('#gradeSel option').allTextContents(),['全部竞赛 / 年级','Kangaroo Grade 3-4','Kangaroo Grade 5-6','AMC 8']);
    for(const id of ids) {
      await page.selectOption('#gradeSel','amc8'); await page.selectOption('#yearSel',id);
      assert.equal(await page.locator('.q-card').count(),25);
      assert.equal(await page.locator('#singleNo').getAttribute('max'),'25');
      for(const q of papers[id]) {
        const card=page.locator(`.q-card[data-no="${q.no}"]`);
        const image=card.locator('.original-question img');await image.scrollIntoViewIfNeeded();await image.evaluate(el=>el.decode());
        assert.ok(await image.evaluate(el=>el.naturalWidth>1000 && el.naturalHeight>35));
        for(const name of ['Hint','图解','备课提示','延申拓展']) assert.equal(await card.getByRole('button',{name,exact:true}).isDisabled(),true);
        await card.getByRole('button',{name:'详解',exact:true}).click();
        assert.equal(await card.locator('.solution a').getAttribute('href'),q.solutionUrl);
        assert.equal(await card.locator('.solution a').getAttribute('target'),'_blank');
        await card.getByRole('button',{name:'多种思路',exact:true}).click();
        assert.equal(await card.locator('.methods li').count(),2);
      }
      const first=page.locator('.q-card').first();
      await first.locator(`[data-letter="${papers[id][0].answer}"]`).click();assert.match(await first.locator('.feedback').innerText(),/正确/);
      await page.selectOption('#viewSel','answers');assert.equal(await page.locator('.ans-cell').count(),25);
      await page.selectOption('#viewSel','single');await page.fill('#singleNo','1');
      await page.getByRole('button',{name:'全部详解',exact:true}).click();assert.equal(await page.locator('.solution a').count(),1);
      await page.screenshot({path:`tmp/amc8/${id}-desktop.png`});
      await page.setViewportSize({width:390,height:844});
      await page.screenshot({path:`tmp/amc8/${id}-mobile.png`});
      assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=window.innerWidth));
      await page.click('#modeToggle');
      assert.equal(await page.locator('.solution').count(),0);
      assert.equal(await page.getByRole('button',{name:'Hint',exact:true}).isDisabled(),true);
      assert.equal(await page.getByRole('button',{name:'延申拓展',exact:true}).isDisabled(),true);
      await page.click('#modeToggle');await page.setViewportSize({width:1440,height:900});await page.selectOption('#viewSel','list');
    }
    // Same-year Kangaroo data and controls retain their independent behavior.
    await page.selectOption('#gradeSel','5-6');await page.selectOption('#yearSel','2025-g5-6');
    assert.equal(await page.locator('.q-card').count(),30);
    const old=page.locator('.q-card').first();assert.equal(await old.getByRole('button',{name:'Hint',exact:true}).isDisabled(),false);
    await old.getByRole('button',{name:'Hint',exact:true}).click();assert.equal(await old.locator('.hint li').count(),3);
    assert.equal(await old.locator('.option.correct').count(),0);
    assert.deepEqual(errors,[]);console.log('PASS:',ids.join(', '),'— source keys, 25 crops each, links, disabled controls, practice mode, mobile layout and Kangaroo regression');
  } finally {await browser.close();}
})().catch(e=>{console.error(e);process.exitCode=1;});
