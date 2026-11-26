// Source: user-provided AoPS PDFs in past papers/ACM 8. Problems © MAA.
KANGAROO_DATA["2019-amc8"] = [
  {
    "no": 1,
    "searchText": "Ike and Mike go into a sandwich shop with a total of to spend. Sandwiches cost each and soft drinks cost each. Ike and Mike plan to buy\nas many sandwiches as they can, and use any remaining money to buy soft drinks. Counting both sandwiches and soft drinks, how many items will they buy?",
    "questionImage": "assets/2019-amc8-local/q1.png",
    "grade": "amc8",
    "points": 1,
    "title": "三明治与饮料",
    "text": "三明治与饮料",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "D",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2019_AMC_8_Problems/Problem_1",
    "tags": [
      "应用题",
      "整除"
    ],
    "methods": [
      "设买 x 个三明治，用总价不超过预算的整数除法取最大个数，再用余钱除以饮料单价得饮料数，两者相加即总件数。",
      "按先尽量买贵的贪心顺序逐件枚举，或用带余除法把总钱拆成三明治花费与余钱两段，分别折算成件数再求和。"
    ],
    "hints": []
  },
  {
    "no": 2,
    "searchText": "Three identical rectangles are put together to form rectangle , as shown in the figure below. Given that the length of the shorter side of each of the\nrectangles is 5 feet, what is the area in square feet of rectangle ?\n",
    "questionImage": "assets/2019-amc8-local/q2.png",
    "grade": "amc8",
    "points": 1,
    "title": "三矩形拼大矩形",
    "text": "三矩形拼大矩形",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "E",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2019_AMC_8_Problems/Problem_2",
    "tags": [
      "长方形",
      "面积"
    ],
    "methods": [
      "设小矩形长边为 x，由拼接图中长边等于若干短边之和列方程解出 x，再乘短边并乘三得面积。",
      "把三个矩形视为整体，直接从图上读出大矩形的长与宽（用短边的倍数表示），一步算出总面积。"
    ],
    "hints": []
  },
  {
    "no": 3,
    "searchText": "Which of the following is the correct order of the fractions and from least to greatest?",
    "questionImage": "assets/2019-amc8-local/q3.png",
    "grade": "amc8",
    "points": 1,
    "title": "分数从小到大",
    "text": "分数从小到大",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "E",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2019_AMC_8_Problems/Problem_3",
    "tags": [
      "分数",
      "比较大小"
    ],
    "methods": [
      "把各分数通分成同分母，比较分子大小后排出顺序。",
      "用交叉相乘或化小数逐对判定大小，再串成从小到大的顺序；也可与基准值比较差值。"
    ],
    "hints": []
  },
  {
    "no": 4,
    "searchText": "Quadrilateral is a rhombus with perimeter meters. The length of diagonal is meters. What is the area in square meters of rhombus\n?",
    "questionImage": "assets/2019-amc8-local/q4.png",
    "grade": "amc8",
    "points": 1,
    "title": "菱形对角线面积",
    "text": "菱形对角线面积",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "D",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2019_AMC_8_Problems/Problem_4",
    "tags": [
      "几何",
      "三角形"
    ],
    "methods": [
      "由周长求边长，利用菱形对角线互相垂直平分，用勾股定理求另一条对角线长，再按对角线乘积的一半算面积。",
      "把菱形沿两条对角线切成四个全等直角三角形，先求一个小三角形的面积再乘四。"
    ],
    "hints": []
  },
  {
    "no": 5,
    "searchText": "A tortoise challenges a hare to a race. The hare eagerly agrees and quickly runs ahead, leaving the slow-moving tortoise behind, believing that he will win, the hare\nstops to take a nap. Meanwhile, the tortoise walks at a slow, steady pace for the entire race. The hare wakes up and runs to the finish line, only to find the tortoise\nalready there. Which of the following graphs matches the description of the race, showing the distance traveled by the two animals over time from start to\nfinish?",
    "questionImage": "assets/2019-amc8-local/q5.png",
    "grade": "amc8",
    "points": 1,
    "title": "龟兔赛跑图像",
    "text": "龟兔赛跑图像",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "B",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2019_AMC_8_Problems/Problem_5",
    "tags": [
      "行程问题",
      "图形识别"
    ],
    "methods": [
      "把路程时间图的斜率看作速度，逐段核对兔子先快、停下时曲线水平、最后冲刺，以及乌龟匀速直线，选出吻合的图像。",
      "只抓两个特征——乌龟先到终点、兔子途中有一段水平线——用排除法剔除矛盾的图像。"
    ],
    "hints": []
  },
  {
    "no": 6,
    "searchText": "\nThere are grid points (uniformly spaced) in the square shown in the diagram below, including the points on the edges. Point is in the center of the square.\nGiven that point is randomly chosen among the other points, what is the probability that the line is a line of symmetry for the square?",
    "questionImage": "assets/2019-amc8-local/q6.png",
    "grade": "amc8",
    "points": 1,
    "title": "网格对称轴概率",
    "text": "网格对称轴概率",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "C",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2019_AMC_8_Problems/Problem_6",
    "tags": [
      "对称",
      "概率"
    ],
    "methods": [
      "正方形的对称轴只有水平、竖直与两条对角线方向，数出这些方向上除中心外的网格点数，除以总候选点数即得概率。",
      "把所有网格点按关于中心的方位分类枚举，逐一判断哪些点与中心的连线恰为对称轴，再算所占比例。"
    ],
    "hints": []
  },
  {
    "no": 7,
    "searchText": "Shauna takes five tests, each worth a maximum of points. Her scores on the first three tests are , , and . In order to average for all five tests,\nwhat is the lowest score she could earn on one of the other two tests?",
    "questionImage": "assets/2019-amc8-local/q7.png",
    "grade": "amc8",
    "points": 1,
    "title": "测验最低得分",
    "text": "测验最低得分",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "A",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2019_AMC_8_Problems/Problem_7",
    "tags": [
      "最值",
      "方程"
    ],
    "methods": [
      "由目标平均算五次总分，减去已知三次分数得到剩余两次的分数和，把其中一次顶到满分则另一次取到最低。",
      "设未知一次为 x 且另一次不超过满分，列不等式 x 加满分为剩余分数和的上界，解出 x 的最小值。"
    ],
    "hints": []
  },
  {
    "no": 8,
    "searchText": "Gilda has a bag of marbles. She gives of them to her friend Pedro. Then Gilda gives of what is left to another friend, Ebony. Finally, Gilda gives\nof what is now left in the bag to her brother Jimmy. What percentage of her original bag of marbles does Gilda have left for herself?",
    "questionImage": "assets/2019-amc8-local/q8.png",
    "grade": "amc8",
    "points": 1,
    "title": "多次分弹珠剩余",
    "text": "多次分弹珠剩余",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "E",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2019_AMC_8_Problems/Problem_8",
    "tags": [
      "分数",
      "百分数"
    ],
    "methods": [
      "把每次给出几分之几转成留下几分之几，三个剩余比例连乘即得最后所占的百分比。",
      "设原来为一整份或取便于整除的份数，逐次算出每次给出后剩下的具体份数，最后化成百分数。"
    ],
    "hints": []
  },
  {
    "no": 9,
    "searchText": "Alex and Felicia each have cats as pets. Alex buys cat food in cylindrical cans that are cm in diameter and cm high. Felicia buys cat food in cylindrical cans\nthat are cm in diameter and cm high. What is the ratio of the volume of one of Alex's cans to the volume one of Felicia's cans?",
    "questionImage": "assets/2019-amc8-local/q9.png",
    "grade": "amc8",
    "points": 1,
    "title": "圆柱罐头体积比",
    "text": "圆柱罐头体积比",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "B",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2019_AMC_8_Problems/Problem_9",
    "tags": [
      "体积",
      "比例"
    ],
    "methods": [
      "分别用圆柱体积公式写出两个罐头的体积，取比后约去公共因子，注意半径要平方。",
      "先求半径之比，平方得底面积之比，再乘高之比，用比例连乘一次得出体积比。"
    ],
    "hints": []
  },
  {
    "no": 10,
    "searchText": "The diagram shows the number of students at soccer practice each weekday during last week. After computing the mean and median values, Coach discovers\nthat there were actually participants on Wednesday. Which of the following statements describes the change in the mean and median after the correction is\nmade?\nThe mean increases by and the median does not change.\nThe mean increases by and the median increases by .\nThe mean increases by and the median increases by .\nThe mean increases by and the median increases by .\nThe mean increases by and the median increases by .",
    "questionImage": "assets/2019-amc8-local/q10.png",
    "grade": "amc8",
    "points": 1,
    "title": "均值与中位数",
    "text": "均值与中位数",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "B",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2019_AMC_8_Problems/Problem_10",
    "tags": [
      "表格法",
      "比较大小"
    ],
    "methods": [
      "均值只随总数线性变化，用改动量除以天数直接得均值增量；中位数取决于排序后的中间位置，判断该数据变动是否改变次序。",
      "把更正前后的两组数据分别排序，重新计算并逐项对照均值与中位数，选出对应描述。"
    ],
    "hints": []
  },
  {
    "no": 11,
    "searchText": "The eighth grade class at Lincoln Middle School has students. Each student takes a math class, a foreign language class, or both. There are eighth\ngraders taking a math class, and there are eighth graders taking a foreign language class. How many eighth graders take only a math class and not a foreign\nlanguage class?",
    "questionImage": "assets/2019-amc8-local/q11.png",
    "grade": "amc8",
    "points": 1,
    "title": "只上数学的人数",
    "text": "只上数学的人数",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "D",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2019_AMC_8_Problems/Problem_11",
    "tags": [
      "容斥原理",
      "集合"
    ],
    "methods": [
      "用容斥公式由总人数与两类人数求出两门都上的人数，再从数学人数里减去它。",
      "画两圆韦恩图，注意只上数学正好等于总人数减去上外语的那部分，无需先求交集。"
    ],
    "hints": []
  },
  {
    "no": 12,
    "searchText": "The faces of a cube are painted in six different colors: red , white , green , brown , aqua , and purple . Three views of the cube are\nshown below. What is the color of the face opposite the aqua face?",
    "questionImage": "assets/2019-amc8-local/q12.png",
    "grade": "amc8",
    "points": 1,
    "title": "立方体对面颜色",
    "text": "立方体对面颜色",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "A",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2019_AMC_8_Problems/Problem_12",
    "tags": [
      "立方体",
      "空间想象"
    ],
    "methods": [
      "由三个视图统计与某色相邻的四种颜色，剩下的那一种必是它的对面。",
      "固定一个公共面，按视图间的旋转关系把各颜色贴到立方体上，用空间想象直接读出对面。"
    ],
    "hints": []
  },
  {
    "no": 13,
    "searchText": "A palindrome is a number that has the same value when read from left to right or from right to left. (For example, 12321 is a palindrome.) Let be the least\nthree-digit integer which is not a palindrome but which is the sum of three distinct two-digit palindromes. What is the sum of the digits of ?",
    "questionImage": "assets/2019-amc8-local/q13.png",
    "grade": "amc8",
    "points": 1,
    "title": "三位回文数之和",
    "text": "三位回文数之和",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "A",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2019_AMC_8_Problems/Problem_13",
    "tags": [
      "回文数",
      "整除"
    ],
    "methods": [
      "两位回文数都是十一的倍数，故所求和也是十一的倍数，从最小的三位倍数起排查非回文且可拆成三个不同两位回文数者。",
      "按三位数从小到大枚举，逐个判定是否回文、能否写成三个不同十一倍数之和，找到最小者后求数字和。"
    ],
    "hints": []
  },
  {
    "no": 14,
    "searchText": "Isabella has coupons that can be redeemed for free ice cream cones at Pete's Sweet Treats. In order to make the coupons last, she decides that she will redeem\none every days until she has used them all. She knows that Pete's is closed on Sundays, but as she circles the dates on her calendar, she realizes that no\ncircled date falls on a Sunday. On what day of the week does Isabella redeem her first coupon?\n",
    "questionImage": "assets/2019-amc8-local/q14.png",
    "grade": "amc8",
    "points": 1,
    "title": "优惠券兑换星期",
    "text": "优惠券兑换星期",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "C",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2019_AMC_8_Problems/Problem_14",
    "tags": [
      "星期问题",
      "同余"
    ],
    "methods": [
      "兑换日期在模七下成等差数列，把不出现周日转成对首项与公差的同余限制，解出首日是星期几。",
      "分别假设第一次兑换在周一至周日，逐次按间隔推出后续星期，用排除法选出完全避开周日的一种。"
    ],
    "hints": []
  },
  {
    "no": 15,
    "searchText": "On a beach, people are wearing sunglasses and people are wearing caps. Some people are wearing both sunglasses and caps. If one of the people\nwearing a cap is selected at random, the probability that this person is also wearing sunglasses is . If instead, someone wearing sunglasses is selected at\nrandom, what is the probability that this person is also wearing a cap?",
    "questionImage": "assets/2019-amc8-local/q15.png",
    "grade": "amc8",
    "points": 1,
    "title": "墨镜帽子概率",
    "text": "墨镜帽子概率",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "B",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2019_AMC_8_Problems/Problem_15",
    "tags": [
      "概率",
      "韦恩图"
    ],
    "methods": [
      "先由戴帽者中戴墨镜的比例求出两者都戴的人数，再除以戴墨镜总人数得所求概率。",
      "列出戴或不戴帽与戴或不戴墨镜的四格表，把公共部分设为未知量，用比例关系化简求条件概率。"
    ],
    "hints": []
  },
  {
    "no": 16,
    "searchText": "Qiang drives miles at an average speed of miles per hour. How many additional miles will he have to drive at miles per hour to average miles per\nhour for the entire trip?",
    "questionImage": "assets/2019-amc8-local/q16.png",
    "grade": "amc8",
    "points": 1,
    "title": "平均速度求里程",
    "text": "平均速度求里程",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "D",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2019_AMC_8_Problems/Problem_16",
    "tags": [
      "行程问题",
      "方程"
    ],
    "methods": [
      "设还要开 x 英里，把每段时间写成路程除以速度，用总路程除以总时间等于目标平均速度列方程求解。",
      "先由目标平均速度反推全程应有的总时间，减去已用时间得剩余可用时间，再乘该段速度得追加里程。"
    ],
    "hints": []
  },
  {
    "no": 17,
    "searchText": "What is the value of the product",
    "questionImage": "assets/2019-amc8-local/q17.png",
    "grade": "amc8",
    "points": 1,
    "title": "连乘积巧算",
    "text": "连乘积巧算",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "B",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2019_AMC_8_Problems/Problem_17",
    "tags": [
      "巧算",
      "运算律"
    ],
    "methods": [
      "观察各项结构，用交换律与结合律把能约分或凑整的因子配对，化成简单乘积。",
      "把乘积写成通项的代数式，用因式分解或裂项相消整体化简后再代入。"
    ],
    "hints": []
  },
  {
    "no": 18,
    "searchText": "The faces of each of two fair dice are numbered 1, 2, 3, 5, 7, and 8. When the two dice are tossed, what is the probability that their sum will be an even number?",
    "questionImage": "assets/2019-amc8-local/q18.png",
    "grade": "amc8",
    "points": 1,
    "title": "骰子偶数和概率",
    "text": "骰子偶数和概率",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "C",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2019_AMC_8_Problems/Problem_18",
    "tags": [
      "概率",
      "分类讨论"
    ],
    "methods": [
      "两数之和为偶数当且仅当同奇偶，数出面上奇数与偶数各几个，用同奇加同偶的组合数除以所有等可能结果数。",
      "把每个面按模二余数分类，或直接枚举所有有序点数组合，逐一统计和为偶数的情形再求比例。"
    ],
    "hints": []
  },
  {
    "no": 19,
    "searchText": "In a tournament there are six teams that play each other twice. A team earns points for a win, point for a draw, and points for a loss. After all the games\nhave been played it turns out that the top three teams earned the same number of total points. What is the greatest possible number of total points for each of the\ntop three teams?",
    "questionImage": "assets/2019-amc8-local/q19.png",
    "grade": "amc8",
    "points": 1,
    "title": "联赛前三最高分",
    "text": "联赛前三最高分",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "C",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2019_AMC_8_Problems/Problem_19",
    "tags": [
      "比赛问题",
      "最值"
    ],
    "methods": [
      "先算全部比赛产生的总分上限，再构造极端赛果让后三队互相消耗、对前三队全输，把分数集中到前三队求最大同分。",
      "设前三队各得 S 分，把每队得分拆成队内互赛与对后三队两部分，用各自上界列不等式解出 S 的最大值。"
    ],
    "hints": []
  },
  {
    "no": 20,
    "searchText": "How many different real numbers satisfy the equation",
    "questionImage": "assets/2019-amc8-local/q20.png",
    "grade": "amc8",
    "points": 1,
    "title": "方程实根个数",
    "text": "方程实根个数",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "D",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2019_AMC_8_Problems/Problem_20",
    "tags": [
      "方程",
      "分类讨论"
    ],
    "methods": [
      "按绝对值内部或分段点的正负分类拆成若干普通方程，逐个求解并检验根是否落在对应区间。",
      "把等式两边各看作一个函数，从图像交点个数或数轴上的分段走势判断解的个数。"
    ],
    "hints": []
  },
  {
    "no": 21,
    "searchText": "\nWhat is the area of the triangle formed by the lines , , and ?",
    "questionImage": "assets/2019-amc8-local/q21.png",
    "grade": "amc8",
    "points": 1,
    "title": "三直线围成面积",
    "text": "三直线围成面积",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "E",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2019_AMC_8_Problems/Problem_21",
    "tags": [
      "坐标",
      "三角形"
    ],
    "methods": [
      "联立两两直线方程求出三个顶点坐标，再用坐标面积公式或底乘高计算。",
      "在坐标纸上画出三条直线，用外接矩形减去几个直角三角形的割补法得到三角形面积。"
    ],
    "hints": []
  },
  {
    "no": 22,
    "searchText": "A store increased the original price of a shirt by a certain percent and then decreased the new price by the same percent. Given that the resulting price was\nof the original price, by what percent was the price increased and decreased?",
    "questionImage": "assets/2019-amc8-local/q22.png",
    "grade": "amc8",
    "points": 1,
    "title": "涨降同百分率",
    "text": "涨降同百分率",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "E",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2019_AMC_8_Problems/Problem_22",
    "tags": [
      "百分数",
      "代数"
    ],
    "methods": [
      "设原价为一、涨降率为 x，列涨价因子乘降价因子等于给定的结果比例，化成含 x 平方的式子后解出 x。",
      "取一个便于计算的原价值逐次算出两次变动后的价格，或把选项逐一代入检验哪个满足结果比例。"
    ],
    "hints": []
  },
  {
    "no": 23,
    "searchText": "After Euclid High School's last basketball game, it was determined that of the team's points were scored by Alexa and were scored by Brittany. Chelsea\nscored points. None of the other team members scored more than points. What was the total number of points scored by the other team members?",
    "questionImage": "assets/2019-amc8-local/q23.png",
    "grade": "amc8",
    "points": 1,
    "title": "篮球队得分分配",
    "text": "篮球队得分分配",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "B",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2019_AMC_8_Problems/Problem_23",
    "tags": [
      "方程",
      "整除"
    ],
    "methods": [
      "设总得分为 T，把两人的得分写成 T 的分数式，减去某队员的固定得分即得其余人的总分，再用每人得分上限校准。",
      "由各比例得分必须为整数出发，枚举满足整除条件的 T，逐一检查其余队员能否在上限内凑出总分。"
    ],
    "hints": []
  },
  {
    "no": 24,
    "searchText": "In triangle , point divides side so that . Let be the midpoint of and let be the point of intersection of line\nand line . Given that the area of is , what is the area of ?",
    "questionImage": "assets/2019-amc8-local/q24.png",
    "grade": "amc8",
    "points": 1,
    "title": "三角形面积比",
    "text": "三角形面积比",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "B",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2019_AMC_8_Problems/Problem_24",
    "tags": [
      "面积",
      "等高模型"
    ],
    "methods": [
      "利用等高三角形面积比等于底之比，结合中点与分点的比例，逐块推出目标三角形占总面积的比例。",
      "设未知面积并列比例方程，或用质量点法给顶点配质量求出交点处的分比，再换算面积。"
    ],
    "hints": []
  },
  {
    "no": 25,
    "searchText": "Alice has 24 apples. In how many ways can she share them with Becky and Chris so that each of the three people has at least two apples?",
    "questionImage": "assets/2019-amc8-local/q25.png",
    "grade": "amc8",
    "points": 1,
    "title": "分苹果计数",
    "text": "分苹果计数",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "C",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2019_AMC_8_Problems/Problem_25",
    "tags": [
      "组合",
      "枚举"
    ],
    "methods": [
      "先各分出最低份额，问题化为把剩余相同苹果分给三人且允许为零，用隔板法得组合数。",
      "按其中一人所得个数分类，对每个固定值枚举另一人的取值范围，累加所有合法的三元组数目。"
    ],
    "hints": []
  }
];
