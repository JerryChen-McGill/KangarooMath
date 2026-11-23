// Transcribed from the local 2005 Grade 3–4 paper and solution slides; original figures are cropped to question images.
KANGAROO_DATA["2005-g3-4"] = [
  {
    "no":1,"points":3,"grade":"3-4","text":"A butterfly sat on a correctly solved problem. What number did it cover?",
    "options":{"A":"250","B":"400","C":"500","D":"910","E":"1800"},"answer":"C","title":"逆向计算","tags":["数与运算","应用题"],"figure":"assets/2005-g3-4/q1.png","figureAlt":"2005 − 205 = 1300 + 蝴蝶遮住的数",
    "hints":["先计算等式左边。","2005 − 205 = 1800。","1300 加上被遮住的数要等于 1800。"],"solution":"2005 − 205 = 1800，因此 1300 + □ = 1800，□ = 500。"
  },
  {
    "no":2,"points":3,"grade":"3-4","text":"At noon, the minute hand is in the position shown. What will its position be after 17 quarters of an hour?",
    "options":{"A":"Position A","B":"Position B","C":"Position C","D":"Position D","E":"Position E"},"answer":"A","title":"钟表与周期","tags":["时间","周期规律"],"figure":"assets/2005-g3-4/q5.png","figureAlt":"起始钟面以及五种候选分钟指针位置",
    "hints":["每过一刻钟，分针转过四分之一圈。","17 个一刻钟等于 4 圈再多 1 刻钟。","多出的 15 分钟后，分针指向 3。"],"solution":"17 刻钟 = 4 小时 15 分钟。转过 4 圈后回到原位，再过 15 分钟指向钟面上的 3，即选项 A。"
  },
  {
    "no":3,"points":3,"grade":"3-4","text":"Joan bought cookies that cost $3 each. She paid with $10 and received $1 in change. How many cookies did she buy?",
    "options":{"A":"2","B":"3","C":"4","D":"5","E":"6"},"answer":"B","title":"钱币应用","tags":["应用题","除法"],
    "hints":["先求 Joan 实际付出的金额。","她付出 10 美元，找回 1 美元。","9 ÷ 3 = 3 块饼干。"],"solution":"Joan 实际支付 10 − 1 = 9 美元。每块 3 美元，所以她买了 9 ÷ 3 = 3 块。"
  },
  {
    "no":4,"points":3,"grade":"3-4","text":"After the first whistle, 4 rows of monkeys formed with 4 monkeys in each row. After the second whistle they formed 8 rows. How many monkeys were in each row then?",
    "options":{"A":"1","B":"2","C":"3","D":"4","E":"5"},"answer":"B","title":"等量分组","tags":["乘法","除法"],
    "hints":["两次排列中的猴子总数相同。","第一次有 4 × 4 = 16 只。","把 16 只平均分成 8 行。"],"solution":"猴子总数是 4 × 4 = 16。重新排成 8 行后，每行有 16 ÷ 8 = 2 只。"
  },
  {
    "no":5,"points":3,"grade":"3-4","text":"Eva lives with her parents, her brother, one dog, two cats, two parrots, and four fish. How many legs do they have altogether?",
    "options":{"A":"22","B":"24","C":"28","D":"32","E":"40"},"answer":"B","title":"分类计数","tags":["计数","逻辑推理"],
    "hints":["分别计算人和每种动物的腿数。","鱼没有腿；鹦鹉有两条腿。","4 人 8 条、狗 4 条、猫 8 条、鹦鹉 4 条，共 24 条。"],"solution":"4 个人有 8 条腿，狗有 4 条，两只猫有 8 条，两只鹦鹉有 4 条，鱼没有腿。总数为 8 + 4 + 8 + 4 = 24。","issue":"解题幻灯片将 24 标成选项 C；原卷 C 为 28，按题目条件计算应选 B（24）。"
  },
  {
    "no":6,"points":3,"grade":"3-4","text":"John's chocolate bar has 1 cm × 1 cm square pieces. He has eaten some corner pieces as shown. How many pieces remain?",
    "options":{"A":"66","B":"64","C":"62","D":"60","E":"58"},"answer":"D","title":"方格面积","tags":["面积","计数"],"figure":"assets/2005-g3-4/q6.png","figureAlt":"11 乘 6 方格巧克力及右下角被吃掉的部分",
    "hints":["先求整块巧克力有多少个小方格。","长方形共有 11 × 6 个方格。","吃掉的缺口是 3 × 2 = 6 格。"],"solution":"整块有 11 × 6 = 66 格。缺口长 3 格、宽 2 格，共 6 格，因此还剩 66 − 6 = 60 格。"
  },
  {
    "no":7,"points":3,"grade":"3-4","text":"Two signs show the maximum vehicle width and weight allowed on a bridge. Which truck may cross?",
    "options":{"A":"315 cm, 4400 kg","B":"330 cm, 4250 kg","C":"325 cm, 4400 kg","D":"330 cm, 4200 kg","E":"325 cm, 4250 kg"},"answer":"E","title":"条件筛选","tags":["逻辑推理","测量"],"figure":"assets/2005-g3-4/q7.png","figureAlt":"桥梁限宽 325 cm、限重 4300 kg 的交通标志",
    "hints":["车辆的宽度和重量都不能超过标志上的上限。","先排除宽度超过 325 cm 的卡车。","E 的宽度 325 cm、重量 4250 kg，两个条件都满足。"],"solution":"卡车必须同时满足宽度不超过 325 cm、重量不超过 4300 kg。只有 E（325 cm，4250 kg）符合。"
  },
  {
    "no":8,"points":3,"grade":"3-4","text":"Seven boys paid the same amount for a trip. Their total is a three-digit number of the form 3□0. What is its middle digit?",
    "options":{"A":"3","B":"4","C":"5","D":"6","E":"7"},"answer":"C","title":"整除与数位","tags":["数位","数论"],
    "hints":["总金额既是 7 的倍数，也是 10 的倍数。","它在 300 到 390 之间，且个位是 0。","唯一符合条件的是 350。"],"solution":"总金额是 7 个相同金额的和，所以是 7 的倍数；它又是 3□0，即 10 的倍数，在 300–390 之间。唯一同时是 7 和 10 的倍数的是 350，中间数字为 5。"
  },
  {
    "no":9,"points":4,"grade":"3-4","text":"What is the smallest possible number of children in a family if every child has at least one brother and at least one sister?",
    "options":{"A":"2","B":"3","C":"4","D":"5","E":"6"},"answer":"C","title":"逻辑计数","tags":["逻辑推理","计数"],
    "hints":["每个孩子都需要至少一位异性手足。","至少要有一个男孩和一个女孩。","一个男孩还需要另一个男孩作兄弟，一个女孩也需要另一女孩作姐妹。"],"solution":"要让男孩有兄弟，至少需要 2 个男孩；要让女孩有姐妹，至少需要 2 个女孩。因此最少有 4 个孩子。"
  },
  {
    "no":10,"points":4,"grade":"3-4","text":"Which number is even, has four different digits, has a hundreds digit twice the ones digit, and has a tens digit greater than the thousands digit?",
    "options":{"A":"1246","B":"3874","C":"4683","D":"4874","E":"8462"},"answer":"B","title":"数位条件","tags":["数位","逻辑推理"],
    "hints":["先排除奇数和有重复数字的选项。","再检查百位是否是个位的两倍。","3874 满足全部条件。"],"solution":"A 的百位不是个位的两倍；C 是奇数；D 有重复数字；E 的十位不大于千位。只有 3874 是偶数、各位不同，且 8=2×4、7>3。"
  },
  {
    "no":11,"points":4,"grade":"3-4","text":"A square sheet of paper was cut into three pieces. Two pieces are shown. Which option is the third piece?",
    "options":{"A":"Piece A","B":"Piece B","C":"Piece C","D":"Piece D","E":"Piece E"},"answer":"B","title":"图形拼合","tags":["空间想象","图形识别"],"figure":"assets/2005-g3-4/q11.png","figureAlt":"正方形纸的两块已知碎片及五种候选第三块",
    "hints":["比较碎片的边长和斜边角度。","三块拼好后，外轮廓必须是正方形。","B 的正方形能与两条斜边和直角边严密拼合。"],"solution":"把两块已知碎片放在正方形对应位置，剩余轮廓是一个正方形。只有 B 的方块能填满这个轮廓，且不留空隙。"
  },
  {
    "no":12,"points":4,"grade":"3-4","text":"An elevator can carry at most 150 kg. Four friends weigh 60 kg, 80 kg, 80 kg, and 80 kg. What is the least number of trips to carry all four to the top floor?",
    "options":{"A":"1","B":"2","C":"3","D":"4","E":"7"},"answer":"C","title":"重量分组","tags":["逻辑推理","应用题"],
    "hints":["任意两位 80 kg 的朋友不能同乘。","60 kg 的朋友可以和一位 80 kg 的朋友同乘。","其余两位 80 kg 的朋友各坐一趟，共 3 趟。"],"solution":"两位 80 kg 的朋友合重 160 kg，超过上限；60 kg 可与一位 80 kg 同乘（共 140 kg）。另外两位 80 kg 的朋友分别乘坐，因此至少需要 3 趟。"
  },
  {
    "no":13,"points":4,"grade":"3-4","text":"Ala has $24 and Barb has $66. Sophia has as much less than Barb as she has more than Ala. How much money does Sophia have?",
    "options":{"A":"$33","B":"$35","C":"$42","D":"$45","E":"$48"},"answer":"D","title":"等距与中点","tags":["数与运算","逻辑推理"],
    "hints":["Sophia 到 Ala 和 Barb 的距离相同。","她的金额是 24 与 66 的中点。","(24 + 66) ÷ 2 = 45。"],"solution":"Sophia 比 Ala 多的钱等于她比 Barb 少的钱，所以她在两人金额的正中间：(24 + 66) ÷ 2 = 45 美元。"
  },
  {
    "no":14,"points":4,"grade":"3-4","text":"Eight kangaroos occupy cells in the table. What is the least number that must be moved to empty cells so that every row and column contains exactly two kangaroos?",
    "options":{"A":"4","B":"3","C":"2","D":"1","E":"0"},"answer":"D","title":"行列计数","tags":["逻辑推理","计数"],"figure":"assets/2005-g3-4/q14.png","figureAlt":"八只袋鼠位于 4 乘 4 方格中的原始位置",
    "hints":["统计每行、每列当前的袋鼠数。","寻找一行和一列都多出一只的交叉格。","把第 2 行第 3 列的袋鼠移到第 4 行第 2 列即可。"],"solution":"只需移动一只：把第 2 行第 3 列的袋鼠移到第 4 行第 2 列。这样每行和每列都恰有两只；零次移动不满足要求，因此最少为 1。"
  },
  {
    "no":15,"points":4,"grade":"3-4","text":"A sack has a hole, so half of its sand spills out on every trip from the river to the house. How many trips are needed to deliver four full sacks of sand?",
    "options":{"A":"4","B":"5","C":"6","D":"7","E":"8"},"answer":"E","title":"倍数与损耗","tags":["应用题","倍数关系"],
    "hints":["每趟到达时只剩装袋时的一半。","要交付一袋的量，需要出发时装两袋的量。","四袋目标量需要准备八袋量，因此要走 8 趟。"],"solution":"每趟只运到一半的装载量。要送达相当于 4 满袋的沙子，出发时需装入 2×4=8 满袋的沙子，因此要走 8 趟。"
  },
  {
    "no":16,"points":4,"grade":"3-4","text":"Adam solves 5 problems each day and Brad solves 2 each day. After how many days will Brad have solved as many problems as Adam solves in 4 days?",
    "options":{"A":"5 days","B":"7 days","C":"8 days","D":"10 days","E":"20 days"},"answer":"D","title":"乘法应用","tags":["应用题","乘法"],
    "hints":["先求 Adam 四天解出的题数。","Adam 解出 4 × 5 = 20 题。","Brad 每天解 2 题，20 ÷ 2 = 10 天。"],"solution":"Adam 在 4 天解 4×5=20 题。Brad 每天解 2 题，解 20 题需要 20÷2=10 天。"
  },
  {
    "no":17,"points":5,"grade":"3-4","text":"There were 9 pieces of paper. Some were cut into three pieces, leaving 15 pieces altogether. How many original pieces were cut?",
    "options":{"A":"2","B":"3","C":"4","D":"5","E":"6"},"answer":"B","title":"变化与计数","tags":["应用题","数与运算"],
    "hints":["每剪一张纸，纸片总数增加多少？","一张变成三张，净增加 2 张。","总数增加 15−9=6，所以剪了 3 张。"],"solution":"每剪一张并分成三片，纸片总数净增加 2。总数增加了 15−9=6，因此剪了 6÷2=3 张。"
  },
  {
    "no":18,"points":5,"grade":"3-4","text":"Using 6 matches, one rectangle with perimeter 6 matches can be made. How many different rectangles with perimeter 14 matches can be made using 14 matches?",
    "options":{"A":"2","B":"3","C":"4","D":"6","E":"12"},"answer":"B","title":"周长与整数配对","tags":["几何","计数"],"figure":"assets/2005-g3-4/q18.png","figureAlt":"用 6 根火柴组成周长为 6 根火柴的长方形示例",
    "hints":["长方形的长和宽都是整根火柴的长度。","周长 14 表示长与宽之和是 7。","不计旋转重复，正整数对只有 1+6、2+5、3+4。"],"solution":"若长、宽分别由 a、b 根火柴组成，2a+2b=14，因此 a+b=7。不同的无序正整数对为 (1,6)、(2,5)、(3,4)，共 3 种。"
  },
  {
    "no":19,"points":5,"grade":"3-4","text":"A picture frame is made of wood pieces of equal width. Its inside perimeter is 8 dm less than its outside perimeter. What is the width of the frame?",
    "options":{"A":"1 dm","B":"2 dm","C":"4 dm","D":"8 dm","E":"It depends on the picture"},"answer":"A","title":"周长差","tags":["几何","测量"],"figure":"assets/2005-g3-4/q19.png","figureAlt":"等宽木框的内外周长示意图",
    "hints":["比较木框内外周长的差。","四个角各让长和宽的边界多出一段框宽。","周长差为 8 倍框宽，所以宽度是 1 dm。"],"solution":"内外周长的差由四边各两段框宽组成，共 8 段框宽。8 dm ÷ 8 = 1 dm。"
  },
  {
    "no":20,"points":5,"grade":"3-4","text":"A trunk contains 5 chests, each chest contains 3 boxes, and each box holds 10 gold coins. Everything is locked. What is the least number of locks to open to take out 50 coins?",
    "options":{"A":"5","B":"6","C":"7","D":"8","E":"9"},"answer":"D","title":"分层计数","tags":["逻辑推理","应用题"],
    "hints":["先打开 trunk，再打开装硬币的 chest。","一个 chest 中的三个箱子一共只有 30 枚硬币。","还需另一个 chest 和其中两个箱子，共 8 把锁。"],"solution":"先开 trunk 和第一个 chest，再开其中 3 个箱子，可取 30 枚。还需开第二个 chest 及其中 2 个箱子，取出 20 枚。共开 1+1+3+1+2=8 把锁。"
  },
  {
    "no":21,"points":5,"grade":"3-4","text":"A 16 m by 20 m rectangular garden contains six identical gray flowerbeds as shown. What is the perimeter of each flowerbed?",
    "options":{"A":"20 m","B":"22 m","C":"24 m","D":"26 m","E":"28 m"},"answer":"C","title":"长方形周长","tags":["几何","测量"],"figure":"assets/2005-g3-4/q21.png","figureAlt":"20 m 乘 16 m 花园内六块相同的灰色花坛",
    "hints":["图中两段相同的花坛长度拼起来等于 16 m。","每块花坛长 8 m；花园横向 20 m 扣去两块花坛长度。","宽为 20−8−8=4 m，周长为 2×(8+4)。"],"solution":"图中两段花坛长度合起来是 16 m，所以每块花坛长 8 m。花园横向长 20 m，扣除左右两块花坛各 8 m，得到花坛宽 4 m。每块的周长为 2×(8+4)=24 m。"
  },
  {
    "no":22,"points":5,"grade":"3-4","text":"Mike chose a three-digit number and a two-digit number. Their difference is 989. What is their sum?",
    "options":{"A":"1001","B":"1010","C":"2005","D":"1000","E":"1009"},"answer":"E","title":"数的范围","tags":["数与运算","逻辑推理"],
    "hints":["三位数不超过 999，两位数至少是 10。","要让差达到 989，只能取三位数最大、两位数最小。","999−10=989，和为 999+10。"],"solution":"三位数减两位数等于 989。最小两位数是 10；要达到该差，三位数只能是 999。两数之和为 999+10=1009。"
  },
  {
    "no":23,"points":5,"grade":"3-4","text":"Five cards show 5, 1, 4, 3, 2 and must be reordered to 1, 2, 3, 4, 5. Each move switches any two cards. What is the least number of moves?",
    "options":{"A":"2","B":"3","C":"4","D":"5","E":"6"},"answer":"B","title":"排列与交换","tags":["排列组合","逻辑推理"],"figure":"assets/2005-g3-4/q23.png","figureAlt":"五张卡片的初始顺序和目标顺序",
    "hints":["把每张卡片从当前位置连到它应该去的位置。","会形成一个三张卡片的循环和一个两张卡片的循环。","长度为 3 和 2 的循环分别需要 2 次和 1 次交换，共 3 次。"],"solution":"初始位置对应的错位循环是 (1 5 2) 和 (3 4)。长度为 3 的循环需 2 次交换，长度为 2 的循环需 1 次，共 3 次。"
  },
  {
    "no":24,"points":5,"grade":"3-4","text":"Which cube has the plan shown in the picture?",
    "options":{"A":"Cube A","B":"Cube B","C":"Cube C","D":"Cube D","E":"Cube E"},"answer":"E","title":"正方体展开图","tags":["空间想象","图形识别"],"figure":"assets/2005-g3-4/q24.png","figureAlt":"带黑色格子的正方体展开图与五种候选立方体",
    "hints":["先找展开图中完整黑色的面。","折成立方体后，黑白格图案会出现在相对面。","只有 E 的侧面能与展开图折叠后的棋盘图案一致。"],"solution":"折叠展开图后，侧面会形成黑白相间的图案，且与一个完整黑面相对。A–D 的可见面配置不匹配；E 符合展开图的相邻与相对面关系。"
  }
];

