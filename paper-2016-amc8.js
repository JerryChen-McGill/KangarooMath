// Source: user-provided AoPS PDFs in past papers/ACM 8. Problems © MAA.
KANGAROO_DATA["2016-amc8"] = [
  {
    "no": 1,
    "searchText": "\nThe longest professional tennis match lasted a total of 11 hours and 5 minutes. How many minutes is that?",
    "questionImage": "assets/2016-amc8-local/q1.png",
    "grade": "amc8",
    "points": 1,
    "title": "时长换算分钟",
    "text": "时长换算分钟",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "C",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2016_AMC_8_Problems/Problem_1",
    "tags": [
      "单位换算",
      "数与运算"
    ],
    "methods": [
      "把小时数乘以每小时的分钟数，再加上余下的分钟数即得总分钟。",
      "把时长拆成整小时部分与零散分钟两部分分别换算后相加，或一步一步累加验证。"
    ],
    "hints": []
  },
  {
    "no": 2,
    "searchText": "In rectangle , and . Point is the midpoint of . What is the area of ?",
    "questionImage": "assets/2016-amc8-local/q2.png",
    "grade": "amc8",
    "points": 1,
    "title": "矩形中点求面积",
    "text": "矩形中点求面积",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "A",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2016_AMC_8_Problems/Problem_2",
    "tags": [
      "长方形",
      "面积"
    ],
    "methods": [
      "由中点条件确定三角形的底与高分别是矩形边长及其一半，直接用底乘高除以二求面积。",
      "把矩形总面积减去目标三角形之外的几个直角三角形面积，用割补法得到所求面积。"
    ],
    "hints": []
  },
  {
    "no": 3,
    "searchText": "Four students take an exam. Three of their scores are , , and . If the average of their four scores is , then what is\nthe remaining score?",
    "questionImage": "assets/2016-amc8-local/q3.png",
    "grade": "amc8",
    "points": 1,
    "title": "平均分求缺分",
    "text": "平均分求缺分",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "A",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2016_AMC_8_Problems/Problem_3",
    "tags": [
      "方程",
      "数与运算"
    ],
    "methods": [
      "设未知分数为 x，由四个分数之和除以四等于给定平均分列一元方程求解。",
      "先算出四次总分（平均乘四）再减去三个已知分数，或用以平均为基准的偏差之和为零来凑出缺失分。"
    ],
    "hints": []
  },
  {
    "no": 4,
    "searchText": "When Cheenu was a boy, he could run miles in hours and minutes. As an old man, he can now walk miles in\nhours. How many minutes longer does it take for him to travel a mile now compared to when he was a boy?",
    "questionImage": "assets/2016-amc8-local/q4.png",
    "grade": "amc8",
    "points": 1,
    "title": "每英里用时差",
    "text": "每英里用时差",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "B",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2016_AMC_8_Problems/Problem_4",
    "tags": [
      "行程问题",
      "除法"
    ],
    "methods": [
      "把两段时间都统一换算成分钟，各除以对应路程得到每英里所需分钟数，两者相减。",
      "先分别求出少年与老年时的单位路程耗时，用比例关系直接算出每英里多用多少分钟。"
    ],
    "hints": []
  },
  {
    "no": 5,
    "searchText": "The number is a two-digit number.\n• When is divided by , the remainder is .\n• When is divided by , the remainder is .\nWhat is the remainder when is divided by ?\n",
    "questionImage": "assets/2016-amc8-local/q5.png",
    "grade": "amc8",
    "points": 1,
    "title": "两位数同余求余",
    "text": "两位数同余求余",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "E",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2016_AMC_8_Problems/Problem_5",
    "tags": [
      "同余",
      "余数"
    ],
    "methods": [
      "把两个除以某数余某数写成同余式或该数等于除数乘商加余数的形式，联立定出该数或其模，再求第三个除法的余数。",
      "枚举所有满足前两个余数条件的两位数，观察它们相差公倍数的规律，再据此推出除以第三个数的余数。"
    ],
    "hints": []
  },
  {
    "no": 6,
    "searchText": "The following bar graph represents the length (in letters) of the names of 19 people. What is the median length of these\nnames?",
    "questionImage": "assets/2016-amc8-local/q6.png",
    "grade": "amc8",
    "points": 1,
    "title": "姓名长度中位数",
    "text": "姓名长度中位数",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "B",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2016_AMC_8_Problems/Problem_6",
    "tags": [
      "表格法",
      "数与运算"
    ],
    "methods": [
      "奇数个数据的中位数是排序后正中间那个，从柱状图按名字长度由短到长累加人数，找到中间序号对应的长度。",
      "列出各长度的累计频数表，直接读出覆盖中间位置的那一组长度，即中位数。"
    ],
    "hints": []
  },
  {
    "no": 7,
    "searchText": "Which of the following numbers is not a perfect square?",
    "questionImage": "assets/2016-amc8-local/q7.png",
    "grade": "amc8",
    "points": 1,
    "title": "判别完全平方数",
    "text": "判别完全平方数",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "B",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2016_AMC_8_Problems/Problem_7",
    "tags": [
      "数论",
      "排除法"
    ],
    "methods": [
      "把各选项作质因数分解，检查每个质因子的指数是否都是偶数或能否开方得整数，找出不是完全平方的那个。",
      "利用完全平方数的数字特征，如个位可能值、模某数的余数、末尾零的个数，快速排除锁定不符合的那个。"
    ],
    "hints": []
  },
  {
    "no": 8,
    "searchText": "Find the value of the expression:",
    "questionImage": "assets/2016-amc8-local/q8.png",
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
    "answer": "C",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2016_AMC_8_Problems/Problem_8",
    "tags": [
      "数与运算",
      "运算律"
    ],
    "methods": [
      "按括号与优先级逐层代入，一步步算出数值。",
      "观察式子结构，用分配律、结合律或凑整把表达式整体化简后再计算。"
    ],
    "hints": []
  },
  {
    "no": 9,
    "searchText": "What is the sum of the distinct prime integer divisors of ?",
    "questionImage": "assets/2016-amc8-local/q9.png",
    "grade": "amc8",
    "points": 1,
    "title": "质因数求和",
    "text": "质因数求和",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "B",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2016_AMC_8_Problems/Problem_9",
    "tags": [
      "因数",
      "数论"
    ],
    "methods": [
      "把该数分解为质因子的幂之积，挑出所有不同的质因数后相加。",
      "用从小到大的质数逐一试除该数，每除尽一次就记下一个新的质因子，除到商为一后把记录的质因子相加。"
    ],
    "hints": []
  },
  {
    "no": 10,
    "searchText": "Suppose that means What is the value of if",
    "questionImage": "assets/2016-amc8-local/q10.png",
    "grade": "amc8",
    "points": 1,
    "title": "新运算解方程",
    "text": "新运算解方程",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "D",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2016_AMC_8_Problems/Problem_10",
    "tags": [
      "方程",
      "符号"
    ],
    "methods": [
      "严格按题目给出的运算定义把等式中的每一项展开成熟悉的代数式，再解一元方程求 x。",
      "把新运算视为一种映射，从结果反向还原自变量，或把选项逐一代入检验哪个满足等式。"
    ],
    "hints": []
  },
  {
    "no": 11,
    "searchText": "Determine how many two-digit numbers satisfy the following property: when the number is added to the number obtained by\nreversing its digits, the sum is",
    "questionImage": "assets/2016-amc8-local/q11.png",
    "grade": "amc8",
    "points": 1,
    "title": "逆序数求和计数",
    "text": "逆序数求和计数",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "B",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2016_AMC_8_Problems/Problem_11",
    "tags": [
      "位值",
      "方程"
    ],
    "methods": [
      "把两位数写成十位与个位的位值式、其逆序同理，两者之和化为关于两数字之和的简洁式子，令其等于给定值后数出合法的数字对。",
      "逐个枚举两位数，计算该数加倒序数并检验是否等于目标值，统计满足条件的个数。"
    ],
    "hints": []
  },
  {
    "no": 12,
    "searchText": "Jefferson Middle School has the same number of boys and girls. of the girls and of the boys went on a field trip. What\nfraction of the students on the field trip were girls?",
    "questionImage": "assets/2016-amc8-local/q12.png",
    "grade": "amc8",
    "points": 1,
    "title": "郊游女生占比",
    "text": "郊游女生占比",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "B",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2016_AMC_8_Problems/Problem_12",
    "tags": [
      "分数",
      "比例"
    ],
    "methods": [
      "设男、女生各为同一个便于计算的数，分别乘以各自的郊游比例得郊游的女生数与男生数，再求女生占郊游总人数的分数。",
      "把郊游总人数写成女生总数乘女生比例加男生总数乘男生比例，利用男女相等约去公共量，用分式化简得所求比例。"
    ],
    "hints": []
  },
  {
    "no": 13,
    "searchText": "Two different numbers are randomly selected from the set and multiplied together. What is the\nprobability that the product is ?",
    "questionImage": "assets/2016-amc8-local/q13.png",
    "grade": "amc8",
    "points": 1,
    "title": "两数乘积概率",
    "text": "两数乘积概率",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "D",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2016_AMC_8_Problems/Problem_13",
    "tags": [
      "概率",
      "组合"
    ],
    "methods": [
      "总取法为从集合中取两数的组合数，再把目标乘积作因数分解找出集合内能凑出它的数对，二者相除得概率。",
      "列举集合中所有两个不同数的组合，逐一算乘积并数出等于目标值的那些，除以总组合数。"
    ],
    "hints": []
  },
  {
    "no": 14,
    "searchText": "Karl's car uses a gallon of gas every miles, and his gas tank holds gallons when it is full. One day, Karl started with a\nfull tank of gas, drove miles, bought gallons of gas, and continued driving to his destination. When he arrived, his gas\ntank was half full. How many miles did Karl drive that day?\n",
    "questionImage": "assets/2016-amc8-local/q14.png",
    "grade": "amc8",
    "points": 1,
    "title": "油耗反推里程",
    "text": "油耗反推里程",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "A",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2016_AMC_8_Problems/Problem_14",
    "tags": [
      "应用题",
      "方程"
    ],
    "methods": [
      "设共行驶 x 英里，按每段耗油等于该段里程除以每加仑里程写出出发、加油、到达三处的油量变化，用到达时半箱列方程解 x。",
      "把全程总耗油量看成起始满箱加中途加油减到达半箱，由总耗油乘以每加仑可跑里程直接得总里程。"
    ],
    "hints": []
  },
  {
    "no": 15,
    "searchText": "What is the largest power of that is a divisor of ?",
    "questionImage": "assets/2016-amc8-local/q15.png",
    "grade": "amc8",
    "points": 1,
    "title": "最大幂整除",
    "text": "最大幂整除",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "C",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2016_AMC_8_Problems/Problem_15",
    "tags": [
      "指数",
      "整除"
    ],
    "methods": [
      "把该数或阶乘分解，用逐层除以底数取整求和统计该质因子的总个数，最大幂的指数即为该数。",
      "对构成该数的每一项分别数出含该质因子的幂次再累加，或不断整除到底，用计数结果写出最大幂。"
    ],
    "hints": []
  },
  {
    "no": 16,
    "searchText": "Annie and Bonnie are running laps around a -meter oval track. They started at the same time, at the same place, but Annie\nhas pulled ahead because she runs faster than Bonnie. How many laps will Annie have run when she first passes\nBonnie?",
    "questionImage": "assets/2016-amc8-local/q16.png",
    "grade": "amc8",
    "points": 1,
    "title": "跑道追及圈数",
    "text": "跑道追及圈数",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "D",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2016_AMC_8_Problems/Problem_16",
    "tags": [
      "行程问题",
      "方程"
    ],
    "methods": [
      "第一次追上时快者恰好多跑一整圈，设快者跑了 k 圈，用速度比写出慢者的圈数为 k 减一，列比例方程解 k。",
      "把两人速度写成最简整数比，追上要求圈数之比为该比且差为一，求满足的最小整数对即得快者圈数。"
    ],
    "hints": []
  },
  {
    "no": 17,
    "searchText": "An ATM password at Fred's Bank is composed of four digits from to , with repeated digits allowable. If no password may\nbegin with the sequence then how many passwords are possible?",
    "questionImage": "assets/2016-amc8-local/q17.png",
    "grade": "amc8",
    "points": 1,
    "title": "密码计数排除",
    "text": "密码计数排除",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "D",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2016_AMC_8_Problems/Problem_17",
    "tags": [
      "乘法原理",
      "排除法"
    ],
    "methods": [
      "先按每位独立选择算出全部四位密码数，再减去以禁用序列开头的密码数（其余位任意），得结果。",
      "直接在开头几位排除禁用序列，按位用乘法原理把各步可选数相乘，得到合法的密码总数。"
    ],
    "hints": []
  },
  {
    "no": 18,
    "searchText": "In an All-Area track meet, sprinters enter a meter dash competition. The track has lanes, so only sprinters can\ncompete at a time. At the end of each race, the five non-winners are eliminated, and the winner will compete again in a later\nrace. How many races are needed to determine the champion sprinter?",
    "questionImage": "assets/2016-amc8-local/q18.png",
    "grade": "amc8",
    "points": 1,
    "title": "淘汰赛场数",
    "text": "淘汰赛场数",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "C",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2016_AMC_8_Problems/Problem_18",
    "tags": [
      "比赛问题",
      "进一法"
    ],
    "methods": [
      "每场比赛固定淘汰若干非冠军，要决出一名冠军共需淘汰其余所有人，用需淘汰人数除以每场淘汰数并向上取整得场数。",
      "按轮次模拟，每轮把当前选手按赛道数分组比赛，各组冠军晋级合并，逐轮累加比赛场数直到只剩一人。"
    ],
    "hints": []
  },
  {
    "no": 19,
    "searchText": "The sum of consecutive even integers is . What is the largest of these consecutive integers?",
    "questionImage": "assets/2016-amc8-local/q19.png",
    "grade": "amc8",
    "points": 1,
    "title": "连续偶数和最大项",
    "text": "连续偶数和最大项",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "E",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2016_AMC_8_Problems/Problem_19",
    "tags": [
      "数列",
      "配对求和"
    ],
    "methods": [
      "设连续偶数的首项与项数，用等差数列求和公式列出总和的等式，再由末项等于首项加公差乘相差次数解出最大项。",
      "利用等差数列首尾配对和相等，或平均值即中间项，由总和与项数先定中间项再向两端推出最大项。"
    ],
    "hints": []
  },
  {
    "no": 20,
    "searchText": "The least common multiple of and is , and the least common multiple of and is . What is the least possible\nvalue of the least common multiple of and ?\n",
    "questionImage": "assets/2016-amc8-local/q20.png",
    "grade": "amc8",
    "points": 1,
    "title": "最小公倍数最值",
    "text": "最小公倍数最值",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "A",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2016_AMC_8_Problems/Problem_20",
    "tags": [
      "倍数",
      "最值"
    ],
    "methods": [
      "对每个质因子分别考察，由两个已知最小公倍数的指数给三个数的指数定约束，再让所求两数的指数尽量小以最小化它们的最小公倍数。",
      "把各数写成质因子幂的形式，利用最小公倍数取指数最大者构造让公共数承接高指数、另两数取低指数的方案，比较得最小可能值。"
    ],
    "hints": []
  },
  {
    "no": 21,
    "searchText": "A top hat contains 3 red chips and 2 green chips. Chips are drawn randomly, one at a time without replacement, until all 3 of the\nreds are drawn or until both green chips are drawn. What is the probability that the 3 reds are drawn?",
    "questionImage": "assets/2016-amc8-local/q21.png",
    "grade": "amc8",
    "points": 1,
    "title": "抽筹码概率",
    "text": "抽筹码概率",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "B",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2016_AMC_8_Problems/Problem_21",
    "tags": [
      "概率",
      "逆向思维"
    ],
    "methods": [
      "把全部筹码的抽取顺序看作一个随机排列，红色先被抽完等价于排在最末的是绿筹码，用末位颜色的概率直接得出。",
      "枚举所有红绿相间的抽取序列，或用逆向思维关注最后一次抽取，统计红先于绿全部出现完的序列比例。"
    ],
    "hints": []
  },
  {
    "no": 22,
    "searchText": "Rectangle below is a rectangle with . What is the area of the \"bat wings\"\n(shaded region)?",
    "questionImage": "assets/2016-amc8-local/q22.png",
    "grade": "amc8",
    "points": 1,
    "title": "蝙蝠翼阴影面积",
    "text": "蝙蝠翼阴影面积",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "C",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2016_AMC_8_Problems/Problem_22",
    "tags": [
      "面积",
      "割补法"
    ],
    "methods": [
      "用整个矩形的面积减去中间与两侧空白三角形的面积，用割补法得到阴影部分。",
      "把阴影拆成两个或几个三角形，各用底乘高除以二求面积再相加，或利用图形对称先算一半再翻倍。"
    ],
    "hints": []
  },
  {
    "no": 23,
    "searchText": "Two congruent circles centered at points and each pass through the other circle's center. The line containing both\nand is extended to intersect the circles at points and . The circles intersect at two points, one of which is . What is\nthe degree measure of ?",
    "questionImage": "assets/2016-amc8-local/q23.png",
    "grade": "amc8",
    "points": 1,
    "title": "两圆交角度数",
    "text": "两圆交角度数",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "C",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2016_AMC_8_Problems/Problem_23",
    "tags": [
      "圆",
      "角度"
    ],
    "methods": [
      "由两圆互过圆心可知圆心距等于半径，两圆心与交点构成等边三角形，据此读出相关角再求目标角。",
      "利用所有相关线段都等于半径，把图形化成若干个等腰或等边三角形，用圆周角或圆心角与内角和关系逐步算角。"
    ],
    "hints": []
  },
  {
    "no": 24,
    "searchText": "The digits , , , , and are each used once to write a five-digit number . The three-digit number is\ndivisible by , the three-digit number is divisible by , and the three-digit number is divisible by . What is ?",
    "questionImage": "assets/2016-amc8-local/q24.png",
    "grade": "amc8",
    "points": 1,
    "title": "五位数整除排列",
    "text": "五位数整除排列",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "A",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2016_AMC_8_Problems/Problem_24",
    "tags": [
      "整除",
      "排除法"
    ],
    "methods": [
      "从三个三位数的整除条件出发，用整除特征逐个约束中间数位，靠排除法锁定各位置的数字。",
      "枚举五个数字组成五位数的所有排列，逐一验证三个连续三位数是否分别被对应的数整除，找出唯一可行者。"
    ],
    "hints": []
  },
  {
    "no": 25,
    "searchText": "A semicircle is inscribed in an isosceles triangle with base and height so that the diameter of the semicircle is\ncontained in the base of the triangle as shown. What is the radius of the semicircle?",
    "questionImage": "assets/2016-amc8-local/q25.png",
    "grade": "amc8",
    "points": 1,
    "title": "等腰内接半圆半径",
    "text": "等腰内接半圆半径",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "B",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2016_AMC_8_Problems/Problem_25",
    "tags": [
      "圆",
      "方程"
    ],
    "methods": [
      "由半圆与两腰相切，圆心到腰的距离等于半径；构造与原等腰三角形相似的小三角形，用对应边成比例列式解 r。",
      "把大三角形按半圆半径拆成以两腰为底的两块，用总面积等于两部分以 r 为高之和或等面积关系列方程求 r。"
    ],
    "hints": []
  }
];
