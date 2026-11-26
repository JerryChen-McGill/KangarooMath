// Source: user-provided AoPS PDFs in past papers/ACM 8. Problems © MAA.
KANGAROO_DATA["2015-amc8"] = [
  {
    "no": 1,
    "searchText": "\nHow many square yards of carpet are required to cover a rectangular floor that is feet long and feet wide? (There are\nfeet in a yard.)",
    "questionImage": "assets/2015-amc8-local/q1.png",
    "grade": "amc8",
    "points": 1,
    "title": "地毯面积换算",
    "text": "地毯面积换算",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "A",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2015_AMC_8_Problems/Problem_1",
    "tags": [
      "面积",
      "单位换算"
    ],
    "methods": [
      "先按长乘宽算出矩形地面的平方英尺面积，再除以一平方码所含的平方英尺数完成单位换算。",
      "先把长和宽各自除以换算系数由英尺化成码，再相乘直接得到所需地毯的平方码数。"
    ],
    "hints": []
  },
  {
    "no": 2,
    "searchText": "Point is the center of the regular octagon , and is the midpoint of the side What fraction of\nthe area of the octagon is shaded?",
    "questionImage": "assets/2015-amc8-local/q2.png",
    "grade": "amc8",
    "points": 1,
    "title": "正八边形阴影",
    "text": "正八边形阴影",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "D",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2015_AMC_8_Problems/Problem_2",
    "tags": [
      "对称",
      "割补法"
    ],
    "methods": [
      "由正八边形的对称性，从中心向各顶点连线把它分成八个全等三角形，看阴影占其中几份即得所求分数。",
      "用割补法把阴影区域拼补成规则图形，或设边长分别写出阴影与整个八边形的面积再作比化简。"
    ],
    "hints": []
  },
  {
    "no": 3,
    "searchText": "Jack and Jill are going swimming at a pool that is one mile from their house. They leave home simultaneously. Jill rides her\nbicycle to the pool at a constant speed of miles per hour. Jack walks to the pool at a constant speed of miles per hour.\nHow many minutes before Jack arrives does Jill arrive?",
    "questionImage": "assets/2015-amc8-local/q3.png",
    "grade": "amc8",
    "points": 1,
    "title": "骑车步行时差",
    "text": "骑车步行时差",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "D",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2015_AMC_8_Problems/Problem_3",
    "tags": [
      "行程问题",
      "单位换算"
    ],
    "methods": [
      "分别用一英里除以骑车与步行的速度得到两人所用小时数，相减后把小时换算成分钟即为提前到达的时间。",
      "设两种速度为未知量列出时间差的代数式再化简，或由速度比反推时间比，用比例一步求出到达时间之差。"
    ],
    "hints": []
  },
  {
    "no": 4,
    "searchText": "The Centerville Middle School chess team consists of two boys and three girls. A photographer wants to take a picture of the\nteam to appear in the local newspaper. She decides to have them sit in a row with a boy at each end and the three girls in the\nmiddle. How many such arrangements are possible?",
    "questionImage": "assets/2015-amc8-local/q4.png",
    "grade": "amc8",
    "points": 1,
    "title": "棋队合影排座",
    "text": "棋队合影排座",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "E",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2015_AMC_8_Problems/Problem_4",
    "tags": [
      "排列",
      "乘法原理"
    ],
    "methods": [
      "按位置分步用乘法原理，两端安排两男孩有 2! 种，中间三女孩有 3! 种，两者相乘得总排法数。",
      "先按两个男孩谁站左端分成两类，在每类里枚举三个女孩的座次，把两类结果相加得到全部安排。"
    ],
    "hints": []
  },
  {
    "no": 5,
    "searchText": "Billy's basketball team scored the following points over the course of the first games of the season:\nIf his team scores 40 in the 12th game, which of the following statistics will show an increase?",
    "questionImage": "assets/2015-amc8-local/q5.png",
    "grade": "amc8",
    "points": 1,
    "title": "统计量变化",
    "text": "统计量变化",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "A",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2015_AMC_8_Problems/Problem_5",
    "tags": [
      "表格法",
      "比较大小"
    ],
    "methods": [
      "把前若干场得分与第 12 场的 40 分一起列表，分别重算均值、中位数、众数与极差，逐项对照看哪个统计量变大。",
      "从结构判断：均值只由总分除以场数决定，用新增 40 分带来的总分变化量直接判定其增减，而中位数、众数、极差是否变取决于排序与端点，用排除法剔除不变者。"
    ],
    "hints": []
  },
  {
    "no": 6,
    "searchText": "In , , and . What is the area of ?",
    "questionImage": "assets/2015-amc8-local/q6.png",
    "grade": "amc8",
    "points": 1,
    "title": "三角形求面积",
    "text": "三角形求面积",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "B",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2015_AMC_8_Problems/Problem_6",
    "tags": [
      "三角形",
      "面积"
    ],
    "methods": [
      "把题给的边长与夹角代入两边乘积乘夹角正弦的一半这一面积公式，直接列式求出面积。",
      "从一顶点向对边作高，把三角形拆成直角三角形求高的长度，再用底乘高的一半计算面积。"
    ],
    "hints": []
  },
  {
    "no": 7,
    "searchText": "Each of two boxes contains three chips numbered , , . A chip is drawn randomly from each box and the numbers on the\ntwo chips are multiplied. What is the probability that their product is even?",
    "questionImage": "assets/2015-amc8-local/q7.png",
    "grade": "amc8",
    "points": 1,
    "title": "乘积为偶概率",
    "text": "乘积为偶概率",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "E",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2015_AMC_8_Problems/Problem_7",
    "tags": [
      "概率",
      "排除法"
    ],
    "methods": [
      "改用反面思考：乘积为奇当且仅当两盒取出的芯片都是奇数，先算这一概率再用 1 减去它。",
      "枚举两盒各取一张芯片组成的所有等可能有序对，逐一数出乘积为偶数的情形再除以总对数。"
    ],
    "hints": []
  },
  {
    "no": 8,
    "searchText": "What is the smallest whole number larger than the perimeter of any triangle with a side of length and a side of length ？",
    "questionImage": "assets/2015-amc8-local/q8.png",
    "grade": "amc8",
    "points": 1,
    "title": "三角形周长界",
    "text": "三角形周长界",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "D",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2015_AMC_8_Problems/Problem_8",
    "tags": [
      "三角形不等式",
      "最值"
    ],
    "methods": [
      "由三角形不等式得第三边必小于两已知边之和，故周长严格小于该和的两倍，取大于此上界的最小整数。",
      "设第三边为未知量写出周长表达式，按它的取值范围求周长的上确界后向上取整，或逐项代入选项用排除法验证。"
    ],
    "hints": []
  },
  {
    "no": 9,
    "searchText": "On her first day of work, Janabel sold one widget. On day two, she sold three widgets. On day three, she sold five widgets, and\non each succeeding day, she sold two more widgets than she had sold on the previous day. How many widgets in total had\nJanabel sold after working days?",
    "questionImage": "assets/2015-amc8-local/q9.png",
    "grade": "amc8",
    "points": 1,
    "title": "奇数列求和",
    "text": "奇数列求和",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "D",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2015_AMC_8_Problems/Problem_9",
    "tags": [
      "数列",
      "配对求和"
    ],
    "methods": [
      "每天销量构成首项为 1、公差为 2 的等差数列，写出通项后用等差数列求和公式算总量。",
      "利用前 n 个奇数之和恰为 n 的平方这一规律巧算，或把首末项两两配对求和得到同样的结果。"
    ],
    "hints": []
  },
  {
    "no": 10,
    "searchText": "How many integers between and have four distinct digits?",
    "questionImage": "assets/2015-amc8-local/q10.png",
    "grade": "amc8",
    "points": 1,
    "title": "四位不同数字",
    "text": "四位不同数字",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "B",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2015_AMC_8_Problems/Problem_10",
    "tags": [
      "乘法原理",
      "分类讨论"
    ],
    "methods": [
      "按首位在给定区间内所处的位置分类，每类用乘法原理依次选出千、百、十、个位且互不相同，累加得总数。",
      "把区间内的四位数按大小逐段枚举，逐一剔除含重复数字的数，统计剩余的个数。"
    ],
    "hints": []
  },
  {
    "no": 11,
    "searchText": "\nIn the small country of Mathland, all automobile license plates have four symbols. The first symbol must be a vowel (\nor ), the second and third symbols must be two different letters among the non-vowels in the alphabet,\nand the fourth symbol must be a digit ( through ). If the symbols are chosen at random subject to these conditions, what is\nthe probability (In fractions) that the plate will read \" \"?",
    "questionImage": "assets/2015-amc8-local/q11.png",
    "grade": "amc8",
    "points": 1,
    "title": "指定车牌概率",
    "text": "指定车牌概率",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "B",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2015_AMC_8_Problems/Problem_11",
    "tags": [
      "概率",
      "乘法原理"
    ],
    "methods": [
      "用乘法原理把四位各自的可选个数连乘得所有合规车牌总数，指定车牌只占其中一种，取倒数即所求概率。",
      "按位求条件概率：第一位取到指定元音、第二三位取到指定且不同的辅音、第四位取到指定数字，再把各步概率连乘。"
    ],
    "hints": []
  },
  {
    "no": 12,
    "searchText": "How many pairs of parallel edges, such as and or and does a cube have? Repeating parallel edges\ndo not count toward the final answer.",
    "questionImage": "assets/2015-amc8-local/q12.png",
    "grade": "amc8",
    "points": 1,
    "title": "立方体平行棱",
    "text": "立方体平行棱",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "C",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2015_AMC_8_Problems/Problem_12",
    "tags": [
      "立方体",
      "组合"
    ],
    "methods": [
      "把立方体的棱按三个平行方向分组，每组内任取两条即成一对平行棱，用组合数算出每组对数再乘三。",
      "用空间想象固定一条棱，数出与它平行的其余棱数，对全部棱求和后除以二以消除重复计数。"
    ],
    "hints": []
  },
  {
    "no": 13,
    "searchText": "How many subsets of two elements can be removed from the set so that the mean\n(average) of the remaining numbers is ?",
    "questionImage": "assets/2015-amc8-local/q13.png",
    "grade": "amc8",
    "points": 1,
    "title": "删两数保均值",
    "text": "删两数保均值",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "D",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2015_AMC_8_Problems/Problem_13",
    "tags": [
      "集合",
      "方程"
    ],
    "methods": [
      "设被去掉两数之和为 S，由剩余数的总和除以剩余个数等于目标均值列方程解出 S，再统计集合中和为 S 的数对个数。",
      "枚举所有含两个元素的子集，分别计算删去后剩余数的平均值并数出命中目标者，也可用首尾配对求和快速定位。"
    ],
    "hints": []
  },
  {
    "no": 14,
    "searchText": "Which of the following integers cannot be written as the sum of four consecutive odd integers?",
    "questionImage": "assets/2015-amc8-local/q14.png",
    "grade": "amc8",
    "points": 1,
    "title": "四连续奇数和",
    "text": "四连续奇数和",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "D",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2015_AMC_8_Problems/Problem_14",
    "tags": [
      "代数",
      "整除"
    ],
    "methods": [
      "设四个连续奇数并求它们的和，代数化简后可见结果必为 8 的倍数，据此用整除性排除不能表示的选项。",
      "把各选项逐一代入方程反解首项是否为整数，或用同余判定该数是否落在可表示的余数类里。"
    ],
    "hints": []
  },
  {
    "no": 15,
    "searchText": "At Euler Middle School, students voted on two issues in a school referendum with the following results: voted in\nfavor of the first issue and voted in favor of the second issue. If there were exactly students who voted against both\nissues, how many students voted in favor of both issues?",
    "questionImage": "assets/2015-amc8-local/q15.png",
    "grade": "amc8",
    "points": 1,
    "title": "两议题都赞成",
    "text": "两议题都赞成",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "D",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2015_AMC_8_Problems/Problem_15",
    "tags": [
      "容斥原理",
      "韦恩图"
    ],
    "methods": [
      "用容斥原理，先由总人数减去两议题都反对者得至少赞成一个的人数，再用两议题赞成数之和减去它得都赞成者。",
      "画两圆韦恩图，把只赞成第一、只赞成第二、都赞成、都不赞成四块设为未知量，按已知条件列方程组求解。"
    ],
    "hints": []
  },
  {
    "no": 16,
    "searchText": "In a middle-school mentoring program, a number of the sixth graders are paired with a ninth-grade student as a buddy. No ninth\ngrader is assigned more than one sixth-grade buddy. If of all the ninth graders are paired with of all the sixth graders, what\nfraction of the total number of sixth and ninth graders have a buddy?",
    "questionImage": "assets/2015-amc8-local/q16.png",
    "grade": "amc8",
    "points": 1,
    "title": "结对学生占比",
    "text": "结对学生占比",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "B",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2015_AMC_8_Problems/Problem_16",
    "tags": [
      "一一对应",
      "比例"
    ],
    "methods": [
      "抓住结对是一一对应，设配对数为一份，由两个给定分数反推六、九年级总人数各为多少份，再用结对的两份除以总份数。",
      "设九年级总人数为未知量，按比例写出配对数与六年级总人数，列出所占分数的代数式并约分化简。"
    ],
    "hints": []
  },
  {
    "no": 17,
    "searchText": "Jeremy's father drives his son to school in rush hour traffic in minutes. One day, there is no traffic, so his father can drive\nhim miles per hour faster and gets him to school in minutes. How far in miles is it to school?",
    "questionImage": "assets/2015-amc8-local/q17.png",
    "grade": "amc8",
    "points": 1,
    "title": "通勤路程求解",
    "text": "通勤路程求解",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "D",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2015_AMC_8_Problems/Problem_17",
    "tags": [
      "行程问题",
      "方程"
    ],
    "methods": [
      "设到校路程为 d，把拥堵与畅通时的速度分别写成 d 除以各自时间，用畅通速度减拥堵速度等于给定增量列方程求解。",
      "由两次所用时间之比得到速度之比，把速度增量按份数分配到比例上，再用速度乘时间直接算出路程。"
    ],
    "hints": []
  },
  {
    "no": 18,
    "searchText": "An arithmetic sequence is a sequence in which each term after the first is obtained by adding a constant to the previous term.\nFor example, is an arithmetic sequence with five terms, in which the first term is and the constant added is\n. Each row and each column in this array is an arithmetic sequence with five terms. The square in the center is\nlabelled as shown. What is the value of ?",
    "questionImage": "assets/2015-amc8-local/q18.png",
    "grade": "amc8",
    "points": 1,
    "title": "等差方阵中心",
    "text": "等差方阵中心",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "B",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2015_AMC_8_Problems/Problem_18",
    "tags": [
      "数列",
      "对称"
    ],
    "methods": [
      "利用等差中项性质，中心格等于它所在行或列两端格的平均，对已知角格反复取平均即可推到中心。",
      "设首项与横向、纵向公差为未知量，把已知格与中心格都写成线性表达式，列方程组解出中心值。"
    ],
    "hints": []
  },
  {
    "no": 19,
    "searchText": "A triangle with vertices as , , and is plotted on a grid. What fraction of the\ngrid is covered by the triangle?\n",
    "questionImage": "assets/2015-amc8-local/q19.png",
    "grade": "amc8",
    "points": 1,
    "title": "网格三角形占比",
    "text": "网格三角形占比",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "A",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2015_AMC_8_Problems/Problem_19",
    "tags": [
      "坐标",
      "割补法"
    ],
    "methods": [
      "用外接矩形减去周围几个直角三角形的割补法算出三角形面积，再除以整个网格面积得所求分数。",
      "把顶点坐标代入坐标面积公式或底乘高的一半直接求面积，再与网格总面积作比化简。"
    ],
    "hints": []
  },
  {
    "no": 20,
    "searchText": "Ralph went to the store and bought pairs of socks for a total of . Some of the socks he bought cost a pair, some of\nthe socks he bought cost a pair, and some of the socks he bought cost a pair. If he bought at least one pair of each\ntype, how many pairs of socks did Ralph buy?",
    "questionImage": "assets/2015-amc8-local/q20.png",
    "grade": "amc8",
    "points": 1,
    "title": "袜子购买求解",
    "text": "袜子购买求解",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "D",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2015_AMC_8_Problems/Problem_20",
    "tags": [
      "方程",
      "整除"
    ],
    "methods": [
      "设三种单价各买的双数为未知量，由总双数与总价钱列出不定方程，结合每类至少一双与整除条件求整数解。",
      "先给每种价位各分配一双凑出底价，再把余下的钱按单价从大到小分类枚举可追加的双数，核对总价后得总双数。"
    ],
    "hints": []
  },
  {
    "no": 21,
    "searchText": "In the given figure hexagon is equiangular, and are squares with areas and\nrespectively, is equilateral and . What is the area of ?",
    "questionImage": "assets/2015-amc8-local/q21.png",
    "grade": "amc8",
    "points": 1,
    "title": "等角六边形面积",
    "text": "等角六边形面积",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "C",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2015_AMC_8_Problems/Problem_21",
    "tags": [
      "六边形",
      "割补法"
    ],
    "methods": [
      "由等角六边形各内角相等推出各边的方向关系，把两正方形边长与等边三角形边长联系起来，用分块或割补求目标面积。",
      "设正方形边长为未知量且由所给面积开方得到，利用等角条件列出边长间的等量关系，再代入三角形面积公式化简。"
    ],
    "hints": []
  },
  {
    "no": 22,
    "searchText": "\nOn June , a group of students are standing in rows, with students in each row. On June , the same group is standing\nwith all of the students in one long row. On June , the same group is standing with just one student in each row. On June ,\nthe same group is standing with students in each row. This process continues through June with a different number of\nstudents per row each day. However, on June , they cannot find a new way of organizing the students. What is the smallest\npossible number of students in the group?",
    "questionImage": "assets/2015-amc8-local/q22.png",
    "grade": "amc8",
    "points": 1,
    "title": "排队方式与因数",
    "text": "排队方式与因数",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "C",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2015_AMC_8_Problems/Problem_22",
    "tags": [
      "因数",
      "最值"
    ],
    "methods": [
      "每种每行人数都必须是总人数的因数，故不同排法数等于因数个数；由题目给出的天数定出所需因数个数，再找因数个数恰为该值的最小数。",
      "从小到大枚举自然数，逐个列出其因数并数出排法数，用排除法剔除排法过多或过少者，取第一个满足条件的。"
    ],
    "hints": []
  },
  {
    "no": 23,
    "searchText": "Tom has twelve slips of paper which he wants to put into five cups labeled , , , , . He wants the sum of the\nnumbers on the slips in each cup to be an integer. Furthermore, he wants the five integers to be consecutive and increasing\nfrom to . The numbers on the papers are and . If a slip with goes into\ncup and a slip with goes into cup , then the slip with must go into what cup?",
    "questionImage": "assets/2015-amc8-local/q23.png",
    "grade": "amc8",
    "points": 1,
    "title": "纸片分杯推断",
    "text": "纸片分杯推断",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "D",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2015_AMC_8_Problems/Problem_23",
    "tags": [
      "分数",
      "逻辑推理"
    ],
    "methods": [
      "先求十二张纸片数值的总和，它等于五个连续整数之和，由此定出每杯的目标和，再按分数的小数部分配对凑整。",
      "按分母把纸片分类，只有小数部分互补的几张能凑成整数，结合已知纸片所在杯用逻辑推理逐杯排除并定位目标纸片。"
    ],
    "hints": []
  },
  {
    "no": 24,
    "searchText": "A baseball league consists of two four-team divisions. Each team plays every other team in its division games. Each team\nplays every team in the other division games with and . Each team plays a -game schedule. How\nmany games does a team play within its own division?",
    "questionImage": "assets/2015-amc8-local/q24.png",
    "grade": "amc8",
    "points": 1,
    "title": "联赛队内场数",
    "text": "联赛队内场数",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "B",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2015_AMC_8_Problems/Problem_24",
    "tags": [
      "比赛问题",
      "方程"
    ],
    "methods": [
      "设与同区每个对手的比赛场数为未知量，把总赛程写成同区三队场数加跨区四队场数的方程，解出后乘三得队内总场数。",
      "用表格法列出每支队伍的对手分布，从总场数里减去跨区场数逆向求队内场数，或由赛程总数倒推每类对手的场数。"
    ],
    "hints": []
  },
  {
    "no": 25,
    "searchText": "One-inch squares are cut from the corners of this inch square. What is the area in square inches of the largest square that\ncan fit into the remaining space?",
    "questionImage": "assets/2015-amc8-local/q25.png",
    "grade": "amc8",
    "points": 1,
    "title": "切角后最大方",
    "text": "切角后最大方",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "C",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2015_AMC_8_Problems/Problem_25",
    "tags": [
      "正方形",
      "割补法"
    ],
    "methods": [
      "最大的内接正方形宜倾斜摆放，设其顶点落在切去一英寸角后方格的边界上，用旋转对称与勾股关系列方程解出边长再平方得面积。",
      "用割补法把倾斜正方形切成中心正方形与四个全等直角三角形，分块相加求面积，或由大正方形减去边角余料反推。"
    ],
    "hints": []
  }
];
