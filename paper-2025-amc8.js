// Source: user-provided AoPS PDFs in past papers/ACM 8. Problems © MAA.
KANGAROO_DATA["2025-amc8"] = [
  {
    "no": 1,
    "searchText": "The eight-pointed star, shown in the figure below, is a popular quilting pattern. What percent of the entire grid is\ncovered by the star?\n",
    "questionImage": "assets/2025-amc8-local/q1.png",
    "grade": "amc8",
    "points": 1,
    "title": "八角星覆盖率",
    "text": "八角星覆盖率",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "B",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2025_AMC_8_Problems/Problem_1",
    "tags": [
      "面积",
      "割补法"
    ],
    "methods": [
      "4×4 网格共 16 格；把每个小方格沿对角线分成两个半格，数出星形恰好覆盖 16 个半格即 8 格，8÷16=50%。",
      "用补集：四个角落未覆盖的部分拼起来同样占 8 格，覆盖与未覆盖各占一半，故为 50%。"
    ],
    "hints": []
  },
  {
    "no": 2,
    "searchText": "The table below shows the Ancient Egyptian hieroglyphs that were used to represent different numbers.\nFor example, the number was represented by the hieroglyphs . What number is represented by the following\ncombination of hieroglyphs?",
    "questionImage": "assets/2025-amc8-local/q2.png",
    "grade": "amc8",
    "points": 1,
    "title": "埃及象形数字",
    "text": "埃及象形数字",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "B",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2025_AMC_8_Problems/Problem_2",
    "tags": [
      "位值",
      "符号"
    ],
    "methods": [
      "先由示例 32 确认每种符号代表 10 的幂位值，再把目标组合按 10,000、100、10、1 分组相加得 10,423。",
      "用选项反推：把五个选项按位拆开，只有 10,423 的各位数字与图中各类符号的个数一致，其余选项的位值组合不符。"
    ],
    "hints": []
  },
  {
    "no": 3,
    "searchText": "Buffalo Shuffle-o is a card game in which all the cards are distributed evenly among all players at the start of the game. When\nAnnika and of her friends play Buffalo Shuffle-o, each player is dealt cards. Suppose more friends join the next game.\nHow many cards will be dealt to each player?",
    "questionImage": "assets/2025-amc8-local/q3.png",
    "grade": "amc8",
    "points": 1,
    "title": "分牌人数变化",
    "text": "分牌人数变化",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "C",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2025_AMC_8_Problems/Problem_3",
    "tags": [
      "乘法",
      "应用题"
    ],
    "methods": [
      "总牌数不变，4 人各 15 张共 60 张；增加 2 人后由 6 人平分，60÷6=10。",
      "人数变为原来的 6/4=3/2 倍，每人牌数成反比，15×2/3=10。"
    ],
    "hints": []
  },
  {
    "no": 4,
    "searchText": "Lucius is counting backward by s. His first three numbers are , , and . What is his th number?",
    "questionImage": "assets/2025-amc8-local/q4.png",
    "grade": "amc8",
    "points": 1,
    "title": "倒数等差数列",
    "text": "倒数等差数列",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "B",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2025_AMC_8_Problems/Problem_4",
    "tags": [
      "数列",
      "数与运算"
    ],
    "methods": [
      "首项 100、公差 −7，第 n 项为 100−7(n−1)，取 n=10 得 100−63=37。",
      "从已知第 3 项 86 继续减 7 次 7：86−49=37。"
    ],
    "hints": []
  },
  {
    "no": 5,
    "searchText": "Betty drives a truck to deliver packages in a neighborhood whose street map is shown below. Betty starts at the factory (labled\n) and drives to location , then , then , before returning to . What is the shortest distance, in blocks, she can drive\nto complete the route?",
    "questionImage": "assets/2025-amc8-local/q5.png",
    "grade": "amc8",
    "points": 1,
    "title": "网格送货最短路线",
    "text": "网格送货最短路线",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "C",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2025_AMC_8_Problems/Problem_5",
    "tags": [
      "路径",
      "网格"
    ],
    "methods": [
      "在图上读出 F、A、B、C 的横纵坐标，每段最短路等于横向与纵向格数之和，四段相加得 24 个街区。",
      "把闭合路线分别投影到水平和竖直方向，四点依次走一圈，两个方向的位移总量之和为 24；也可用标数法逐段累加验证没有更短走法。"
    ],
    "hints": []
  },
  {
    "no": 6,
    "searchText": "Sekou writes down the numbers After he erases one of his numbers, the sum of the remaining four\nnumbers is a multiple of Which number did he erase?",
    "questionImage": "assets/2025-amc8-local/q6.png",
    "grade": "amc8",
    "points": 1,
    "title": "擦数使和为四倍数",
    "text": "擦数使和为四倍数",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "C",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2025_AMC_8_Problems/Problem_6",
    "tags": [
      "整除",
      "余数"
    ],
    "methods": [
      "五数之和为 85，85≡1 (mod 4)，要使 85−x 被 4 整除须 x≡1，只有 17 符合。",
      "逐个试：去掉 17 后剩 15+16+18+19=68=4×17；去掉其余数分别得 70、69、67、66，都不是 4 的倍数。"
    ],
    "hints": []
  },
  {
    "no": 7,
    "searchText": "On the most recent exam on Prof. Xochi's class,\nstudents earned a score of at least\nstudents earned a score of at least\nstudents earned a score of at least\nstudents earned a score of at least\nHow many students earned a score of at least and less than ?",
    "questionImage": "assets/2025-amc8-local/q7.png",
    "grade": "amc8",
    "points": 1,
    "title": "分数段人数统计",
    "text": "分数段人数统计",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "D",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2025_AMC_8_Problems/Problem_7",
    "tags": [
      "容斥原理",
      "表格法"
    ],
    "methods": [
      "用累计人数相减：至少 80 分的 50 人减去至少 90 分的 13 人，得 50−13=37。",
      "分段相加：[80,85) 有 50−27=23 人，[85,90) 有 27−13=14 人，合计 37 人。"
    ],
    "hints": []
  },
  {
    "no": 8,
    "searchText": "Isaiah cuts open a cardboard cube along some of its edges to form the flat shape shown on the right, which has an area of\nsquare centimeters. What is the volume of the cube in cubic centimeters?\n",
    "questionImage": "assets/2025-amc8-local/q8.png",
    "grade": "amc8",
    "points": 1,
    "title": "立方体展开图体积",
    "text": "立方体展开图体积",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "A",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2025_AMC_8_Problems/Problem_8",
    "tags": [
      "立方体",
      "体积"
    ],
    "methods": [
      "展开图由 6 个全等正方形组成，每个面面积 18÷6=3，棱长 √3，体积 (√3)³=3√3。",
      "设棱长 a，则 6a²=18 得 a²=3，于是 a³=a·a²=3√3；也可直接算 (a²)^{3/2}=3√3。"
    ],
    "hints": []
  },
  {
    "no": 9,
    "searchText": "Ningli looks at the pairs of numbers directly across from each other on a clock. She takes the average of each pair of\nnumbers. What is the average of the resulting numbers?",
    "questionImage": "assets/2025-amc8-local/q9.png",
    "grade": "amc8",
    "points": 1,
    "title": "钟面对径数平均",
    "text": "钟面对径数平均",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "B",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2025_AMC_8_Problems/Problem_9",
    "tags": [
      "配对求和",
      "对称"
    ],
    "methods": [
      "六对数恰好把 1 到 12 各用一次，总和 78；六个平均值的总和为 78÷2=39，再除以 6 得 6.5。",
      "逐对列出 (12,6)、(1,7)、(2,8)、(3,9)、(4,10)、(5,11)，平均分别为 9、4、5、6、7、8，取平均也得 6.5。"
    ],
    "hints": []
  },
  {
    "no": 10,
    "searchText": "In the figure below, is a rectangle with sides of length inches and = inches. Rectangle\nis rotated clockwise around the midpoint of side to give a second rectangle. What is the total area, in\nsquare inches, covered by the two overlapping rectangles?\n",
    "questionImage": "assets/2025-amc8-local/q10.png",
    "grade": "amc8",
    "points": 1,
    "title": "旋转矩形覆盖面积",
    "text": "旋转矩形覆盖面积",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "D",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2025_AMC_8_Problems/Problem_10",
    "tags": [
      "旋转",
      "面积"
    ],
    "methods": [
      "两个矩形各 15，绕 DC 中点转 90° 后重叠部分是 2.5×2.5 的正方形，容斥得 15+15−6.25=23.75。",
      "以旋转中心为原点写出两矩形的坐标范围，交集为 2.5≤x≤5、0≤y≤2.5，面积 6.25，再用两面积之和减去交集。"
    ],
    "hints": []
  },
  {
    "no": 11,
    "searchText": "A consists of four squares connected along their edges. There are five possible tetromino shapes, , , , ,\nand , shown below, which can be rotated or flipped over. Three tetrominoes are used to completely cover a rectangle.\nAt least one of the tiles is an tile. What are the other two tiles?\nand and and and and",
    "questionImage": "assets/2025-amc8-local/q11.png",
    "grade": "amc8",
    "points": 1,
    "title": "四格拼板铺矩形",
    "text": "四格拼板铺矩形",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "C",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2025_AMC_8_Problems/Problem_11",
    "tags": [
      "图形识别",
      "枚举"
    ],
    "methods": [
      "3×4 共 12 格，从四个直角拐角入手；S 形无法单独填满拐角，逐角试放后只有两块 L 能与它互补铺满整个矩形。",
      "给 3×4 棋盘染色（6 黑 6 白），T 形覆盖 3:1 会破坏平衡先被排除；再对 I、O、L 的组合逐一试摆，只剩一块 S 配两块 L 可行。"
    ],
    "hints": []
  },
  {
    "no": 12,
    "searchText": "The region shown below consists of 24 squares, each with side length 1 centimeter. What is the area, in square centimeters, of\nthe largest circle that can fit inside the region, possibly touching the boundaries?\n",
    "questionImage": "assets/2025-amc8-local/q12.png",
    "grade": "amc8",
    "points": 1,
    "title": "十字形内最大圆",
    "text": "十字形内最大圆",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "C",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2025_AMC_8_Problems/Problem_12",
    "tags": [
      "圆",
      "面积"
    ],
    "methods": [
      "把圆心放在图形的对称中心，比较到直边与到内凹角的距离；由横向 1 格、纵向 2 格的直角三角形得 r²=1²+2²=5，故最大圆面积 5π。",
      "先假设圆与上下直边相切，检验其是否越出左右两侧的凹口；逐步缩小直到同时贴合凹角，用勾股确认 r²=5，得面积 5π。"
    ],
    "hints": []
  },
  {
    "no": 13,
    "searchText": "Each of the even numbers is divided by . The remainders are recorded. Which histogram displays the\nnumber of times each remainder occurs?",
    "questionImage": "assets/2025-amc8-local/q13.png",
    "grade": "amc8",
    "points": 1,
    "title": "偶数除七余数直方图",
    "text": "偶数除七余数直方图",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "A",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2025_AMC_8_Problems/Problem_13",
    "tags": [
      "余数",
      "周期"
    ],
    "methods": [
      "把 2,4,…,50 写成 2k（k=1…25），余数序列 2,4,6,1,3,5,0 以 7 为周期；前 21 项各余数出现 3 次，最后 4 项使 1、2、4、6 各多一次。",
      "直接列举 25 个余数的出现次数：0、3、5 各 3 次，1、2、4、6 各 4 次，再与五个直方图的柱高逐一比对。"
    ],
    "hints": []
  },
  {
    "no": 14,
    "searchText": "A number is inserted into the list . The mean is now twice as great as the median. What is ?",
    "questionImage": "assets/2025-amc8-local/q14.png",
    "grade": "amc8",
    "points": 1,
    "title": "插入数后均值与中位数",
    "text": "插入数后均值与中位数",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "E",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2025_AMC_8_Problems/Problem_14",
    "tags": [
      "方程",
      "分类讨论"
    ],
    "methods": [
      "插入后共 6 个数，中位数是第 3、4 个的平均；N≥7 时中位数为 7，均值应为 14，总和 84，故 N=84−50=34。",
      "代入选项检验：只有 N=34 时六数排序为 2,6,7,7,28,34，平均 14 恰为中位数 7 的两倍，其余选项不满足。"
    ],
    "hints": []
  },
  {
    "no": 15,
    "searchText": "Kei draws a -by- grid. He colors of the unit squares silver and the remaining squares gold. Kei then folds the grid in half\nvertically, forming pairs of overlapping unit squares. Let and equal the least and greatest possible number of gold-on-\ngold pairs, respectively. What is the value of ?\n",
    "questionImage": "assets/2025-amc8-local/q15.png",
    "grade": "amc8",
    "points": 1,
    "title": "折纸金格配对最值",
    "text": "折纸金格配对最值",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "C",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2025_AMC_8_Problems/Problem_15",
    "tags": [
      "最值",
      "抽屉原理"
    ],
    "methods": [
      "设金金对 x、银银对 y、混合对 z，则 2x+z=23、2y+z=13、x+y+z=18，解得 y=x−5、z=23−2x，由 y≥0、z≥0 得 5≤x≤11，故 m+M=5+11=16。",
      "构造极端：13 个银格尽量两两配成银银对时只剩 1 个混合对，金金对最多 11；让 13 个银格各占一个混合对时余下 5 对全金，金金对最少 5，两者相加为 16。"
    ],
    "hints": []
  },
  {
    "no": 16,
    "searchText": "Five distinct integers from to are chosen, and five distinct integers from to are chosen. No two numbers differ\nby exactly . What is the sum of the ten chosen numbers?",
    "questionImage": "assets/2025-amc8-local/q16.png",
    "grade": "amc8",
    "points": 1,
    "title": "差不为十的选数",
    "text": "差不为十的选数",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "C",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2025_AMC_8_Problems/Problem_16",
    "tags": [
      "配对求和",
      "组合"
    ],
    "methods": [
      "把数分成 (1,11)、(2,12)、…、(10,20) 十组，每组最多取一个；要取 10 个数必须每组恰取一个，其中 5 组取大数，总和 55+5×10=105。",
      "先全取小数得 1+…+10=55；每把一个小数换成同组大数总和增加 10，而 11–20 中恰取 5 个，故总和 55+50=105。"
    ],
    "hints": []
  },
  {
    "no": 17,
    "searchText": "In the land of Markovia, there are three cities: , , and . There are people who live in , who live in , and\nwho live in . Everyone works in one of the three cities, and a person may work in the same city where they live. In the\nfigure below, an arrow pointing from one city to another is labeled with the fraction of people living in the first city who work in\nthe second city. (For example, of the people who live in work in .) How many people work in ?",
    "questionImage": "assets/2025-amc8-local/q17.png",
    "grade": "amc8",
    "points": 1,
    "title": "城市通勤人数",
    "text": "城市通勤人数",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "D",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2025_AMC_8_Problems/Problem_17",
    "tags": [
      "分数",
      "应用题"
    ],
    "methods": [
      "在 A 工作的人分三块：住 A 且不外出的 100×(1−1/4−1/5)=55，住 B 的 1/3 即 40，住 C 的 1/8 即 20，共 115。",
      "先算离开 A 的 25+20=45，再算从 B、C 流入 A 的 40+20=60，净得 100−45+60=115；也可用总人数 380 减去在 B、C 工作的人数复核。"
    ],
    "hints": []
  },
  {
    "no": 18,
    "searchText": "The region between a circle of radius 1 and an inscribed square is shaded. Another circle has radius . A quarter of the region\nbetween this second circle and its inscribed square is shaded. If the two shaded regions have the same area, what is the value\nof ?",
    "questionImage": "assets/2025-amc8-local/q18.png",
    "grade": "amc8",
    "points": 1,
    "title": "圆与内接正方形阴影",
    "text": "圆与内接正方形阴影",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "B",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2025_AMC_8_Problems/Problem_18",
    "tags": [
      "圆",
      "面积"
    ],
    "methods": [
      "半径 r 时阴影面积为 πr²−2r²=(π−2)r²；左图 r=1 得 π−2，右图取四分之一得 (π−2)R²/4，令二者相等得 R=2。",
      "面积按半径平方缩放，右图只取一个四分之一区域，故 R² 需放大 4 倍即 R=2；再代入 R=2 检验两块阴影面积确实相等。"
    ],
    "hints": []
  },
  {
    "no": 19,
    "searchText": "Two towns, and , are connected by a straight road, miles long. Traveling from town to town , the speed limit\nchanges every miles: from to to miles per hour (mph). Two cars, one at town and one at town , start\nmoving toward each other at the same time. They drive at exactly the speed limit in each portion of the road. How far from town\n, in miles, will the two cars meet?",
    "questionImage": "assets/2025-amc8-local/q19.png",
    "grade": "amc8",
    "points": 1,
    "title": "分段限速相遇",
    "text": "分段限速相遇",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "D",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2025_AMC_8_Problems/Problem_19",
    "tags": [
      "行程问题",
      "单位换算"
    ],
    "methods": [
      "按三段限速算：A 车 0.2 小时走完首段，B 车 0.25 小时走完自己首段，此时两车分别在 7 与 10 英里处，相距 3 英里且同处 40 mph 段，A 再走 1.5 英里，得 8.5。",
      "画位置—时间分段图，列出两车在 0.2 与 0.25 小时的位置，确认相遇发生在中间 40 mph 区间，用剩余距离除以相对速度 80 定位相遇点。"
    ],
    "hints": []
  },
  {
    "no": 20,
    "searchText": "Sarika, Dev, and Rajiv are sharing a large block of cheese. They take turns cutting off half of what remains and eating it: first\nSarika eats half of the cheese, then Dev eats half of the remaining half, then Rajiv eats half of what remains, then back to Sarika,\nand so on. They stop when the cheese is too small to see. About what fraction of the original block of cheese does Sarika eat in\ntotal?",
    "questionImage": "assets/2025-amc8-local/q20.png",
    "grade": "amc8",
    "points": 1,
    "title": "轮流吃奶酪",
    "text": "轮流吃奶酪",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "A",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2025_AMC_8_Problems/Problem_20",
    "tags": [
      "分数",
      "方程"
    ],
    "methods": [
      "Sarika 每轮吃当前剩余的一半，每三轮后剩 1/8，故她吃的量为 1/2+1/16+1/128+…，等比求和 (1/2)/(1−1/8)=4/7。",
      "设她总共吃 x，一轮后剩 1/2，另两人依次吃掉各自的一半，剩 1/8 时又按同样比例开吃，得 x=1/2+x/8，解 x=4/7。"
    ],
    "hints": []
  },
  {
    "no": 21,
    "searchText": "The Konigsberg School has assigned grades 1 through 7 to pods through , one grade per pod. Some of the pods are\nconnected by walkways, as shown in the figure below. The school noticed that each pair of connected pods has been assigned\ngrades differing by 2 or more grade levels. (For example, grades 1 and 2 will not be in pods directly connected by a walkway.)\nWhat is the sum of the grade levels assigned to pods C, E, and F?",
    "questionImage": "assets/2025-amc8-local/q21.png",
    "grade": "amc8",
    "points": 1,
    "title": "相邻年级差至少二",
    "text": "相邻年级差至少二",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "A",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2025_AMC_8_Problems/Problem_21",
    "tags": [
      "图论",
      "逻辑推理"
    ],
    "methods": [
      "把相邻 pod 年级差≥2 看成图着色约束，从连线最多的 F 或 C 入手放极端年级 1、7，再按不相邻才可连号的原则逐格填其余年级，最后得 C、E、F 之和为 12。",
      "先枚举 C、E、F 三个待求 pod 的可能取值，利用 1–7 各用一次且相邻 pod 不能是连续整数，筛出唯一可行分配，其和为 12。"
    ],
    "hints": []
  },
  {
    "no": 22,
    "searchText": "A classroom has a row of 35 coat hooks. Paulina likes coats to be equally spaced, so that there is the same number of empty\nhooks before the first coat, after the last coat, and between every coat and the next one. Suppose there is at least 1 coat and at\nleast 1 empty hook. How many different numbers of coats can satisfy Paulina's pattern?",
    "questionImage": "assets/2025-amc8-local/q22.png",
    "grade": "amc8",
    "points": 1,
    "title": "等间距挂衣钩",
    "text": "等间距挂衣钩",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "D",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2025_AMC_8_Problems/Problem_22",
    "tags": [
      "整除",
      "因数"
    ],
    "methods": [
      "设 k 件外套、每段 g 个空钩，则 35=k+g(k+1)，化为 g=36/(k+1)−1，故 k+1 必为 36 的因数且 g≥1、k≥1，得 k+1∈{2,3,4,6,9,12,18}，共 7 种。",
      "两端各补一个虚拟空钩得 36=(g+1)(k+1)，直接数 36 的因数，去掉 k=0 与 g=0 两种，剩下 7 个可行的 k。"
    ],
    "hints": []
  },
  {
    "no": 23,
    "searchText": "How many four-digit numbers have all three of the following properties?\n(I) The tens and ones digit are both 9.\n(II) The number is 1 less than a perfect square.\n(III) The number is the product of exactly two prime numbers.",
    "questionImage": "assets/2025-amc8-local/q23.png",
    "grade": "amc8",
    "points": 1,
    "title": "末两位为九九的四位数",
    "text": "末两位为九九的四位数",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "B",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2025_AMC_8_Problems/Problem_23",
    "tags": [
      "数论",
      "整除"
    ],
    "methods": [
      "N 末两位 99 则 N+1=n² 末两位 00，n 必为 10 的倍数；在 32≤n≤100 内取 n=40,50,…,100，由 N=(n−1)(n+1) 检验，只有 n=60 给出 59×61 两个质数。",
      "平方差分解后要求 n−1 与 n+1 同为质数（孪生质数），候选平方根中只有 (59,61) 成立，故这样的四位数只有 1 个。"
    ],
    "hints": []
  },
  {
    "no": 24,
    "searchText": "In trapezoid , angles and measure and . The side lengths are all positive integers, and\nthe perimeter of is units. How many non-congruent trapezoids satisfy all of these conditions?\n",
    "questionImage": "assets/2025-amc8-local/q24.png",
    "grade": "amc8",
    "points": 1,
    "title": "六十度等腰梯形计数",
    "text": "六十度等腰梯形计数",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "E",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2025_AMC_8_Problems/Problem_24",
    "tags": [
      "几何",
      "枚举"
    ],
    "methods": [
      "底角 60° 时下底比上底多一个腰长；设上底 a、腰 c，则周长 2a+3c=30，c 取正偶数 2、4、6、8 得 4 组整数解。",
      "作两条高分成一个矩形和两个 30-60-90 直角三角形，写出 b=a+c 后代入周长方程，枚举 c 并排除 a≤0，得 4 个非全等梯形。"
    ],
    "hints": []
  },
  {
    "no": 25,
    "searchText": "Makayla finds all the possible ways to draw a path in a diamond-shaped grid. Each path starts at the bottom of the grid\nand ends at the top, always moving one unit northeast or northwest. She computes the area of the region between each path\nand the right side of the grid. Two examples are shown in the figures below. What is the sum of the areas determined by all\npossible paths?",
    "questionImage": "assets/2025-amc8-local/q25.png",
    "grade": "amc8",
    "points": 1,
    "title": "菱形路径面积总和",
    "text": "菱形路径面积总和",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "B",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2025_AMC_8_Problems/Problem_25",
    "tags": [
      "路径",
      "对称"
    ],
    "methods": [
      "共 C(10,5)=252 条路径；把每条路径与左右镜像配对，两者面积之和恰为整个 5×5 菱形面积 25，故总和 252×25/2=3150。",
      "逐步计数：第 k 步选 NE 会给右侧面积带来固定增量，统计 252 条路径中该步被选中的次数并用组合数加权，累加后同样得 3150。"
    ],
    "hints": []
  }
];
