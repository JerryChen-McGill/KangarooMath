// Teaching content imported from Math Kangaroo G3-4.docx; figures reference the original source PDF pages.
KANGAROO_DATA["2002-g3-4"] = [
  {
    "no": 1,
    "points": 3,
    "text": "Which small square completes the kangaroo competition symbol?",
    "options": {
      "A": "Tile A",
      "B": "Tile B",
      "C": "Tile C",
      "D": "Tile D",
      "E": "Tile E"
    },
    "grade": "3-4",
    "title": "图形补全",
    "tags": [
      "图形识别"
    ],
    "hints": [
      "先标出缺格边缘的接点。",
      "同时检查上下左右。",
      "B能使轮廓连续。"
    ],
    "methods": [
      "Trace boundary entry points before considering the inside of a tile."
    ],
    "solution": "The missing tile must continue every contour where it meets the neighboring tiles. B matches the kangaroo's neck boundary and the short contour entering at the top; the other tiles introduce broken or misplaced lines.",
    "tip": "Keep each choice in its printed orientation unless a rotation is explicitly allowed.",
    "answer": "B",
    "figure": "assets/2002-g3-4/q1.png"
  },
  {
    "no": 2,
    "points": 3,
    "text": "Simplify2+2−2+2−2+2−2+2−2+2.",
    "options": {
      "A": "0",
      "B": "2",
      "C": "4",
      "D": "12",
      "E": "20"
    },
    "grade": "3-4",
    "title": "连续加减",
    "tags": [
      "逻辑推理"
    ],
    "hints": [
      "同级运算从左到右。",
      "可配成加2减2的抵消对。",
      "最后留下两个正2。"
    ],
    "methods": [
      "Calculate a running total:2,4,2,4,2,4,2,4,2,4."
    ],
    "solution": "There are six positive2s and four negative2s. The result is12−8=4. Or cancel four(+2−2) pairs, leaving2+2.",
    "tip": "Keep the initial positive term when counting signs.",
    "answer": "C"
  },
  {
    "no": 3,
    "points": 3,
    "text": "Andrzej receives3 toy cars,4 balls,3 teddy bears,10 pens,2 chocolate bars and1 book. How many items altogether?",
    "options": {
      "A": "15",
      "B": "17",
      "C": "20",
      "D": "23",
      "E": "27"
    },
    "grade": "3-4",
    "title": "加法",
    "tags": [
      "分类"
    ],
    "hints": [
      "逐类记录数量。",
      "别漏掉一本书。",
      "凑十再相加。"
    ],
    "methods": [
      "Use a category-and-count table."
    ],
    "solution": "Add all categories:3+4+3+10+2+1=23. Grouping(3+3+4)+10+(2+1)=10+10+3 helps.",
    "tip": "Distinguish the number of types of gifts from the number of individual items.",
    "answer": "D"
  },
  {
    "no": 4,
    "points": 3,
    "text": "Which piece is absent from the divided square?",
    "options": {
      "A": "Piece A",
      "B": "Piece B",
      "C": "Piece C",
      "D": "Piece D",
      "E": "Piece E"
    },
    "grade": "3-4",
    "title": "分割图形",
    "tags": [
      "图形识别"
    ],
    "hints": [
      "先找所有独立区域。",
      "旋转后比形状与比例。",
      "图中没有U形的一块。"
    ],
    "methods": [
      "Cut out or color the five regions and compare them one at a time."
    ],
    "solution": "Trace the actual region boundaries. A is a square, B a rectangle, and the two differently proportioned L-shaped pieces match C and E after rotation. No region has D's U-shaped outline.",
    "tip": "Do not confuse a union of several regions with one original piece.",
    "answer": "D",
    "figure": "assets/2002-g3-4/q4.png"
  },
  {
    "no": 5,
    "points": 3,
    "text": "Gina, Lena, Suzie and Joanna have birthdays on March1, May17, July20 and March20. Lena and Suzie share a month; Gina and Suzie share a day number. Who was born May17?",
    "options": {
      "A": "Gina",
      "B": "Lena",
      "C": "Suzie",
      "D": "Joanna",
      "E": "Cannot be determined"
    },
    "grade": "3-4",
    "title": "逻辑对应",
    "tags": [
      "逻辑推理"
    ],
    "hints": [
      "先找重复月份。",
      "再找重复日号20。",
      "用排除法安排剩余生日。"
    ],
    "methods": [
      "Build a four-person matching grid and cross out impossible dates."
    ],
    "solution": "The repeated month is March, so Lena and Suzie take March1 and March20. The only repeated day number is20, so Suzie=March20, Gina=July20 and Lena=March1. Joanna is left with May17.",
    "tip": "A day of the month means the numeral, not a weekday.",
    "answer": "D"
  },
  {
    "no": 6,
    "points": 3,
    "text": "A heart averages70 beats per minute. About how many beats per hour?",
    "options": {
      "A": "42000",
      "B": "7000",
      "C": "4200",
      "D": "700",
      "E": "420"
    },
    "grade": "3-4",
    "title": "单位换算",
    "tags": [
      "逻辑推理"
    ],
    "hints": [
      "一小时有60分钟。",
      "每分钟70次。",
      "70乘60。"
    ],
    "methods": [
      "Calculate7×6=42 and restore the two zero factors."
    ],
    "solution": "One hour contains60 minutes. At70 beats per minute,70×60=4200 beats.",
    "tip": "Write units so minutes cancel; this is the problem's assumed average.",
    "answer": "C"
  },
  {
    "no": 7,
    "points": 3,
    "text": "ABCD is a square of side10 cm. ATMD is a rectangle with short side3 cm and long sideAD=10 cm. What is the difference between their perimeters?",
    "options": {
      "A": "14 cm",
      "B": "10 cm",
      "C": "7 cm",
      "D": "6 cm",
      "E": "4 cm"
    },
    "grade": "3-4",
    "title": "周长差",
    "tags": [
      "逻辑推理"
    ],
    "hints": [
      "矩形共享AD这条10厘米长边。",
      "分别求40和26。",
      "周长差14。"
    ],
    "methods": [
      "Compare only the two differing sides:2×(10−3)."
    ],
    "solution": "Square perimeter=4×10=40 cm. Rectangle perimeter=2×(10+3)=26 cm. Difference=14 cm. Two equal10 cm sides cancel, leaving2×(10−3).",
    "tip": "The prompt omits a drawing here; use the shared sideAD to identify the rectangle's long side.",
    "answer": "A"
  },
  {
    "no": 8,
    "points": 3,
    "text": "Which outline cannot be made by folding a rectangle just once?",
    "options": {
      "A": "Figure A",
      "B": "Figure B",
      "C": "Figure C",
      "D": "Figure D",
      "E": "Figure E"
    },
    "grade": "3-4",
    "title": "折纸",
    "tags": [
      "图形识别"
    ],
    "hints": [
      "一次折叠只有一条直折痕。",
      "沿折痕反射折过去的部分。",
      "检查B的凹口和尖角能否同时形成。"
    ],
    "methods": [
      "Use paper trials or transparent overlays for all candidate outlines."
    ],
    "solution": "A single straight crease reflects one connected part of the sheet onto the other. Trace the reflected rectangle boundaries: A,C,D,E can be realized by suitable folds, whereas B's inner notch and diagonal outer tip cannot be produced together by one fold.",
    "tip": "Evaluate the full visible union of the folded layers, not only the folded flap. 4-Point Questions",
    "answer": "B",
    "figure": "assets/2002-g3-4/q8.png"
  },
  {
    "no": 9,
    "points": 4,
    "text": "Houses are numbered1 through24. How many times does digit2 occur?",
    "options": {
      "A": "2",
      "B": "4",
      "C": "8",
      "D": "16",
      "E": "32"
    },
    "grade": "3-4",
    "title": "数字出现次数",
    "tags": [
      "分类"
    ],
    "hints": [
      "按个位和十位分开数。",
      "个位有2、12、22。",
      "十位有20到24，共5次。"
    ],
    "methods": [
      "List2,12,20,21,22,23,24 and count their individual2s."
    ],
    "solution": "Units-position2 occurs in2,12,22:3 times. Tens-position2 occurs in20,21,22,23,24:5 times. Total8;22 contributes twice.",
    "tip": "Number of labels containing2 is different from number of digit occurrences.",
    "answer": "C"
  },
  {
    "no": 10,
    "points": 4,
    "text": "Six identical oranges balance two identical melons after one melon is added to the orange side. How many oranges weigh as much as one melon?",
    "options": {
      "A": "2",
      "B": "3",
      "C": "4",
      "D": "5",
      "E": "6"
    },
    "grade": "3-4",
    "title": "天平",
    "tags": [
      "逻辑推理"
    ],
    "hints": [
      "看加完后的平衡状态。",
      "两边同时拿走一个瓜。",
      "剩6个橙子等于1个瓜。"
    ],
    "methods": [
      "Write6o+m=2m and subtract m."
    ],
    "solution": "The final balance means6 oranges+1 melon=2 melons. Remove one melon from each side:6 oranges=1 melon.",
    "tip": "Do not treat the initially tilted scale as already balanced.",
    "answer": "E"
  },
  {
    "no": 11,
    "points": 4,
    "text": "Which line is not part of the castle sketch?",
    "options": {
      "A": "Line A",
      "B": "Line B",
      "C": "Line C",
      "D": "Line D",
      "E": "Line E"
    },
    "grade": "3-4",
    "title": "线条匹配",
    "tags": [
      "图形识别"
    ],
    "hints": [
      "沿候选线从一端走到另一端。",
      "转折次序也必须相同。",
      "C的双尖峰凹口组合不在原图。"
    ],
    "methods": [
      "Use transparent tracing paper to slide each line over the sketch."
    ],
    "solution": "Follow each candidate through the castle outline. A matches the stepped section; B and D match sloping and vertical corners; E matches the double curved tower top. C's two roof peaks separated by a deep rectangular notch do not appear as one continuous part.",
    "tip": "A partial resemblance at one corner is insufficient; match the whole connected segment.",
    "answer": "C",
    "figure": "assets/2002-g3-4/q11.png"
  },
  {
    "no": 12,
    "points": 4,
    "text": "Add17 to the smallest two-digit number, then divide by the largest one-digit number. What is the result?",
    "options": {
      "A": "3",
      "B": "6",
      "C": "9",
      "D": "11",
      "E": "27"
    },
    "grade": "3-4",
    "title": "最值常识",
    "tags": [
      "运算律"
    ],
    "hints": [
      "先确定10和9。",
      "先加17得到27。",
      "再除以9。"
    ],
    "methods": [
      "Write the entire calculation with parentheses before evaluating."
    ],
    "solution": "The smallest two-digit positive integer is10 and the largest one-digit integer is9. Compute(10+17)÷9=27÷9=3.",
    "tip": "Use base10 positive integers; keep the addition inside the division's numerator.",
    "answer": "A"
  },
  {
    "no": 13,
    "points": 4,
    "text": "Ancient symbols represent1,10 and60. Which notation represents124?",
    "options": {
      "A": "Notation A",
      "B": "Notation B",
      "C": "Notation C",
      "D": "Notation D",
      "E": "Notation E"
    },
    "grade": "3-4",
    "title": "符号计数",
    "tags": [
      "数与运算"
    ],
    "hints": [
      "先用最大的60为单位。",
      "124减120余4。",
      "找两个60符号加四个1符号。"
    ],
    "methods": [
      "Translate each option into a numeric sum."
    ],
    "solution": "Decompose124=2×60+0×10+4×1. E has two60-symbols and four1-symbols. There is no10-symbol.",
    "tip": "Read the legend rather than inferring symbol value from size alone.",
    "answer": "E",
    "figure": "assets/2002-g3-4/q13.png"
  },
  {
    "no": 14,
    "points": 4,
    "text": "Which clock partition has four consecutive sums of the numbers in its parts?",
    "options": {
      "A": "Partition A",
      "B": "Partition B",
      "C": "Partition C",
      "D": "Partition D",
      "E": "Partition E"
    },
    "grade": "3-4",
    "title": "时钟分组",
    "tags": [
      "周期"
    ],
    "hints": [
      "先算1到12的总和78。",
      "四个连续和必须18、19、20、21。",
      "逐区核对B的分组。"
    ],
    "methods": [
      "Test each partition against the forced set18–21."
    ],
    "solution": "The clock numbers sum1+…+12=78. If four consecutive sums are n,n+1,n+2,n+3, then4n+6=78, so they must be18,19,20,21. B groups(12,1,2,3),(9,10),(11,4,5),(6,7,8), giving18,19,20,21.",
    "tip": "A curved region can contain separated labels around the rim; follow the actual boundary.",
    "answer": "B",
    "figure": "assets/2002-g3-4/q14.png"
  },
  {
    "no": 15,
    "points": 4,
    "text": "Klara and Zoe have60 matches. Klara makes a triangle with6 matches per side. Zoe makes a rectangle from the rest with one side6 matches long. How many matches form each longer side?",
    "options": {
      "A": "9",
      "B": "12",
      "C": "15",
      "D": "18",
      "E": "30"
    },
    "grade": "3-4",
    "title": "周长分配",
    "tags": [
      "逻辑推理"
    ],
    "hints": [
      "三角形先用18根。",
      "剩42是矩形周长。",
      "减两条短边再除以2。"
    ],
    "methods": [
      "Use rectangle semiperimeter42÷2=21 and subtract6."
    ],
    "solution": "The triangle uses3×6=18, leaving42. The rectangle's two short sides use12, leaving30 for two long sides. Each long side uses15.",
    "tip": "A polygon side length in matches is not its full perimeter.",
    "answer": "C"
  },
  {
    "no": 16,
    "points": 4,
    "text": "Miki, Niki and Oki jump at the same speed along the grid paths shown. Which statement is true?",
    "options": {
      "A": "Miki and Oki finish together",
      "B": "Niki finishes first",
      "C": "Oki finishes last",
      "D": "All finish together",
      "E": "Miki and Niki finish together"
    },
    "grade": "3-4",
    "title": "路径长度",
    "tags": [
      "逻辑推理"
    ],
    "hints": [
      "把每段折线拆成单位格边。",
      "横向也要计入路程。",
      "Miki和Niki等长、Oki较短。"
    ],
    "methods": [
      "Lay string along each path, straighten it, and compare."
    ],
    "solution": "Count unit grid edges: Miki's path has9 vertical and9 horizontal units, total18; Niki's has9 vertical and9 horizontal units, total18; Oki's has9 vertical and8 horizontal units, total17. With equal speeds Oki finishes first, and Miki and Niki finish together. Therefore E alone is true.",
    "tip": "Use equal-speed comparison only after counting all segments; do not compare just the picture heights. 5-Point Questions",
    "answer": "E",
    "figure": "assets/2002-g3-4/q16.png"
  },
  {
    "no": 17,
    "points": 5,
    "text": "Mike, Nate, Oliver and Paul each own one different pet: cat, dog, goldfish, canary. Nate's has fur; Oliver's has four legs; Paul has a bird; Mike and Nate dislike cats. Which statement is NOT true?",
    "options": {
      "A": "Oliver has a dog",
      "B": "Paul has a canary",
      "C": "Mike has a goldfish",
      "D": "Oliver has a cat",
      "E": "Nate has a dog"
    },
    "grade": "3-4",
    "title": "逻辑排除",
    "tags": [
      "逻辑推理"
    ],
    "hints": [
      "先确定Paul的鸟。",
      "Nate有毛且不是猫，所以是狗。",
      "Oliver是猫，Mike是鱼。"
    ],
    "methods": [
      "Make a person/pet elimination grid."
    ],
    "solution": "Paul=canary. Nate's furry pet is not a cat, so Nate=dog. Oliver's four-legged pet must then be cat. Mike=goldfish. Thus A is false and B–E are true.",
    "tip": "Underline NOT so students choose the false statement after solving the assignment.",
    "answer": "A"
  },
  {
    "no": 18,
    "points": 5,
    "text": "Mary leaves6:55 and arrives7:32. Zoe needs12 minutes less and arrives7:45. When did Zoe leave?",
    "options": {
      "A": "7:07",
      "B": "7:20",
      "C": "7:25",
      "D": "7:30",
      "E": "7:33"
    },
    "grade": "3-4",
    "title": "时间差",
    "tags": [
      "逻辑推理"
    ],
    "hints": [
      "跨整点计算Mary的37分钟。",
      "Zoe少12分钟，需25分钟。",
      "从到校时刻倒减25分钟。"
    ],
    "methods": [
      "Use a timeline with departure, journey duration and arrival."
    ],
    "solution": "Mary travels37 minutes:5 to7:00 and32 more. Zoe takes37−12=25 minutes. Her departure is7:45−25 minutes=7:20.",
    "tip": "Separate a duration from a clock reading; do not subtract12 directly from the arrival time.",
    "answer": "B"
  },
  {
    "no": 19,
    "points": 5,
    "text": "Robert uses half his cubes for a tunnel and some of the rest for a stepped pyramid. How many cubes remain?",
    "options": {
      "A": "34",
      "B": "28",
      "C": "22",
      "D": "18",
      "E": "15"
    },
    "grade": "3-4",
    "title": "立方体",
    "tags": [
      "逻辑推理"
    ],
    "hints": [
      "隧道用外体减去贯通的洞。",
      "一半用64则另一半也64。",
      "金字塔按25、9、9、1、1、1分层。"
    ],
    "methods": [
      "Count tunnel layers as four identical frames of16 cubes."
    ],
    "solution": "The tunnel has a5×5 cross-section with a3×3 opening and depth4: (25−9)×4=64 cubes. Since this is half, another64 remain. The pyramid has a5×5 base layer, two3×3 layers and three1×1 layers:25+18+3=46. Leftover=64−46=18.",
    "tip": "Hidden cubes matter; the opening runs through the full depth, and the pyramid contains repeated layers.",
    "answer": "D",
    "figure": "assets/2002-g3-4/q19.png"
  },
  {
    "no": 20,
    "points": 5,
    "text": "A daughter is3 years old; her mother is28 years older. How many years until the mother is three times the daughter's age?",
    "options": {
      "A": "9",
      "B": "12",
      "C": "10",
      "D": "1",
      "E": "11"
    },
    "grade": "3-4",
    "title": "年龄倍数",
    "tags": [
      "比例"
    ],
    "hints": [
      "年龄差始终28。",
      "三倍关系的差是女儿年龄的2倍。",
      "女儿14岁，还需11年。"
    ],
    "methods": [
      "Solve31+t=3(3+t)."
    ],
    "solution": "The mother is31 now. Their difference stays28. At a3:1 age ratio the difference is two daughter-age units, so the daughter must be14. Wait14−3=11 years; the mother is then42.",
    "tip": "Both people age by the same amount; do not hold the mother's age fixed.",
    "answer": "E"
  },
  {
    "no": 21,
    "points": 5,
    "text": "Choose a trio: one of2 violinists, one of2 pianists and one of2 drummers. How many trios must be tried to test every possibility?",
    "options": {
      "A": "3",
      "B": "4",
      "C": "8",
      "D": "24",
      "E": "25"
    },
    "grade": "3-4",
    "title": "组合",
    "tags": [
      "乘法"
    ],
    "hints": [
      "按乐器分三步选择。",
      "每一步有2种。",
      "画三层树状图。"
    ],
    "methods": [
      "List binary labels111,112,121,122,211,212,221,222."
    ],
    "solution": "Each violinist can pair with either pianist and either drummer. Independent choices give2×2×2=8 trios.",
    "tip": "Roles are distinct; do not multiply by3! for ordering the same trio.",
    "answer": "C"
  },
  {
    "no": 22,
    "points": 5,
    "text": "One medal is cut from each square plate. Scraps from4 used plates make1 new plate. Starting with16 plates, what is the maximum number of medals?",
    "options": {
      "A": "17",
      "B": "19",
      "C": "20",
      "D": "21",
      "E": "32"
    },
    "grade": "3-4",
    "title": "废料再利用",
    "tags": [
      "逻辑推理"
    ],
    "hints": [
      "第一轮16枚。",
      "16份废料可换4块板。",
      "4枚的废料再换1块板。"
    ],
    "methods": [
      "Track whole plates and scrap-units separately; each recycling medal consumes a net3 scrap-units."
    ],
    "solution": "First make16 medals, whose scraps make4 plates. These give4 more medals; their scraps make1 plate, giving1 last medal. Total16+4+1=21. One scrap-unit remains, insufficient for another plate.",
    "tip": "Include scraps generated from recycled plates, but do not borrow future material.",
    "answer": "D"
  },
  {
    "no": 23,
    "points": 5,
    "text": "28 students finish with different scores. The number above Tom is half the number below him. What is his rank?",
    "options": {
      "A": "6th",
      "B": "7th",
      "C": "8th",
      "D": "9th",
      "E": "10th"
    },
    "grade": "3-4",
    "title": "排名",
    "tags": [
      "比例"
    ],
    "hints": [
      "总人数减去Tom。",
      "前后人数比1:2。",
      "前9人，所以第10。"
    ],
    "methods": [
      "Solve a+2a=27 and then add one."
    ],
    "solution": "Exclude Tom:27 students. Split them in ratio1:2, so9 are above and18 below. Rank=9+1=10.",
    "tip": "Scores differ, so ranks have no ties.",
    "answer": "E"
  },
  {
    "no": 24,
    "points": 5,
    "text": "An odometer reads187569, with all digits different. After how many more kilometers will it next show all distinct digits?",
    "options": {
      "A": "777",
      "B": "12431",
      "C": "431",
      "D": "21",
      "E": "11"
    },
    "grade": "3-4",
    "title": "数位",
    "tags": [
      "逻辑推理"
    ],
    "hints": [
      "先看个位进位后的前缀。",
      "18757x和18758x都已有重复。",
      "187590首次全部不同。"
    ],
    "methods": [
      "Scan short blocks sharing a repeated prefix rather than checking every number."
    ],
    "solution": "187570–187579 all repeat7 in the fixed prefix18757. 187580–187589 repeat8 in prefix18758. The next reading187590 has digits1,8,7,5,9,0 all distinct. Difference187590−187569=21. No smaller positive increment works.",
    "tip": "All-different is a condition on every digit, and the current valid reading is excluded by 'again after traveling'.",
    "answer": "D"
  }
];

