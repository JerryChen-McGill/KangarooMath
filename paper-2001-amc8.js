// Source: user-provided AoPS PDFs in past papers/ACM 8. Problems © MAA.
KANGAROO_DATA["2001-amc8"] = [
  {
    "no": 1,
    "searchText": "John's shop class is making a golf trophy. He has to paint 300 dimples on a golf ball. If it takes him 2 seconds to paint one dimple, how\nmany minutes will he need to do his job?",
    "questionImage": "assets/2001-amc8-local/q1.png",
    "grade": "amc8",
    "points": 1,
    "title": "涂球凹坑用时",
    "text": "涂球凹坑用时",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "D",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2001_AMC_8_Problems/Problem_1",
    "tags": [
      "单位换算",
      "乘法"
    ],
    "methods": [
      "先用凹坑总数乘单个耗时得总秒数，再除以六十换算成分钟。",
      "先看每分钟能涂多少个凹坑，用总数除以每分钟个数，或把秒数折合成分数分钟直接乘。"
    ],
    "hints": []
  },
  {
    "no": 2,
    "searchText": "I'm thinking of two whole numbers. Their product is 24 and their sum is 11. What is the larger number?",
    "questionImage": "assets/2001-amc8-local/q2.png",
    "grade": "amc8",
    "points": 1,
    "title": "积和求较大数",
    "text": "积和求较大数",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "D",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2001_AMC_8_Problems/Problem_2",
    "tags": [
      "因数",
      "方程"
    ],
    "methods": [
      "列出乘积的所有因数配对，逐一检验两数之和是否满足条件，取其中较大者。",
      "设两数为一元二次方程的两根，用和与积的关系写出方程求解，或列乘积式直接解未知数。"
    ],
    "hints": []
  },
  {
    "no": 3,
    "searchText": "Granny Smith has $63. Elberta has $2 more than Anjou and Anjou has one-third as much as Granny Smith. How many dollars does\nElberta have?",
    "questionImage": "assets/2001-amc8-local/q3.png",
    "grade": "amc8",
    "points": 1,
    "title": "三人钱数关系",
    "text": "三人钱数关系",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "E",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2001_AMC_8_Problems/Problem_3",
    "tags": [
      "分数",
      "方程"
    ],
    "methods": [
      "先按分数关系求出中间一人的钱数，再加上差额得目标者的钱数，逐步代入。",
      "设未知量把三人的关系串成一条等式列一元一次方程一次解出，也可用逆向思维从已知者倒推。"
    ],
    "hints": []
  },
  {
    "no": 4,
    "searchText": "The digits 1, 2, 3, 4 and 9 are each used once to form the smallest possible even five-digit number. The digit in the tens place is",
    "questionImage": "assets/2001-amc8-local/q4.png",
    "grade": "amc8",
    "points": 1,
    "title": "最小偶数排位",
    "text": "最小偶数排位",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "E",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2001_AMC_8_Problems/Problem_4",
    "tags": [
      "位值",
      "枚举"
    ],
    "methods": [
      "要使五位数最小，高位尽量放小数字，且个位必须是偶数，按位值贪心安排后读出十位。",
      "枚举所有个位为偶数的排列，按字典序逐位比较排除，找出最小者再看十位数字。"
    ],
    "hints": []
  },
  {
    "no": 5,
    "searchText": "On a dark and stormy night Snoopy suddenly saw a flash of lightning. Ten seconds later he heard the sound of thunder. The speed of\nsound is 1088 feet per second and one mile is 5280 feet. Estimate, to the nearest half-mile, how far Snoopy was from the flash of\nlightning.",
    "questionImage": "assets/2001-amc8-local/q5.png",
    "grade": "amc8",
    "points": 1,
    "title": "雷声测距离",
    "text": "雷声测距离",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "C",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2001_AMC_8_Problems/Problem_5",
    "tags": [
      "行程问题",
      "单位换算"
    ],
    "methods": [
      "用路程等于速度乘时间算出英尺数，再按每英里英尺数换算并取最近的半英里。",
      "先算声音走一英里所需秒数，用实际秒数与该时间之比得英里数，再四舍五入到半英里，忽略光传播时间。"
    ],
    "hints": []
  },
  {
    "no": 6,
    "searchText": "Six trees are equally spaced along one side of a straight road. The distance from the first tree to the fourth is 60 feet. What is the\ndistance in feet between the first and last trees?",
    "questionImage": "assets/2001-amc8-local/q6.png",
    "grade": "amc8",
    "points": 1,
    "title": "等距树列总长",
    "text": "等距树列总长",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "B",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2001_AMC_8_Problems/Problem_6",
    "tags": [
      "一一对应",
      "比例"
    ],
    "methods": [
      "先由首树到第四树之间的间隔数求出每段间距，再乘首树到末树之间的间隔数。",
      "用植树问题的一一对应：段数比树数少一，把两段总长写成间距的整数倍，按比例放大而不单独求间距。"
    ],
    "hints": []
  },
  {
    "no": 7,
    "searchText": "What is the number of square inches in the area of the small kite?",
    "questionImage": "assets/2001-amc8-local/q7.png",
    "grade": "amc8",
    "points": 1,
    "title": "小风筝面积",
    "text": "小风筝面积",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "A",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2001_AMC_8_Problems/Problem_7",
    "tags": [
      "网格",
      "割补法"
    ],
    "methods": [
      "用割补法把风筝沿对角线拆成两个三角形，或补成矩形减去四角，按网格读出底与高求面积。",
      "逐格数网格内完整格与半格，或按边界点与内部点的计数公式验证面积。"
    ],
    "hints": []
  },
  {
    "no": 8,
    "searchText": "Genevieve puts bracing on her large kite in the form of cross-connecting opposite corners of the kite. How many inches of bracing\nmaterial does she need?",
    "questionImage": "assets/2001-amc8-local/q8.png",
    "grade": "amc8",
    "points": 1,
    "title": "大风筝支架长",
    "text": "大风筝支架长",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "E",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2001_AMC_8_Problems/Problem_8",
    "tags": [
      "比例",
      "网格"
    ],
    "methods": [
      "大风筝各线性尺寸按倍数放大，读出小风筝两条对角线的网格长度后按倍数放大求和。",
      "用相似图形对应线段成比例，把两条对角线写成同一比例因子下的式子，再按网格单位换算总长。"
    ],
    "hints": []
  },
  {
    "no": 9,
    "searchText": "The large kite is covered with gold foil. The foil is cut from a rectangular piece that just covers the entire grid. How many square inches\nof waste material are cut off from the four corners?",
    "questionImage": "assets/2001-amc8-local/q9.png",
    "grade": "amc8",
    "points": 1,
    "title": "金箔边角废料",
    "text": "金箔边角废料",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "D",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2001_AMC_8_Problems/Problem_9",
    "tags": [
      "面积",
      "对称"
    ],
    "methods": [
      "用覆盖网格的矩形总面积减去风筝面积即得四角废料，矩形边长由放大后的网格读出。",
      "把四角废料看成四个全等直角三角形，用对称与三角形面积公式分别求和，也可把小风筝面积按比例放大后作差。"
    ],
    "hints": []
  },
  {
    "no": 10,
    "searchText": "A collector offers to buy quarters for 2000% of their value. At that rate how much will Bryden get for his four quarters?",
    "questionImage": "assets/2001-amc8-local/q10.png",
    "grade": "amc8",
    "points": 1,
    "title": "硬币溢价收购",
    "text": "硬币溢价收购",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "A",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2001_AMC_8_Problems/Problem_10",
    "tags": [
      "百分数",
      "比例"
    ],
    "methods": [
      "把给定百分数化成倍数，乘单枚面值再乘硬币枚数。",
      "用百分数表示每一百对应多少，先算一枚的收购价再按枚数成倍放大，或把百分号转成小数运算。"
    ],
    "hints": []
  },
  {
    "no": 11,
    "searchText": "Points , , and have these coordinates: , , and . The area of\nquadrilateral is\n",
    "questionImage": "assets/2001-amc8-local/q11.png",
    "grade": "amc8",
    "points": 1,
    "title": "坐标四边形面积",
    "text": "坐标四边形面积",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "C",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2001_AMC_8_Problems/Problem_11",
    "tags": [
      "坐标",
      "割补法"
    ],
    "methods": [
      "用坐标面积公式直接代入各顶点坐标求四边形面积。",
      "用割补法把四边形放入外接矩形中减去四周直角三角形面积，或沿一条对角线分成两个三角形分别用底高求。"
    ],
    "hints": []
  },
  {
    "no": 12,
    "searchText": "If , then",
    "questionImage": "assets/2001-amc8-local/q12.png",
    "grade": "amc8",
    "points": 1,
    "title": "代数式求值",
    "text": "代数式求值",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "A",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2001_AMC_8_Problems/Problem_12",
    "tags": [
      "代数",
      "符号"
    ],
    "methods": [
      "把已知等式整体代入目标式，用运算律化简，避免逐个求出未知量的值。",
      "设未知量解出后代入，或取满足条件的特殊值代入检验选项，用赋值法避开繁琐化简。"
    ],
    "hints": []
  },
  {
    "no": 13,
    "searchText": "Of the 36 students in Richelle's class, 12 prefer chocolate pie, 8 prefer apple, and 6 prefer blueberry. Half of the remaining students\nprefer cherry pie and half prefer lemon. For Richelle's pie graph showing this data, how many degrees should she use for cherry pie?",
    "questionImage": "assets/2001-amc8-local/q13.png",
    "grade": "amc8",
    "points": 1,
    "title": "饼图樱桃扇角",
    "text": "饼图樱桃扇角",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "D",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2001_AMC_8_Problems/Problem_13",
    "tags": [
      "比例",
      "角度"
    ],
    "methods": [
      "先由剩余人数的一半求该口味人数，再用人数占比乘周角换算成圆心角。",
      "把各类人数写成总人数的分数，该口味所占分数乘周角即得角度，也可用排除法从饼图各扇区反推。"
    ],
    "hints": []
  },
  {
    "no": 14,
    "searchText": "Tyler has entered a buffet line in which he chooses one kind of meat, two different vegetables and one dessert. If the order of food\nitems is not important, how many different meals might he choose?\nMeat: beef, chicken, pork\nVegetables: baked beans, corn, potatoes, tomatoes\nDessert: brownies, chocolate cake, chocolate pudding, ice cream",
    "questionImage": "assets/2001-amc8-local/q14.png",
    "grade": "amc8",
    "points": 1,
    "title": "自助餐搭配数",
    "text": "自助餐搭配数",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "C",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2001_AMC_8_Problems/Problem_14",
    "tags": [
      "组合",
      "乘法原理"
    ],
    "methods": [
      "分步选择：肉类种数、从蔬菜中选两种的组合数、甜点种数，用乘法原理相乘。",
      "先算蔬菜无序选取的配对数，再按分类讨论把三类选择数相乘，也可逐项列举验证。"
    ],
    "hints": []
  },
  {
    "no": 15,
    "searchText": "Homer began peeling a pile of 44 potatoes at the rate of 3 potatoes per minute. Four minutes later Christen joined him and peeled at\nthe rate of 5 potatoes per minute. When they finished, how many potatoes had Christen peeled?",
    "questionImage": "assets/2001-amc8-local/q15.png",
    "grade": "amc8",
    "points": 1,
    "title": "削土豆分工量",
    "text": "削土豆分工量",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "A",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2001_AMC_8_Problems/Problem_15",
    "tags": [
      "应用题",
      "方程"
    ],
    "methods": [
      "先算先行者单独完成的数量与剩余量，再用两人合效率求共同工作时间，乘后来者的速率。",
      "设共同工作时间列已完成量加合效率乘时间等于总量的一元方程，解出时间后求后来者的量。"
    ],
    "hints": []
  },
  {
    "no": 16,
    "searchText": "A square piece of paper, 4 inches on a side, is folded in half vertically. Both layers are then cut in half parallel to the fold. Three new\nrectangles are formed, a large one and two small ones. What is the ratio of the perimeter of one of the small rectangles to the\nperimeter of the large rectangle?",
    "questionImage": "assets/2001-amc8-local/q16.png",
    "grade": "amc8",
    "points": 1,
    "title": "折剪矩形周长比",
    "text": "折剪矩形周长比",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "E",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2001_AMC_8_Problems/Problem_16",
    "tags": [
      "长方形",
      "比例"
    ],
    "methods": [
      "按折叠与剪裁推出大、小矩形各自的长与宽，分别用周长公式写出后求比。",
      "设正方形边长为一份，把各矩形边长写成同一份数下的式子，周长之比即化简后的边长组合比。"
    ],
    "hints": []
  },
  {
    "no": 17,
    "searchText": "For the game show Who Wants To Be A Millionaire?, the dollar values of each question are shown in the following table (where K =\n1000).\nBetween which two questions is the percent increase of the value the smallest?",
    "questionImage": "assets/2001-amc8-local/q17.png",
    "grade": "amc8",
    "points": 1,
    "title": "奖金增幅最小",
    "text": "奖金增幅最小",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "B",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2001_AMC_8_Problems/Problem_17",
    "tags": [
      "表格法",
      "比较大小"
    ],
    "methods": [
      "逐对相邻题算增量除以原值的百分比，统一比较找出最小者。",
      "先看相邻两值的倍数，即新值除以旧值，倍数最接近一的一对增幅最小，无需逐个算百分数。"
    ],
    "hints": []
  },
  {
    "no": 18,
    "searchText": "Two dice are thrown. What is the probability that the product of the two numbers is a multiple of 5?",
    "questionImage": "assets/2001-amc8-local/q18.png",
    "grade": "amc8",
    "points": 1,
    "title": "骰积为五倍数",
    "text": "骰积为五倍数",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "D",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2001_AMC_8_Problems/Problem_18",
    "tags": [
      "概率",
      "容斥原理"
    ],
    "methods": [
      "枚举两骰点数的有序对，统计至少一枚点数为五的情形，除以总情形数。",
      "用补集先算两枚都不为五的概率再用一减，或按第一枚是否为五分类求概率之和。"
    ],
    "hints": []
  },
  {
    "no": 19,
    "searchText": "Car M traveled at a constant speed for a given time. This is shown by the dashed line. Car N traveled at twice the speed for the same\ndistance. If Car N's speed and time are shown as solid line, which graph illustrates this?\n",
    "questionImage": "assets/2001-amc8-local/q19.png",
    "grade": "amc8",
    "points": 1,
    "title": "双车速度图像",
    "text": "双车速度图像",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "D",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2001_AMC_8_Problems/Problem_19",
    "tags": [
      "图形识别",
      "行程问题"
    ],
    "methods": [
      "同路程下速度加倍则时间减半，在速度时间图上表现为等高而横向压缩一半的直线，据此选图。",
      "用排除法先删去速度数值不符的图，再按相同面积代表相同路程检查时长是否恰为一半。"
    ],
    "hints": []
  },
  {
    "no": 20,
    "searchText": "Kaleana shows her test score to Quay, Marty and Shana, but the others keep theirs hidden. Quay thinks, \"At least two of us have the\nsame score.\" Marty thinks, \"I didn't get the lowest score.\" Shana thinks, \"I didn't get the highest score.\" List the scores from lowest to\nhighest for Marty (M), Quay (Q) and Shana (S).",
    "questionImage": "assets/2001-amc8-local/q20.png",
    "grade": "amc8",
    "points": 1,
    "title": "成绩高低推理",
    "text": "成绩高低推理",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "A",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2001_AMC_8_Problems/Problem_20",
    "tags": [
      "逻辑推理",
      "分类讨论"
    ],
    "methods": [
      "把三人的每句话转成相等或不等的约束，逐条列出后推出几人成绩的大小顺序。",
      "用假设法先设某句为假或某两人相等，检验是否与其余陈述矛盾，分类讨论排除不可能的排序。"
    ],
    "hints": []
  },
  {
    "no": 21,
    "searchText": "The mean of a set of five different positive integers is 15. The median is 18. The maximum possible value of the largest of these five\nintegers is",
    "questionImage": "assets/2001-amc8-local/q21.png",
    "grade": "amc8",
    "points": 1,
    "title": "五数最大可能值",
    "text": "五数最大可能值",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "D",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2001_AMC_8_Problems/Problem_21",
    "tags": [
      "最值",
      "不等式"
    ],
    "methods": [
      "由均值求总和，排序后固定中位数，为使最大数尽量大令其余三数取最小的互异正整数，用总和反推。",
      "写出五数之和的表达式，把除最大数外的四项用下界估计得最大数的上界，并验证该上界可达。"
    ],
    "hints": []
  },
  {
    "no": 22,
    "searchText": "On a twenty-question test, each correct answer is worth 5 points, each unanswered question is worth 1 point and each incorrect\nanswer is worth 0 points. Which of the following scores is NOT possible?",
    "questionImage": "assets/2001-amc8-local/q22.png",
    "grade": "amc8",
    "points": 1,
    "title": "不可能的得分",
    "text": "不可能的得分",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "E",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2001_AMC_8_Problems/Problem_22",
    "tags": [
      "方程",
      "枚举"
    ],
    "methods": [
      "设答对、未答、答错题数列两个方程，把得分写成两类题数的线性组合，检验选项能否由非负整数解得到。",
      "按答对题数分类枚举可达分数集合，或用得分对某模数的余数受约束来筛，再用排除法剔除不可能的选项。"
    ],
    "hints": []
  },
  {
    "no": 23,
    "searchText": "\nPoints , and are vertices of an equilateral triangle, and points , and are midpoints of its sides. How many\nnoncongruent triangles can be drawn using any three of these six points as vertices?",
    "questionImage": "assets/2001-amc8-local/q23.png",
    "grade": "amc8",
    "points": 1,
    "title": "六点构三角形类",
    "text": "六点构三角形类",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "D",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2001_AMC_8_Problems/Problem_23",
    "tags": [
      "组合",
      "分类讨论"
    ],
    "methods": [
      "先算从六点取三点的组合总数，再按边长形状合并全等类并剔除三点共线的退化情形。",
      "按所选三点中顶点与中点的个数分类枚举，逐类判断形状并利用对称去重。"
    ],
    "hints": []
  },
  {
    "no": 24,
    "searchText": "Each half of this figure is composed of 3 red triangles, 5 blue triangles and 8 white triangles. When the upper half is folded down over\nthe centerline, 2 pairs of red triangles coincide, as do 3 pairs of blue triangles. There are 2 red-white pairs. How many white pairs\ncoincide?",
    "questionImage": "assets/2001-amc8-local/q24.png",
    "grade": "amc8",
    "points": 1,
    "title": "折纸配色对数",
    "text": "折纸配色对数",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "B",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2001_AMC_8_Problems/Problem_24",
    "tags": [
      "对称",
      "配对求和"
    ],
    "methods": [
      "利用折叠的轴对称把上下两半配对，由各色三角形总数扣除已配成的同色与异色对，按剩余数求白色对。",
      "设重合对总数等于每半的三角形数，列出各色配对方程，用一一对应与容斥解出白色对数量。"
    ],
    "hints": []
  },
  {
    "no": 25,
    "searchText": "There are 24 four-digit whole numbers that use each of the four digits 2, 4, 5 and 7 exactly once. Only one of these four-digit numbers\nis a multiple of another one. Which of the following is it?",
    "questionImage": "assets/2001-amc8-local/q25.png",
    "grade": "amc8",
    "points": 1,
    "title": "四位数倍数关系",
    "text": "四位数倍数关系",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "D",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2001_AMC_8_Problems/Problem_25",
    "tags": [
      "整除",
      "排除法"
    ],
    "methods": [
      "枚举全部排列，逐一检验两数之间是否成整数倍，用整除判定筛出唯一一对。",
      "用数字和与个位特征缩小可能的倍数范围，再按位值与模运算排除多数组合，锁定倍数关系。"
    ],
    "hints": []
  }
];
