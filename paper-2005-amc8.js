// Source: user-provided AoPS PDFs in past papers/ACM 8. Problems © MAA.
KANGAROO_DATA["2005-amc8"] = [
  {
    "no": 1,
    "searchText": "\nConnie multiplies a number by 2 and gets 60 as her answer. However, she should have divided the number by 2 to get the\ncorrect answer. What is the correct answer?",
    "questionImage": "assets/2005-amc8-local/q1.png",
    "grade": "amc8",
    "points": 1,
    "title": "误乘与应为除法",
    "text": "误乘与应为除法",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "B",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2005_AMC_8_Problems/Problem_1",
    "tags": [
      "除法",
      "逆向思维"
    ],
    "methods": [
      "由「某数乘 2 得 60」逆推出原数是 30，再除以 2 得正确结果 15。",
      "注意正确结果与错误结果只差「乘 2」与「除 2」两步，故正确值等于 60 除以 4，直接由运算关系一步得出。"
    ],
    "hints": []
  },
  {
    "no": 2,
    "searchText": "Karl bought five folders from Pay-A-Lot at a cost of each. Pay-A-Lot had a 20%-off sale the following day. How much\ncould Karl have saved on the purchase by waiting a day?",
    "questionImage": "assets/2005-amc8-local/q2.png",
    "grade": "amc8",
    "points": 1,
    "title": "打折可省金额",
    "text": "打折可省金额",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "C",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2005_AMC_8_Problems/Problem_2",
    "tags": [
      "百分数",
      "应用题"
    ],
    "methods": [
      "先算原价总额（五个文件夹乘单价），再乘 20% 折扣率得可省金额。",
      "只算单个文件夹的折后差价（单价乘 20%）再乘五，或按「折后只付 80%」反推与原价总额的差。"
    ],
    "hints": []
  },
  {
    "no": 3,
    "searchText": "What is the minimum number of small squares that must be colored black so that a line of symmetry lies on the diagonal\nof square ?",
    "questionImage": "assets/2005-amc8-local/q3.png",
    "grade": "amc8",
    "points": 1,
    "title": "涂格使对角对称",
    "text": "涂格使对角对称",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "D",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2005_AMC_8_Problems/Problem_3",
    "tags": [
      "对称",
      "网格"
    ],
    "methods": [
      "把对角线一侧的每个小方格与其镜像格配对，凡两侧颜色不一致处必须补涂，数出最少需改动的格数。",
      "从对角线出发逐行检查两侧对应位置，按「不对称处补齐较少一侧」的贪心方式累加需涂黑的格数，对角线上的格子自身对称无需处理。"
    ],
    "hints": []
  },
  {
    "no": 4,
    "searchText": "A square and a triangle have equal perimeters. The lengths of the three sides of the triangle are 6.1 cm, 8.2 cm and 9.7 cm.\nWhat is the area of the square in square centimeters?",
    "questionImage": "assets/2005-amc8-local/q4.png",
    "grade": "amc8",
    "points": 1,
    "title": "等周长正方形面积",
    "text": "等周长正方形面积",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "C",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2005_AMC_8_Problems/Problem_4",
    "tags": [
      "周长",
      "正方形"
    ],
    "methods": [
      "把 6.1、8.2、9.7 三边相加得周长即正方形周长，除以 4 得边长再平方得面积。",
      "设正方形边长为 x，由 4x 等于三边之和列方程解出 x，再算 x 的平方；也可直接用「周长的平方除以十六」求面积。"
    ],
    "hints": []
  },
  {
    "no": 5,
    "searchText": "Soda is sold in packs of 6, 12 and 24 cans. What is the minimum number of packs needed to buy exactly 90 cans of soda?",
    "questionImage": "assets/2005-amc8-local/q5.png",
    "grade": "amc8",
    "points": 1,
    "title": "整箱凑九十罐",
    "text": "整箱凑九十罐",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "B",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2005_AMC_8_Problems/Problem_5",
    "tags": [
      "最值",
      "方程"
    ],
    "methods": [
      "为使包数最少应尽量取 24 罐装，用 90 除以 24 取尽可能多的大包，再对余数用 12、6 罐装凑齐并检验恰好。",
      "设三种包数为 a、b、c，列 6a+12b+24c=90 的整数方程，按 c 从大到小枚举并用整除条件筛选，取 a+b+c 最小者。"
    ],
    "hints": []
  },
  {
    "no": 6,
    "searchText": "Suppose is a digit. For how many values of is ?",
    "questionImage": "assets/2005-amc8-local/q6.png",
    "grade": "amc8",
    "points": 1,
    "title": "一位数字取值数",
    "text": "一位数字取值数",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "C",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2005_AMC_8_Problems/Problem_6",
    "tags": [
      "不等式",
      "枚举"
    ],
    "methods": [
      "把数字从 0 到 9 逐个代入题给的式子，检验是否成立，数出满足的个数。",
      "先解关于该数字的不等式（或按位值把式子展开化简）求出取值范围，再与 0 到 9 的数字集合取交集计数。"
    ],
    "hints": []
  },
  {
    "no": 7,
    "searchText": "Bill walks mile south, then mile east, and finally mile south. How many miles is he, in a direct line, from his starting\npoint?",
    "questionImage": "assets/2005-amc8-local/q7.png",
    "grade": "amc8",
    "points": 1,
    "title": "折线行走直线距",
    "text": "折线行走直线距",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "B",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2005_AMC_8_Problems/Problem_7",
    "tags": [
      "坐标",
      "三角形"
    ],
    "methods": [
      "把两段向南的路程相加得总的南北位移，向东的路程为东西位移，用勾股定理求起点到终点的直线距离。",
      "在坐标系中设起点为原点，按每段方向累加得到终点坐标，再用两点间距离公式算出直线距离。"
    ],
    "hints": []
  },
  {
    "no": 8,
    "searchText": "Suppose m and n are positive odd integers. Which of the following must also be an odd integer?",
    "questionImage": "assets/2005-amc8-local/q8.png",
    "grade": "amc8",
    "points": 1,
    "title": "奇数运算判奇偶",
    "text": "奇数运算判奇偶",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "E",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2005_AMC_8_Problems/Problem_8",
    "tags": [
      "数论",
      "排除法"
    ],
    "methods": [
      "把 m、n 写成 2k+1 与 2l+1 的形式代入各选项展开，按是否含因子 2 判定奇偶。",
      "用奇偶运算律（奇加奇为偶、奇乘奇为奇等）逐项快速判定，或取具体奇数代入各选项用排除法剔除不一定为奇者。"
    ],
    "hints": []
  },
  {
    "no": 9,
    "searchText": "In quadrilateral , sides and both have length 10, sides and both have length 17, and the\nmeasure of angle is . What is the length of diagonal ?",
    "questionImage": "assets/2005-amc8-local/q9.png",
    "grade": "amc8",
    "points": 1,
    "title": "筝形对角线长",
    "text": "筝形对角线长",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "D",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2005_AMC_8_Problems/Problem_9",
    "tags": [
      "对称",
      "三角形"
    ],
    "methods": [
      "由两组邻边分别等于 10 与 17 知四边形关于对角线对称，把问题化为两个全等三角形，用给定顶角配合余弦定理或作垂线用勾股求该对角线。",
      "从顶点向对角线作垂线，借对称性把顶角平分成两个半角，用已知边与半角的三角比求出对角线的一半再乘二。"
    ],
    "hints": []
  },
  {
    "no": 10,
    "searchText": "Joe had walked half way from home to school when he realized he was late. He ran the rest of the way to school. He ran 3\ntimes as fast as he walked. Joe took 6 minutes to walk half way to school. How many minutes did it take Joe to get from home\nto school?",
    "questionImage": "assets/2005-amc8-local/q10.png",
    "grade": "amc8",
    "points": 1,
    "title": "半程步行半程跑",
    "text": "半程步行半程跑",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "D",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2005_AMC_8_Problems/Problem_10",
    "tags": [
      "行程问题",
      "比例"
    ],
    "methods": [
      "后半程速度是三倍，故所用时间为步行的一半即 3 分钟，加上前半程的 6 分钟共 9 分钟。",
      "设全程为 2d、步行速度为 v，把两段时间写成 d/v 与 d/(3v)，由 d/v=6 代入求出总和。"
    ],
    "hints": []
  },
  {
    "no": 11,
    "searchText": "The sales tax rate in Bergville is 6%. During a sale at the Bergville Coat Closet, the price of a coat is discounted 20% from its\n$90.00 price. Two clerks, Jack and Jill, calculate the bill independently. Jack brings up $90.00 and adds 6% sales tax, then\nsubtracts 20% from this total. Jill brings up $90.00, subtracts 20% of the price, then adds 6% of the discounted price for sales\ntax. What is Jack's total minus Jill's total?",
    "questionImage": "assets/2005-amc8-local/q11.png",
    "grade": "amc8",
    "points": 1,
    "title": "折扣与税先后顺序",
    "text": "折扣与税先后顺序",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "C",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2005_AMC_8_Problems/Problem_11",
    "tags": [
      "百分数",
      "运算律"
    ],
    "methods": [
      "按两人各自的顺序分步算账单：Jack 先算 90 乘 1.06 再乘 0.8，Jill 先算 90 乘 0.8 再乘 1.06，然后相减得差。",
      "把两种算法都写成连乘式，用乘法交换律与结合律看出因子集合完全相同、顺序不影响乘积，直接判定差为零。"
    ],
    "hints": []
  },
  {
    "no": 12,
    "searchText": "Big Al, the ape, ate 100 bananas from May 1 through May 5. Each day he ate six more bananas than on the previous day. How\nmany delicious bananas did Big Al eat on May 5?",
    "questionImage": "assets/2005-amc8-local/q12.png",
    "grade": "amc8",
    "points": 1,
    "title": "五天吃香蕉递增",
    "text": "五天吃香蕉递增",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "D",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2005_AMC_8_Problems/Problem_12",
    "tags": [
      "数列",
      "配对求和"
    ],
    "methods": [
      "设第一天吃 x 根，五天依次为 x、x+6、x+12、x+18、x+24，求和等于 100 列方程解出 x，再加 24 得第五天。",
      "等差数列五天之和等于中间项（第三天）乘 5，故第三天为 20，再加两个公差 6 得第五天；也可用首末项配对求和验证。"
    ],
    "hints": []
  },
  {
    "no": 13,
    "searchText": "The area of polygon is 52 with , and . What is ?",
    "questionImage": "assets/2005-amc8-local/q13.png",
    "grade": "amc8",
    "points": 1,
    "title": "多边形面积求边",
    "text": "多边形面积求边",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "C",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2005_AMC_8_Problems/Problem_13",
    "tags": [
      "面积",
      "割补法"
    ],
    "methods": [
      "把多边形按图分割成若干三角形与矩形，用已知面积 52 与部分边长写出面积和，列方程解出所求线段。",
      "用外接矩形减去几个直角三角形（割补法）表示总面积，再与 52 建立等式反推所求边长。"
    ],
    "hints": []
  },
  {
    "no": 14,
    "searchText": "The Little Twelve Basketball League has two divisions, with six teams in each division. Each team plays each of the other teams\nin its own division twice and every team in the other division once. How many games are scheduled?",
    "questionImage": "assets/2005-amc8-local/q14.png",
    "grade": "amc8",
    "points": 1,
    "title": "联赛总场次",
    "text": "联赛总场次",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "B",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2005_AMC_8_Problems/Problem_14",
    "tags": [
      "比赛问题",
      "组合"
    ],
    "methods": [
      "分区内每区 6 队两两配对互赛两场，用组合数算对数再乘 2 并乘两区；跨区两区各 6 队两两各赛一场，三部分相加。",
      "按每支球队统计参赛场次（区内对手数乘 2 加跨区 6 场），乘 12 队后除以 2（每场被两队各计一次）得总场次。"
    ],
    "hints": []
  },
  {
    "no": 15,
    "searchText": "How many different isosceles triangles have integer side lengths and perimeter 23?\n",
    "questionImage": "assets/2005-amc8-local/q15.png",
    "grade": "amc8",
    "points": 1,
    "title": "整数边等腰三角形",
    "text": "整数边等腰三角形",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "C",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2005_AMC_8_Problems/Problem_15",
    "tags": [
      "三角形不等式",
      "枚举"
    ],
    "methods": [
      "设两腰为 a、底为 b，由 2a+b=23 枚举 a 的取值，用三角形不等式 2a>b 筛掉不合法者，数出个数。",
      "按底边 b 的奇偶分类，从大到小枚举 b 并逐一检验两腰能否构成三角形（两边之和大于第三边），累加合法情形。"
    ],
    "hints": []
  },
  {
    "no": 16,
    "searchText": "A five-legged Martian has a drawer full of socks, each of which is red, white or blue, and there are at least five socks of each\ncolor. The Martian pulls out one sock at a time without looking. How many socks must the Martian remove from the drawer to\nbe certain there will be 5 socks of the same color?",
    "questionImage": "assets/2005-amc8-local/q16.png",
    "grade": "amc8",
    "points": 1,
    "title": "取袜保证同色",
    "text": "取袜保证同色",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "D",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2005_AMC_8_Problems/Problem_16",
    "tags": [
      "抽屉原理",
      "最坏情况"
    ],
    "methods": [
      "考虑最坏情况：红白蓝三种颜色各取到 4 只共 12 只仍未凑齐 5 只，再取 1 只必有某色达到 5 只，故需 13 只。",
      "用抽屉原理公式，把三种颜色看作 3 个抽屉，要保证某抽屉至少 5 只，取 (5-1)×3+1 只即可。"
    ],
    "hints": []
  },
  {
    "no": 17,
    "searchText": "The results of a cross-country team's training run are graphed below. Which student has the greatest average speed?",
    "questionImage": "assets/2005-amc8-local/q17.png",
    "grade": "amc8",
    "points": 1,
    "title": "训练图判最快",
    "text": "训练图判最快",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "E",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2005_AMC_8_Problems/Problem_17",
    "tags": [
      "图形识别",
      "比较大小"
    ],
    "methods": [
      "平均速度等于总路程除以总时间，在图上比较各人终点与原点连线的斜率，斜率最大者平均速度最大。",
      "若各人跑的路程相同，只需比较到达终点所用时间，时间最短者最快；用排除法剔除用时较长的曲线。"
    ],
    "hints": []
  },
  {
    "no": 18,
    "searchText": "How many three-digit numbers are divisible by 13?",
    "questionImage": "assets/2005-amc8-local/q18.png",
    "grade": "amc8",
    "points": 1,
    "title": "三位数十三倍数",
    "text": "三位数十三倍数",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "C",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2005_AMC_8_Problems/Problem_18",
    "tags": [
      "整除",
      "倍数"
    ],
    "methods": [
      "找出最小与最大的三位数 13 倍数，用「末项减首项除以 13 再加 1」算出这列等间隔数的项数。",
      "用 999 除以 13 取整减去 99 除以 13 取整，两个商之差即为三位数中 13 的倍数个数。"
    ],
    "hints": []
  },
  {
    "no": 19,
    "searchText": "What is the perimeter of trapezoid ?",
    "questionImage": "assets/2005-amc8-local/q19.png",
    "grade": "amc8",
    "points": 1,
    "title": "梯形周长",
    "text": "梯形周长",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "A",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2005_AMC_8_Problems/Problem_19",
    "tags": [
      "周长",
      "三角形"
    ],
    "methods": [
      "把梯形沿高分成矩形与直角三角形，用勾股定理由已知边求出未知的斜边或底边段，再把四边相加。",
      "利用平行或等腰关系作辅助平行线，把两腰之和与两底之和转化成已知量，整体相加得周长而不必逐边求长。"
    ],
    "hints": []
  },
  {
    "no": 20,
    "searchText": "Alice and Bob play a game involving a circle whose circumference is divided by 12 equally-spaced points. The points are\nnumbered clockwise, from 1 to 12. Both start on point 12. Alice moves clockwise and Bob, counterclockwise. In a turn of the\ngame, Alice moves 5 points clockwise and Bob moves 9 points counterclockwise. The game ends when they stop on the same\npoint. How many turns will this take?",
    "questionImage": "assets/2005-amc8-local/q20.png",
    "grade": "amc8",
    "points": 1,
    "title": "圆周追及相遇",
    "text": "圆周追及相遇",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "A",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2005_AMC_8_Problems/Problem_20",
    "tags": [
      "同余",
      "周期"
    ],
    "methods": [
      "把 12 个点看作模 12 的剩余类，Alice 每回合进 5、Bob 每回合退 9，写出第 n 回合两人位置并令其同余，解出最小正整数 n。",
      "两人每回合相对靠近 5+9=14 格即模 12 下 2 格，用需弥合的格数除以相对位移求首次重合回合；也可逐回合枚举位置直到相遇。"
    ],
    "hints": []
  },
  {
    "no": 21,
    "searchText": "How many distinct triangles can be drawn using three of the dots below as vertices?",
    "questionImage": "assets/2005-amc8-local/q21.png",
    "grade": "amc8",
    "points": 1,
    "title": "点阵三点成三角形",
    "text": "点阵三点成三角形",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "C",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2005_AMC_8_Problems/Problem_21",
    "tags": [
      "组合",
      "排除法"
    ],
    "methods": [
      "先从所有点中任选三点得组合数，再减去三点共线不能成三角形的组合（按每条直线上的点数逐一扣除）。",
      "按三点所在的行列分类枚举，逐类判断哪些三元组不共线并累加，得到可作三角形的个数。"
    ],
    "hints": []
  },
  {
    "no": 22,
    "searchText": "A company sells detergent in three different sized boxes: small (S), medium (M) and large (L). The medium size costs 50%\nmore than the small size and contains 20% less detergent than the large size. The large size contains twice as much detergent\nas the small size and costs 30% more than the medium size. Rank the three sizes from best to worst buy.",
    "questionImage": "assets/2005-amc8-local/q22.png",
    "grade": "amc8",
    "points": 1,
    "title": "洗衣粉性价比排序",
    "text": "洗衣粉性价比排序",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "E",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2005_AMC_8_Problems/Problem_22",
    "tags": [
      "百分数",
      "比例"
    ],
    "methods": [
      "取小盒价格与容量为基准 1，按 50%、20%、2 倍、30% 依次推出中、大盒的价格与容量，算单位容量价格后排序。",
      "把各盒「容量除以价格」写成连乘的比例式，用比例连乘一次比较三者单位价格，无需设定具体数值。"
    ],
    "hints": []
  },
  {
    "no": 23,
    "searchText": "Isosceles right triangle encloses a semicircle of area . The circle has its center on hypotenuse and is\ntangent to sides and . What is the area of triangle ?\n",
    "questionImage": "assets/2005-amc8-local/q23.png",
    "grade": "amc8",
    "points": 1,
    "title": "半圆内切求三角形",
    "text": "半圆内切求三角形",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "B",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2005_AMC_8_Problems/Problem_23",
    "tags": [
      "圆",
      "三角形"
    ],
    "methods": [
      "由题给半圆面积反推半径，再利用等腰直角三角形的对称性与相切关系把直角边用半径表示，进而求三角形面积。",
      "注意三角形面积与半圆面积成固定比例（由相似与给定角度决定），先求半径与三角形高的倍数关系，用面积比直接换算。"
    ],
    "hints": []
  },
  {
    "no": 24,
    "searchText": "A certain calculator has only two keys [+1] and [x2]. When you press one of the keys, the calculator automatically displays the\nresult. For instance, if the calculator originally displayed \"9\" and you pressed [+1], it would display \"10.\" If you then pressed [x2],\nit would display \"20.\" Starting with the display \"1,\" what is the fewest number of keystrokes you would need to reach \"200\"?",
    "questionImage": "assets/2005-amc8-local/q24.png",
    "grade": "amc8",
    "points": 1,
    "title": "最少按键到二百",
    "text": "最少按键到二百",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "B",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2005_AMC_8_Problems/Problem_24",
    "tags": [
      "逆向思维",
      "递推"
    ],
    "methods": [
      "从 200 逆推：偶数时上一步可能由「乘 2」得来（除以 2），否则必由「加 1」得来（减 1），逐步倒推回 1 并统计步数。",
      "把 200 写成二进制，用「从高位起每读一位做一次乘 2、逢 1 再做加 1」的构造得到一个按键序列，并说明这种贪心构造步数最少。"
    ],
    "hints": []
  },
  {
    "no": 25,
    "searchText": "A square with side length 2.0 and a circle share the same center. The total area of the regions that are inside the circle and\noutside the square is equal to the total area of the regions that are outside the circle and inside the square. What is the radius of\nthe circle?",
    "questionImage": "assets/2005-amc8-local/q25.png",
    "grade": "amc8",
    "points": 1,
    "title": "方圆等面积求半径",
    "text": "方圆等面积求半径",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "A",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2005_AMC_8_Problems/Problem_25",
    "tags": [
      "圆",
      "方程"
    ],
    "methods": [
      "设半径为 r，把「圆内方外」与「方内圆外」两块面积相等转成「圆面积等于正方形面积」（两边同加交集），列 πr² 等于 2.0 的平方解出 r。",
      "由两块面积相等直接得圆与正方形面积相等，用正方形面积除以 π 再开方得半径，或把选项逐一代入检验。"
    ],
    "hints": []
  }
];
