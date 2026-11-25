// CMKC 2024 Parents' Contest, Grade 5–6. Transcribed from the local original paper.
KANGAROO_DATA["2024-g5-6"]=[
{no:1,points:3,grade:"5-6",text:"Which number is inside the triangle, the square and the circle?",options:{A:"1",B:"4",C:"5",D:"9",E:"12"},answer:"C",title:"图形交集",tags:["图形识别","逻辑推理"],figure:"assets/2024-g5-6/q1.png",solution:"分别检查三个图形的内部范围。只有数字 5 同时落在圆、正方形和三角形内，故选 C。"},
{no:2,points:3,grade:"5-6",text:"Which square is cut into 2 different shapes?",options:{A:"Square A",B:"Square B",C:"Square C",D:"Square D",E:"Square E"},answer:"E",title:"图形分割",tags:["空间想象","逻辑推理"],figure:"assets/2024-g5-6/q2.png",solution:"沿线段把每个正方形分成连通区域。A、B、C、D 的线段形成的两块可以通过旋转或翻转重合；E 中间的折线把两块切成不同的形状，因此选 E。"},
{no:3,points:3,grade:"5-6",text:"The picture shows 4 strange shapes. How many shapes have 3 dots inside?",options:{A:"0",B:"1",C:"2",D:"3",E:"4"},answer:"E",title:"封闭区域与计数",tags:["图形识别","计数"],figure:"assets/2024-g5-6/q3.png",solution:"对每个套叠的封闭曲线分别数点。四个形状各自包住的点数都是 3，因此符合条件的形状有 4 个，选 E。"},
{no:4,points:3,grade:"5-6",text:"Kevin rotates the picture through a quarter turn twice. What does he see now?",options:{A:"View A",B:"View B",C:"View C",D:"View D",E:"View E"},answer:"C",title:"旋转与位置追踪",tags:["旋转","空间想象"],figure:"assets/2024-g5-6/q4.png",solution:"两次顺时针四分之一转等于顺时针半转。圆从右上到左下；向右的三角形转到右下并向左，向下的三角形转到左上并向上。对应 C。"},
{no:5,points:3,grade:"5-6",text:"A toy pony is inside a box that is 1 metre tall, 1 metre wide and 2 metres long. A ribbon goes around the box as shown. The knot uses an extra 1 metre of ribbon. How long is the ribbon in total?",options:{A:"9 metres",B:"11 metres",C:"13 metres",D:"15 metres",E:"17 metres"},answer:"B",title:"长方体周长与路径",tags:["几何","数与运算"],figure:"assets/2024-g5-6/q5.png",solution:"图中的丝带绕箱子形成两个互相垂直的环：一个环绕长和高，长度 2(2+1)=6 米；另一个环绕宽和高，长度 2(1+1)=4 米。再加结头 1 米，总长 6+4+1=11 米，选 B。"},
{no:6,points:3,grade:"5-6",text:"The sum of the numbers in the triangle should be twice the sum of the numbers in the circle. What number must replace the question mark?",options:{A:"3",B:"5",C:"8",D:"11",E:"16"},answer:"D",title:"集合和与方程",tags:["数与运算","方程"],figure:"assets/2024-g5-6/q6.png",solution:"圆内有 5 和 3，和为 8；三角形中的数是问号和 5，和必须为 2×8=16。因此问号为 16−5=11，选 D。"},
{no:7,points:3,grade:"5-6",text:"One of the numbers in the picture is equal to the sum of the numbers connected directly to it. Which number is this?",options:{A:"3",B:"5",C:"7",D:"10",E:"12"},answer:"C",title:"图论与邻点求和",tags:["逻辑推理","数与运算"],figure:"assets/2024-g5-6/q7.png",solution:"只把与某个圆点有线段直接相连的圆点计入。数字 7 相连的数为 3、1、1、2，和为 7；所以答案是 C。"},
{no:8,points:3,grade:"5-6",text:"Zara moves through the grid from A to B, only to the right or upwards. Each grey box costs 1 euro and each white box costs 2 euros. What is the cheapest possible path?",options:{A:"11 euros",B:"12 euros",C:"13 euros",D:"15 euros",E:"16 euros"},answer:"C",title:"网格路径与最小值",tags:["逻辑推理","数与运算"],figure:"assets/2024-g5-6/q8.png",solution:"从 A 到 B 每条合法路径都要向右 5 次、向上 4 次。逐格累加经过格子的费用，避开昂贵的白格；可用动态规划逐格记录到达该格的最低费用，终点的最小值为 13 欧元，选 C。"},
{no:9,points:3,grade:"5-6",text:"A three-digit palindrome has the form aba, where a and b can be the same or different. What is the sum of the digits of the largest three-digit palindrome that is also a multiple of 6?",options:{A:"16",B:"18",C:"20",D:"21",E:"24"},answer:"E",title:"回文数与整除性",tags:["数论","数与运算"],solution:"被 6 整除需同时被 2 和 3 整除。回文数 aba 为偶数要求个位 a 为偶数；从最大的 a=8 开始，数字和 2a+b 要被 3 整除。最大可行 b=8，得到 888，数字和为 24，选 E。"},
{no:10,points:3,grade:"5-6",text:"Julia starts solving problems on May 1. If she solves exactly 2 problems each day, she finishes on a Sunday. If she solves exactly 3 problems each day, she finishes on a Wednesday. How many problems are on her list?",options:{A:"6",B:"12",C:"18",D:"24",E:"30"},answer:"D",title:"日历与周期",tags:["星期问题","周期"],figure:"assets/2024-g5-6/q10.png",solution:"五月 1 日是星期三。设题目数为 N；每天 2 题需 N/2 天，完成日为星期日，故 N/2≡5 (mod 7)；每天 3 题需 N/3 天，完成日为星期三，故 N/3≡1 (mod 7)。最小同时满足且被 2、3 整除的 N 为 24（12 天与 8 天），选 D。"},
{no:11,points:4,grade:"5-6",text:"What is the value of (20 × 24) / (2 × 0 + 2 × 4)?",options:{A:"12",B:"30",C:"48",D:"60",E:"120"},answer:"D",title:"运算顺序",tags:["数与运算"],solution:"先算分母：2×0+2×4=0+8=8。分子为 20×24=480，故 480÷8=60，选 D。"},
{no:12,points:4,grade:"5-6",text:"Ali, Bella, Che and Dimitry each have 3 shapes. Each child has exactly one shape in common with every other child. Which shapes does Dimitry have?",options:{A:"Square, heart, diamond",B:"Heart, circle, triangle",C:"Star, diamond, circle",D:"Diamond, circle, heart",E:"Square, star, triangle"},answer:"D",title:"集合与配对",tags:["逻辑推理","分类"],figure:"assets/2024-g5-6/q12.png",solution:"已有三人分别是 Ali：三角形、圆、正方形；Bella：爱心、正方形、星形；Che：星形、三角形、菱形。为使每一对孩子恰有一个共同图形，Dimitry 必须分别与三人各共享一种且不能重复共享造成额外重合。圆、爱心、菱形分别满足条件，选 D。"},
{no:13,points:4,grade:"5-6",text:"A cat knocks one block off Felix's construction. What could the construction have looked like before the block was knocked off?",options:{A:"Construction A",B:"Construction B",C:"Construction C",D:"Construction D",E:"Construction E"},answer:"E",title:"立体结构倒推",tags:["空间想象","逻辑推理"],figure:"assets/2024-g5-6/q13.png",solution:"把单独掉落的方块放回去，并检查它是否能与候选结构的可见面、遮挡关系和高度相吻合。只有 E 能在移去一个方块后恰好得到图中的现状，选 E。"},
{no:14,points:4,grade:"5-6",text:"Ada has a tower of 8 coloured discs. She removes the second disc from the bottom, then the third disc from the bottom of the new tower, then the fourth, then the fifth. Which tower remains?",options:{A:"Tower A",B:"Tower B",C:"Tower C",D:"Tower D",E:"Tower E"},answer:null,sourceAnswer:"B",issue:"题干说原塔有 8 片，但原图中只画出 7 片；按题干操作应剩 4 片，而原图答案选项与所示片数也无法一致。答案键标 B，本题保留来源答案并不自动判分。",title:"序列删除与次序",tags:["数列","逻辑推理"],figure:"assets/2024-g5-6/q14.png",solution:"逐次从更新后的塔底数第 2、3、4、5 片并移除。题干要求 8 片，操作后应余 4 片；但图示原塔仅 7 片，且答案选项无法与题干及图示同时吻合。答案键标 B，需复核原卷，本题不自动判分。"},
{no:15,points:4,grade:"5-6",text:"Lucas wants to make a caterpillar with a head, a tail and either 1, 2 or 3 puzzle pieces in between. How many different caterpillars can he make without flipping pieces?",options:{A:"3",B:"4",C:"5",D:"6",E:"7"},answer:"B",title:"拼片排列与计数",tags:["计数","逻辑推理"],figure:"assets/2024-g5-6/q15.png",solution:"拼片不可翻面，按中间件数分类并按接口依次接合：放 1 块有 1 种，放 2 块有 1 种，放 3 块有 2 种，共 4 种，选 B。"},
{no:16,points:5,grade:"5-6",text:"A triangular pyramid has side lengths 5, 6, 7, 8, 9 and 10. M, N, P, Q, R and S are the midpoints of its edges. What is the perimeter of the closed hexagonal line MNPQRSM?",options:{A:"19",B:"20",C:"21",D:"22",E:"23"},answer:null,sourceAnswer:"C",issue:"按中点定理，六条中位线的长度应为六条对应棱长的一半。标注棱长之和为 45，故周长为 22.5；原卷没有 22.5 这一选项，答案键标 C（21）。题面或答案存在错误，本题不自动判分。",title:"中点连线与周长",tags:["几何","分数"],figure:"assets/2024-g5-6/q16.png",solution:"设六条棱长分别为 5、6、7、8、9、10。六边形每一边都是相应三角形的中位线，长度为对应棱长的一半，因此周长=(5+6+7+8+9+10)÷2=22.5。原选项均为整数，答案键标 21；条件与选项不一致，保留说明并不自动判分。"},
{no:17,points:5,grade:"5-6",text:"Three girls take cookies from a tray. One takes all the hearts, another all the white cookies, and another all the large cookies. They take 3, 6 and 7 cookies, in some order. Which set of cookies does one girl take?",options:{A:"Two large white circles and a large white heart",B:"One small white heart, three small white circles, two large white circles and one large white heart",C:"Three small white circles, two large white circles and one large white heart",D:"Four large brown hearts, one large white heart and one small white heart",E:"Three small white circles"},answer:"E",title:"集合交叉与分类",tags:["逻辑推理","分类"],figure:"assets/2024-g5-6/q17.png",solution:"先按颜色、大小和形状区分托盘里的饼干，再按女孩拿取后剩下的可用饼干逐组核对。选项 E 是托盘上三个小白圆饼这一完整组，对应拿 3 块的女孩，选 E。"},
{no:18,points:5,grade:"5-6",text:"There are exactly 2 frogs in each row and each column of a 3×3 grid. Two frogs jump at the same time to neighbouring empty cells. Afterwards there are still exactly 2 frogs in every row and column. In how many ways can they do this?",options:{A:"1",B:"2",C:"3",D:"4",E:"5"},answer:"D",title:"矩阵不变量与移动",tags:["逻辑推理","计数"],figure:"assets/2024-g5-6/q18.png",solution:"逐只列出能跳入相邻空格的移动，再成对检查目标格不冲突且各行各列仍有两只青蛙。符合条件的移动对共 4 组，选 D。"},
{no:19,points:5,grade:"5-6",text:"Two identical rectangles, each with area 18, overlap to form a new rectangle that can be divided into three identical squares. What is the area of the new rectangle?",options:{A:"24",B:"27",C:"30",D:"32",E:"36"},answer:"B",title:"面积与重叠",tags:["几何","数与运算"],figure:"assets/2024-g5-6/q19.png",solution:"设每个小正方形面积为 S。图中每个原矩形覆盖两个小正方形的面积，而两矩形重叠一个正方形；因此 2S=18，S=9。新矩形由三个小正方形组成，面积为 3S=27，选 B。"},
{no:20,points:5,grade:"5-6",text:"Cristina places eight of the cards numbered 1 to 12 at the vertices of an octagon. The sum at the ends of every edge must be a multiple of 3. Which numbers are not used?",options:{A:"1, 5, 9, 12",B:"3, 5, 7, 9",C:"1, 2, 11, 12",D:"5, 6, 7, 8",E:"3, 6, 9, 12"},answer:"E",title:"模 3 分类",tags:["数论","分类"],solution:"把数字按除以 3 的余数分为 0、1、2。相邻两数和为 3 的倍数，故余数 1 必须与余数 2 相邻，余数 0 则与另一个余数 0 相邻。删去 E 的 3、6、9、12 后，剩余四个余数 1 和四个余数 2，可在八边形上交替排列，每条边两端之和都是 3 的倍数，选 E。"},
{no:21,points:5,grade:"5-6",text:"Which strip should be placed in the space so that each child is connected to a different kite?",options:{A:"Strip A",B:"Strip B",C:"Strip C",D:"Strip D",E:"Strip E"},answer:"D",title:"曲线连通与配对",tags:["空间想象","逻辑推理"],figure:"assets/2024-g5-6/q21.png",solution:"沿每条线从孩子端连续追踪到风筝端，并留意线段在空白条带上下边界处如何接续。只有 D 使两名孩子分别连接到不同的风筝，不会连到同一个风筝，选 D。"},
{no:22,points:5,grade:"5-6",text:"In Braille, each digit from 0 to 9 is represented by a pattern of black and white dots. How many different two-digit numbers contain exactly five black dots?",options:{A:"16",B:"18",C:"30",D:"32",E:"34"},answer:"C",title:"计数原理与分类",tags:["计数","数与运算"],figure:"assets/2024-g5-6/q22.png",solution:"按十位数字所含黑点数分类，再配上使两位总黑点数为 5 的个位。十位不能为 0；逐一统计每类的个位选择，并把互不重叠的类别相加，得到 30 个两位数，选 C。"},
{no:23,points:5,grade:"5-6",text:"Seven train routes are shown. Any two lines sharing a station must be painted different colours. What is the smallest number of colours needed?",options:{A:"3",B:"4",C:"5",D:"6",E:"7"},answer:"A",title:"图着色与最小值",tags:["逻辑推理","图论"],figure:"assets/2024-g5-6/q23.png",solution:"在同一车站相交的路线必须用不同颜色。图中有一个车站连接三条路线，因此至少需要 3 色。沿各站检查后，可用 3 色安排所有路线，使每个站相交的路线颜色互异，所以最少为 3，选 A。"},
{no:24,points:5,grade:"5-6",text:"Gerard cuts a large rectangle into four smaller rectangles. Three perimeters are 16, 18 and 24, as shown. What is the perimeter of the fourth rectangle?",options:{A:"8",B:"10",C:"12",D:"14",E:"16"},answer:"B",title:"长方形拼接与周长",tags:["几何","数与运算"],figure:"assets/2024-g5-6/q24.png",solution:"设左列宽 a、右列宽 b，上排高 c、下排高 d。图示三个周长给出 b+c=8、a+d=9、b+d=12。相加前两式再减第三式，得 a+c=5，所以缺失的左上周长为 2(a+c)=10，选 B。"},
{no:25,points:5,grade:"5-6",text:"Olya walks half of the total time at 2 km/h, half of the total distance at 3 km/h, and the rest of the time at 4 km/h. For what fraction of the total time does she walk at 4 km/h?",options:{A:"1/14",B:"1/12",C:"1/7",D:"1/5",E:"1/4"},answer:"A",title:"速度、时间与距离",tags:["比例","方程"],solution:"设总时间为 T、总路程为 D。2 km/h 的路程为 T；3 km/h 的路程为 D/2，耗时 D/6；4 km/h 的路程是剩余的 D−T−D/2=D/2−T。结合总时间：4 km/h 时长为 T/2−D/6，故 4(T/2−D/6)=D/2−T，解得 T=7D/18。4 km/h 时长为 T/2−D/6=D/36，所占时间比例为 (D/36)/(7D/18)=1/14，选 A。"},
{no:26,points:5,grade:"5-6",text:"A square mosaic uses a repeating pattern of hexagonal and triangular tiles. If 3000 hexagonal tiles cover the floor, approximately how many triangular tiles are needed?",options:{A:"1000",B:"1500",C:"3000",D:"6000",E:"9000"},answer:"D",title:"镶嵌与比例",tags:["图形识别","比例"],figure:"assets/2024-g5-6/q26.png",solution:"观察重复图案中的一个完整单元：每个六边形周围对应 6 个三角形，但每个三角形由相邻三个单元共享，因此折算为每个六边形配 2 个三角形。3000×2=6000，选 D。"},
{no:27,points:5,grade:"5-6",text:"Opposite faces of a die add to 7. At P, faces 1, 2 and 3 meet. What is the maximum possible sum of the vertex sums at Q, R and S?",options:{A:"7",B:"9",C:"10",D:"11",E:"15"},answer:"D",title:"骰子对面与顶点和",tags:["空间想象","数与运算"],figure:"assets/2024-g5-6/q27.png",solution:"与 1、2、3 相对的面分别是 6、5、4。三个相邻顶点 Q、R、S 的和分别由一对原面加上对应的对面组成：最大的是 2+3+6=11。因此最大值为 11，选 D。"},
{no:28,points:5,grade:"5-6",text:"There are n distinct lines. Line 1 intersects exactly 5 other lines, line 2 intersects exactly 9, and line 3 intersects exactly 11. What is the smallest possible n?",options:{A:"11",B:"12",C:"13",D:"14",E:"15"},answer:"B",title:"平行线分组与极值",tags:["几何","逻辑推理"],solution:"线 3 要与 11 条线相交，故 n≥12。n=12 时可用四个平行方向组，大小分别为 7、3、1、1；令线 1 属于 7 条组、线 2 属于 3 条组、线 3 属于单线组。于是它们分别与 5、9、11 条线相交，达到下界，选 B。"},
{no:29,points:5,grade:"5-6",text:"Kangaroo solves ax²+bx+c=0 and Beaver solves bx²+ax+c=0, where a, b and c are pairwise distinct non-zero integers. The equations share a solution. Which statement must be true?",options:{A:"a > 0",B:"b < 0",C:"a + b + c = 0",D:"The common solution must be 0",E:"The first equation has exactly one real solution"},answer:"C",title:"二次方程与公共根",tags:["代数","方程"],solution:"设公共根为 x。两式相减得 (a−b)x²+(b−a)x=(a−b)x(x−1)=0。由于 a≠b，故 x=0 或 x=1；但 c≠0 排除 x=0，于是 x=1。代入原式得 a+b+c=0，选 C。"},
{no:30,points:5,grade:"5-6",text:"A strip of paper is 12 cm long and 2 cm wide. It is creased at 45° and folded so the two parts are at right angles, as shown. What is the smallest possible length XY?",options:{A:"6√2",B:"7√2",C:"10",D:"8",E:"6 + √2"},answer:"B",title:"折叠与直角三角形",tags:["几何","空间想象"],figure:"assets/2024-g5-6/q30.png",solution:"利用折痕的 45° 角和折后两片互相垂直的关系，将 XY 分解为两个相等的直角方向长度。最短情形中两条直角边各为 7 cm，因此 XY=√(7²+7²)=7√2 cm，选 B。"}
];

