// Source: user-provided AoPS PDFs in past papers/ACM 8. Problems © MAA.
KANGAROO_DATA["2023-amc8"] = [
  {
    "no": 1,
    "searchText": "\nWhat is the value of ?",
    "questionImage": "assets/2023-amc8-local/q1.png",
    "grade": "amc8",
    "points": 1,
    "title": "四则混合运算",
    "text": "四则混合运算",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "D",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2023_AMC_8_Problems/Problem_1",
    "tags": [
      "数与运算",
      "运算律"
    ],
    "methods": [
      "先乘后加减：(8×4+2)=34、(8+4×2)=16，相减得 18。",
      "去括号改写为 8×4−4×2+2−8=32−8−6=18，或分别算出两个括号再作差。"
    ],
    "hints": []
  },
  {
    "no": 2,
    "searchText": "A square piece of paper is folded twice into four equal quarters, as shown below, then cut along the dashed line. When\nunfolded, the paper will match which of the following figures?",
    "questionImage": "assets/2023-amc8-local/q2.png",
    "grade": "amc8",
    "points": 1,
    "title": "折纸剪后展开",
    "text": "折纸剪后展开",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "E",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2023_AMC_8_Problems/Problem_2",
    "tags": [
      "对称",
      "图形识别"
    ],
    "methods": [
      "先沿第二条折痕把切口镜像一次，再沿第一条折痕镜像，切口复制成四处，按两条对称轴比对选项得 E。",
      "展开图必须同时关于水平和竖直中线对称；逐个检查五个选项的对称性，只有 E 满足。"
    ],
    "hints": []
  },
  {
    "no": 3,
    "searchText": "Wind chill is a measure of how cold people feel when exposed to wind outside. A good estimate for wind chill can be found\nusing this calculation\nwhere temperature is measured in degrees Fahrenheit and the wind speed is measured in miles per hour (mph).\nSuppose the air temperature is and the wind speed is mph. Which of the following is closest to the approximate\nwind chill?",
    "questionImage": "assets/2023-amc8-local/q3.png",
    "grade": "amc8",
    "points": 1,
    "title": "风寒指数估算",
    "text": "风寒指数估算",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "B",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2023_AMC_8_Problems/Problem_3",
    "tags": [
      "小数",
      "应用题"
    ],
    "methods": [
      "代入 W=T−0.7S：36−0.7×18=36−12.6=23.4，最接近 23。",
      "先算 0.7×18=12.6，再用 36−12.6 与五个选项逐一比差，23 的差距最小。"
    ],
    "hints": []
  },
  {
    "no": 4,
    "searchText": "The numbers from to are arranged in a spiral pattern on a square grid, beginning at the center. The first few numbers\nhave been entered into the grid below. Consider the four numbers that will appear in the shaded squares, on the same diagonal\nas the number How many of these four numbers are prime?",
    "questionImage": "assets/2023-amc8-local/q4.png",
    "grade": "amc8",
    "points": 1,
    "title": "螺旋中的素数",
    "text": "螺旋中的素数",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "D",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2023_AMC_8_Problems/Problem_4",
    "tags": [
      "数论",
      "周期"
    ],
    "methods": [
      "螺旋每绕一圈边长增加 2，奇数平方 1、9、25、49 落在同一条对角线上；据此写出四个阴影数再用试除判断素性，共 3 个素数。",
      "按层数 k 写出各圈角落数的通项，把与 7 同对角线的四个数代入，逐一检验能否被小质数整除，得 3 个素数。"
    ],
    "hints": []
  },
  {
    "no": 5,
    "searchText": "A lake contains trout, along with a variety of other fish. When a marine biologist catches and releases a sample of\nfish from the lake, are identified as trout. Assume that the ratio of trout to the total number of fish is the same in both the\nsample and the lake. How many fish are there in the lake?",
    "questionImage": "assets/2023-amc8-local/q5.png",
    "grade": "amc8",
    "points": 1,
    "title": "样本估计湖中鱼数",
    "text": "样本估计湖中鱼数",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "B",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2023_AMC_8_Problems/Problem_5",
    "tags": [
      "比例",
      "应用题"
    ],
    "methods": [
      "样本中鳟鱼占 30/180=1/6，故湖中鱼总数 250÷(1/6)=1500。",
      "列比例式 250/N=30/180，交叉相乘得 N=250×180/30=1500。"
    ],
    "hints": []
  },
  {
    "no": 6,
    "searchText": "The digits and are placed in the expression below, one digit per box. What is the maximum possible value of the\nexpression?",
    "questionImage": "assets/2023-amc8-local/q6.png",
    "grade": "amc8",
    "points": 1,
    "title": "四个数字填幂乘积",
    "text": "四个数字填幂乘积",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "C",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2023_AMC_8_Problems/Problem_6",
    "tags": [
      "最值",
      "枚举"
    ],
    "methods": [
      "表达式是两个幂相乘；把 0 放在指数上得到因子 1，剩下 2、2、3 组成 3²×2⁰=9，即最大值。",
      "枚举本质不同的填法：3²×2⁰=9、2³×2⁰=8、3⁰×2²=4、0²×3²=0 等，比较后最大为 9。"
    ],
    "hints": []
  },
  {
    "no": 7,
    "searchText": "A rectangle, with sides parallel to the -axis and -axis, has opposite vertices located at and . A line is\ndrawn through points and . Another line is drawn through points and . How many\npoints on the rectangle lie on at least one of the two lines?",
    "questionImage": "assets/2023-amc8-local/q7.png",
    "grade": "amc8",
    "points": 1,
    "title": "直线与矩形边界交点",
    "text": "直线与矩形边界交点",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "B",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2023_AMC_8_Problems/Problem_7",
    "tags": [
      "坐标",
      "方程"
    ],
    "methods": [
      "矩形为 x 在 15 到 16、y 在 3 到 5；直线 y=x/3 在 x=15 时 y=5 恰过顶点 (15,5)，另一条 y=10−x/2 在 2 到 2.5 之间不与矩形相交，故只有 1 个点。",
      "把两条直线分别与矩形四条边联立求交点，检查坐标是否落在边上，只有 (15,5) 合格，得 1。"
    ],
    "hints": []
  },
  {
    "no": 8,
    "searchText": "Lola, Lolo, Tiya, and Tiyo participated in a ping pong tournament. Each player competed against each of the other three players\nexactly twice. Shown below are the win-loss records for the players. The numbers and represent a win or loss,\nrespectively. For example, Lola won five matches and lost the fourth match. What was Tiyo’s win-loss record?",
    "questionImage": "assets/2023-amc8-local/q8.png",
    "grade": "amc8",
    "points": 1,
    "title": "循环赛战绩表",
    "text": "循环赛战绩表",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "A",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2023_AMC_8_Problems/Problem_8",
    "tags": [
      "逻辑推理",
      "表格法"
    ],
    "methods": [
      "每两人恰好赛两场，故任意两人的记录逐位互补；由已知三行逐列推出 Tiyo 每场的胜负，得 000101。",
      "按六场比赛逐列核对\"每场一胜一负\"，把未知行补齐后与选项比对，只有 000101 自洽。"
    ],
    "hints": []
  },
  {
    "no": 9,
    "searchText": "Malaika is skiing on a mountain. The graph below shows her elevation, in meters, above the base of the mountain as she skis\nalong a trail. In total, how many seconds does she spend at an elevation between and meters?\n",
    "questionImage": "assets/2023-amc8-local/q9.png",
    "grade": "amc8",
    "points": 1,
    "title": "海拔时间图读秒",
    "text": "海拔时间图读秒",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "B",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2023_AMC_8_Problems/Problem_9",
    "tags": [
      "表格法",
      "测量"
    ],
    "methods": [
      "在图上标出曲线与 y=4、y=7 的各个交点，把落在两条水平线之间的各段时间相加，共 8 秒。",
      "把折线按水平段与斜段分段，逐段求时间区间与 4 到 7 米的重叠长度，累加得 8 秒。"
    ],
    "hints": []
  },
  {
    "no": 10,
    "searchText": "Harold made a plum pie to take on a picnic. He was able to eat only of the pie, and he left the rest for his friends. A moose\ncame by and ate of what Harold left behind. After that, a porcupine ate of what the moose left behind. How much of the\noriginal pie still remained after the porcupine left?",
    "questionImage": "assets/2023-amc8-local/q10.png",
    "grade": "amc8",
    "points": 1,
    "title": "派被分次吃掉",
    "text": "派被分次吃掉",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "D",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2023_AMC_8_Problems/Problem_10",
    "tags": [
      "分数",
      "乘法"
    ],
    "methods": [
      "每次吃掉三分之一就留下三分之二，故剩余 (3/4)×(2/3)×(2/3)=1/3。",
      "逐次计算：Harold 后剩 3/4，驼鹿吃掉 1/4 后剩 1/2，豪猪再吃 1/6 后剩 1/3。"
    ],
    "hints": []
  },
  {
    "no": 11,
    "searchText": "NASA’s Perseverance Rover was launched on July After traveling miles, it landed on Mars in\nJezero Crater about months later. Which of the following is closest to the Rover’s average interplanetary speed in miles per\nhour?",
    "questionImage": "assets/2023-amc8-local/q11.png",
    "grade": "amc8",
    "points": 1,
    "title": "星际速度数量级",
    "text": "星际速度数量级",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "C",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2023_AMC_8_Problems/Problem_11",
    "tags": [
      "单位换算",
      "比较大小"
    ],
    "methods": [
      "6.5 个月约 6.5×30×24=4680 小时，2.9×10⁸ 英里除以 4680 约 6.2×10⁴，最接近 60,000。",
      "把路程近似为 3×10⁸、时间近似 5×10³ 小时，商约 6×10⁴，用数量级直接排除其余选项。"
    ],
    "hints": []
  },
  {
    "no": 12,
    "searchText": "The figure below shows a large white circle with a number of smaller white and shaded circles in its interior. What fraction of\nthe interior of the large white circle is shaded?\n",
    "questionImage": "assets/2023-amc8-local/q12.png",
    "grade": "amc8",
    "points": 1,
    "title": "圆内小圆阴影占比",
    "text": "圆内小圆阴影占比",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "B",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2023_AMC_8_Problems/Problem_12",
    "tags": [
      "圆",
      "面积"
    ],
    "methods": [
      "设大圆半径 R，图中小圆半径分别是 R 的若干分之一；面积与半径平方成正比，把阴影面积写成 R² 的分数再除以 πR²，得 11/36。",
      "按直径把小圆分组，数出各尺寸的阴影与未阴影个数，用平方半径加权求和；也可用补集先算未阴影部分再相减得 11/36。"
    ],
    "hints": []
  },
  {
    "no": 13,
    "searchText": "Along the route of a bicycle race, water stations are evenly spaced between the start and finish lines, as shown in the figure\nbelow. There are also repair stations evenly spaced between the start and finish lines. The rd water station is located\nmiles after the st repair station. How long is the race in miles?",
    "questionImage": "assets/2023-amc8-local/q13.png",
    "grade": "amc8",
    "points": 1,
    "title": "水站与修理站间距",
    "text": "水站与修理站间距",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "D",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2023_AMC_8_Problems/Problem_13",
    "tags": [
      "分数",
      "方程"
    ],
    "methods": [
      "水站在全程 3/8 处、第一个修理站在 1/3 处，相差 3/8−1/3=1/24 对应 2 英里，故全程 48 英里。",
      "设全程 L，列 3L/8−L/3=2，通分得 L/24=2，解得 L=48。"
    ],
    "hints": []
  },
  {
    "no": 14,
    "searchText": "Nicolas is planning to send a package to his friend Anton, who is a stamp collector. To pay for the postage, Nicolas would like\nto cover the package with a large number of stamps. Suppose he has a collection of -cent, -cent, and -cent stamps,\nwith exactly of each type. What is the greatest number of stamps Nicolas can use to make exactly in postage?\n(Note: The amount corresponds to dollars and cents. One dollar is worth cents.)",
    "questionImage": "assets/2023-amc8-local/q14.png",
    "grade": "amc8",
    "points": 1,
    "title": "邮票张数最大化",
    "text": "邮票张数最大化",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "E",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2023_AMC_8_Problems/Problem_14",
    "tags": [
      "最值",
      "方程"
    ],
    "methods": [
      "设三种邮票张数 a、b、c，则 a+2b+5c=142，总张数 n=142−b−4c；由 a≤20 得 2b+5c≥122，配合 b≤20 推出 c≥17，取 c=17、b=19、a=19 共 55 张。",
      "从\"张数最多应尽量用小额邮票\"出发，把 25 分邮票逐步换成 5 分与 10 分，在总额 710 分不变下增加张数，直到每种 20 张的上限卡住，得 55。"
    ],
    "hints": []
  },
  {
    "no": 15,
    "searchText": "\nViswam walks half a mile to get to school each day. His route consists of city blocks of equal length and he takes\nminute to walk each block. Today, after walking blocks, Viswam discovers he has to make a detour, walking blocks of\nequal length instead of block to reach the next corner. From the time he starts his detour, at what speed, in mph, must he\nwalk, in order to get to school at his usual time?",
    "questionImage": "assets/2023-amc8-local/q15.png",
    "grade": "amc8",
    "points": 1,
    "title": "绕行后按时到校",
    "text": "绕行后按时到校",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "B",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2023_AMC_8_Problems/Problem_15",
    "tags": [
      "行程问题",
      "单位换算"
    ],
    "methods": [
      "全程 10 块用 10 分钟，已走 5 块后只剩 5 分钟；绕行把余下 5 块变成 7 块即 0.35 英里，速度 0.35÷(5/60)=4.2 mph。",
      "平时每块 1 分钟相当于 3 mph，现在同样时间要多走 7/5 倍距离，速度变为 3×7/5=4.2 mph。"
    ],
    "hints": []
  },
  {
    "no": 16,
    "searchText": "The letters and are entered into a table according to the pattern shown below. How many s, s, and\ns will appear in the completed table?",
    "questionImage": "assets/2023-amc8-local/q16.png",
    "grade": "amc8",
    "points": 1,
    "title": "表格中字母计数",
    "text": "表格中字母计数",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "C",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2023_AMC_8_Problems/Problem_16",
    "tags": [
      "周期",
      "计数"
    ],
    "methods": [
      "找出图案的最小循环节（位置每 3 格重复一次），把 400 个格按位置模 3 分成三类分别计数，得 133、134、133。",
      "逐行写出 P、Q、R 的个数序列，发现每 3 行一循环，用除法与余数求 20 行的合计，再与选项比对得 C。"
    ],
    "hints": []
  },
  {
    "no": 17,
    "searchText": "A regular octahedron has eight equilateral triangle faces with four faces meeting at each vertex. Jun will make the regular\noctahedron shown on the right by folding the piece of paper shown on the left. Which numbered face will end up to the right of\n?\n",
    "questionImage": "assets/2023-amc8-local/q17.png",
    "grade": "amc8",
    "points": 1,
    "title": "正八面体展开图",
    "text": "正八面体展开图",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "A",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2023_AMC_8_Problems/Problem_17",
    "tags": [
      "空间想象",
      "图形识别"
    ],
    "methods": [
      "以阴影面 Q 为基准，沿公共边依次折叠相邻三角形，追踪各编号面在空间中的朝向，落在 Q 右侧的是 1 号面。",
      "利用\"每个顶点周围恰好 4 个面\"补全八面体的相邻关系，判断与 Q 共边且位于右侧的面编号，得 1。"
    ],
    "hints": []
  },
  {
    "no": 18,
    "searchText": "Greta Grasshopper sits on a long line of lily pads in a pond. From any lily pad, Greta can jump pads to the right or pads to\nthe left. What is the fewest number of jumps Greta must make to reach the lily pad located pads to the right of her\nstarting point?",
    "questionImage": "assets/2023-amc8-local/q18.png",
    "grade": "amc8",
    "points": 1,
    "title": "左右跳到二零二三",
    "text": "左右跳到二零二三",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "D",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2023_AMC_8_Problems/Problem_18",
    "tags": [
      "整除",
      "最值"
    ],
    "methods": [
      "设右跳 a 次、左跳 b 次，5a−3b=2023，总次数 n=(2023+8b)/5 随 b 增大；取最小的 b 使 2023+3b 被 5 整除，得 b=4、a=407，共 411 次。",
      "先尽量右跳，再用同余 3b≡2 (mod 5) 求最少需要插入几次左跳，得 4 次，总次数 407+4=411。"
    ],
    "hints": []
  },
  {
    "no": 19,
    "searchText": "An equilateral triangle is placed inside a larger equilateral triangle so that the region between them can be divided into three\ncongruent trapezoids, as shown below. The side length of the inner triangle is the side length of the larger triangle. What is\nthe ratio of the area of one trapezoid to the area of the inner triangle?",
    "questionImage": "assets/2023-amc8-local/q19.png",
    "grade": "amc8",
    "points": 1,
    "title": "等边三角形内梯形比",
    "text": "等边三角形内梯形比",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "C",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2023_AMC_8_Problems/Problem_19",
    "tags": [
      "面积",
      "比例"
    ],
    "methods": [
      "边长比 2/3 得面积比 4/9，环形区域占 5/9；三个全等梯形各占 5/27，与内三角形的 4/9 之比为 5:12。",
      "设大三角形面积为 1，内三角形为 4/9，每个梯形为 (1−4/9)/3=5/27，化简 (5/27):(4/9)=5:12。"
    ],
    "hints": []
  },
  {
    "no": 20,
    "searchText": "\nTwo integers are inserted into the list to double its range. The mode and median remain unchanged. What is\nthe maximum possible sum of the two additional numbers?",
    "questionImage": "assets/2023-amc8-local/q20.png",
    "grade": "amc8",
    "points": 1,
    "title": "插数使极差加倍",
    "text": "插数使极差加倍",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "D",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2023_AMC_8_Problems/Problem_20",
    "tags": [
      "最值",
      "分类讨论"
    ],
    "methods": [
      "原极差 25 加倍为 50，取新最大值 53；插入后 7 个数的中位数仍须为 8，需至少一个插入数不超过 8，且不能让 8 出现两次以免众数改变，取 7，和为 60。",
      "分情况讨论新极值取 53 或 −22，结合\"第 4 个数是 8\"与\"3 仍是唯一众数\"筛选出最大数对 (7,53)，和为 60。"
    ],
    "hints": []
  },
  {
    "no": 21,
    "searchText": "Alina writes the numbers on separate cards, one number per card. She wishes to divide the cards into groups\nof cards so that the sum of the numbers in each group will be the same. In how many ways can this be done?",
    "questionImage": "assets/2023-amc8-local/q21.png",
    "grade": "amc8",
    "points": 1,
    "title": "九张卡片等和分组",
    "text": "九张卡片等和分组",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "C",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2023_AMC_8_Problems/Problem_21",
    "tags": [
      "组合",
      "枚举"
    ],
    "methods": [
      "总和 45 故每组 15；固定含 9 的那组枚举 9+5+1 与 9+4+2，分别检查剩余六数能否分成两组和为 15，共 2 种分法。",
      "以 1 所在组分类，列出所有和为 15 的三元组并做匹配，去掉组间顺序造成的重复后得 2 种。"
    ],
    "hints": []
  },
  {
    "no": 22,
    "searchText": "In a sequence of positive integers, each term after the second is the product of the previous two terms. The sixth term is\n. What is the first term?",
    "questionImage": "assets/2023-amc8-local/q22.png",
    "grade": "amc8",
    "points": 1,
    "title": "乘积递推数列首项",
    "text": "乘积递推数列首项",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "D",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2023_AMC_8_Problems/Problem_22",
    "tags": [
      "数论",
      "指数"
    ],
    "methods": [
      "设首两项 a、b，则第六项 a³b⁵=4000=2⁵×5³，比较质因数指数得 a=5、b=2，故第一项是 5。",
      "把 4000 分解质因数后按指数结构 (3,5) 分配给 a 与 b，只有 a=5、b=2 使各项为正整数，首项为 5。"
    ],
    "hints": []
  },
  {
    "no": 23,
    "searchText": "Each square in a grid is randomly filled with one of the gray and white tiles shown below on the right.\nWhat is the probability that the tiling will contain a large gray diamond in one of the smaller grids? Below is an example\nof such tiling.",
    "questionImage": "assets/2023-amc8-local/q23.png",
    "grade": "amc8",
    "points": 1,
    "title": "拼出大菱形的概率",
    "text": "拼出大菱形的概率",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "C",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2023_AMC_8_Problems/Problem_23",
    "tags": [
      "概率",
      "组合"
    ],
    "methods": [
      "共有 4 个 2×2 子方格，每个子方格拼出大菱形需 4 块特定瓷砖，概率 4×(1/4)⁴=1/64。",
      "先固定一个 2×2，数出能拼成大菱形的瓷砖组合数除以 4⁴，再对 4 个位置求和并核对事件不重叠，得 1/64。"
    ],
    "hints": []
  },
  {
    "no": 24,
    "searchText": "Isosceles triangle has equal side lengths and . In the figures below, segments are drawn parallel to\nso that the shaded portions of have the same area. The heights of the two unshaded portions are 11 and 5 units,\nrespectively. What is the height of ?\n",
    "questionImage": "assets/2023-amc8-local/q24.png",
    "grade": "amc8",
    "points": 1,
    "title": "平行线分割三角形",
    "text": "平行线分割三角形",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "A",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2023_AMC_8_Problems/Problem_24",
    "tags": [
      "面积",
      "比例"
    ],
    "methods": [
      "相似三角形面积与高的平方成正比；图一阴影为去掉高 11 小三角形后的梯形，面积正比于 h²−11²，图二阴影为高 h−5 的小三角形，正比于 (h−5)²。",
      "令 h²−11²=(h−5)²，展开消去 h² 得 10h=146，故 h=14.6；也可把选项代入两边面积检验。"
    ],
    "hints": []
  },
  {
    "no": 25,
    "searchText": "Fifteen integers are arranged in order on a number line. The integers are equally spaced and have the\nproperty that\nWhat is the sum of digits of",
    "questionImage": "assets/2023-amc8-local/q25.png",
    "grade": "amc8",
    "points": 1,
    "title": "等间距整数列数字和",
    "text": "等间距整数列数字和",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "A",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2023_AMC_8_Problems/Problem_25",
    "tags": [
      "数列",
      "整除"
    ],
    "methods": [
      "设公差 d，由 a15=a1+14d 在 241 到 250、a1 在 1 到 10 得 14d 在 231 到 249，故 d=17；再由 a2=a1+17 不超过 20 得 a1=3，于是 a14=241−17=224，数字和 8。",
      "先用 a15−a1=14d 和两端范围夹出 d=17，再用 a2≤20 锁定 a1=3，逐项写出数列到 a14=224，数字和为 8。"
    ],
    "hints": []
  }
];
