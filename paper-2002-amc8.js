// Source: user-provided AoPS PDFs in past papers/ACM 8. Problems © MAA.
KANGAROO_DATA["2002-amc8"] = [
  {
    "no": 1,
    "searchText": "A circle and two distinct lines are drawn on a sheet of paper. What is the largest possible number of points of intersection of\nthese figures?",
    "questionImage": "assets/2002-amc8-local/q1.png",
    "grade": "amc8",
    "points": 1,
    "title": "圆与线最多交点",
    "text": "圆与线最多交点",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "D",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2002_AMC_8_Problems/Problem_1",
    "tags": [
      "圆",
      "最值"
    ],
    "methods": [
      "让两条直线彼此相交且各与圆交于两点，逐对累加交点数取最大。",
      "用每对图形最多贡献几个交点的上界思路分类枚举一般位置组合，并验证该上界可以达到。"
    ],
    "hints": []
  },
  {
    "no": 2,
    "searchText": "How many different combinations of $5 bills and $2 bills can be used to make a total of $17? Order does not matter in this\nproblem.",
    "questionImage": "assets/2002-amc8-local/q2.png",
    "grade": "amc8",
    "points": 1,
    "title": "纸币组合数",
    "text": "纸币组合数",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "A",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2002_AMC_8_Problems/Problem_2",
    "tags": [
      "方程",
      "枚举"
    ],
    "methods": [
      "设两种面额纸币的张数，列二元一次方程后按其中一个变量的取值范围枚举非负整数解。",
      "固定一种纸币的张数，用余数检验剩余金额能否被另一面额整除，逐个统计可行组合。"
    ],
    "hints": []
  },
  {
    "no": 3,
    "searchText": "What is the smallest possible average of four distinct positive even integers?",
    "questionImage": "assets/2002-amc8-local/q3.png",
    "grade": "amc8",
    "points": 1,
    "title": "四偶数最小均值",
    "text": "四偶数最小均值",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "C",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2002_AMC_8_Problems/Problem_3",
    "tags": [
      "最值",
      "数与运算"
    ],
    "methods": [
      "要使平均最小，取四个最小的互异正偶数求和再除以四。",
      "把四数按递增排序，用下界估计总和的最小值，再验证该下界确实能取到。"
    ],
    "hints": []
  },
  {
    "no": 4,
    "searchText": "The year 2002 is a palindrome (a number that reads the same from left to right as it does from right to left). What is the product\nof the digits of the next year after 2002 that is a palindrome?",
    "questionImage": "assets/2002-amc8-local/q4.png",
    "grade": "amc8",
    "points": 1,
    "title": "下个回文年数字积",
    "text": "下个回文年数字积",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "B",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2002_AMC_8_Problems/Problem_4",
    "tags": [
      "回文数",
      "枚举"
    ],
    "methods": [
      "利用回文数首尾相同、中间两位相同的结构，从给定年份起逐年构造下一个回文数，再求各位数字之积。",
      "枚举千位与百位，个位与十位随之确定，按位值写出四位回文数的一般形式，找到大于给定年份的最小者后算数字积。"
    ],
    "hints": []
  },
  {
    "no": 5,
    "searchText": "Carlos Montado was born on Saturday, November 9, 2002. On what day of the week will Carlos be 706 days old?",
    "questionImage": "assets/2002-amc8-local/q5.png",
    "grade": "amc8",
    "points": 1,
    "title": "七百天后星期",
    "text": "七百天后星期",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "C",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2002_AMC_8_Problems/Problem_5",
    "tags": [
      "星期问题",
      "同余"
    ],
    "methods": [
      "一周七天循环，用总天数除以七取余数，从出生那天往后数余数天。",
      "把出生日记为零，用同余把天数对七取模，或按整周平移后只看剩余天数用周期表递推。"
    ],
    "hints": []
  },
  {
    "no": 6,
    "searchText": "A birdbath is designed to overflow so that it will be self-cleaning. Water flows in at the rate of 20 milliliters per minute and\ndrains at the rate of 18 milliliters per minute. One of these graphs shows the volume of water in the birdbath during the filling\ntime and continuing into the overflow time. Which one is it?\n",
    "questionImage": "assets/2002-amc8-local/q6.png",
    "grade": "amc8",
    "points": 1,
    "title": "水盆水位图像",
    "text": "水盆水位图像",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "A",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2002_AMC_8_Problems/Problem_6",
    "tags": [
      "图形识别",
      "排除法"
    ],
    "methods": [
      "分两阶段分析：进水快于排水时体积线性上升，溢出后保持恒定，据此选先升后平的折线。",
      "用排除法删去持续上升、下降或突然归零的图，再用净流量判断上升段斜率大小锁定唯一图。"
    ],
    "hints": []
  },
  {
    "no": 7,
    "searchText": "The students in Mrs. Sawyer's class were asked to do a taste test of five kinds of candy. Each student chose one kind of candy.\nA bar graph of their preferences is shown. What percent of her class chose candy E?",
    "questionImage": "assets/2002-amc8-local/q7.png",
    "grade": "amc8",
    "points": 1,
    "title": "柱状图求占比",
    "text": "柱状图求占比",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "E",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2002_AMC_8_Problems/Problem_7",
    "tags": [
      "表格法",
      "百分数"
    ],
    "methods": [
      "从柱状图读出各柱人数求和得总人数，用目标柱人数除以总数化成百分数。",
      "以总量百分之一百为基准，先求每根柱代表的份额，再直接读出目标柱所占份额，也可用比例估算。"
    ],
    "hints": []
  },
  {
    "no": 8,
    "searchText": "How many of his European stamps were issued in the '80s?",
    "questionImage": "assets/2002-amc8-local/q8.png",
    "grade": "amc8",
    "points": 1,
    "title": "欧洲八十年代邮票",
    "text": "欧洲八十年代邮票",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "D",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2002_AMC_8_Problems/Problem_8",
    "tags": [
      "表格法",
      "计数"
    ],
    "methods": [
      "在表格中定位欧洲国家对应行与目标年代对应列，把交叉格的数字相加。",
      "先按国家属性筛出欧洲行，再按年代列分类汇总，也可逐格枚举表格单元避免漏计。"
    ],
    "hints": []
  },
  {
    "no": 9,
    "searchText": "His South American stamps issued before the ‘70s cost him",
    "questionImage": "assets/2002-amc8-local/q9.png",
    "grade": "amc8",
    "points": 1,
    "title": "南美早期邮票价",
    "text": "南美早期邮票价",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "B",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2002_AMC_8_Problems/Problem_9",
    "tags": [
      "表格法",
      "乘法"
    ],
    "methods": [
      "查出南美国家在目标年代前的枚数，分别乘各自单价后相加。",
      "先按单价把同价国家分组，用乘法把枚数与单价配对求和，再按年代列汇总。"
    ],
    "hints": []
  },
  {
    "no": 10,
    "searchText": "The average price of his '70s stamps is closest to",
    "questionImage": "assets/2002-amc8-local/q10.png",
    "grade": "amc8",
    "points": 1,
    "title": "七十年代均价",
    "text": "七十年代均价",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "E",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2002_AMC_8_Problems/Problem_10",
    "tags": [
      "表格法",
      "比较大小"
    ],
    "methods": [
      "把目标年代所有邮票按各自单价加权求和，除以该年代总枚数得均价再与选项比较。",
      "以各价位的枚数为权重估计均价落在哪两个价位之间，用排除法选最接近的选项。"
    ],
    "hints": []
  },
  {
    "no": 11,
    "searchText": "A sequence of squares is made of identical square tiles. The edge of each square is one tile length longer than the edge of the\nprevious square. The first three squares are shown. How many more tiles does the seventh square require than the sixth?",
    "questionImage": "assets/2002-amc8-local/q11.png",
    "grade": "amc8",
    "points": 1,
    "title": "方阵瓷砖增量",
    "text": "方阵瓷砖增量",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "C",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2002_AMC_8_Problems/Problem_11",
    "tags": [
      "数列",
      "递推"
    ],
    "methods": [
      "第 n 个正方形用边长的平方枚瓷砖，写出通项后求相邻两项之差。",
      "用递推看相邻两项的增量：边长每加一时新增的是一圈瓷砖，按周长加角写出增量公式再代入。"
    ],
    "hints": []
  },
  {
    "no": 12,
    "searchText": "A board game spinner is divided into three regions labeled , and . The probability of the arrow stopping on region is\nand on region is . The probability of the arrow stopping on region is",
    "questionImage": "assets/2002-amc8-local/q12.png",
    "grade": "amc8",
    "points": 1,
    "title": "转盘剩余概率",
    "text": "转盘剩余概率",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "B",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2002_AMC_8_Problems/Problem_12",
    "tags": [
      "概率",
      "分数"
    ],
    "methods": [
      "三个区域概率之和为一，用一减去已知两区概率即得第三区。",
      "把已知概率通分成同分母分数，用整体一的分数形式作减法，或用补集思想处理。"
    ],
    "hints": []
  },
  {
    "no": 13,
    "searchText": "For his birthday, Bert gets a box that holds 125 jellybeans when filled to capacity. A few weeks later, Carrie gets a larger box full\nof jellybeans. Her box is twice as high, twice as wide and twice as long as Bert's. Approximately, how many jellybeans did Carrie\nget?",
    "questionImage": "assets/2002-amc8-local/q13.png",
    "grade": "amc8",
    "points": 1,
    "title": "果冻豆盒容量",
    "text": "果冻豆盒容量",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "E",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2002_AMC_8_Problems/Problem_13",
    "tags": [
      "体积",
      "比例"
    ],
    "methods": [
      "三个维度各翻一倍，体积按立方倍放大，用原容量乘该倍数估算。",
      "用相似立体体积比等于线性比的立方的比例思想，再由容量与体积成正比推出结果。"
    ],
    "hints": []
  },
  {
    "no": 14,
    "searchText": "A merchant offers a large group of items at 30% off. Later, the merchant takes 20% off these sale prices. The total discount is",
    "questionImage": "assets/2002-amc8-local/q14.png",
    "grade": "amc8",
    "points": 1,
    "title": "两次折扣合计",
    "text": "两次折扣合计",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "B",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2002_AMC_8_Problems/Problem_14",
    "tags": [
      "百分数",
      "运算律"
    ],
    "methods": [
      "设原价为单位一，依次乘两次折后系数得最终价，再用一减得总折扣。",
      "用运算律把两次折扣合并成净折扣率，注意第二次折扣的基数是折后价，也可取方便的原价代入检验。"
    ],
    "hints": []
  },
  {
    "no": 15,
    "searchText": "Which of the following polygons has the largest area?",
    "questionImage": "assets/2002-amc8-local/q15.png",
    "grade": "amc8",
    "points": 1,
    "title": "多边形面积最大",
    "text": "多边形面积最大",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "E",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2002_AMC_8_Problems/Problem_15",
    "tags": [
      "网格",
      "割补法"
    ],
    "methods": [
      "用网格数出各多边形覆盖的整格与半格，或把每个图形面积算成同一单位后比较。",
      "用割补法把各多边形补成矩形再减去边角三角形，统一分母后比较大小，也可用排除法剔除明显较小者。"
    ],
    "hints": []
  },
  {
    "no": 16,
    "searchText": "Right isosceles triangles are constructed on the sides of a 3-4-5 right triangle, as shown. A capital letter represents the area of\neach triangle. Which one of the following is true?",
    "questionImage": "assets/2002-amc8-local/q16.png",
    "grade": "amc8",
    "points": 1,
    "title": "等腰直角三角形面积",
    "text": "等腰直角三角形面积",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "E",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2002_AMC_8_Problems/Problem_16",
    "tags": [
      "面积",
      "比例"
    ],
    "methods": [
      "以各边为斜边或直角边的等腰直角三角形面积与边长平方成正比，写出各字母的表达式再比较关系。",
      "用勾股定理的三边平方关系配合相似图形面积比等于边长平方比，把三个面积写成同一比例系数下的式子验证选项。"
    ],
    "hints": []
  },
  {
    "no": 17,
    "searchText": "In a mathematics contest with ten problems, a student gains 5 points for a correct answer and loses 2 points for an incorrect\nanswer. If Olivia answered every problem and her score was 29, how many correct answers did she have?",
    "questionImage": "assets/2002-amc8-local/q17.png",
    "grade": "amc8",
    "points": 1,
    "title": "竞赛得分答对数",
    "text": "竞赛得分答对数",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "C",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2002_AMC_8_Problems/Problem_17",
    "tags": [
      "方程",
      "应用题"
    ],
    "methods": [
      "设答对题数，则答错为其余题，列得分等于答对得分减去答错扣分的一元方程求解。",
      "用假设法先设全错的得分，每把一题改成答对分数就增加一个固定量，用总分差除以单题增量得答对题数。"
    ],
    "hints": []
  },
  {
    "no": 18,
    "searchText": "Gage skated 1 hr 15 min each day for 5 days and 1 hr 30 min each day for 3 days. How long would he have to skate the ninth\nday in order to average 85 minutes of skating each day for the entire time?",
    "questionImage": "assets/2002-amc8-local/q18.png",
    "grade": "amc8",
    "points": 1,
    "title": "滑冰平均时长",
    "text": "滑冰平均时长",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "E",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2002_AMC_8_Problems/Problem_18",
    "tags": [
      "单位换算",
      "方程"
    ],
    "methods": [
      "先把各段时长统一换算成分钟，设末日为 x，用总时长等于平均乘天数列出方程求解。",
      "以目标平均为基准，算出前几天每天相对基准的盈亏之和，末日补足缺口即可，避免求总和。"
    ],
    "hints": []
  },
  {
    "no": 19,
    "searchText": "How many whole numbers between 99 and 999 contain exactly one 0?",
    "questionImage": "assets/2002-amc8-local/q19.png",
    "grade": "amc8",
    "points": 1,
    "title": "恰含一个零的数",
    "text": "恰含一个零的数",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "D",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2002_AMC_8_Problems/Problem_19",
    "tags": [
      "分类讨论",
      "乘法原理"
    ],
    "methods": [
      "按零出现在十位或个位分类，分别用乘法原理数各位可选数字，注意最高位不能为零，再求和。",
      "先数含零的三位数总数，再用排除法减去含两个零的情形，或逐段枚举最高位数字统计。"
    ],
    "hints": []
  },
  {
    "no": 20,
    "searchText": "The area of triangle is 8 square inches. Points and are midpoints of congruent segments and .\nAltitude bisects . The area (in square inches) of the shaded region is",
    "questionImage": "assets/2002-amc8-local/q20.png",
    "grade": "amc8",
    "points": 1,
    "title": "中点阴影面积",
    "text": "中点阴影面积",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "D",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2002_AMC_8_Problems/Problem_20",
    "tags": [
      "中点",
      "等高模型"
    ],
    "methods": [
      "用等高模型，同高三角形面积比等于底边比，结合中点把大三角形逐层分成等面积小块求阴影占比。",
      "用割补法把阴影拆成以中位线为界的若干小三角形，或建立坐标系用底高乘积直接算面积。"
    ],
    "hints": []
  },
  {
    "no": 21,
    "searchText": "Harold tosses a nickel four times. The probability that he gets at least as many heads as tails is",
    "questionImage": "assets/2002-amc8-local/q21.png",
    "grade": "amc8",
    "points": 1,
    "title": "抛币正面不少于反面",
    "text": "抛币正面不少于反面",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "E",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2002_AMC_8_Problems/Problem_21",
    "tags": [
      "概率",
      "组合"
    ],
    "methods": [
      "用组合数分别算正面出现次数不少于一半的各种情形概率，相加即得结果。",
      "利用正反分布对称与补集：由一减去正面少于反面的概率，或先算正面恰等于反面的概率再推出。"
    ],
    "hints": []
  },
  {
    "no": 22,
    "searchText": "Six cubes, each an inch on an edge, are fastened together, as shown. Find the total surface area in square inches. Include the\ntop, bottom and sides.\n",
    "questionImage": "assets/2002-amc8-local/q22.png",
    "grade": "amc8",
    "points": 1,
    "title": "粘合方块表面积",
    "text": "粘合方块表面积",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "C",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2002_AMC_8_Problems/Problem_22",
    "tags": [
      "立方体",
      "计数"
    ],
    "methods": [
      "先按各立方体独立时的总面数算，再减去每对粘合面被遮住的两个面得外露面数。",
      "从前、后、左、右、上、下六个方向逐面数外露小正方形，或用投影分层统计后求和。"
    ],
    "hints": []
  },
  {
    "no": 23,
    "searchText": "A corner of a tiled floor is shown. If the entire floor is tiled in this way and each of the four corners looks like this one, then what\nfraction of the tiled floor is made of darker tiles?",
    "questionImage": "assets/2002-amc8-local/q23.png",
    "grade": "amc8",
    "points": 1,
    "title": "深色地砖占比",
    "text": "深色地砖占比",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "B",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2002_AMC_8_Problems/Problem_23",
    "tags": [
      "对称",
      "分数"
    ],
    "methods": [
      "利用四角相同与图案的周期性，取一个重复单元数深色砖与总砖数之比即整体比例。",
      "用对称把整块地面分成若干全等小区域，统计一个区域内深色格数，再由一一对应推广到全体求分数。"
    ],
    "hints": []
  },
  {
    "no": 24,
    "searchText": "Miki has a dozen oranges of the same size and a dozen pears of the same size. Miki uses her juicer to extract 8 ounces of pear\njuice from 3 pears and 8 ounces of orange juice from 2 oranges. She makes a pear-orange juice blend from an equal number of\npears and oranges. What percent of the blend is pear juice?",
    "questionImage": "assets/2002-amc8-local/q24.png",
    "grade": "amc8",
    "points": 1,
    "title": "混合果汁梨占比",
    "text": "混合果汁梨占比",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "B",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2002_AMC_8_Problems/Problem_24",
    "tags": [
      "比例",
      "百分数"
    ],
    "methods": [
      "设取相同个数的两种水果，分别按每只出汁量写出梨汁与橙汁体积，用梨汁除以总体积化百分数。",
      "先求每个水果出汁量之比，等量个数下体积比即该比值，用份数法直接转成百分比而无需设具体个数。"
    ],
    "hints": []
  },
  {
    "no": 25,
    "searchText": "Loki, Moe, Nick and Ott are good friends. Ott had no money, but the others did. Moe gave Ott one-fifth of his money, Loki gave\nOtt one-fourth of his money and Nick gave Ott one-third of his money. Each gave Ott the same amount of money. What\nfractional part of the group's money does Ott now have?",
    "questionImage": "assets/2002-amc8-local/q25.png",
    "grade": "amc8",
    "points": 1,
    "title": "分钱后占比",
    "text": "分钱后占比",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "B",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2002_AMC_8_Problems/Problem_25",
    "tags": [
      "分数",
      "比例"
    ],
    "methods": [
      "设每人给出的金额为一份，由各分数反推三人原有钱数，再用收到总额除以四人总钱数。",
      "用给出金额相同把三人原有钱数写成同一份数的整数倍，按份数法求收到者占总份数的比例。"
    ],
    "hints": []
  }
];
