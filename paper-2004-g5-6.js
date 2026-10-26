// Source: US Math Kangaroo G5–6, with local original-paper figures.
KANGAROO_DATA["2004-g5-6"] = [
  {
    "no": 1,
    "points": 3,
    "grade": "5-6",
    "text": "1000 − 100 − 10 − 17 = ?",
    "options": {
      "A": "111",
      "B": "900",
      "C": "909",
      "D": "990",
      "E": "999"
    },
    "answer": null,
    "title": "算术 连减 运算顺序",
    "tags": [
      "算术",
      "连减",
      "运算顺序"
    ],
    "hints": [
      "先做第一步减法。",
      "按照从左到右的顺序继续减。",
      "1000−100−10−17=873，与给出的选项不符。"
    ],
    "solution": "1000 − 100 − 10 − 17 = 873. None of the printed choices equals 873. The published key lists C (909).",
    "methods": [
      "Group the subtracted numbers first: 100+10+17=127, and 1000−127=873."
    ],
    "tip": "Ask students to explain their reasoning.",
    "sourceAnswer": "C",
    "issue": "原卷算式结果为 873，但五个选项均不匹配；答案表标 C（909），本题不自动判分。"
  },
  {
    "no": 2,
    "points": 3,
    "grade": "5-6",
    "text": "Caroline fills a table with digits 1, 2, 3 and 4, each exactly once in every row and column. Which digit goes in the cell marked x?",
    "options": {
      "A": "1",
      "B": "2",
      "C": "3",
      "D": "4",
      "E": "Cannot be determined"
    },
    "answer": "C",
    "title": "表格 数字排列 逻辑",
    "tags": [
      "表格",
      "数字排列",
      "逻辑"
    ],
    "hints": [
      "先检查x所在行已经出现哪些数字。",
      "再检查x所在列。",
      "只保留行列都尚未出现的数字。"
    ],
    "solution": "The second column already contains 1, 3 and 2, so its top cell is 4. The top row now contains 1, 4 and 2; therefore x = 3.",
    "methods": [
      "Use exclusion markings in the candidate cell."
    ],
    "tip": "Ask students to explain their reasoning.",
    "figure": "assets/2004-g5-6/q2.png",
    "figureAlt": "2004 Grade 5–6 question 2: original figure"
  },
  {
    "no": 3,
    "points": 3,
    "grade": "5-6",
    "text": "(10 × 100) × (20 × 80) = ?",
    "options": {
      "A": "20,000 × 80,000",
      "B": "2000 × 8000",
      "C": "2000 × 80,000",
      "D": "20,000 × 8000",
      "E": "2000 × 800"
    },
    "answer": "E",
    "title": "乘法 结合律",
    "tags": [
      "乘法",
      "结合律"
    ],
    "hints": [
      "先计算两个括号。",
      "也可以将因子交换组合。",
      "原式等于1,600,000，逐项检验选项。"
    ],
    "solution": "10×100=1000 and 20×80=1600, so the original equals 1,600,000. Among the choices, E gives 2000×800=1,600,000.",
    "methods": [
      "Regroup 10×20 and 100×80, then compare products."
    ],
    "tip": "Ask students to explain their reasoning."
  },
  {
    "no": 4,
    "points": 3,
    "grade": "5-6",
    "text": "360,000 seconds is how many hours?",
    "options": {
      "A": "3 hours",
      "B": "6 hours",
      "C": "8.5 hours",
      "D": "10 hours",
      "E": "more than 90 hours"
    },
    "answer": "E",
    "title": "时间 单位换算",
    "tags": [
      "时间",
      "单位换算"
    ],
    "hints": [
      "一分钟有多少秒？",
      "一小时有多少秒？",
      "用360000除以3600。"
    ],
    "solution": "There are 60×60=3600 seconds per hour. 360000÷3600=100 hours, which is more than 90 hours.",
    "methods": [
      "Cancel two zeros after dividing by 3600."
    ],
    "tip": "Ask students to explain their reasoning."
  },
  {
    "no": 5,
    "points": 3,
    "grade": "5-6",
    "text": "What is the remainder when 20042003 is divided by 2004?",
    "options": {
      "A": "0",
      "B": "1",
      "C": "2",
      "D": "3",
      "E": "2003"
    },
    "answer": "E",
    "title": "余数 大数 数位",
    "tags": [
      "余数",
      "大数",
      "数位"
    ],
    "hints": [
      "观察数字可以拆成哪两个部分。",
      "找一个2004的整数倍。",
      "20042003=2004×10000+2003。"
    ],
    "solution": "The printed number appears as 20042003 (the concatenation of 2004 and 2003). It equals 2004×10000+2003, so the remainder upon division by 2004 is 2003. Official answer E.",
    "methods": [
      "Use quotient-and-remainder decomposition."
    ],
    "tip": "Ask students to explain their reasoning."
  },
  {
    "no": 6,
    "points": 3,
    "grade": "5-6",
    "text": "Which sheet placed over the pictured sheet produces an entirely black rectangle?",
    "options": {
      "A": "Figure A",
      "B": "Figure B",
      "C": "Figure C",
      "D": "Figure D",
      "E": "Figure E"
    },
    "answer": "D",
    "title": "覆盖 黑白方格 逻辑",
    "tags": [
      "覆盖",
      "黑白方格",
      "逻辑"
    ],
    "hints": [
      "观察底图哪些格子是透明的。",
      "透明部分必须由上层黑色格子补齐。",
      "逐个检查候选片能否补齐全部透明格。"
    ],
    "solution": "Each transparent square must be covered by black in the overlay, while already-black locations impose no restriction. Compare each candidate's black pattern with every transparent position. The source key selects D.",
    "methods": [
      "Use a transparent tracing sheet or a 0–1 grid."
    ],
    "tip": "Ask students to explain their reasoning.",
    "figure": "assets/2004-g5-6/q6.png",
    "figureAlt": "2004 Grade 5–6 question 6: original figure"
  },
  {
    "no": 7,
    "points": 3,
    "grade": "5-6",
    "text": "Which of these is NOT a factor of 2004?",
    "options": {
      "A": "3",
      "B": "4",
      "C": "6",
      "D": "8",
      "E": "12"
    },
    "answer": "D",
    "title": "数论 因数 整除",
    "tags": [
      "数论",
      "因数",
      "整除"
    ],
    "hints": [
      "什么叫一个数的因数？",
      "分别测试给定数能否整除2004。",
      "2004除以8有余数。"
    ],
    "solution": "2004÷3=668, ÷4=501, ÷6=334, and ÷12=167 are integers. But 2004÷8=250.5, so 8 is not a factor.",
    "methods": [
      "Use divisibility rules, especially for 3, 4, 8 and 12."
    ],
    "tip": "Ask students to explain their reasoning."
  },
  {
    "no": 8,
    "points": 3,
    "grade": "5-6",
    "text": "Three rabbits eat 73 carrots. The son eats 12; father eats 5 more than mother. How many does the mother eat?",
    "options": {
      "A": "27",
      "B": "28",
      "C": "31",
      "D": "33",
      "E": "56"
    },
    "answer": "B",
    "title": "兔子胡萝卜 分配 差量",
    "tags": [
      "兔子胡萝卜",
      "分配",
      "差量"
    ],
    "hints": [
      "先扣掉孩子吃的数量。",
      "父亲比母亲多吃5个。",
      "从两位家长总量中减去差，再平均分配。"
    ],
    "solution": "Parents together eat 73−12=61. Remove the father's extra five: 61−5=56, then share equally. Mother eats 56÷2=28 and father 33.",
    "methods": [
      "Draw equal bars for both parents with an extra 5 on the father's bar."
    ],
    "tip": "Ask students to explain their reasoning."
  },
  {
    "no": 9,
    "points": 3,
    "grade": "5-6",
    "text": "Nine bus stops are equally spaced. Distance stop 1 to stop 3 is 600 m. Find full route length.",
    "options": {
      "A": "1800 m",
      "B": "2100 m",
      "C": "2400 m",
      "D": "2700 m",
      "E": "3000 m"
    },
    "answer": "C",
    "title": "等间距车站 段数",
    "tags": [
      "等间距车站",
      "段数"
    ],
    "hints": [
      "第1站到第3站有几段？",
      "九站之间有几段间隔？",
      "每段300米，共8段。"
    ],
    "solution": "Stop 1 to stop 3 spans two intervals, so each is 600÷2=300 m. Nine stops create eight intervals. Route length =8×300=2400 m.",
    "methods": [
      "Draw nine dots connected by eight equal segments."
    ],
    "tip": "Ask students to explain their reasoning."
  },
  {
    "no": 10,
    "points": 3,
    "grade": "5-6",
    "text": "Evaluate 1 − (2 − (3 − (4 − 5))).",
    "options": {
      "A": "0",
      "B": "−3",
      "C": "−9",
      "D": "3",
      "E": "9"
    },
    "answer": "D",
    "title": "括号 运算顺序 负数",
    "tags": [
      "括号",
      "运算顺序",
      "负数"
    ],
    "hints": [
      "从最里面的括号计算。",
      "减去负数等于加正数。",
      "得到−1、4、−2，最后为3。"
    ],
    "solution": "Work from the innermost parentheses: 4−5=−1; 3−(−1)=4; 2−4=−2; 1−(−2)=3.",
    "methods": [
      "Use successive evaluation from inside out."
    ],
    "tip": "Ask students to explain their reasoning."
  },
  {
    "no": 11,
    "points": 4,
    "grade": "5-6",
    "text": "You are given two identical puzzle pieces and may not turn them over. Which figure cannot be formed?",
    "options": {
      "A": "Figure A",
      "B": "Figure B",
      "C": "Figure C",
      "D": "Figure D",
      "E": "Figure E"
    },
    "answer": "D",
    "title": "拼图 几何 旋转",
    "tags": [
      "拼图",
      "几何",
      "旋转"
    ],
    "hints": [
      "先确认两块图形完全相同。",
      "只能在平面内旋转，不能翻到背面。",
      "逐项检查边界朝向，寻找必须镜像才能组成的选项。"
    ],
    "solution": "Compare the orientations and boundaries of the two congruent puzzle pieces. Rotation is allowed but reflection (turning over) is not. The source answer key marks D as the impossible figure.",
    "methods": [
      "Try physical cutouts made from tracing paper, but do not flip them; distinguish rotation from reflection."
    ],
    "tip": "Encourage students to justify each step.",
    "figure": "assets/2004-g5-6/q11.png",
    "figureAlt": "2004 Grade 5–6 question 11: original figure"
  },
  {
    "no": 12,
    "points": 4,
    "grade": "5-6",
    "text": "Charles folds a sheet of paper in half, then repeats this four more times, and punches one hole through the folded sheet. How many holes appear after unfolding?",
    "options": {
      "A": "6",
      "B": "10",
      "C": "16",
      "D": "20",
      "E": "32"
    },
    "answer": "E",
    "title": "纸张 折叠 倍增",
    "tags": [
      "纸张",
      "折叠",
      "倍增"
    ],
    "hints": [
      "第一次折叠算不算在内？",
      "每次对折，层数变成原来的几倍？",
      "共折5次，计算2×2×2×2×2。"
    ],
    "solution": "There are five folds in all: the first fold plus four repetitions. Each fold doubles the number of paper layers. One punch through 2⁵ = 32 layers produces 32 holes after unfolding, assuming the punch does not lie on any fold line.",
    "methods": [
      "Draw a layer-count table: 1, 2, 4, 8, 16, 32."
    ],
    "tip": "Encourage students to justify each step.",
    "figure": "assets/2004-g5-6/q12.png",
    "figureAlt": "2004 Grade 5–6 question 12: original figure"
  },
  {
    "no": 13,
    "points": 4,
    "grade": "5-6",
    "text": "Different figures stand for different digits, and identical figures stand for the same digit. Find the digit represented by the square.",
    "options": {
      "A": "9",
      "B": "8",
      "C": "7",
      "D": "6",
      "E": "5"
    },
    "answer": "D",
    "title": "图形代数 竖式 数字",
    "tags": [
      "图形代数",
      "竖式",
      "数字"
    ],
    "hints": [
      "相同图形必须代表同一个数字。",
      "从个位开始判断可能的进位。",
      "结合十位、百位的条件排除数字，最后求方块。"
    ],
    "solution": "The source key gives D, meaning the square represents 6.",
    "methods": [
      "Assign a variable to each shape and inspect carrying in each column."
    ],
    "tip": "Encourage students to justify each step.",
    "figure": "assets/2004-g5-6/q13.png",
    "figureAlt": "2004 Grade 5–6 question 13: original figure"
  },
  {
    "no": 14,
    "points": 4,
    "grade": "5-6",
    "text": "Three apples and two oranges weigh 255 g; two apples and three oranges weigh 285 g. Find the combined weight of one apple and one orange.",
    "options": {
      "A": "110 g",
      "B": "108 g",
      "C": "105 g",
      "D": "104 g",
      "E": "102 g"
    },
    "answer": "B",
    "title": "天平 质量 关系式",
    "tags": [
      "天平",
      "质量",
      "关系式"
    ],
    "hints": [
      "两组水果数量互相交换了什么？",
      "把两次总重量相加。",
      "合计有5个苹果和5个橙子，除以5。"
    ],
    "solution": "Add the two given equations. Five apples and five oranges weigh 255 + 285 = 540 g. Divide by five: one apple and one orange together weigh 540 ÷ 5 = 108 g.",
    "methods": [
      "Use algebra a and o, or stack matching fruit icons in a bar model."
    ],
    "tip": "Encourage students to justify each step."
  },
  {
    "no": 15,
    "points": 4,
    "grade": "5-6",
    "text": "Thomas says the number is 9; Roman says it is prime; Andrew says it is even; Michael says it is 15. Exactly one of Thomas/Roman is true, and exactly one of Andrew/Michael is true. Find the number.",
    "options": {
      "A": "1",
      "B": "2",
      "C": "3",
      "D": "9",
      "E": "15"
    },
    "answer": "B",
    "title": "逻辑 真话 假话 素数",
    "tags": [
      "逻辑",
      "真话",
      "假话",
      "素数"
    ],
    "hints": [
      "把四个人的话分成两组。",
      "每一组只能有一句真话。",
      "逐个代入候选数，看看2是否满足两组条件。"
    ],
    "solution": "Test the choices. The number 2 is prime, so Roman is true, while Thomas (9) is false. It is even, so Andrew is true, while Michael (15) is false. Each pair has exactly one true statement. Other choices fail at least one pair.",
    "methods": [
      "Make a true/false table for each choice."
    ],
    "tip": "Encourage students to justify each step."
  },
  {
    "no": 16,
    "points": 4,
    "grade": "5-6",
    "text": "What is the minimum number of little squares to shade so the figure has at least one axis of symmetry?",
    "options": {
      "A": "1",
      "B": "2",
      "C": "3",
      "D": "4",
      "E": "5"
    },
    "answer": "B",
    "title": "轴对称 方格 补色",
    "tags": [
      "轴对称",
      "方格",
      "补色"
    ],
    "hints": [
      "先找可能的对称轴。",
      "对轴两边的方格逐对比较。",
      "只补涂缺少的对应方格，并寻找最少数量。"
    ],
    "solution": "Consider each possible vertical, horizontal and diagonal mirror axis. Count mismatched cells on opposite sides: for each unmatched shaded cell, shade its reflected partner. The published key gives B, two added cells. The exact cells cannot be identified from text without the grid image.",
    "methods": [
      "Fold a transparent copy along each candidate axis."
    ],
    "tip": "Encourage students to justify each step.",
    "figure": "assets/2004-g5-6/q16.png",
    "figureAlt": "2004 Grade 5–6 question 16: original figure"
  },
  {
    "no": 17,
    "points": 4,
    "grade": "5-6",
    "text": "One corner of a cube was cut off. Which net can be folded to make the resulting solid?",
    "options": {
      "A": "Figure A",
      "B": "Figure B",
      "C": "Figure C",
      "D": "Figure D",
      "E": "Figure E"
    },
    "answer": "E",
    "title": "立方体 展开图 截角",
    "tags": [
      "立方体",
      "展开图",
      "截角"
    ],
    "hints": [
      "截掉一个顶点会影响几个相邻的面？",
      "新出现的截面是什么形状？",
      "折起展开图，检查三个截角是否围在同一顶点附近。"
    ],
    "solution": "A cut-off corner affects three mutually adjacent faces and creates one triangular face. When folding the net, all three truncated corners must meet around the new triangle. The source key identifies E.",
    "methods": [
      "Use a paper cube with a marked corner; compare adjacency of faces."
    ],
    "tip": "Encourage students to justify each step.",
    "figure": "assets/2004-g5-6/q17.png",
    "figureAlt": "2004 Grade 5–6 question 17: original figure"
  },
  {
    "no": 18,
    "points": 4,
    "grade": "5-6",
    "text": "Four snails trace paths on identical rectangular tiles. Fin's path is 25 dm, Pin's 37 dm and Rin's 38 dm. How many decimeters is Tin's path?",
    "options": {
      "A": "27 dm",
      "B": "30 dm",
      "C": "35 dm",
      "D": "36 dm",
      "E": "40 dm"
    },
    "answer": "C",
    "title": "蜗牛 路径 图形长度",
    "tags": [
      "蜗牛",
      "路径",
      "图形长度"
    ],
    "hints": [
      "将每条路线分成横向和纵向线段。",
      "用其他三只蜗牛的已知总长度寻找单段长度。",
      "对Tin的线段分类计数，再求和。"
    ],
    "solution": "Count horizontal and vertical edge segments along the pictured trails, use the known three path lengths to infer the relevant tile dimensions, then add the segments for Tin. The published correct value is 35 dm (C). The exact routes are available only in the figure.",
    "methods": [
      "Label tile width and height and form length equations."
    ],
    "tip": "Encourage students to justify each step.",
    "figure": "assets/2004-g5-6/q18.png",
    "figureAlt": "2004 Grade 5–6 question 18: original figure"
  },
  {
    "no": 19,
    "points": 4,
    "grade": "5-6",
    "text": "On an island, Monday and Wednesday are rainy, Saturday is foggy, and all other days are sunny. For a 44-day vacation, which start day gives the most sunny days?",
    "options": {
      "A": "Monday",
      "B": "Wednesday",
      "C": "Thursday",
      "D": "Friday",
      "E": "Tuesday"
    },
    "answer": "C",
    "title": "周期 星期 晴天最多",
    "tags": [
      "周期",
      "星期",
      "晴天最多"
    ],
    "hints": [
      "44天可以拆成多少完整星期及余下几天？",
      "完整星期的晴天数与起点有关吗？",
      "让多出的两天都恰好是晴天。"
    ],
    "solution": "44 days = six complete weeks plus two days. Every six-week block has the same weather composition, regardless of start day. To maximize sunny days, choose two extra consecutive sunny days. Thursday and Friday are both sunny; starting Thursday gives both and is one of the choices. Answer C.",
    "methods": [
      "Draw a weekday weather cycle and slide a two-day window."
    ],
    "tip": "Encourage students to justify each step."
  },
  {
    "no": 20,
    "points": 4,
    "grade": "5-6",
    "text": "Two natural numbers sum to 77. Eight times the first equals six times the second. Find the larger number.",
    "options": {
      "A": "23",
      "B": "33",
      "C": "43",
      "D": "44",
      "E": "54"
    },
    "answer": "D",
    "title": "比例 数字和 倍数",
    "tags": [
      "比例",
      "数字和",
      "倍数"
    ],
    "hints": [
      "先将8a=6b约简。",
      "将两数表示成3份和4份。",
      "77分为7份，每份11。"
    ],
    "solution": "Let the numbers be a and b with a+b=77 and 8a=6b. Divide by 2: 4a=3b, so a:b=3:4. Seven equal parts total 77, so each part is 11. Numbers are 33 and 44; larger is 44.",
    "methods": [
      "Use a tape diagram with 3 and 4 equal parts."
    ],
    "tip": "Encourage students to justify each step."
  },
  {
    "no": 21,
    "points": 5,
    "grade": "5-6",
    "text": "How many positive divisors does 2 × 3 × 5 × 7 have?",
    "options": {
      "A": "4",
      "B": "14",
      "C": "16",
      "D": "17",
      "E": "210"
    },
    "answer": "C",
    "title": "因数个数 质数分解",
    "tags": [
      "因数个数",
      "质数分解"
    ],
    "hints": [
      "原式中有几个不同质因数？",
      "每个质因数在因数中可选择出现或不出现。",
      "四次二选一，总数2⁴。"
    ],
    "solution": "The number is the product of four distinct prime factors, each with exponent one. Every divisor independently either includes or excludes each factor, giving 2×2×2×2 = 16 divisors.",
    "methods": [
      "List subsets of {2,3,5,7}."
    ],
    "tip": "Encourage students to justify each step."
  },
  {
    "no": 22,
    "points": 5,
    "grade": "5-6",
    "text": "Ella and Ola have 70 mushrooms together. A fraction of Ella's mushrooms are brown and a fraction of Ola's mushrooms are white. Find Ella's mushroom count.",
    "options": {
      "A": "27",
      "B": "36",
      "C": "45",
      "D": "54",
      "E": "10"
    },
    "answer": null,
    "title": "蘑菇 比例 分数",
    "tags": [
      "蘑菇",
      "比例",
      "分数"
    ],
    "hints": [
      "两人的蘑菇总数是70。",
      "原卷中的两个分数条件缺失。",
      "仅靠总数无法唯一确定每人的数量。"
    ],
    "solution": "The published key lists B (36). The fraction conditions are missing from both the guide and the local original, so the stated information does not determine Ella's share.",
    "methods": [],
    "tip": "Encourage students to justify each step.",
    "figure": "assets/2004-g5-6/q22.png",
    "figureAlt": "2004 Grade 5–6 question 22: original figure",
    "sourceAnswer": "B",
    "issue": "本地原卷与文档均缺少两个分数条件，无法唯一确定答案；原答案表标 B（36），本题不自动判分。"
  },
  {
    "no": 23,
    "points": 5,
    "grade": "5-6",
    "text": "An 11-cell row has 7 in cell 1 and 6 in cell 9. Every three consecutive cells sum to 21. Find cell 2.",
    "options": {
      "A": "7",
      "B": "8",
      "C": "6",
      "D": "10",
      "E": "21"
    },
    "answer": "B",
    "title": "数列 三格和 周期",
    "tags": [
      "数列",
      "三格和",
      "周期"
    ],
    "hints": [
      "两组相邻三格求和相等，能推出什么？",
      "第9格与第3格相同吗？",
      "前三格合计21，已有7和6。"
    ],
    "solution": "If a+b+c=21 and b+c+d=21, subtracting gives a=d. Hence the sequence repeats every three positions. Cell 9 matches cell 3 and is 6. Cell 1 is 7, so cell 2 = 21−7−6 = 8.",
    "methods": [
      "Subtract consecutive window sums to reveal period three."
    ],
    "tip": "Encourage students to justify each step.",
    "figure": "assets/2004-g5-6/q23.png",
    "figureAlt": "2004 Grade 5–6 question 23: original figure"
  },
  {
    "no": 24,
    "points": 5,
    "grade": "5-6",
    "text": "A square is divided into small squares. What fraction of the shaded area is the unshaded area?",
    "options": {
      "A": "1/4",
      "B": "1/5",
      "C": "1/6",
      "D": "2/5",
      "E": "2/7"
    },
    "answer": "A",
    "title": "面积比 阴影 方格",
    "tags": [
      "面积比",
      "阴影",
      "方格"
    ],
    "hints": [
      "题目分母应是阴影面积还是总面积？",
      "数出未涂色和涂色的小方格数。",
      "用未涂色格数除以阴影格数，再约分。"
    ],
    "solution": "Count the same-size shaded and unshaded unit squares. The asked ratio is unshaded area ÷ shaded area, not unshaded ÷ whole square. The published answer is A, 1/4.",
    "methods": [
      "Pair four shaded units with one unshaded unit in a bar model."
    ],
    "tip": "Encourage students to justify each step.",
    "figure": "assets/2004-g5-6/q24.png",
    "figureAlt": "2004 Grade 5–6 question 24: original figure"
  },
  {
    "no": 25,
    "points": 5,
    "grade": "5-6",
    "text": "Two CDs cost the same originally. One is discounted 5%; the other increases 15%. Afterward they differ by $6. What is the cheaper CD's new price?",
    "options": {
      "A": "$1.50",
      "B": "$6.00",
      "C": "$28.50",
      "D": "$30.00",
      "E": "$34.50"
    },
    "answer": "C",
    "title": "百分比 涨价 降价",
    "tags": [
      "百分比",
      "涨价",
      "降价"
    ],
    "hints": [
      "两个CD原价相同。",
      "涨15%和降5%之间相差原价的多少百分比？",
      "20%对应6美元，求原价后打95折。"
    ],
    "solution": "Let original price be P. After changes the two prices are 0.95P and 1.15P. Their difference is 0.20P=$6, so P=$30. The cheaper new price is 0.95×30=$28.50.",
    "methods": [
      "Use a percentage bar model."
    ],
    "tip": "Encourage students to justify each step."
  },
  {
    "no": 26,
    "points": 5,
    "grade": "5-6",
    "text": "Consecutive natural numbers fill the pictured large square. Which number cannot be placed in the cell marked x?",
    "options": {
      "A": "128",
      "B": "256",
      "C": "81",
      "D": "121",
      "E": "400"
    },
    "answer": "A",
    "title": "方格 数字填充 规律",
    "tags": [
      "方格",
      "数字填充",
      "规律"
    ],
    "hints": [
      "先看方格中的数字增加方向。",
      "观察x所在位置对应的数列特征。",
      "逐个代入候选数，检查所在格子。"
    ],
    "solution": "The published answer is A = 128. Infer the row-by-row or spiral numbering pattern from the visible cells, then test where 128, 256, 81, 121 and 400 would land.",
    "methods": [
      "Color-code numbers landing in one cell class or inspect square numbers."
    ],
    "tip": "Encourage students to justify each step.",
    "figure": "assets/2004-g5-6/q26.png",
    "figureAlt": "2004 Grade 5–6 question 26: original figure"
  },
  {
    "no": 27,
    "points": 5,
    "grade": "5-6",
    "text": "A 2004-digit number consisting entirely of 1s is divided by 3. How many zeros are in the quotient?",
    "options": {
      "A": "670",
      "B": "669",
      "C": "668",
      "D": "667",
      "E": "665"
    },
    "answer": "D",
    "title": "循环数字 除法 商中零",
    "tags": [
      "循环数字",
      "除法",
      "商中零"
    ],
    "hints": [
      "先观察111÷3。",
      "再算111111÷3，寻找新增的0。",
      "每增加一组三个1，商中会多一个0。"
    ],
    "solution": "Group the 2004 ones into 668 blocks of three. Dividing repunits illustrates the quotient pattern: 111÷3=37 (no zero); 111111÷3=37037 (one zero); with each additional block of three 1s, one more zero separates the repeating 37 patterns. Hence the quotient contains 668−1=667 zeros.",
    "methods": [
      "Use long division to see the recurring remainders."
    ],
    "tip": "Encourage students to justify each step."
  },
  {
    "no": 28,
    "points": 5,
    "grade": "5-6",
    "text": "108 red marbles and 180 green marbles must be packed in identical-size single-color boxes. What is the smallest number of boxes?",
    "options": {
      "A": "288",
      "B": "36",
      "C": "18",
      "D": "8",
      "E": "1"
    },
    "answer": "D",
    "title": "最大公因数 分组",
    "tags": [
      "最大公因数",
      "分组"
    ],
    "hints": [
      "每箱必须装一样多。",
      "每箱数量必须同时整除108与180。",
      "选择最大公因数36，算所需箱数。"
    ],
    "solution": "To minimize boxes, maximize the number of marbles per box. The box size must divide both 108 and 180; their greatest common divisor is 36. There are 108÷36=3 red boxes and 180÷36=5 green boxes, totaling eight.",
    "methods": [
      "Factor 108 and 180; use the Euclidean algorithm."
    ],
    "tip": "Encourage students to justify each step."
  },
  {
    "no": 29,
    "points": 5,
    "grade": "5-6",
    "text": "Each student answers all ten questions. Correct answers earn 5 points and incorrect ones lose 3. Mathew scores 34, Philip 10, John 2. How many correct answers altogether?",
    "options": {
      "A": "17",
      "B": "18",
      "C": "15",
      "D": "13",
      "E": "21"
    },
    "answer": "A",
    "title": "得分 方程 反推",
    "tags": [
      "得分",
      "方程",
      "反推"
    ],
    "hints": [
      "全部10题都作答。",
      "答对一题与答错一题的得分差是多少？",
      "先假设都错得−30分，每改对一题增加8分。"
    ],
    "solution": "If a student has c correct answers, then 10−c are incorrect. Score=5c−3(10−c)=8c−30; hence c=(score+30)/8. Mathew: (34+30)/8=8; Philip: (10+30)/8=5; John: (2+30)/8=4. Total=8+5+4=17.",
    "methods": [
      "Start from all-incorrect scores, then count eight-point improvements."
    ],
    "tip": "Encourage students to justify each step."
  },
  {
    "no": 30,
    "points": 5,
    "grade": "5-6",
    "text": "A right triangle has legs 6 cm and 8 cm. It is folded along a straight line. Which choice can be the area of the resulting polygon?",
    "options": {
      "A": "9 cm²",
      "B": "12 cm²",
      "C": "18 cm²",
      "D": "24 cm²",
      "E": "30 cm²"
    },
    "answer": "C",
    "title": "直角三角形 折叠 面积",
    "tags": [
      "直角三角形",
      "折叠",
      "面积"
    ],
    "hints": [
      "先算出三角形的原面积。",
      "折叠后会有一部分重叠，看到的面积可能减小。",
      "考虑折痕位置，检验18 cm²是否可达到。"
    ],
    "solution": "The original area is (6 × 8)/2 = 24 cm². A genuine fold reduces the visible area, but a scalene triangle cannot fold exactly in half onto itself, so the visible area is strictly between 12 and 24 cm². Of the choices, only 18 cm² is possible.",
    "methods": [
      "Draw the triangle on grid paper and fold; compare the original and overlapped areas."
    ],
    "tip": "Encourage students to justify each step."
  }
];