Object.assign(KANGAROO_EXTENSIONS, {
  "2002-g3-4-1": {
    "text": "After inserting B, rotate the entire completed picture90°. Does the inserted tile still fit?",
    "change": "沿用文档拓展题的同一策略，替换数字或条件。",
    "method": "先标出缺格边缘的接点；同时检查上下左右。",
    "answer": "Yes. Rotating the entire picture preserves all boundary matches.",
    "solution": "Yes. Rotating the entire picture preserves all boundary matches."
  },
  "2002-g3-4-2": {
    "text": "Append−2+2 to the expression. What is the result?",
    "change": "沿用文档拓展题的同一策略，替换数字或条件。",
    "method": "同级运算从左到右；可配成加2减2的抵消对。",
    "answer": "4",
    "solution": "4; the added pair has net change0."
  },
  "2002-g3-4-3": {
    "text": "He receives2 additional books. How many items now?",
    "change": "沿用文档拓展题的同一策略，替换数字或条件。",
    "method": "逐类记录数量；别漏掉一本书。",
    "answer": "25",
    "solution": "25;23+2=25."
  },
  "2002-g3-4-4": {
    "text": "Rotate the whole divided square180°. Which option is still absent?",
    "change": "沿用文档拓展题的同一策略，替换数字或条件。",
    "method": "先找所有独立区域；旋转后比形状与比例。",
    "answer": "D",
    "solution": "D; rotating the whole picture does not change which shapes occur."
  },
  "2002-g3-4-5": {
    "text": "Change only May17 to May18. Who has that birthday?",
    "change": "沿用文档拓展题的同一策略，替换数字或条件。",
    "method": "先找重复月份；再找重复日号20。",
    "answer": "Joanna",
    "solution": "Joanna; the two repeated-month/day deductions are unchanged."
  },
  "2002-g3-4-6": {
    "text": "At72 beats per minute, how many beats in one hour?",
    "change": "沿用文档拓展题的同一策略，替换数字或条件。",
    "method": "一小时有60分钟；每分钟70次。",
    "answer": "4320",
    "solution": "4320;72×60=4320."
  },
  "2002-g3-4-7": {
    "text": "The rectangle's short side is4 cm instead. Find the perimeter difference.",
    "change": "沿用文档拓展题的同一策略，替换数字或条件。",
    "method": "矩形共享AD这条10厘米长边；分别求40和26。",
    "answer": "12 cm",
    "solution": "12 cm;40−2×14=12."
  },
  "2002-g3-4-8": {
    "text": "Fold a rectangle exactly in half along a line parallel to a side. What shape is its outside boundary?",
    "change": "沿用文档拓展题的同一策略，替换数字或条件。",
    "method": "一次折叠只有一条直折痕；沿折痕反射折过去的部分。",
    "answer": "A rectangle with one dimension halved.",
    "solution": "A rectangle with one dimension halved."
  },
  "2002-g3-4-9": {
    "text": "For houses1 through29, how many times does digit2 occur?",
    "change": "沿用文档拓展题的同一策略，替换数字或条件。",
    "method": "按个位和十位分开数；个位有2、12、22。",
    "answer": "13",
    "solution": "13;3 in the units place plus10 in the tens place."
  },
  "2002-g3-4-10": {
    "text": "Eight oranges plus one melon balance three melons. How many oranges equal one melon?",
    "change": "沿用文档拓展题的同一策略，替换数字或条件。",
    "method": "看加完后的平衡状态；两边同时拿走一个瓜。",
    "answer": "4",
    "solution": "4;8 oranges=2 melons."
  },
  "2002-g3-4-11": {
    "text": "Trace the castle's double curved tower top. Which original choice matches it?",
    "change": "沿用文档拓展题的同一策略，替换数字或条件。",
    "method": "沿候选线从一端走到另一端；转折次序也必须相同。",
    "answer": "E.",
    "solution": "E."
  },
  "2002-g3-4-12": {
    "text": "Add26 to the smallest two-digit number, then divide by9. What is the result?",
    "change": "沿用文档拓展题的同一策略，替换数字或条件。",
    "method": "先确定10和9；先加17得到27。",
    "answer": "4",
    "solution": "4;(10+26)÷9=4."
  },
  "2002-g3-4-13": {
    "text": "Write134 using the same symbols with the fewest symbols.",
    "change": "沿用文档拓展题的同一策略，替换数字或条件。",
    "method": "先用最大的60为单位；124减120余4。",
    "answer": "Two60-symbols, one10-symbol and four1-symbols:120+10+4=134.",
    "solution": "Two60-symbols, one10-symbol and four1-symbols:120+10+4=134."
  },
  "2002-g3-4-14": {
    "text": "What four consecutive integers have sum86?",
    "change": "沿用文档拓展题的同一策略，替换数字或条件。",
    "method": "先算1到12的总和78；四个连续和必须18、19、20、21。",
    "answer": "20,21,22,23, since4n+6=86.",
    "solution": "20,21,22,23, since4n+6=86."
  },
  "2002-g3-4-15": {
    "text": "Start with66 matches and keep both given side lengths6. Find each long side.",
    "change": "沿用文档拓展题的同一策略，替换数字或条件。",
    "method": "三角形先用18根；剩42是矩形周长。",
    "answer": "18",
    "solution": "18;(66−18−12)÷2=18."
  },
  "2002-g3-4-16": {
    "text": "Miki and Niki keep their equal path lengths, but Niki moves twice as fast. Who finishes first between them?",
    "change": "沿用文档拓展题的同一策略，替换数字或条件。",
    "method": "把每段折线拆成单位格边；横向也要计入路程。",
    "answer": "Niki",
    "solution": "Niki; time=distance÷speed, so Niki takes half Miki's time."
  },
  "2002-g3-4-17": {
    "text": "Using the same clues, who has the dog?",
    "change": "沿用文档拓展题的同一策略，替换数字或条件。",
    "method": "先确定Paul的鸟；Nate有毛且不是猫，所以是狗。",
    "answer": "Nate.",
    "solution": "Nate."
  },
  "2002-g3-4-18": {
    "text": "Zoe arrives8:00 with the same journey time. When did she leave?",
    "change": "沿用文档拓展题的同一策略，替换数字或条件。",
    "method": "跨整点计算Mary的37分钟；Zoe少12分钟，需25分钟。",
    "answer": "7:35",
    "solution": "7:35;8:00−25 minutes=7:35."
  },
  "2002-g3-4-19": {
    "text": "Keep the same tunnel but remove the pyramid's topmost cube before building it. How many cubes remain?",
    "change": "沿用文档拓展题的同一策略，替换数字或条件。",
    "method": "隧道用外体减去贯通的洞；一半用64则另一半也64。",
    "answer": "19",
    "solution": "19; the pyramid then uses45, so64−45=19."
  },
  "2002-g3-4-20": {
    "text": "The daughter is5 with the same28-year gap. How long until the3:1 ratio?",
    "change": "沿用文档拓展题的同一策略，替换数字或条件。",
    "method": "年龄差始终28；三倍关系的差是女儿年龄的2倍。",
    "answer": "9 years",
    "solution": "9 years; she must still reach14."
  },
  "2002-g3-4-21": {
    "text": "There are3 violinists,2 pianists and2 drummers. How many trios?",
    "change": "沿用文档拓展题的同一策略，替换数字或条件。",
    "method": "按乐器分三步选择；每一步有2种。",
    "answer": "12",
    "solution": "12;3×2×2=12."
  },
  "2002-g3-4-22": {
    "text": "Start with20 plates under the same rule. What is the maximum?",
    "change": "沿用文档拓展题的同一策略，替换数字或条件。",
    "method": "第一轮16枚；16份废料可换4块板。",
    "answer": "26",
    "solution": "26;20 medals, then5, then1. After the last round2 scrap-units remain."
  },
  "2002-g3-4-23": {
    "text": "There are31 students with the same ratio. What is Tom's rank?",
    "change": "沿用文档拓展题的同一策略，替换数字或条件。",
    "method": "总人数减去Tom；前后人数比1:2。",
    "answer": "11th",
    "solution": "11th;30÷3=10 above."
  },
  "2002-g3-4-24": {
    "text": "Starting from187590, after how many kilometers is the next all-distinct reading?",
    "change": "沿用文档拓展题的同一策略，替换数字或条件。",
    "method": "先看个位进位后的前缀；18757x和18758x都已有重复。",
    "answer": "2",
    "solution": "2;187591 repeats1, while187592 has six different digits."
  }
});