const TEACHING_2005_G34 = {
  1: [["把已知的 2005−205 先算出，再从结果倒推被遮住的数。", "将 1300+□=2005−205 写成等式并求 □。"], "检查减法与加法的先后，代回原式验证。"],
  2: [["把 17 个一刻钟换成分钟。", "先扣除整圈钟面，剩下的一刻钟转到 3。"], "钟面转满一圈会回到原方向，注意只看余下的转动。"],
  3: [["先用付款金额减找零，求实际花费。", "再用实际花费除以每块饼干的价格。"], "付款额不是商品总价，先扣除找零。"],
  4: [["先求猴子总数，重新排队不改变总数。", "把总数平均分到 8 行。"], "重排前后总数守恒。"],
  5: [["先分别数人和每种动物的腿。", "鱼不算腿，鹦鹉是两条腿。"], "先分类再计数，避免把金鱼算成四足动物。"],
  6: [["把整块巧克力看成 11 列、6 行的小格。", "用总格数减去被吃掉的角落格数。"], "角落缺口可能由两个长方形组成，检查图示格数。"],
  7: [["卡车要同时满足限宽和限重。", "逐个检查选项是否两个条件都达标。"], "一个条件合格不够，桥梁标志给出的是两个上限。"],
  8: [["总金额是 7 人等额付款的倍数。", "在 300 到 390 之间找同时以 0 结尾且能被 7 整除的数。"], "三位数中间数字可由唯一可能的总金额确定。"],
  9: [["男孩需要至少一个兄弟，女孩需要至少一个姐妹。", "分别至少安排两名男孩和两名女孩。"], "题目对每个孩子都提出条件，不要只满足其中一种性别。"],
  10: [["偶数要求个位是偶数。", "逐项核对数字互异、百位与个位的倍数关系、十位与千位大小。"], "可以先用最容易检验的奇偶性和数字互异排除选项。"],
  11: [["把已知两块放回正方形，描出缺口边界。", "旋转候选碎片，比较边长和凹凸位置。"], "拼片旋转后边界必须逐段吻合，面积相同还不够。"],
  12: [["两个 80 kg 的人不能同乘。", "60 kg 的人可与一位 80 kg 的人同乘。"], "先找容量限制给出的最少趟数下界，再构造可行安排。"],
  13: [["Sophia 与两人的金额差相等。", "她的金额是 24 与 66 的中点。"], "“比 A 多多少、比 B 少多少相同”意味着位于中点。"],
  14: [["先数每行、每列当前有几只袋鼠。", "把一只从超额位置移到同时缺额的行列交点。"], "移动一只最多修正一个超额行和一个缺额行，先检查能否一次完成。"],
  15: [["每次装满的沙子只有一半能送到。", "要送达 4 满袋，出发时需装入两倍的沙子。"], "把损耗比例作用于每一趟的装载量，而非趟数的一半。"],
  16: [["先算 Adam 四天解题总数。", "用这个总数除以 Brad 每天的数量。"], "比较的是累计题数，不是两人每天的速度差。"],
  17: [["每把一张纸剪成三片，总片数净增两片。", "用总增量除以每次增加的片数。"], "一张变三张是增加两张，不是增加三张。"],
  18: [["长和宽以火柴根数计，周长是两倍的长加宽。", "把长宽视为无序正整数对，且和为 7。"], "交换长宽不算不同的长方形。"],
  19: [["每条边的内外平行边相差一个框宽。", "四边合计有 8 个框宽的差。"], "内外周长都包括长和宽各两次。"],
  20: [["先打开树干锁，才能取出里面的箱子。", "凑够五盒金币时，最少需要打开两个装箱并取出其中五个小盒。"], "按容器层级列锁，未打开的上层锁会挡住下层。"],
  21: [["花坛宽度可由花园总面积与已知长宽关系推出。", "用花园高度和花朵区面积求总高度，再从总面积求总宽度。"], "看清 2 m 和 3 m 分别标在哪条边上，再分割矩形面积。"],
  22: [["两数差 989，三位数最大为 999。", "两位数至少为 10，因此只能取 10 才不超过 999。"], "用范围而非猜数，确定差为 989 的数对。"],
  23: [["把每张卡从当前位置连到目标位置，找循环。", "长度为 k 的循环需要 k−1 次交换。"], "固定在正确位置的卡不需要移动。"],
  24: [["先找完整黑面及带方格的相邻面。", "折叠展开图，排除相对关系或方格方向不可能的候选。"], "可见面相邻关系比单独看颜色更能排除错误立方体。"]
};
KANGAROO_DATA["2005-g3-4"].forEach(q => {
  const teaching = TEACHING_2005_G34[q.no];
  q.methods = teaching[0];
  q.tip = teaching[1];
});
