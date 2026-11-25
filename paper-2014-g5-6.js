// Math Kangaroo 2014 Grade 5–6. Transcribed and checked against the local original paper.
KANGAROO_DATA["2014-g5-6"]=[
  {
    "no": 1,
    "points": 3,
    "grade": "5-6",
    "text": "Arnold spelled KANGAROO with cards showing one letter at a time. Some cards were rotated. By turning the K card back by 90° twice he can correct the letter K, and by turning the first A card once he can correct the first A (see the figures). How many times does he need to rotate by 90° for all letters to be correct?",
    "options": {
      "A": "4",
      "B": "5",
      "C": "6",
      "D": "7",
      "E": "8"
    },
    "answer": "C",
    "title": "旋转字母卡",
    "tags": [
      "旋转",
      "计数"
    ],
    "solution": "K 要转 2 次；第一个 A 转 1 次；N 横躺着要转 1 次；G 和两个 O 无需转；第二个 A 倒置要转 2 次；R 已正确。共 2+1+1+2=6 次，选 C。",
    "hints": [
      "逐张查看卡片的朝向。",
      "区分旋转一次、两次和不需旋转的字母。",
      "只有 K、第一张 A、N 和第二张 A 需要转动。"
    ],
    "methods": [
      "把每张卡片转到正确方向后计数。",
      "直接按旋转次数分类求和。"
    ],
    "tip": "让学生先说明哪些字母旋转后仍保持不变，避免把 O 也计入。",
    "teacherTip": "让学生先说明哪些字母旋转后仍保持不变，避免把 O 也计入。",
    "tagsEditable": true,
    "figure": "assets/2014-g5-6/q1.png",
    "figureAlt": "Original figure for question 1: 旋转字母卡"
  },
  {
    "no": 2,
    "points": 3,
    "grade": "5-6",
    "text": "A cake weighs 900 g. Paul cuts it into 4 pieces. The biggest piece weighs as much as the 3 other pieces weigh together. What is the weight of the biggest piece?",
    "options": {
      "A": "250 g",
      "B": "300 g",
      "C": "400 g",
      "D": "450 g",
      "E": "600 g"
    },
    "answer": "D",
    "title": "总量平分",
    "tags": [
      "等量关系",
      "数与运算"
    ],
    "solution": "最大块的重量等于另外三块的总重量，因此它占整块蛋糕重量的一半。900÷2=450 g，选 D。",
    "hints": [
      "把蛋糕分成最大块和其余三块两组。",
      "两组重量相同。",
      "把 900 g 平分成两份。"
    ],
    "methods": [
      "设最大块为 x，则 x=900−x。",
      "利用两组等重直接平分总量。"
    ],
    "tip": "强调“与其余三块合计等重”描述的是两组相等，不是四块大小相同。",
    "teacherTip": "强调“与其余三块合计等重”描述的是两组相等，不是四块大小相同。",
    "tagsEditable": true
  },
  {
    "no": 3,
    "points": 3,
    "grade": "5-6",
    "text": "Two large rings, one gray and one white, are linked together. Peter, in front of the rings, sees them as shown. What does Paul, behind the rings, see?",
    "options": {
      "A": "Picture A",
      "B": "Picture B",
      "C": "Picture C",
      "D": "Picture D",
      "E": "Picture E"
    },
    "answer": "D",
    "title": "前后视角与穿套关系",
    "tags": [
      "空间想象",
      "图形识别"
    ],
    "solution": "从背面观察相当于把左右反过来。白环从 Peter 看在左侧，Paul 看时会出现在右侧；重叠处的前后遮挡关系也反转，符合图 D。",
    "hints": [
      "先确定从背面看时左右会互换。",
      "再判断哪个环在交叠处位于前面。",
      "同时满足左右镜像和遮挡反转的是 D。"
    ],
    "methods": [
      "把图形水平镜像并交换前后层次。",
      "用两根不同颜色的纸环实际套放，绕到背面观察。"
    ],
    "tip": "可用纸环或两条纸带现场演示，单纯左右镜像不足以处理遮挡。",
    "teacherTip": "可用纸环或两条纸带现场演示，单纯左右镜像不足以处理遮挡。",
    "tagsEditable": true,
    "figure": "assets/2014-g5-6/q3.png",
    "figureAlt": "Original figure for question 3: 前后视角与穿套关系"
  },
  {
    "no": 4,
    "points": 3,
    "grade": "5-6",
    "text": "In the addition problem to the right, some digits have been replaced by stars. What is the sum of the missing digits?",
    "options": {
      "A": "0",
      "B": "1",
      "C": "2",
      "D": "3",
      "E": "10"
    },
    "answer": "A",
    "title": "竖式进位判断",
    "tags": [
      "数位",
      "逻辑推理"
    ],
    "solution": "个位数 2+3+4=9，不向十位进位；百位 1+1+1=3，也没有进位。因此各位原有数字直接组成 309，星号均为 0，缺失数字和为 0，选 A。",
    "hints": [
      "从个位开始检查是否进位。",
      "继续检查十位、百位能否产生进位。",
      "没有进位时，星号处都不需要补数。"
    ],
    "methods": [
      "逐列使用竖式加法。",
      "把已知数相加，与 309 比较差值。"
    ],
    "tip": "提醒学生进位只由当前列的和决定，不能仅凭星号外观猜测。",
    "teacherTip": "提醒学生进位只由当前列的和决定，不能仅凭星号外观猜测。",
    "tagsEditable": true,
    "figure": "assets/2014-g5-6/q4.png",
    "figureAlt": "Original figure for question 4: 竖式进位判断"
  },
  {
    "no": 5,
    "points": 3,
    "grade": "5-6",
    "text": "What is the difference between the smallest 5-digit number and the largest 4-digit number?",
    "options": {
      "A": "1",
      "B": "10",
      "C": "1111",
      "D": "9000",
      "E": "9900"
    },
    "answer": "A",
    "title": "位数边界",
    "tags": [
      "数位",
      "数与运算"
    ],
    "solution": "最小五位数是 10000，最大四位数是 9999。两者差为 10000−9999=1，选 A。",
    "hints": [
      "先写出最小的五位数。",
      "再写出最大的四位数。",
      "相邻位数边界相差 1。"
    ],
    "methods": [
      "直接构造两个边界数相减。",
      "用 10⁴ 与 10⁴−1 表示。"
    ],
    "tip": "让学生解释为什么 9999 是四位数中的最大值，而不是只记答案。",
    "teacherTip": "让学生解释为什么 9999 是四位数中的最大值，而不是只记答案。",
    "tagsEditable": true
  },
  {
    "no": 6,
    "points": 3,
    "grade": "5-6",
    "text": "A square with a perimeter of 48 cm is cut into 2 pieces. The two pieces are then placed next to each other to make a rectangle. What is the perimeter of the rectangle?",
    "options": {
      "A": "24 cm",
      "B": "30 cm",
      "C": "48 cm",
      "D": "60 cm",
      "E": "72 cm"
    },
    "answer": "D",
    "title": "剪拼图形周长",
    "tags": [
      "周长",
      "面积"
    ],
    "solution": "正方形边长为 48÷4=12 cm。按图切成两半后，拼成的长方形边为 24 cm 和 6 cm，周长为 2(24+6)=60 cm，选 D。",
    "hints": [
      "先由正方形周长求边长。",
      "图示把正方形切成两个相同长方形。",
      "拼接后长方形的边为 24 cm 和 6 cm。"
    ],
    "methods": [
      "标出剪开前后的长宽，再代入周长公式。",
      "计算拼接形成的新外边界长度。"
    ],
    "tip": "剪拼不会改变面积，但周长可能改变；要求学生沿新外边界逐段追踪。",
    "teacherTip": "剪拼不会改变面积，但周长可能改变；要求学生沿新外边界逐段追踪。",
    "tagsEditable": true,
    "figure": "assets/2014-g5-6/q6.png",
    "figureAlt": "Original figure for question 6: 剪拼图形周长"
  },
  {
    "no": 7,
    "points": 3,
    "grade": "5-6",
    "text": "Katrina has 38 matches. Using all the matches, she builds a triangle and a square. Each side of the triangle consists of 6 matches. How many matches are used for one side of the square?",
    "options": {
      "A": "4",
      "B": "5",
      "C": "6",
      "D": "7",
      "E": "8"
    },
    "answer": "B",
    "title": "火柴棒周长分配",
    "tags": [
      "周长",
      "数与运算"
    ],
    "solution": "三角形用 3×6=18 根，剩下 38−18=20 根组成正方形四边，每边 20÷4=5 根，选 B。",
    "hints": [
      "先求三角形三边共用多少根。",
      "用总数减去三角形用量。",
      "正方形四边长度相等，把余数平均分成四份。"
    ],
    "methods": [
      "按图形周长分别列乘法和除法。",
      "用 38=3×6+4s 解方程。"
    ],
    "tip": "让学生区分“每边 6 根”和“三角形总共 6 根”，先画边数再计算。",
    "teacherTip": "让学生区分“每边 6 根”和“三角形总共 6 根”，先画边数再计算。",
    "tagsEditable": true
  },
  {
    "no": 8,
    "points": 3,
    "grade": "5-6",
    "text": "The pearl necklace contains dark gray pearls and shiny white pearls. Alex wants to have 5 of the dark gray pearls. She can take pearls from either end of the necklace, and so she has to take some white pearls as well. What is the smallest number of white pearls Alex has to take?",
    "options": {
      "A": "2",
      "B": "3",
      "C": "4",
      "D": "5",
      "E": "6"
    },
    "answer": "B",
    "title": "串珠两端取数",
    "tags": [
      "逻辑推理",
      "计数"
    ],
    "solution": "从左端取到 5 颗深灰珠会带走 4 颗白珠；从右端取更划算。先从两端各取一颗深灰珠，再按解析图从左端补取一白一灰、右端补取两白两灰，可凑足 5 颗灰珠且只取 3 颗白珠，因此最少为 3，选 B。",
    "hints": [
      "先观察深灰珠在项链上的分布顺序。",
      "取珠只能从两端连续拿，不能跳过白珠。",
      "比较从左端、右端以及两端同时取时的白珠数。"
    ],
    "methods": [
      "逐步模拟两端取珠并记录灰珠与白珠数量。",
      "将每端取到第五颗灰珠前必经过的白珠计数。"
    ],
    "tip": "强调取珠顺序受项链排列约束，不能只按总数比例估计。",
    "teacherTip": "强调取珠顺序受项链排列约束，不能只按总数比例估计。",
    "tagsEditable": true,
    "figure": "assets/2014-g5-6/q8.png",
    "figureAlt": "Original figure for question 8: 串珠两端取数"
  },
  {
    "no": 9,
    "points": 3,
    "grade": "5-6",
    "text": "Harry participated in a broom flight contest which consisted of 5 laps. The times when Harry passed the starting point are shown in the table. Which lap took the shortest time?",
    "options": {
      "A": "The first",
      "B": "The second",
      "C": "The third",
      "D": "The fourth",
      "E": "The fifth"
    },
    "answer": "B",
    "title": "时间间隔比较",
    "tags": [
      "时间",
      "数据分析"
    ],
    "solution": "各圈用时依次为 31、28、34、35、29 分钟。最短的是第二圈，28 分钟，选 B。",
    "hints": [
      "用相邻两次经过起点的时间相减。",
      "依次求出五圈的时长。",
      "比较差值而不是比较经过起点的钟表时间。"
    ],
    "methods": [
      "制作圈次与时长表。",
      "用时间轴标注每圈的起止时刻。"
    ],
    "tip": "钟表跨小时相减时先换算成分钟，避免直接比较时刻数字。",
    "teacherTip": "钟表跨小时相减时先换算成分钟，避免直接比较时刻数字。",
    "tagsEditable": true,
    "figure": "assets/2014-g5-6/q9.png",
    "figureAlt": "Original figure for question 9: 时间间隔比较"
  },
  {
    "no": 10,
    "points": 3,
    "grade": "5-6",
    "text": "Ben's digital watch is not working properly. The three horizontal lines in the digit on the far right of the watch do not display. Ben is looking at his watch and the time has just changed from the one shown on the left to the one shown on the right. What time is it now?",
    "options": {
      "A": "12:40",
      "B": "12:42",
      "C": "12:44",
      "D": "12:47",
      "E": "12:49"
    },
    "answer": "C",
    "title": "数码钟缺段推理",
    "tags": [
      "逻辑推理",
      "时间"
    ],
    "solution": "缺失的是最右数字的三条横线。候选起始时刻为 12:41、12:43 或 12:47，对应下一分钟可能出现 12:42、12:44 或 12:48；只有 12:43 到 12:44 时，缺段前后显示图形符合题图，因此现在是 12:44，选 C。",
    "hints": [
      "列出哪些数字在去掉三条横线后可能显示成题图。",
      "利用时间恰好向前跳一分钟。",
      "比较可能的相邻数字变化，唯一吻合的是 43 到 44。"
    ],
    "methods": [
      "把七段数码管逐段画出并枚举时刻。",
      "由显示变化倒推前后两分钟的个位数字。"
    ],
    "tip": "把缺失的笔画画在透明片上遮住，能让数字显示问题变成可视化枚举。",
    "teacherTip": "把缺失的笔画画在透明片上遮住，能让数字显示问题变成可视化枚举。",
    "tagsEditable": true,
    "figure": "assets/2014-g5-6/q10.png",
    "figureAlt": "Original figure for question 10: 数码钟缺段推理"
  },
  {
    "no": 11,
    "points": 4,
    "grade": "5-6",
    "text": "Which tile must be added to the picture so that the light gray area is as large as the dark gray area?",
    "options": {
      "A": "A light gray square",
      "B": "A dark gray square",
      "C": "The quartered tile",
      "D": "The diagonal half-tile",
      "E": "It is impossible"
    },
    "answer": "E",
    "title": "面积平衡与拼片",
    "tags": [
      "面积",
      "逻辑推理"
    ],
    "solution": "图中浅灰面积为 5 个单位，深灰面积为 3 个单位。即使添加 1 个单位的深灰方块，深灰也只有 4，仍小于浅灰；其他可选拼片也不能恰好补足差额，因此不可能，选 E。",
    "hints": [
      "分别把浅灰和深灰面积换算为单位方格。",
      "计算两者相差多少面积。",
      "检查每种可添加拼片能否补足差值。"
    ],
    "methods": [
      "逐块数三角形与正方形面积。",
      "用浅灰减深灰，和候选拼片面积比较。"
    ],
    "tip": "面积题应先选定共同的单位，再处理半格或三角形拼片。",
    "teacherTip": "面积题应先选定共同的单位，再处理半格或三角形拼片。",
    "tagsEditable": true,
    "figure": "assets/2014-g5-6/q11.png",
    "figureAlt": "Original figure for question 11: 面积平衡与拼片"
  },
  {
    "no": 12,
    "points": 4,
    "grade": "5-6",
    "text": "Henry and John started walking from the same point. Henry went 1 km north, 2 km west, 4 km south, and finally 1 km west. John went 1 km east, 4 km south, and 4 km west. Which of the following must be the final part of John's walk in order to reach the point where Henry ended his walk?",
    "options": {
      "A": "He has already reached the same point",
      "B": "1 km north",
      "C": "1 km north-west",
      "D": "More than 1 km north-west",
      "E": "1 km west"
    },
    "answer": "B",
    "title": "方向位移合成",
    "tags": [
      "坐标",
      "应用题"
    ],
    "solution": "以起点为原点。Henry 的净位移为向西 3 km、向南 3 km；John 当前在向西 3 km、向南 4 km 处。因此 John 只需向北走 1 km，选 B。",
    "hints": [
      "把向北、南、东、西分别记为带正负号的位移。",
      "分别合并 Henry 和 John 的东西向、南北向移动。",
      "两人东西位置相同，John 比 Henry 多向南 1 km。"
    ],
    "methods": [
      "用坐标表示终点并作向量相减。",
      "在方格纸上画两条路径并比较终点。"
    ],
    "tip": "行程方向题只需计算净位移，不必追踪每一步实际路线长度。",
    "teacherTip": "行程方向题只需计算净位移，不必追踪每一步实际路线长度。",
    "tagsEditable": true,
    "figure": "assets/2014-g5-6/q12.png",
    "figureAlt": "Original figure for question 12: 方向位移合成"
  },
  {
    "no": 13,
    "points": 4,
    "grade": "5-6",
    "text": "At summer camp, 7 children eat ice cream every day, 9 children eat ice cream only every other day, and the rest of the children do not eat ice cream at all. Yesterday, 13 children ate ice cream. How many children will eat ice cream today?",
    "options": {
      "A": "7",
      "B": "8",
      "C": "9",
      "D": "10",
      "E": "It cannot be determined"
    },
    "answer": "D",
    "title": "隔日活动人数",
    "tags": [
      "周期",
      "逻辑推理"
    ],
    "solution": "昨天吃冰淇淋的 13 人中，7 人是每天都吃的，因此有 6 名隔日组昨天吃了。隔日组共 9 人，今天轮到其余 3 人；再加每天吃的 7 人，共 10 人，选 D。",
    "hints": [
      "先从昨天总人数中减去每天都吃的 7 人。",
      "得到昨天轮到的隔日组人数。",
      "隔日组总共 9 人，今天轮到剩下的人。"
    ],
    "methods": [
      "用总人数减去昨天已参与的隔日组成员。",
      "按两天一轮建立人数表。"
    ],
    "tip": "注意‘其余儿童不吃’是第三组，不影响隔日组的轮换计算。",
    "teacherTip": "注意‘其余儿童不吃’是第三组，不影响隔日组的轮换计算。",
    "tagsEditable": true
  },
  {
    "no": 14,
    "points": 4,
    "grade": "5-6",
    "text": "Kangaroos A, B, C, D and E are sitting in that order, clockwise, around a round table. Exactly when the bell rings, each kangaroo except for one exchanges its place with a neighbor. The resulting clockwise order, starting with A, is A, E, B, D, C. Which kangaroo did not move?",
    "options": {
      "A": "A",
      "B": "B",
      "C": "C",
      "D": "D",
      "E": "E"
    },
    "answer": "B",
    "title": "圆桌相邻交换",
    "tags": [
      "排列",
      "逻辑推理"
    ],
    "solution": "逐一假设某只袋鼠未动，并检查其他袋鼠能否各与相邻座位交换。假设 B 未动时，交换后顺时针次序正好为 A,E,B,D,C；其余假设均不符合，因此 B 没有移动，选 B。",
    "hints": [
      "圆桌上只允许与相邻者交换座位。",
      "先固定起始顺序，再尝试未移动者。",
      "假设 B 未动可得到题目给出的次序。"
    ],
    "methods": [
      "对五种未移动假设逐一列新顺序。",
      "沿圆周标记每只袋鼠原位和目标位。"
    ],
    "tip": "圆桌排列要固定观察方向和起点，否则同一排列可能被误认为不同。",
    "teacherTip": "圆桌排列要固定观察方向和起点，否则同一排列可能被误认为不同。",
    "tagsEditable": true
  },
  {
    "no": 15,
    "points": 4,
    "grade": "5-6",
    "text": "A square can be formed using four of these five pieces. Which one will not be used?",
    "options": {
      "A": "Piece A",
      "B": "Piece B",
      "C": "Piece C",
      "D": "Piece D",
      "E": "Piece E"
    },
    "answer": "B",
    "title": "拼片面积守恒",
    "tags": [
      "面积",
      "图形识别"
    ],
    "solution": "五块拼片分别由面积为 U 的正方形添加或挖去圆弧部分 M 得到，面积依次为 U−2M、U、U+2M、U+M、U−M。四块拼成面积 4U 的正方形，必须去掉面积为 U 的 B 块，选 B。",
    "hints": [
      "把每块面积写成 U 与 M 的组合。",
      "目标正方形面积为 4U。",
      "五块合计面积为 5U，必须排除面积为 U 的那块。"
    ],
    "methods": [
      "用代数表示每块面积并比较总和。",
      "把圆弧增减部分配对抵消。"
    ],
    "tip": "拼图题可以先检查面积是否可能，再尝试实际摆放；面积不符即可排除。",
    "teacherTip": "拼图题可以先检查面积是否可能，再尝试实际摆放；面积不符即可排除。",
    "tagsEditable": true,
    "figure": "assets/2014-g5-6/q15.png",
    "figureAlt": "Original figure for question 15: 拼片面积守恒"
  },
  {
    "no": 16,
    "points": 4,
    "grade": "5-6",
    "text": "A certain natural number has three digits. When we multiply the digits, we get 135. What result do we get if we add the digits?",
    "options": {
      "A": "14",
      "B": "15",
      "C": "16",
      "D": "17",
      "E": "18"
    },
    "answer": "D",
    "title": "数位乘积与和",
    "tags": [
      "因数",
      "数位"
    ],
    "solution": "135 的质因数分解为 3×3×3×5。将它分成三个一位数因子只有 3×5×9=135，因此数字和为 3+5+9=17，选 D。",
    "hints": [
      "分解 135 的质因数。",
      "把质因数分成三个一位数数字。",
      "唯一可能的数字组是 3、5、9。"
    ],
    "methods": [
      "枚举三位数的数字因子组合。",
      "从 135=3×3×3×5 合并出三个数字。"
    ],
    "tip": "要求自然数的数字乘积时，数字必须是 0 到 9 的一位数，组合有限。",
    "teacherTip": "要求自然数的数字乘积时，数字必须是 0 到 9 的一位数，组合有限。",
    "tagsEditable": true
  },
  {
    "no": 17,
    "points": 4,
    "grade": "5-6",
    "text": "In a restaurant there are 16 tables, each with 3, 4, or 6 chairs. Together, the tables that have 3 or 4 chairs can accommodate 36 people. If the restaurant can accommodate 72 people, how many tables are there with 3 chairs?",
    "options": {
      "A": "4",
      "B": "5",
      "C": "6",
      "D": "7",
      "E": "8"
    },
    "answer": "A",
    "title": "桌椅总量方程",
    "tags": [
      "方程",
      "应用题"
    ],
    "solution": "6 把椅子的桌子共能坐 72−36=36 人，因此有 6 张。另有 16−6=10 张 3 椅或 4 椅桌，合计容纳 36 人。设 3 椅桌 x 张，则 3x+4(10−x)=36，解得 x=4，选 A。",
    "hints": [
      "先由总容量减去 3 或 4 椅桌的容量。",
      "36 人由 6 椅桌容纳，所以这类桌有 6 张。",
      "剩余 10 张桌的椅数方程可解出 3 椅桌数。"
    ],
    "methods": [
      "设三类桌子数量并列方程。",
      "把 10 张桌先都视作 4 椅桌，再调整到 36 个座位。"
    ],
    "tip": "用“全部按 4 把椅子算，再扣除差额”可减少未知数。",
    "teacherTip": "用“全部按 4 把椅子算，再扣除差额”可减少未知数。",
    "tagsEditable": true
  },
  {
    "no": 18,
    "points": 4,
    "grade": "5-6",
    "text": "The points A, B, C, D, E, and F are on a straight line in that order. We know that AF=35, AC=12, BD=11, CE=12 and DF=16. What is the distance BE?",
    "options": {
      "A": "13",
      "B": "14",
      "C": "15",
      "D": "16",
      "E": "17"
    },
    "answer": "D",
    "title": "线段长度关系",
    "tags": [
      "线段",
      "代数"
    ],
    "solution": "令 A=0，则 C=12，F=35。由 DF=16 得 D=19；由 BD=11 得 B=8；由 CE=12 得 E=24。因此 BE=24−8=16，选 D。",
    "hints": [
      "把 A 放在数轴 0 点。",
      "依次用 AC、DF、BD、CE 求各点位置。",
      "最后计算 E 与 B 的坐标差。"
    ],
    "methods": [
      "在数轴上按顺序标出所有点。",
      "用线段加减关系逐步求未知坐标。"
    ],
    "tip": "强调 A、B、C、D、E、F 的顺序限制，求出坐标后要确认递增。",
    "teacherTip": "强调 A、B、C、D、E、F 的顺序限制，求出坐标后要确认递增。",
    "tagsEditable": true,
    "figure": "assets/2014-g5-6/q18.png",
    "figureAlt": "Original figure for question 18: 线段长度关系"
  },
  {
    "no": 19,
    "points": 4,
    "grade": "5-6",
    "text": "Marisa set her stones in groups of 3. After she arranged the stones in groups of 3, she noticed that there were 2 stones left. Then she arranged the stones in groups of 5, and again there were 2 stones left. At least how many more stones does she need so that there won't be any left when she arranges them in groups of 3 and when she arranges them in groups of 5?",
    "options": {
      "A": "3",
      "B": "1",
      "C": "4",
      "D": "10",
      "E": "13"
    },
    "answer": "E",
    "title": "同余与最小补数",
    "tags": [
      "余数",
      "最值"
    ],
    "solution": "石子数除以 3 和 5 都余 2，因此比它多 13 就到达下一个 15 的倍数，因为 15−2=13。选 E。",
    "hints": [
      "当前数量比 3 的倍数多 2。",
      "它也比 5 的倍数多 2。",
      "3 和 5 的公倍数是 15，补到下一个 15 的倍数。"
    ],
    "methods": [
      "设总数为 15k+2。",
      "用最小公倍数合并两个余数条件。"
    ],
    "tip": "余数相同且除数互质时，可先找共同周期，再求距离下一个周期的补数。",
    "teacherTip": "余数相同且除数互质时，可先找共同周期，再求距离下一个周期的补数。",
    "tagsEditable": true
  },
  {
    "no": 20,
    "points": 4,
    "grade": "5-6",
    "text": "The faces of a cube are numbered 1, 2, 3, 4, 5, and 6. The faces numbered 1 and 6 have a common edge. The same is true for faces numbered 1 and 5, faces numbered 1 and 2, faces numbered 6 and 5, faces numbered 6 and 4, and faces numbered 6 and 2. Which number is on the face opposite the face with number 4?",
    "options": {
      "A": "1",
      "B": "2",
      "C": "3",
      "D": "5",
      "E": "It cannot be determined"
    },
    "answer": "A",
    "title": "立方体相邻面关系",
    "tags": [
      "立方体",
      "逻辑推理"
    ],
    "solution": "面 1、5、6 两两相邻，所以它们在立方体的一个顶点相交。面 1、2、6 也在一个顶点相交。结合这些相邻关系可确定 1 与 4 相对，因此答案为 1，选 A。",
    "hints": [
      "立方体每个顶点恰有三个面相交。",
      "先利用 1、5、6 两两有公共边确定一个顶点。",
      "再用 1、2、6 的关系锁定相对面。"
    ],
    "methods": [
      "画立方体展开图并逐个放置面。",
      "把相邻关系画成图，排除不可能的对面。"
    ],
    "tip": "让学生先区分“有公共边”与“相对面”，两者不能同时成立。",
    "teacherTip": "让学生先区分“有公共边”与“相对面”，两者不能同时成立。",
    "tagsEditable": true,
    "figure": "assets/2014-g5-6/q20.png",
    "figureAlt": "Original figure for question 20: 立方体相邻面关系"
  },
  {
    "no": 21,
    "points": 5,
    "grade": "5-6",
    "text": "The 3×3×3 cube in the picture is made of 27 small cubes. How many small cubes do you have to take away to see the picture on the right from the right, from above, and from the front?",
    "options": {
      "A": "4",
      "B": "5",
      "C": "6",
      "D": "7",
      "E": "9"
    },
    "answer": "D",
    "title": "立方体三视图挖除",
    "tags": [
      "立方体",
      "空间想象"
    ],
    "solution": "要从右、上、前三个方向都看到指定的 3×3 轮廓，需移除三个视图中被标记的中央“十字”位置小方块。逐列对照后共需移走 7 块，选 D。",
    "hints": [
      "分别看右视图、俯视图和正视图中哪些格子必须空出。",
      "把三个视图投影回同一立方体位置。",
      "避免重复计算同一块被多个视图同时要求移除的小方块。"
    ],
    "methods": [
      "画 3×3×3 坐标格并对三个投影视图作交集。",
      "按深度逐层标记需要保留与移除的位置。"
    ],
    "tip": "三视图题可以给每个小方块标坐标，投影条件会变得清晰。",
    "teacherTip": "三视图题可以给每个小方块标坐标，投影条件会变得清晰。",
    "tagsEditable": true,
    "figure": "assets/2014-g5-6/q21.png",
    "figureAlt": "Original figure for question 21: 立方体三视图挖除"
  },
  {
    "no": 22,
    "points": 5,
    "grade": "5-6",
    "text": "There are 5 songs: A lasts 3 minutes, B lasts 2 minutes and 30 seconds, C lasts 2 minutes, D lasts 1 minute and 30 seconds, and E lasts 4 minutes. These songs are playing in the order A, B, C, D, E in a loop without any breaks. Song C was playing when Andy left home. He returned home exactly one hour later. Which song was playing when Andy got home?",
    "options": {
      "A": "A",
      "B": "B",
      "C": "C",
      "D": "D",
      "E": "E"
    },
    "answer": "A",
    "title": "循环时间与余数",
    "tags": [
      "周期",
      "时间"
    ],
    "solution": "五首歌一轮共 13 分钟。Andy 离开 60 分钟后，60÷13 余 8 分钟，即从 C 开始过了 8 分钟。C 播 2 分、D 播 1.5 分、E 播 4 分后已过 7.5 分，故正在播放 A，选 A。",
    "hints": [
      "先求一轮播放的总时长。",
      "60 分钟除以一轮时长，找余数。",
      "从离开时正在播放的 C 开始累计余下的分钟。"
    ],
    "methods": [
      "画循环时间轴并标出各首歌区间。",
      "用模运算找出一小时后的循环位置。"
    ],
    "tip": "循环问题要明确计时起点是在一首歌开始、结束还是播放中途。",
    "teacherTip": "循环问题要明确计时起点是在一首歌开始、结束还是播放中途。",
    "tagsEditable": true
  },
  {
    "no": 23,
    "points": 5,
    "grade": "5-6",
    "text": "Dan entered the numbers 1 to 9 in the cells of a 3×3 table. He began by placing 1, 2, 3, and 4 as shown. After he was finished, the sum of the numbers in the cells adjacent to the cell with number 5 is equal to 9. What is the sum of the numbers in the cells adjacent to the cell with number 6?",
    "options": {
      "A": "14",
      "B": "15",
      "C": "17",
      "D": "28",
      "E": "29"
    },
    "answer": "E",
    "title": "九宫格邻格和",
    "tags": [
      "网格",
      "逻辑推理"
    ],
    "solution": "若 5 在中心，四个邻格是 1、2、3、4，和为 10，不符。若 6 在中心，邻格和为 9 的数字 5 必须夹在 1 与 2 之间；其余邻格取 7、8、9。于是 6 的四个邻格和为 5+7+8+9=29，选 E。",
    "hints": [
      "中心格与边格、角格的邻接数不同。",
      "检验 5 是否在中心。",
      "若 6 在中心，利用邻格和 9 确定 5、1、2 的位置。"
    ],
    "methods": [
      "按中心位置分类，并用 1 到 9 总和 45 求邻格和。",
      "从已知的 1、2、3、4 位置约束剩余数字。"
    ],
    "tip": "让学生画出九宫格的共边关系；对角相邻不算邻格。",
    "teacherTip": "让学生画出九宫格的共边关系；对角相邻不算邻格。",
    "tagsEditable": true,
    "figure": "assets/2014-g5-6/q23.png",
    "figureAlt": "Original figure for question 23: 九宫格邻格和"
  },
  {
    "no": 24,
    "points": 5,
    "grade": "5-6",
    "text": "There are 60 trees in total. Every other tree is a maple, and every third tree is either a linden or a maple. The rest of the trees are birches. How many birches are there?",
    "options": {
      "A": "10",
      "B": "15",
      "C": "20",
      "D": "24",
      "E": "30"
    },
    "answer": "C",
    "title": "倍数位置分类",
    "tags": [
      "数论",
      "计数"
    ],
    "solution": "每隔一棵是枫树，共 30 棵。每第三棵既非枫树又非前述位置的情况中有 10 棵椴树。其余为桦树：60−30−10=20，选 C。",
    "hints": [
      "把树按 1 到 60 编号。",
      "每两个位置标出一棵枫树。",
      "再数不与枫树重合的每三个位置中的椴树。"
    ],
    "methods": [
      "用周期 6 的位置表标记枫树与椴树。",
      "按集合并集计数，避免重复计算。"
    ],
    "tip": "“每隔一棵”与“每第三棵”有重叠位置，分类前应明确是否重复。",
    "teacherTip": "“每隔一棵”与“每第三棵”有重叠位置，分类前应明确是否重复。",
    "tagsEditable": true
  },
  {
    "no": 25,
    "points": 5,
    "grade": "5-6",
    "text": "A thin colorful ribbon is glued on a transparent plastic cube. Which of the following pictures doesn't show the cube from any perspective?",
    "options": {
      "A": "Picture A",
      "B": "Picture B",
      "C": "Picture C",
      "D": "Picture D",
      "E": "Picture E"
    },
    "answer": "E",
    "title": "立方体投影与可见缎带",
    "tags": [
      "空间想象",
      "立方体"
    ],
    "solution": "透明立方体从每个方向观察时，缎带在正面与背面的部分都会可见。选项 A–D 分别能对应六个方向的观察图；E 无法从任一侧面得到，因为正面或背面都应出现缎带部分，选 E。",
    "hints": [
      "透明意味着前后两面的缎带都能看到。",
      "先确定立方体六个面上的缎带走向。",
      "检查每个候选图是否能对应一个观察方向。"
    ],
    "methods": [
      "逐个模拟从前后、左右、上下观察。",
      "追踪缎带在相邻面的连接位置。"
    ],
    "tip": "可用透明纸盒与线绳模型演示，帮助学生区分透明与不透明立方体。",
    "teacherTip": "可用透明纸盒与线绳模型演示，帮助学生区分透明与不透明立方体。",
    "tagsEditable": true,
    "figure": "assets/2014-g5-6/q25.png",
    "figureAlt": "Original figure for question 25: 立方体投影与可见缎带"
  },
  {
    "no": 26,
    "points": 5,
    "grade": "5-6",
    "text": "The king and his messengers are traveling from the castle to the summer palace at a speed of 5 km/h. Every hour, the king sends a messenger back to the castle, who travels at 10 km/h. What is the time interval between any two consecutive messengers arriving at the castle?",
    "options": {
      "A": "30 min",
      "B": "60 min",
      "C": "75 min",
      "D": "90 min",
      "E": "120 min"
    },
    "answer": "D",
    "title": "相向行程与到达间隔",
    "tags": [
      "行程问题",
      "速度"
    ],
    "solution": "国王出发 1 小时后距城堡 5 km，第一位信使以 10 km/h 返回需半小时，到达时刻为 1.5 小时。第二位信使在第 2 小时出发，国王已走 10 km，返回需 1 小时，到达时刻为 3 小时。相邻到达相隔 1.5 小时，即 90 分钟，选 D。",
    "hints": [
      "每位信使出发时，国王离城堡的距离不同。",
      "用距离除以信使速度求返回时间。",
      "比较两位连续信使的出发时刻与返回时长。"
    ],
    "methods": [
      "列出前几位信使的出发与到达时间。",
      "设第 n 位信使在第 n 小时出发，写出到达时刻。"
    ],
    "tip": "分开计算“信使出发时刻”和“返程用时”，再相加得到到达时刻。",
    "teacherTip": "分开计算“信使出发时刻”和“返程用时”，再相加得到到达时刻。",
    "tagsEditable": true
  },
  {
    "no": 27,
    "points": 5,
    "grade": "5-6",
    "text": "There were 3 one-digit numbers on the blackboard. Ali added them up and got 15. Then he erased one of the numbers and wrote the number 3 in its place. Then Reza multiplied the three numbers on the blackboard and got 36. What are the possibilities for the number that Ali erased?",
    "options": {
      "A": "Either 6 or 7",
      "B": "Either 7 or 8",
      "C": "Only 6",
      "D": "Only 7",
      "E": "Only 8"
    },
    "answer": "B",
    "title": "和与积约束",
    "tags": [
      "数与运算",
      "逻辑推理"
    ],
    "solution": "替换后的三个数乘积为 36，其中一个是 3，所以未擦掉的两个数乘积为 12。两数可为 2 和 6（和 8），被擦数为 7；或 3 和 4（和 7），被擦数为 8。因此答案是 7 或 8，选 B。",
    "hints": [
      "用 36÷3 求未擦掉两数的乘积。",
      "列出乘积为 12 的一位数因数组合。",
      "用原和 15 减去每种组合的和。"
    ],
    "methods": [
      "枚举两数因数对并求第三数。",
      "设被擦数为 x，建立和积条件。"
    ],
    "tip": "同时使用和与积筛选；只用其中一个条件会留下过多可能。",
    "teacherTip": "同时使用和与积筛选；只用其中一个条件会留下过多可能。",
    "tagsEditable": true
  },
  {
    "no": 28,
    "points": 5,
    "grade": "5-6",
    "text": "Peter Rabbit loves cabbages and carrots. In a day, he eats 9 carrots only, 2 cabbages only, or 1 cabbage and 4 carrots. Some days he eats only grass. Over 10 days, he ate 30 carrots and 9 cabbages. On how many days at most did he eat only grass?",
    "options": {
      "A": "0",
      "B": "1",
      "C": "2",
      "D": "3",
      "E": "4"
    },
    "answer": "C",
    "title": "饮食组合与剩余天数",
    "tags": [
      "方程",
      "余数"
    ],
    "solution": "设只吃胡萝卜、混合吃、只吃卷心菜的天数分别为 a、c、b。9a+4c=30，模 4 可得 a=2，继而 c=3；2b+c=9 得 b=3。十天中剩下 10−2−3−3=2 天只吃草，选 C。",
    "hints": [
      "把三种进食日与两种食物总数对应起来。",
      "用 9a+4c=30 表示胡萝卜总量。",
      "再用 2b+c=9 表示卷心菜总量，最后求剩余天数。"
    ],
    "methods": [
      "列二元整数方程并用余数缩小可能。",
      "先从 30 根胡萝卜确定只吃胡萝卜与混合日的组合。"
    ],
    "tip": "提醒学生每一种菜单日都计入十天，剩余天数才是只吃草的日数。",
    "teacherTip": "提醒学生每一种菜单日都计入十天，剩余天数才是只吃草的日数。",
    "tagsEditable": true
  },
  {
    "no": 29,
    "points": 5,
    "grade": "5-6",
    "text": "In Fabuland, every sunny day is immediately preceded by two consecutive rainy days. Also, five days after any rainy day, it is another rainy day. It is sunny today. For how many days at most can we predict the weather with certainty?",
    "options": {
      "A": "1 day",
      "B": "2 days",
      "C": "4 days",
      "D": "We cannot predict even one day ahead",
      "E": "We can predict the weather every day from here on."
    },
    "answer": "C",
    "title": "天气规则与确定性预测",
    "tags": [
      "逻辑推理",
      "周期"
    ],
    "solution": "明天和后天都不能是晴天，因为晴天前必须连续两天雨，而今天是晴天。因此前两天都下雨。两天前与昨天的雨天又分别强制第 3、4 天下雨。四天后的天气确定；之后无法保证，答案为 4 天，选 C。",
    "hints": [
      "晴天出现前必须连续两天下雨。",
      "由于今天晴天，明天和后天不可能晴，所以都下雨。",
      "再用雨天五天后必下雨的规则，确定第 3、4 天。"
    ],
    "methods": [
      "画出今天前后 7 天的时间线。",
      "分别从已知的两个雨天向后数五天。"
    ],
    "tip": "规则推理要区分“可能下雨”和“必定下雨”，只报告所有合法天气序列共有的结论。",
    "teacherTip": "规则推理要区分“可能下雨”和“必定下雨”，只报告所有合法天气序列共有的结论。",
    "tagsEditable": true,
    "figure": "assets/2014-g5-6/q29.png",
    "figureAlt": "Original figure for question 29: 天气规则与确定性预测"
  },
  {
    "no": 30,
    "points": 5,
    "grade": "5-6",
    "text": "Granny has 10 grandchildren. Alice is the oldest. One day Granny notices that all ages are different. If the sum of the grandchildren ages is 180, what is the youngest Alice can be?",
    "options": {
      "A": "19",
      "B": "20",
      "C": "21",
      "D": "22",
      "E": "23"
    },
    "answer": "E",
    "title": "互异年龄最小上界",
    "tags": [
      "数论",
      "最值"
    ],
    "solution": "若 Alice 为 22 岁，其他九人年龄最大依次为 21 至 13，合计总和至多 175，小于 180。Alice 为 23 岁时，其他九人可取 9、15、16、17、18、19、20、21、22 岁，总和恰为 157，因此最小可能年龄为 23，选 E。",
    "hints": [
      "Alice 最年长，其他年龄必须互不相同且小于她。",
      "要尽量降低 Alice 年龄，其他九人就要尽量年长。",
      "22 岁时最大总和只有 175；23 岁时可以达到 180。"
    ],
    "methods": [
      "将其他九个年龄取为紧邻 Alice 的九个不同整数。",
      "对 Alice 年龄逐一求最大可能总和。"
    ],
    "tip": "这是上界论证：先证明 22 岁及以下不可能，再展示 23 岁可行。",
    "teacherTip": "这是上界论证：先证明 22 岁及以下不可能，再展示 23 岁可行。",
    "tagsEditable": true
  }
];
Object.assign(KANGAROO_EXTENSIONS,{
  "2014-g5-6-1": {
    "text": "若 K 转 1 次、A 转 2 次、N 转 1 次，G 和 O 不变，总共转几次？",
    "answer": "4 次。",
    "solution": "把需要转的字母次数分别相加：1+2+1=4。",
    "method": "按字母逐个列旋转次数。",
    "change": "替换字母朝向，重新判断旋转次数。"
  },
  "2014-g5-6-2": {
    "text": "蛋糕重 1.2 kg，最大块仍与其余部分合重，最大块重多少？",
    "answer": "600 g。",
    "solution": "最大块占总重量的一半，1.2 kg÷2=0.6 kg。",
    "method": "根据相等的两部分平分总量。",
    "change": "改变总重量，保持最大块等于其余部分之和。"
  },
  "2014-g5-6-3": {
    "text": "若 Peter 看到白环在右侧，Paul 从背面会看到白环在哪侧？",
    "answer": "左侧。",
    "solution": "从物体背面观察会使左右位置互换。",
    "method": "先镜像位置，再核对交叠遮挡。",
    "change": "改变两环颜色或前后顺序进行视角练习。"
  },
  "2014-g5-6-4": {
    "text": "若个位和为 17，需要向十位进位，写下的个位是多少？",
    "answer": "7。",
    "solution": "17=10+7，个位记 7 并向十位进 1。",
    "method": "按十进制竖式逐列分解。",
    "change": "替换加数数字，练习判断未知位与进位。"
  },
  "2014-g5-6-5": {
    "text": "最小六位数与最大五位数相差多少？",
    "answer": "1。",
    "solution": "100000−99999=1。",
    "method": "相邻数量级的边界相差 1。",
    "change": "换到其他相邻位数进行推广。"
  },
  "2014-g5-6-6": {
    "text": "边长为 10 cm 的正方形同样切半并首尾拼成长方形，新周长是多少？",
    "answer": "50 cm。",
    "solution": "新长方形边长为 20 cm 和 5 cm，周长 2×25=50 cm。",
    "method": "先确定拼后两边，再使用周长公式。",
    "change": "改变正方形边长，保持相同剪拼方式。"
  },
  "2014-g5-6-7": {
    "text": "若共有 46 根，三角形每边 6 根，正方形每边可用几根？",
    "answer": "7 根。",
    "solution": "46−18=28，28÷4=7。",
    "method": "先扣除三角形，再平均分给正方形四边。",
    "change": "改变火柴总数或三角形边长。"
  },
  "2014-g5-6-8": {
    "text": "若只需取到 3 颗深灰珠，最少需要拿几颗白珠？",
    "answer": "可从两端分别取到 3 颗深灰珠，按原串珠排列数白珠。",
    "solution": "分别检查两端连续取法，比较达到目标所需的白珠数。",
    "method": "用新的灰白排列进行端点取数练习。"
  },
  "2014-g5-6-9": {
    "text": "若各圈时长改为 30、27、29、31、28 分钟，哪圈最短？",
    "answer": "第二圈，27 分钟。",
    "solution": "逐项比较时长，最小值为 27。",
    "method": "把每个时间间隔统一换成分钟比较。",
    "change": "替换经过起点的时刻，练习时间间隔计算。"
  },
  "2014-g5-6-10": {
    "text": "若缺失的是数字左侧两条竖线，12:43 后一分钟的显示会受影响吗？",
    "answer": "12:44 的个位 4 含左上竖线，缺失后显示会改变。",
    "solution": "检查 4 的七段笔画中是否包含被遮掉的线段。",
    "method": "改动损坏的笔画位置，比较不同数字的可辨性。"
  },
  "2014-g5-6-11": {
    "text": "若浅灰 5 格、深灰 3 格，允许加入 2 格深灰拼片，能否平衡？",
    "answer": "可以，添加 2 格深灰后两色均为 5 格。",
    "solution": "差值为 5−3=2，恰好由拼片补齐。",
    "method": "将区域面积统一成同一单位后比较。",
    "change": "改变初始区域面积差或可选拼片。"
  },
  "2014-g5-6-12": {
    "text": "John 到达终点后再向东 2 km、向南 3 km，他相对起点的净位移是什么？",
    "answer": "向西 1 km、向南 7 km。",
    "solution": "将各方向位移分别合并：东向 1−2=−1，南向 4+3=7。",
    "method": "把东西和南北两个轴分别相加。",
    "change": "增加或改变路径段数，继续用坐标求终点。"
  },
  "2014-g5-6-13": {
    "text": "若隔日组共 11 人，昨天总共 15 人吃了冰淇淋，今天有多少人吃？",
    "answer": "每天组 7 人，隔日组昨天 8 人、今天 3 人，所以共 10 人。",
    "solution": "先找出昨天参与的隔日组，再从总人数中扣除。",
    "method": "改变隔日组人数，观察两天之间的轮换。"
  },
  "2014-g5-6-14": {
    "text": "若交换后的次序为 A,C,B,E,D，哪只可能未动？",
    "answer": "逐一检查相邻交换约束；可尝试以 C 或 E 为未动者验证。",
    "solution": "将每只袋鼠的目标座位与原座位比较，检验是否相邻。",
    "method": "改变交换结果，练习枚举固定点。"
  },
  "2014-g5-6-15": {
    "text": "若要用剩余四块拼成面积 4U 的正方形，应去掉哪块？",
    "answer": "仍需去掉 B，因为它的面积恰为 U。",
    "solution": "检验任意四块总面积等于 4U 的条件。",
    "method": "改变目标面积，先用面积守恒筛选拼片。"
  },
  "2014-g5-6-16": {
    "text": "若三位数的数字乘积为 72，数字和可能是多少？",
    "answer": "可取数字 2、6、6，和为14；也可取 3、3、8，和为14。",
    "solution": "列出将 72 分成三个一位数因子的组合。",
    "method": "同时检查数字组合是否能组成三位数。"
  },
  "2014-g5-6-17": {
    "text": "若 10 张 3 或 4 椅桌总共容纳 34 人，有几张 3 椅桌？",
    "answer": "3x+4(10−x)=34，x=6 张。",
    "solution": "每把 3 椅桌比 4 椅桌少一座，差额为 6。",
    "method": "把容量差转成桌子数量差。"
  },
  "2014-g5-6-18": {
    "text": "若 AF=40、AC=10、DF=18、BD=12、CE=15，求 BE。",
    "answer": "D=22，B=10，C=10 与顺序冲突；需检查给定数据是否兼容。",
    "solution": "先按顺序放在数轴上，再检验数据是否能同时成立。",
    "method": "线段问题应在使用数值前检查点序和一致性。"
  },
  "2014-g5-6-19": {
    "text": "另一个数除以 4 和 6 都余 1，至少加几才能同时整除？",
    "answer": "最小公倍数为12，需加11。",
    "solution": "数为 12k+1，补 11 到下一个 12 的倍数。",
    "method": "先找最小公倍数，再从余数补到周期边界。"
  },
  "2014-g5-6-20": {
    "text": "若已知 1 与 4 相对，面 4 与 1 是否有公共边？",
    "answer": "没有；相对面不相邻。",
    "solution": "立方体的相对面不共享边或顶点。",
    "method": "把相邻关系转换为立方体展开图进行验证。"
  },
  "2014-g5-6-21": {
    "text": "若只需从正面和上方看到目标轮廓，是否还一定要移除右视图额外的方块？",
    "answer": "不一定；只有至少一个所需视图遮挡它时才需移除。",
    "solution": "将每个方块投影到指定方向，按必要条件计数。",
    "method": "改变要求的观察方向，重新求最少移除数。"
  },
  "2014-g5-6-22": {
    "text": "若 Andy 离开 30 分钟后回家，哪首歌播放？",
    "answer": "30 除以13余4，从 C 开始4分钟后是 D。",
    "solution": "先对一轮长度取余，再沿歌曲顺序定位。",
    "method": "改变歌曲时长或经过时间，练习循环定位。"
  },
  "2014-g5-6-23": {
    "text": "若中心格为 6，四个共边邻格为 2、4、7、9，它们的和是多少？",
    "answer": "22。",
    "solution": "把与中心共边的四个数字相加：2+4+7+9=22。",
    "method": "只数上下左右四格，不包含对角格。",
    "change": "改变中心数或邻格条件，继续区分共边与对角。"
  },
  "2014-g5-6-24": {
    "text": "若有 30 棵树，每隔一棵是枫树，剩余树全部为桦树，有多少桦树？",
    "answer": "15 棵。",
    "solution": "30 个位置中一半是枫树，另一半是桦树。",
    "method": "按周期位置交替标记。",
    "change": "改变总树数或两种分类规则。"
  },
  "2014-g5-6-25": {
    "text": "若立方体不透明，只能看到朝向观察者的三个面，哪些背面信息会消失？",
    "answer": "背面及被遮挡面的缎带不可见。",
    "solution": "不透明模型只显示可见表面，背面图案会被遮挡。",
    "method": "比较透明与不透明模型的投影差异。"
  },
  "2014-g5-6-26": {
    "text": "若国王每半小时派一位信使，速度仍分别为 5 km/h 和 10 km/h，到达间隔是多少？",
    "answer": "每半小时距离增 2.5 km，返程时间增 0.25 小时；到达间隔为 0.75 小时，即45分钟。",
    "solution": "到达时刻间隔等于派出间隔加上返程时间的增量。",
    "method": "分别列相邻两位信使的路程和返程时间。",
    "change": "改变派出间隔或双方速度。"
  },
  "2014-g5-6-27": {
    "text": "三个一位数和为 12，替换一个为 2 后乘积为 40，被擦数可能是多少？",
    "answer": "剩余两数乘积为20且和需为12，组合4和5，原数为3。",
    "solution": "枚举 20 的一位数因数对，再用和确定被擦数。",
    "method": "改动和、替换数或乘积，继续结合两种条件。"
  },
  "2014-g5-6-28": {
    "text": "若按原串珠从两端取珠，取到5颗深灰珠时一共拿了3颗白珠，白珠占所取珠子的几分之几？",
    "answer": "3/8。",
    "solution": "共有8颗珠子，其中3颗白珠，因此白珠占3/8。",
    "method": "用白珠数除以取珠总数。",
    "change": "改变取到的深灰珠数或白珠数。"
  },
  "2014-g5-6-29": {
    "text": "若今天下雨，按规则五天后一定是什么天气？",
    "answer": "下雨。",
    "solution": "任意雨天后第五天都规定为雨天。",
    "method": "把规则直接映射到时间线上的对应日期。",
    "change": "移动已知的晴天或雨天日期，重做确定性判断。"
  },
  "2014-g5-6-30": {
    "text": "若有 5 个不同年龄的孙辈，总年龄为 50，最年长的最小可能年龄是多少？",
    "answer": "最年长至少为 12 岁；12+11+10+9+8=50 并不等于 50? Actually 50。",
    "solution": "将其余四人安排为比最大年龄小的最大连续整数。",
    "method": "同时检查总和上界和候选年龄的可行构造。",
    "change": "改变孙辈人数或年龄总和。"
  }
});
Object.assign(KANGAROO_EXTENSIONS,{
  '2014-g5-6-14':{text:'若 B 没有移动，其他袋鼠按规则与相邻者交换后，从 A 开始的顺时针次序是什么？',answer:'A、E、B、D、C。',solution:'保留 B 的位置，其余袋鼠各与相邻位置交换，依次读出 A、E、B、D、C。',method:'固定未移动者后沿圆周追踪每次相邻交换。',change:'更换未移动者或交换后次序，检查条件是否可能。'},
  '2014-g5-6-16':{text:'三位数的数字乘积为 72，给出一个可能的数字和。',answer:'14，例如 2、6、6。',solution:'2×6×6=72，数字和为 2+6+6=14。',method:'将乘积分解为三个 0 至 9 的一位数因子。',change:'改变乘积，寻找可行的一位数字因子组。'},
  '2014-g5-6-18':{text:'若 AF=40、AC=10、DF=20、BD=11、CE=12，求 BE。',answer:'13。',solution:'令 A=0，则 C=10、D=20、F=40；B=D−11=9，E=C+12=22，因此 BE=22−9=13。',method:'在数轴上设最左点为 0，逐段定位各点。',change:'改变线段长度后，先检查是否符合点的排列顺序。'},
  '2014-g5-6-28':{text:'若 Peter 在 10 天内吃了 30 根胡萝卜和 12 颗卷心菜，其他菜单和原题相同，他有几天只吃草？',answer:'1 天。',solution:'30 根胡萝卜仍对应 2 天只吃胡萝卜、3 天混合吃；12 颗卷心菜对应 4 天只吃卷心菜。共 9 天进食，剩下 1 天只吃草。',method:'先用胡萝卜总量求两类日数，再用卷心菜总量求第三类。',change:'改变两种食物总量，利用整数方程检查日数。'},
  '2014-g5-6-30':{text:'若 5 个孙辈的年龄互不相同且总和为 50，最大年龄最小可以是多少？',answer:'12 岁。',solution:'若最大年龄不超过 11 岁，五个互异年龄最大和为 11+10+9+8+7=45，不足 50；12、11、10、9、8 岁总和正好 50。',method:'先算给定最大年龄下互异年龄的最大总和，再构造可行例子。',change:'改变孙辈人数或年龄总和，比较上界和实际构造。'}
});
const T2014={2:['应用题','数与运算'],4:['位值','逻辑推理'],9:['周期','计数'],10:['逻辑推理','周期'],14:['组合','逻辑推理'],16:['数与运算','位值'],18:['几何','代数'],26:['行程问题','应用题']};for(const q of KANGAROO_DATA['2014-g5-6'])if(T2014[q.no])q.tags=T2014[q.no];
Object.assign(KANGAROO_EXTENSIONS,{
  '2014-g5-6-8':{text:'按原项链两端取珠，拿到 5 颗深灰珠时共取到 3 颗白珠。白珠占所取珠子的几分之几？',answer:'3/8。',solution:'共取 5+3=8 颗珠子，其中 3 颗是白珠，因此白珠占 3/8。',method:'白珠数除以所取珠子总数。',change:'改变深灰珠与白珠数量，练习部分与整体的分数关系。'},
  '2014-g5-6-10':{change:'改变数码管损坏的笔画，再判断显示变化。'},
  '2014-g5-6-13':{change:'改变隔日组人数和昨天参与人数，重算今天轮到的人数。'},
  '2014-g5-6-15':{change:'改变拼片面积或目标面积，先用面积守恒筛选。'},
  '2014-g5-6-17':{change:'改变桌椅总容量，利用座位差求各类桌数。'},
  '2014-g5-6-19':{change:'改变两个除数或共同余数，求最少补数。'},
  '2014-g5-6-20':{change:'改变已知相邻面关系，重新推断相对面。'},
  '2014-g5-6-21':{change:'改变要求的观察方向，重算必须移除的小方块。'},
  '2014-g5-6-22':{text:'假设歌曲 C 恰好在 Andy 离家时开始。30 分钟后正在播放哪首歌？',answer:'歌曲 E。',solution:'一轮为 13 分钟，30÷13 余 4。C 播 2 分、D 播 1.5 分，余下 0.5 分处于歌曲 E。',method:'先对循环总时长取余，再从已知起点按歌曲时长定位。',change:'改变歌曲总时长或经过时间。'},
  '2014-g5-6-25':{change:'改变透明或不透明条件，比较各观察方向能看到的缎带。'},
  '2014-g5-6-27':{change:'改变和、替换数字或乘积，联合使用两项条件。'}
});
const T2014B={5:['位值','数与运算'],22:['周期','时间']};for(const q of KANGAROO_DATA['2014-g5-6'])if(T2014B[q.no])q.tags=T2014B[q.no];
Object.assign(KANGAROO_EXTENSIONS,{
 '2014-g5-6-10':{text:'若缺失的是数字左侧两条竖线，12:43 后一分钟的显示会受影响吗？',answer:'会；12:44 的个位 4 含左上竖线，缺失后显示会改变。',solution:'检查数字 4 的七段笔画，发现它包含被遮掉的竖线。',method:'按缺失笔画逐个检查时钟显示的数字。',change:'改变数码管损坏的笔画，再判断显示变化。'},
 '2014-g5-6-13':{text:'若隔日组共 11 人，昨天总共 15 人吃了冰淇淋，今天有多少人吃？',answer:'10 人。',solution:'每天组有 7 人，所以昨天隔日组有 8 人，今天轮到另外 3 人；总计 7+3=10 人。',method:'先从昨天总人数扣除每天都吃的组，再用隔日组总数求今天人数。',change:'改变隔日组人数和昨天参与人数，重算今天轮到的人数。'},
 '2014-g5-6-15':{text:'若四块拼成的目标正方形面积为 4U，哪块必须排除？',answer:'B 块。',solution:'五块总面积为 5U；要留下总面积 4U，必须排除面积为 U 的 B 块。',method:'把每块面积写成 U 与 M 的组合并相加比较。',change:'改变拼片面积或目标面积，先用面积守恒筛选。'},
 '2014-g5-6-17':{text:'若 10 张三椅或四椅桌共能容纳 34 人，有几张三椅桌？',answer:'6 张。',solution:'若全是四椅桌可坐 40 人；少 6 个座位表示有 6 张桌各少一把椅子，因此三椅桌有 6 张。',method:'将所有桌先视作四椅桌，再用容量差求三椅桌数量。',change:'改变桌椅总容量，利用座位差求各类桌数。'},
 '2014-g5-6-19':{text:'一个数除以 4 和 6 都余 1，至少加几才能同时整除？',answer:'11。',solution:'该数比 4 和 6 的公倍数都多 1；最小公倍数为 12，因此加 11 可到达下一个 12 的倍数。',method:'先求最小公倍数，再补足到整除数。',change:'改变两个除数或共同余数，求最少补数。'},
 '2014-g5-6-20':{text:'若已知立方体面 1 与面 4 相对，它们是否有公共边？',answer:'没有。',solution:'立方体的相对面位于两侧，不共享边或顶点。',method:'用立方体展开图标出相对面和相邻面。',change:'改变已知相邻面关系，重新推断相对面。'},
 '2014-g5-6-21':{text:'若只要求从正面和上方看到指定轮廓，是否仍一定要移除只影响右视图的方块？',answer:'不一定。',solution:'只保留题目要求的两个投影约束；若某方块只影响右视图且不遮挡正面或上方视图，就无需移除。',method:'把每个小方块投影到所有指定观察方向。',change:'改变要求的观察方向，重算必须移除的小方块。'},
 '2014-g5-6-25':{text:'若立方体不透明，哪些背面的缎带无法从当前视角看到？',answer:'背面及被立方体遮挡的部分。',solution:'不透明表面挡住背面的缎带；只有朝向观察者且未被遮挡的面可见。',method:'比较从同一方向观察透明与不透明立方体。',change:'改变透明条件，比较各方向可见的缎带。'},
 '2014-g5-6-27':{text:'三个一位数和为 12；擦去一个数换成 2 后，三数乘积为 40。擦去的数是多少？',answer:'3。',solution:'替换后的另外两数乘积为 40÷2=20。一位数因数对 4 和 5 的和为 9，所以被擦去的数为 12−9=3。',method:'先用乘积求未擦两数，再用和求第三数。',change:'改变总和、替换数字或乘积，联合使用两项条件。'}
});
KANGAROO_DATA['2014-g5-6'].find(q=>q.no===22).tags=['周期','应用题'];
