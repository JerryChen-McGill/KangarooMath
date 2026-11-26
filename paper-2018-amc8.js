// Source: user-provided AoPS PDFs in past papers/ACM 8. Problems © MAA.
KANGAROO_DATA["2018-amc8"] = [
  {
    "no": 1,
    "searchText": "\nAn amusement park has a collection of scale models, with ratio , of buildings and other sights from around the country.\nThe height of the United States Capitol is 289 feet. What is the height in feet of its replica to the nearest whole number?",
    "questionImage": "assets/2018-amc8-local/q1.png",
    "grade": "amc8",
    "points": 1,
    "title": "模型高度换算",
    "text": "模型高度换算",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "A",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2018_AMC_8_Problems/Problem_1",
    "tags": [
      "比例",
      "测量"
    ],
    "methods": [
      "按模型高等于实际高乘缩放比例直接相乘，再把结果四舍五入到最接近的整数。",
      "设模型高为 x，用 x 比实际高等于给定比列比例式，交叉相乘后取整。"
    ],
    "hints": []
  },
  {
    "no": 2,
    "searchText": "What is the value of the product",
    "questionImage": "assets/2018-amc8-local/q2.png",
    "grade": "amc8",
    "points": 1,
    "title": "连乘积化简",
    "text": "连乘积化简",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "D",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2018_AMC_8_Problems/Problem_2",
    "tags": [
      "巧算",
      "运算律"
    ],
    "methods": [
      "把各因子重新配对，利用结合律与约分把连乘式凑成简单数。",
      "将乘积视为通项的代数式，用平方差或裂项相消整体化简后再计算。"
    ],
    "hints": []
  },
  {
    "no": 3,
    "searchText": "Students Arn, Bob, Cyd, Dan, Eve, and Fon are arranged in that order in a circle. They start counting: Arn first, then Bob, and so\nforth. When the number contains a 7 as a digit (such as 47) or is a multiple of 7 that person leaves the circle and the counting\ncontinues. Who is the last one present in the circle?",
    "questionImage": "assets/2018-amc8-local/q3.png",
    "grade": "amc8",
    "points": 1,
    "title": "围圈报数淘汰",
    "text": "围圈报数淘汰",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "D",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2018_AMC_8_Problems/Problem_3",
    "tags": [
      "枚举",
      "周期"
    ],
    "methods": [
      "从小到大逐个数，标出含数字七或为七的倍数的数，按对应的人依次出圈，模拟到只剩一人。",
      "把轮到谁看成对当前人数取模，人数每次减一使周期变化，用同余推算每次被淘汰者的位置。"
    ],
    "hints": []
  },
  {
    "no": 4,
    "searchText": "The twelve-sided figure shown has been drawn on graph paper. What is the area of the figure in ?",
    "questionImage": "assets/2018-amc8-local/q4.png",
    "grade": "amc8",
    "points": 1,
    "title": "方格十二边形面积",
    "text": "方格十二边形面积",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "C",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2018_AMC_8_Problems/Problem_4",
    "tags": [
      "割补法",
      "面积"
    ],
    "methods": [
      "把图形外接一个矩形，用割补法减去四周多余的直角三角形与小矩形得面积。",
      "按格点把多边形拆成若干小三角形，或数内部与边界格点用格点面积公式计算。"
    ],
    "hints": []
  },
  {
    "no": 5,
    "searchText": "\nWhat is the value of ?",
    "questionImage": "assets/2018-amc8-local/q5.png",
    "grade": "amc8",
    "points": 1,
    "title": "表达式求值",
    "text": "表达式求值",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "E",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2018_AMC_8_Problems/Problem_5",
    "tags": [
      "数与运算",
      "代数"
    ],
    "methods": [
      "按括号与运算优先级逐层代入，一步步化简得到数值。",
      "先用运算律或恒等式把表达式整体变形，如提取公因式或凑整，再代入求值。"
    ],
    "hints": []
  },
  {
    "no": 6,
    "searchText": "On a trip to the beach, Anh traveled 50 miles on the highway and 10 miles on a coastal access road. He drove three times as\nfast on the highway as on the coastal road. If Anh spent 30 minutes driving on the coastal road, how many minutes did his\nentire trip take?",
    "questionImage": "assets/2018-amc8-local/q6.png",
    "grade": "amc8",
    "points": 1,
    "title": "海滩之行用时",
    "text": "海滩之行用时",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "C",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2018_AMC_8_Problems/Problem_6",
    "tags": [
      "行程问题",
      "比例"
    ],
    "methods": [
      "先用沿海段的路程除以时间求出沿海速度，乘倍数得高速速度，再算高速段时间，两段相加。",
      "直接用时间等于路程除以速度的比例关系，由两段路程比与速度比推出时间比，从已知那段时间算出总时间。"
    ],
    "hints": []
  },
  {
    "no": 7,
    "searchText": "The -digit number is divisible by . What is the remainder when this number is divided by ?",
    "questionImage": "assets/2018-amc8-local/q7.png",
    "grade": "amc8",
    "points": 1,
    "title": "大数整除求余",
    "text": "大数整除求余",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "B",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2018_AMC_8_Problems/Problem_7",
    "tags": [
      "同余",
      "整除"
    ],
    "methods": [
      "把多位数按位值写成十的幂之和，对除数逐项取模后相加得余数。",
      "先利用被某数整除这一条件确定该数的构造或末位特征，再据此推出它模另一除数时的余数。"
    ],
    "hints": []
  },
  {
    "no": 8,
    "searchText": "Mr. Garcia asked the members of his health class how many days last week they exercised for at least 30 minutes. The results\nare summarized in the following bar graph, where the heights of the bars represent the number of students.\nWhat was the mean number of days of exercise last week, rounded to the nearest hundredth, reported by the students in Mr.\nGarcia's class?",
    "questionImage": "assets/2018-amc8-local/q8.png",
    "grade": "amc8",
    "points": 1,
    "title": "锻炼天数均值",
    "text": "锻炼天数均值",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "C",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2018_AMC_8_Problems/Problem_8",
    "tags": [
      "表格法",
      "数与运算"
    ],
    "methods": [
      "从柱形图读出每个锻炼天数的人数，用天数乘人数求和再除以总人数得加权平均。",
      "选一个接近的基准天数，把各柱相对基准的偏差加权相抵，用基准加平均偏差快速得到均值。"
    ],
    "hints": []
  },
  {
    "no": 9,
    "searchText": "Tyler is tiling the floor of his 12 foot by 16 foot living room. He plans to place one-foot by one-foot square tiles to form a border\nalong the edges of the room and to fill in the rest of the floor with two-foot by two-foot square tiles. How many tiles will he use?\n",
    "questionImage": "assets/2018-amc8-local/q9.png",
    "grade": "amc8",
    "points": 1,
    "title": "房间铺砖块数",
    "text": "房间铺砖块数",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "B",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2018_AMC_8_Problems/Problem_9",
    "tags": [
      "面积",
      "计数"
    ],
    "methods": [
      "先算出沿四周一圈边框用了多少块小方砖，再算内部区域面积能铺多少块大方砖，两者相加。",
      "按行或按列枚举边框格子的数目并注意四角不重复计，再用内部剩余面积除以单块大方砖面积得块数。"
    ],
    "hints": []
  },
  {
    "no": 10,
    "searchText": "The of a set of non-zero numbers is the reciprocal of the average of the reciprocals of the numbers. What\nis the harmonic mean of 1, 2, and 4?",
    "questionImage": "assets/2018-amc8-local/q10.png",
    "grade": "amc8",
    "points": 1,
    "title": "调和平均数",
    "text": "调和平均数",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "C",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2018_AMC_8_Problems/Problem_10",
    "tags": [
      "分数",
      "数与运算"
    ],
    "methods": [
      "严格按定义先写出各数的倒数，求这些倒数的算术平均，再取整体的倒数。",
      "把定义写成个数除以倒数之和的通式，一次性代入并用通分化简得结果。"
    ],
    "hints": []
  },
  {
    "no": 11,
    "searchText": "Abby, Bridget, and four of their classmates will be seated in two rows of three for a group picture, as shown.\nIf the seating positions are assigned randomly, what is the probability that Abby and Bridget are adjacent to each other in the\nsame row or the same column?",
    "questionImage": "assets/2018-amc8-local/q11.png",
    "grade": "amc8",
    "points": 1,
    "title": "相邻座位概率",
    "text": "相邻座位概率",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "C",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2018_AMC_8_Problems/Problem_11",
    "tags": [
      "概率",
      "组合"
    ],
    "methods": [
      "固定一人的座位，分类讨论她在角、边上或中间时相邻座位各有几个，用相邻座位数除以剩余座位数加权求概率。",
      "把两人相邻看作一个整体用捆绑法数出有利排列数，再除以六人随机入座的总排列数。"
    ],
    "hints": []
  },
  {
    "no": 12,
    "searchText": "The clock in Sri's car, which is not accurate, gains time at a constant rate. One day as he begins shopping, he notes that his car\nclock and his watch (which is accurate) both say 12:00 noon. When he is done shopping, his watch says 12:30 and his car clock\nsays 12:35. Later that day, Sri loses his watch. He looks at his car clock and it says 7:00. What is the actual time?",
    "questionImage": "assets/2018-amc8-local/q12.png",
    "grade": "amc8",
    "points": 1,
    "title": "快钟对准真实时间",
    "text": "快钟对准真实时间",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "B",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2018_AMC_8_Problems/Problem_12",
    "tags": [
      "比例",
      "方程"
    ],
    "methods": [
      "从一段实际时间对应车钟多走了多少求出快慢比例，把车钟显示的经过时长按此比例折回实际时长。",
      "设车钟相对真实时间的走快速率为 k，用两组车钟读数与真实时刻列出线性方程，再反解某读数对应的真实时刻。"
    ],
    "hints": []
  },
  {
    "no": 13,
    "searchText": "Laila took five math tests, each worth a maximum of 100 points. Laila's score on each test was an integer between 0 and 100,\ninclusive. Laila received the same score on the first four tests, and she received a higher score on the last test. Her average\nscore on the five tests was 82. How many values are possible for Laila's score on the last test?",
    "questionImage": "assets/2018-amc8-local/q13.png",
    "grade": "amc8",
    "points": 1,
    "title": "末次分数可能数",
    "text": "末次分数可能数",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "A",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2018_AMC_8_Problems/Problem_13",
    "tags": [
      "方程",
      "枚举"
    ],
    "methods": [
      "设前四次同为 a、第五次为 b，由平均条件得四 a 加 b 为定值，结合 b 大于 a 与分数上限列出 b 的取值范围。",
      "逐个枚举前四次的整数分数，算出对应第五次分数，检验是否为整数且更高、不超满分，统计合法个数。"
    ],
    "hints": []
  },
  {
    "no": 14,
    "searchText": "Let be the greatest five-digit number whose digits have a product of . What is the sum of the digits of ?",
    "questionImage": "assets/2018-amc8-local/q14.png",
    "grade": "amc8",
    "points": 1,
    "title": "数字积最大五位数",
    "text": "数字积最大五位数",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "D",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2018_AMC_8_Problems/Problem_14",
    "tags": [
      "最值",
      "因数"
    ],
    "methods": [
      "把给定的数字乘积分解成若干个一位数因子，不足用一补足，为使数最大把大数字尽量排在高位，再求数字和。",
      "枚举所有乘积等于目标值的一位数多重集合，组成五位数后比较大小取最大者，再求各位数字之和。"
    ],
    "hints": []
  },
  {
    "no": 15,
    "searchText": "In the diagram below, a diameter of each of the two smaller circles is a radius of the larger circle. If the two smaller circles have\na combined area of square unit, then what is the area of the shaded region, in square units?",
    "questionImage": "assets/2018-amc8-local/q15.png",
    "grade": "amc8",
    "points": 1,
    "title": "圆内阴影面积",
    "text": "圆内阴影面积",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "D",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2018_AMC_8_Problems/Problem_15",
    "tags": [
      "圆",
      "比例"
    ],
    "methods": [
      "由小圆直径等于大圆半径得大圆半径是小圆的两倍、面积是四倍，再用大圆面积减去两小圆面积得阴影。",
      "设小圆半径为 r，把大圆与两小圆面积都写成含圆面积率的式子，由已知小圆面积和定出该量后代入求阴影。"
    ],
    "hints": []
  },
  {
    "no": 16,
    "searchText": "Professor Chang has nine different language books lined up on a bookshelf: two Arabic, three German, and four Spanish. How\nmany ways are there to arrange the nine books on the shelf keeping the Arabic books together and keeping the Spanish books\ntogether?",
    "questionImage": "assets/2018-amc8-local/q16.png",
    "grade": "amc8",
    "points": 1,
    "title": "语言书捆绑排列",
    "text": "语言书捆绑排列",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "C",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2018_AMC_8_Problems/Problem_16",
    "tags": [
      "排列",
      "乘法原理"
    ],
    "methods": [
      "把同语种的书各捆成一个整体，与其余单本书一起作全排列，再乘每个整体内部的排列数。",
      "按乘法原理分步，先决定各块在书架上的相对顺序与位置，再依次填入块内各本书的次序，逐步相乘。"
    ],
    "hints": []
  },
  {
    "no": 17,
    "searchText": "Bella begins to walk from her house toward her friend Ella's house. At the same time, Ella begins to ride her bicycle toward\nBella's house. They each maintain a constant speed, and Ella rides 5 times as fast as Bella walks. The distance between their\nhouses is miles, which is feet, and Bella covers feet with each step. How many steps will Bella take by the time\nshe meets Ella?",
    "questionImage": "assets/2018-amc8-local/q17.png",
    "grade": "amc8",
    "points": 1,
    "title": "相遇时步数",
    "text": "相遇时步数",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "A",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2018_AMC_8_Problems/Problem_17",
    "tags": [
      "行程问题",
      "单位换算"
    ],
    "methods": [
      "相向而行时路程按速度比分配，由骑车是步行的若干倍得步行者走了全程的几分之一，再除以每步长度得步数。",
      "设速度与总路程列相遇时间，算出步行者走过的距离，统一单位后除以单步长度求步数。"
    ],
    "hints": []
  },
  {
    "no": 18,
    "searchText": "How many positive factors does have?",
    "questionImage": "assets/2018-amc8-local/q18.png",
    "grade": "amc8",
    "points": 1,
    "title": "正因数个数",
    "text": "正因数个数",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "E",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2018_AMC_8_Problems/Problem_18",
    "tags": [
      "因数",
      "数论"
    ],
    "methods": [
      "先把该数作质因数分解，再用各质因子指数加一后相乘的公式得正因数总数。",
      "把每个因数看成各质因子取不同次幂的组合，用乘法原理数出所有搭配，或逐一列举因数核对。"
    ],
    "hints": []
  },
  {
    "no": 19,
    "searchText": "In a sign pyramid a cell gets a \"+\" if the two cells below it have the same sign, and it gets a \"-\" if the two cells below it have\ndifferent signs. The diagram below illustrates a sign pyramid with four levels. How many possible ways are there to fill the four\ncells in the bottom row to produce a \"+\" at the top of the pyramid?\n",
    "questionImage": "assets/2018-amc8-local/q19.png",
    "grade": "amc8",
    "points": 1,
    "title": "符号金字塔填法",
    "text": "符号金字塔填法",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "C",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2018_AMC_8_Problems/Problem_19",
    "tags": [
      "符号",
      "枚举"
    ],
    "methods": [
      "把同号得正、异号得负看成模二的加法，写出顶端关于底行四个符号的表达式，据此判定有多少填法使结果为正。",
      "从底行的所有符号组合出发，逐层按规则递推到顶端，枚举统计顶端为正的组合数。"
    ],
    "hints": []
  },
  {
    "no": 20,
    "searchText": "In point is on with and Point is on so that and point\nis on so that What is the ratio of the area of to the area of",
    "questionImage": "assets/2018-amc8-local/q20.png",
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
    "answer": "A",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2018_AMC_8_Problems/Problem_20",
    "tags": [
      "等高模型",
      "比例"
    ],
    "methods": [
      "利用等高三角形面积比等于底之比，把各分点的比例逐段相乘，直接得出两个三角形的面积比。",
      "设总面积为一或把边长设为参数，把目标面积写成含比例的代数式，用坐标法或质量点法化简求比。"
    ],
    "hints": []
  },
  {
    "no": 21,
    "searchText": "How many positive three-digit integers have a remainder of 2 when divided by 6, a remainder of 5 when divided by 9, and a\nremainder of 7 when divided by 11?",
    "questionImage": "assets/2018-amc8-local/q21.png",
    "grade": "amc8",
    "points": 1,
    "title": "同余三位数计数",
    "text": "同余三位数计数",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "E",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2018_AMC_8_Problems/Problem_21",
    "tags": [
      "同余",
      "周期"
    ],
    "methods": [
      "注意三个余数都比除数小同一个数，故该数加上这个差即为三个除数的公倍数，由最小公倍数写出通项再数三位数个数。",
      "用中国剩余定理逐对合并同余条件，得到以最小公倍数为周期的解，再在三位范围内用等差数列计数。"
    ],
    "hints": []
  },
  {
    "no": 22,
    "searchText": "\nPoint is the midpoint of side in square and meets diagonal at The area of quadrilateral\nis What is the area of",
    "questionImage": "assets/2018-amc8-local/q22.png",
    "grade": "amc8",
    "points": 1,
    "title": "正方形求面积",
    "text": "正方形求面积",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "B",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2018_AMC_8_Problems/Problem_22",
    "tags": [
      "正方形",
      "面积"
    ],
    "methods": [
      "以边长为单位，利用中点与对角线交点产生的相似三角形，求出已知四边形占正方形的面积比例，再反推总面积。",
      "建立坐标系写出各点坐标，用多边形面积公式把已知四边形表示为边长的函数，列方程解出边长平方。"
    ],
    "hints": []
  },
  {
    "no": 23,
    "searchText": "From a regular octagon, a triangle is formed by connecting three randomly chosen vertices of the octagon. What is the\nprobability that at least one of the sides of the triangle is also a side of the octagon?",
    "questionImage": "assets/2018-amc8-local/q23.png",
    "grade": "amc8",
    "points": 1,
    "title": "八边形三角形概率",
    "text": "八边形三角形概率",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "D",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2018_AMC_8_Problems/Problem_23",
    "tags": [
      "概率",
      "分类讨论"
    ],
    "methods": [
      "总三角形数用组合数，再用补集数出三个顶点互不相邻、三边都不是八边形边的个数，相减得有利情形。",
      "按恰含一条边、恰含两条边即连续三顶点直接分类计数，求和后除以总三角形数。"
    ],
    "hints": []
  },
  {
    "no": 24,
    "searchText": "In the cube with opposite vertices and and are the midpoints of edges and\nrespectively. Let be the ratio of the area of the cross-section to the area of one of the faces of the cube. What is\n",
    "questionImage": "assets/2018-amc8-local/q24.png",
    "grade": "amc8",
    "points": 1,
    "title": "立方体截面比",
    "text": "立方体截面比",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "C",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2018_AMC_8_Problems/Problem_24",
    "tags": [
      "立方体",
      "空间想象"
    ],
    "methods": [
      "建立空间坐标系写出截面各顶点坐标，判定截面多边形形状并算其面积，再除以一个面的面积。",
      "借助对称性把截面分割成若干个全等三角形或梯形，用与棱长的比例关系直接算面积比。"
    ],
    "hints": []
  },
  {
    "no": 25,
    "searchText": "How many perfect cubes lie between and , inclusive?",
    "questionImage": "assets/2018-amc8-local/q25.png",
    "grade": "amc8",
    "points": 1,
    "title": "区间立方数个数",
    "text": "区间立方数个数",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "E",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2018_AMC_8_Problems/Problem_25",
    "tags": [
      "指数",
      "枚举"
    ],
    "methods": [
      "对区间两端分别取立方根并取整，确定最小与最大的整数底，个数即两者之差加一。",
      "依次列出各完全立方数，用比较大小筛出落在给定区间内的那些并计数。"
    ],
    "hints": []
  }
];
