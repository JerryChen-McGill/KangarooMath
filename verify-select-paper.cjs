module.exports = async function selectPaper(page, id) {
  const grade = id === 'all' ? 'all' : await page.evaluate(id => KANGAROO_DATA[id][0].grade, id);
  await page.selectOption('#gradeSel', grade);
  if (id !== 'all') await page.selectOption('#yearSel', id);
};