Object.assign(KANGAROO_EXTENSIONS, {
  "2004-g5-6-1": {
    "text": "Evaluate 1000−100−10−7.",
    "change": "仅把最后减数17改为7。",
    "method": "Combine all subtracted values before subtracting from 1000.",
    "answer": "883: 1000−(100+10+7)=883.",
    "solution": ""
  },
  "2004-g5-6-2": {
    "text": "In a 4×4 grid with digits 1–4 once per row and column, one row reads 1, 2, blank, 4. What fills the blank?",
    "change": "把原来的图片推理改成明确的一行，仍用排除法。",
    "method": "Identify the one digit not yet used in that row.",
    "answer": "3; it is the only missing digit.",
    "solution": ""
  },
  "2004-g5-6-3": {
    "text": "Find a different product equal to (20×50)×(40×30).",
    "change": "只更换括号内的因子，练习结合律。",
    "method": "Multiply each pair and then the results, or rearrange factors.",
    "answer": "1,200,000: (1000)×(1200)=1,200,000.",
    "solution": ""
  },
  "2004-g5-6-4": {
    "text": "How many hours are 180,000 seconds?",
    "change": "只改变秒数。",
    "method": "Divide by 3600 seconds per hour.",
    "answer": "50 hours: 180000÷3600=50.",
    "solution": ""
  },
  "2004-g5-6-5": {
    "text": "What is the remainder when 20102009 is divided by 2010?",
    "change": "把2004和2003换成2010和2009，保留数字拼接结构。",
    "method": "Split the concatenated number into a multiple of 2010 plus the last four digits.",
    "answer": "2009: 20102009=2010×10000+2009.",
    "solution": ""
  },
  "2004-g5-6-6": {
    "text": "A base strip has black, transparent, black, transparent cells. Which overlay patterns produce an all-black strip?",
    "change": "把原图换成四格条带，仍检查透明位置的覆盖。",
    "method": "Every transparent cell in the base must be black in the overlay.",
    "answer": "Any overlay black in positions 2 and 4; other positions may be black or transparent.",
    "solution": ""
  },
  "2004-g5-6-7": {
    "text": "Which is NOT a factor of 2016: 3, 4, 6, 7, 11?",
    "change": "只替换目标数和一个候选因数。",
    "method": "Test whether each divisor leaves a remainder.",
    "answer": "11 is not a factor: 2016 ÷ 11 is not an integer. The other listed numbers all divide 2016 evenly.",
    "solution": ""
  },
  "2004-g5-6-8": {
    "text": "Three rabbits eat 90 carrots; the son eats 18, and the father eats 8 more than mother. How many does mother eat?",
    "change": "更换总量、孩子份额与父母差量。",
    "method": "Subtract child's share and father's extra before halving.",
    "answer": "32: parents total 72; (72−8)÷2=32.",
    "solution": ""
  },
  "2004-g5-6-9": {
    "text": "Eleven equally spaced stops have 800 m between stop 1 and stop 5. Find total route length.",
    "change": "只改变站点总数和给定两站位置。",
    "method": "First find the per-gap distance, then multiply by total gaps.",
    "answer": "2000 m: four gaps span 800 m, so each 200 m; ten gaps total 2000 m.",
    "solution": ""
  },
  "2004-g5-6-10": {
    "text": "Evaluate 2−(3−(4−(5−6))).",
    "change": "只把每个整数加1，保持嵌套括号结构。",
    "method": "Calculate from the innermost parentheses outward.",
    "answer": "4: 5−6=−1; 4−(−1)=5; 3−5=−2; 2−(−2)=4.",
    "solution": ""
  },
  "2004-g5-6-11": {
    "text": "Two identical L-shaped triominoes (three unit squares each) may be rotated but not flipped. Can they make a 2×3 rectangle?",
    "change": "保留两块相同拼图及旋转限制，换成可以用方格说明的形状。",
    "method": "Draw both L pieces on a 2×3 grid and test rotations without reflection.",
    "answer": "Yes. Place one L in the upper-left three cells and rotate the second 180° to occupy the other three cells.",
    "solution": ""
  },
  "2004-g5-6-12": {
    "text": "Fold a sheet in half four times and punch once away from the folds. How many holes appear when unfolded?",
    "change": "把总折叠次数由5次改成4次。",
    "method": "Each fold doubles the layer count, so use powers of 2.",
    "answer": "16 holes: 2⁴ = 16 layers.",
    "solution": ""
  },
  "2004-g5-6-13": {
    "text": "In the equation □ + □ = △ (no carrying), if △ = 12 is interpreted as an ordinary number rather than a digit, what is □?",
    "change": "把复杂竖式简化成重复图形的等量关系。",
    "method": "Translate identical shapes into equal numbers, then divide both sides by two.",
    "answer": "6, because 2 × □ = 12, so □ = 6.",
    "solution": ""
  },
  "2004-g5-6-14": {
    "text": "Four apples and three oranges weigh 380 g; three apples and four oranges weigh 390 g. How much do one apple and one orange weigh?",
    "change": "改变两组水果的数量和总质量，保留交叉相加的结构。",
    "method": "Add both equations: seven apples plus seven oranges.",
    "answer": "110 g: (380 + 390) ÷ 7 = 110.",
    "solution": ""
  },
  "2004-g5-6-15": {
    "text": "A number is one of 1, 2, 3, 9, 15. Exactly one in each pair is true: (It is 9 / It is prime) and (It is odd / It is 15). Find it.",
    "change": "保留“两组话各恰好一句真”的逻辑，调整判断条件。",
    "method": "Test each candidate against both exclusive-or conditions.",
    "answer": "3: '9' is false and 'prime' true; 'odd' is true and '15' false. Both pairs have exactly one true statement.",
    "solution": ""
  },
  "2004-g5-6-16": {
    "text": "In a 4×4 grid, only cells (row 1, column 1) and (row 2, column 1) are shaded. How many more squares are needed to obtain symmetry about the vertical middle line?",
    "change": "把原图改成可由行列坐标明确描述的网格。",
    "method": "Reflect each shaded cell to the matching column across the axis.",
    "answer": "2: shade (1,4) and (2,4).",
    "solution": ""
  },
  "2004-g5-6-17": {
    "text": "A cube has one corner removed by a plane cutting the three edges meeting there. How many faces does the new solid have?",
    "change": "把“选展开图”改为“数截角后的面数”，结构仍围绕同一截角几何。",
    "method": "Count the original six faces and the one new triangular face.",
    "answer": "7 faces: six original faces remain (with altered outlines) and one triangular cut face is added.",
    "solution": ""
  },
  "2004-g5-6-18": {
    "text": "A snail walks along three horizontal tile edges of 6 dm each and two vertical edges of 4 dm each. How far does it travel?",
    "change": "用明确给定的方块边长和路线段数替换原图。",
    "method": "Count horizontal and vertical contributions separately.",
    "answer": "26 dm: 3 × 6 + 2 × 4 = 26.",
    "solution": ""
  },
  "2004-g5-6-19": {
    "text": "For a 45-day holiday under the same weather rules, which start day gives the most sunny days: Monday, Tuesday, Wednesday, Thursday, or Friday?",
    "change": "只把旅行长度从44天改为45天，仍按整周与余数求最优。",
    "method": "45 = 6 weeks + 3 days; maximize sunny days in a consecutive three-day window.",
    "answer": "Thursday: Thu, Fri and Sat contain two sunny days. Friday, Saturday, Sunday also gives two. Thus both Thursday and Friday (and Tuesday) can tie; among the choices there are multiple optimal answers.",
    "solution": ""
  },
  "2004-g5-6-20": {
    "text": "Two natural numbers total 91, and five times the first equals eight times the second. What is the larger number?",
    "change": "只改总和及倍数，保留比例分份。",
    "method": "Translate 5a=8b into a:b=8:5 and divide total into 13 parts.",
    "answer": "56: 91÷13=7; numbers 8×7=56 and 5×7=35.",
    "solution": ""
  },
  "2004-g5-6-21": {
    "text": "How many positive divisors does 2×3×5×7×11 have?",
    "change": "只增加一个新的质因数11。",
    "method": "Each of five distinct primes may be included or omitted.",
    "answer": "32 divisors: 2⁵=32.",
    "solution": ""
  },
  "2004-g5-6-22": {
    "text": "Ella and Ola have 70 mushrooms in total. Ella has 36. How many does Ola have?",
    "change": "将原题遗失的分数关系换成完整给出的一个人数，保留总量拆分。",
    "method": "Subtract the known share from the total.",
    "answer": "34 mushrooms: 70−36=34.",
    "solution": ""
  },
  "2004-g5-6-23": {
    "text": "In an 11-cell row, every three consecutive cells total 30; cell 1 is 9 and cell 9 is 8. Find cell 2.",
    "change": "只更改三格总和和两个已知数字。",
    "method": "Consecutive equal three-cell sums imply a three-position cycle.",
    "answer": "13: cell 9 equals cell 3 = 8; cell 2 = 30−9−8=13.",
    "solution": ""
  },
  "2004-g5-6-24": {
    "text": "A 5×5 grid has 20 shaded and 5 unshaded squares. What fraction of the shaded area is unshaded?",
    "change": "用完整的方格数量代替原图，保留相同面积比问题。",
    "method": "Divide the number of unshaded cells by shaded cells.",
    "answer": "1/4: 5÷20=1/4.",
    "solution": ""
  },
  "2004-g5-6-25": {
    "text": "Two identical-price CDs are reduced 10% and increased 20%; their new prices differ by $9. What is the cheaper price?",
    "change": "只改变百分比和最终差额。",
    "method": "Difference in percentages is 30% of original price.",
    "answer": "$27: original $9÷0.30=$30; cheaper=0.90×30=$27.",
    "solution": ""
  },
  "2004-g5-6-26": {
    "text": "A square-grid pattern places only perfect squares into a marked corner cell. Which of 144, 169, 180, 196, 225 cannot appear there?",
    "change": "把原图中的位置规律明确改为“只填平方数”。",
    "method": "A perfect square must be an integer multiplied by itself.",
    "answer": "180: the others are 12²,13²,14²,15².",
    "solution": ""
  },
  "2004-g5-6-27": {
    "text": "A number consisting of 15 ones is divided by 3. How many zeros are in its quotient?",
    "change": "把111…1的位数从2004改成15。",
    "method": "There are five groups of three ones, giving one fewer zero than groups.",
    "answer": "4 zeros: 15÷3=5 groups, so 5−1=4.",
    "solution": ""
  },
  "2004-g5-6-28": {
    "text": "Pack 84 red and 126 green marbles into equal-size single-color boxes, minimizing box count. How many?",
    "change": "更改两种颜色的总数，方法仍是最大公因数分组。",
    "method": "Use gcd(84,126) as the number of marbles per box.",
    "answer": "5 boxes: gcd=42, so 84÷42+126÷42=2+3=5.",
    "solution": ""
  },
  "2004-g5-6-29": {
    "text": "Three students answer 12 questions each; correct earns 4 points, incorrect loses 2. Their scores are 24, 12 and 0. How many correct answers altogether?",
    "change": "改变题数与奖惩分值，保持从总分反推正确题数。",
    "method": "All wrong gives −24; replacing one wrong with correct adds 6.",
    "answer": "18 correct answers: for the three students the correct counts are (24+24)/6=8, (12+24)/6=6 and (0+24)/6=4; total 8+6+4=18.",
    "solution": ""
  },
  "2004-g5-6-30": {
    "text": "A 6 cm by 8 cm rectangle of area 48 cm² is folded to make an overlap of 12 cm². What is the area of the visible shape?",
    "change": "把原三角形换成长方形，并明确重叠面积。",
    "method": "Visible area equals original area minus overlapping area.",
    "answer": "36 cm²: 48−12=36.",
    "solution": ""
  }
});
