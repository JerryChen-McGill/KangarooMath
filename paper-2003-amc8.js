// Source: user-provided AoPS PDFs in past papers/ACM 8. Problems © MAA.
KANGAROO_DATA["2003-amc8"] = [
  {
    "no": 1,
    "searchText": "Jamie counted the number of edges of a cube, Jimmy counted the numbers of corners, and Judy counted the number of faces. They then added\nthe three numbers. What was the resulting sum?",
    "questionImage": "assets/2003-amc8-local/q1.png",
    "grade": "amc8",
    "points": 1,
    "title": "立方体棱角面",
    "text": "立方体棱角面",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "E",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2003_AMC_8_Problems/Problem_1",
    "tags": [
      "立方体",
      "欧拉公式"
    ],
    "methods": [
      "直接记住立方体的棱数、顶点数与面数，三者相加即得所求总和。",
      "把立方体拆成上下两个正方形底面与若干竖直棱分类计数，再用欧拉公式校验后求和。"
    ],
    "hints": []
  },
  {
    "no": 2,
    "searchText": "Which of the following numbers has the smallest prime factor?",
    "questionImage": "assets/2003-amc8-local/q2.png",
    "grade": "amc8",
    "points": 1,
    "title": "最小质因数",
    "text": "最小质因数",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "C",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2003_AMC_8_Problems/Problem_2",
    "tags": [
      "因数",
      "排除法"
    ],
    "methods": [
      "对每个选项作质因数分解，比较各自的最小质因子后选出最小者。",
      "按奇偶先用小质数逐个试除，最先整除该数的质数即其最小质因子，用排除法筛掉其余选项。"
    ],
    "hints": []
  },
  {
    "no": 3,
    "searchText": "A burger at Ricky C's weighs 120 grams, of which 30 grams are filler. What percent of the burger is not filler?",
    "questionImage": "assets/2003-amc8-local/q3.png",
    "grade": "amc8",
    "points": 1,
    "title": "汉堡非馅占比",
    "text": "汉堡非馅占比",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "D",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2003_AMC_8_Problems/Problem_3",
    "tags": [
      "百分数",
      "分数"
    ],
    "methods": [
      "先求非填充物重量占总重量的分数，再化成百分数。",
      "用整体百分之百减去填充物所占百分比，或把总量设为一份列比例式求补集。"
    ],
    "hints": []
  },
  {
    "no": 4,
    "searchText": "A group of children riding on bicycles and tricycles rode past Billy Bob's house. Billy Bob counted 7 children and 19 wheels. How many tricycles\nwere there?",
    "questionImage": "assets/2003-amc8-local/q4.png",
    "grade": "amc8",
    "points": 1,
    "title": "自行车三轮车",
    "text": "自行车三轮车",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "C",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2003_AMC_8_Problems/Problem_4",
    "tags": [
      "方程",
      "应用题"
    ],
    "methods": [
      "设自行车与三轮车数量，用总人数与总轮数列二元一次方程组求解。",
      "先假设全是自行车，算出轮子差额，每换成一辆三轮车就多出一只轮子，用差额反推三轮车数。"
    ],
    "hints": []
  },
  {
    "no": 5,
    "searchText": "If 20% of a number is 12, what is 30% of the same number?",
    "questionImage": "assets/2003-amc8-local/q5.png",
    "grade": "amc8",
    "points": 1,
    "title": "百分数求原数",
    "text": "百分数求原数",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "B",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2003_AMC_8_Problems/Problem_5",
    "tags": [
      "百分数",
      "比例"
    ],
    "methods": [
      "设该数为 x，由已知百分比列方程解出原数，再乘目标百分比。",
      "不求原数，直接利用两个百分比之比把结果按倍数放大，列比例式一步得到答案。"
    ],
    "hints": []
  },
  {
    "no": 6,
    "searchText": "Given the areas of the three squares in the figure, what is the area of the interior triangle?",
    "questionImage": "assets/2003-amc8-local/q6.png",
    "grade": "amc8",
    "points": 1,
    "title": "方内三角形面积",
    "text": "方内三角形面积",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "B",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2003_AMC_8_Problems/Problem_6",
    "tags": [
      "面积",
      "割补法"
    ],
    "methods": [
      "把三个正方形的面积分别开方得三边长，验证勾股关系后用直角三角形面积公式求。",
      "用割补法把内部三角形沿网格拆成若干等高三角形，或以底高比例直接算面积。"
    ],
    "hints": []
  },
  {
    "no": 7,
    "searchText": "Blake and Jenny each took four 100-point tests. Blake averaged 78 on the four tests. Jenny scored 10 points higher than Blake on the first test,\n10 points lower than him on the second test, and 20 points higher on both the third and fourth tests. What is the difference between Jenny's\naverage and Blake's average on these four tests?",
    "questionImage": "assets/2003-amc8-local/q7.png",
    "grade": "amc8",
    "points": 1,
    "title": "平均分差比较",
    "text": "平均分差比较",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "A",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2003_AMC_8_Problems/Problem_7",
    "tags": [
      "配对求和",
      "运算律"
    ],
    "methods": [
      "先求两人各自总分之差，再除以考试门数得到平均分之差。",
      "不求总分，把四科相对增减量相加取平均，并用配对求和把一增一减的两项先抵消。"
    ],
    "hints": []
  },
  {
    "no": 8,
    "searchText": "(Problems 8, 9, and 10 use the data found in the accompanying paragraph and figures)\nFour friends, Art, Roger, Paul and Trisha, bake cookies, and all cookies have the same thickness. The shapes of the cookies differ, as shown.\nArt's cookies are trapezoids.\nRoger's cookies are rectangles.\nPaul's cookies are parallelograms.\nTrisha's cookies are triangles.\nEach friend uses the same amount of dough, and Art makes exactly 12 cookies. Who gets the fewest cookies from one batch of cookie dough?",
    "questionImage": "assets/2003-amc8-local/q8.png",
    "grade": "amc8",
    "points": 1,
    "title": "饼干块数最少",
    "text": "饼干块数最少",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "A",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2003_AMC_8_Problems/Problem_8",
    "tags": [
      "面积",
      "比例"
    ],
    "methods": [
      "同样多的面团下块数与单块面积成反比，比较四种图形的面积大小即得块数最少者。",
      "用面积公式把梯形、矩形、平行四边形与三角形写成同底等高的形式，面积最大者块数最少。"
    ],
    "hints": []
  },
  {
    "no": 9,
    "searchText": "Each friend uses the same amount of dough, and Art makes exactly cookies. Art's cookies sell for cents each. To earn the same amount\nfrom a single batch, how much should one of Roger's cookies cost in cents?",
    "questionImage": "assets/2003-amc8-local/q9.png",
    "grade": "amc8",
    "points": 1,
    "title": "饼干定价反比",
    "text": "饼干定价反比",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "C",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2003_AMC_8_Problems/Problem_9",
    "tags": [
      "比例",
      "方程"
    ],
    "methods": [
      "设单价与块数成反比，列两人总价相等的方程求另一种饼干的单价。",
      "先由两人单块面积之比推出块数之比，再按反比把总价不变的条件折算成单价比例。"
    ],
    "hints": []
  },
  {
    "no": 10,
    "searchText": "How many cookies will be in one batch of Trisha's cookies?",
    "questionImage": "assets/2003-amc8-local/q10.png",
    "grade": "amc8",
    "points": 1,
    "title": "三角形饼干数",
    "text": "三角形饼干数",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "E",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2003_AMC_8_Problems/Problem_10",
    "tags": [
      "面积",
      "等高模型"
    ],
    "methods": [
      "把同样的面团看成固定总面积，除以单块三角形面积得到块数。",
      "用三角形与梯形面积之比换算成块数之比，再由已知块数按比例放大求出结果。"
    ],
    "hints": []
  },
  {
    "no": 11,
    "searchText": "Business is a little slow at Lou's Fine Shoes, so Lou decides to have a sale. On Friday, Lou increases all of Thursday's prices by 10%. Over the\nweekend, Lou advertises the sale: \"Ten percent off the listed price. Sale starts Monday.\" How much does a pair of shoes cost on Monday that\ncost 40 dollars on Thursday?",
    "questionImage": "assets/2003-amc8-local/q11.png",
    "grade": "amc8",
    "points": 1,
    "title": "先涨后降现价",
    "text": "先涨后降现价",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "B",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2003_AMC_8_Problems/Problem_11",
    "tags": [
      "百分数",
      "运算律"
    ],
    "methods": [
      "按时间顺序先乘涨价系数再乘降价系数，两次乘法直接算出现价。",
      "用运算律把两次变化合并成一个净变化率一次乘到原价上，注意降价基数是涨后价。"
    ],
    "hints": []
  },
  {
    "no": 12,
    "searchText": "When a fair six-sided die is tossed on a table top, the bottom face cannot be seen. What is the probability that the product of the numbers on the\nfive faces that can be seen is divisible by 6?",
    "questionImage": "assets/2003-amc8-local/q12.png",
    "grade": "amc8",
    "points": 1,
    "title": "骰子可见面乘积",
    "text": "骰子可见面乘积",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "E",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2003_AMC_8_Problems/Problem_12",
    "tags": [
      "概率",
      "逆向思维"
    ],
    "methods": [
      "按底面点数分类枚举各种情形，判断可见五面之积是否同时含因子二与三，统计有利情形。",
      "用逆向思维先找乘积不被六整除的情形，即底面取走关键因子时，再用一减去不利概率。"
    ],
    "hints": []
  },
  {
    "no": 13,
    "searchText": "Fourteen white cubes are put together to form the figure below. The complete surface of the figure, including the bottom, is painted red. The\nfigure is then separated into individual cubes. How many of the individual cubes have exactly four red faces?",
    "questionImage": "assets/2003-amc8-local/q13.png",
    "grade": "amc8",
    "points": 1,
    "title": "四面涂色方块",
    "text": "四面涂色方块",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "B",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2003_AMC_8_Problems/Problem_13",
    "tags": [
      "立方体",
      "分类讨论"
    ],
    "methods": [
      "逐个检查每个小立方体暴露的面数，按角、棱、面内、内部的位置分类统计恰有四面涂色者。",
      "按层逐层画出表面并数外露面，再用总数减去暴露三面、五面及更少的块数作补集。"
    ],
    "hints": []
  },
  {
    "no": 14,
    "searchText": "In this addition problem, each letter stands for a different digit.\nIf and the letter represents an even number, what is the only possible value for ?",
    "questionImage": "assets/2003-amc8-local/q14.png",
    "grade": "amc8",
    "points": 1,
    "title": "字母竖式谜题",
    "text": "字母竖式谜题",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "D",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2003_AMC_8_Problems/Problem_14",
    "tags": [
      "位值",
      "枚举"
    ],
    "methods": [
      "按列写出加法竖式的位值关系，从个位进位逐列分析，结合各字母互异与偶数条件定出该字母。",
      "枚举该字母的所有偶数取值，逐一代入竖式检验进位与不同字母对应不同数字的约束，排除矛盾者。"
    ],
    "hints": []
  },
  {
    "no": 15,
    "searchText": "A figure is constructed from unit cubes. Each cube shares at least one face with another cube. What is the minimum number of cubes needed to\nbuild a figure with the front and side views shown?\n",
    "questionImage": "assets/2003-amc8-local/q15.png",
    "grade": "amc8",
    "points": 1,
    "title": "两视图最少方块",
    "text": "两视图最少方块",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "B",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2003_AMC_8_Problems/Problem_15",
    "tags": [
      "空间想象",
      "最值"
    ],
    "methods": [
      "按前视图与侧视图逐格标出所需高度，取每列最大高度构造立体，让重叠位置共用立方体使总数最小。",
      "先按下界放置方块，再用逆向思维检查能否删去某些方块而两视图不变，并满足每块至少与另一块共面。"
    ],
    "hints": []
  },
  {
    "no": 16,
    "searchText": "Ali, Bonnie, Carlo, and Dianna are going to drive together to a nearby theme park. The car they are using has 4 seats: 1 driver's seat, 1 front\npassenger seat, and 2 back passenger seats. Bonnie and Carlo are the only ones who know how to drive the car. How many possible seating\narrangements are there?",
    "questionImage": "assets/2003-amc8-local/q16.png",
    "grade": "amc8",
    "points": 1,
    "title": "司机座位安排",
    "text": "司机座位安排",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "D",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2003_AMC_8_Problems/Problem_16",
    "tags": [
      "排列",
      "乘法原理"
    ],
    "methods": [
      "先选驾驶位上会开车的人，再把其余三人排到剩下座位，用乘法原理相乘。",
      "先算四人全排列数，再减去由不会开车者坐驾驶位的情形，或按谁坐驾驶位分类计数求和。"
    ],
    "hints": []
  },
  {
    "no": 17,
    "searchText": "The six children listed below are from two families of three siblings each. Each child has blue or brown eyes and black or blond hair. Children\nfrom the same family have at least one of these characteristics in common. Which two children are Jim's siblings?",
    "questionImage": "assets/2003-amc8-local/q17.png",
    "grade": "amc8",
    "points": 1,
    "title": "兄妹特征推理",
    "text": "兄妹特征推理",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "E",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2003_AMC_8_Problems/Problem_17",
    "tags": [
      "表格法",
      "排除法"
    ],
    "methods": [
      "用表格列出每个孩子的眼睛与发色，找出与已知者至少共享一个特征且三人两两相容的组合。",
      "按两个特征把六人分组，同族三人必须落在相容组内，用排除法剔除特征完全不搭的候选。"
    ],
    "hints": []
  },
  {
    "no": 18,
    "searchText": "Each of the twenty dots on the graph below represents one of Sarah's classmates. Classmates who are friends are connected with a line\nsegment. For her birthday party, Sarah is inviting only the following: all of her friends and all of those classmates who are friends with at least\none of her friends. How many classmates will not be invited to Sarah's party?",
    "questionImage": "assets/2003-amc8-local/q18.png",
    "grade": "amc8",
    "points": 1,
    "title": "朋友圈邀请人数",
    "text": "朋友圈邀请人数",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "D",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2003_AMC_8_Problems/Problem_18",
    "tags": [
      "图论",
      "集合"
    ],
    "methods": [
      "把同学看作顶点、友谊看作边，从已知者的邻接点出发做两跳遍历，标出被邀请顶点后数剩余。",
      "被邀请集合等于一跳邻居与其邻居之并，用集合并逐层合并去重，再用总点数减去并集大小。"
    ],
    "hints": []
  },
  {
    "no": 19,
    "searchText": "How many integers between 1000 and 2000 have all three of the numbers 15, 20, and 25 as factors?",
    "questionImage": "assets/2003-amc8-local/q19.png",
    "grade": "amc8",
    "points": 1,
    "title": "公倍数区间计数",
    "text": "公倍数区间计数",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "C",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2003_AMC_8_Problems/Problem_19",
    "tags": [
      "整除",
      "倍数"
    ],
    "methods": [
      "先求三个数的最小公倍数，再数出区间内它的倍数个数。",
      "把各数分解质因数并取每个质因子的最高次幂构造公倍数，再用区间端点的除法定出倍数个数。"
    ],
    "hints": []
  },
  {
    "no": 20,
    "searchText": "What is the measure of the acute angle formed by the hands of the clock at 4:20 PM?",
    "questionImage": "assets/2003-amc8-local/q20.png",
    "grade": "amc8",
    "points": 1,
    "title": "时钟夹角计算",
    "text": "时钟夹角计算",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "D",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2003_AMC_8_Problems/Problem_20",
    "tags": [
      "角度",
      "旋转"
    ],
    "methods": [
      "分别算时针与分针从十二点位置转过的角度，时针要计入分钟带来的偏移，再相减取锐角。",
      "把钟面看成按比例分配的周角，用两针相隔的格数乘每格度数，或用相对转速按经过分钟数算角差。"
    ],
    "hints": []
  },
  {
    "no": 21,
    "searchText": "The area of trapezoid is . The altitude is 8 cm, is 10 cm, and is 17 cm. What is , in centimeters?",
    "questionImage": "assets/2003-amc8-local/q21.png",
    "grade": "amc8",
    "points": 1,
    "title": "梯形求未知边",
    "text": "梯形求未知边",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "B",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2003_AMC_8_Problems/Problem_21",
    "tags": [
      "面积",
      "割补法"
    ],
    "methods": [
      "用梯形面积公式把已知面积与高代入，解出未知的底边或线段。",
      "把梯形割补成一个矩形加两个直角三角形，或补成平行四边形，用勾股与面积关系列式求未知段。"
    ],
    "hints": []
  },
  {
    "no": 22,
    "searchText": "The following figures are composed of squares and circles. Which figure has a shaded region with largest area?",
    "questionImage": "assets/2003-amc8-local/q22.png",
    "grade": "amc8",
    "points": 1,
    "title": "阴影面积最大",
    "text": "阴影面积最大",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "C",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2003_AMC_8_Problems/Problem_22",
    "tags": [
      "面积",
      "比较大小"
    ],
    "methods": [
      "对每个图形设正方形边长为同一单位，写出正方形减圆或圆减正方形的阴影表达式后统一比较。",
      "用割补法把阴影拆成可拼合的扇形与三角形，或利用对称把四角阴影合并后再比较大小。"
    ],
    "hints": []
  },
  {
    "no": 23,
    "searchText": "In the pattern below, the cat moves clockwise through the four squares and the mouse moves counterclockwise through the eight exterior\nsegments of the four squares.\nIf the pattern is continued, where would the cat and mouse be after the 247th move?",
    "questionImage": "assets/2003-amc8-local/q23.png",
    "grade": "amc8",
    "points": 1,
    "title": "猫鼠周期定位",
    "text": "猫鼠周期定位",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "A",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2003_AMC_8_Problems/Problem_23",
    "tags": [
      "周期",
      "余数"
    ],
    "methods": [
      "分别求猫与鼠各自的移动周期，用总步数除以周期取余数定位。",
      "把总步数对各周期取同余，或取两周期的最小公倍数作联合周期，再按余数确定相对位置。"
    ],
    "hints": []
  },
  {
    "no": 24,
    "searchText": "A ship travels from point A to point along a semicircular path, centered at Island . Then it travels along a straight path from B to . Which\nof these graphs best shows the ship's distance from Island as it moves along its course?",
    "questionImage": "assets/2003-amc8-local/q24.png",
    "grade": "amc8",
    "points": 1,
    "title": "距岛距离图像",
    "text": "距岛距离图像",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "B",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2003_AMC_8_Problems/Problem_24",
    "tags": [
      "图形识别",
      "排除法"
    ],
    "methods": [
      "半圆段到岛的距离恒为半径，对应一段水平线；直线段距离按几何关系变化，据此选图。",
      "用排除法先删去半圆段不保持定距的候选图，再按直线段端点距离的变化趋势锁定唯一图。"
    ],
    "hints": []
  },
  {
    "no": 25,
    "searchText": "In the figure, the area of square is . The four smaller squares have sides 1 cm long, either parallel to or coinciding with the\nsides of the large square. In , , and when is folded over side , point coincides with , the center\nof square . What is the area of , in square centimeters?\n",
    "questionImage": "assets/2003-amc8-local/q25.png",
    "grade": "amc8",
    "points": 1,
    "title": "折叠求三角形面积",
    "text": "折叠求三角形面积",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "C",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2003_AMC_8_Problems/Problem_25",
    "tags": [
      "对称",
      "坐标"
    ],
    "methods": [
      "利用折叠的轴对称性质把重合点转成等距关系，设未知边长列方程求三角形的底与高。",
      "给大正方形建立坐标系，把折痕视为对称轴写出对称点坐标，再由面积差求三角形面积。"
    ],
    "hints": []
  }
];
