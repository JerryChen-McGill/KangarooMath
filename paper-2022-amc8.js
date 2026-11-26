// Source: user-provided AoPS PDFs in past papers/ACM 8. Problems © MAA.
KANGAROO_DATA["2022-amc8"] = [
  {
    "no": 1,
    "searchText": "The Math Team designed a logo shaped like a multiplication symbol, shown below on a grid of 1-inch squares. What is the area of the\nlogo in square inches?\n",
    "questionImage": "assets/2022-amc8-local/q1.png",
    "grade": "amc8",
    "points": 1,
    "title": "网格中的乘号面积",
    "text": "网格中的乘号面积",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "A",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2022_AMC_8_Problems/Problem_1",
    "tags": [
      "面积",
      "网格"
    ],
    "methods": [
      "把乘号按 1 英寸网格拆成若干个全等直角三角形，逐块数出并相加得 10 平方英寸。",
      "用外接的正方形面积减去四角未覆盖的三角形面积，剩下部分为 10 平方英寸。"
    ],
    "hints": []
  },
  {
    "no": 2,
    "searchText": "Consider these two operations:\nWhat is the value of",
    "questionImage": "assets/2022-amc8-local/q2.png",
    "grade": "amc8",
    "points": 1,
    "title": "自定义运算求值",
    "text": "自定义运算求值",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "D",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2022_AMC_8_Problems/Problem_2",
    "tags": [
      "数与运算",
      "代数"
    ],
    "methods": [
      "先算 5◆3=5²−3²=16，再算 16★6=(16−6)²=100。",
      "把两个运算的定义直接代入复合式，得到 (5²−3²−6)²=(16−6)²=100，注意第二运算以整个结果为被减数。"
    ],
    "hints": []
  },
  {
    "no": 3,
    "searchText": "When three positive integers , , and are multiplied together, their product is . Suppose . In how many ways can\nthe numbers be chosen?",
    "questionImage": "assets/2022-amc8-local/q3.png",
    "grade": "amc8",
    "points": 1,
    "title": "乘积为一百的三元组",
    "text": "乘积为一百的三元组",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "E",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2022_AMC_8_Problems/Problem_3",
    "tags": [
      "数论",
      "枚举"
    ],
    "methods": [
      "按最小数分类：a=1 时 bc=100 有 (2,50)、(4,25)、(5,20) 三组；a=2 时 bc=50 有 (5,10) 一组；a≥4 无解，共 4 种。",
      "把 100=2²×5² 的因数按三个数一组枚举，用 a<b<c 过滤并核对乘积，得到 4 组解。"
    ],
    "hints": []
  },
  {
    "no": 4,
    "searchText": "The letter M in the figure below is first reflected over the line and then reflected over the line . What is the resulting image?\n",
    "questionImage": "assets/2022-amc8-local/q4.png",
    "grade": "amc8",
    "points": 1,
    "title": "连续两次轴反射",
    "text": "连续两次轴反射",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "E",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2022_AMC_8_Problems/Problem_4",
    "tags": [
      "对称",
      "旋转"
    ],
    "methods": [
      "关于两条相交直线依次反射，等价于绕交点旋转两线夹角的两倍；按旋转方向和角度比对选项得 E。",
      "先作关于 q 的镜像，再对结果作关于 p 的镜像，逐步画出字母 M 的位置与朝向，得 E。"
    ],
    "hints": []
  },
  {
    "no": 5,
    "searchText": "Anna and Bella are celebrating their birthdays together. Five years ago, when Bella turned years old, she received a newborn kitten as\na birthday present. Today the sum of the ages of the two children and the kitten is years. How many years older than Bella is Anna?",
    "questionImage": "assets/2022-amc8-local/q5.png",
    "grade": "amc8",
    "points": 1,
    "title": "三人的年龄和",
    "text": "三人的年龄和",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "C",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2022_AMC_8_Problems/Problem_5",
    "tags": [
      "年龄问题",
      "方程"
    ],
    "methods": [
      "五年前 Bella 6 岁，今天 Bella 11 岁、猫 5 岁，故 Anna 为 30−11−5=14，比 Bella 大 3 岁。",
      "设 Anna 比 Bella 大 d，列 (11+d)+11+5=30 解得 d=3；也可先算五年前三人年龄和再统一加 15 岁。"
    ],
    "hints": []
  },
  {
    "no": 6,
    "searchText": "Three positive integers are equally spaced on a number line. The middle number is and the largest number is times the smallest\nnumber. What is the smallest of these three numbers?",
    "questionImage": "assets/2022-amc8-local/q6.png",
    "grade": "amc8",
    "points": 1,
    "title": "等间距三数",
    "text": "等间距三数",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "C",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2022_AMC_8_Problems/Problem_6",
    "tags": [
      "方程",
      "数列"
    ],
    "methods": [
      "设最小为 x，等间距得最大为 30−x，由 30−x=4x 解得 x=6。",
      "设公差 d，三数为 15−d、15、15+d，由 15+d=4(15−d) 得 5d=45、d=9，最小为 6。"
    ],
    "hints": []
  },
  {
    "no": 7,
    "searchText": "When the World Wide Web first became popular in the s, download speeds reached a maximum of about kilobits per second.\nApproximately how many minutes would the download of a -megabyte song have taken at that speed? (Note that there are\nkilobits in a megabyte.)",
    "questionImage": "assets/2022-amc8-local/q7.png",
    "grade": "amc8",
    "points": 1,
    "title": "下载歌曲的时间",
    "text": "下载歌曲的时间",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "B",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2022_AMC_8_Problems/Problem_7",
    "tags": [
      "单位换算",
      "应用题"
    ],
    "methods": [
      "4.2×8000=33600 千比特，除以 56 千比特每秒得 600 秒，即 10 分钟。",
      "先算每分钟下载 56×60=3360 千比特，33600÷3360=10 分钟。"
    ],
    "hints": []
  },
  {
    "no": 8,
    "searchText": "What is the value of\n",
    "questionImage": "assets/2022-amc8-local/q8.png",
    "grade": "amc8",
    "points": 1,
    "title": "连乘分数约分",
    "text": "连乘分数约分",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "B",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2022_AMC_8_Problems/Problem_8",
    "tags": [
      "分数",
      "巧算"
    ],
    "methods": [
      "分子是 1 到 20 连乘、分母是 3 到 22 连乘，约去 3 到 20 后剩 (1×2)/(21×22)=1/231。",
      "把每项写成 k/(k+2)，连乘后前后项相消，只剩前两个分子与后两个分母，得 1/231。"
    ],
    "hints": []
  },
  {
    "no": 9,
    "searchText": "A cup of boiling water ( ) is placed to cool in a room whose temperature remains constant at . Suppose the difference\nbetween the water temperature and the room temperature is halved every minutes. What is the water temperature, in degrees\nFahrenheit, after minutes?",
    "questionImage": "assets/2022-amc8-local/q9.png",
    "grade": "amc8",
    "points": 1,
    "title": "水温每五分钟减半",
    "text": "水温每五分钟减半",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "B",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2022_AMC_8_Problems/Problem_9",
    "tags": [
      "分数",
      "递推"
    ],
    "methods": [
      "初始温差 212−68=144 度，15 分钟减半 3 次剩 18 度，水温 68+18=86。",
      "逐次取与 68 的中点：212→140→104→86，三步后得 86 华氏度。"
    ],
    "hints": []
  },
  {
    "no": 10,
    "searchText": "One sunny day, Ling decided to take a hike in the mountains. She left her house at , drove at a constant speed of miles per\nhour, and arrived at the hiking trail at . After hiking for hours, Ling drove home at a constant speed of miles per hour.\nWhich of the following graphs best illustrates the distance between Ling’s car and her house over the course of her trip?",
    "questionImage": "assets/2022-amc8-local/q10.png",
    "grade": "amc8",
    "points": 1,
    "title": "距离时间图像",
    "text": "距离时间图像",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "E",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2022_AMC_8_Problems/Problem_10",
    "tags": [
      "行程问题",
      "图形识别"
    ],
    "methods": [
      "8 到 10 点以 45 mph 匀速远离（直线上升），随后 3 小时停留（水平段），返程 60 mph 更快（下降更陡），符合三点的是 E。",
      "先算单程 90 英里、返程用时 1.5 小时，比较上升段与下降段的斜率以及水平段长度，选出 E。"
    ],
    "hints": []
  },
  {
    "no": 11,
    "searchText": "Henry the donkey has a very long piece of pasta. He takes a number of bites of pasta, each time eating inches of pasta from the\nmiddle of one piece. In the end, he has pieces of pasta whose total length is inches. How long, in inches, was the piece of\npasta he started with?",
    "questionImage": "assets/2022-amc8-local/q11.png",
    "grade": "amc8",
    "points": 1,
    "title": "咬断意大利面",
    "text": "咬断意大利面",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "D",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2022_AMC_8_Problems/Problem_11",
    "tags": [
      "计数",
      "逆向思维"
    ],
    "methods": [
      "从 1 段变成 10 段需 9 次咬，每次吃掉 3 英寸共 27 英寸，原长 17+27=44。",
      "设咬了 k 次，段数为 k+1=10 得 k=9，总长等于剩余 17 加上 3×9=27，得 44。"
    ],
    "hints": []
  },
  {
    "no": 12,
    "searchText": "The arrows on the two spinners shown below are spun. Let the number equal times the number on Spinner , added to the\nnumber on Spinner . What is the probability that is a perfect square number?",
    "questionImage": "assets/2022-amc8-local/q12.png",
    "grade": "amc8",
    "points": 1,
    "title": "转盘组成平方数",
    "text": "转盘组成平方数",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "B",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2022_AMC_8_Problems/Problem_12",
    "tags": [
      "概率",
      "枚举"
    ],
    "methods": [
      "列出两个转盘 A 与 B 的所有等可能组合，把 N=10A+B 逐一检验是否为两位平方数，命中数除以总数得 1/8。",
      "从 16、25、36、49、64、81 等两位平方数反推，找出能由两个转盘拼出的 N，统计对应扇区组合再除以总数得 1/8。"
    ],
    "hints": []
  },
  {
    "no": 13,
    "searchText": "How many positive integers can fill the blank in the sentence below?\n“One positive integer is _____ more than twice another, and the sum of the two numbers is .”",
    "questionImage": "assets/2022-amc8-local/q13.png",
    "grade": "amc8",
    "points": 1,
    "title": "句中可填正整数",
    "text": "句中可填正整数",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "D",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2022_AMC_8_Problems/Problem_13",
    "tags": [
      "整除",
      "方程"
    ],
    "methods": [
      "设较小的数为 b，则 3b+k=28，k=28−3b 为正整数要求 b 取 1 到 9，共 9 个。",
      "枚举使 28−k 能被 3 整除且商为正整数的 k，得到 1、4、7 到 25 共 9 个。"
    ],
    "hints": []
  },
  {
    "no": 14,
    "searchText": "In how many ways can the letters in be rearranged so that two or more s do not appear together?",
    "questionImage": "assets/2022-amc8-local/q14.png",
    "grade": "amc8",
    "points": 1,
    "title": "BEEKEEPER 不相邻 E",
    "text": "BEEKEEPER 不相邻 E",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "D",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2022_AMC_8_Problems/Problem_14",
    "tags": [
      "排列",
      "组合"
    ],
    "methods": [
      "5 个 E 与 4 个其他字母；把 B、K、P、R 排成一列产生 5 个空隙，E 必须各占一个，故只需排列这 4 个字母，共 4!=24 种。",
      "用插空法：先放 4 个非 E（24 种），再把 5 个 E 逐一放入两端及中间的 5 个空隙，只有一种放法，总数 24。"
    ],
    "hints": []
  },
  {
    "no": 15,
    "searchText": "Laszlo went online to shop for black pepper and found thirty different black pepper options varying in weight and price, shown in the\nscatter plot below. In ounces, what is the weight of the pepper that offers the lowest price per ounce?\n",
    "questionImage": "assets/2022-amc8-local/q15.png",
    "grade": "amc8",
    "points": 1,
    "title": "散点图最低单价",
    "text": "散点图最低单价",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "C",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2022_AMC_8_Problems/Problem_15",
    "tags": [
      "比例",
      "表格法"
    ],
    "methods": [
      "单价等于价格除以重量，即散点图中各点与原点连线的斜率；找斜率最小的点，对应重量 3 盎司。",
      "把每个点换算成每盎司价格，逐点比较后取最小值，得到 3 盎司的选项。"
    ],
    "hints": []
  },
  {
    "no": 16,
    "searchText": "Four numbers are written in a row. The average of the first two is the average of the middle two is and the average of the last\ntwo is What is the average of the first and last of the numbers?",
    "questionImage": "assets/2022-amc8-local/q16.png",
    "grade": "amc8",
    "points": 1,
    "title": "四个数的两两平均",
    "text": "四个数的两两平均",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "B",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2022_AMC_8_Problems/Problem_16",
    "tags": [
      "方程",
      "巧算"
    ],
    "methods": [
      "三个两两和为 42、52、60，交错相加减得 a+d=42−52+60=50，故首末平均为 25。",
      "设四个数为 42−b、b、52−b、8+b，则 a+d=50 与 b 无关，平均恒为 25。"
    ],
    "hints": []
  },
  {
    "no": 17,
    "searchText": "If is an even positive integer, the notation represents the product of all the even integers from to .\nFor example, . What is the units digit of the following sum?",
    "questionImage": "assets/2022-amc8-local/q17.png",
    "grade": "amc8",
    "points": 1,
    "title": "双阶乘之和的个位",
    "text": "双阶乘之和的个位",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "B",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2022_AMC_8_Problems/Problem_17",
    "tags": [
      "数字特征",
      "周期"
    ],
    "methods": [
      "只有前几项影响个位：2!!=2、4!!=8、6!! 个位 8、8!! 个位 4，从 10!! 起含因子 10 个位恒为 0，总和个位 2+8+8+4=22 即 2。",
      "逐项计算 n!! 的个位，发现 n≥10 时乘积中已有 2×5=10 使个位为 0，只需累加前四项得个位 2。"
    ],
    "hints": []
  },
  {
    "no": 18,
    "searchText": "The midpoints of the four sides of a rectangle are and What is the area of the rectangle?",
    "questionImage": "assets/2022-amc8-local/q18.png",
    "grade": "amc8",
    "points": 1,
    "title": "四边中点求矩形面积",
    "text": "四边中点求矩形面积",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "C",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2022_AMC_8_Problems/Problem_18",
    "tags": [
      "坐标",
      "面积"
    ],
    "methods": [
      "中点连成的平行四边形面积是原矩形的一半；由两条对角线 (8,4) 与 (−2,4) 算得中点四边形面积 20，故矩形面积 40。",
      "把中点四边形的两条对角线长相乘除以 2 得 20，再乘 2 得 40；也可由相邻中点坐标差直接还原矩形两边。"
    ],
    "hints": []
  },
  {
    "no": 19,
    "searchText": "Mr. Ramos gave a test to his class of students. The dot plot below shows the distribution of test scores.\nLater Mr. Ramos discovered that there was a scoring error on one of the questions. He regraded the tests, awarding some of the\nstudents extra points, which increased the median test score to . What is the minimum number of students who received extra\npoints?\n(Note that the median test score equals the average of the scores in the middle if the test scores are arranged in increasing\norder.)",
    "questionImage": "assets/2022-amc8-local/q19.png",
    "grade": "amc8",
    "points": 1,
    "title": "加分后中位数升高",
    "text": "加分后中位数升高",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "C",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2022_AMC_8_Problems/Problem_19",
    "tags": [
      "最值",
      "分类讨论"
    ],
    "methods": [
      "20 个分数的中位数是第 10、11 个的平均；要让中位数达到 85，需把排序后中间附近的分数尽量抬高，数出至少 4 人加 5 分才够。",
      "从点图读出各分数人数，按\"加分只增 5 分\"逐段模拟排序变化，找出中位数升到 85 所需的最少人数，得 4。"
    ],
    "hints": []
  },
  {
    "no": 20,
    "searchText": "The grid below is to be filled with integers in such a way that the sum of the numbers in each row and the sum of the numbers in each\ncolumn are the same. Four numbers are missing. The number in the lower left corner is larger than the other three missing numbers.\nWhat is the smallest possible value of ?",
    "questionImage": "assets/2022-amc8-local/q20.png",
    "grade": "amc8",
    "points": 1,
    "title": "幻方中最大缺数",
    "text": "幻方中最大缺数",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "D",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2022_AMC_8_Problems/Problem_20",
    "tags": [
      "方程",
      "最值"
    ],
    "methods": [
      "设公共和为 S，把已知行列写成方程，用 S 表示四个缺数；由 x 大于其余三个缺数列不等式，取最小整数解 x=8。",
      "利用所有行和之和等于所有列和之和消去未知量，把四个缺数用同一参数表示，再由 x 最大取最小可行整数 8。"
    ],
    "hints": []
  },
  {
    "no": 21,
    "searchText": "Steph scored baskets out of attempts in the first half of a game, and baskets out of attempts in the second half.\nCandace took attempts in the first half and attempts in the second. In each half, Steph scored a higher percentage of baskets\nthan Candace. Surprisingly they ended with the same overall percentage of baskets scored. How many more baskets did Candace\nscore in the second half than in the first?",
    "questionImage": "assets/2022-amc8-local/q21.png",
    "grade": "amc8",
    "points": 1,
    "title": "上下半场命中率",
    "text": "上下半场命中率",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "C",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2022_AMC_8_Problems/Problem_21",
    "tags": [
      "百分数",
      "方程"
    ],
    "methods": [
      "Steph 共 25/30，故 Candace 也需 30 投 25 中；上半 12 投要低于 75% 最多 8 中，下半 18 投要低于 100% 最多 17 中，恰为 8+17，差 9。",
      "设 Candace 上半 a 中、下半 b 中，由 a+b=25、a≤8、b≤17 唯一确定 (8,17)，故差为 9。"
    ],
    "hints": []
  },
  {
    "no": 22,
    "searchText": "A bus takes minutes to drive from one stop to the next, and waits minute at each stop to let passengers board. Zia takes\nminutes to walk from one bus stop to the next. As Zia reaches a bus stop, if the bus is at the previous stop or has already left the\nprevious stop, then she will wait for the bus. Otherwise she will start walking toward the next stop. Suppose the bus and Zia start at the\nsame time toward the library, with the bus stops behind. After how many minutes will Zia board the bus?\n",
    "questionImage": "assets/2022-amc8-local/q22.png",
    "grade": "amc8",
    "points": 1,
    "title": "公交车追上步行者",
    "text": "公交车追上步行者",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "A",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2022_AMC_8_Problems/Problem_22",
    "tags": [
      "行程问题",
      "逻辑推理"
    ],
    "methods": [
      "按分钟列出公交车在各站的到达与离开时刻（行驶 2 分钟、停 1 分钟）以及 Zia 走到各站的时刻（每段 5 分钟），逐站判断她是否等待，最早 17 分钟上车。",
      "画时间—站点图，标出公交车与 Zia 到达每站的时刻，找到公交车追上她且她已在等车的最早时刻 17 分钟。"
    ],
    "hints": []
  },
  {
    "no": 23,
    "searchText": "A or is placed in each of the nine squares in a -by- grid. Shown below is a sample configuration with three s in a line.\nHow many configurations will have three s in a line and three s in a line?",
    "questionImage": "assets/2022-amc8-local/q23.png",
    "grade": "amc8",
    "points": 1,
    "title": "三连线配置计数",
    "text": "三连线配置计数",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "D",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2022_AMC_8_Problems/Problem_23",
    "tags": [
      "组合",
      "容斥原理"
    ],
    "methods": [
      "共 2⁹=512 种填法；对 3 行 3 列 2 对角共 8 条线，统计\"某线全 △\"且\"某线全 ○\"的组合，用容斥去掉重复计数，得 84。",
      "先固定一条全 △ 的线（8 种），再数其余 6 格中能形成全 ○ 线的填法，按两线是否相交分类并去重，得 84。"
    ],
    "hints": []
  },
  {
    "no": 24,
    "searchText": "The figure below shows a polygon , consisting of rectangles and right triangles. When cut out and folded on the\ndotted lines, the polygon forms a triangular prism. Suppose that and . What is the volume of the\nprism?",
    "questionImage": "assets/2022-amc8-local/q24.png",
    "grade": "amc8",
    "points": 1,
    "title": "折成三棱柱的体积",
    "text": "折成三棱柱的体积",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "C",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2022_AMC_8_Problems/Problem_24",
    "tags": [
      "体积",
      "空间想象"
    ],
    "methods": [
      "折叠后 AH 与 EF 成为棱柱的棱，GH 由底面三角形的两条边拼成；据此解出底面直角三角形的两直角边与棱柱高，体积等于底面积乘高为 192。",
      "把展开图按虚线折起，识别底面三角形与侧面矩形，用 AH=EF=8、GH=14 求底面边长，再套 V=Sh 得 192；也可代入选项反查自洽的尺寸。"
    ],
    "hints": []
  },
  {
    "no": 25,
    "searchText": "A cricket randomly hops between leaves, on each turn hopping to one of the other leaves with equal probability. After hops,\nwhat is the probability that the cricket has returned to the leaf where it started?",
    "questionImage": "assets/2022-amc8-local/q25.png",
    "grade": "amc8",
    "points": 1,
    "title": "四步后回到起点",
    "text": "四步后回到起点",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "E",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2022_AMC_8_Problems/Problem_25",
    "tags": [
      "概率",
      "递推"
    ],
    "methods": [
      "设 p_k 为第 k 跳后在起点的概率，从非起点以 1/3 跳回起点，故 p_{k+1}=(1−p_k)/3；由 p0=1 递推得 p4=7/27。",
      "每步 3 种选择共 81 条等可能路径，按\"是否在起点\"分状态枚举 4 步路径，回到起点的有 21 条，概率 21/81=7/27。"
    ],
    "hints": []
  }
];
