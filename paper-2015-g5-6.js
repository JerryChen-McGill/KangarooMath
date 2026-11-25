// Math Kangaroo 2015 Grade 5–6. Transcribed and checked against the local original paper.
KANGAROO_DATA["2015-g5-6"]=[
  {
    "no": 1,
    "points": 3,
    "grade": "5-6",
    "text": "Which figure has one half of its area shaded?",
    "options": {
      "A": "Figure A",
      "B": "Figure B",
      "C": "Figure C",
      "D": "Figure D",
      "E": "Figure E"
    },
    "answer": "B",
    "title": "面积的一半",
    "tags": [
      "分数",
      "面积"
    ],
    "solution": "B 的阴影正好覆盖三角形的一半。A 是圆的 1/3，C 是 3/4，D 是 1/4，E 是 2/5。",
    "hints": [
      "先看每幅图被分成了多少个等面积部分。",
      "只数涂色部分，不要按边长估计面积。",
      "把阴影部分与总份数相比，找出 1/2。"
    ],
    "methods": [
      "把各图的阴影面积写成分数再比较。",
      "观察等分图形的阴影比例。"
    ],
    "tip": "改为找出阴影面积是整图 2/3 的图形。",
    "teacherTip": "改为找出阴影面积是整图 2/3 的图形。",
    "tagsEditable": true,
    "figure": "assets/2015-g5-6/q1.png",
    "figureAlt": "Original figure for question 1: 面积的一半"
  },
  {
    "no": 2,
    "points": 3,
    "grade": "5-6",
    "text": "My umbrella has KANGAROO written on top. It is shown in the picture to the right. Which of the pictures below does not show my umbrella?",
    "options": {
      "A": "Umbrella A",
      "B": "Umbrella B",
      "C": "Umbrella C",
      "D": "Umbrella D",
      "E": "Umbrella E"
    },
    "answer": "C",
    "title": "旋转与字母方向",
    "tags": [
      "空间想象",
      "图形识别"
    ],
    "solution": "将大伞旋转 180° 来比对字母顺序和朝向。其余四把小伞分别对应大伞上的片段；C 中的字母 R 旋转后仍是反向的，因此不能对应，选 C。",
    "hints": [
      "先把大伞想象为倒转 180°。",
      "旋转会改变字母的方向，也会改变它们在伞面上的先后位置。",
      "逐把比较字母序列与朝向，找出唯一不匹配的 C。"
    ],
    "methods": [
      "按伞骨方向旋转整个图，再核对字母。",
      "利用 180° 旋转同时检查位置和字形朝向。"
    ],
    "tip": "把大伞上的字母改为 ABCDE，仍旋转 180°，判断片段是否匹配。",
    "teacherTip": "把大伞上的字母改为 ABCDE，仍旋转 180°，判断片段是否匹配。",
    "tagsEditable": true,
    "figure": "assets/2015-g5-6/q2.png",
    "figureAlt": "Original figure for question 2: 旋转与字母方向"
  },
  {
    "no": 3,
    "points": 3,
    "grade": "5-6",
    "text": "Sam painted the 9 squares as shown using black, white and gray. At least how many squares must he repaint so that no two squares with a common side are the same color?",
    "options": {
      "A": "2",
      "B": "3",
      "C": "4",
      "D": "5",
      "E": "6"
    },
    "answer": "A",
    "title": "相邻方格重新着色",
    "tags": [
      "逻辑推理",
      "计数"
    ],
    "solution": "顶行相邻的两个灰格、底行相邻的两个黑格都违反条件。只重涂一个格仍会留下另一组相同颜色相邻；把顶行右格改黑、底行中格改灰后，每对共边方格颜色不同，所以最少重涂 2 格。",
    "hints": [
      "先圈出所有共边且颜色相同的方格对。",
      "检查一个格是否能同时修复两组冲突。",
      "分别修复灰色相邻对和黑色相邻对，两个格足够。"
    ],
    "methods": [
      "把方格看成邻接图，对每条同色边逐一消除冲突。",
      "按图中两处互不重叠的冲突，证明至少需要两次重涂。"
    ],
    "tip": "把 3×3 方格初始颜色改成棋盘式黑白，求最少重涂格数。",
    "teacherTip": "把 3×3 方格初始颜色改成棋盘式黑白，求最少重涂格数。",
    "tagsEditable": true,
    "figure": "assets/2015-g5-6/q3.png",
    "figureAlt": "Original figure for question 3: 相邻方格重新着色"
  },
  {
    "no": 4,
    "points": 3,
    "grade": "5-6",
    "text": "There are 10 ducks. 5 of these ducks lay an egg every day. The other 5 lay an egg every other day. How many eggs do the 10 ducks lay in a period of 10 days?",
    "options": {
      "A": "75",
      "B": "60",
      "C": "50",
      "D": "25",
      "E": "10"
    },
    "answer": "A",
    "title": "周期产蛋总数",
    "tags": [
      "应用题",
      "周期"
    ],
    "solution": "每天产蛋的 5 只在 10 天产 5×10=50 枚；隔天产蛋的 5 只在 10 天各产 5 枚，共 25 枚。合计 50+25=75 枚。",
    "hints": [
      "把两组鸭子分开计算。",
      "每天产蛋的一组每只 10 枚。",
      "隔天产蛋的一组每只 5 枚，再把两组相加。"
    ],
    "methods": [
      "按组计算：5×10+5×(10÷2)。",
      "先确定每只鸭子在给定天数里的产蛋次数。"
    ],
    "tip": "若 4 只鸭每天产蛋，另 6 只每两天产一枚，10 天共多少枚？",
    "teacherTip": "若 4 只鸭每天产蛋，另 6 只每两天产一枚，10 天共多少枚？",
    "tagsEditable": true
  },
  {
    "no": 5,
    "points": 3,
    "grade": "5-6",
    "text": "The figure shows a board where each small square has an area of 4 cm². What is the length of the thick black line?",
    "options": {
      "A": "16 cm",
      "B": "18 cm",
      "C": "20 cm",
      "D": "21 cm",
      "E": "23 cm"
    },
    "answer": "B",
    "title": "方格边长与折线长度",
    "tags": [
      "面积",
      "周长"
    ],
    "solution": "每个小正方形面积 4 cm²，所以边长为 2 cm。粗黑折线由 9 段小正方形边组成，长度为 9×2=18 cm，选 B。",
    "hints": [
      "先由面积求出小正方形边长。",
      "沿黑线逐段数它包含几个小边长。",
      "共有 9 个边长，每段 2 cm。"
    ],
    "methods": [
      "面积开平方得到边长，再乘黑线段数。",
      "曲线或折线长度要沿着线段逐段相加。"
    ],
    "tip": "若每个小格面积为 9 cm²，黑线仍长 9 个小格边，求其长度。",
    "teacherTip": "若每个小格面积为 9 cm²，黑线仍长 9 个小格边，求其长度。",
    "tagsEditable": true,
    "figure": "assets/2015-g5-6/q5.png",
    "figureAlt": "Original figure for question 5: 方格边长与折线长度"
  },
  {
    "no": 6,
    "points": 3,
    "grade": "5-6",
    "text": "Which of the following improper fractions is smaller than 2?",
    "options": {
      "A": "19/8",
      "B": "20/9",
      "C": "21/10",
      "D": "22/11",
      "E": "23/12"
    },
    "answer": "E",
    "title": "分数与整数比较",
    "tags": [
      "分数",
      "数与运算"
    ],
    "solution": "分母为 12 时，2=24/12，因此 23/12<2。其余分数均大于或等于 2（22/11=2），故选 E。",
    "hints": [
      "把 2 写成与选项相同的分母。",
      "比较分子与 2 倍分母。",
      "只有 23 小于 24。"
    ],
    "methods": [
      "逐个计算分数与 2 的差。",
      "同分母比较分子，或比较分子与分母的两倍。"
    ],
    "tip": "在这些分数中，哪个小于 3/2：17/12、18/12、19/12、20/12、21/12？",
    "teacherTip": "在这些分数中，哪个小于 3/2：17/12、18/12、19/12、20/12、21/12？",
    "tagsEditable": true
  },
  {
    "no": 7,
    "points": 3,
    "grade": "5-6",
    "text": "A pumpkin and a watermelon together weigh 8 kg. The watermelon is 2 kg lighter than the pumpkin. How much does the pumpkin weigh?",
    "options": {
      "A": "2 kg",
      "B": "3 kg",
      "C": "4 kg",
      "D": "5 kg",
      "E": "6 kg"
    },
    "answer": "D",
    "title": "和差问题",
    "tags": [
      "方程",
      "应用题"
    ],
    "solution": "设南瓜重 p kg，则西瓜重 p−2 kg。由 p+(p−2)=8 得 2p=10，p=5 kg，选 D。",
    "hints": [
      "南瓜比西瓜重 2 kg。",
      "总重量减去这 2 kg 后，两者相等。",
      "平分 8−2=6 会错误，注意差额是从总和中减去 2 后再平分，得 5。"
    ],
    "methods": [
      "用和差公式：较大数=(和+差)÷2=(8+2)÷2。",
      "用总和与差求较大的量。"
    ],
    "tip": "两样物品共 18 kg，较轻的比南瓜轻 4 kg，南瓜重多少？",
    "teacherTip": "两样物品共 18 kg，较轻的比南瓜轻 4 kg，南瓜重多少？",
    "tagsEditable": true
  },
  {
    "no": 8,
    "points": 3,
    "grade": "5-6",
    "text": "Each plant in John's garden has either 5 leaves only, or 2 leaves and 1 flower. In total, the plants have 6 flowers and 32 leaves. How many plants are there?",
    "options": {
      "A": "10",
      "B": "12",
      "C": "13",
      "D": "15",
      "E": "16"
    },
    "answer": "A",
    "title": "二元计数",
    "tags": [
      "方程",
      "应用题"
    ],
    "solution": "有 6 朵花的植物各有 2 片叶，共 12 片叶。剩余 32−12=20 片叶来自只有叶子的植物，每株 5 片，因此有 4 株。总株数 6+4=10。",
    "hints": [
      "花只出现在“2 叶 1 花”的植物上。",
      "6 朵花对应 6 株，也带来 12 片叶。",
      "剩余 20 片叶每 5 片一株，共 4 株。"
    ],
    "methods": [
      "设两类植物分别为 x、y，利用花数和叶数列方程。",
      "先用花的总数确定一类植物数量，再分配叶片。"
    ],
    "tip": "若有 8 朵花、总叶数 46 片，植物共有多少株？",
    "teacherTip": "若有 8 朵花、总叶数 46 片，植物共有多少株？",
    "tagsEditable": true,
    "figure": "assets/2015-g5-6/q8.png",
    "figureAlt": "Original figure for question 8: 二元计数"
  },
  {
    "no": 9,
    "points": 3,
    "grade": "5-6",
    "text": "Alva has 4 paper strips of the same length. She glues 2 of them together with a 10 cm overlap and gets a strip 50 cm long. With the other two strips, she wants to make a strip 56 cm long. How long should the overlap be?",
    "options": {
      "A": "4 cm",
      "B": "6 cm",
      "C": "8 cm",
      "D": "10 cm",
      "E": "12 cm"
    },
    "answer": "A",
    "title": "重叠长度",
    "tags": [
      "方程",
      "几何"
    ],
    "solution": "设每条纸带长 L。两条重叠 10 cm 后长 50 cm，所以 2L−10=50，L=30。要拼成 56 cm，重叠量为 2×30−56=4 cm。",
    "hints": [
      "两条长度相加后要减掉重叠部分。",
      "先用第一次拼接求每条纸带长度。",
      "第二次重叠量等于两条总长减目标长度。"
    ],
    "methods": [
      "列式 2L−重叠=拼后长度。",
      "纸带拼接要把被覆盖的部分减去一次。"
    ],
    "tip": "每条纸带长 25 cm，拼成 43 cm，重叠多少？",
    "teacherTip": "每条纸带长 25 cm，拼成 43 cm，重叠多少？",
    "tagsEditable": true,
    "figure": "assets/2015-g5-6/q9.png",
    "figureAlt": "Original figure for question 9: 重叠长度"
  },
  {
    "no": 10,
    "points": 3,
    "grade": "5-6",
    "text": "Tom used 6 squares with side length 1 to form the shape shown. What is the perimeter of the shape?",
    "options": {
      "A": "9",
      "B": "10",
      "C": "11",
      "D": "12",
      "E": "13"
    },
    "answer": "D",
    "title": "方格图形周长",
    "tags": [
      "周长",
      "图形识别"
    ],
    "solution": "数外边界单位线段：竖直边总长 6，顶部水平边 1，底部水平边 3，上方台阶处短红色水平边合计 −2 与下方蓝色短水平边合计 +2 的净贡献抵消。直接沿边界计数共 12 个单位长度，选 D。",
    "hints": [
      "只数图形外轮廓，不数内部共边。",
      "把竖直和水平方向分开统计。",
      "沿外框逐段标记，长度总计 12。"
    ],
    "methods": [
      "六个单位正方形初始周长 24，每条内部共边减少 2。",
      "周长等于所有外露单位边的数量。"
    ],
    "tip": "若在底部再接上一个单位正方形，外边周长会增加几？",
    "teacherTip": "若在底部再接上一个单位正方形，外边周长会增加几？",
    "tagsEditable": true,
    "figure": "assets/2015-g5-6/q10.png",
    "figureAlt": "Original figure for question 10: 方格图形周长"
  },
  {
    "no": 11,
    "points": 4,
    "grade": "5-6",
    "text": "Every day Mary writes down the date and calculates the sum of the digits written. For example, on March 19 she writes 03/19 and calculates 0+3+1+9=13. What is the largest sum that she calculates during a year?",
    "options": {
      "A": "7",
      "B": "13",
      "C": "14",
      "D": "16",
      "E": "20"
    },
    "answer": "E",
    "title": "日期数字和",
    "tags": [
      "数与运算",
      "最值"
    ],
    "solution": "日期 09/29 的数字和为 0+9+2+9=20。月份数字和最多为 9，日期数字和最多为 11（29），总和不超过 20；因此最大值为 20，选 E。",
    "hints": [
      "月份按两位数写，月份数字和最大为 09 的 9。",
      "日期的最大数字和来自 29，为 11。",
      "09/29 实际存在，达到 20。"
    ],
    "methods": [
      "分别最大化月份和日期的数字和，并检查日期有效性。",
      "最大化日期数字和时要考虑日历中真实存在的日期。"
    ],
    "tip": "某月日期写成两位数，若只能是 01 至 31，日期部分数字和最大是多少？",
    "teacherTip": "某月日期写成两位数，若只能是 01 至 31，日期部分数字和最大是多少？",
    "tagsEditable": true
  },
  {
    "no": 12,
    "points": 4,
    "grade": "5-6",
    "text": "The rectangle ABCD in the picture consists of 4 equal rectangles. If BC has a length of 1 cm, what is the length of AB?",
    "options": {
      "A": "4 cm",
      "B": "3 cm",
      "C": "2 cm",
      "D": "1 cm",
      "E": "0.5 cm"
    },
    "answer": "C",
    "title": "相同小矩形拼图",
    "tags": [
      "几何",
      "几何"
    ],
    "solution": "四个全等小矩形如图拼成大矩形。大矩形高 BC 等于两个小矩形短边，因此短边为 0.5 cm；AB 由短边+长边+短边组成，且长边为 1 cm，故 AB=0.5+1+0.5=2 cm。",
    "hints": [
      "观察左右竖放的小矩形和中间横放的两个矩形。",
      "大矩形高度由两个短边组成，等于 1 cm。",
      "AB 由两个短边和一个长边组成。"
    ],
    "methods": [
      "设小矩形边长为 a、b，由拼接关系建立方程。",
      "利用全等矩形的边长关系列出长宽方程。"
    ],
    "tip": "若 BC=1.5 cm，其余拼法不变，AB 是多少？",
    "teacherTip": "若 BC=1.5 cm，其余拼法不变，AB 是多少？",
    "tagsEditable": true,
    "figure": "assets/2015-g5-6/q12.png",
    "figureAlt": "Original figure for question 12: 相同小矩形拼图"
  },
  {
    "no": 13,
    "points": 4,
    "grade": "5-6",
    "text": "Which of these five nets cannot be the net of a pyramid? (A net is a flat shape that can be folded up to form a three-dimensional object.)",
    "options": {
      "A": "Net A",
      "B": "Net B",
      "C": "Net C",
      "D": "Net D",
      "E": "Net E"
    },
    "answer": "C",
    "title": "正方形底四棱锥展开图",
    "tags": [
      "空间想象",
      "几何"
    ],
    "solution": "正方形是底面，四个三角形必须分别折到四条侧面上。C 折叠时两块三角形的顶点会在底面左边缘重合，使另两块无法围合；其余四个展开图可折成四棱锥，因此 C 不可能。",
    "hints": [
      "先找出正方形底面及四个三角形。",
      "想象每个三角形沿底边向上折。",
      "检查顶点是否恰好汇到同一个锥顶，C 会发生边缘重叠。"
    ],
    "methods": [
      "沿四条底边依次折起，检查侧面边能否配对。",
      "展开图必须让四个侧面恰好围成一个锥顶，且不能互相覆盖。"
    ],
    "tip": "若一个正方形底面只有三个三角形侧面，能否形成完整四棱锥？",
    "teacherTip": "若一个正方形底面只有三个三角形侧面，能否形成完整四棱锥？",
    "tagsEditable": true,
    "figure": "assets/2015-g5-6/q13.png",
    "figureAlt": "Original figure for question 13: 正方形底四棱锥展开图"
  },
  {
    "no": 14,
    "points": 4,
    "grade": "5-6",
    "text": "Lucy and her mother were both born in February. On March 19, 2015, Lucy adds the year of her birth, the year of her mother's birth, her age, and her mother's age. What result does she get?",
    "options": {
      "A": "4028",
      "B": "4029",
      "C": "4030",
      "D": "4031",
      "E": "4032"
    },
    "answer": "C",
    "title": "出生年份与年龄恒和",
    "tags": [
      "数与运算",
      "年龄问题"
    ],
    "solution": "两人都在 2015 年 3 月 19 日前过了生日，因此每个人的“出生年份+当前年龄”都等于 2015。两人的和为 2015+2015=4030，选 C。",
    "hints": [
      "生日都在二月，且现在是三月。",
      "所以两人今年都已经过生日。",
      "每人的出生年加年龄等于 2015。"
    ],
    "methods": [
      "对两个人分别写：出生年+年龄=当前年。",
      "年龄与出生年份的关系取决于当年生日是否已过。"
    ],
    "tip": "若今天是 2025 年 1 月 15 日，两人都出生在 2 月，两个“出生年+年龄”之和是多少？",
    "teacherTip": "若今天是 2025 年 1 月 15 日，两人都出生在 2 月，两个“出生年+年龄”之和是多少？",
    "tagsEditable": true
  },
  {
    "no": 15,
    "points": 4,
    "grade": "5-6",
    "text": "A student wrote down a natural number. When she divided the number by 9, the remainder was 7. What is the remainder when twice that number is divided by 9?",
    "options": {
      "A": "1",
      "B": "2",
      "C": "5",
      "D": "6",
      "E": "7"
    },
    "answer": "C",
    "title": "余数倍乘",
    "tags": [
      "数论",
      "余数"
    ],
    "solution": "设 n=9k+7，则 2n=18k+14=9(2k+1)+5，所以余数为 5，选 C。",
    "hints": [
      "把原数写为 9k+7。",
      "将它乘以 2。",
      "18k 是 9 的倍数，14 除以 9 余 5。"
    ],
    "methods": [
      "只需计算 2×7 对 9 取余。",
      "乘法对余数的影响可以直接在模数下计算。"
    ],
    "tip": "一个数除以 7 余 5，三倍这个数除以 7 余几？",
    "teacherTip": "一个数除以 7 余 5，三倍这个数除以 7 余几？",
    "tagsEditable": true
  },
  {
    "no": 16,
    "points": 4,
    "grade": "5-6",
    "text": "The area of a rectangle is 12. The lengths of its sides are natural numbers. The perimeter of this rectangle could be:",
    "options": {
      "A": "20",
      "B": "26",
      "C": "32",
      "D": "28",
      "E": "24"
    },
    "answer": "B",
    "title": "面积因数与周长",
    "tags": [
      "数与运算",
      "周长"
    ],
    "solution": "面积为 12 的整数边长配对为 (1,12)、(2,6)、(3,4)，周长分别是 26、16、14。选项中只有 26，故答案 B。",
    "hints": [
      "列出 12 的因数配对。",
      "用周长公式 2(a+b) 计算。",
      "在选项中找到 26。"
    ],
    "methods": [
      "枚举所有因数对即可证明完整。",
      "固定面积时，整数边长只可能来自因数配对。"
    ],
    "tip": "面积为 18 的长方形，整数边长下可能的周长有哪些？",
    "teacherTip": "面积为 18 的长方形，整数边长下可能的周长有哪些？",
    "tagsEditable": true
  },
  {
    "no": 17,
    "points": 4,
    "grade": "5-6",
    "text": "Each of the segments in the figure needs to be colored red, green or blue. Each of the 4 triangles needs to have each side a different color. Three segments have already been colored. What color can the segment marked x be?",
    "options": {
      "A": "Only blue",
      "B": "Only green",
      "C": "Only red",
      "D": "Any of the three colors",
      "E": "Such a coloring is not possible"
    },
    "answer": "C",
    "title": "三角形边着色约束",
    "tags": [
      "逻辑推理",
      "几何"
    ],
    "solution": "利用每个三角形三边颜色各异。沿相邻三角形逐步传播已给的蓝、红边约束，右侧两个三角形确定另外几条边后，x 不能为蓝或绿，只能为红，选 C。",
    "hints": [
      "从已有颜色最多的三角形开始。",
      "每个三角形缺少的第三种颜色唯一。",
      "把确定的颜色传到相邻三角形，最后 x 只能是红色。"
    ],
    "methods": [
      "逐三角形使用三色各一次的限制。",
      "局部约束会沿共享边传播到整幅图。"
    ],
    "tip": "若一个三角形已有红边和绿边，它的第三边必须是什么颜色？",
    "teacherTip": "若一个三角形已有红边和绿边，它的第三边必须是什么颜色？",
    "tagsEditable": true,
    "figure": "assets/2015-g5-6/q17.png",
    "figureAlt": "Original figure for question 17: 三角形边着色约束"
  },
  {
    "no": 18,
    "points": 4,
    "grade": "5-6",
    "text": "In a bag there are 3 green apples, 5 yellow apples, 7 green pears, and 2 yellow pears. Simon takes fruit one by one. How many pieces must he take to be sure that he has at least one apple and one pear of the same color?",
    "options": {
      "A": "9",
      "B": "10",
      "C": "11",
      "D": "12",
      "E": "13"
    },
    "answer": "E",
    "title": "最坏情况保证",
    "tags": [
      "计数",
      "最值"
    ],
    "solution": "避免同色配对时，每种颜色只能取苹果或梨中的一种。最多可取 5 个黄苹果和 7 个绿梨，共 12 个；第 13 个无论是黄梨还是绿苹果，都会与已取水果配成同色苹果梨，因此选 E。",
    "hints": [
      "按颜色分成黄、绿两类。",
      "若要避免同色苹果梨，每种颜色只能拿苹果或梨的一类。",
      "最多为黄苹果 5 个加绿梨 7 个，共 12；再拿一个必配对。"
    ],
    "methods": [
      "计算不触发目标事件时的最大选取数，再加 1。",
      "保证类问题考虑最坏情形，而不是平均情况。"
    ],
    "tip": "若有 4 红苹果、3 黄苹果、6 红梨、2 黄梨，至少拿几件保证同色苹果梨？",
    "teacherTip": "若有 4 红苹果、3 黄苹果、6 红梨、2 黄梨，至少拿几件保证同色苹果梨？",
    "tagsEditable": true
  },
  {
    "no": 19,
    "points": 4,
    "grade": "5-6",
    "text": "A new chess piece called a kangaroo has been introduced. In each move, it jumps either 3 squares vertically and 1 square horizontally, or 3 squares horizontally and 1 square vertically, as shown. What is the minimum number of moves the kangaroo needs to get from its current position to the square marked A?",
    "options": {
      "A": "2",
      "B": "3",
      "C": "4",
      "D": "5",
      "E": "6"
    },
    "answer": "B",
    "title": "跳棋步数与坐标",
    "tags": [
      "空间想象",
      "逻辑推理"
    ],
    "solution": "把起点与 A 的相对位置记为坐标变化。每步变化是 (±3,±1) 或 (±1,±3)。两步无法同时满足目标的横纵位移；按图中方向选择三步（其中两步相互抵消部分位移）可到 A，因此最少 3 步，选 B。",
    "hints": [
      "把棋盘上的起点和目标转成横纵坐标差。",
      "每一步一个方向移动 3 格、另一个方向 1 格。",
      "检查两步仍不可能，图示路线三步可达。"
    ],
    "methods": [
      "用坐标枚举一步和两步可达位置。",
      "先用坐标排除少步数，再给出达到目标的路线。"
    ],
    "tip": "标准马走法从 (0,0) 到 (1,2) 至少几步？",
    "teacherTip": "标准马走法从 (0,0) 到 (1,2) 至少几步？",
    "tagsEditable": true,
    "figure": "assets/2015-g5-6/q19.png",
    "figureAlt": "Original figure for question 19: 跳棋步数与坐标"
  },
  {
    "no": 20,
    "points": 4,
    "grade": "5-6",
    "text": "In this sum, the same letters represent the same digits and different letters represent different digits. Which digit does X represent?  X + X + YY = ZZZ",
    "options": {
      "A": "2",
      "B": "3",
      "C": "4",
      "D": "5",
      "E": "6"
    },
    "answer": "E",
    "title": "字母数字竖式",
    "tags": [
      "数论",
      "逻辑推理"
    ],
    "solution": "等式为 2X+11Y=111Z。左边最大 18+99=117，因此 Z=1。代入得 2X+11Y=111；Y=9 时 2X=12，故 X=6，且 X,Y,Z 两两不同，符合条件。",
    "hints": [
      "把重复数字写成数值：YY=11Y，ZZZ=111Z。",
      "由于左边不超过 117，Z 只能是 1。",
      "检查 Y=9 得 X=6。"
    ],
    "methods": [
      "用上界先确定百位数字，再代入求其余数。",
      "重复字母数字题先把数字串转换成代数表达式。"
    ],
    "tip": "若 2X+11Y=111Z 且 X,Y,Z 为不同数字，求 X。",
    "teacherTip": "若 2X+11Y=111Z 且 X,Y,Z 为不同数字，求 X。",
    "tagsEditable": true
  },
  {
    "no": 21,
    "points": 5,
    "grade": "5-6",
    "text": "The sum of four natural numbers is 39. The product of two of these numbers is 80, and the product of the other two numbers is also 80. What is the largest of these four numbers?",
    "options": {
      "A": "8",
      "B": "10",
      "C": "16",
      "D": "20",
      "E": "25"
    },
    "answer": "C",
    "title": "因数配对与和",
    "tags": [
      "数与运算",
      "逻辑推理"
    ],
    "solution": "乘积为 80 的正整数对为 (1,80)、(2,40)、(4,20)、(5,16)、(8,10)。两对合计需为 39；只有 (5,16) 与 (8,10) 的和为 39。最大数为 16，选 C。",
    "hints": [
      "列出 80 的正因数配对。",
      "把每对的两个数相加。",
      "寻找两对的和合计 39，得到 21+18。"
    ],
    "methods": [
      "穷举有限因数对并比较组合和。",
      "乘积固定时，因数配对数量有限，列表检查可靠。"
    ],
    "tip": "四个正整数和为 36，分成两对且每对乘积都为 80，最大数是多少？",
    "teacherTip": "四个正整数和为 36，分成两对且每对乘积都为 80，最大数是多少？",
    "tagsEditable": true
  },
  {
    "no": 22,
    "points": 5,
    "grade": "5-6",
    "text": "Jane bought some books. For the first book, she paid half of her money and 1 dollar more. For the second book, she paid half of the remaining money and 2 dollars more. Finally, for the third book, she paid half of the remaining money and 3 dollars more, thus spending all of her money. How much did the three books cost altogether?",
    "options": {
      "A": "36 dollars",
      "B": "45 dollars",
      "C": "34 dollars",
      "D": "65 dollars",
      "E": "100 dollars"
    },
    "answer": "C",
    "title": "逆向分析余额",
    "tags": [
      "方程",
      "应用题"
    ],
    "solution": "设最初有 M 元。三次支出分别为 M/2+1、(M/2−1)/2+2=M/4+1.5、以及 (M/4−2.5)/2+3=M/8+1.75。总支出等于 M，故 7M/8+4.25=M，M=34 元，选 C。",
    "hints": [
      "从第一本后剩下的钱写成原钱的一半减 1。",
      "第二次后余额再减半并减 2。",
      "可设初始金额 M，列总支出等于 M。"
    ],
    "methods": [
      "也可以从最后一本往前反推余额。",
      "“一半再多若干”要先对剩余金额取半，再加固定额。"
    ],
    "tip": "若初始有 40 元，按“半数多1、半数多2、半数多3”买三样后是否恰好花完？",
    "teacherTip": "若初始有 40 元，按“半数多1、半数多2、半数多3”买三样后是否恰好花完？",
    "tagsEditable": true
  },
  {
    "no": 23,
    "points": 5,
    "grade": "5-6",
    "text": "On Jump Street there are 9 houses in a row. At least one person lives in each house. Any two neighboring houses together are inhabited by at most 6 people. What is the largest number of people that could be living on Jump Street?",
    "options": {
      "A": "23",
      "B": "25",
      "C": "27",
      "D": "29",
      "E": "31"
    },
    "answer": "D",
    "title": "相邻约束下的最大和",
    "tags": [
      "数列",
      "最值"
    ],
    "solution": "每对相邻房屋总人数不超过 6。为最大化总人数，可交替安排 5 人、1 人，使每对相邻之和为 6。9 栋中有 5 栋放 5 人、4 栋放 1 人，总数 25+4=29，选 D。",
    "hints": [
      "每栋至少 1 人。",
      "若一栋住 5 人，邻屋最多只能住 1 人。",
      "交替 5、1 排列可让每对相邻和都达到 6。"
    ],
    "methods": [
      "将相邻不等式 (a_i+a_{i+1}≤6) 交错相加。",
      "取值交替能同时让多个相邻约束取等号。"
    ],
    "tip": "7 栋房屋满足同一条件，最多可住多少人？",
    "teacherTip": "7 栋房屋满足同一条件，最多可住多少人？",
    "tagsEditable": true
  },
  {
    "no": 24,
    "points": 5,
    "grade": "5-6",
    "text": "The number 100 is multiplied either by 2 or by 3, then the result is increased either by 1 or by 2, and then the new result is divided either by 3 or by 4. The final result is a natural number. What is this final result?",
    "options": {
      "A": "50",
      "B": "51",
      "C": "67",
      "D": "68",
      "E": "There is more than one possible final result"
    },
    "answer": "C",
    "title": "运算顺序与整除",
    "tags": [
      "数与运算",
      "逻辑推理"
    ],
    "solution": "先得到 200 或 300。200+1=201 可被 3 整除，得 67；其他 200/300 加 1 或 2 后除以 3 或 4 都不是自然数。因此唯一结果是 67，选 C。",
    "hints": [
      "列出第一步的 200、300。",
      "各加 1 或 2，检查是否能被 3 或 4 整除。",
      "只有 201÷3=67 是整数。"
    ],
    "methods": [
      "把所有有限组合逐一枚举并作整除检验。",
      "按题目指定的顺序完成运算，最后筛选自然数。"
    ],
    "tip": "若将 100 先乘 2 或 3、加 1 或 2，再除以 5 或 6，列出自然数结果。",
    "teacherTip": "若将 100 先乘 2 或 3、加 1 或 2，再除以 5 或 6，列出自然数结果。",
    "tagsEditable": true
  },
  {
    "no": 25,
    "points": 5,
    "grade": "5-6",
    "text": "In a 4-digit number abcd, the digits a<b<c<d. What is the largest possible difference bd−ac for 2-digit numbers bd and ac?",
    "options": {
      "A": "86",
      "B": "61",
      "C": "56",
      "D": "50",
      "E": "16"
    },
    "answer": "B",
    "title": "递增数字构造最大差",
    "tags": [
      "位值",
      "最值"
    ],
    "solution": "bd−ac=10(b−a)+(d−c)。要让十位差尽量大，a=1、b 尽量大，同时还需 b<c<d；取 b=7,c=8,d=9 得 70+9−18=61。若 b≤6，差不超过 50 多；所以最大为 61，选 B。",
    "hints": [
      "先把两个两位数展开成十位和个位。",
      "主要贡献来自 10(b−a)。",
      "因为 b<c<d，最大的可行尾部是 7,8,9，且 a=1。"
    ],
    "methods": [
      "枚举严格递增的四位数字组合，比较差值。",
      "十位数字差的权重是个位差的十倍，优先最大化它。"
    ],
    "tip": "若四个互不相同的正整数数字满足 a<b<c<d，求 bd−ac 的最小值。",
    "teacherTip": "若四个互不相同的正整数数字满足 a<b<c<d，求 bd−ac 的最小值。",
    "tagsEditable": true
  },
  {
    "no": 26,
    "points": 5,
    "grade": "5-6",
    "text": "Mary wrote a number on each face of a cube. For each vertex, she added the numbers on its three faces. The sums at vertices C, D and E are 14, 16 and 24, respectively. What number did she obtain for vertex F?",
    "options": {
      "A": "15",
      "B": "19",
      "C": "22",
      "D": "24",
      "E": "26"
    },
    "answer": "C",
    "title": "立方体顶点面和",
    "tags": [
      "空间想象",
      "方程"
    ],
    "solution": "C、D 两顶点共用两面，顶点和之差 16−14=2 等于左面与右面的数字差。E、F 同样共用两面，因此 24−F=2，得 F=22，选 C。",
    "hints": [
      "写出 C、D 两顶点的三面和。",
      "相减后，共有的两面抵消，只剩下两侧面的差 2。",
      "E 与 F 的和也相差 2，所以 F=24−2=22。"
    ],
    "methods": [
      "用六个面的未知数列顶点和方程，再相减消元。",
      "相邻顶点共享两面，比较顶点和能消去共同项。"
    ],
    "tip": "若 E 顶点和为 30，且相邻顶点和相差 4，F 的顶点和是多少？",
    "teacherTip": "若 E 顶点和为 30，且相邻顶点和相差 4，F 的顶点和是多少？",
    "tagsEditable": true,
    "figure": "assets/2015-g5-6/q26.png",
    "figureAlt": "Original figure for question 26: 立方体顶点面和"
  },
  {
    "no": 27,
    "points": 5,
    "grade": "5-6",
    "text": "Jane is traveling on a train in which each car has the same number of compartments. She is sitting in the 7th car, in the 50th compartment from the engine. How many compartments are there in each car?",
    "options": {
      "A": "7",
      "B": "8",
      "C": "9",
      "D": "10",
      "E": "12"
    },
    "answer": "B",
    "title": "分组位置范围",
    "tags": [
      "数论",
      "应用题"
    ],
    "solution": "设每车有 n 个车厢格。第 7 车的第 50 格意味着 6n<50≤7n。由此 n≥8 且 n≤8，唯一 n=8，选 B。",
    "hints": [
      "前六节车厢共有 6n 格。",
      "第七节车厢格号在 6n+1 到 7n。",
      "让 50 落入此区间，得到 n=8。"
    ],
    "methods": [
      "列双重不等式 6n<50≤7n。",
      "把总序号拆成前面完整车厢和当前车厢位置。"
    ],
    "tip": "若第 5 车的第 37 格，且每车格数相同，每车有多少格？",
    "teacherTip": "若第 5 车的第 37 格，且每车格数相同，每车有多少格？",
    "tagsEditable": true
  },
  {
    "no": 28,
    "points": 5,
    "grade": "5-6",
    "text": "Using only one color, in how many ways can you color 3 different cells in the strip shown below so that no 2 neighboring cells are colored?",
    "options": {
      "A": "6",
      "B": "7",
      "C": "8",
      "D": "9",
      "E": "10"
    },
    "answer": "E",
    "title": "不相邻位置组合",
    "tags": [
      "组合",
      "计数"
    ],
    "solution": "在 7 格中选 3 格且不相邻。设所选位置 i₁<i₂<i₃，并要求相邻位置至少差 2。将间隔压缩后等价于从 5 个位置选 3 个，共 C(5,3)=10 种，选 E。",
    "hints": [
      "先把 3 个已涂格之间强制留出空格。",
      "七格中去掉两格间的两个必空位后，还剩 5 个可选位置。",
      "从 5 格中选 3 格，有 10 种。"
    ],
    "methods": [
      "使用组合公式 C(n−k+1,k)。",
      "不相邻选择可以通过预留间隔转为普通组合。"
    ],
    "tip": "在 8 格中选择 3 格且互不相邻，有多少种？",
    "teacherTip": "在 8 格中选择 3 格且互不相邻，有多少种？",
    "tagsEditable": true,
    "figure": "assets/2015-g5-6/q28.png",
    "figureAlt": "Original figure for question 28: 不相邻位置组合"
  },
  {
    "no": 29,
    "points": 5,
    "grade": "5-6",
    "text": "Four points lie on a line. The distances between them are, in increasing order: 2, 3, k, 11, 12, 14. What is the value of k?",
    "options": {
      "A": "5",
      "B": "6",
      "C": "7",
      "D": "8",
      "E": "9"
    },
    "answer": "E",
    "title": "四点线段距离关系",
    "tags": [
      "几何",
      "逻辑推理"
    ],
    "solution": "设四点从左到右的三个间隔为 a,b,c。六个距离是 a,b,c,a+b,b+c,a+b+c。最长总距为 14；三段短距为 2、3、k，另三距为 11、12、14。令三段为 2、3、k，需有两个相邻和为 11、12，且总和 14，解得 k=9（例如 2+9=11、3+9=12）。选 E。",
    "hints": [
      "四点会产生 3 个相邻间隔和 3 个组合距离。",
      "最大的距离 14 是三个间隔之和。",
      "2、3、k 是相邻间隔，另两个相邻间隔和为 11、12，得到 k=9。"
    ],
    "methods": [
      "尝试三段间隔的排列，并核对六个和的排序。",
      "四个点的六个距离并非独立，必须满足加法关系。"
    ],
    "tip": "四点间隔为 1、4、7 时，六个点对距离从小到大是什么？",
    "teacherTip": "四点间隔为 1、4、7 时，六个点对距离从小到大是什么？",
    "tagsEditable": true
  },
  {
    "no": 30,
    "points": 5,
    "grade": "5-6",
    "text": "Basil used small cubes with side length 1 to construct a cube with side length 4. He painted 3 faces of the big cube red and the other 3 faces blue. After he finished, there was no small cube with 3 red faces. How many small cubes have both red and blue faces?",
    "options": {
      "A": "0",
      "B": "8",
      "C": "12",
      "D": "24",
      "E": "32"
    },
    "answer": "D",
    "title": "立方体表面着色计数",
    "tags": [
      "立方体",
      "计数"
    ],
    "solution": "大立方体每个顶点相邻 3 个面。没有小方块有 3 个红面，说明每个顶点不能同时接触三个红面；三红面必须按题图方式分布，使 8 个顶点小方块只带一种颜色。每条红蓝交界棱上有 4 个小方块，其中 2 个同时接触红蓝面。共有 12 条棱，因此 12×2=24 个同时有红蓝面的方块，选 D。",
    "hints": [
      "先分类顶点、棱中和面内部的小方块。",
      "两种颜色同时出现的位置只能在红蓝交界棱上。",
      "每条交界棱有 2 个内部小方块符合，12 条棱共 24 个。"
    ],
    "methods": [
      "沿大立方体 12 条棱计数，并排除端点小方块。",
      "先识别红蓝交界边，再数每边内部的单位小立方体。"
    ],
    "tip": "边长为 5 的大立方体以相同方式涂色，每条红蓝交界棱有 3 个内部小方块，且交界棱仍为 12 条，符合条件时共有多少？",
    "teacherTip": "边长为 5 的大立方体以相同方式涂色，每条红蓝交界棱有 3 个内部小方块，且交界棱仍为 12 条，符合条件时共有多少？",
    "tagsEditable": true,
    "figure": "assets/2015-g5-6/q30.png",
    "figureAlt": "Original figure for question 30: 立方体表面着色计数"
  }
];
Object.assign(KANGAROO_EXTENSIONS,{
  "2015-g5-6-1": {
    "text": "把图形分成 6 个相等部分，涂其中 4 个。",
    "answer": "4/6=2/3，因此涂色部分占整图的 2/3。",
    "solution": "用等分份数直接写出分数。",
    "change": "改变数值或图形条件，继续使用同一核心思路。"
  },
  "2015-g5-6-2": {
    "text": "旋转后，字母序列应逆序排列，且每个字母也要转向。",
    "answer": "逐片检查旋转后的字母位置与方向即可判断匹配。",
    "solution": "在纸上描下大伞并转半圈，再与小伞比对。",
    "change": "改变数值或图形条件，继续使用同一核心思路。"
  },
  "2015-g5-6-3": {
    "text": "棋盘格本身已满足相邻异色，不需要重涂。",
    "answer": "先检查每一条共边关系；棋盘涂色令所有邻格自动不同。",
    "solution": "将相邻关系画成图，用两色交替着色。",
    "change": "改变数值或图形条件，继续使用同一核心思路。"
  },
  "2015-g5-6-4": {
    "text": "4×10+6×5=70 枚。",
    "answer": "分别求每日组和隔日组的总数，再相加。",
    "solution": "用“每只次数×只数”分组求和。",
    "change": "改变数值或图形条件，继续使用同一核心思路。"
  },
  "2015-g5-6-5": {
    "text": "小格边长为 3 cm，折线长 9×3=27 cm。",
    "answer": "先求单格边长，再数线段总长度。",
    "solution": "区分方格面积和边长单位。",
    "change": "改变数值或图形条件，继续使用同一核心思路。"
  },
  "2015-g5-6-6": {
    "text": "17/12<18/12=3/2，故为 17/12。",
    "answer": "把 3/2 化成分母为 12 的分数再比较。",
    "solution": "先通分，避免小数近似带来的误判。",
    "change": "改变数值或图形条件，继续使用同一核心思路。"
  },
  "2015-g5-6-7": {
    "text": "(18+4)÷2=11 kg。",
    "answer": "较大重量等于总和加差再除以 2。",
    "solution": "画出总重量条形图，并标出两者相差部分。",
    "change": "改变数值或图形条件，继续使用同一核心思路。"
  },
  "2015-g5-6-8": {
    "text": "带花植物 8 株用 16 片叶，余 30 片是 6 株纯叶植物，共 14 株。",
    "answer": "先求带花组，再求纯叶组。",
    "solution": "用已知花数锁定带花植物，再计算剩余叶片。",
    "change": "改变数值或图形条件，继续使用同一核心思路。"
  },
  "2015-g5-6-9": {
    "text": "25+25−43=7 cm。",
    "answer": "两倍纸带长减拼后长就是重叠长。",
    "solution": "画两条线段，标出重叠区域。",
    "change": "改变数值或图形条件，继续使用同一核心思路。"
  },
  "2015-g5-6-10": {
    "text": "沿一条边连接会新增 4 条外边、遮住 2 条，总周长增加 2。",
    "answer": "用新增边与被遮住边的差计算变化。",
    "solution": "共享一条边时周长变化为 4−2=2。",
    "change": "改变数值或图形条件，继续使用同一核心思路。"
  },
  "2015-g5-6-11": {
    "text": "29 或 19、28 的数字和都为 11，因此最大为 11。",
    "answer": "枚举 01–31 或按十位分组比较。",
    "solution": "候选日期必须符合每月天数。",
    "change": "改变数值或图形条件，继续使用同一核心思路。"
  },
  "2015-g5-6-12": {
    "text": "短边为 0.75 cm，长边为 1.5 cm，AB=3 cm。",
    "answer": "短边是大矩形高的一半，AB=长边+两个短边。",
    "solution": "把全等矩形的边用 a、b 表示后再相加。",
    "change": "改变数值或图形条件，继续使用同一核心思路。"
  },
  "2015-g5-6-13": {
    "text": "不能；正方形有四条边，完整四棱锥需要四个侧三角形。",
    "answer": "底面的每条边都对应一个侧面。",
    "solution": "数底边与侧面，并检查折起后侧棱能否闭合。",
    "change": "改变数值或图形条件，继续使用同一核心思路。"
  },
  "2015-g5-6-14": {
    "text": "生日还没到，每人出生年+年龄=2024，合计4048。",
    "answer": "生日未过时，年龄对应上一历年。",
    "solution": "先判断今年生日已过还是未过。",
    "change": "改变数值或图形条件，继续使用同一核心思路。"
  },
  "2015-g5-6-15": {
    "text": "3×5=15，除以7余1。",
    "answer": "把余数乘3后再取模。",
    "solution": "先丢掉整倍数，只保留余数计算。",
    "change": "改变数值或图形条件，继续使用同一核心思路。"
  },
  "2015-g5-6-16": {
    "text": "(1,18),(2,9),(3,6) 对应周长 38、22、18。",
    "answer": "列出因数对后逐一代入 2(a+b)。",
    "solution": "因数配对无需重复交换顺序。",
    "change": "改变数值或图形条件，继续使用同一核心思路。"
  },
  "2015-g5-6-17": {
    "text": "必须为蓝色。",
    "answer": "每个三角形恰好使用红、绿、蓝各一种。",
    "solution": "用共享边把局部颜色条件逐步传递。",
    "change": "改变数值或图形条件，继续使用同一核心思路。"
  },
  "2015-g5-6-18": {
    "text": "最多可取红梨6个和黄苹果3个，共9个而不配对；第10个保证配对。",
    "answer": "每色各选数量较多的单一类型，求无匹配最大值。",
    "solution": "鸽巢原理：最大安全数加一就是保证数。",
    "change": "改变数值或图形条件，继续使用同一核心思路。"
  },
  "2015-g5-6-19": {
    "text": "一步即可，因为马的一步正是横2竖1或横1竖2。",
    "answer": "列举每步允许的坐标变化。",
    "solution": "距离直线近不代表跳棋步数少，需按合法位移检查。",
    "change": "改变数值或图形条件，继续使用同一核心思路。"
  },
  "2015-g5-6-20": {
    "text": "仍有 Z=1，Y=9，X=6。",
    "answer": "先用数值范围锁定 Z，再解线性等式。",
    "solution": "字母代表数字，前导位非零且字母互异。",
    "change": "改变数值或图形条件，继续使用同一核心思路。"
  },
  "2015-g5-6-21": {
    "text": "两对可分别取 (8,10) 与 (8,10)，四数和为 36，且最大数为 10。",
    "answer": "列出 80 的因数对，检查两对和能否为 36。",
    "solution": "检查乘积和总和条件，并允许四个数在不同位置重复出现。",
    "change": "改变数值或图形条件，继续使用同一核心思路。"
  },
  "2015-g5-6-22": {
    "text": "三次后按递推余额计算，初始40时第三次后余额为−0.75，不能恰好花完。",
    "answer": "递推：余额新值=旧余额/2−本次多付额。",
    "solution": "从前向后列余额等式可避免把半数的对象弄错。",
    "change": "改变数值或图形条件，继续使用同一核心思路。"
  },
  "2015-g5-6-23": {
    "text": "交替 5,1,5,1,5,1,5，总数 23 人。",
    "answer": "较长序列中大人数房屋放在奇数位置。",
    "solution": "检查每一对相邻房屋而不是只看总平均。",
    "change": "改变数值或图形条件，继续使用同一核心思路。"
  },
  "2015-g5-6-24": {
    "text": "200+?÷?：202/...? 枚举可得 201?不行；302? none. 200+? 201/...?无；202/...? 200/...? 300+? 301/..? 302/..? 无自然数结果。",
    "answer": "系统枚举乘数、加数和除数的组合并检验整除。",
    "solution": "有限分支问题可用表格避免遗漏。",
    "change": "改变数值或图形条件，继续使用同一核心思路。"
  },
  "2015-g5-6-25": {
    "text": "取连续数字 1,2,3,4 得 bd−ac=24−13=11。",
    "answer": "bd−ac=10(b−a)+(d−c)，两项各至少为 10 和 1，连续数字可达到 11。",
    "solution": "最小差由两个正间距同时取 1 达到。",
    "change": "改变数值或图形条件，继续使用同一核心思路。"
  },
  "2015-g5-6-26": {
    "text": "30−4=26。",
    "answer": "利用相邻顶点和相减后只留下一个固定面差。",
    "solution": "标出每个顶点接触的三张面，避免混淆共享面。",
    "change": "改变数值或图形条件，继续使用同一核心思路。"
  },
  "2015-g5-6-27": {
    "text": "4n<37≤5n，得 n=8。",
    "answer": "根据第 k 节车和总序号列范围不等式。",
    "solution": "边界用严格小于和小于等于区分。",
    "change": "改变数值或图形条件，继续使用同一核心思路。"
  },
  "2015-g5-6-28": {
    "text": "C(8−3+1,3)=C(6,3)=20 种。",
    "answer": "先为每个选中格之间预留空格。",
    "solution": "位置组合需区分不同格子，不能只看颜色排列。",
    "change": "改变数值或图形条件，继续使用同一核心思路。"
  },
  "2015-g5-6-29": {
    "text": "1,4,5,7,11,12。",
    "answer": "列出三个单段、两个相邻段和及总和。",
    "solution": "把所有点对距离表示为相邻间隔的和。",
    "change": "改变数值或图形条件，继续使用同一核心思路。"
  },
  "2015-g5-6-30": {
    "text": "12×3=36 个。",
    "answer": "交界棱内部单位块数为边长减 2。",
    "solution": "确认顶点的颜色限制与具体涂色方案相容后再数棱。",
    "change": "改变数值或图形条件，继续使用同一核心思路。"
  }
});
const T2015G56=[
"先让学生依据等分份数写出阴影分数，再用面积而不是边长比较。","引导学生在纸上整体旋转大伞，并逐项核对字母次序和方向。","先找出所有相邻同色冲突，再说明为何至少要分别改动两个格子。","强调“隔天”在 10 天内出现 5 次，并与每日组分开计数。","提醒学生先把面积单位换成边长，再沿粗线数单位边。","对比分子与分母两倍，帮助学生迅速判断分数和 2 的大小。","可用线段图表现总和与差，防止把 2 kg 的差平均错。","先由花数确定带花植物，再利用剩余叶片求另一类数量。","把拼接画成线段图，明确重叠段只需减去一次。","让学生用外露单位边计周长，并与“总边数减共边”互相验证。","讨论月份和日期的数字和上界后，再检查达到上界的日期是否真实存在。","用 a、b 表示小矩形的短边和长边，标注图中重复出现的边。","折叠展开图时追踪四个侧三角形的顶点，检查是否重叠或留缝。","请学生先判断生日已过，再使用出生年份与年龄的关系。","鼓励把未知数写成 9k+7，突出余数运算中的整倍数可忽略。","完整列出面积 12 的因数对，避免遗漏可行边长。","从已知着色的三角形开始，把颜色限制沿共享边逐步传递。","先构造不会出现目标配对的最多取法，再加一件应用抽屉原理。","先把起点和目标表示成坐标，再排除一、两步并给出三步路线。","把重复字母改写成 2X+11Y=111Z，再先利用数值范围确定 Z。","让学生列出乘积为 80 的因数对，并以组合求和验证答案。","建议从最终余额反推，也可设初始金额列方程作第二种核验。","讨论为何人数要交替取大、小值，才能同时满足每一对相邻房屋。","把所有乘、加、除的有限组合列成表，逐一筛查整除条件。","比较十位差和个位差在表达式中的权重，说明为何要先最大化 b−a。","在立方体图上圈出相邻顶点共享的两面，通过相减消去共同项。","将第七车的区间写成 6n<50≤7n，注意两端不等号的来源。","先把不相邻条件转成强制空格，再使用组合数计数。","让学生把六个点对距离写成三个间隔及其和，看到这些距离并非独立。","按顶点、棱上和面内部分类，重点数红蓝交界棱上的小立方体。"
];
KANGAROO_DATA["2015-g5-6"].forEach((q,i)=>{const e=KANGAROO_EXTENSIONS[`2015-g5-6-${q.no}`];const prompt=q.tip;const priorText=e.text,priorAnswer=e.answer,priorSolution=e.solution;q.tip=T2015G56[i];q.teacherTip=T2015G56[i];e.text=prompt;e.answer=priorText;e.solution=`${priorText} ${priorAnswer}`;e.method=priorSolution;e.change='改变数值或图形条件，继续使用同一核心思路。';});
KANGAROO_EXTENSIONS['2015-g5-6-1']={text:'把一个图形平均分成 6 份并涂 4 份。涂色面积占整图几分之几？',answer:'4/6=2/3。',solution:'4 个涂色部分占 6 个等份，所以涂色部分为 4/6，约分为 2/3。',method:'先写出涂色份数占总份数的分数，再约分。',change:'改变等分总数或涂色份数，练习分数表示与约分。'};
KANGAROO_EXTENSIONS['2015-g5-6-30']={text:'边长为 5 的大立方体表面按题目条件涂色，且没有小方块有 3 个红面。有多少小方块同时接触红色面和蓝色面？',answer:'32 个。',solution:'8 个顶点小方块各接触红、蓝两色；另有 8 条红蓝交界棱，每条棱上有 5−2=3 个不在顶点的小方块。因此共有 8+8×3=32 个。',method:'先数顶点块，再数红蓝交界棱上的内部块。',change:'立方体边长变化时，顶点贡献仍为 8；棱上每条贡献边长减 2。'};
