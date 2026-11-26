// Source: user-provided AoPS PDFs in past papers/ACM 8. Problems © MAA.
KANGAROO_DATA["2024-amc8"] = [
  {
    "no": 1,
    "searchText": "What is the ones digit of",
    "questionImage": "assets/2024-amc8-local/q1.png",
    "grade": "amc8",
    "points": 1,
    "title": "连减算式的个位",
    "text": "连减算式的个位",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "B",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2024_AMC_8_Problems/Problem_1",
    "tags": [
      "数与运算",
      "数字特征"
    ],
    "methods": [
      "只看个位：2−(2+2+2+2+2)=2−10=−8，借位后个位仍是 2。",
      "逐项相减：222222−22222=200000，再减 2222、222、22、2 得 197532，个位为 2。"
    ],
    "hints": []
  },
  {
    "no": 2,
    "searchText": "What is the value of this expression in decimal form?",
    "questionImage": "assets/2024-amc8-local/q2.png",
    "grade": "amc8",
    "points": 1,
    "title": "分数式化小数",
    "text": "分数式化小数",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "C",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2024_AMC_8_Problems/Problem_2",
    "tags": [
      "分数",
      "小数"
    ],
    "methods": [
      "分别化简 44/11=4、110/44=2.5、44/1100=0.04，相加得 6.54。",
      "先算 4+2.5=6.5，再加 0.04 得 6.54；也可用 4+5/2+1/25 通分验证。"
    ],
    "hints": []
  },
  {
    "no": 3,
    "searchText": "Four squares of side length and are arranged in increasing size order so that their left edges and bottom edges\nalign. The squares alternate in color white-gray-white-gray, respectively, as shown in the figure. What is the area of the visible\ngray region in square units?",
    "questionImage": "assets/2024-amc8-local/q3.png",
    "grade": "amc8",
    "points": 1,
    "title": "层叠正方形可见面积",
    "text": "层叠正方形可见面积",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "E",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2024_AMC_8_Problems/Problem_3",
    "tags": [
      "面积",
      "割补法"
    ],
    "methods": [
      "可见阴影是相邻两层的差：10²−9²=19 与 7²−4²=33，合计 52。",
      "用平方差 (10+9)(10−9)=19、(7+4)(7−4)=33，逐层作差后相加得 52。"
    ],
    "hints": []
  },
  {
    "no": 4,
    "searchText": "When Yunji added all the integers from to , she mistakenly left out a number. Her incorrect sum turned out to be a square\nnumber. What number did Yunji leave out?",
    "questionImage": "assets/2024-amc8-local/q4.png",
    "grade": "amc8",
    "points": 1,
    "title": "漏加一个数得平方数",
    "text": "漏加一个数得平方数",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "E",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2024_AMC_8_Problems/Problem_4",
    "tags": [
      "数字特征",
      "排除法"
    ],
    "methods": [
      "1 到 9 的和是 45，45−x 需为完全平方数；45 以下的平方数里只有 45−9=36=6² 对应 x 在 1–9 内。",
      "代入选项：45−5=40、45−6=39、45−7=38、45−8=37、45−9=36，只有 36 是平方数。"
    ],
    "hints": []
  },
  {
    "no": 5,
    "searchText": "Aaliyah rolls 2 standard 6-sided dice. She notices that the product of the two numbers rolled is a multiple of . Which of the\nfollowing integers cannot be the sum of the two numbers rolled?",
    "questionImage": "assets/2024-amc8-local/q5.png",
    "grade": "amc8",
    "points": 1,
    "title": "骰子积为六倍数时的和",
    "text": "骰子积为六倍数时的和",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "B",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2024_AMC_8_Problems/Problem_5",
    "tags": [
      "概率",
      "整除"
    ],
    "methods": [
      "枚举和为 6 的点数对 (1,5)、(2,4)、(3,3)、(4,2)、(5,1)，乘积 5、8、9、8、5 都不是 6 的倍数，故 6 不可能。",
      "积含因子 2 和 3 才可被 6 整除，列出所有可行组合对应的和，5、7、8、9 都能出现，唯独 6 从未出现。"
    ],
    "hints": []
  },
  {
    "no": 6,
    "searchText": "Sergei skated around an ice rink, gliding along different paths. The gray lines in the figures below show four of the paths labeled\n, , , and . What is the sorted order of the four paths from shortest to longest?",
    "questionImage": "assets/2024-amc8-local/q6.png",
    "grade": "amc8",
    "points": 1,
    "title": "四条路径长短排序",
    "text": "四条路径长短排序",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "D",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2024_AMC_8_Problems/Problem_6",
    "tags": [
      "周长",
      "比较大小"
    ],
    "methods": [
      "把每条路径拆成直线段与半圆弧，用弧长 π×直径/2 分别求总长，再从小到大排列得 R、P、S、Q。",
      "以同一半径为单位把四段路径换算成等价弧长，比较各路径的系数之和，得到相同的顺序。"
    ],
    "hints": []
  },
  {
    "no": 7,
    "searchText": "A rectangle is covered without overlap by 3 shapes of tiles: , , and , shown below. What is the\nminimum possible number of tiles used?",
    "questionImage": "assets/2024-amc8-local/q7.png",
    "grade": "amc8",
    "points": 1,
    "title": "瓷砖覆盖最少单格数",
    "text": "瓷砖覆盖最少单格数",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "E",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2024_AMC_8_Problems/Problem_7",
    "tags": [
      "计数",
      "网格"
    ],
    "methods": [
      "2×2 与 1×4 都占 4 格，故 1×1 的块数 c 满足 c≡1 (mod 4)；再考虑每行长 7 为奇数可排除 c=1，取最小 c=5。",
      "先构造 c=5 的铺法，再说明只留 1 格时剩下 20 格无法在 3 行内由 2×2 和 1×4 拼成，故最少 5 块。"
    ],
    "hints": []
  },
  {
    "no": 8,
    "searchText": "On Monday, Taye has . Every day, he either gains or doubles the amount of money he had on the previous day. How many\ndifferent dollar amounts could Taye have on Thursday, days later?",
    "questionImage": "assets/2024-amc8-local/q8.png",
    "grade": "amc8",
    "points": 1,
    "title": "每天加三或翻倍",
    "text": "每天加三或翻倍",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "D",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2024_AMC_8_Problems/Problem_8",
    "tags": [
      "枚举",
      "递推"
    ],
    "methods": [
      "逐天列集合：第 1 天 {4,5}，第 2 天 {7,8,10}，第 3 天 {10,11,13,14,16,20}，合并重复后共 6 种。",
      "画 2³=8 条路径的树状图，每条路径按 +3 或 ×2 计算，把相同结果合并，得到 6 个不同金额。"
    ],
    "hints": []
  },
  {
    "no": 9,
    "searchText": "All the marbles in Maria's collection are red, green, or blue. Maria has half as many red marbles as green marbles and twice as\nmany blue marbles as green marbles. Which of the following could be the total number of marbles in Maria's collection?\n",
    "questionImage": "assets/2024-amc8-local/q9.png",
    "grade": "amc8",
    "points": 1,
    "title": "三色弹珠总数",
    "text": "三色弹珠总数",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "E",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2024_AMC_8_Problems/Problem_9",
    "tags": [
      "比例",
      "倍数"
    ],
    "methods": [
      "设绿球 g 个，则红 g/2、蓝 2g，总数 7g/2 必为 7 的倍数，选项中只有 28 符合。",
      "取最小整数解 g=2（红 1、绿 2、蓝 4，共 7），总数必是 7 的倍数，逐项检验只有 28 可取。"
    ],
    "hints": []
  },
  {
    "no": 10,
    "searchText": "In January 1980 the Moana Loa Observation recorded carbon dioxide levels of 338 ppm (parts per million). Over the\nyears the average reading has increased by about 1.515 ppm each year. What is the expected level in ppm in\nJanuary 2030? Round your answer to the nearest integer.",
    "questionImage": "assets/2024-amc8-local/q10.png",
    "grade": "amc8",
    "points": 1,
    "title": "二氧化碳浓度增长",
    "text": "二氧化碳浓度增长",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "B",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2024_AMC_8_Problems/Problem_10",
    "tags": [
      "小数",
      "应用题"
    ],
    "methods": [
      "1980 到 2030 共 50 年，338+1.515×50=413.75，四舍五入得 414。",
      "把增量拆成 1.5×50=75 与 0.015×50=0.75，338+75.75=413.75，取整 414。"
    ],
    "hints": []
  },
  {
    "no": 11,
    "searchText": "The coordinates of are , , and , with . The area of is 12. What\nis the value of ?",
    "questionImage": "assets/2024-amc8-local/q11.png",
    "grade": "amc8",
    "points": 1,
    "title": "坐标三角形求高",
    "text": "坐标三角形求高",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "D",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2024_AMC_8_Problems/Problem_11",
    "tags": [
      "坐标",
      "面积"
    ],
    "methods": [
      "AB 水平且长 6，面积 12=6×h/2 得 h=4，故 y=7+4=11。",
      "用坐标面积公式写出 S=3(y−7)=12，即底 6 乘高 y−7 再取一半，解得 y=11。"
    ],
    "hints": []
  },
  {
    "no": 12,
    "searchText": "Rohan keeps a total of guppies in fish tanks.\nThere is more guppy in the nd tank than the st tank.\nThere are more guppies in the 3rd tank than the nd tank.\nThere are more guppies in the 4th tank than the rd tank.\nHow many guppies are in the th tank?",
    "questionImage": "assets/2024-amc8-local/q12.png",
    "grade": "amc8",
    "points": 1,
    "title": "四缸孔雀鱼",
    "text": "四缸孔雀鱼",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "E",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2024_AMC_8_Problems/Problem_12",
    "tags": [
      "方程",
      "应用题"
    ],
    "methods": [
      "设第一缸 x，四缸依次为 x、x+1、x+3、x+6，和 4x+10=90 得 x=20，第四缸 26。",
      "先减去后三缸多出的 1+3+6=10，剩 80 四等分得 20，再加回第四缸的 6 得 26。"
    ],
    "hints": []
  },
  {
    "no": 13,
    "searchText": "Buzz Bunny is hopping up and down a set of stairs, one step at a time. In how many ways can Buzz Bunny start on the ground,\nmake a sequence of hops, and end up back on the ground? (For example, one sequence of hops is up-up-down-down-up-\ndown.)\n",
    "questionImage": "assets/2024-amc8-local/q13.png",
    "grade": "amc8",
    "points": 1,
    "title": "六步跳回地面",
    "text": "六步跳回地面",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "B",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2024_AMC_8_Problems/Problem_13",
    "tags": [
      "递推",
      "计数"
    ],
    "methods": [
      "必须 3 上 3 下且任意前缀上不少于下，为第 3 个卡特兰数 (1/4)C(6,3)=5。",
      "按\"第 k 步后在高度 h\"列表递推，禁止高度变负，六步后回到 0 的方案数为 5。"
    ],
    "hints": []
  },
  {
    "no": 14,
    "searchText": "What is the distance of the shortest route from A to Z?",
    "questionImage": "assets/2024-amc8-local/q14.png",
    "grade": "amc8",
    "points": 1,
    "title": "单向路线最短路",
    "text": "单向路线最短路",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "A",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2024_AMC_8_Problems/Problem_14",
    "tags": [
      "路径",
      "图论"
    ],
    "methods": [
      "从 A 出发沿箭头逐点标数，每到一点保留已发现的最短距离并继续更新，最后读出到 Z 为 28 千米。",
      "枚举 A 到 Z 的几条有向路径，把各段公里数相加取最小；可按经过 X 或经过 Y 分类各求最小再比较。"
    ],
    "hints": []
  },
  {
    "no": 15,
    "searchText": "Let the letters represent distinct digits. Suppose is the GREATEST number that\nsatisfies the equation\nWhat is the value of ?",
    "questionImage": "assets/2024-amc8-local/q15.png",
    "grade": "amc8",
    "points": 1,
    "title": "字母竖式 FLYFLY",
    "text": "字母竖式 FLYFLY",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "C",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2024_AMC_8_Problems/Problem_15",
    "tags": [
      "数字特征",
      "位值"
    ],
    "methods": [
      "FLYFLY=FLY×1001、BUGBUG=BUG×1001，故 BUG=8×FLY；FLY≤124，从大到小试并排除数字重复，取 FLY=123、BUG=984，和 1107。",
      "由 8×FLY 仍为三位数得 FLY≤124，逐个检查六个字母互异，确定最大解后相加得 1107。"
    ],
    "hints": []
  },
  {
    "no": 16,
    "searchText": "Minh enters the numbers through into the cells of a grid in some order. She calculates the product of the\nnumbers in each row and column. What is the least number of rows and columns that could have a product divisible by ?",
    "questionImage": "assets/2024-amc8-local/q16.png",
    "grade": "amc8",
    "points": 1,
    "title": "行列乘积被三整除",
    "text": "行列乘积被三整除",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "D",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2024_AMC_8_Problems/Problem_16",
    "tags": [
      "整除",
      "最值"
    ],
    "methods": [
      "1 到 81 中 3 的倍数有 27 个；设 r 行、c 列的乘积被 3 整除，则这 27 个数必须落在 r×c 交集内，rc≥27，在 r,c≤9 下 r+c 最小为 11。",
      "构造：把 27 个 3 的倍数放进 4×7=28 的矩形区，其余格放非 3 倍数，此时恰有 4 行 7 列共 11 条满足，下界可达。"
    ],
    "hints": []
  },
  {
    "no": 17,
    "searchText": "A chess king is said to attack all squares one step away from it (basically any square right next to it in any direction),\nhorizontally, vertically, or diagonally. For instance, a king on the center square of a 3 x 3 grid attacks all 8 other squares, as\nshown below. Suppose a white king and a black king are placed on different squares of 3 x 3 grid so that they do not attack\neach other. In how many ways can this be done?",
    "questionImage": "assets/2024-amc8-local/q17.png",
    "grade": "amc8",
    "points": 1,
    "title": "两王互不攻击",
    "text": "两王互不攻击",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "E",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2024_AMC_8_Problems/Problem_17",
    "tags": [
      "组合",
      "分类讨论"
    ],
    "methods": [
      "无序共 C(9,2)=36 对；角格攻击 3 格、边中格 5 格、中心 8 格，攻击对 (4×3+4×5+8)/2=20，故不攻击 16 对，两王有序得 32。",
      "按白王位置分类：在角上有 5 个安全格、在边中有 3 个、在中心为 0，合计 4×5+4×3=32。"
    ],
    "hints": []
  },
  {
    "no": 18,
    "searchText": "Three concentric circles centered at have radii of , , and . Points and lie on the largest circle. The region\nbetween the two smaller circles is shaded, as is the portion of the region between the two larger circles bounded by central\nangles , as shown in the figure below. Suppose the shaded and unshaded regions are equal in area. What is the\nmeasure of in degrees?",
    "questionImage": "assets/2024-amc8-local/q18.png",
    "grade": "amc8",
    "points": 1,
    "title": "同心圆阴影相等",
    "text": "同心圆阴影相等",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "A",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2024_AMC_8_Problems/Problem_18",
    "tags": [
      "圆",
      "面积"
    ],
    "methods": [
      "总面积 9π，阴影占一半即 4.5π；小环贡献 π(4−1)=3π，大环整圈 π(9−4)=5π，故 θ=360×1.5/5=108°。",
      "列方程 3π+(5π/360)θ = 9π−[3π+(5π/360)θ]，解得 θ=108；也可直接算 (4.5−3)/5×360。"
    ],
    "hints": []
  },
  {
    "no": 19,
    "searchText": "Jordan owns 15 pairs of sneakers. Three fifths of the pairs are red and the rest are white. Two thirds of the pairs are high-top\nand the rest are low-top. The red high-top sneakers make up a fraction of the collection. What is the least possible value of this\nfraction?\n",
    "questionImage": "assets/2024-amc8-local/q19.png",
    "grade": "amc8",
    "points": 1,
    "title": "红高帮最少比例",
    "text": "红高帮最少比例",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "C",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2024_AMC_8_Problems/Problem_19",
    "tags": [
      "容斥原理",
      "分数"
    ],
    "methods": [
      "红色 9 双、高帮 10 双，交集至少 9+10−15=4 双，故最小占比 4/15。",
      "让尽量多的红色是低帮，而低帮只有 5 双，剩下 9−5=4 双红色必为高帮，得 4/15。"
    ],
    "hints": []
  },
  {
    "no": 20,
    "searchText": "Any three vertices of the cube shown in the figure below, can be connected to form a triangle. For\nexample, vertices and can be connected to form How many of these triangles are equilateral and\ncontain as a vertex?",
    "questionImage": "assets/2024-amc8-local/q20.png",
    "grade": "amc8",
    "points": 1,
    "title": "立方体含 P 的等边三角形",
    "text": "立方体含 P 的等边三角形",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "D",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2024_AMC_8_Problems/Problem_20",
    "tags": [
      "立方体",
      "组合"
    ],
    "methods": [
      "把 8 个顶点按奇偶分成两组，每组 4 个构成正四面体（两两距离为面对角线 √2）；含 P 的那组另有 3 个顶点，任选 2 个与 P 组成等边三角形，共 3 个。",
      "等边三角形边长只能取面对角线 √2；与 P 距离为 √2 的恰有 3 个顶点且两两等距，故 C(3,2)=3；边长 1 或 √3 都无法与 P 配成等边。"
    ],
    "hints": []
  },
  {
    "no": 21,
    "searchText": "A group of frogs (called an army) is living in a tree. A frog turns green when in the shade and turns yellow when in the sun.\nInitially, the ratio of green to yellow frogs was . Then green frogs moved to the sunny side and yellow frogs moved\nto the shady side. Now the ratio is . What is the difference between the number of green frogs and the number of yellow\nfrogs now?",
    "questionImage": "assets/2024-amc8-local/q21.png",
    "grade": "amc8",
    "points": 1,
    "title": "青蛙变色后的比例",
    "text": "青蛙变色后的比例",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "E",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2024_AMC_8_Problems/Problem_21",
    "tags": [
      "比例",
      "方程"
    ],
    "methods": [
      "设初始绿 3k、黄 k，两次移动后绿 3k+2、黄 k−2，由 (3k+2)/(k−2)=4 得 k=10，现绿 32、黄 8，差 24。",
      "总数恒为 4k，现在绿占 4/5、黄占 1/5，差为 3/5×4k；结合净变化解出 k=10，得差 24。"
    ],
    "hints": []
  },
  {
    "no": 22,
    "searchText": "\nA roll of tape is inches in diameter and is wrapped around a ring that is inches in diameter. A cross section of the tape is\nshown in the figure below. The tape is inches thick. If the tape is completely unrolled, approximately how long would it\nbe? Round your answer to the nearest inches.",
    "questionImage": "assets/2024-amc8-local/q22.png",
    "grade": "amc8",
    "points": 1,
    "title": "胶带完全展开长度",
    "text": "胶带完全展开长度",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "B",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2024_AMC_8_Problems/Problem_22",
    "tags": [
      "圆",
      "面积"
    ],
    "methods": [
      "横截面积 π(2²−1²)=3π，展开后面积不变，长度 3π/0.015=200π≈628 英寸，取最接近的 600。",
      "按层数估算：(2−1)/0.015≈67 层，平均周长 π×3，总长约 67×3π≈631 英寸，同样约 600。"
    ],
    "hints": []
  },
  {
    "no": 23,
    "searchText": "Rodrigo has a very large sheet of graph paper. First he draws a line segment connecting point to point and\ncolors the cells whose interiors intersect the segment, as shown below. Next Rodrigo draws a line segment connecting point\nto point . How many cells will he color this time?",
    "questionImage": "assets/2024-amc8-local/q23.png",
    "grade": "amc8",
    "points": 1,
    "title": "线段穿过的格子数",
    "text": "线段穿过的格子数",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "C",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2024_AMC_8_Problems/Problem_23",
    "tags": [
      "网格",
      "计数"
    ],
    "methods": [
      "穿过格子数的公式为 Δx+Δy−gcd(Δx,Δy)；示例 (2,4,gcd=2) 得 4 验证公式，代入 (3000,5000,gcd=1000) 得 7000。",
      "按最大公约数把位移分成 1000 段，每小段 (3,5) 穿过 3+5−1=7 格，共 7×1000=7000 格。"
    ],
    "hints": []
  },
  {
    "no": 24,
    "searchText": "Jean has made a piece of stained glass art in the shape of two mountains, as shown in the figure below. One mountain peak is\nfeet high while the other peak is feet high. Each peak forms a angle, and the straight sides form a angle with\nthe ground. The artwork has an area of square feet. The sides of the mountain meet at an intersection point near the\ncenter of the artwork, feet above the ground. What is the value of\n",
    "questionImage": "assets/2024-amc8-local/q24.png",
    "grade": "amc8",
    "points": 1,
    "title": "两座山的交点高度",
    "text": "两座山的交点高度",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "B",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2024_AMC_8_Problems/Problem_24",
    "tags": [
      "面积",
      "几何"
    ],
    "methods": [
      "两山各是等腰直角三角形，面积 8²=64 与 12²=144；并集为 183，故重叠为 64+144−183=25，而重叠区面积恰为 h²，得 h=5。",
      "用 45° 侧边写出直线方程，联立求交点高度 h，再由并集面积 183 反解；也可由 h²=25 直接开方验证。"
    ],
    "hints": []
  },
  {
    "no": 25,
    "searchText": "An airplane has rows of seats with seats in each row. Eight passengers have boarded the plane and are distributed\nrandomly among the seats. A married couple is next to board. What is the probability there will be adjacent seats in the same\nrow for the couple?",
    "questionImage": "assets/2024-amc8-local/q25.png",
    "grade": "amc8",
    "points": 1,
    "title": "相邻座位的概率",
    "text": "相邻座位的概率",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "C",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2024_AMC_8_Problems/Problem_25",
    "tags": [
      "概率",
      "组合"
    ],
    "methods": [
      "把问题化为 4 个空位在 12 格中的分布，总数 C(12,4)=495；数出存在同排相邻空位的情形共 300，概率 300/495=20/33。",
      "按每排空位数分类计数，只有某排至少 2 个空位且相邻才成功；累加可行分配得 300 种，化简为 20/33。"
    ],
    "hints": []
  }
];
