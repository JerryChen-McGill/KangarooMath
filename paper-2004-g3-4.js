// Transcribed from the local 2004 Grade 3–4 paper and solution slides; original figures are cropped to question images.
KANGAROO_DATA["2004-g3-4"] = [
  {
    "no": 1, "points": 3, "grade": "3-4",
    "text": "2001 + 2002 + 2003 + 2004 + 2005 = ?",
    "options": {"A":"1,015", "B":"5,010", "C":"10,150", "D":"11,005", "E":"10,015"}, "answer": "E",
    "title": "连续数求和", "tags": ["数与运算", "数列规律"],
    "hints": ["把较大的年份部分和较小的年份部分分开。", "每个数都含有 2000，再加上 1、2、3、4、5。", "5 × 2000 + (1 + 2 + 3 + 4 + 5) = 10,015。"],
    "solution": "把每项拆成 2000 加个位部分：5 × 2000 + (1 + 2 + 3 + 4 + 5) = 10,000 + 15 = 10,015。",
    "methods": ["分拆每个加数的 2000 部分与余数。", "将首尾配对：2001+2005、2002+2004，再加 2003。"],
    "tip": "用拆分法处理连续的大数，减少逐项相加的负担。"
  },
  {
    "no": 2, "points": 3, "grade": "3-4",
    "text": "Mark was 4 years old when his sister was born. Today he blew out all 9 candles on his birthday cake. What is the difference between their ages today?",
    "options": {"A":"4 years", "B":"5 years", "C":"9 years", "D":"13 years", "E":"14 years"}, "answer": "A",
    "title": "年龄差", "tags": ["年龄问题", "逻辑推理"],
    "hints": ["先求出妹妹现在的年龄。", "Mark 9 岁，妹妹比他小 4 岁。", "年龄差一直保持为 4 岁。"],
    "solution": "Mark 现在 9 岁，妹妹是 9 − 4 = 5 岁。两人的年龄差为 9 − 5 = 4 岁。",
    "methods": ["求出两人现在的年龄再相减。", "利用兄妹出生时已有的年龄差不随时间改变。"],
    "tip": "区分年龄本身与两人之间不变的年龄差。"
  },
  {
    "no": 3, "points": 3, "grade": "3-4",
    "text": "The picture shows a direct road from town A to town B and a detour around the closed section CD. How many kilometers longer is the detour?",
    "options": {"A":"3 km", "B":"5 km", "C":"6 km", "D":"10 km", "E":"It cannot be calculated"}, "answer": "C",
    "title": "路线长度", "tags": ["几何", "测量"],
    "figure": "assets/2004-g3-4/q3.png", "figureAlt": "A 到 B 的直线路线与绕过 CD 的矩形绕行路线",
    "hints": ["比较两条路线共同的水平路段。", "绕行路线新增的是向下和向上的两段。", "两段各 3 km，所以多出 6 km。"],
    "solution": "直线路线中的 CD 长 3 km。绕行路线用一条同长的水平路段代替 CD，另加上下两条各 3 km 的竖直路段，因此总共长 3 + 3 = 6 km。",
    "methods": ["删去两条路线共有的水平部分，只比较绕行新增的两段。", "把绕行路线底边平移到 CD 的位置，看到多出的两条竖边。"],
    "tip": "利用相同的平行路段抵消，只比较真正增加的长度。"
  },
  {
    "no": 4, "points": 3, "grade": "3-4",
    "text": "Which of these results is not equal to 671 − 389?",
    "options": {"A":"771 − 489", "B":"681 − 399", "C":"669 − 391", "D":"1871 − 1589", "E":"600 − 318"}, "answer": "C",
    "title": "减法与差", "tags": ["数与运算", "逻辑推理"],
    "hints": ["先算出 671 − 389。", "加上或减去相同的数，差不会改变。", "只有 669 − 391 的差是 278，而不是 282。"],
    "solution": "671 − 389 = 282。A、B、D、E 都是在被减数和减数上同时加减相同的数，差仍为 282；669 − 391 = 278，所以 C 不相同。",
    "methods": ["逐项计算每个差并与 282 比较。", "检查被减数和减数的变化是否相同。"],
    "tip": "鼓励学生观察减法中同时增减同一个数的性质。"
  },
  {
    "no": 5, "points": 3, "grade": "3-4",
    "text": "Some birds were sitting on a telegraph wire. Five flew away, then 3 came back. There were 12 birds on the wire then. How many birds were there at the beginning?",
    "options": {"A":"8", "B":"9", "C":"10", "D":"12", "E":"14"}, "answer": "E",
    "title": "逆向计算", "tags": ["应用题", "数与运算"],
    "hints": ["先从最后的 12 只鸟倒着推。", "撤销“3 只飞回来”，再撤销“5 只飞走”。", "12 − 3 + 5 = 14。"],
    "solution": "最后有 12 只。倒退到 5 只飞走之前，先减去后来飞回的 3 只，再加回飞走的 5 只：12 − 3 + 5 = 14。",
    "methods": ["按事件的相反方向倒推。", "设开始有 x 只，列式 x − 5 + 3 = 12。"],
    "tip": "倒推时按事件发生顺序的反方向，使用相反运算。"
  },
  {
    "no": 6, "points": 3, "grade": "3-4",
    "text": "Which numbers are inside the rectangle and inside the circle, but not inside the triangle?",
    "options": {"A":"5 and 11", "B":"1 and 10", "C":"13", "D":"3 and 9", "E":"6, 7, and 4"}, "answer": "B",
    "title": "图形交集", "tags": ["集合", "图形识别"],
    "figure": "assets/2004-g3-4/q6.png", "figureAlt": "圆形、矩形和三角形相交并标有数字的原卷图",
    "hints": ["先找同时位于矩形和圆形中的数字。", "再排除也落在三角形内部的数字。", "剩下的只有 1 和 10。"],
    "solution": "同时在矩形和圆形内的数字有 1、10、13；其中 13 也在三角形内。因此符合条件的数字是 1 和 10。",
    "methods": ["按“矩形 ∩ 圆形”找候选，再排除三角形里的数。", "逐个数字检查三个区域的包含关系。"],
    "tip": "引导学生先找交集，再根据“但不在”排除元素。"
  },
  {
    "no": 7, "points": 3, "grade": "3-4",
    "text": "Five buildings numbered 1 to 5 are colored blue, red, yellow, pink, and green. The red building is next only to the blue building, and the blue building is between the red and green buildings. What color is building 3?",
    "options": {"A":"blue", "B":"red", "C":"yellow", "D":"pink", "E":"green"}, "answer": "E",
    "title": "位置逻辑", "tags": ["逻辑推理", "排列"],
    "figure": "assets/2004-g3-4/q7.png", "figureAlt": "从左至右编号 1 到 5 的五栋建筑",
    "hints": ["红色建筑只能挨着蓝色建筑。", "蓝色建筑在红色和绿色之间，因此红、蓝、绿必须相邻排列。", "无论这组三栋从左向右还是从右向左，3 号楼都是绿色。"],
    "solution": "红色楼只与蓝色楼相邻，而蓝色楼又在红色楼和绿色楼之间，所以三栋的顺序只能是红—蓝—绿或绿—蓝—红。它们占据相邻的三个位置 1–3、2–4 或 3–5；结合图示和“红楼只紧邻蓝楼”的限制，3 号楼始终是绿色。",
    "methods": ["把红、蓝、绿作为一组三个相邻位置，检查可能的摆放方向。", "利用蓝色必须处在红色与绿色之间，逐个排除端点位置。"],
    "tip": "本题中其余两种颜色不影响判断，先只安排红、蓝、绿。"
  },
  {
    "no": 8, "points": 3, "grade": "3-4",
    "text": "How many white squares must be shaded so that the number of shaded squares is exactly half the number of white squares?",
    "options": {"A":"2", "B":"3", "C":"4", "D":"6", "E":"It is impossible to calculate"}, "answer": "B",
    "title": "方格与比例", "tags": ["比例", "计数"],
    "figure": "assets/2004-g3-4/q8.png", "figureAlt": "由 24 个小方格组成且已有 5 格涂黑的方格图",
    "hints": ["先数出总格数和已经涂黑的格数。", "若再涂 x 格，黑格为 5+x，白格为 19−x。", "令 5+x 是 19−x 的一半，解得 x=3。"],
    "solution": "图中共有 24 格，已有 5 格涂黑。再涂 x 格后，黑格有 5+x 格，白格有 19−x 格。由 5+x=(19−x)/2，得 10+2x=19−x，因此 x=3。",
    "methods": ["设需要再涂 x 格，直接列比例方程。", "逐格尝试：每涂一格，黑格增加 1、白格减少 1。"],
    "tip": "“黑格是白格的一半”要以涂完后的黑白格数量为准。"
  },
  {
    "no": 9, "points": 4, "grade": "3-4",
    "text": "Five identical rectangular sheets are divided into white and black squares. Which sheet must be covered with Picture 1 to make a completely black rectangle?",
    "options": {"A":"Sheet A", "B":"Sheet B", "C":"Sheet C", "D":"Sheet D", "E":"Sheet E"}, "answer": "D",
    "title": "图形旋转", "tags": ["空间想象", "图形识别"],
    "figure": "assets/2004-g3-4/q9.png", "figureAlt": "黑白方格图案 Picture 1 与五种候选长方形",
    "hints": ["把 Picture 1 旋转 90°，再与候选图案叠合。", "可以顺时针或逆时针旋转，检查每个白格和黑格。", "逆时针旋转后与 D 的图案相配。"],
    "solution": "将 Picture 1 逆时针旋转 90°，再放到候选图案上。只有 D 的白黑格位置与它互补，合起来形成全黑长方形。",
    "methods": ["剪下图案旋转后逐个叠放比较。", "用旋转后的每个角格作为定位点，排除不匹配的选项。"],
    "tip": "强调旋转改变方向但不改变方格之间的相邻关系。"
  },
  {
    "no": 10, "points": 4, "grade": "3-4",
    "text": "The balances shown are level. Pencils and a pen are weighed on the two sets of scales. What is the weight of the pen?",
    "options": {"A":"6 g", "B":"7 g", "C":"8 g", "D":"9 g", "E":"10 g"}, "answer": "D",
    "title": "天平与等式", "tags": ["逻辑推理", "应用题"],
    "figure": "assets/2004-g3-4/q10.png", "figureAlt": "两组天平比较铅笔、钢笔和砝码重量",
    "hints": ["先利用第一架天平求一支铅笔的重量。", "第一架天平可化简为 5 支铅笔等于 30 克。", "第二架天平中铅笔和钢笔共 15 克，所以钢笔重 9 克。"],
    "solution": "第一架天平可得 7 支铅笔与 2 支铅笔加 30 克等重，移去两支后，5 支铅笔重 30 克，所以每支重 6 克。第二架天平显示一支铅笔和一支钢笔共 15 克，钢笔重 15−6=9 克。",
    "methods": ["把天平平衡关系写成等式并消去相同物品。", "先求每支铅笔重量，再从第二架天平的总重量中减去。"],
    "tip": "把天平两端同时移去相同数量的物品，等式仍然成立。"
  },
  {
    "no": 11, "points": 4, "grade": "3-4",
    "text": "Four clocks are shown. One is correct, one is 20 minutes fast, one is 20 minutes slow, and one is broken. What time is it now?",
    "options": {"A":"4:45", "B":"5:05", "C":"5:25", "D":"5:40", "E":"12:00"}, "answer": "B",
    "title": "钟表推理", "tags": ["时间", "逻辑推理"],
    "figure": "assets/2004-g3-4/q11.png", "figureAlt": "显示不同时间的四只钟表",
    "hints": ["找出两只钟表显示时间相差 40 分钟的一对。", "一只快 20 分钟、一只慢 20 分钟，两者相差 40 分钟。", "5:25 与 4:45 相差 40 分钟，中间的正确时间是 5:05。"],
    "solution": "5:25 比正确时间快 20 分钟，4:45 比正确时间慢 20 分钟，因此正确时间是两者之间的 5:05。5:40 是坏掉的钟。",
    "methods": ["找出相差 40 分钟的快钟与慢钟，取中间时刻。", "对每个候选时间分别加、减 20 分钟，核对四个表盘。"],
    "tip": "指出快慢钟的误差方向相反，因此相差 40 分钟。"
  },
  {
    "no": 12, "points": 4, "grade": "3-4",
    "text": "Guests ate half of the apples and one third of the oranges in a basket. Which statement describes the fruit that remained?",
    "options": {"A":"Half of all the fruit", "B":"More than half of all the fruit", "C":"Less than half of all the fruit", "D":"One third of all the fruit", "E":"Less than one third of all the fruit"}, "answer": "B",
    "title": "分数比较", "tags": ["分数", "逻辑推理"],
    "hints": ["苹果剩下一半，橙子剩下多少？", "橙子还剩 2/3，比一半多。", "两类水果的剩余比例都至少是一半，橙子那部分更多，所以总量超过一半。"],
    "solution": "苹果剩下一半，橙子剩下 2/3。两类水果中，苹果恰好剩一半，橙子剩得超过一半，因此合起来的剩余水果也多于全部水果的一半。",
    "methods": ["分别比较两类水果的剩余比例与 1/2。", "把苹果和橙子的数量看成两组权重；一组保留 1/2，另一组保留 2/3。"],
    "tip": "即使不知道苹果和橙子的具体数量，也能通过加权比例判断总量。"
  },
  {
    "no": 13, "points": 4, "grade": "3-4",
    "text": "Angie divided a number by 10 instead of multiplying it by 10 and got 600. What would the result have been if she had multiplied it by 10?",
    "options": {"A":"6", "B":"60", "C":"600", "D":"6,000", "E":"60,000"}, "answer": "E",
    "title": "逆向运算", "tags": ["数与运算", "应用题"],
    "hints": ["先从错误结果和错误运算倒推出原数。", "原数除以 10 得 600，所以原数是 6,000。", "正确结果应为 6,000 × 10。"],
    "solution": "错误运算是原数 ÷ 10 = 600，所以原数为 6,000。正确结果是 6,000 × 10 = 60,000。",
    "methods": ["逆运算乘以 10 找回原数，再执行正确运算。", "把“除以 10”改成“乘以 10”，结果相差 100 倍：600 × 100 = 60,000。"],
    "tip": "让学生先求原数，不要只把 600 乘以 10。"
  },
  {
    "no": 14, "points": 4, "grade": "3-4",
    "text": "Some pages are missing from a book. When opened, the left page is numbered 24 and the right page is numbered 45. How many sheets of paper are missing between them?",
    "options": {"A":"9", "B":"10", "C":"11", "D":"20", "E":"21"}, "answer": "B",
    "title": "页码与配对", "tags": ["计数", "逻辑推理"],
    "hints": ["一本书摊开时，左页是偶数，右页是紧接着的奇数。", "24 与 45 之间缺少页码 25 到 44。", "20 页对应 10 张纸，每张纸有正反两页。"],
    "solution": "页码 25 到 44 缺失，共 44−25+1=20 页。每张纸有两页，因此缺少 20÷2=10 张纸。",
    "methods": ["先计算缺失页数，再除以每张纸的两页。", "页码从 24 到 45 共跨 21 个编号间隔，扣掉已看到的两页后还缺 20 页。"],
    "tip": "提醒学生区分缺页数与缺纸张数。"
  },
  {
    "no": 15, "points": 4, "grade": "3-4",
    "text": "Eva is 52 days older than Andrea. Eva's birthday is on Tuesday in March this year. On which day of the week will Andrea celebrate her birthday this year?",
    "options": {"A":"Monday", "B":"Tuesday", "C":"Wednesday", "D":"Thursday", "E":"Friday"}, "answer": "E",
    "title": "星期与周期", "tags": ["时间", "周期规律"],
    "hints": ["52 天可以拆成完整星期和剩余天数。", "52 = 7 × 7 + 3。", "Andrea 的生日比 Eva 晚 52 天，也就是晚 3 天：星期五。"],
    "solution": "52 天等于 7 个完整星期再加 3 天。Andrea 的生日比 Eva 晚 52 天，因此从星期二往后数 3 天是星期五。",
    "methods": ["去掉整周，只计算 52 除以 7 的余数。", "在日历上从星期二向后数 3 天。"],
    "tip": "强调年龄差对应生日日期相隔 52 天，按一周七天循环。"
  },
  {
    "no": 16, "points": 4, "grade": "3-4",
    "text": "Numbers are placed in a 2 × 2 table. The first row sums to 3, the second row sums to 8, and the first column sums to 4. What is the sum of the second column?",
    "options": {"A":"4", "B":"6", "C":"7", "D":"8", "E":"11"}, "answer": "C",
    "title": "行列和", "tags": ["数与运算", "逻辑推理"],
    "figure": "assets/2004-g3-4/q16.png", "figureAlt": "由四个格子组成的 2 乘 2 表格",
    "hints": ["先求整张表中四个数的总和。", "两个行和相加得到 3 + 8 = 11。", "第二列的和等于总和减去第一列的和：11 − 4 = 7。"],
    "solution": "全表的总和是两行和之和 3 + 8 = 11。第一列的和是 4，因此第二列的和为 11 − 4 = 7。",
    "methods": ["用总和减去第一列的和。", "行和总计与列和总计相等，所以两列和也合计 11。"],
    "tip": "任何矩形表格中，按行求总和与按列求总和结果相同。"
  },
  {
    "no": 17, "points": 5, "grade": "3-4",
    "text": "A cube is painted with three colors, with each face one color and opposite faces the same color. Which net can form this cube?",
    "options": {"A":"Pattern A", "B":"Pattern B", "C":"Pattern C", "D":"Pattern D", "E":"Pattern E"}, "answer": "E",
    "title": "正方体展开图", "tags": ["空间想象", "图形识别"],
    "figure": "assets/2004-g3-4/q17.png", "figureAlt": "五种由黑、灰、白方格组成的正方体展开图",
    "hints": ["正方体折起后，每个面都有一个相对面。", "相对的两个面必须颜色相同。", "只有 E 折叠后能让三对相对面分别同色。"],
    "solution": "将每个展开图沿方格边折起，检查三对相对面。A–D 至少有一对相对面颜色不同；E 折起后黑、灰、白各自占据一对相对面，因此符合条件。",
    "methods": ["在展开图上标出折叠后会相对的方格，再比较颜色。", "剪下展开图实际折叠，或用方格模型模拟翻折。"],
    "tip": "帮助学生区分相邻面与相对面；同色要求针对相对面。"
  },
  {
    "no": 18, "points": 5, "grade": "3-4",
    "text": "Four square tiles are arranged as shown. Two side lengths are 16 and 40. What is the side length of the largest square?",
    "options": {"A":"24", "B":"56", "C":"64", "D":"81", "E":"100"}, "answer": "C",
    "title": "正方形边长", "tags": ["几何", "测量"],
    "figure": "assets/2004-g3-4/q18.png", "figureAlt": "四个正方形拼接，标出边长 16 和 40",
    "hints": ["先由图中相邻正方形的边长求出 B 的边长。", "C 的边长 40 等于 A 的边长 16 加上 B 的边长。", "B 边长为 24，最大正方形边长是 24 + 40 = 64。"],
    "solution": "正方形 A 的边长为 16。图中 A 与 B 的底边合起来等于正方形 C 的边长 40，所以 B 的边长是 40−16=24。最大的正方形 D 的边长等于 B 的左边加 C 的右边，即 24+40=64。",
    "methods": ["沿图中的水平和竖直边段建立长度相等关系。", "先求 B 的边长，再把 D 的边分解成 B 与 C 的对应边。"],
    "tip": "让学生在图中用同色标记相等的边段。"
  },
  {
    "no": 19, "points": 5, "grade": "3-4",
    "text": "Marla and Matt stand in a line. There are 16 students to Marla's right, including Matt, and 14 students to Matt's left, including Marla. There are 7 students between them. How many students are in the class?",
    "options": {"A":"37", "B":"30", "C":"23", "D":"22", "E":"16"}, "answer": "C",
    "title": "队列位置", "tags": ["计数", "逻辑推理"],
    "hints": ["7 人在两人之间，所以两人的位置相差 8。", "Matt 左边有 14 人，Marla 是其中之一；Marla 右边有 16 人。", "Marla 左边有 6 人，再加 Marla 和右边 16 人，共 23 人。"],
    "solution": "Matt 左边有 14 人，其中 Marla 左边还有 7 人，所以 Marla 左边有 14−8=6 人（Marla 与 Matt 之间相差 8 个位置）。Marla 右边有 16 人，包含 Matt。全班人数为 6 + 1 + 16 = 23。",
    "methods": ["用位置编号：Marla 左边 6 人，之后是 Marla，再有 16 人。", "画一列圆点并标出两人的位置，再数全队人数。"],
    "tip": "“两人之间有 7 人”意味着两人的位置相差 8。"
  },
  {
    "no": 20, "points": 5, "grade": "3-4",
    "text": "The sum of the digits of a 10-digit number is 9. What is the product of its digits?",
    "options": {"A":"0", "B":"1", "C":"45", "D":"9 × 8 × 7 × … × 2 × 1", "E":"10"}, "answer": "A",
    "title": "数位与乘法", "tags": ["数位", "逻辑推理"],
    "hints": ["10 个非负整数数字的和只有 9。", "如果 10 个数字都至少是 1，它们的和至少是多少？", "总和小于 10，所以至少有一个数字是 0，乘积为 0。"],
    "solution": "若 10 个数字都至少为 1，它们的和至少为 10；但题目给出的数字和是 9。因此至少一个数字为 0，所有数字的乘积就是 0。",
    "methods": ["用抽屉原理：10 个正整数之和不可能只有 9。", "反设所有位都非零，则最小数字和为 10，产生矛盾。"],
    "tip": "说明这里的数字允许为 0；乘积中出现 0 时整体乘积为 0。"
  },
  {
    "no": 21, "points": 5, "grade": "3-4",
    "text": "A large cube contains 125 small black or white cubes. Any two adjacent cubes have different colors, and all eight vertices of the large cube are black. How many white cubes are there?",
    "options": {"A":"62", "B":"63", "C":"64", "D":"65", "E":"68"}, "answer": "A",
    "figure": "assets/2004-g3-4/q21.png", "figureAlt": "由黑白小正方体交替组成的 5 层大正方体",
    "title": "立体交替染色", "tags": ["空间想象", "计数"],
    "hints": ["125 = 5 × 5 × 5，所以大立方体每个方向有 5 层小方块。", "相邻方块颜色交替；每层黑白数量交替相差 1。", "三层有 12 个白块，两层有 13 个白块：3×12 + 2×13。"],
    "solution": "大立方体是 5×5×5。每层 25 块，棋盘式交替排列：与顶层相同的三层各有 12 个白块，另外两层各有 13 个白块。白块总数是 3×12 + 2×13 = 62。",
    "methods": ["逐层交替计数：12、13、12、13、12 个白块。", "把 125 个位置按三维奇偶性分成两色，利用顶点颜色确定层的起始颜色。"],
    "tip": "用 5×5 方格画出一层，再观察相邻层的颜色互换。"
  },
  {
    "no": 22, "points": 5, "grade": "3-4",
    "text": "A lottery ticket costs $4. Paul, Peter, and Robert contributed $1, $3, and $4 to buy two tickets. One ticket won $1,000, shared in proportion to their contributions. How much did Peter receive?",
    "options": {"A":"$300", "B":"$375", "C":"$250", "D":"$750", "E":"$425"}, "answer": "B",
    "title": "按比例分配", "tags": ["比例", "应用题"],
    "hints": ["先求三人一共出了多少钱。", "Peter 的 3 美元占总出资 8 美元的 3/8。", "他获得 1000 × 3/8 = 375 美元。"],
    "solution": "三人共出 1+3+4=8 美元。Peter 出了 3 美元，占总额的 3/8，因此获得奖金 1000×3/8=375 美元。",
    "methods": ["先求每 1 美元出资对应的奖金，再乘以 Peter 的 3 美元。", "直接按出资比 1:3:4 分配 1000 美元。"],
    "tip": "彩票价格只说明两张票共花 8 美元；奖金按每人出资比例分配。"
  },
  {
    "no": 23, "points": 5, "grade": "3-4",
    "text": "In three soccer games Daniel's team scored 3 goals and conceded 1. A win earns 3 points, a tie 1 point, and a loss 0 points. Which point total is impossible?",
    "options": {"A":"7", "B":"6", "C":"5", "D":"4", "E":"3"}, "answer": "E",
    "title": "比赛计分", "tags": ["逻辑推理", "分类讨论"],
    "hints": ["按总进球 3、失球 1，列出可能的胜、平、负结果。", "考虑失球 1 球的那场可能是 0–1、1–1、2–1 或 3–1。", "逐一补足另外两场后，3 分不会出现。"],
    "solution": "失球 1 球的比赛可能是 0–1、1–1、2–1 或 3–1。分别补足其余两场并使用总进球数为 3 的条件，可能的总积分为 4、5、6 或 7；3 分无法得到。",
    "methods": ["按失球 1 的比赛比分分类，再列出剩余两场比分。", "枚举三场比赛的胜、平、负组合，并筛选总进球与总失球符合条件的情况。"],
    "tip": "先用总失球数限制比赛比分，再检查总进球，不要只枚举积分。"
  },
  {
    "no": 24, "points": 5, "grade": "3-4",
    "text": "Natural numbers are placed in a table. Each white cell contains the product of one gray number above it and one gray number to its left. Some products are shown by letters. Which two letters represent the same number?",
    "options": {"A":"L and M", "B":"T and N", "C":"R and P", "D":"K and P", "E":"M and S"}, "answer": "E",
    "title": "乘法表推理", "tags": ["乘法", "逻辑推理"],
    "figure": "assets/2004-g3-4/q24.png", "figureAlt": "行列灰格数字相乘并以字母标记部分乘积的表格",
    "hints": ["先利用已知边缘数字恢复灰色格中的数。", "由 7×D=56 得 D=8，随后可求出其他字母对应的乘积。", "填完整张表后，M 和 S 都等于 12。"],
    "solution": "由 7×D=56 得 D=8；又由 6×A=18 得 A=3，依次填表可求得其余灰色数字。计算字母所在格的乘积后，M 和 S 都等于 12，因此选 E。",
    "methods": ["从已知行列乘积入手，逐步求出灰色行、列的数字。", "把每个字母格写成“上方数×左侧数”，再比较乘积。"],
    "tip": "先找只含一个未知数的乘积格，逐步完成表格。"
  }
];