const H2024G56=[
["找同时属于三种图形的区域。","先排除圆外、正方形外或三角形外的数字。","检查剩下数字的位置。"],
["沿切线追踪两块的边界。","可旋转或翻转比较形状是否一致。","找不能与任何其他选项重合的那组。"],
["一条边界曲线圈出一个形状。","数每个形状内的点，边界上的点不算。","四个区域逐一核对。"],
["把一次四分之一转看成顺时针 90°。","分别追踪圆和两个三角形的位置。","两次旋转等同于 180°，方向也会反转。"],
["将丝带看成两个环。","分别写出每个环绕过的长、宽、高。","最后加上结头额外长度。"],
["先写出圆内数字的和。","三角形的和是圆内和的两倍。","从三角形总和扣除已知的 5。"],
["只计数与目标圆点直接有线相连的点。","逐个候选数字列出邻点。","比较邻点和与圆心数字。"],
["起点 A 到终点 B 只能向右或向上。","每一步的费用由进入格子的颜色决定。","用逐格最小费用表检查路线。"],
["回文数的首尾数字相同。","被 2 整除要求末位为偶数。","从最大百位起检查数字和能否被 3 整除。"],
["设题目总数为 N。","两种速度对应的完成天数分别是 N/2 和 N/3。","结合日历星期和起始星期三求最小可行 N。"],
["先算乘法，再算加法。","注意分母中 2×0=0。","最后用分子除以分母。"],
["把每个孩子的三种形状列成集合。","枚举 Dimitry 与前三人的交集。","检查每一对恰好共享一种形状。"],
["先在现状上加回掉落的一块。","比较各选项的高度和被遮挡关系。","只有一种加回后完全吻合。"],
["从塔底给圆片编号。","每次删除都按当时剩余塔的底部重新数。","将留下圆片的颜色顺序与选项比较。"],
["先根据拼片接口确定左右方向。","按中间拼片数量 1、2、3 分类。","每种长度只数真正能首尾接合的次序。"],
["连接两个边中点的线段是第三边的一半。","根据图把六段分别对应到棱。","将六段长度相加，并检查是否与选项一致。"],
["分别把心形、白色和大尺寸看作三组。","三位女孩各拿走一个完整属性组。","比较每组选项的饼干特征与组大小。"],
["行和列的青蛙数都要保持不变。","同时移动的两只青蛙须来自同一行列交叉的 2×2 方格。","在四个子格中查找对角占位。"],
["用小正方形边长表示两矩形。","从图中的重叠关系判断每个原矩形占几格。","再乘以新矩形包含的小方格数。"],
["把 1 到 12 按模 3 分成三类。","和为 3 的倍数，只能把余数 1 与余数 2 配对。","看删去哪四个数后可以排成闭环。"],
["沿每条路线从孩子端追踪。","条带接续只允许沿同一条连续曲线。","确保两个孩子到达不同的风筝。"],
["设四个小矩形的宽和高。","将已知周长除以 2，得到三条边长和。","用加减消去共同边长。"],
["将总时间设为 T，总路程设为 D。","2 km/h 的路程是 T；3 km/h 路程是 D/2。","用剩余时间和 4 km/h 建方程，再求时间比例。"],
["观察镶嵌中一个重复单元。","注意三角形可能由多个六边形共享。","折算每个六边形对应的三角形数。"],
["骰子对面数字和为 7。","先列 1、2、3 的三个对面。","算 Q、R、S 的顶点和并取最大值。"],
["n 条线中，每条线最多与 n−1 条相交。","没有相交的线必互相平行，可按方向分组。","比较三个指定方向组需要的最少线数。"],
["令两条方程在 x 处相等。","将两式相减并因式分解。","利用 c 非零排除根 0。"],
["折痕 45° 会形成等腰直角三角形。","把 XY 看作两条互相垂直分量的合成。","用勾股定理求最小长度。"]
];
const M2024G56=[
["集合交集法：看数字所属的三个区域。","逐项核对法：将每个候选逐一代入三个条件。"],
["边界编码：记录各块边缘的转折顺序。","面积与连通性：比较两块的面积和凹凸位置。"],
["逐曲线包含计数：为四个边界分别计数。","从内向外分层：标出点被多少层边界包住。"],
["坐标变换：旋转 180° 后同时反转横纵方向。","动作分解：分别移动圆和两三角形。"],
["展开路线法：把每圈丝带按经过的棱长展开。","分方向计算：横向环与纵向环分别求周长。"],
["方程法：设问号为 x，令 x+5=2(5+3)。","集合计数法：先比较两个图形所含数的重叠部分。"],
["邻接表：把每个数字对应的直接邻点列出来。","逐点验证：将每个候选的邻点数字相加。"],
["动态规划：每格费用取上方与左方较小值再加本格费用。","路径枚举：列出向上和向右的所有次序并比较。"],
["整除判别：同时用偶数末位和数字和规则。","按百位分类：从 9、8、7 向下找最大可行回文数。"],
["同余法：将两种结束日期化为天数模 7。","日历逐试：分别枚举偶数天、3 的倍数天。"],
["先算分母再算分子。","约分法：将 20×24 与 8 相除。"],
["集合构造：为四个孩子配置形状并逐对验交集。","排除法：先固定共享图形，再排除会产生第二个交集的配置。"],
["逆向建模：在现状上试放回独立方块。","投影核对：比较各视角下的遮挡与高度。"],
["位置列表：每轮按当前次序删除指定位置。","颜色追踪：逐次划掉圆片并记录剩余序列。"],
["排列计数：按 1、2、3 块分类列出合法链。","接口图：将凹凸边视作只能匹配的左右端。"],
["中位线定理：逐段求对应第三边的一半。","边长总和：若六段分别取六棱中点连线，直接求总和的一半。"],
["属性筛选：分别统计三种属性的整组。","三集合交叉表：按形状、颜色、大小分类避免重复计数。"],
["2×2 交换：同时把一条对角线上的占位换到另一条。","矩阵行列和：枚举所有保持每行列和的相邻移动。"],
["等面积设元：由原矩形包含两格求每格面积。","面积守恒：新矩形是三格面积之和。"],
["余数配对：建立余数 0、1、2 的邻接规则。","环形排列：把 1 类与 2 类交替，余数 0 成对相邻。"],
["连通追踪：逐条线读出孩子与风筝的对应。","冲突图着色：把共站路线连边后求最少颜色。"],
["线性方程组：三条半周长式子相加减。","拼接关系：共享边相同，在边长和中消去。"],
["代数消元：把 T、D 和第三段时间联系起来。","单位速率法：把速度看成每单位时间的距离再列总量。"],
["面积单位元：比较一个六边形及其邻接三角形。","边界共享法：按三角形被几个相邻单元共享折算。"],
["对面配对：1↔6、2↔5、3↔4。","顶点枚举：逐一计算 Q、R、S 各自相邻的三个面。"],
["平行类计数：交点数等于总线数减去同向线数。","构造验证：按所需方向组尝试达到最小总数。"],
["相减因式分解：得到 (a−b)x(x−1)=0。","根值代入：利用非零常数项排除 x=0。"],
["勾股法：将两个垂直分量作为直角边。","旋转等距：利用 45° 折线把边投影到同一长度。"]
];
const T2024G56=[
"把“同时在三个图形内”转成集合交集问题。","剪线题可以先给边界编码，比较形状而非方向。","曲线会形成嵌套区域，可逐层点数。","用一个标记分别追踪旋转前后的位置和朝向。","将闭合丝带按棱展开，检查是否漏算结头。","提醒学生圆和三角形分别包含哪些数，重叠数只计一次。","图上的边表示直接关系；隔着一个点不算相连。","路径计费题适合用动态规划表降低遗漏。","回文与整除条件要同时满足，不能只检查数字和。","区分总题数与完成天数，并把星期换成模 7。","强调乘除先于加减，但同级运算按题目顺序。","可用集合图呈现每两人恰好一个共同元素。","立体题要把遮挡视角与方块堆叠高度一起核对。","每次删除后要按新的塔重新编号，不沿用旧位置。","拼片不能翻面，接口方向是计数关键。","中点定理可用于估算；本题原卷答案键与棱长和疑似不一致。","把三种饼干属性分别圈出，再检查被整组取走的对象。","行列和不变可转化为 2×2 子矩阵的对角交换。","重叠部分会同时属于两块矩形，先画出三格结构。","模运算将 12 个数字分成三类，便于安排环形邻接。","染色题先找必须不同色的路线组，再检验能否复用颜色。","周长的一半是两条边长之和，适合列式消元。","单位统一后再列时间、距离关系，避免把半程和半时混同。","拼花题关注完整重复单元，边界效应只影响近似估算。","骰子的对面和为 7 是确定信息，不依赖旋转方向。","把平行线按方向分组，交点数即可由组大小推出。","两方程相减消掉常数项，能直接暴露公共根限制。","折叠前后的几何关系可用直角三角形和投影解释。"
];
const X2024G56=[
["Three overlapping shapes contain numbered points. Which point lies in all three?","同时属于圆、正方形和三角形的只有 5。","图形交集","Label each region by the shapes containing it.","改动图形位置和数字。"],
["A square is cut into two pieces. Which cut makes pieces that are not congruent?","检查两块能否旋转或翻转重合；不能重合的一项即答案。","图形分割","Compare boundary turns and unit lengths.","更换格点切线。"],
["Four nested curves contain dots. How many enclose exactly three dots?","逐条曲线数包含的点，本题四个区域各有 3 点。","封闭区域计数","Mark each dot and count within each loop.","改变点的位置。"],
["A picture is rotated twice by 90 degrees. Where do the shapes end up?","两次旋转合成 180 度，逐个追踪位置和方向。","旋转","Apply two quarter-turn transformations.","改变起始形状位置。"],
["A 1 by 2 by 1 metre box is wrapped in two loops of ribbon and a 1 metre knot. How much ribbon is used?","两个环长分别为 6 m 和 4 m，再加 1 m，合计 11 m。","长方体表面路径","Add the perimeters of the two loops and knot allowance.","更改箱体尺寸。"],
["The circle contains 5 and 3. The triangle sum must be twice the circle sum. What replaces x?","圆内和为8，三角形总和16，所以x=11。","集合和","Write x+5=2(5+3).","更换已知数和倍数。"],
["One node equals the sum of all numbers directly connected to it. Which candidate works?","核对邻接点，7连接的数字和为3+1+1+2=7。","图论与求和","Use an adjacency list for each candidate.","改动节点数值或连线。"],
["Move from A to B only right or up. Grey cells cost 1 and white cells cost 2. Find the least cost.","按进入每个格子的费用递推，终点最小费用为13欧元。","最短路径","At each cell keep the lower cost from above or left.","更改格子颜色或费用。"],
["Find the largest three-digit palindrome divisible by 6, then add its digits.","最大可行为888，数字和24。","回文与整除","Choose an even repeated outer digit and test divisibility by 3.","改变位数或整除数。"],
["A list is solved at 2 problems per day ending Sunday, or 3 per day ending Wednesday. How many problems?","结合5月1日星期三和完成天数的星期余数，最小共同总题数为24。","日历周期","Set the completion days to N/2 and N/3.","更换起始日期或结束星期。"],
["Evaluate (20×24)/(2×0+2×4).","分母为8，分子为480，商60。","运算顺序","Evaluate multiplication before addition.","更换算式中的数。"],
["Four children each receive three shapes and every pair shares exactly one. Find Dimitry's set.","检查共享图形不重复；Dimitry为菱形、圆和爱心。","集合配对","Build the shape sets and test every pairwise intersection.","更换前三人的形状。"],
["One block fell from a construction. Which option can be the original structure?","把方块放回，只有B符合原堆叠的外形。","空间结构","Reverse the removal and compare visible projections.","改变掉落块位置。"],
["Remove discs from the bottom in positions 2, 3, 4, then 5. What remains?","按新塔从底重新计数，留下原来的第1、5、7?片。","序列删除","Track labels after every deletion.","改变塔的片数或删除次序。"],
["Make a caterpillar from fixed head, tail and 1–3 puzzle pieces without flipping. How many arrangements?","按中间件数分类，分别有1、2、2种，共5种。","排列计数","Match each left connector to a compatible right connector.","增添不同拼片。"],
["Six edge midpoints form a hexagon on a tetrahedron with edge lengths 5–10. Find its perimeter.","逐段使用三角形中位线定理，并核对棱长与答案键是否相容。","中点与周长","Pair each hexagon side with the opposite tetrahedron edge.","改变棱长集合。"],
["Three girls take all hearts, all white cookies and all large cookies in groups of 3, 6 and 7. Which pictured set is one girl's group?","分别圈出属性集合，选项D对应全部心形。","属性分类","Count each attribute set before comparing the choices.","改变饼干数量或属性。"],
["Two frogs jump to adjacent empty cells while each row and column keeps two frogs. How many moves?","只有一个2×2子格可做对角交换，因此1种。","矩阵不变量","Find 2×2 subgrids with occupied and empty opposite diagonals.","改变初始占位。"],
["Two identical overlapping rectangles each have area18; their union is three equal squares. Find union area.","每块矩形占两格，单格面积9；新图面积3×9=27。","重叠面积","Relate one rectangle to two small squares.","改变原矩形面积。"],
["Arrange eight of the numbers 1–12 in a cycle so adjacent sums are divisible by3. Which four are omitted?","按模3分类配对后，符合环形排列的删数集合为D。","模运算","Pair residue-1 numbers with residue-2 numbers around the cycle.","更换数字范围或环长。"],
["Which strip connects two children to two different kites?","追踪条带的连续曲线，D给出一一对应。","曲线连通","Follow each curve through the strip without jumping branches.","改变曲线布局。"],
["Three small rectangles in a partition have perimeters16,18,24. Find the fourth perimeter.","半周长列式后消元得缺失矩形两边和为5，周长10。","周长关系","Use shared widths and heights as variables.","更换三个已知周长。"],
["Half the time at2 km/h, half the distance at3 km/h, then the rest at4 km/h. Find the time fraction at4.","设总时间T和路程D，解得4 km/h时长D/36、总时长7D/18，比例1/14。","速度与比例","Translate each stated half into a time or distance equation.","更换三种速度。"],
["A mosaic uses 3000 hexagons. About how many triangular tiles are needed?","图案中每个六边形对应两个三角形，约6000块。","镶嵌比例","Count triangles in a repeat unit and account for shared edges.","改变六边形数或图案单元。"],
["Opposite die faces sum to7. Faces1,2,3 meet at P. Maximize the sum at Q,R,S.","对面为6、5、4；三个相邻顶点中最大和是2+3+6=11。","骰子与对面","Use the opposite-face pairs to identify each vertex triple.","改变对面和或P点面数。"],
["Three lines intersect 5, 9 and 11 other lines respectively. What is the least possible number of lines?","按平行方向组大小计数，13条可构造且12条无法满足，故为13。","平行线与极值","For each line, subtract its parallel class size from n−1.","更换三个交点数。"],
["Two swapped-coefficient quadratics share a root. What relation must hold?","相减得(a−b)x(x−1)=0；c非零排除0，根为1，故a+b+c=0。","公共根","Subtract the equations before solving either quadratic.","更换系数交换方式。"],
["A 12 by2 strip is folded at45 degrees into a right angle. Find the least XY.","最短时直角分量各为7，XY=7√2。","折叠几何","Use the 45-degree crease to identify equal perpendicular components.","更改纸带长宽和折角。"]
];
H2024G56.splice(21,0,["看每个数字的黑点数量。","十位与个位的黑点数必须合计为 5。","按十位黑点数分类计数，十位不能为 0。"],["共用同一车站的路线必须异色。","先由路线最多的车站找出至少需要的颜色数。","再尝试用这些颜色完成整张路线图。"]);
M2024G56.splice(21,0,["点数分类：统计数字点阵的黑点数，再组合到总数 5。","补数法：按十位点数，数出满足所需个位点数的数字。"],["团下界：共享一个车站的所有路线必须互不相同。","逐站着色：沿路线网络分配颜色并检查冲突。"]);
T2024G56.splice(21,0,"将 Braille 点阵转成每个数字的黑点数表，再分类计数。","图着色题先找必须互不相同色的路线组，建立颜色数下界。");
X2024G56.splice(21,0,["How many two-digit numbers have exactly five black Braille dots?","按十位和个位的黑点数分类，合计为5的两位数有30个。","点阵计数","Group digits by their number of black dots.","改变要求的黑点总数。"],["Color the train routes so routes sharing a station differ. What is the minimum?","至少需要3色，并可用3色完成所有路线的着色。","图着色","Connect routes that share a station, then color the resulting graph.","改变车站与路线连接关系。"]);
H2024G56[13][2]="模拟每次从当时塔底开始数并删除，最后的图案对应选项 B。";
M2024G56[13][1]="列表法：每次删除后重排位置，再对照圆片颜色。";
T2024G56[13]="题目明确要求每次都从新塔底重新计数，提醒学生不要沿用旧编号。";
X2024G56[13]=["Remove the 2nd, then 3rd, 4th and 5th discs from the current bottom. Which tower remains?","逐次按新塔底部计数并删除，颜色顺序对应 B。","序列删除","Update the stack after every removal.","改变删除位置序列。"];
X2024G56[12]=["A cat knocks one block off a construction. Which option could be the original?","把掉落方块加回并核对堆叠结构，只有 E 能产生现状。","空间结构","Compare the visible projections after removing one block.","改变掉落的位置或候选结构。"];
H2024G56[14][2]="按中间拼片数量分类后共有 4 种，选 B。";
M2024G56[14][0]="排列计数：分 1、2、3 块中间拼片列出合法连接。";
T2024G56[14]="拼片不可翻面；固定连接口方向后再分类计数可避免重复。";
X2024G56[14]=["How many caterpillars can be made with 1, 2 or 3 fixed puzzle pieces?","按中间拼片数量分类，可接成的顺序共有 4 种。","拼片排列","Match the fixed left and right connectors.","更换拼片形状或可用数量。"];
H2024G56[16][2]="依次圈出三个完整属性组，选项 E 是 3 块的那一组。";
X2024G56[16]=["Three girls take all hearts, all white cookies and all large cookies. Which set is one girl's group?","根据拿取次序和三种属性逐项排除，符合的是 E。","集合分类","Track which cookies remain available at each turn.","改变饼干的属性或数量。"];
H2024G56[17][2]="将所有相邻空格移动成对枚举，合法的移动对有 4 组。";
M2024G56[17][0]="穷举法：列出 8 个单蛙移动，再检查任意两种组合。";
T2024G56[17]="同时移动的问题需要同时检查目标格不冲突及行列总数不变。";
X2024G56[17]=["Two frogs jump to neighbouring empty cells while each row and column keeps two frogs. Count the possibilities.","枚举合法的两步移动组合，共 4 种。","矩阵不变量","List each legal single jump, then pair jumps and test row and column totals.","改变青蛙初始位置。"];
X2024G56[19]=["Choose four unused cards from 1 to 12 so the other eight can form a cycle with adjacent sums divisible by 3.","删去 3、6、9、12 后，余数 1 和 2 的数可交替排列。","模运算","Pair residues 1 and 2 around the octagon.","改变卡片范围。"];
X2024G56[25]=["A mosaic uses 3000 hexagons. About how many triangular tiles are needed?","每个六边形约对应两个三角形，答案约为6000块。","镶嵌比例","Count the triangles in a repeating unit, including shared tiles.","改变六边形数量。"];
X2024G56[26]=["Opposite die faces sum to 7. Faces 1, 2 and 3 meet at P. Find the maximum total at Q, R and S.","对面是6、5、4，最大的相邻顶点和为11。","骰子与对面","Use the opposite-face pairs to list the three faces at each vertex.","改变骰子条件。"];
X2024G56[27]=["Three lines intersect 5, 9 and 11 other lines. Find the fewest lines possible.","线3已与11条线相交，所以至少有12条；四个平行方向组可构造 n=12。","平行线计数","Use direction classes of sizes 7, 3, 1 and 1.","改变指定交点数量。"];
X2024G56[28]=["Two swapped-coefficient quadratics share a root. What relation must hold?","相减得(a−b)x(x−1)=0；c非零排除0，故a+b+c=0。","公共根","Subtract the equations and use the nonzero constant term.","更换方程系数。"];
X2024G56[29]=["A 12 by 2 paper strip is folded at 45 degrees into a right angle. Find the least XY.","两条直角分量各为7，故 XY=7√2。","折叠几何","Use the equal perpendicular components and the Pythagorean theorem.","更改纸带尺寸。"];
KANGAROO_DATA["2024-g5-6"].forEach((q,i)=>{q.hints=H2024G56[i];q.methods=M2024G56[i];q.tip=T2024G56[i];q.teacherTip=q.tip;q.tagsEditable=true;const e=X2024G56[i];KANGAROO_EXTENSIONS[`2024-g5-6-${q.no}`]={text:e[0],answer:e[1],solution:e[1],method:e[3],change:e[4]};});
