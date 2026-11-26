// Source: user-provided AoPS PDFs in past papers/ACM 8. Problems © MAA.
KANGAROO_DATA["2006-amc8"] = [
  {
    "no": 1,
    "searchText": "Mindy made three purchases for , , and . What was her total, to the nearest dollar?",
    "questionImage": "assets/2006-amc8-local/q1.png",
    "grade": "amc8",
    "points": 1,
    "title": "三笔消费凑整",
    "text": "三笔消费凑整",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "D",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2006_AMC_8_Problems/Problem_1",
    "tags": [
      "小数",
      "巧算"
    ],
    "methods": [
      "把三笔金额按小数加法逐项相加，再按四舍五入规则取最近的整数美元。",
      "先分别把每笔金额按小数部分凑整估算、配对合并简化加法，再核对总分的进位快速定出最接近的金额。"
    ],
    "hints": []
  },
  {
    "no": 2,
    "searchText": "On the AMC 8 contest Billy answers 13 questions correctly, answers 7 questions incorrectly and doesn't answer the last 5. What\nis his score?",
    "questionImage": "assets/2006-amc8-local/q2.png",
    "grade": "amc8",
    "points": 1,
    "title": "竞赛得分计算",
    "text": "竞赛得分计算",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "C",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2006_AMC_8_Problems/Problem_2",
    "tags": [
      "应用题",
      "分类讨论"
    ],
    "methods": [
      "按评分规则只有答对得分、答错不扣分，故得分就是答对的 13 题即 13 分。",
      "把 25 题分成答对 13、答错 7、未答 5 三类，用总题数减后两类得答对数再乘每题分值，同时核对不扣分规则避免误减。"
    ],
    "hints": []
  },
  {
    "no": 3,
    "searchText": "Elisa swims laps in the pool. When she first started, she completed 10 laps in 25 minutes. Now she can finish 12 laps in 24\nminutes. By how many minutes has she improved her lap time?",
    "questionImage": "assets/2006-amc8-local/q3.png",
    "grade": "amc8",
    "points": 1,
    "title": "每圈用时进步",
    "text": "每圈用时进步",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "A",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2006_AMC_8_Problems/Problem_3",
    "tags": [
      "除法",
      "分数"
    ],
    "methods": [
      "分别用 25÷10 与 24÷12 得原来与现在每圈用时，相减即为每圈缩短的分钟数。",
      "把两次速度写成「圈数除以时间」的分数并通分比较，或把每圈用时之差转成同一圈数下的总时间差再折算。"
    ],
    "hints": []
  },
  {
    "no": 4,
    "searchText": "Initially, a spinner points west. Chenille moves it clockwise revolutions and then counterclockwise revolutions. In what\ndirection does the spinner point after the two moves?",
    "questionImage": "assets/2006-amc8-local/q4.png",
    "grade": "amc8",
    "points": 1,
    "title": "转盘旋转后方向",
    "text": "转盘旋转后方向",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "B",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2006_AMC_8_Problems/Problem_4",
    "tags": [
      "旋转",
      "同余"
    ],
    "methods": [
      "把顺时针与逆时针的圈数带符号相加得净转过圈数，取不足一圈的小数部分（模 1），按四分之一圈的倍数换算成方位。",
      "把四个方向看成周期循环的位置，分别计算两次旋转后指针落在第几个位置，用周期与同余判定最终朝向。"
    ],
    "hints": []
  },
  {
    "no": 5,
    "searchText": "Points and are midpoints of the sides of the larger square. If the larger square has area 60, what is the area of\nthe smaller square?\n",
    "questionImage": "assets/2006-amc8-local/q5.png",
    "grade": "amc8",
    "points": 1,
    "title": "中点连成小方形",
    "text": "中点连成小方形",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "D",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2006_AMC_8_Problems/Problem_5",
    "tags": [
      "正方形",
      "割补法"
    ],
    "methods": [
      "由大正方形面积 60 知连四边中点所得小正方形面积恰为其一半，四个角上的直角三角形各占八分之一，故为 30。",
      "设大正方形边长为 s，用勾股定理求小正方形边长（两相邻中点间距为 √((s/2)²+(s/2)²)），平方后代入 s²=60 得面积。"
    ],
    "hints": []
  },
  {
    "no": 6,
    "searchText": "The letter T is formed by placing two inch rectangles next to each other, as shown. What is the perimeter of the T, in\ninches?",
    "questionImage": "assets/2006-amc8-local/q6.png",
    "grade": "amc8",
    "points": 1,
    "title": "双矩形拼接周长",
    "text": "双矩形拼接周长",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "C",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2006_AMC_8_Problems/Problem_6",
    "tags": [
      "周长",
      "割补法"
    ],
    "methods": [
      "把 T 形看成两个矩形，用两矩形周长之和减去拼合处重合的两条边长（每条被算了两次）得外周长。",
      "沿外边界把全部横段与竖段分别相加，或用「平移边法」把凹进的边拉平补成矩形周长再修正。"
    ],
    "hints": []
  },
  {
    "no": 7,
    "searchText": "Circle has a radius of . Circle has a circumference of . Circle has an area of . List the circles in order from\nsmallest to largest radius.",
    "questionImage": "assets/2006-amc8-local/q7.png",
    "grade": "amc8",
    "points": 1,
    "title": "三圆半径排序",
    "text": "三圆半径排序",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "B",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2006_AMC_8_Problems/Problem_7",
    "tags": [
      "圆",
      "单位换算"
    ],
    "methods": [
      "把三个条件统一换算成半径：周长除以 2π、面积开方后除以 π，得到三个半径再比较大小排序。",
      "也可统一换算成直径或面积，用 π 的近似估算把含 π 的量转成可比较的数，再用排除法定出次序。"
    ],
    "hints": []
  },
  {
    "no": 8,
    "searchText": "The table shows some of the results of a survey by radiostation KACL. What percentage of the males surveyed listen to the\nstation?\n",
    "questionImage": "assets/2006-amc8-local/q8.png",
    "grade": "amc8",
    "points": 1,
    "title": "调查表求百分比",
    "text": "调查表求百分比",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "E",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2006_AMC_8_Problems/Problem_8",
    "tags": [
      "表格法",
      "百分数"
    ],
    "methods": [
      "从表中读出男性中收听的人数与男性总人数，用「收听男性数除以男性总数」乘 100% 得百分比。",
      "用行列合计先补出表中缺失的格（如总收听人数减女性收听人数），再按行内比例换算，注意分母是男性总数而非全体人数。"
    ],
    "hints": []
  },
  {
    "no": 9,
    "searchText": "What is the product of ?",
    "questionImage": "assets/2006-amc8-local/q9.png",
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
    "answer": "C",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2006_AMC_8_Problems/Problem_9",
    "tags": [
      "巧算",
      "运算律"
    ],
    "methods": [
      "观察各项结构，用交换律与结合律把能约分或凑整的因子两两配对，化成简单乘积。",
      "把乘积写成通项的代数式，用因式分解或裂项相消整体化简后再求值；也可逐项约分只保留未消因子。"
    ],
    "hints": []
  },
  {
    "no": 10,
    "searchText": "Jorge's teacher asks him to plot all the ordered pairs of positive integers for which is the width and is the length of\na rectangle with area 12. What should his graph look like?\n",
    "questionImage": "assets/2006-amc8-local/q10.png",
    "grade": "amc8",
    "points": 1,
    "title": "面积十二的点图",
    "text": "面积十二的点图",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "A",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2006_AMC_8_Problems/Problem_10",
    "tags": [
      "因数",
      "坐标"
    ],
    "methods": [
      "由 w×l=12 枚举 12 的正因数对，得到有限个有序正整数点（如 (1,12)、(2,6)、(3,4) 及其交换），图形是双曲线上的孤立点。",
      "把 l=12/w 看作反比例函数，判断自变量只取正整数故不是连续曲线，用排除法选出离散点的图形。"
    ],
    "hints": []
  },
  {
    "no": 11,
    "searchText": "How many two-digit numbers have digits whose sum is a perfect square?",
    "questionImage": "assets/2006-amc8-local/q11.png",
    "grade": "amc8",
    "points": 1,
    "title": "数字和为平方数",
    "text": "数字和为平方数",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "C",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2006_AMC_8_Problems/Problem_11",
    "tags": [
      "数字和",
      "表格法"
    ],
    "methods": [
      "两位数数字和范围有限、可能的完全平方数只有几个，按每个平方值枚举满足 a+b 等于它的十位 a（1 到 9）与个位 b（0 到 9）组合并累加。",
      "列一张十位乘个位的数字和表，圈出表中为平方数的格子，数格子总数即得答案；也可按十位逐行检查。"
    ],
    "hints": []
  },
  {
    "no": 12,
    "searchText": "Antonette gets on a 10-problem test, on a 20-problem test and on a 30-problem test. If the three tests are\ncombined into one 60-problem test, which percent is closest to her overall score?",
    "questionImage": "assets/2006-amc8-local/q12.png",
    "grade": "amc8",
    "points": 1,
    "title": "三次测验合并得分",
    "text": "三次测验合并得分",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "D",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2006_AMC_8_Problems/Problem_12",
    "tags": [
      "百分数",
      "应用题"
    ],
    "methods": [
      "由各次得分率乘题数得各次答对题数，三者相加除以总题数 60 得总得分率，再与选项比较取最接近者。",
      "注意三次题数不等，须用以题数为权的加权平均而非三个百分率的算术平均；先估计结果落在最低与最高得分率之间且偏向题数多的那次，用排除法定位。"
    ],
    "hints": []
  },
  {
    "no": 13,
    "searchText": "Cassie leaves Escanaba at 8:30 AM heading for Marquette on her bike. She bikes at a uniform rate of 12 miles per hour. Brian\nleaves Marquette at 9:00 AM heading for Escanaba on his bike. He bikes at a uniform rate of 16 miles per hour. They both bike\non the same 62-mile route between Escanaba and Marquette. At what time in the morning do they meet?",
    "questionImage": "assets/2006-amc8-local/q13.png",
    "grade": "amc8",
    "points": 1,
    "title": "相向骑行相遇",
    "text": "相向骑行相遇",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "D",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2006_AMC_8_Problems/Problem_13",
    "tags": [
      "行程问题",
      "方程"
    ],
    "methods": [
      "设 Brian 出发后 t 小时相遇，先算 Cassie 早半小时以 12 英里每小时走的路程，由 62 减去它等于两人速度和乘 t 列方程，解出 t 再换算成时刻。",
      "先求 9:00 时两人的间距（62 减去 Cassie 提前走的路程），用「间距除以 12+16」得相遇所需时间，再加到 9:00 上。"
    ],
    "hints": []
  },
  {
    "no": 14,
    "searchText": "If Bob and Chandra both read the whole book, Bob will spend how many more seconds reading than Chandra?",
    "questionImage": "assets/2006-amc8-local/q14.png",
    "grade": "amc8",
    "points": 1,
    "title": "两人读书时差",
    "text": "两人读书时差",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "B",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2006_AMC_8_Problems/Problem_14",
    "tags": [
      "应用题",
      "运算律"
    ],
    "methods": [
      "分别用 760 乘 45 秒与 760 乘 30 秒得两人总用时，相减得差。",
      "先求每页用时差 45-30，再乘总页数 760，用分配律一步得出结果。"
    ],
    "hints": []
  },
  {
    "no": 15,
    "searchText": "Chandra and Bob, who each have a copy of the book, decide that they can save time by \"team reading\" the novel. In this\nscheme, Chandra will read from page 1 to a certain page and Bob will read from the next page through page 760, finishing the\nbook. When they are through they will tell each other about the part they read. What is the last page that Chandra should read\nso that she and Bob spend the same amount of time reading the novel?",
    "questionImage": "assets/2006-amc8-local/q15.png",
    "grade": "amc8",
    "points": 1,
    "title": "分工读书页数",
    "text": "分工读书页数",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "C",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2006_AMC_8_Problems/Problem_15",
    "tags": [
      "方程",
      "比例"
    ],
    "methods": [
      "设 Chandra 读前 x 页、Bob 读其余 760-x 页，由 30x=45(760-x) 列方程解出 x。",
      "两人用时相同则所读页数与每页用时成反比，故 Chandra 与 Bob 页数比为 45:30，按比例分配 760 页即得 Chandra 的最后一页。"
    ],
    "hints": []
  },
  {
    "no": 16,
    "searchText": "Before Chandra and Bob start reading, Alice says she would like to team read with them. If they divide the book into three\nsections so that each reads for the same length of time, how many seconds will each have to read?",
    "questionImage": "assets/2006-amc8-local/q16.png",
    "grade": "amc8",
    "points": 1,
    "title": "三人等时分段读书",
    "text": "三人等时分段读书",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "E",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2006_AMC_8_Problems/Problem_16",
    "tags": [
      "方程",
      "比例"
    ],
    "methods": [
      "设每人读 t 秒，则三人页数分别为 t/20、t/45、t/30，三者之和等于 760，列方程解出 t。",
      "先求三人合读的总速率（每秒共读多少页，即三速率之和），用总页数 760 除以总速率得共同用时 t。"
    ],
    "hints": []
  },
  {
    "no": 17,
    "searchText": "Jeff rotates spinners , and and adds the resulting numbers. What is the probability that his sum is an odd number?",
    "questionImage": "assets/2006-amc8-local/q17.png",
    "grade": "amc8",
    "points": 1,
    "title": "三转盘和为奇",
    "text": "三转盘和为奇",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "B",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2006_AMC_8_Problems/Problem_17",
    "tags": [
      "概率",
      "递推"
    ],
    "methods": [
      "和为奇当且仅当奇数个数为奇数，按各盘上奇数与偶数的个数分类，用组合计数或奇偶概率相乘求得概率。",
      "用奇偶状态的递推：每加一个转盘，把当前「和为奇／和为偶」的概率各乘该盘奇偶比例后转移，最终读出和为奇的概率；也可枚举所有有序结果统计。"
    ],
    "hints": []
  },
  {
    "no": 18,
    "searchText": "\nA cube with 3-inch edges is made using 27 cubes with 1-inch edges. Nineteen of the smaller cubes are white and eight are\nblack. If the eight black cubes are placed at the corners of the larger cube, what fraction of the surface area of the larger cube is\nwhite?",
    "questionImage": "assets/2006-amc8-local/q18.png",
    "grade": "amc8",
    "points": 1,
    "title": "立方体表面白面占比",
    "text": "立方体表面白面占比",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "D",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2006_AMC_8_Problems/Problem_18",
    "tags": [
      "立方体",
      "空间想象"
    ],
    "methods": [
      "大立方体表面积为 6×3²=54 个小正方形面，8 个角上的黑块各露出 3 面共 24 个黑面，故白面为 30 个，占 30/54。",
      "按位置分类统计：角块露 3 面、棱中块露 2 面、面心块露 1 面，黑块全在角上，先数出白色小面总数再除以总表面积。"
    ],
    "hints": []
  },
  {
    "no": 19,
    "searchText": "Triangle is an isosceles triangle with . Point is the midpoint of both and , and is 11\nunits long. Triangle is congruent to triangle . What is the length of ?",
    "questionImage": "assets/2006-amc8-local/q19.png",
    "grade": "amc8",
    "points": 1,
    "title": "等腰三角形与全等",
    "text": "等腰三角形与全等",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "D",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2006_AMC_8_Problems/Problem_19",
    "tags": [
      "三角形",
      "中点"
    ],
    "methods": [
      "由中点条件与两三角形全等的对应边相等关系，把已知 11 单位的线段与所求线段建立倍半对应，换算求出长度。",
      "利用对称性把图形沿中点所在直线翻折，把所求线段转化为某条已知线段的一半或两倍，用比例直接得出。"
    ],
    "hints": []
  },
  {
    "no": 20,
    "searchText": "A singles tournament had six players. Each player played every other player only once, with no ties. If Helen won 4 games, Ines\nwon 3 games, Janet won 2 games, Kendra won 2 games and Lara won 2 games, how many games did Monica (the sixth player)\nwin?",
    "questionImage": "assets/2006-amc8-local/q20.png",
    "grade": "amc8",
    "points": 1,
    "title": "单循环胜场求未知",
    "text": "单循环胜场求未知",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "C",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2006_AMC_8_Problems/Problem_20",
    "tags": [
      "比赛问题",
      "图论"
    ],
    "methods": [
      "六人单循环共 15 场、每场产生一个胜场，用 15 减去 Helen 4、Ines 3 与三个 2 的和即得 Monica 的胜场数。",
      "把每人看作一个顶点、胜场看作出度，由所有出度之和等于比赛总边数设 x 列方程求解，或核对各人胜场不超过 5 的上界。"
    ],
    "hints": []
  },
  {
    "no": 21,
    "searchText": "An aquarium has a rectangular base that measures cm by cm and has a height of cm. The aquarium is filled with\nwater to a depth of cm. A rock with volume is then placed in the aquarium and completely submerged. By how\nmany centimeters does the water level rise?",
    "questionImage": "assets/2006-amc8-local/q21.png",
    "grade": "amc8",
    "points": 1,
    "title": "放入石块水位上升",
    "text": "放入石块水位上升",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "A",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2006_AMC_8_Problems/Problem_21",
    "tags": [
      "体积",
      "方程"
    ],
    "methods": [
      "石块完全浸没排开的水等于其体积，用「体积等于底面积乘上升高度」列方程，故上升高度为石块体积除以底面积。",
      "用放入前后水的体积不变列等式：底面积乘原水深等于底面积乘新水深减去石块体积，化简得同一结果，并核对新水深不超过容器高度。"
    ],
    "hints": []
  },
  {
    "no": 22,
    "searchText": "Three different one-digit positive integers are placed in the bottom row of cells. Numbers in adjacent cells are added and the\nsum is placed in the cell above them. In the second row, continue the same process to obtain a number in the top cell. What is\nthe difference between the largest and smallest numbers possible in the top cell?\n",
    "questionImage": "assets/2006-amc8-local/q22.png",
    "grade": "amc8",
    "points": 1,
    "title": "加法塔顶格极差",
    "text": "加法塔顶格极差",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "D",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2006_AMC_8_Problems/Problem_22",
    "tags": [
      "最值",
      "代数"
    ],
    "methods": [
      "把顶格写成底层三数的线性组合（两端系数 1、中间系数 2），故最大值取三个最大的一位数且把最大者放中间，最小值取三个最小的且把最小者放中间，两者相减。",
      "枚举底层三个不同一位数的取法与排列，分别算出顶格值后取最大与最小再作差；或用代数式化简后直接比较系数定极值。"
    ],
    "hints": []
  },
  {
    "no": 23,
    "searchText": "A box contains gold coins. If the coins are equally divided among six people, four coins are left over. If the coins are equally\ndivided among five people, three coins are left over. If the box holds the smallest number of coins that meets these two\nconditions, how many coins are left when equally divided among seven people?",
    "questionImage": "assets/2006-amc8-local/q23.png",
    "grade": "amc8",
    "points": 1,
    "title": "金币同余求余数",
    "text": "金币同余求余数",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "A",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2006_AMC_8_Problems/Problem_23",
    "tags": [
      "同余",
      "倍数"
    ],
    "methods": [
      "由「除以 6 余 4、除以 5 余 3」逐个数枚举（或列出满足第一个条件的数列再筛第二个）找到最小金币数，再除以 7 求余。",
      "注意两个余数都比除数小 2，故该数加 2 能同时被 6 与 5 整除，取最小公倍数减 2 得最小金币数，再对 7 取余。"
    ],
    "hints": []
  },
  {
    "no": 24,
    "searchText": "In the multiplication problem below , , , and are different digits. What is ?",
    "questionImage": "assets/2006-amc8-local/q24.png",
    "grade": "amc8",
    "points": 1,
    "title": "竖式数字谜",
    "text": "竖式数字谜",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "A",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2006_AMC_8_Problems/Problem_24",
    "tags": [
      "位值",
      "逻辑推理"
    ],
    "methods": [
      "按竖式逐位写出乘法与进位的位值关系，用「不同字母代表不同数字」和进位范围逐步缩小各位取值，解出各字母后再求所问。",
      "从个位与最高位的乘积约束入手，用末位数字特征先定出个别字母，再代入检验其余位；或枚举少数字母组合用排除法筛选。"
    ],
    "hints": []
  },
  {
    "no": 25,
    "searchText": "Barry wrote 6 different numbers, one on each side of 3 cards, and laid the cards on a table, as shown. The sums of the two\nnumbers on each of the three cards are equal. The three numbers on the hidden sides are prime numbers. What is the average\nof the hidden prime numbers?\n",
    "questionImage": "assets/2006-amc8-local/q25.png",
    "grade": "amc8",
    "points": 1,
    "title": "卡片两面和相等",
    "text": "卡片两面和相等",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "B",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2006_AMC_8_Problems/Problem_25",
    "tags": [
      "配对求和",
      "枚举"
    ],
    "methods": [
      "设公共和为 S，则每张卡正面数与隐藏质数之和都等于 S，把三式相加得隐藏质数之和与正面数总和的关系，除以 3 即得平均。",
      "由「六个面的数字全不同」与「隐藏面是质数」出发，枚举可能的质数三元组，用各卡两面和相等的配对条件逐一检验，找出唯一可行的一组再求平均。"
    ],
    "hints": []
  }
];
