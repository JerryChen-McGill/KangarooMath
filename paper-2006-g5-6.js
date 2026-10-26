// Source: US Math Kangaroo G5–6, with local original-paper figures.
KANGAROO_DATA["2006-g5-6"] = [
  {
    "no": 1,
    "points": 3,
    "grade": "5-6",
    "text": "If 3 x 2006 = 2005 + 2007 + a, then a is equal to:",
    "options": {
      "A": "2003",
      "B": "2004",
      "C": "2005",
      "D": "2006",
      "E": "2007"
    },
    "answer": "D",
    "title": "代数 逆运算",
    "tags": [
      "代数",
      "逆运算"
    ],
    "hints": [
      "先算左边总和。",
      "把已知两个加数相加。",
      "用总和减去已知部分。"
    ],
    "solution": "Subtract 2005+2007=4012 from 3×2006=6018. Thus a=2006.",
    "methods": [
      "Use the symmetry 2005+2007=2×2006."
    ],
    "tip": "Invite students to justify the method;"
  },
  {
    "no": 2,
    "points": 3,
    "grade": "5-6",
    "text": "What is the greatest number we can get arranging the six cards with numbers shown in the picture in one row, one after another?",
    "options": {
      "A": "6,475,413,092",
      "B": "4,130,975,642",
      "C": "3,097,564,241",
      "D": "7,564,413,092",
      "E": "7,645,413,092"
    },
    "answer": "E",
    "title": "数位 排序 最大值",
    "tags": [
      "数位",
      "排序",
      "最大值"
    ],
    "hints": [
      "先确认每张卡片上完整的数字。",
      "比较两张卡片先后拼接会形成什么数。",
      "逐步选择让高位数尽量大的顺序。"
    ],
    "solution": "The answer key selects E: 7,645,413,092. To justify it, read each original card and order cards by comparing the two concatenations XY and YX. Do not assume that sorting cards by their first digit alone always works.",
    "methods": [
      "Use pairwise concatenation comparisons."
    ],
    "tip": "Invite students to justify the method;",
    "figure": "assets/2006-g5-6/q2.png",
    "figureAlt": "2006 Grade 5–6 question 2: original figure"
  },
  {
    "no": 3,
    "points": 3,
    "grade": "5-6",
    "text": "There are places for 4 people at a certain square table, one on each side. Students have put together 10 such tables in one row, one next to another, to get one long rectangular table. How many places are there at the rectangular table now?",
    "options": {
      "A": "40",
      "B": "32",
      "C": "30",
      "D": "22",
      "E": "20"
    },
    "answer": "D",
    "title": "几何 桌椅计数",
    "tags": [
      "几何",
      "桌椅计数"
    ],
    "hints": [
      "两张桌子拼接处还能坐人吗？",
      "十张桌子有几个接缝？",
      "每个接缝减少两个座位。"
    ],
    "solution": "Ten tables have 40 places when separate. Each of the nine joins hides two seats, so 40−2×9=22.",
    "methods": [
      "Count top and bottom (10 each) plus the two ends."
    ],
    "tip": "Invite students to justify the method;"
  },
  {
    "no": 4,
    "points": 3,
    "grade": "5-6",
    "text": "There is an advertisement in a sports store: How much does a soccer ball cost?",
    "options": {
      "A": "$130.00",
      "B": "$60.00",
      "C": "$50.00",
      "D": "$40.00",
      "E": "$30.00"
    },
    "answer": "B",
    "title": "应用题 价格关系",
    "tags": [
      "应用题",
      "价格关系"
    ],
    "hints": [
      "先读清广告中的价格和商品数量。",
      "写出不同商品组合的总价。",
      "消去其他商品，求足球单价。"
    ],
    "solution": "Answer key: B ($60). The advertisement's prices and item bundles are in the image, not the extractable text; an exact numerical derivation is not supported without reading that picture.",
    "methods": [
      "Draw a price bar model or solve equations."
    ],
    "tip": "Invite students to justify the method;",
    "figure": "assets/2006-g5-6/q4.png",
    "figureAlt": "2006 Grade 5–6 question 4: original figure"
  },
  {
    "no": 5,
    "points": 3,
    "grade": "5-6",
    "text": "On which picture do the hands of the clock form an angle with a measure of 150°?",
    "options": {
      "A": "Figure A",
      "B": "Figure B",
      "C": "Figure C",
      "D": "Figure D",
      "E": "Figure E"
    },
    "answer": "E",
    "title": "钟表 角度",
    "tags": [
      "钟表",
      "角度"
    ],
    "hints": [
      "先找出两个指针的方向。",
      "相邻两个数字对应30°。",
      "按最小夹角计数，并注意时针在两数字之间的位置。"
    ],
    "solution": "The official answer is E. Measure the smaller angle between the two hands in each clock; on a clock, successive hour marks differ by 30°, but the hour hand also moves between marks.",
    "methods": [
      "Trace the two hands and use the 12-sector circle."
    ],
    "tip": "Invite students to justify the method;",
    "figure": "assets/2006-g5-6/q5.png",
    "figureAlt": "2006 Grade 5–6 question 5: original figure"
  },
  {
    "no": 6,
    "points": 3,
    "grade": "5-6",
    "text": "On one side of Long Street there are houses numbered by consecutive odd numbers from 1 to 39, and on the other side there are houses numbered by consecutive even numbers from 2 to 34. How many houses are there on Long Street?",
    "options": {
      "A": "37",
      "B": "38",
      "C": "28",
      "D": "36",
      "E": "73"
    },
    "answer": "A",
    "title": "数列 奇偶数 计数",
    "tags": [
      "数列",
      "奇偶数",
      "计数"
    ],
    "hints": [
      "先分别数奇数门牌和偶数门牌。",
      "连续奇数1到39有多少个？",
      "把两侧房屋数相加。"
    ],
    "solution": "The odd numbers 1–39 give (39+1)÷2=20 houses. The evens 2–34 give 34÷2=17. Total=37.",
    "methods": [
      "Pair consecutive odd and even house numbers."
    ],
    "tip": "Invite students to justify the method;"
  },
  {
    "no": 7,
    "points": 3,
    "grade": "5-6",
    "text": "In how many ways can you get the number 2006 following the arrows in the figure?",
    "options": {
      "A": "12",
      "B": "11",
      "C": "10",
      "D": "8",
      "E": "6"
    },
    "answer": "D",
    "title": "图形 路径计数",
    "tags": [
      "图形",
      "路径计数"
    ],
    "hints": [
      "先确认箭头的合法行走方向。",
      "从起点逐层记录分支数量。",
      "汇总能到达2006的全部路线，避免重复。"
    ],
    "solution": "The answer key gives D (8 routes). Count routes on the directed diagram from its start to the target; the diagram is required to show the eight specific routes.",
    "methods": [
      "Make a branching tree or write path counts at nodes."
    ],
    "tip": "Invite students to justify the method;",
    "figure": "assets/2006-g5-6/q7.png",
    "figureAlt": "2006 Grade 5–6 question 7: original figure"
  },
  {
    "no": 8,
    "points": 3,
    "grade": "5-6",
    "text": "One half of one hundredth is:",
    "options": {
      "A": "0.005",
      "B": "0.002",
      "C": "0.05",
      "D": "0.02",
      "E": "0.5"
    },
    "answer": "A",
    "title": "分数 小数 换算",
    "tags": [
      "分数",
      "小数",
      "换算"
    ],
    "hints": [
      "先将百分之一写成小数。",
      "再除以2。",
      "注意小数点位置。"
    ],
    "solution": "One-hundredth is 0.01. Half is 0.01÷2=0.005.",
    "methods": [
      "Use 1/2×1/100=1/200."
    ],
    "tip": "Invite students to justify the method;"
  },
  {
    "no": 9,
    "points": 3,
    "grade": "5-6",
    "text": "Out of which of the figures below can you make the box shown in the picture?",
    "options": {
      "A": "Figure A",
      "B": "Figure B",
      "C": "Figure C",
      "D": "Figure D",
      "E": "Figure E"
    },
    "answer": "C",
    "title": "立体几何 展开图",
    "tags": [
      "立体几何",
      "展开图"
    ],
    "hints": [
      "确认目标立方体上相邻的面。",
      "判断每个展开图折叠后的相对位置。",
      "检查图案方向和相对面是否矛盾。"
    ],
    "solution": "Answer key: C. Test face adjacency and opposite-face relationships after folding each net; text extraction omits the faces and their patterns.",
    "methods": [
      "Fold a paper copy or make a face-adjacency table."
    ],
    "tip": "Invite students to justify the method;",
    "figure": "assets/2006-g5-6/q9.png",
    "figureAlt": "2006 Grade 5–6 question 9: original figure"
  },
  {
    "no": 10,
    "points": 3,
    "grade": "5-6",
    "text": "The square of the sum of the numbers 5 and 6 decreased by their product equals:",
    "options": {
      "A": "31",
      "B": "41",
      "C": "61",
      "D": "91",
      "E": "100"
    },
    "answer": "D",
    "title": "平方 数值计算",
    "tags": [
      "平方",
      "数值计算"
    ],
    "hints": [
      "先算5与6的和。",
      "将和平方，而不是分别平方后相加。",
      "最后减去两数的积。"
    ],
    "solution": "(5+6)²−5×6=11²−30=121−30=91.",
    "methods": [
      "Expand (a+b)²−ab=a²+ab+b²."
    ],
    "tip": "Invite students to justify the method;"
  },
  {
    "no": 11,
    "points": 4,
    "grade": "5-6",
    "text": "The bases of four equilateral triangles are sides of a square in which four circles with radii of 5 have been inscribed (see the picture). The perimeter of the four-pointed star is:",
    "options": {
      "A": "40",
      "B": "80",
      "C": "120",
      "D": "160",
      "E": "240"
    },
    "answer": "D",
    "title": "几何 正三角形 周长",
    "tags": [
      "几何",
      "正三角形",
      "周长"
    ],
    "hints": [
      "先由半径5得到圆的直径。",
      "利用两个并排圆的直径求正方形边长。",
      "外边界是八条等长三角形边。"
    ],
    "solution": "Key: D (160). Two diameter-10 circles span the square's side, giving 20 per side. Each of the four equilateral triangles contributes two exposed sides of length 20, hence 8×20=160.",
    "methods": [
      "Count eight exposed edges directly."
    ],
    "tip": "Invite students to justify the method;",
    "figure": "assets/2006-g5-6/q11.png",
    "figureAlt": "2006 Grade 5–6 question 11: original figure"
  },
  {
    "no": 12,
    "points": 4,
    "grade": "5-6",
    "text": "What is the difference between the sum of the first 1000 consecutive positive even numbers and the sum of the first 1000 consecutive positive odd numbers?",
    "options": {
      "A": "1",
      "B": "1002",
      "C": "500",
      "D": "1000",
      "E": "2000"
    },
    "answer": "D",
    "title": "数列 奇偶求和",
    "tags": [
      "数列",
      "奇偶求和"
    ],
    "hints": [
      "把第一个偶数与第一个奇数配对。",
      "每一对相差1。",
      "一共有1000对。"
    ],
    "solution": "Match pairs (2,1), (4,3), ..., (2000,1999). Each even number exceeds the corresponding odd number by one, so the sum differs by 1000.",
    "methods": [
      "Subtract the sequences term by term."
    ],
    "tip": "Invite students to justify the method;"
  },
  {
    "no": 13,
    "points": 4,
    "grade": "5-6",
    "text": "A piece of paper in the shape of a regular hexagon, like the one shown, is folded in such a way that the three corners marked with dots touch each other at the center of the hexagon. The obtained figure is a/an:",
    "options": {
      "A": "six-pointed star",
      "B": "dodecagon",
      "C": "hexagon",
      "D": "square",
      "E": "equilateral triangle"
    },
    "answer": "E",
    "title": "折纸 正六边形",
    "tags": [
      "折纸",
      "正六边形"
    ],
    "hints": [
      "先标出正六边形交替的三个顶点。",
      "把三个顶点向中心折。",
      "观察最后外部轮廓有几条边及是否等长。"
    ],
    "solution": "The source answer is E, an equilateral triangle. The fold lines reshape three alternating corner regions into the three sides of an equilateral triangle.",
    "methods": [
      "Make a physical paper hexagon and fold."
    ],
    "tip": "Invite students to justify the method;",
    "figure": "assets/2006-g5-6/q13.png",
    "figureAlt": "2006 Grade 5–6 question 13: original figure"
  },
  {
    "no": 14,
    "points": 4,
    "grade": "5-6",
    "text": "To paint all sides of a cube that was built out of little cubes (see Figure 1), 9 fluid ounces of paint were used. How many fluid ounces of paint are needed to paint the white region of the solid shown in Figure 2?",
    "options": {
      "A": "2",
      "B": "3",
      "C": "4.5",
      "D": "6",
      "E": "7"
    },
    "answer": "A",
    "title": "表面积 立方体涂色",
    "tags": [
      "表面积",
      "立方体涂色"
    ],
    "hints": [
      "先数第一个立体外表面的小正方形面。",
      "每个单位小面需多少涂料？",
      "再数第二个白色区域的单位面数。"
    ],
    "solution": "The key is A (2 ounces). Paint needed is proportional to surface area. Count the unit faces in each illustrated white region, and scale from the first solid's nine-ounce reference.",
    "methods": [
      "Model solids with unit cubes and count exposed faces."
    ],
    "tip": "Invite students to justify the method;",
    "figure": "assets/2006-g5-6/q14.png",
    "figureAlt": "2006 Grade 5–6 question 14: original figure"
  },
  {
    "no": 15,
    "points": 4,
    "grade": "5-6",
    "text": "A car is driving at a constant speed of 25 meters per second. How many kilometers will it travel in one hour? (1 kilometer = 1000 meters)",
    "options": {
      "A": "100",
      "B": "90",
      "C": "80",
      "D": "75",
      "E": "60"
    },
    "answer": "B",
    "title": "速度 单位换算",
    "tags": [
      "速度",
      "单位换算"
    ],
    "hints": [
      "一小时等于多少秒？",
      "速度乘时间求米数。",
      "再把米换成千米。"
    ],
    "solution": "One hour has 3600 seconds. Distance 25×3600=90000 meters =90 km.",
    "methods": [
      "Convert 25 m/s into km/h directly by multiplying by 3.6."
    ],
    "tip": "Invite students to justify the method;"
  },
  {
    "no": 16,
    "points": 4,
    "grade": "5-6",
    "text": "In a rectangle ABCD, |AB| = 4 inches, and |BC| = 1 inch. Point E is the midpoint of AB, F is the midpoint of AE, G is the midpoint of AD, and H is the midpoint of AG. The area of the shaded rectangle in square inches is:",
    "options": {
      "A": "1/4",
      "B": "1",
      "C": "1/8",
      "D": "1/2",
      "E": "1/16"
    },
    "answer": "A",
    "title": "几何 中点 面积",
    "tags": [
      "几何",
      "中点",
      "面积"
    ],
    "hints": [
      "依次求出AB和AE的一半。",
      "依次求出AD和AG的一半。",
      "阴影宽为FE，高为HG，相乘求面积。"
    ],
    "solution": "Repeated halving gives FE = AB/4 = 1 inch and HG = AD/4 = 1/4 inch. The shaded rectangle has area 1 × 1/4 = 1/4 square inch.",
    "methods": [
      "Use fraction lengths 1/4 of both original sides."
    ],
    "tip": "Invite students to justify the method;",
    "figure": "assets/2006-g5-6/q16.png",
    "figureAlt": "2006 Grade 5–6 question 16: original figure"
  },
  {
    "no": 17,
    "points": 4,
    "grade": "5-6",
    "text": "What is the result of the addition and subtraction shown to the right?",
    "options": {
      "A": "111111111",
      "B": "1010101010",
      "C": "100000000",
      "D": "999999999",
      "E": "1000000000"
    },
    "answer": "B",
    "title": "竖式 加减法 位值",
    "tags": [
      "竖式",
      "加减法",
      "位值"
    ],
    "hints": [
      "先辨认每一行的大数和运算符号。",
      "从个位开始竖式运算。",
      "检查进位、借位和结果位数。"
    ],
    "solution": "Key answer B (1010101010).",
    "methods": [
      "Group place values and check using inverse operations."
    ],
    "tip": "Invite students to justify the method;",
    "figure": "assets/2006-g5-6/q17.png",
    "figureAlt": "2006 Grade 5–6 question 17: original figure"
  },
  {
    "no": 18,
    "points": 4,
    "grade": "5-6",
    "text": "The diameter of the circle in the picture is 10. What is the perimeter of the figure marked with the bold line?",
    "options": {
      "A": "8",
      "B": "16",
      "C": "20",
      "D": "25",
      "E": "30"
    },
    "answer": "C",
    "title": "几何 圆周 曲线长度",
    "tags": [
      "几何",
      "圆周",
      "曲线长度"
    ],
    "hints": [
      "先判断粗线包括直线还是曲线。",
      "将对称线段或弧线配对。",
      "只加粗线部分，不能把全部图线都算进去。"
    ],
    "solution": "Key answer C (20).",
    "methods": [
      "Trace the entire bold boundary once, marking counted sections."
    ],
    "tip": "Invite students to justify the method;",
    "figure": "assets/2006-g5-6/q18.png",
    "figureAlt": "2006 Grade 5–6 question 18: original figure"
  },
  {
    "no": 19,
    "points": 4,
    "grade": "5-6",
    "text": "Six cars are parked in a parking lot in two rows. Which of the paths from S to F is the shortest?",
    "options": {
      "A": "Figure A",
      "B": "Figure B",
      "C": "Figure C",
      "D": "Figure D",
      "E": "All are equal."
    },
    "answer": "B",
    "title": "几何 路径比较",
    "tags": [
      "几何",
      "路径比较"
    ],
    "hints": [
      "先确认S与F位置及障碍。",
      "比较各路径绕行增加的线段。",
      "只需比较多余的路程，不必逐段重复计算。"
    ],
    "solution": "Key answer B. Compare the horizontal and vertical components of each allowable path and any necessary detours; choose the shortest path avoiding cars.",
    "methods": [
      "Straighten paths and count grid units."
    ],
    "tip": "Invite students to justify the method;",
    "figure": "assets/2006-g5-6/q19.png",
    "figureAlt": "2006 Grade 5–6 question 19: original figure"
  },
  {
    "no": 20,
    "points": 4,
    "grade": "5-6",
    "text": "Anne added the largest two-digit number divisible by 3 to the smallest two-digit number divisible by 3. Adam added the largest two-digit number not divisible by 3 to the smallest twodigit number not divisible by 3. What is the difference between the sum that Anne calculated and the sum that Adam calculated?",
    "options": {
      "A": "2",
      "B": "3",
      "C": "4",
      "D": "5",
      "E": "6"
    },
    "answer": "B",
    "title": "整除 两位数 极值",
    "tags": [
      "整除",
      "两位数",
      "极值"
    ],
    "hints": [
      "先找最小和最大的两位数。",
      "分别筛选3的倍数与非倍数。",
      "算两人的总和后求差。"
    ],
    "solution": "Anne: largest 99, smallest 12, sum 111. Adam: largest nonmultiple 98 and smallest 10, sum 108. Difference 3.",
    "methods": [
      "List boundary candidates and check divisibility."
    ],
    "tip": "Invite students to justify the method;"
  },
  {
    "no": 21,
    "points": 5,
    "grade": "5-6",
    "text": "On segment |OE| with a length of 2006, we place points A, B, and C so that the length of |OA|=|BE| =1111, and |OC|= 70% of |OE|. What is the order of points A, B, and C on the segment |OE|?",
    "options": {
      "A": "A, B, C",
      "B": "A, C, B",
      "C": "C,B,A",
      "D": "B, C, A",
      "E": "B, A, C"
    },
    "answer": "E",
    "title": "数轴 百分数 比较",
    "tags": [
      "数轴",
      "百分数",
      "比较"
    ],
    "hints": [
      "把所有点都换成距离O的坐标。",
      "B距O是2006−1111。",
      "比较895、1111和1404.2。"
    ],
    "solution": "A is 1111 from O. B is 2006−1111=895 from O. C is 0.70×2006=1404.2 from O. Thus B, A, C (E).",
    "methods": [
      "Draw a scaled number line."
    ],
    "tip": "Invite students to justify the method;"
  },
  {
    "no": 22,
    "points": 5,
    "grade": "5-6",
    "text": "A rope 15 inches long has been divided into the greatest possible number of pieces in such a way that each piece has a different length, and each of these lengths in inches is expressed by a whole number. How many cuts were made?",
    "options": {
      "A": "3",
      "B": "4",
      "C": "5",
      "D": "6",
      "E": "7"
    },
    "answer": "B",
    "title": "整数 分拆 最多段数",
    "tags": [
      "整数",
      "分拆",
      "最多段数"
    ],
    "hints": [
      "每段长度必须是不同的正整数。",
      "要让段数最多，优先取最短长度1、2、3……",
      "5段需要几次剪切？"
    ],
    "solution": "To maximize pieces, choose shortest different positive integer lengths: 1+2+3+4+5=15. Five pieces need four cuts, answer B.",
    "methods": [
      "Use triangular numbers n(n+1)/2."
    ],
    "tip": "Invite students to justify the method;"
  },
  {
    "no": 23,
    "points": 5,
    "grade": "5-6",
    "text": "There are two islands on a river that goes through a certain city. There are six connecting bridges as shown in the picture. If we want to travel from point A to point B, starting the journey at bridge 1 and going through each bridge exactly once, then how many possible routes can we take?",
    "options": {
      "A": "0",
      "B": "2",
      "C": "4",
      "D": "6",
      "E": "more than 6"
    },
    "answer": "D",
    "title": "图论 一笔画 路线",
    "tags": [
      "图论",
      "一笔画",
      "路线"
    ],
    "hints": [
      "把河岸和岛屿看作顶点、桥看作边。",
      "先固定经过1号桥。",
      "再找所有不重复过桥而到达B的合法路线。"
    ],
    "solution": "Key answer D (6). Label each land region as a vertex, each bridge as an edge, and count routes beginning with bridge 1 that use every edge exactly once and finish at B.",
    "methods": [
      "List possible paths as edge sequences or use parity at vertices."
    ],
    "tip": "Invite students to justify the method;",
    "figure": "assets/2006-g5-6/q23.png",
    "figureAlt": "2006 Grade 5–6 question 23: original figure"
  },
  {
    "no": 24,
    "points": 5,
    "grade": "5-6",
    "text": "Which set of three numbers represents three points on a number line where one of them is the midpoint of a segment with the ends represented by the other two numbers?",
    "options": {
      "A": "1/3, 1/4, 1/5",
      "B": "12, 21, 32",
      "C": "1/10, 9/80, 1/8",
      "D": "0.3, 0.7, 1.3",
      "E": "24, 48, 64"
    },
    "answer": "C",
    "title": "数轴 中点 分数",
    "tags": [
      "数轴",
      "中点",
      "分数"
    ],
    "hints": [
      "中点的数是两端数字的平均数。",
      "先把分数化成同分母。",
      "检查8/80、9/80、10/80是否等距。"
    ],
    "solution": "For answer C, the values are 1/10=8/80, 9/80 and 1/8=10/80. So 9/80 is the midpoint of the other two. The other choices do not have that average.",
    "methods": [
      "Check whether twice the middle value equals the other two summed."
    ],
    "tip": "Invite students to justify the method;"
  },
  {
    "no": 25,
    "points": 5,
    "grade": "5-6",
    "text": "Barbara is creating different squares using sticks of equal length in the way shown in the picture. She labeled the squares with numbers 1, 2, 3, and so on. How many more sticks will she use to create the 31st square compared to the 30th square?",
    "options": {
      "A": "148",
      "B": "61",
      "C": "254",
      "D": "120",
      "E": "124"
    },
    "answer": "E",
    "title": "图形 图案规律 周长",
    "tags": [
      "图形",
      "图案规律",
      "周长"
    ],
    "hints": [
      "先找第n个图形如何增加一圈。",
      "比较第31层与第30层新增的边。",
      "按规律代入n=30。"
    ],
    "solution": "The key gives E, 124. In a full n-by-n grid, the added (n+1)st outer layer uses 4n+4 sticks; for n=30 that equals 124.",
    "methods": [
      "Derive the first differences from successive square figures."
    ],
    "tip": "Invite students to justify the method;",
    "figure": "assets/2006-g5-6/q25.png",
    "figureAlt": "2006 Grade 5–6 question 25: original figure"
  },
  {
    "no": 26,
    "points": 5,
    "grade": "5-6",
    "text": "Two diagrams of the same cube are shown (see the picture). One letter was written on each side of the cube. In the second figure only two sides have letters on them; the letters on the remaining sides have been erased. What letter was erased from the side marked with the question mark?",
    "options": {
      "A": "A",
      "B": "B",
      "C": "C",
      "D": "E",
      "E": "It is impossible to determine."
    },
    "answer": "D",
    "title": "立方体 旋转 面对应",
    "tags": [
      "立方体",
      "旋转",
      "面对应"
    ],
    "hints": [
      "寻找两个立方体视图中相同的字母。",
      "固定共同面，想象立方体旋转。",
      "根据相邻面的相对顺序判断问号位置。"
    ],
    "solution": "Key answer D (E). Find the common visible faces in the two cube views, keep their cyclic orientation consistent, and infer the hidden label.",
    "methods": [
      "Construct a paper cube or map opposite faces."
    ],
    "tip": "Invite students to justify the method;",
    "figure": "assets/2006-g5-6/q26.png",
    "figureAlt": "2006 Grade 5–6 question 26: original figure"
  },
  {
    "no": 27,
    "points": 5,
    "grade": "5-6",
    "text": "A tanker delivered gas to three different gas stations. At the first gas station 30% of the gas was taken out, at the second gas station 40% of the remaining gas in the tank was taken out, and at the third gas station half of the remaining gas was taken out. What percent of the initial amount of gas is left in the tank?",
    "options": {
      "A": "21",
      "B": "10",
      "C": "12",
      "D": "14",
      "E": "15"
    },
    "answer": "A",
    "title": "百分比 连续剩余",
    "tags": [
      "百分比",
      "连续剩余"
    ],
    "hints": [
      "每次百分比都针对当前剩余油量。",
      "分别求剩余70%、60%、50%。",
      "三个剩余比例相乘。"
    ],
    "solution": "After first delivery 70% remains. After second, 60% of that remains. After third, 50% remains. Product: 0.70×0.60×0.50=0.21, or 21%.",
    "methods": [
      "Choose a starting quantity of 100 units."
    ],
    "tip": "Invite students to justify the method;"
  },
  {
    "no": 28,
    "points": 5,
    "grade": "5-6",
    "text": "In a certain class, 1/8 of the students received a C on the math exam, 1/6 received a B, and 2/3 received an A. There were no D's. How many students received an F if there were less than 30 students in the class?",
    "options": {
      "A": "0",
      "B": "1",
      "C": "2",
      "D": "3",
      "E": "4"
    },
    "answer": "B",
    "title": "分数 班级人数 整数",
    "tags": [
      "分数",
      "班级人数",
      "整数"
    ],
    "hints": [
      "分数对应的人数必须是整数。",
      "找8、6、3的公倍数且小于30。",
      "24人中A、B、C共23人。"
    ],
    "solution": "The class size must be divisible by 8, 6 and 3 for the fractions to give whole students, so it is 24 (less than 30). A+B+C share = 2/3+1/6+1/8=16/24+4/24+3/24=23/24. One student gets F.",
    "methods": [
      "Use the least common multiple and a common denominator."
    ],
    "tip": "Invite students to justify the method;"
  },
  {
    "no": 29,
    "points": 5,
    "grade": "5-6",
    "text": "Three friends, Adam, Tom, and Paul, went to the swimming pool 15 times. Adam bought the tickets for all of them 8 times and Tom did the same 7 times. Paul gave 30 dollars to his friends, which, as he calculated, he owed for the pool tickets. How should Adam and Tom split those 30 dollars so that each boy pays the same amount for the pool tickets?",
    "options": {
      "A": "$22 for Adam and $8 for Tom",
      "B": "$20 for Adam and $10 for Tom",
      "C": "$15 for Adam and $15 for Tom",
      "D": "$16 for Adam and $14 for Tom",
      "E": "$18 for Adam and $12 for Tom"
    },
    "answer": "E",
    "title": "费用 分摊 公平",
    "tags": [
      "费用",
      "分摊",
      "公平"
    ],
    "hints": [
      "Paul付30美元相当于他的15张票。",
      "求每张票单价。",
      "各人最后都应承担自己15张票的钱。"
    ],
    "solution": "Paul's 15 tickets cost $30, so each ticket is $2. Each boy's own 15 tickets cost $30. Adam paid 8×3×$2=$48 and should recover $18; Tom paid 7×3×$2=$42 and should recover $12. Answer E.",
    "methods": [
      "Track paid amount minus personal share for each buyer."
    ],
    "tip": "Invite students to justify the method;"
  },
  {
    "no": 30,
    "points": 5,
    "grade": "5-6",
    "text": "All the whole numbers from 1 to 2006 were written on a blackboard. John underlined all the numbers divisible by 2, Adam underlined all the numbers divisible by 3, and Peter underlined all the numbers divisible by 4. How many numbers were underlined exactly twice?",
    "options": {
      "A": "1003",
      "B": "668",
      "C": "501",
      "D": "334",
      "E": "167"
    },
    "answer": "C",
    "title": "集合 整除 恰好两次",
    "tags": [
      "集合",
      "整除",
      "恰好两次"
    ],
    "hints": [
      "能被4整除一定也能被2整除。",
      "分类：4的倍数但非3的倍数，或6的倍数但非4的倍数。",
      "分别数两类，不能重复计算12的倍数。"
    ],
    "solution": "A number divisible by 4 is automatically divisible by 2. Exactly two underline marks occur for multiples of 4 not divisible by 3, and for multiples of 6 not divisible by 4. Count multiples of 4: floor(2006/4)=501; subtract multiples of 12: floor(2006/12)=167 ⇒334. Count multiples of 6: floor(2006/6)=334; subtract multiples of 12:167 ⇒167. Total 334+167=501 (answer C).",
    "methods": [
      "Use a Venn diagram and inclusion-exclusion."
    ],
    "tip": "Invite students to justify the method;"
  }
];

