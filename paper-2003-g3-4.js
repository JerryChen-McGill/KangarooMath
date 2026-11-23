// Transcribed from the local 2003 Grade 3–4 paper; original figures are cropped to question images.
KANGAROO_DATA["2003-g3-4"] = [
  {
    "no": 1, "points": 3, "grade": "3-4",
    "text": "The picture shows the letter U drawn on grid paper. How many squares does the letter U cover?",
    "options": {"A":"10", "B":"8", "C":"11", "D":"13", "E":"12"}, "answer": "E",
    "title": "方格面积", "tags": ["面积", "图形识别"],
    "figure": "assets/2003-g3-4/q1.png", "figureAlt": "原卷方格纸上的 U 形图案",
    "hints": ["沿着方格线，把 U 形的灰色部分分成几块。", "可以按横行或竖列数格子，注意不要重复数底部。", "逐行数出的格数相加为 12。"],
    "solution": "沿方格线逐行数出 U 形覆盖的单位方格，并把各行的数量相加，共有 12 个方格。",
    "methods": ["按行数灰色方格，再把各行相加。", "把 U 形拆成左右两条竖边和底边，合并重叠处后计数。"],
    "tip": "让学生说明如何避免把 U 形底部重复计数。"
  },
  {
    "no": 2, "points": 3, "grade": "3-4",
    "text": "What is the result of 0 + 1 + 2 + 3 + 4 − 3 − 2 − 1 − 0?",
    "options": {"A":"0", "B":"2", "C":"4", "D":"10", "E":"16"}, "answer": "C",
    "title": "加减运算", "tags": ["数与运算", "运算顺序"],
    "hints": ["先把加号前的数和减号后的数分别相加。", "正数部分的和是 10，减去的数之和是 6。", "10 − 6 = 4。"],
    "solution": "0 + 1 + 2 + 3 + 4 = 10，而 3 + 2 + 1 + 0 = 6，所以结果是 10 − 6 = 4。",
    "methods": ["分别计算加数和减数，再相减。", "把相同的 0、1、2、3 配对抵消，剩下 4。"],
    "tip": "引导学生观察正负项之间的抵消关系。"
  },
  {
    "no": 3, "points": 3, "grade": "3-4",
    "text": "The first car of the train, right behind the engine, contains 10 boxes. Each following car contains twice as many boxes as the car in front of it. How many boxes are there in the fifth car?",
    "options": {"A":"100", "B":"120", "C":"140", "D":"160", "E":"180"}, "answer": "D",
    "title": "倍数规律", "tags": ["数列规律", "乘法"],
    "figure": "assets/2003-g3-4/q3.png", "figureAlt": "火车车厢中的箱子数量每节加倍",
    "hints": ["从紧挨着火车头的第一节开始写出箱子数。", "每向后一节，都把上一节的数量乘 2。", "依次是 10、20、40、80、160。"],
    "solution": "第一节有 10 箱。连续加倍：第二节 20 箱，第三节 40 箱，第四节 80 箱，第五节 160 箱。",
    "methods": ["逐节列出数量：10、20、40、80、160。", "第五节是第一节连续加倍四次，即 10 × 2⁴ = 160。"],
    "tip": "强调“第五节”包含第一节在内，因此只加倍四次。"
  },
  {
    "no": 4, "points": 3, "grade": "3-4",
    "text": "Sophia is drawing kangaroos in a repeating color order: blue, green, red, yellow. What color will the seventeenth kangaroo be?",
    "options": {"A":"blue", "B":"green", "C":"red", "D":"black", "E":"yellow"}, "answer": "A",
    "title": "周期规律", "tags": ["数列规律", "逻辑推理"],
    "hints": ["每四只袋鼠的颜色会重复一次。", "把 17 除以 4，找出余数。", "17 = 4 × 4 + 1，所以第 17 只和第 1 只同色。"],
    "solution": "颜色每 4 只重复。17 ÷ 4 = 4 余 1，因此第 17 只对应每组的第 1 个颜色：blue。",
    "methods": ["写出前几个颜色并按四个一组循环。", "计算 17 除以周期长度 4 的余数。"],
    "tip": "让学生区分余数为 0 与余数为 1 时分别对应哪种颜色。"
  },
  {
    "no": 5, "points": 3, "grade": "3-4",
    "text": "In the teachers’ lounge there are 6 tables with 4 chairs each, 4 tables with 2 chairs each, and 3 tables with 6 chairs each. How many chairs are there altogether?",
    "options": {"A":"40", "B":"25", "C":"50", "D":"36", "E":"44"}, "answer": "C",
    "title": "乘法应用", "tags": ["应用题", "乘法"],
    "hints": ["先按桌子类型分别计算椅子数。", "三组分别是 6×4、4×2 和 3×6。", "24 + 8 + 18 = 50。"],
    "solution": "三组桌子分别配有 6 × 4 = 24、4 × 2 = 8、3 × 6 = 18 把椅子。总数为 24 + 8 + 18 = 50。",
    "methods": ["分别相乘后相加。", "把每一类桌椅画成分组图，再合计椅子。"],
    "tip": "提醒学生先按每张桌子的椅子数分类，再计算总数。"
  },
  {
    "no": 6, "points": 3, "grade": "3-4",
    "text": "In one of these pictures, there are three times as many hearts as other shapes. Which picture is it?",
    "options": {"A":"Picture A", "B":"Picture B", "C":"Picture C", "D":"Picture D", "E":"Picture E"}, "answer": "D",
    "title": "图形计数", "tags": ["计数", "逻辑推理"],
    "figure": "assets/2003-g3-4/q6.png", "figureAlt": "五组心形与其他图形的原卷选项图",
    "hints": ["逐个选项分别数心形和其他图形。", "“其他图形”包括菱形和三角形，要全部计入。", "D 图有 9 个心形和 3 个其他图形，正好是三倍。"],
    "solution": "在 D 图中有 9 个心形和 3 个其他图形，9 = 3 × 3。其他选项不满足心形数量是其他图形总数三倍。",
    "methods": ["逐项记录心形数与其他图形数，再比较倍数。", "把其他图形每三个分成一组，检查心形是否恰好对应一组。"],
    "tip": "确认学生把菱形和三角形都算作“其他图形”。"
  },
  {
    "no": 7, "points": 3, "grade": "3-4",
    "text": "A rectangle with dimensions 7 × 4 was outlined on grid paper. How many unit squares does a diagonal of this rectangle intersect?",
    "options": {"A":"8", "B":"9", "C":"10", "D":"11", "E":"12"}, "answer": "C",
    "title": "方格与对角线", "tags": ["几何", "计数"],
    "figure": "assets/2003-g3-4/q7.png", "figureAlt": "7 乘 4 方格矩形及其对角线格线示意图",
    "hints": ["对角线每经过一个内部格点，就会同时跨过一条竖线和一条横线。", "7 和 4 没有大于 1 的公因数。", "相交方格数为 7 + 4 − 1 = 10。"],
    "solution": "从左下到右上，若每次穿过一条格线会进入一个新方格。对角线共穿过 7 条竖格线间隔和 4 条横格线间隔，并在边界处合并计数一次，因此经过 7 + 4 − 1 = 10 个方格。",
    "methods": ["沿图中的对角线逐格数，共 10 格。", "使用矩形格数公式 m + n − gcd(m,n)；这里为 7 + 4 − 1 = 10。"],
    "tip": "可让学生在图上标出对角线穿过的方格，观察与长、宽的关系。"
  },
  {
    "no": 8, "points": 3, "grade": "3-4",
    "text": "The figure is made from identical cubes and weighs 189 grams. How much does one cube weigh?",
    "options": {"A":"29 grams", "B":"25 grams", "C":"21 grams", "D":"19 grams", "E":"17 grams"}, "answer": "C",
    "title": "立体计数", "tags": ["空间想象", "除法"],
    "figure": "assets/2003-g3-4/q8.png", "figureAlt": "由相同小正方体组成的立体图形",
    "hints": ["数清楚图形中一共有多少个小正方体。", "图中共有 9 个相同的正方体。", "用 189 克除以 9。"],
    "solution": "图形由 9 个相同的小正方体组成。每个小正方体重 189 ÷ 9 = 21 克。",
    "methods": ["先按底层和上层分别数出 9 个正方体，再平均分重量。", "用总重量 189 克除以正方体总数 9。"],
    "tip": "从不同方向数时，提醒学生把被遮挡但支撑上层的方块也算上。"
  },
  {
    "no": 9, "points": 4, "grade": "3-4",
    "text": "Philip wrote consecutive natural numbers starting with 3 until he had written 35 digits. What was the greatest number he wrote?",
    "options": {"A":"12", "B":"22", "C":"23", "D":"28", "E":"35"}, "answer": "C",
    "title": "连续数位计数", "tags": ["数位", "计数"],
    "hints": ["先写出个位数 3 到 9，一共用了多少位？", "剩下的位数由两位数提供，每个数占两位。", "还剩 28 位，也就是 14 个两位数：10 到 23。"],
    "solution": "从 3 到 9 共写了 7 个数字，占 7 位。还剩 35 − 7 = 28 位，可写 14 个两位数。由 10 开始数 14 个数，到 23 为止，所以最大数是 23。",
    "methods": ["先扣除 3 至 9 的 7 位，再每两位分给一个后续数。", "列出 10、11、…，数到第 14 个两位数。"],
    "tip": "注意题目统计的是写出的数字位数，不是写了多少个自然数。"
  },
  {
    "no": 10, "points": 4, "grade": "3-4",
    "text": "Anna fell asleep at 9:30 p.m. and woke at 6:45 a.m. Her little brother Peter slept 1 hour and 50 minutes longer. How long did Peter sleep?",
    "options": {"A":"10 hr 5 min", "B":"11 hr 35 min", "C":"11 hr 5 min", "D":"9 hr 5 min", "E":"8 hr 35 min"}, "answer": "C",
    "title": "经过时间", "tags": ["时间", "应用题"],
    "hints": ["先算 Anna 从晚上 9:30 到早上 6:45 的睡眠时间。", "她睡了 9 小时 15 分钟。", "再加 1 小时 50 分钟，得到 11 小时 5 分钟。"],
    "solution": "从 9:30 p.m. 到午夜是 2 小时 30 分钟；再到 6:45 a.m. 是 6 小时 45 分钟。Anna 共睡 9 小时 15 分钟。Peter 多睡 1 小时 50 分钟，因此睡了 11 小时 5 分钟。",
    "methods": ["分段计算跨过午夜的时间，再加 1 小时 50 分钟。", "把 9:30 p.m. 到 6:45 a.m. 写成 21:30 到次日 6:45。"],
    "tip": "提醒学生跨过午夜时要把两个时间段相加。"
  },
  {
    "no": 11, "points": 4, "grade": "3-4",
    "text": "A pattern is made of alternating black and white bars. There are 17 bars altogether, and both end bars are black. How many white bars are there?",
    "options": {"A":"9", "B":"16", "C":"7", "D":"8", "E":"15"}, "answer": "D",
    "title": "交替排列", "tags": ["数列规律", "计数"],
    "figure": "assets/2003-g3-4/q11.png", "figureAlt": "黑白相间排列的长条，首尾均为黑色",
    "hints": ["从黑色开始，按黑、白、黑、白依次排列。", "17 是奇数，首尾同色时黑条比白条多一条。", "(17 − 1) ÷ 2 = 8 条白条。"],
    "solution": "17 条交替排列，且首尾都是黑色，因此黑条比白条多 1 条。白条数为 (17 − 1) ÷ 2 = 8。",
    "methods": ["把前 16 条分成 8 组黑白条，最后一条是黑色。", "交替排列首尾同色时，首尾颜色的数量比另一种多 1。"],
    "tip": "让学生用颜色列表标出 17 个位置，再检查首尾的颜色。"
  },
  {
    "no": 12, "points": 4, "grade": "3-4",
    "text": "Jumping Kangaroo’s longest training jump was 55 dm 50 mm. In the final, he jumped 123 cm farther. How long was his jump in the final? (1 m = 10 dm, 1 dm = 10 cm, 1 cm = 10 mm)",
    "options": {"A":"6 m 78 cm", "B":"5 m 73 cm", "C":"5 m 55 cm", "D":"11 m 28 cm", "E":"7 m 23 cm"}, "answer": "A",
    "title": "长度单位换算", "tags": ["测量", "单位换算"],
    "hints": ["先把 55 dm 50 mm 都换成厘米。", "55 dm = 550 cm，50 mm = 5 cm。", "550 + 5 + 123 = 678 cm = 6 m 78 cm。"],
    "solution": "55 dm = 550 cm，50 mm = 5 cm。训练成绩是 555 cm；决赛多跳 123 cm，共 678 cm，也就是 6 m 78 cm。",
    "methods": ["统一换算成厘米后相加。", "先把 55 dm 50 mm 化成 5 m 55 cm，再加 1 m 23 cm。"],
    "tip": "统一单位后再运算，并检查最终答案的单位格式。"
  },
  {
    "no": 13, "points": 4, "grade": "3-4",
    "text": "Paul chose a number, subtracted 203 from it, and then added 2003. His final result was 20003. What number did Paul choose at the beginning?",
    "options": {"A":"23", "B":"17797", "C":"18203", "D":"21803", "E":"22209"}, "answer": "C",
    "title": "逆向运算", "tags": ["数与运算", "应用题"],
    "hints": ["把题目中的操作写成一个等式。", "先把 −203 和 +2003 合并。", "最后结果比原数大 1800，因此原数是 20003 − 1800。"],
    "solution": "设原数为 x。x − 203 + 2003 = 20003，所以 x + 1800 = 20003，得到 x = 18203。",
    "methods": ["列方程逆向求原数。", "先合并连续操作，知道最终结果比原数多 1800。"],
    "tip": "让学生用代回原式的方法检查答案。"
  },
  {
    "no": 14, "points": 4, "grade": "3-4",
    "text": "Barbara’s watch shows time in 24-hour format. What is the greatest possible sum of the digits shown by the time? In this problem, midnight may be written as 24:00.",
    "options": {"A":"24", "B":"36", "C":"19", "D":"25", "E":"23"}, "answer": "A",
    "title": "时间与数位", "tags": ["时间", "数位"],
    "hints": ["分别观察小时和分钟可以取到的最大数字组合。", "19:59 是一天中的一个有效时间。", "1 + 9 + 5 + 9 = 24。"],
    "solution": "在 24 小时制的有效时刻中，19:59 的数字和为 1 + 9 + 5 + 9 = 24。其余小时段的小时数字和更小；20:59 至 23:59 的小时数字和至多为 5，分钟部分至多为 14，总和不超过 19。午夜 24:00 的数字和为 6。因此最大值是 24。",
    "methods": ["按小时段分别求小时数字和的最大值，再加分钟部分最大值。", "比较 19:59、23:59 和 24:00 等边界时刻。"],
    "tip": "提醒学生 24:00 仅表示午夜，不能当成 24:59。"
  },
  {
    "no": 15, "points": 4, "grade": "3-4",
    "text": "Mark said, ‘If I had picked twice as many apples as I did, I would have 24 more apples than I have now.’ How many apples did Mark pick?",
    "options": {"A":"48", "B":"24", "C":"42", "D":"12", "E":"36"}, "answer": "B",
    "title": "倍数与差", "tags": ["应用题", "倍数关系"],
    "hints": ["把 Mark 实际摘到的苹果数看作一份。", "两倍比一倍多出的部分，正好等于原来的数量。", "这多出的部分是 24 个。"],
    "solution": "设 Mark 摘了 x 个。若他摘到两倍，就是 2x 个，比现在多 x 个。题目说多 24 个，所以 x = 24。",
    "methods": ["用方程 2x − x = 24。", "用线段图把现在的一份和假设的两份作比较。"],
    "tip": "突出“两倍比原数多一倍”，避免误把 24 再除以 2。"
  },
  {
    "no": 16, "points": 5, "grade": "3-4",
    "text": "Points A, B, C, and D lie on a straight line in that order. AC = 10 m, BD = 15 m, and AD = 22 m. What is the distance between B and C?",
    "options": {"A":"1 m", "B":"2 m", "C":"3 m", "D":"4 m", "E":"5 m"}, "answer": "C",
    "title": "线段长度", "tags": ["几何", "测量"],
    "figure": "assets/2003-g3-4/q16.png", "figureAlt": "直线上的 A、B、C、D 四点",
    "hints": ["把 AB、BC、CD 分别记成 x、y、z。", "AC 给出 x + y = 10，BD 给出 y + z = 15。", "AD = 22，因此 22 − 15 = AB = 7，BC = 10 − 7 = 3。"],
    "solution": "设 AB = x、BC = y、CD = z。由 AC 得 x + y = 10；由 BD 得 y + z = 15；由 AD 得 x + y + z = 22。前两式相加后减去第三式，得到 y = 3 m。",
    "methods": ["先由 AD − BD 求 AB = 22 − 15 = 7，再用 AC − AB 求 BC = 10 − 7 = 3。", "列出三段的三个方程并消去 x、z。"],
    "tip": "按点的顺序画出线段图，明确每个已知距离覆盖哪些小段。"
  },
  {
    "no": 17, "points": 5, "grade": "3-4",
    "text": "There are 29 students in a class. Twelve have a sister and 18 have a brother. Only Tania, Barbara, and Anna have no siblings. How many students have both a brother and a sister?",
    "options": {"A":"none", "B":"1", "C":"3", "D":"4", "E":"6"}, "answer": "D",
    "title": "集合与计数", "tags": ["逻辑推理", "计数"],
    "hints": ["先数有至少一位兄弟或姐妹的学生。", "29 人中有 3 人没有兄弟姐妹，因此这个人数是 26。", "把 12 + 18 中重复计算的交集减一次：12 + 18 − 26。"],
    "solution": "有兄弟或姐妹的学生共 29 − 3 = 26 人。把有姐妹的 12 人和有兄弟的 18 人相加时，既有兄弟又有姐妹的人被算了两次，所以交集人数为 12 + 18 − 26 = 4。",
    "methods": ["用集合交集公式：两组人数之和减去并集人数。", "画两个相交圆，先确定并集 26，再求重叠人数。"],
    "tip": "说明“有兄弟”和“有姐妹”两类可能重叠，不能直接相加。"
  },
  {
    "no": 18, "points": 5, "grade": "3-4",
    "text": "Daniel has 11 pieces of paper. He cuts some pieces into three parts and then has 29 pieces. How many pieces did he cut?",
    "options": {"A":"3", "B":"2", "C":"8", "D":"11", "E":"9"}, "answer": "E",
    "title": "变化与方程", "tags": ["应用题", "数与运算"],
    "hints": ["把一张纸剪成三片，会比原来多出几片？", "每剪一张，数量增加 2。", "总数增加 29 − 11 = 18，所以剪了 18 ÷ 2 张。"],
    "solution": "每把一张纸剪成三片，纸片总数从 1 变成 3，增加 2 张。总数增加 29 − 11 = 18 张，因此剪了 18 ÷ 2 = 9 张。",
    "methods": ["设剪了 x 张，列方程 11 + 2x = 29。", "把增加的 18 张平均分成每次增加的 2 张。"],
    "tip": "区分剪完后的三片与净增加的两片。"
  },
  {
    "no": 19, "points": 5, "grade": "3-4",
    "text": "John bought large, medium, and small cookies costing $4, $2, and $1 each. He bought 10 cookies for $16, with at least one of each kind. How many large cookies did he buy?",
    "options": {"A":"5", "B":"4", "C":"3", "D":"2", "E":"1"}, "answer": "E",
    "title": "整数方程", "tags": ["应用题", "逻辑推理"],
    "hints": ["先用 10 美元的总件数作为基准。", "相对每块 1 美元的小饼干，大饼干多 3 美元，中饼干多 1 美元。", "所以 3L + M = 6；且每种至少一块，只能 L = 1。"],
    "solution": "若 10 块都按小饼干计价，共 10 美元。每块大饼干多 3 美元，每块中饼干多 1 美元，因此 3L + M = 6。又因为三种饼干都至少买一块，L = 2 会迫使 M = 0，不符合条件；所以 L = 1（此时 M = 3、S = 6）。",
    "methods": ["设大、中、小饼干数量为 L、M、S，联立 L+M+S=10 与 4L+2M+S=16。", "先把所有饼干当作 1 美元，再分析大、中饼干带来的额外金额。"],
    "tip": "把“bought 3 kinds”按每一种至少买一块处理，并明确这个条件的作用。"
  },
  {
    "no": 20, "points": 5, "grade": "3-4",
    "text": "Christopher built the rectangular prism shown using red and blue cubes of equal size. The outer walls are red and all interior cubes are blue. How many blue cubes are there?",
    "options": {"A":"12", "B":"16", "C":"22", "D":"26", "E":"32"}, "answer": "A",
    "title": "立体内部计数", "tags": ["空间想象", "计数"],
    "figure": "assets/2003-g3-4/q20.png", "figureAlt": "红色外墙包围着蓝色内部小正方体的长方体",
    "hints": ["只计算不在长方体外表面的内部小正方体。", "从图中读出长、宽、高，再各去掉两层外墙。", "内部尺寸是 3 × 2 × 2。"],
    "solution": "图中长方体由 5 × 4 × 4 个小正方体组成。去掉六个外表面的红色外墙后，内部每个方向分别剩 5−2=3、4−2=2、4−2=2 个，因此蓝色小正方体有 3 × 2 × 2 = 12 个。",
    "methods": ["按内部三维尺寸直接相乘。", "先数每层内部的 3 × 2 个蓝色方块，再乘内部层数 2。"],
    "tip": "让学生指出每个方向都要从总长度中扣除两侧外墙。"
  },
  {
    "no": 21, "points": 5, "grade": "3-4",
    "text": "Jerry will have $10 left after buying 5 basketballs. If he buys 7 basketballs, he must borrow $22. How much does one basketball cost?",
    "options": {"A":"$11", "B":"$16", "C":"$22", "D":"$26", "E":"$32"}, "answer": "B",
    "title": "等量关系", "tags": ["应用题", "方程"],
    "hints": ["两种购买方式对应同一笔钱。", "从买 5 个改成买 7 个，多买 2 个，资金差额是 10 + 22 美元。", "2 个球共 32 美元，所以每个 16 美元。"],
    "solution": "买 5 个后余 10 美元；买 7 个时需借 22 美元。多买的 2 个球对应 10 + 22 = 32 美元，所以每个球 32 ÷ 2 = 16 美元。",
    "methods": ["比较两种情形，直接用资金差额除以多买的 2 个。", "设球价为 x、原有钱为 M，列 M−5x=10 与 7x−M=22。"],
    "tip": "用资金变化解释为什么差额要把 10 和 22 相加。"
  },
  {
    "no": 22, "points": 5, "grade": "3-4",
    "text": "Mark built a rectangular prism from three blocks, each made of four small cubes joined in different ways. The two colored blocks are shown. Which option is the third block, shown in white, with only two visible sides?",
    "options": {"A":"Block A", "B":"Block B", "C":"Block C", "D":"Block D", "E":"Block E"}, "answer": "D",
    "title": "立体拼组", "tags": ["空间想象", "图形识别"],
    "figure": "assets/2003-g3-4/q22.png", "figureAlt": "两个已知方块与五个候选方块的原卷立体图",
    "hints": ["先数出红色和绿色方块各自的四个小立方体。", "比较每个候选块从可见方向拼合后形成的表面轮廓。", "D 的三个横排方块和上方方块能补出白色部分。"],
    "solution": "把红、绿两块的可见面与长方体对应位置对齐后，检查各候选块的外轮廓和遮挡面。只有 D 的四个小立方体排列能填入剩余位置，并形成图示的两个可见面。",
    "methods": ["从正面和侧面分别比较候选块的轮廓。", "用四个单位方块摆出候选形状，再旋转到图中的朝向核对。"],
    "tip": "允许学生旋转积木，但提醒旋转不能改变相邻关系。"
  },
  {
    "no": 23, "points": 5, "grade": "3-4",
    "text": "Two pieces that formed the shaded region were cut from a square puzzle. Which two pieces were used?",
    "options": {"A":"1 and 3", "B":"2 and 4", "C":"2 and 3", "D":"1 and 4", "E":"3 and 4"}, "answer": "A",
    "title": "图形拼组", "tags": ["空间想象", "图形识别"],
    "figure": "assets/2003-g3-4/q23.png", "figureAlt": "四块候选拼片与方格中的阴影区域",
    "hints": ["先数阴影区域由多少个单位方格组成。", "旋转或翻转候选拼片，比较凹凸边界。", "第 1 块与第 3 块合并后正好补出阴影轮廓。"],
    "solution": "将候选拼片在脑中旋转并对照方格轮廓。第 1 块和第 3 块合起来覆盖阴影区域的全部单位方格，且没有重叠或空缺。",
    "methods": ["数方格后逐一尝试组合，再旋转拼片检查边界。", "先利用阴影区域的凹口排除不匹配的拼片，再核对剩余组合。"],
    "tip": "让学生说明旋转拼片后哪些边界特征保持不变。"
  },
  {
    "no": 24, "points": 5, "grade": "3-4",
    "text": "At a toy store, three dogs and two bears cost as much as four kangaroos. One dog and three bears cost the same amount. Which statement is true?",
    "options": {"A":"A dog costs twice as much as a bear.", "B":"A bear costs twice as much as a dog.", "C":"A dog and a bear cost the same.", "D":"A bear costs three times as much as a dog.", "E":"A dog costs three times as much as a bear."}, "answer": "B",
    "title": "等式推理", "tags": ["逻辑推理", "方程"],
    "hints": ["两组动物的总价都等于四只袋鼠的总价。", "把这两个总价相等的式子互相比较。", "3D + 2B = D + 3B，整理得到 B = 2D。"],
    "solution": "设狗、熊、袋鼠的价格分别为 D、B、K。由题意，3D + 2B = 4K，且 D + 3B = 4K。两式相等后消去 4K：3D + 2B = D + 3B，因此 2D = B。熊的价格是狗的两倍，选 B。",
    "methods": ["分别写出两种等价购买方案的总价，再相减。", "把共同的四只袋鼠总价当作同一个数，比较狗和熊的组合。"],
    "tip": "无需先求袋鼠的价格；比较相等的两边即可消去它。"
  }
];