Object.assign(KANGAROO_EXTENSIONS, {
  "2006-g5-6-1": {
    "text": "3 × 2010 = 2009 + 2011 + a. Find a.",
    "change": "只替换年份数字，保留对称加法关系。",
    "method": "The neighboring years add to twice the middle year.",
    "answer": "2010: 3×2010−(2009+2011)=2010.",
    "solution": ""
  },
  "2006-g5-6-2": {
    "text": "Arrange the cards bearing 7, 65 and 4 to make the greatest number.",
    "change": "用三个数字卡片替代原图，仍求拼接后的最大数。",
    "method": "Compare alternative orders from the leftmost digits.",
    "answer": "7654: arrange 7, 65, 4 in that order.",
    "solution": ""
  },
  "2006-g5-6-3": {
    "text": "If 15 such tables are joined in a row, how many seats remain?",
    "change": "把桌子数量10改为15。",
    "method": "Count two seats per table along the long sides plus two end seats.",
    "answer": "32 seats: 2×15+2=32.",
    "solution": ""
  },
  "2006-g5-6-4": {
    "text": "Two identical soccer balls and one $20 pump cost $140. How much is one ball?",
    "change": "将图片广告改成明确的商品组合及价格。",
    "method": "Subtract the pump and divide the balance between the two balls.",
    "answer": "$60: (140−20)÷2=60.",
    "solution": ""
  },
  "2006-g5-6-5": {
    "text": "At exactly 5:00, what angle do the hands make?",
    "change": "把选钟表图改成直接根据时刻求夹角。",
    "method": "Multiply the number of hour-mark gaps by 30°.",
    "answer": "150°: five gaps × 30°.",
    "solution": ""
  },
  "2006-g5-6-6": {
    "text": "What if the odd side runs 1–49 and the even side 2–40?",
    "change": "只改变两侧门牌号码的终点。",
    "method": "Odd count is (last+1)/2; even count is last/2.",
    "answer": "45 houses: 25 odd + 20 even.",
    "solution": ""
  },
  "2006-g5-6-7": {
    "text": "A directed diagram has two choices at each of three consecutive stages. How many paths are there?",
    "change": "用明确的三级分支代替原图。",
    "method": "Multiply independent choices stage by stage.",
    "answer": "8 paths: 2×2×2.",
    "solution": ""
  },
  "2006-g5-6-8": {
    "text": "Find one-quarter of one-hundredth.",
    "change": "把“一半”改成“四分之一”。",
    "method": "Multiply the two fractions, then convert to a decimal.",
    "answer": "0.0025: 1/4 × 1/100 = 1/400.",
    "solution": ""
  },
  "2006-g5-6-9": {
    "text": "Can six unit squares arranged as a straight 1×6 strip fold into a cube without overlap?",
    "change": "用简单的展开图替换复杂选项，保留折叠可行性判断。",
    "method": "A cube net must bring six faces together without overlap.",
    "answer": "No. A straight strip cannot fold into a closed cube net.",
    "solution": ""
  },
  "2006-g5-6-10": {
    "text": "Find the square of the sum of 4 and 7, decreased by their product.",
    "change": "把两个数字改成4和7。",
    "method": "Calculate (a+b)²−ab.",
    "answer": "93: 11²−4×7=121−28=93.",
    "solution": ""
  },
  "2006-g5-6-11": {
    "text": "If the circles each have radius 3 in the same figure, what is the star perimeter?",
    "change": "将半径5改为3，其他结构不变。",
    "method": "Each square side is four radii; the star perimeter is eight such sides.",
    "answer": "96: square side 12; eight outer edges × 12.",
    "solution": ""
  },
  "2006-g5-6-12": {
    "text": "What is the difference between the first 250 positive evens and odds?",
    "change": "把项数1000改为250。",
    "method": "Pair corresponding even and odd integers.",
    "answer": "250: each of 250 pairs differs by 1.",
    "solution": ""
  },
  "2006-g5-6-13": {
    "text": "A regular hexagon's three alternate vertices are joined. What polygon do they form?",
    "change": "将折纸操作改为连接交替顶点的平面图形。",
    "method": "Alternate vertices are equally spaced around the center.",
    "answer": "An equilateral triangle.",
    "solution": ""
  },
  "2006-g5-6-14": {
    "text": "Painting 18 equal unit faces takes 9 oz. How much paints 6 such faces?",
    "change": "将复杂立体图改为直接给出单位面数。",
    "method": "Find paint per unit face and multiply by six.",
    "answer": "3 oz: 9/18×6=3.",
    "solution": ""
  },
  "2006-g5-6-15": {
    "text": "How far does a car at 15 m/s travel in two hours?",
    "change": "修改速度与时间，仍练习单位换算。",
    "method": "Use seconds for time and convert meters into kilometers.",
    "answer": "108 km: 15×7200÷1000=108.",
    "solution": ""
  },
  "2006-g5-6-16": {
    "text": "For a 8×4 rectangle, take quarter-length segments along each side from one corner. What is their rectangle's area?",
    "change": "把原长宽改为8和4。",
    "method": "The quarter-by-quarter area is 1/16 of the whole rectangle.",
    "answer": "2 in²: (8/4)×(4/4)=2.",
    "solution": ""
  },
  "2006-g5-6-17": {
    "text": "Compute 1000000000+10101010.",
    "change": "将图片竖式换成明确写出的两个整数。",
    "method": "Align numbers by place value, then add from right to left.",
    "answer": "1010101010.",
    "solution": ""
  },
  "2006-g5-6-18": {
    "text": "A square has side 5. What is its perimeter?",
    "change": "将图形边界改为明确的正方形，仍求粗线总长度。",
    "method": "Count four congruent sides.",
    "answer": "20 units: 4×5.",
    "solution": ""
  },
  "2006-g5-6-19": {
    "text": "Between two points, route A goes 6 units right and 4 up, while route B adds a 2-unit backtrack. How much shorter is A?",
    "change": "用可计算的直角路径替代原图。",
    "method": "A backtrack adds distance without changing the net displacement.",
    "answer": "A is 4 units shorter: a 2-unit backtrack must be undone, adding 4 units.",
    "solution": ""
  },
  "2006-g5-6-20": {
    "text": "Repeat for multiples versus nonmultiples of 5.",
    "change": "把整除条件3改为5。",
    "method": "Find extremes among two-digit multiples of five and among nonmultiples.",
    "answer": "Anne 10+95=105; Adam 11+99=110; difference 5.",
    "solution": ""
  },
  "2006-g5-6-21": {
    "text": "On a 1000-unit segment, OA=600, BE=600, OC=70% of OE. Order A,B,C.",
    "change": "改变全长和已知距离，仍比较同一起点坐标。",
    "method": "Express all three positions as distances from O.",
    "answer": "B, A, C: B=400, A=600, C=700.",
    "solution": ""
  },
  "2006-g5-6-22": {
    "text": "A 21-inch rope is cut into the greatest number of distinct positive integer lengths. How many cuts?",
    "change": "把绳长从15改为21。",
    "method": "Try 1+2+...+n and subtract one for the cut count.",
    "answer": "5 cuts: 1+2+3+4+5+6=21, six pieces.",
    "solution": ""
  },
  "2006-g5-6-23": {
    "text": "A chain of three bridges A–X–Y–B must be crossed once each, starting at A. How many routes end at B?",
    "change": "将六桥复杂网络换为三桥链，保留不重复过桥条件。",
    "method": "The path is forced when no branch is available.",
    "answer": "One: A→X→Y→B.",
    "solution": ""
  },
  "2006-g5-6-24": {
    "text": "Which of 1/6, 5/24, 1/4 is the midpoint of the other two?",
    "change": "改变三个分数但保留判定中点方法。",
    "method": "Write all fractions over denominator 24.",
    "answer": "5/24: 1/6=4/24 and 1/4=6/24.",
    "solution": ""
  },
  "2006-g5-6-25": {
    "text": "In the same growing-square-stick pattern, how many extra sticks build square 11 rather than square 10?",
    "change": "将第31与30改为第11与10。",
    "method": "Use the layer-growth rule 4n+4 with n=10.",
    "answer": "44 sticks.",
    "solution": ""
  },
  "2006-g5-6-26": {
    "text": "A cube has opposite-face pairs A–D, B–E, C–F. What is opposite B?",
    "change": "把复杂旋转图改为给定相对面关系。",
    "method": "Use the listed opposite-face pairs.",
    "answer": "E.",
    "solution": ""
  },
  "2006-g5-6-27": {
    "text": "Remove 20%, then 25% of the remainder, then half. What percentage is left?",
    "change": "更改前两次取走比例，最后仍取一半。",
    "method": "Multiply remaining fractions 80%, 75%, 50%.",
    "answer": "30%: 0.8×0.75×0.5=0.30.",
    "solution": ""
  },
  "2006-g5-6-28": {
    "text": "For a class of fewer than 50, 1/6 get C, 1/4 get B and 1/2 get A; the total is the least positive valid class size. How many receive F?",
    "change": "更换分数及人数上限，仍用公倍数求总人数。",
    "method": "LCM of denominators 6,4,2 is 12; subtract counts.",
    "answer": "1 student: 12−(2+3+6)=1.",
    "solution": ""
  },
  "2006-g5-6-29": {
    "text": "If Adam pays for three tickets six times and Tom four times, with each ticket costing $5, how much must Paul reimburse each?",
    "change": "次数15改为10，票价明确为5美元。",
    "method": "Compare what each buyer paid with their own 10-ticket share.",
    "answer": "Paul reimburses Adam $40 and Tom $10: Adam paid $90 minus own $50; Tom paid $60 minus own $50.",
    "solution": ""
  },
  "2006-g5-6-30": {
    "text": "Among integers 1–120, count those divisible by exactly two of 2,3,4.",
    "change": "把上限2006改成120。",
    "method": "Count (multiples of 4 or 6) but remove multiples of 12 twice.",
    "answer": "30: (30−10)+(20−10)=20+10=30.",
    "solution": ""
  }
});
