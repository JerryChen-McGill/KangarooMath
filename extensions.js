// One authored extension per question. Diagram-dependent variants state all needed conditions.
const KANGAROO_EXTENSIONS = {
  '1999-1': {
    text: 'Beata has two dolls, three apples, one chocolate bar, two oranges, five peaches, and one bike. She gives away one apple and two peaches, then receives three oranges. How many pieces of fruit does she have now?',
    change: '保留物品清单，只增加一次送出和收到水果的过程。',
    method: '仍先筛出水果，再按变化加减；需要持续排除非水果。',
    answer: '10 pieces of fruit',
    solution: '原有水果 3 + 2 + 5 = 10 个。送出 1 + 2 = 3 个，收到 3 个，所以 10 − 3 + 3 = 10 个。'
  },
  '1999-2': {
    text: 'Four circles are labelled A, B, C, D. The list gives ALL circles containing each numbered point: 5 → A,B,C; 9 → A,C,D; 7 → A,B,D; 4 → B,C,D; 6 → A,B,C,D. If circle D is erased, what is the sum of the numbers inside all three remaining circles?',
    change: '仍判断圆的公共部分，增加“去掉一个圆”并求和；用完整归属表替代原图。',
    method: '逐个检查是否同时属于 A、B、C；不要把“属于三个圆”误当作“属于指定的三个圆”。',
    answer: '11',
    solution: '5 和 6 都同时属于 A、B、C。9 缺 B，7 缺 C，4 缺 A。所求和为 5 + 6 = 11。'
  },
  '1999-3': {
    text: 'You have three separate wooden sticks. You break one piece at a time into two pieces, without stacking sticks. How many breaks are needed to get eleven pieces in total?',
    change: '从一根木棍改成三根，并要求总共得到十一段。',
    method: '每掰一次，总段数仍只增加 1；注意起始段数。',
    answer: '8 breaks', solution: '起初有 3 段，目标是 11 段，需要增加 11 − 3 = 8 段，所以掰 8 次。'
  },
  '1999-4': {
    text: 'Karl is now 10 years old and Alice is 3. How many years from now will Karl be twice as old as Alice was one year before that future date?',
    change: '只把比较对象改成“那时前一年的 Alice”。',
    method: '仍用年龄随时间一起增加的关系，额外对齐两个比较时刻。',
    answer: '6 years', solution: '设再过 x 年，Karl 为 10 + x 岁，而那时前一年的 Alice 为 3 + x − 1 = x + 2 岁。10 + x = 2(x + 2)，得 x = 6。核对：Karl 16 岁，前一年的 Alice 8 岁。'
  },
  '1999-5': {
    text: 'School is 6 grid units east and 4 units north of home. Anna walks only east and north. Barbara walks a total of 1 unit west and 2 units south, as well as east and north, and also reaches school. How much longer is Barbara’s route?',
    change: '同样沿方格走到学校，只让一条路线出现少量回头路。',
    method: '分别累计水平、竖直步数；走反方向后还要补回。',
    answer: '6 grid units', solution: 'Anna 走 6 + 4 = 10 格。Barbara 向西 1 格，就要向东 7 格；向南 2 格，就要向北 6 格。总长 1 + 7 + 2 + 6 = 16 格，多走 6 格。'
  },
  '1999-6': {
    text: 'A class has 30 students, with four times as many boys as girls. How many girls must join, with no boys joining or leaving, so that there are twice as many boys as girls?',
    change: '在原人数关系后增加一个入班条件。',
    method: '仍把人数按倍数分份，先算原人数，再算目标人数。',
    answer: '6 girls', solution: '原来女生 30 ÷ 5 = 6 人，男生 24 人。男生是女生两倍时，女生应有 24 ÷ 2 = 12 人，所以要加入 12 − 6 = 6 名女生。'
  },
  '1999-7': {
    text: 'Two apples and one orange weigh 355 g. Two apples and three oranges weigh 665 g. All apples weigh the same, and all oranges weigh the same. How much do one apple and one orange weigh together?',
    change: '相同的苹果部分保留，多出的橙子变成两个，最后求组合重量。',
    method: '仍先比较两组、消去相同部分，再代回。',
    answer: '255 g', solution: '相减得两个橙子重 665 − 355 = 310 g，一个重 155 g。两个苹果重 355 − 155 = 200 g，一个重 100 g。因此一苹果加一橙子重 255 g。'
  },
  '1999-8': {
    text: 'A cat says, “The length of my tail is 12 cm plus two thirds of its length.” How long is its tail?',
    change: '只把“一半”改成“三分之二”。', method: '仍从整体中减去已知分数部分，先找一份。',
    answer: '36 cm', solution: '全长减去三分之二，剩下三分之一对应 12 cm，所以全长为 12 × 3 = 36 cm。核对：12 + 24 = 36。'
  },
  '1999-9': {
    text: 'Mom’s birthday is on a Sunday. Dad’s is 55 days later, and their child’s is 24 days before Dad’s. On what day of the week is the child’s birthday?',
    change: '在相隔 55 天的条件后增加一次向前推日期。', method: '仍按每 7 天一循环，先合并日期差。',
    answer: 'Wednesday', solution: '孩子生日在妈妈生日后 55 − 24 = 31 天。31 = 4 × 7 + 3，星期日后三天是星期三。'
  },
  '1999-10': {
    text: 'Two basketball teams play until one team has won 4 games, with no ties. Team A has already won 2 games and team B has won none. What is the greatest possible number of ADDITIONAL games?',
    change: '赛制不变，只从 2∶0 的中途比分开始问。', method: '仍考虑结束前双方都不能达到 4 胜的极端情况。',
    answer: '5 additional games', solution: '最多打到总比分 4∶3 或 3∶4，共 7 场。已经打过 2 场，所以最多再打 5 场。可行顺序为 B、B、B、A、A，最终 A 以 4∶3 获胜。'
  },
  '1999-11': {
    text: 'John should add 27 to a number and then double the result. Instead, he subtracts 27 and then doubles the result. How much smaller is his answer than the correct one?',
    change: '只增加最后“乘 2”的共同步骤。', method: '仍比较两个结果中的相同与不同部分；差也会被加倍。',
    answer: '108', solution: '加 27 与减 27 的差是 54。两个结果再同时乘 2，差变成 54 × 2 = 108。'
  },
  '1999-12': {
    text: 'A cube with edge 4 cm is cut into cubes with edge 1 cm. Then one complete layer of small cubes is removed from the top and one from the bottom. How many small cubes remain?',
    change: '切法不变，只增加去掉上下两层。', method: '仍按每层数量乘层数计数，需要更新层数。',
    answer: '32 cubes', solution: '每层 4 × 4 = 16 个，原有 4 层。去掉两层后剩 2 层，共 16 × 2 = 32 个。'
  },
  '1999-13': {
    text: 'A pail filled to the top with milk weighs 25 kg. The same pail filled to one third of its capacity weighs 9 kg. How much does the empty pail weigh?',
    change: '把半桶改成三分之一桶，并相应调整称重。', method: '仍相减消去桶重，但差对应三分之二桶奶。',
    answer: '1 kg', solution: '两次重量相差 25 − 9 = 16 kg，是三分之二桶奶。三分之一桶奶重 8 kg，空桶重 9 − 8 = 1 kg。'
  },
  '1999-14': {
    text: 'A jar contains 650 g of jam. Tom eats 5 teaspoons each day, with 6 g in each teaspoon. After how many complete days will there first be too little jam left for another full day’s portion?',
    change: '用同样的数据，改问第一次不够下一天的时间。', method: '仍先求每天用量，再用除法判断余量。',
    answer: '21 complete days', solution: '每天吃 5 × 6 = 30 g。650 = 21 × 30 + 20，吃完 21 天后剩 20 g，不够下一天的 30 g；20 天后还剩 50 g，仍够。'
  },
  '1999-15': {
    text: 'A kangaroo has 11 children. Each child has 11 children, and each grandchild also has 11 children. How many descendants are there in these three generations altogether?',
    change: '代数不变，从只数曾孙改成三代合计。', method: '仍逐代乘 11，再分层相加，避免漏掉前两代。',
    answer: '1463 descendants', solution: '孩子 11 个，孙辈 11 × 11 = 121 个，曾孙辈 121 × 11 = 1331 个。合计 11 + 121 + 1331 = 1463 个，不含最初的袋鼠。'
  },
  '1999-16': {
    text: 'What is the least possible number of children in a family if every child has at least two brothers and at least one sister?',
    change: '只把至少一个兄弟改成至少两个。', method: '仍分别站在男孩与女孩的角度检查；自己不算自己的兄弟姐妹。',
    answer: '5 children', solution: '每个男孩都要有两个其他男孩，所以至少 3 个男孩。每个女孩都要有一个其他女孩，所以至少 2 个女孩。3 男 2 女满足所有条件，最少 5 人。'
  },
  '1999-17': {
    text: 'An open book shows two consecutive page numbers. Their sum is 45. Peter turns one leaf forward, revealing the next pair of pages. What is the product of the two new page numbers?',
    change: '仍由页码和求连续数，增加翻过一张纸。', method: '先找相邻页码，再把左右页各增加 2。',
    answer: '600', solution: '原页码是 (45 − 1) ÷ 2 = 22 和 23。翻一张纸后是 24 和 25，乘积为 24 × 25 = 600。'
  },
  '1999-18': {
    text: '143 children each need half a litre of milk each morning. Each cow provides 20 litres per morning. What is the least number of cows needed if one cow may provide no milk on any given morning?',
    change: '保留人数和每头牛的产奶量，增加一头可能停产。', method: '仍计算够不够并向上取整，再留出一头的余量。',
    answer: '5 cows', solution: '143 人需要 71.5 L，至少需要 4 头正常产奶的牛。若有 5 头，即使停产 1 头，仍有 80 L；只有 4 头时可能只剩 60 L，不够。'
  },
  '1999-19': {
    text: 'A 1.5 m by 1 m bedspread is made of 10 cm square scraps. A button is placed at every corner of a scrap, including points on the boundary. Shared corners receive only one button. How many buttons are needed?',
    change: '尺寸不变，把边界上的顶点也纳入。', method: '仍按横纵网格交点计数，注意边界让每个方向的点数比格数多 1。',
    answer: '176 buttons', solution: '长方向有 15 格、16 个顶点位置，宽方向有 10 格、11 个顶点位置。共 16 × 11 = 176 个交点，每点放一颗。'
  },
  '1999-20': {
    text: 'Pinocchio’s nose starts at 3 cm and doubles in length whenever he lies. What is the least number of lies needed for it to become longer than 1 metre?',
    change: '倍增规律不变，改成反求第一次超过指定长度。', method: '仍逐次翻倍，先统一单位并比较前后两次。',
    answer: '6 lies', solution: '1 m = 100 cm。依次为 6、12、24、48、96、192 cm。5 次时只有 96 cm，6 次时首次超过 100 cm。'
  },
  '1999-21': {
    text: 'There are equally many pigs and ducks in a yard, but twice as many chickens as ducks. Together they have 160 legs. How many ducks are there?',
    change: '只把鸡的数量改成鸭子的两倍，并调整总腿数。', method: '仍按一组动物的腿数分组，只是每组变成一猪、一鸭、两鸡。',
    answer: '16 ducks', solution: '每组有 4 + 2 + 2 × 2 = 10 条腿。160 ÷ 10 = 16 组，每组一只鸭，共 16 只。'
  },
  '1999-22': {
    text: 'One number is chosen from 51, 52, 53, 54, 55. Two zeros are inserted between its digits, making a four-digit number. How much larger is the new number?',
    change: '只把插入一个 0 改成插入两个 0。', method: '仍比较数位价值，个位没变，5 从十位移到千位。',
    answer: '4950', solution: '原数是 50 加个位，新数是 5000 加同一个个位。差为 5000 − 50 = 4950，与选了哪个数无关。'
  },
  '1999-23': {
    text: 'Grandma has enough candy to give 10 pieces to each grandchild except two, who would get none. If she instead gives 8 pieces to every grandchild, 6 pieces remain. How many grandchildren does she have?',
    change: '只把没有拿到糖的孩子从一个改成两个。', method: '仍用两种分法描述同一堆糖，比较总差额。',
    answer: '13 grandchildren', solution: '设有 g 人，糖数同时是 10(g − 2) 和 8g + 6。于是 2g = 26，g = 13。核对：11 × 10 = 110，13 × 8 + 6 = 110。'
  },
  '1999-24': {
    text: 'An arrow points straight up at noon and rotates clockwise once every hour. Between 2:00 p.m. and 3:00 p.m., at what time will it first point diagonally down and left, exactly halfway between down and left?',
    change: '转速不变，改为根据方向反求时刻；用箭头明确初始方向。', method: '仍去掉整圈，用每分钟 6° 联系角度和时间。',
    answer: '2:37:30 p.m.', solution: '2:00 时完成两圈，仍朝上。顺时针到下左方向需转 225°，耗时 225 ÷ 6 = 37.5 分钟，即 37 分 30 秒。因此是下午 2:37:30。'
  },
  '2002-1': {
    text: 'What is the smallest four-digit palindrome greater than 2002 whose digits add up to 8?',
    change: '从辨认回文数改成构造满足数字和条件的最小回文数。', method: '仍用首尾、内侧两位分别相同的结构逐位检查。',
    answer: '2222', solution: '四位回文写成 abba，数字和为 2(a + b) = 8，所以 a + b = 4。大于 2002 的最小首位可取 2，此时 b = 2，得到 2222。首位 1 的数都小于 2002，首位更大的数都更大。'
  },
  '2002-2': {
    text: 'A castle outline follows the grid points (0,0), (0,4), (2,6), (4,4), (4,0), then (0,0). Segment a joins (0,1) to (0,3); b joins (0,4) to (2,6); c joins (1,4) to (3,4); d joins (4,1) to (4,3); e joins (1,0) to (3,0). Which segment is NOT part of the outline? How far up must it be moved to have only its two endpoints on the outline?',
    change: '仍找不属于城堡轮廓的线段，再判断它需移动多远；坐标完整给出新草图。', method: '仍逐段对照轮廓；增加一次位置判断。',
    answer: 'Segment c; move it up 1 grid unit.', solution: 'a、d 在竖直墙上，e 在底边上，b 是左屋顶边。c 在图形内部。向上移动 1 格后，端点成为 (1,5)、(3,5)，分别在两条屋顶边上；线段中间仍在内部。'
  },
  '2002-3': {
    text: 'Mr. and Mrs. Kowalski have three daughters. Each daughter has two brothers. How many different pairs of their children can be chosen? The order of the two children does not matter.',
    change: '家庭条件不变，增加从孩子中选两人的计数。', method: '仍注意同一人不能重复算；先确定人数，再去掉配对的重复。',
    answer: '10 pairs', solution: '共有 3 + 2 = 5 个孩子。每人可与另外 4 人配对，但每对被算两遍，所以共有 5 × 4 ÷ 2 = 10 对。'
  },
  '2002-4': {
    text: 'Find the greatest three-digit number whose tens digit squared equals three times the sum of its hundreds and ones digits.',
    change: '去掉选项，改求符合相同条件的最大数。', method: '仍按数位代入关系，利用数字范围缩小候选。',
    answer: '963', solution: '设百、十、个位为 a、b、c，则 b² = 3(a + c)。b 必须是 3 的倍数；b = 9 时要求 a + c = 27，不可能。要最大先取 a = 9，此时只有 b = 6 可行，a + c = 12，得 c = 3。963 满足 36 = 3 × 12。'
  },
  '2002-5': {
    text: 'Write (2² × 2²⁰⁰⁰ × 2) ÷ (2³ × 2⁹⁹⁹) as a single power of 2.',
    change: '只在原式后增加同底数幂组成的除数。', method: '仍合并同底数幂；乘法加指数，除法减指数。',
    answer: '2¹⁰⁰¹', solution: '分子指数为 2 + 2000 + 1 = 2003，分母指数为 3 + 999 = 1002。相除得 2^(2003 − 1002) = 2¹⁰⁰¹。'
  },
  '2002-6': {
    text: 'A string has 12 hearts: 8 black and 4 white. How many black hearts, and no white hearts, must be added so that black hearts make up three quarters of the total?',
    change: '从原来的三分之二比例开始，只添加黑心，目标改为四分之三。', method: '仍比较黑心与总数的比例；白心数量不变，可先找总份数。',
    answer: '4 black hearts', solution: '目标中白心占四分之一。4 个白心不变，总数应为 4 × 4 = 16 个，黑心 12 个。因此还要添 12 − 8 = 4 个黑心。'
  },
  '2002-7': {
    text: 'Which value is greatest, and how many times the second greatest is it? A: 10 × 0.001 × 100; B: 0.01 ÷ 100; C: 100 ÷ 0.01; D: 10,000 × 100 ÷ 10; E: 0.1 × 0.01 × 10,000.',
    change: '保留原来五个算式，增加最大与次大值的倍数比较。', method: '仍通过小数点移动计算各值，再比较。',
    answer: 'D; 10 times C', solution: 'A = 1，B = 0.0001，C = 10000，D = 100000，E = 10。最大 D，次大 C，倍数为 100000 ÷ 10000 = 10。'
  },
  '2002-8': {
    text: 'A grid shape is a 10-by-7 rectangle with a 4-by-3 rectangle removed from its top-right corner. A further 2-by-2 square is removed from its bottom-left corner. What area remains? Each grid square has area 1.',
    change: '仍是方格复合图形面积，多挖去一个小角；尺寸明确给出，无需原图。', method: '仍补成大长方形再减去缺口，额外检查两块缺口不重叠。',
    answer: '54 square units', solution: '大长方形面积 10 × 7 = 70。两个缺口分别为 4 × 3 = 12、2 × 2 = 4，位于不同角且不重叠。剩余面积 70 − 12 − 4 = 54。'
  },
  '2002-9': {
    text: 'Rectangle ABCD has area 1 m². P is the midpoint of AB. Q is on AD with AQ = AD/3. A triangle APQ is cut off. What is its area in cm²?',
    change: '只把其中一个中点改成距同一顶点三分之一处的点。', method: '仍用相邻垂直边作底和高，按长方形面积的比例计算。',
    answer: '2500/3 cm² (833⅓ cm²)', solution: '三角形面积 = ½ × (AB/2) × (AD/3) = 长方形面积的 1/12。1 m² = 10000 cm²，所以面积为 10000 ÷ 12 = 2500/3 cm²。'
  },
  '2002-10': {
    text: 'Subtract the smallest four-digit number with all digits different from the greatest four-digit number with all digits different. What is the result?',
    change: '只把三位数改成四位数。', method: '仍从高位开始贪心选数字；最小数的首位不能是 0。',
    answer: '8853', solution: '最大是 9876，最小是 1023，差为 9876 − 1023 = 8853。最小数的千位先取 1，百位才能取 0。'
  },
  '2002-11': {
    text: 'Squares I and II have perimeters 16 m and 24 m. Each later square has side length equal to the sum of the previous two side lengths. What is the perimeter of square V?',
    change: '规则不变，只比原题多推一个正方形，并明确边长递推关系。', method: '仍先把周长化成边长，再逐项相加。',
    answer: '104 m', solution: '边长依次为 4、6、10、16、26 m。第五个正方形周长为 26 × 4 = 104 m。'
  },
  '2002-12': {
    text: 'One plate makes one medal and one leftover piece. Four leftover pieces can be melted into a new plate, which also makes one medal and one leftover piece. What is the least number of original plates needed to make at least 86 medals? No material may be borrowed.',
    change: '回收规则不变，从给定材料求数量改成反求最少材料。', method: '仍逐轮回收，注意新做的奖牌也产生余料，并检验相邻起始数。',
    answer: '65 plates', solution: '64 块可做 64 + 16 + 4 + 1 = 85 枚，不够。65 块先做 65 枚；65 份余料换 16 块，剩 1 份；再做 16 枚后有 17 份余料；换 4 块后剩 1 份，做完有 5 份；再换 1 块，做完剩 2 份。共 65 + 16 + 4 + 1 = 86 枚。材料更少不可能比 64 块做得更多，所以最少 65 块。'
  },
  '2002-13': {
    text: 'A 6-by-4 rectangle lies on a unit grid, with A = (0,0), B = (6,0), C = (6,4), D = (0,4). L = (6,2). M starts at (2,3) and moves one grid unit up to (2,4). What is the new area of triangle ALM?',
    change: '仍在 24 格的长方形里求三角形面积，只移动一个顶点一格；坐标替代缺失原图。', method: '仍用外接长方形减去周围三个直角三角形。',
    answer: '10 square units', solution: '新三角形外接框就是 6 × 4 的长方形。框内其余三块面积为 6 × 2 ÷ 2 = 6、4 × 2 ÷ 2 = 4、2 × 4 ÷ 2 = 4。因此三角形面积为 24 − 6 − 4 − 4 = 10。'
  },
  '2002-14': {
    text: 'A = 28 and B = 24 on a number line. C is left of B, and D is right of C. If |AB| = 2|BC| and |BC| = 3|CD|, find C and D.',
    change: '只把第二个距离倍数由 2 改成 3，并明确方向。', method: '仍先由已知坐标求距离，再按方向加减；会出现分数坐标。',
    answer: 'C = 22; D = 22⅔', solution: '|AB| = 4，|BC| = 2，所以 C = 24 − 2 = 22。|CD| = 2/3，D 在 C 右边，所以 D = 22 + 2/3。'
  },
  '2002-15': {
    text: 'There are nine sticks of lengths 1, 2, 3, 4, 5, 6, 7, 8, 9 dm. How many different triangles made from three different sticks include the 2 dm stick?',
    change: '只把必须包含的边从 1 dm 改成 2 dm。', method: '仍用三角形两边和大于第三边，转成另两边之差小于 2。',
    answer: '6 triangles', solution: '另两边不能用 2，且长度不同，差必须为 1。候选为 (3,4)、(4,5)、(5,6)、(6,7)、(7,8)、(8,9)，均满足三角形不等式。含 1 的最小候选 (1,3) 差为 2，只能排成直线，不成立。共 6 个。'
  },
  '2002-16': {
    text: 'Five rays from P point at angles 0°, 20°, 50°, 90°, and 130°, measured counterclockwise from the same reference ray. Add a sixth ray at 180°. How many DISTINCT angle measures strictly between 0° and 180° can be formed by pairs of these six rays?',
    change: '仍数不同角度，增加一条射线；完整给出方向，不依赖原图。', method: '仍逐对计算夹角，排除平角并合并重复角度。',
    answer: '10 distinct measures', solution: '原五条射线的不同夹角为 20、30、40、50、70、80、90、110、130 度。新增射线与它们的差为 180、160、130、90、50 度，去掉 180°，只有 160° 是新值。共 9 + 1 = 10 种。'
  },
  '2002-17': {
    text: 'How many three-digit numbers divisible by 25 can be made from the digits 0, 3, 5, 7 if no digit may be repeated?',
    change: '只把允许重复改成不允许重复。', method: '仍先按末两位分类，再按已用数字限制百位。',
    answer: '3 numbers', solution: '末两位可能为 00、50、75，但 00 重复，不允许。末尾 50 时百位可为 3、7，得到 350、750；末尾 75 时百位只能为 3，得到 375；末尾 25 缺数字 2，不可用。因此共有 3 个数。'
  },
  '2002-18': {
    text: 'Mike, Nate, Oliver and Paul each own one different pet: a cat, a dog, a goldfish or a canary. Nate’s pet has fur; Oliver’s has four legs; Paul’s has no fur; neither Mike nor Nate owns the cat. How many complete assignments of pets are possible?',
    change: '只把 Paul 养鸟放宽为养无毛宠物，从找唯一答案改成数全部可能。', method: '仍用排除表；唯一能确定的先填，剩余情况分类。',
    answer: '2 assignments', solution: 'Nate 有毛又不是猫，所以是狗。Oliver 有四腿，而狗已分配，所以是猫。Mike 与 Paul 分配金鱼和金丝雀，两种交换方式都满足条件，共 2 种。'
  },
  '2002-19': {
    text: 'Two days after his birthday, Johnny said, “The day after tomorrow will be Thursday.” On what day was his birthday, and on what day will it be 100 days after his birthday?',
    change: '把生日后一天改成两天，再增加一个周循环推算。', method: '仍沿时间线前后移动，并把大天数除以 7 取余。',
    answer: 'Sunday; Tuesday', solution: '后天是星期四，说明说话当天是星期二。生日在两天前，是星期日。100 = 14 × 7 + 2，所以生日后 100 天是星期二。'
  },
  '2002-20': {
    text: 'Two triangular regions ABC and ABD have areas 15 and 12. Their overlap is exactly triangle ABE. Their union has area 21. What is the area of the overlap, and what is the area covered by exactly one triangle?',
    change: '保留两三角形面积，改为给并集反求重叠与不重叠面积。', method: '仍用相加时重复计算重叠部分的关系。',
    answer: 'Overlap: 6; exactly one triangle: 15', solution: '两块面积相加为 27，比并集 21 多了重叠面积，所以重叠为 6。并集中去掉重叠，得到只属于一个三角形的面积 21 − 6 = 15。'
  },
  '2002-21': {
    text: 'The ten pair weights for five boys are 90, 92, 93, 94, 95, 96, 97, 98, 100, 101 kg. A sixth boy weighing 50 kg joins. What is the sum of the weights of all fifteen pairs in the new group?',
    change: '保留原记录，增加一人后求所有配对记录的总和。', method: '仍统计每个人在所有配对中被算了几次。',
    answer: '1445 kg', solution: '原十项和为 956，每人出现 4 次，五人总重 956 ÷ 4 = 239 kg。加入后六人共 289 kg，每人在配对中出现 5 次，所以记录总和为 289 × 5 = 1445 kg。'
  },
  '2002-22': {
    text: 'A square has side 8 cm. Join all four side midpoints to form a central diamond. Compare its area S with the total area T of the four corner triangles. Then, in each corner triangle, join the midpoints of the two sides along the square’s edges. What is the total area U of the four smaller triangles next to the original corners?',
    change: '继续使用正方形边的中点，只增加一次取中点；完整描述区域以替代原图。', method: '仍用对称分割和直角三角形面积比较，区分边长减半与面积变化。',
    answer: 'S = T = 32 cm²; U = 8 cm²', solution: '每个大角三角形两直角边都是 4 cm，面积为 8 cm²，四个合计 T = 32。正方形面积 64，故 S = 64 − 32 = 32。再次取中点后，小三角形直角边为 2 cm，每个面积 2 cm²，合计 U = 8。'
  },
  '2002-23': {
    text: 'Count from 1 to 100. Clap once for each number that is divisible by 3 OR contains the digit 3 anywhere, counting a number only once even if it satisfies both rules. How many claps are there?',
    change: '只把“个位是 3”扩大成“任一位含 3”。', method: '仍先数 3 的倍数，再补上含 3 但不是倍数的数，避免重复。',
    answer: '45 claps', solution: '3 的倍数共 33 个。含 3 的数共 19 个：个位是 3 的 10 个，加上 30–39 的 10 个，再减去重复的 33。两类交集为 3、30、33、36、39、63、93，共 7 个。合计 33 + 19 − 7 = 45。'
  },
  '2002-24': {
    text: 'A cyclist rides up a hill at 12 km/h and returns along the same route at 20 km/h. The uphill ride takes 16 minutes longer. What is the average speed for the entire trip, with no stops?',
    change: '所有已知条件不变，增加全程平均速度的求解。', method: '仍从上下坡路程相等找时间，再用总路程除以总时间。',
    answer: '15 km/h', solution: '时间比为 20∶12 = 5∶3，差 2 份对应 16 分钟，所以每份 8 分钟，上坡 40 分钟，下坡 24 分钟。单程 20 × 24/60 = 8 km。总路程 16 km，总时间 64/60 小时，平均速度为 16 ÷ (64/60) = 15 km/h。'
  },
  '2002-25': {
    text: 'Identical shapes have identical positive weights. Let P be the weight of 3 triangles, Q of 2 triangles and 1 circle, R of 1 triangle and 2 circles, and S of 1 triangle and 1 circle. If P < Q < R and Q − P = P/2, put S in order with P, Q and R.',
    change: '仍比较图形组合重量，补充一个差值条件；完整定义各组合代替原图。', method: '仍消去相同图形比较差，再将差值转成单个图形的关系。',
    answer: 'P < S < Q < R', solution: '设三角形重 t，圆重 c。Q − P = c − t = P/2 = 1.5t，所以 c = 2.5t。于是 P = 3t，S = 3.5t，Q = 4.5t，R = 6t，且 t > 0，得到 P < S < Q < R。'
  },
  '2002-26': {
    text: 'Ada has 14 gray, 8 white and 6 black marbles. What is the least number she must draw without looking, without replacement, to be certain of having at least TWO marbles of each color?',
    change: '只把每色至少一个改成每色至少两个。', method: '仍考虑最坏情况：最少的颜色可能直到最后才出现。',
    answer: '24 marbles', solution: '23 个仍可能是 14 灰 + 8 白 + 1 黑，不够。抽 24 个时，黑至少 24 − 22 = 2 个；白至少 24 − 20 = 4 个；灰至少 24 − 14 = 10 个。因此 24 个一定足够，且是最少。'
  },
  '2002-27': {
    text: 'On day n a virus destroys 1/(n + 1) of the memory still remaining. On which day will the remaining memory first be LESS than one tenth of the original amount?',
    change: '破坏规律不变，改成反求第一次低于给定比例的日期。', method: '仍把每天剩余比例相乘并约分，注意“少于”不包括等于。',
    answer: 'Day 10', solution: '第 n 天结束后剩余 (1/2) × (2/3) × … × n/(n + 1) = 1/(n + 1)。第 9 天恰好剩 1/10，第 10 天剩 1/11，首次少于 1/10。'
  },
  '2002-28': {
    text: 'Take the sum of the digits of a four-digit number, then take the sum of the digits of that result. What is the greatest possible final value? Give a four-digit number that achieves it.',
    change: '只把原数从三位改成四位，并要求给出达到最大值的例子。', method: '仍先限制第一次数字和的范围，再在范围内寻找最大数字和。',
    answer: '11; for example, 2999', solution: '第一次数字和最多 36。在 1–36 中，个位为 9 的候选 9、19、29 分别给 9、10、11；30–36 的数字和最多 9，其余数也不超过 11。所以最大为 11。2999 的数字和为 29，再求数字和得 11。'
  },
  '2002-29': {
    text: '32 chess players compete in groups of four. Everyone in each group plays everyone else once, and the best two advance. Continue until the last four have played. The final two then play a best-of-three series, ending as soon as one wins two games. There are no draws. What is the greatest total number of games?',
    change: '前面的分组赛完全不变，只把最后一场改成三局两胜。', method: '仍逐轮统计组数和每组场次，再计算决赛最多场次。',
    answer: '93 games', solution: '各轮小组数为 8、4、2、1，每组 6 场，共 (8 + 4 + 2 + 1) × 6 = 90 场。决赛最多 3 场，合计 93 场。'
  },
  '2002-30': {
    text: 'A connected honeycomb of 32 hexagons uses 123 matches. Add one hexagon outside its boundary sharing exactly two complete sides with the old honeycomb. Then add another sharing exactly three complete sides with the enlarged honeycomb. Every side uses one match. How many matches are now used?',
    change: '保留原蜂巢，在边界接上两个六边形，并明确各自共享边数。', method: '仍用六条边减去已存在的共享边；第二次要以扩展后的图形为准。',
    answer: '130 matches', solution: '第一个新增六边形需要 6 − 2 = 4 根，第二个需要 6 − 3 = 3 根。共享边已有火柴，不能重复添加。总数为 123 + 4 + 3 = 130。'
  }
};

Object.assign(KANGAROO_EXTENSIONS, {
  '2003-g3-4-1': {text:'An L-shaped figure has 4 unit squares in its vertical arm and 6 in its horizontal arm. The corner square is included in both counts. How many unit squares does the figure cover?',change:'把 U 形改成 L 形，并明确交叠的角格。',method:'仍将两臂分开计数，再减去重复计算的交叠格。',answer:'9 squares',solution:'两臂共有 4+6=10 次计数，角上的 1 格被数了两次，因此实际为 4+6−1=9 格。'},
  '2003-g3-4-2': {text:'What is the result of 0 + 2 + 4 + 6 + 8 − 6 − 4 − 2 − 0?',change:'保留加减配对方法，把数列改为连续偶数。',method:'分别求正项和负项，或配对消去相同的数。',answer:'8',solution:'前四个非零加数的和为 2+4+6+8=20，减去 6+4+2=12，结果是 8。'},
  '2003-g3-4-3': {text:'The first car behind a train engine contains 5 boxes. Each following car contains twice as many boxes as the car before it. How many boxes are in the sixth car?',change:'保持逐节加倍，改首节箱数和目标车厢。',method:'每节数量乘 2；第六节是首节连续加倍五次。',answer:'160 boxes',solution:'从 5 开始连续加倍：10、20、40、80、160。因此第六节有 160 箱。'},
  '2003-g3-4-4': {text:'A toy kangaroo is painted in a repeating order: yellow, red, blue. What color is the 20th kangaroo?',change:'保留周期颜色规律，改为三色循环和新的序号。',method:'用序号除以周期长度 3，余数确定循环中的位置。',answer:'red',solution:'20÷3=6 余 2，所以第 20 只对应每组的第 2 个颜色，即红色。'},
  '2003-g3-4-5': {text:'A room has 5 tables with 4 chairs each, 3 tables with 2 chairs each, and 2 tables with 6 chairs each. How many chairs are there altogether?',change:'保持分组乘法求总数，换各组桌椅数量。',method:'分别计算每组的椅子数，再把各组相加。',answer:'38 chairs',solution:'三组分别有 5×4=20、3×2=6、2×6=12 把椅子，共 20+6+12=38 把。'},
  '2003-g3-4-6': {text:'Which collection has exactly twice as many stars as other shapes? A: 5 stars and 3 other shapes; B: 6 stars and 4 other shapes; C: 8 stars and 4 other shapes; D: 7 stars and 4 other shapes; E: 9 stars and 3 other shapes.',change:'把图形识别题改成文字给出各类图形数量。',method:'逐项比较星星数是否等于其他图形数的两倍。',answer:'C',solution:'C 中有 8 颗星和 4 个其他图形，8=2×4。其他选项都不满足。'},
  '2003-g3-4-7': {text:'A rectangle is 5 squares wide and 3 squares high. How many unit squares does a diagonal from one corner to the opposite corner intersect?',change:'保留数对角线经过的格子，改变长宽。',method:'当长宽互质时，格子数为宽+高−1；也可逐行追踪。',answer:'7 squares',solution:'5 与 3 互质，斜线不会穿过格点。逐行经过的方格数为 5+3−1=7。'},
  '2003-g3-4-8': {text:'A figure made from 12 identical cubes weighs 240 grams. How much does one cube weigh?',change:'仍由相同小立方体求单块重量，改总块数和总重量。',method:'总重量平均分给每块。',answer:'20 grams',solution:'每块重量为 240÷12=20 克。'},
  '2003-g3-4-9': {text:'Starting with 5, Philip writes consecutive natural numbers until he has written 45 digits. What is the greatest number he writes?',change:'保留数字位数累计，改变起始数和总位数。',method:'先数一位数，再把剩余位数按每个两位数占两位分组。',answer:'29',solution:'从 5 到 9 共写 5 位，剩 40 位，可再写 20 个两位数。由 10 起第 20 个数是 29。'},
  '2003-g3-4-10': {text:'Anna fell asleep at 10:15 p.m. and woke at 6:30 a.m. Her brother slept 2 hours and 25 minutes longer. How long did he sleep?',change:'保留跨午夜求睡眠时长，再增加另一段时间。',method:'先分段求 Anna 睡了多久，再加上多睡的时长。',answer:'10 hr 40 min',solution:'Anna 从 10:15 p.m. 到午夜睡 1小时45分，再到 6:30 a.m. 睡 6小时30分，共 8小时15分。加上 2小时25分，弟弟睡了 10小时40分。'},
  '2003-g3-4-11': {text:'There are 25 bars in an alternating black-and-white row. Both end bars are black. How many white bars are there?',change:'保留交替排列和黑色两端，增加总条数。',method:'首尾同色且交替时，黑条比白条多一条。',answer:'12 white bars',solution:'25 条中黑条比白条多 1 条，因此白条数为 (25−1)÷2=12。'},
  '2003-g3-4-12': {text:'A kangaroo jumped 42 dm 30 mm in training and 95 cm farther in the final. How far did it jump in the final? (1 dm = 10 cm; 10 mm = 1 cm)',change:'保留单位换算后相加，替换训练成绩和增量。',method:'先统一换成厘米，再相加并转回米和厘米。',answer:'5 m 18 cm',solution:'42 dm=420 cm，30 mm=3 cm，所以训练成绩为 423 cm。决赛为 423+95=518 cm，即 5 m 18 cm。'},
  '2003-g3-4-13': {text:'Paul chose a number, subtracted 407 from it, and then added 3007. The result was 26000. What number did he choose?',change:'保留两步逆运算，改变减数、加数和结果。',method:'把已知运算合并成净增加量，再倒推。',answer:'23400',solution:'先减 407 再加 3007，净增加 2600。原数为 26000−2600=23400。'},
  '2003-g3-4-14': {text:'What is the greatest possible sum of the digits shown by a valid 24-hour time from 20:00 to 23:59?',change:'保留 24 小时制数字和，限定在晚间时段。',method:'小时只能是 20、21、22 或 23；分钟数字和最多为 14。',answer:'19',solution:'小时数字和在 20 至 23 时最多为 2+3=5，分钟 59 的数字和为 14。因此最大值是 5+14=19，可由 23:59 达到。'},
  '2003-g3-4-15': {text:'Mark says that if he had picked twice as many apples as he did, he would have 30 more apples than he has now. How many apples did he pick?',change:'保留“翻倍后比原数多”的关系，改变差值。',method:'两倍与一倍之间相差的数量正好等于原数量。',answer:'30 apples',solution:'若摘到两倍，增加的苹果数正好等于原来摘的数量。因此他摘了 30 个。'},
  '2003-g3-4-16': {text:'Points A, B, C, and D lie on a line in that order. AC = 14 m, BD = 18 m, and AD = 25 m. What is BC?',change:'保留线段相加关系，改三段总长。',method:'设相邻三段长度为 x、y、z，用 AC、BD、AD 三个关系相消。',answer:'7 m',solution:'设 AB=x、BC=y、CD=z。x+y=14，y+z=18，x+y+z=25。前两式相加减去第三式，得 y=14+18−25=7 米。'},
  '2003-g3-4-17': {text:'A class has 35 students. Four have no siblings. Fifteen students have a sister and 22 have a brother. How many students have both a brother and a sister?',change:'保留集合交集计数，改变班级和各组人数。',method:'先求至少有一个兄弟姐妹的人数，再用容斥原理。',answer:'6 students',solution:'至少有一个兄弟姐妹的学生有 35−4=31 人。交集为 15+22−31=6 人。'},
  '2003-g3-4-18': {text:'Daniel has 15 pieces of paper. He cuts some pieces into three parts and then has 41 pieces. How many pieces did he cut?',change:'保留每次剪切增加两片，改变起始和最终片数。',method:'每剪一片成三片，净增加 2 片。',answer:'13 pieces',solution:'总数增加 41−15=26 片。每次增加 2 片，所以剪了 26÷2=13 片。'},
  '2003-g3-4-19': {text:'Large, medium, and small cookies cost $5, $2, and $1. A customer buys 12 cookies for $19, with at least one of each kind. How many large cookies did the customer buy?',change:'保持三种单价和总数关系，调整价格及购买总量。',method:'先假设全买最便宜的，再把大、中饼干的额外费用列式。',answer:'1 large cookie',solution:'若 12 块全是小饼干，需 $12。实际多花 $7。每块大饼干比小饼干多 $4，每块中饼干多 $1，所以 4L+M=7。又 L+M+S=12 且三种都至少一块，L=1、M=3、S=8；L=2 会要求 M<0。'},
  '2003-g3-4-20': {text:'A rectangular prism measures 6 × 5 × 4 cubes. Its entire outer layer is red, while all interior cubes are blue. How many blue cubes are there?',change:'保留去掉外层求内部立方体，改变长方体尺寸。',method:'每个方向都去掉两侧各一层，再相乘。',answer:'24 blue cubes',solution:'内部尺寸为 (6−2)×(5−2)×(4−2)=4×3×2=24，因此有 24 个蓝色小方块。'},
  '2003-g3-4-21': {text:'Jerry has $12 left after buying 4 basketballs. If he buys 8 basketballs, he must borrow $20. How much does one basketball cost?',change:'保留买多一些后从结余变成借款，改变数量与金额。',method:'多买的球总价等于原结余加上所借金额。',answer:'$8',solution:'多买 8−4=4 个球，资金从剩 12 美元变为借 20 美元，差额 32 美元。每个球 32÷4=8 美元。'},
  '2003-g3-4-22': {text:'A 3 × 2 × 2 rectangular prism is built from unit cubes. All outer cubes are red and the interior cubes are blue. How many blue cubes are there?',change:'保留数内部小方块，改成长宽高明确的长方体。',method:'内部尺寸每个方向减去两层外表面。',answer:'0 blue cubes',solution:'内部尺寸为 (3−2)×(2−2)×(2−2)，其中后两项为 0。这个长方体没有完全位于内部的小方块，所以蓝色方块数为 0。'},
  '2003-g3-4-23': {text:'A 4 × 4 square puzzle has 16 unit cells. Two non-overlapping pieces cover 5 cells and 7 cells. How many cells remain uncovered?',change:'把依赖原图的拼片题改为可独立作答的面积计数。',method:'先求正方形总格数，再减去两块拼片覆盖的格数。',answer:'4 cells',solution:'正方形有 4×4=16 格，两块拼片共覆盖 5+7=12 格，因此还剩 16−12=4 格。'},
  '2003-g3-4-24': {text:'At a toy store, three dogs and two bears cost the same as two dogs and five bears. What is the relationship between the price of one dog and one bear?',change:'保留比较两个等价购买方案，改动物数量并求价格比例。',method:'令两种总价相等，再消去相同数量的动物。',answer:'A dog costs three times as much as a bear.',solution:'设狗和熊的价格分别为 D、B。由 3D+2B=2D+5B，移项得 D=3B，所以一只狗的价格是熊的三倍。'}
});

Object.assign(KANGAROO_EXTENSIONS, {
  '2004-g3-4-1': {text:'Find 3001 + 3002 + 3003 + 3004.',change:'少加一项，并把各数的千位增加 1000。',method:'把每个加数拆成整千数和个位部分。',answer:'12010',solution:'4×3000+(1+2+3+4)=12000+10=12010。'},
  '2004-g3-4-2': {text:'Mia was 6 years old when her brother was born. Mia is now 13. What is their age difference?',change:'换成另一组年龄差和现在年龄。',method:'出生时的年龄差会一直保持不变。',answer:'6 years',solution:'弟弟出生时 Mia 已经 6 岁，所以两人的年龄差始终为 6 岁。'},
  '2004-g3-4-3': {text:'A straight road section of 5 km is replaced by a rectangular detour with two vertical sides of 4 km each and a horizontal side equal to the old section. How much longer is the detour?',change:'改变原路长度与绕行高度。',method:'相同的水平路段抵消，只计算新增的两条竖路。',answer:'8 km',solution:'绕行多出的只有两条各 4 km 的竖边，增加 4+4=8 km。'},
  '2004-g3-4-4': {text:'Which expression is not equal to 804 − 276? A 904−376, B 814−286, C 799−271, D 1804−1276, E 804−286.',change:'更换基准减法与选项中的数。',method:'算出基准差，再检查两数是否同时改变相同数量。',answer:'E',solution:'804−276=528。A–D 同时对被减数和减数作相同增减，差不变；E 的差为 518。'},
  '2004-g3-4-5': {text:'There were some ducks in a pond. Four left and 6 returned. There are now 15 ducks. How many were there at first?',change:'改变离开和返回的数量。',method:'从最后数量开始，按相反顺序撤销每一步。',answer:'13 ducks',solution:'先撤销返回的 6 只，再加回离开的 4 只：15−6+4=13。'},
  '2004-g3-4-6': {text:'Numbers 2, 5, 7, 9, and 12 are in overlapping shapes. The circle and rectangle both contain 5, 7, and 9; the triangle contains 7. Which numbers are in the circle and rectangle but not the triangle?',change:'用文字给出区域关系，保留“交集后排除”。',method:'先列圆与矩形的共同元素，再删去三角形中的元素。',answer:'5 and 9',solution:'圆与矩形共有 5、7、9；去掉也在三角形内的 7，留下 5 和 9。'},
  '2004-g3-4-7': {text:'Red, blue, and green buildings stand next to each other in a row. Blue is between red and green. Which color is in the middle?',change:'把楼号问题改成判断三栋相邻排列的中间颜色。',method:'写出红—蓝—绿及其反向排列。',answer:'Blue',solution:'蓝色楼位于红色和绿色之间，因此无论排列方向如何，中间颜色都是蓝色。'},
  '2004-g3-4-8': {text:'A board has 24 squares, 5 already shaded. How many more squares should be shaded so shaded squares equal half the unshaded squares?',change:'保留原格数关系，换一个初始涂色数。',method:'设再涂 x 格，令涂色数等于未涂数的一半。',answer:'3',solution:'涂后涂色格为 5+x，白格为 19−x。由 5+x=(19−x)/2，得 10+2x=19−x，故 x=3。'},
  '2004-g3-4-9': {text:'A black-and-white pattern is covered by a matching sheet. Which sheet makes every square black? Choose the one whose color is opposite in every corresponding cell.',change:'明确每格颜色必须互补的拼图条件。',method:'对齐后逐格比较，不能只凭整体轮廓判断。',answer:'The sheet with the complementary pattern',solution:'每个位置叠合后都必须恰有一黑一白。选出所有对应格颜色都相反的图案即可。'},
  '2004-g3-4-10': {text:'One balance shows 6 identical pencils weighing 42 g. Another shows one pencil and a pen weighing 12 g. What does the pen weigh?',change:'替换天平上的数量和重量。',method:'先求单支铅笔重量，再从第二个总重中减去。',answer:'5 g',solution:'一支铅笔重 42÷6=7 克，所以钢笔重 12−7=5 克。'},
  '2004-g3-4-11': {text:'One clock is correct, one is 15 minutes fast, one is 15 minutes slow, and one is broken. The fast clock shows 7:10. What time is it?',change:'改变钟表误差与快钟读数。',method:'从快钟的读数减去快出的时间。',answer:'6:55',solution:'快钟比正确时间多 15 分钟，故正确时间为 7:10−0:15=6:55。'},
  '2004-g3-4-12': {text:'A basket had 24 apples and 18 oranges. Guests ate one third of the apples and half of the oranges. How many pieces of fruit remain?',change:'把剩余比例题改成给定数量的应用题。',method:'分别求两种水果剩余数量，再相加。',answer:'25 pieces',solution:'苹果剩 24×2/3=16 个，橙子剩 18×1/2=9 个，共 25 个。'},
  '2004-g3-4-13': {text:'Nora divided a number by 8 instead of multiplying it by 8 and got 90. What would the correct product have been?',change:'更换除数与错误结果。',method:'先乘回除数还原原数，再按正确操作相乘。',answer:'5760',solution:'原数为 90×8=720。正确结果为 720×8=5760。'},
  '2004-g3-4-14': {text:'A book opens to facing pages 18 and 39. How many sheets lie between these pages?',change:'更换对开页码，保留书页与纸张的关系。',method:'页码间有 20 页；每张纸含两页。',answer:'10 sheets',solution:'中间页码为 19 至 38，共 20 页；每张纸两页，所以是 10 张。'},
  '2004-g3-4-15': {text:'Leo is 40 days older than Maya. Leo celebrates his birthday on Friday this year. What weekday is Maya’s birthday?',change:'改年龄差和生日星期。',method:'用天数除以 7 取余数，再倒推星期。',answer:'Sunday',solution:'40=5×7+5。Maya 比 Leo 早 40 天，即星期五往前 5 天，为星期日。'},
  '2004-g3-4-16': {text:'A 2×2 table has row sums 9 and 13, and its first column sums to 10. What is the second column sum?',change:'更换两行的总和与已知列和。',method:'全表总和可由行求，也可由两列求。',answer:'12',solution:'全表和为 9+13=22。第二列和为 22−10=12。'},
  '2004-g3-4-17': {text:'A cube has three pairs of opposite faces. The pairs are red, blue, and green. Which faces are opposite?',change:'把找立方体网格改为描述成品的相对面配对。',method:'按题意把相同颜色配成相对面。',answer:'Red with red, blue with blue, and green with green',solution:'题目直接规定相对面同色，因此三对分别是红对红、蓝对蓝、绿对绿。'},
  '2004-g3-4-18': {text:'Four square tiles form one larger square. Two consecutive lengths along its bottom edge are 12 cm and 28 cm. Find the large square side.',change:'改拼图边长，保留沿外边界求和。',method:'大正方形边长等于底边上两段长度之和。',answer:'40 cm',solution:'大正方形的一边由 12 cm 和 28 cm 两段组成，边长为 12+28=40 cm。'},
  '2004-g3-4-19': {text:'Ava is 6 places to the left of Ben. There are 15 students to Ben’s left and 18 students to Ava’s right. How many students are in the class?',change:'更换队伍人数与两人距离。',method:'按位置划分左段、两人间及右段，避免重复计算。',answer:'28',solution:'Ava 左侧有 15−6=9 人；Ben 右侧有 18−6=12 人。连同两人间的 5 人和 Ava、Ben 两人，总数为 9+5+12+2=28。'},
  '2004-g3-4-20': {text:'The digit sum of a 10-digit number is 8. What must the product of its digits be?',change:'改变数字和，利用位数与最小数字和作判断。',method:'10 个非零数字的和至少是 10。',answer:'0',solution:'若十个数字都非零，数字和至少为 10；现在数字和只有 8，所以至少有一个数字为 0，数字乘积必为 0。'},
  '2004-g3-4-21': {text:'A 4×4×4 cube is colored like a 3D checkerboard, with one corner cube black. How many cubes are white?',change:'改变大立方体的边长，继续使用交替染色。',method:'偶数边长的立方体黑白格数相等。',answer:'32',solution:'共有 4³=64 个小立方体。三维棋盘染色下两色数量相等，白色有 32 个。'},
  '2004-g3-4-22': {text:'Three friends contribute $2, $3, and $5 toward a winning ticket and share an $800 prize in proportion to their contributions. How much does the second friend receive?',change:'改变出资额与奖金总额。',method:'求总份数，再计算第二人所占比例。',answer:'$240',solution:'总出资份数是 2+3+5=10。第二人占 3/10，得到 800×3/10=$240。'},
  '2004-g3-4-23': {text:'A team plays three games. A win is 3 points, a draw 1, and a loss 0. Which total is impossible: 0, 1, 3, 6, or 8?',change:'保留三场比赛积分规则，替换候选总分。',method:'列出三场比赛中胜、平、负的组合。',answer:'8',solution:'每场分别得 0、1 或 3 分。三场总分不可能为 8：达到 8 只能由 3+3+2 构成，但单场没有 2 分选项。'},
  '2004-g3-4-24': {text:'A multiplication table has row labels 2, 3, 5 and column labels 4, 6. Which two cells have equal products?',change:'用小型乘法表替换依赖图示的数字表。',method:'分别计算行标签与列标签的乘积。',answer:'3×4 and 2×6',solution:'3×4=12，2×6=12，所以这两格的值相同。'}
});

Object.assign(KANGAROO_EXTENSIONS, {
  '2004-g5-6-1': {text:'Compute 2000 − 200 − 20 − 7.',change:'更换连续减数。',method:'先合并减数，再从 2000 中减去。',answer:'1773',solution:'200+20+7=227，因此 2000−227=1773。'},
  '2004-g5-6-2': {text:'A 3×3 grid uses 1, 2, and 3 exactly once in each row and column. The first two entries of a row are 1 and 2. What is its third entry?',change:'将 4×4 拉丁方格缩小并给出一行的两个数字。',method:'每行必须包含 1、2、3 各一次。',answer:'3',solution:'已有 1 和 2，唯一缺少的数字是 3。'},
  '2004-g5-6-3': {text:'Compute (12×25)×(4×50).',change:'更换乘数，仍可重排因数凑整。',method:'先把 25×4 与 12×50 配成容易计算的积。',answer:'60000',solution:'(25×4)×(12×50)=100×600=60000。'},
  '2004-g5-6-4': {text:'720,000 seconds is how many hours?',change:'替换秒数，保留秒与小时换算。',method:'用总秒数除以每小时 3600 秒。',answer:'200 hours',solution:'720000÷3600=200 小时。'},
  '2004-g5-6-5': {text:'What is the remainder when 20052004 is divided by 2005?',change:'改年份数字并使用除法余数。',method:'写成 2005 的倍数加上剩余部分。',answer:'2004',solution:'20052004=2005×10000+2004，因此余数是 2004。'},
  '2004-g5-6-6': {text:'A black-and-white grid is covered by a second grid. Which second grid makes every resulting square black?',change:'把图案覆盖题改成明确的逐格颜色条件。',method:'检查每个位置是否恰好叠有一黑一白。',answer:'The grid with opposite colors in every matching cell',solution:'每个位置都必须一黑一白，叠加后才全黑。逐格颜色相反的图案满足条件。'},
  '2004-g5-6-7': {text:'Which is not a factor of 360: 8, 9, 12, 15, 18, or 14?',change:'替换被测数并加入一个非因数。',method:'逐个做整除检验，或用质因数分解。',answer:'14',solution:'360 能被 8、9、12、15、18 整除；360÷14 不是整数，因此 14 不是因数。'},
  '2004-g5-6-8': {text:'Three rabbits eat 91 carrots. The son eats 15; the father eats 8 more than the mother. How many carrots does the mother eat?',change:'改变总量、儿子份量和父母差额。',method:'从总数减儿子份量，再减去父亲多吃的部分并平分。',answer:'34',solution:'父母共吃 91−15=76 根。母亲少 8 根，故母亲吃 (76−8)÷2=34 根。'},
  '2004-g5-6-9': {text:'Seven bus stops are equally spaced. Stops 1 and 4 are 450 m apart. What is the distance from stop 1 to stop 7?',change:'更换站数和已知站间距离。',method:'先求单段距离，再数目标路段数。',answer:'900 m',solution:'站 1 到站 4 有 3 段，每段 150 米；站 1 到站 7 有 6 段，距离 900 米。'},
  '2004-g5-6-10': {text:'Evaluate 2 − (3 − (4 − (5 − 6))).',change:'改变括号层数和其中的数字。',method:'从最内层括号向外依次计算。',answer:'4',solution:'5−6=−1；4−(−1)=5；3−5=−2；2−(−2)=4。'},
  '2004-g5-6-11': {text:'Two identical asymmetric pieces may be rotated but not flipped. Can a target requiring one piece to be a mirror image of the other be formed?',change:'明确可旋转但不可翻面的拼图规则。',method:'旋转不能改变图形的左右手方向。',answer:'No',solution:'镜像方向只能通过翻面得到；若禁止翻面，单靠旋转无法形成所需镜像。'},
  '2004-g5-6-12': {text:'A sheet is folded in half four times. A hole is punched away from all fold lines. How many holes appear when it is unfolded?',change:'减少一次对折。',method:'每折一次，重叠层数加倍。',answer:'16',solution:'四次对折形成 2⁴=16 层，展开后有 16 个孔。'},
  '2004-g5-6-13': {text:'Different symbols represent different digits. If △+△=10 and △+□=13, what digit is □?',change:'用两条简单等式替代原符号算式。',method:'先由重复符号求 △，再代回求 □。',answer:'8',solution:'2△=10，所以 △=5；于是 □=13−5=8。'},
  '2004-g5-6-14': {text:'Four apples and one orange weigh 260 g. One apple and four oranges weigh 200 g. What is the combined weight of one apple and one orange?',change:'改水果数量与两次称重结果。',method:'把两条等式相加，消去对单种水果的分别求值。',answer:'92 g',solution:'两式相加得 5 个苹果加 5 个橙子共 460 克，所以一个苹果加一个橙子重 460÷5=92 克。'},
  '2004-g5-6-15': {text:'Choose from 8, 9, 10, 15, and 17. Exactly one statement is true: “the number is 8” and “the number is prime”. Exactly one is true: “the number is even” and “the number is 15”. What is the number?',change:'增加候选范围，使两组真值条件有唯一解。',method:'逐个候选检查两组陈述中真句的数量。',answer:'8',solution:'8 是偶数但不是素数：第一组只有“数是 8”为真，第二组只有“数是偶数”为真。9、10、15、17 至少有一组不满足恰有一句真，因此答案为 8。'},
  '2004-g5-6-16': {text:'A 3×3 grid has shaded cells at the four corners and the center. How many additional cells must be shaded to make it symmetric about both the horizontal and vertical middle lines?',change:'明确方格图案与要求的对称轴。',method:'检查每个格子关于两条中线的镜像位置。',answer:'0',solution:'四角在两条中线反射下互相对应，中心保持不变，因此现有图案已同时具有水平和竖直对称，无需再涂格子。'},
  '2004-g5-6-17': {text:'A cube has one corner cut off by a plane through the three neighboring vertices. How many new faces are created?',change:'把找网格题改成计算截角后新增面数。',method:'切掉一个顶点会形成一个新的截面。',answer:'1',solution:'通过三个邻接顶点的平面切掉一个角，产生一个新的三角形面。'},
  '2004-g5-6-18': {text:'A rectangular tile has perimeter 24 dm. A snail walks once around its edge, then walks 7 dm along an interior line. How long is its path?',change:'改用明确路径描述来练习周长加线段。',method:'先求完整绕行长度，再加上额外路段。',answer:'31 dm',solution:'绕边一周为 24 dm，再走 7 dm，总路程是 31 dm。'},
  '2004-g5-6-19': {text:'Monday and Thursday are rainy, Sunday is foggy, and all other days are sunny. During a 30-day trip, which starting weekday gives the most sunny days?',change:'更换天气安排和行程长度。',method:'拆成完整周与余下两天比较。',answer:'Tuesday',solution:'30 天包括 4 个完整周和 2 天。完整周贡献相同；余下两天若从星期二开始是二、三，均晴天，所以晴天最多。'},
  '2004-g5-6-20': {text:'Two natural numbers sum to 81, and 5 times the first equals 4 times the second. Find the larger number.',change:'替换总和及比例系数。',method:'先化成两数的最简比例，再按总份数分配。',answer:'45',solution:'5a=4b，故 a:b=4:5。总份数为 9，每份 81÷9=9，较大的数为 5×9=45。'},
  '2004-g5-6-21': {text:'How many positive divisors does 2×3×5×11 have?',change:'改变一个质因数，维持四个互异质因数。',method:'每个指数为 1 的质因数都有“选或不选”两种选择。',answer:'16',solution:'因数个数为 (1+1)⁴=16。'},
  '2004-g5-6-22': {text:'Two people have 84 shells altogether. No other information is given. How many shells does the first person have?',change:'突出条件不足，并要求判断能否唯一确定。',method:'举出两种不同分配，检查是否都符合总数。',answer:'Cannot be determined',solution:'例如第一人有 40 个、第二人有 44 个，或第一人有 50 个、第二人有 34 个，总数都为 84。因此第一人的数量无法唯一确定。'},
  '2004-g5-6-23': {text:'An 8-cell row has 5 in cell 1. Every three consecutive cells sum to 18. What is in cell 4?',change:'改变格数和首格数，仍利用相邻三格和相等。',method:'比较第 1–3 格与第 2–4 格可推出第 1 格等于第 4 格。',answer:'5',solution:'两组和分别为 a₁+a₂+a₃=18、a₂+a₃+a₄=18。相减得 a₁=a₄，所以第 4 格是 5。'},
  '2004-g5-6-24': {text:'A square is divided into 80 equal cells; 30 are shaded. What fraction of the unshaded area is the shaded area?',change:'替换总格数和阴影格数。',method:'用阴影格数除以未涂格数并约分。',answer:'3/5',solution:'未涂格有 80−30=50 格。阴影面积与未涂面积之比为 30/50=3/5。'},
  '2004-g5-6-25': {text:'Two games originally cost the same. One is discounted by 10%, the other increased by 20%; their new prices differ by $9. What is the cheaper new price?',change:'改变折扣、涨幅和新价格差。',method:'设原价为 p，由两种价格变化的总差求 p。',answer:'$27',solution:'差额为 30%p=$9，原价 p=$30。打折后的价格为 0.9×30=$27。'},
  '2004-g5-6-26': {text:'Consecutive integers fill a 3×3 grid from left to right, row by row, beginning with 1. What number is in the center cell?',change:'把依赖原图的填数题改为明确顺序。',method:'按行列出九个连续整数，再找中间位置。',answer:'5',solution:'依次填入 1 至 9，中心格是第 5 个数，即 5。'},
  '2004-g5-6-27': {text:'A 12-digit number consists entirely of 1s. What is its remainder when divided by 3?',change:'缩短全由 1 组成的数，并询问余数。',method:'用各位数字和判断除以 3 的余数。',answer:'0',solution:'数字和为 12，能被 3 整除，因此原数除以 3 的余数为 0。'},
  '2004-g5-6-28': {text:'Pack 96 red and 144 green marbles into identical-size single-color boxes. What is the fewest boxes?',change:'替换两种颜色的弹珠数量。',method:'每盒装最大公因数颗，再分别计算盒数。',answer:'5 boxes',solution:'最大盒容量为 gcd(96,144)=48。红球需 2 盒，绿球需 3 盒，共 5 盒。'},
  '2004-g5-6-29': {text:'A quiz has 8 questions. A correct answer earns 4 points and a wrong answer loses 2. Alex answers all questions and scores 20. How many answers are correct?',change:'改变题数与每题得失分，并使用可整除的总分。',method:'设正确题数为 c，列出总分关于 c 的方程。',answer:'6',solution:'总分为 4c−2(8−c)=6c−16。令其等于 20，得 6c=36，因此 c=6。'},
  '2004-g5-6-30': {text:'A right triangle has perpendicular legs 5 cm and 12 cm. Find its area.',change:'替换直角边长度，继续使用底乘高的一半。',method:'两条直角边互相垂直，可直接作为底和高。',answer:'30 cm²',solution:'面积为 1/2×5×12=30 平方厘米。'}
});

Object.assign(KANGAROO_EXTENSIONS, {
  '2005-g3-4-1': {text:'Find the missing number: 2400 − 300 + □ = 2500.',change:'把被遮住数的应用情境改为直接等式。',method:'先算已知部分，再用目标结果倒推。',answer:'400',solution:'2400−300=2100；□=2500−2100=400。'},
  '2005-g3-4-2': {text:'The minute hand starts at 12. Where does it point after 11 quarters of an hour?',change:'把经过时间改为 11 个一刻钟。',method:'除去整圈后只看剩余的刻钟数。',answer:'At 9',solution:'11 个一刻钟是 2 小时 45 分钟。转过两圈后剩 45 分钟，指向 9。'},
  '2005-g3-4-3': {text:'A ticket costs $4. Sam pays $20 and receives $4 change. How many tickets did he buy?',change:'换单价、付款额和找零。',method:'先求实际花费，再除以每张票价。',answer:'4 tickets',solution:'实际花费 20−4=$16；16÷4=4 张。'},
  '2005-g3-4-4': {text:'Six rows of monkeys have 18 monkeys altogether. How many monkeys are in each row if they share equally?',change:'替换总数和排列行数。',method:'总数平均分到各行。',answer:'3 monkeys',solution:'18÷6=3 只猴子一行。'},
  '2005-g3-4-5': {text:'A family has 2 adults, 3 children, 1 dog, and 2 parrots. How many legs do they have?',change:'替换家庭成员和动物数量。',method:'按类别计算腿数并相加。',answer:'18',solution:'5 个人有 10 条腿，狗有 4 条，两只鹦鹉有 4 条，共 18 条。'},
  '2005-g3-4-6': {text:'A chocolate bar has 12 columns and 5 rows of square pieces. A 2-by-3 corner block has been eaten. How many pieces remain?',change:'改巧克力格数和缺角大小。',method:'用总格数减去缺失长方形的面积。',answer:'54',solution:'原有 12×5=60 格；缺少 2×3=6 格，剩 60−6=54 格。'},
  '2005-g3-4-7': {text:'A bridge allows vehicles no wider than 300 cm and no heavier than 4000 kg. Which truck can cross: (290,4100), (300,3990), or (310,3900)?',change:'更换桥梁限制与车辆数据。',method:'对每辆车同时检查宽度和重量上限。',answer:'The truck measuring 300 cm and 3990 kg',solution:'第一辆超重，第三辆超宽；第二辆没有超过任何限制。'},
  '2005-g3-4-8': {text:'Seven friends pay equal amounts. The total is between $320 and $360 and ends in 0. What is the total?',change:'限定七人均摊总额范围，使候选唯一。',method:'找区间内以 0 结尾且能被 7 整除的数。',answer:'$350',solution:'区间内以 0 结尾的候选为 330、340、350、360；只有 350 是 7 的倍数，因此总额是 $350。'},
  '2005-g3-4-9': {text:'What is the smallest family in which every boy has a brother and every girl has a sister?',change:'把“每个孩子”改成分性别表述，保留最少人数推理。',method:'分别满足男孩有兄弟、女孩有姐妹的最低人数。',answer:'4 children',solution:'至少需要两个男孩和两个女孩，共 4 个孩子。'},
  '2005-g3-4-10': {text:'Which is an even four-digit number with distinct digits, hundreds digit twice the ones digit, and tens digit greater than thousands digit? A 2864, B 3874, C 3875',change:'替换候选数字，保留数字性质筛选。',method:'先筛偶数，再逐项检验各位互异和数位关系。',answer:'B',solution:'3874 为偶数，数字互异，8=2×4 且 7>3；A 的百位不是个位两倍，C 是奇数。'},
  '2005-g3-4-11': {text:'A 5×5 square is made of unit squares. A 2×3 rectangular piece is removed from one corner. How many unit squares remain?',change:'把拼片匹配改为可独立计算的面积变化。',method:'从大正方形总格数减去被移除长方形的格数。',answer:'19',solution:'原有 5×5=25 格，移除 2×3=6 格，剩 25−6=19 格。'},
  '2005-g3-4-12': {text:'A lift carries at most 140 kg. Four people weigh 50, 70, 70, and 70 kg. What is the fewest trips to carry everyone?',change:'替换电梯载重与体重。',method:'两位 70 kg 不能同乘，50 kg 可与一位 70 kg 同乘。',answer:'3 trips',solution:'50+70=120 kg 可同乘；剩下两位 70 kg 分别乘，因此共 3 趟。'},
  '2005-g3-4-13': {text:'Mira has $18 and Noah has $82. Lee has as much more than Mira as Lee has less than Noah. How much does Lee have?',change:'替换两端金额。',method:'中间金额等于两端金额的平均数。',answer:'$50',solution:'Lee=(18+82)÷2=$50。'},
  '2005-g3-4-14': {text:'In a 4×4 grid, counters occupy cells (1,1), (1,2), (1,3), (2,1), (2,4), (3,2), (3,3), and (4,3). Move one counter to an empty cell so every row and column has exactly two.',change:'明确给出格子位置，练习找超额行列与缺额行列。',method:'将计数最多行列的交点移到计数不足行列的交点。',answer:'Move a counter from (1,3) to (4,4)',solution:'原行数为 3、2、2、1；列数为 2、2、3、1。把 (1,3) 的袋鼠移至空格 (4,4)，第 1、3 行和第 3、4 列各调整一只，四行四列都变为 2。'},
  '2005-g3-4-15': {text:'A leaky sack delivers only one quarter of its sand on each trip. How many full sacks must be carried to deliver the amount in 3 full sacks?',change:'把每趟送达比例从一半改为四分之一。',method:'用目标送达量除以每趟有效送达比例。',answer:'12 full sacks',solution:'每趟有效送达四分之一袋。送达 3 袋需要 3÷(1/4)=12 袋装载量。'},
  '2005-g3-4-16': {text:'Mina solves 6 problems each day. How many days does she need to solve as many as Leo solves in 5 days at 4 per day?',change:'替换两人的每日完成量和天数。',method:'先求 Leo 的总题数，再除以 Mina 的日完成量。',answer:'3⅓ days',solution:'Leo 解 5×4=20 题；20÷6=3⅓ 天。'},
  '2005-g3-4-17': {text:'There are 12 paper pieces. Each time one piece is cut into four, how many pieces are there after three cuts?',change:'改变起始片数、每次切分数和切割次数。',method:'每次把一片变四片，净增 3 片。',answer:'21',solution:'三次共增加 3×3=9 片，最终有 12+9=21 片。'},
  '2005-g3-4-18': {text:'How many different rectangles can be made with 18 matchsticks as perimeter?',change:'把周长改为 18 根火柴。',method:'长宽为无序正整数对，满足 a+b=9。',answer:'4',solution:'正整数对为 (1,8)、(2,7)、(3,6)、(4,5)，共 4 种。'},
  '2005-g3-4-19': {text:'A rectangular frame is 12 cm wide on every side. How much longer is its outside perimeter than its inside perimeter?',change:'直接给框宽并求周长差。',method:'四边的内外差合起来是八个框宽。',answer:'96 cm',solution:'周长差为 8×12=96 cm。'},
  '2005-g3-4-20': {text:'A chest has 4 locked cases, each with 2 locked boxes holding 8 coins each. What is the fewest locks to open for 24 coins?',change:'改变嵌套容器数量和每盒硬币数。',method:'挑选装够 24 枚的最少小盒，并计算所需上层锁。',answer:'6 locks',solution:'需要 3 个盒子，分属两个箱格；打开宝箱、两个箱格和三个小盒，共 1+2+3=6 把。'},
  '2005-g3-4-21': {text:'A rectangular garden is 18 m by 24 m. A flowerbed is 6 m by 5 m. What is its perimeter?',change:'把多块花坛面积题改为单个矩形花坛周长。',method:'长方形周长是两倍的长加宽。',answer:'22 m',solution:'2×(6+5)=22 米。'},
  '2005-g3-4-22': {text:'A three-digit number minus a two-digit number is 989. What is their sum?',change:'更换差值并用数位范围确定两数。',method:'三位数至多 999，两位数至少 10；将最小两位数代入差值。',answer:'1009',solution:'为使两数相差 989，三位数至少为 989+10=999，恰好达到最大值。因此两数为 999 和 10，和为 1009。'},
  '2005-g3-4-23': {text:'Cards 4, 2, 5, 6, 1, 3 must be sorted by swapping any pair. What is the fewest swaps?',change:'替换卡片顺序并增加一张卡。',method:'把错位卡分成循环，长度为 k 的循环需要 k−1 次交换。',answer:'4 swaps',solution:'位置置换形成一个五卡循环，长度为 5 的循环最少需要 5−1=4 次交换。'},
  '2005-g3-4-24': {text:'A cube net has one fully black square and one checkerboard face. Which candidate cube is possible?',change:'改问立方体网格中的面相邻与黑白方向。',method:'追踪完整黑面与棋盘面的相对位置。',answer:'The cube preserving the net’s adjacent faces and pattern orientation',solution:'折叠后完整黑面与棋盘面的相对关系固定；只有保持相邻和图案方向的候选成立。'}
});

Object.assign(KANGAROO_EXTENSIONS, {
  '2005-g5-6-1': {text:'Evaluate 3500 − 205 − 2005.',change:'调换原算式各项顺序，得到正数结果。',method:'先将 3500−2005，再减 205。',answer:'1290',solution:'3500−2005=1495，1495−205=1290。'},
  '2005-g5-6-3': {text:'In a 4×4 grid, eight kangaroos occupy cells so row counts are 3, 2, 2, 1 and column counts are 2, 2, 3, 1. One kangaroo is at (1,3). What move makes every row and column contain two?',change:'明确每行每列数量及可移动的袋鼠位置。',method:'将同时位于超额行列的一只移至双双不足的交点。',answer:'Move (1,3) to (4,4)',solution:'第 1 行和第 3 列各多一只，第 4 行和第 4 列各少一只。把 (1,3) 移到空格 (4,4) 后，每行每列都恰有两只。'},
  '2005-g5-6-6': {text:'An ant walks along five edges of a cube. Each edge is 10 cm. How far does it travel?',change:'换成立方体边长和明确的路径棱数。',method:'总路程等于经过的棱数乘以每条棱的长度。',answer:'50 cm',solution:'路径经过 5 条边，每条 10 cm，所以路程为 5×10=50 cm。'},
  '2005-g5-6-8': {text:'Cards show 2, 3, 5, 4, 1. One move swaps any two cards. What is the fewest moves to put them in order 1, 2, 3, 4, 5?',change:'替换卡片初始顺序，保留任意两张交换的规则。',method:'分解位置置换中的循环，每个 k 卡循环需 k−1 次交换。',answer:'3 swaps',solution:'错位位置形成一个四卡循环，另有一张卡已在正确位置。长度 4 的循环至少需 3 次两两交换。'},
  '2005-g5-6-13': {text:'A rectangular garden has area 48 m². A flower strip is 3 m wide and has area 12 m². The strawberry section is 1 m high across the remaining width. What is the vegetable area?',change:'改变花园尺寸和分区数值。',method:'先求花园高度与右侧宽度，再扣掉草莓区。',answer:'27 m²',solution:'花园高为 12÷3=4 m，总宽为 48÷4=12 m。右侧宽 12−3=9 m；草莓区面积 9×1=9 m²，蔬菜区面积 48−12−9=27 m²。'},
  '2005-g5-6-16': {text:'A cube net is a row of four squares A–B–C–D, with one square E above B and one square F below B. Which face is opposite B?',change:'将选择立方体图改成明确展开网格的相对面问题。',method:'沿四格长条折成立方体，首尾两面相对。',answer:'D',solution:'折叠后 A、B、C、D 围成立方体侧面一圈；相隔两格的 B 与 D 相对。'},
  '2005-g5-6-17': {text:'Five consecutive natural numbers sum to 2015. What is the greatest?',change:'将五数总和增加 10。',method:'五个连续数的平均数是中间数。',answer:'405',solution:'中间数为 2015÷5=403，最大数是 403+2=405。'},
  '2005-g5-6-18': {text:'How many positive divisors does 144 have?',change:'把 100 换成另一个可质因数分解的整数。',method:'先质因数分解，再使用因数个数公式。',answer:'15',solution:'144=2⁴×3²，正因数个数为 (4+1)(2+1)=15。'},
  '2005-g5-6-19': {text:'The outer perimeter of a rectangular frame is 12 dm longer than the inner perimeter. What is the uniform frame width?',change:'把内外周长差从 8 dm 改为 12 dm。',method:'内外周长差等于 8 个框宽。',answer:'1.5 dm',solution:'设框宽为 w，则周长差 8w=12，故 w=1.5 dm。'},
  '2005-g5-6-20': {text:'In a triangular grid with side length 5 unit edges and the same horizontal and vertical grid lines, how many more right triangles than squares are present?',change:'把原图边长从 4 个单位增至 5 个单位。',method:'按边长与位置分类数三角形和完整方格。',answer:'2 more triangles',solution:'沿斜边可组成 5+4+3+2+1=15 个直角三角形。方格数为 10 个单位方格和 3 个边长 2 的方格，共 13 个。相差 2 个。'},
  '2005-g5-6-21': {text:'A chest contains four cases, each with two boxes of 12 coins. All three levels are locked. What is the fewest locks to open to obtain 36 coins?',change:'更换每盒金币数和目标数量。',method:'求够目标数量所需的最少小盒数，再数外层容器锁。',answer:'6 locks',solution:'需取 3 个盒子，分属至少两个箱格。打开宝箱 1 把、两个箱格锁和三个小盒锁，共 6 把。'},
  '2005-g5-6-22': {text:'Each circle in a number pyramid is the sum of the two circles directly below. The bottom row is 1, 3, 2, 4. What is the top number?',change:'明确底层数字，仍逐层相加。',method:'先求相邻和，再重复相加直到顶端。',answer:'20',solution:'第二层为 4、5、6；第三层为 9、11；顶端为 9+11=20。'},
  '2005-g5-6-23': {text:'A two-digit number has tens digit a and units digit b. Which condition guarantees divisibility by 6?',change:'把“选出条件”改成检验构造条件。',method:'检查个位是否偶数，以及数字和是否为 3 的倍数。',answer:'b=2a',solution:'此时 10a+b=12a，必为 6 的倍数；也可看出 b 为偶数且 a+b=3a 可被 3 整除。'},
  '2005-g5-6-24': {text:'A painted cube with side 2 ft uses 0.1 gallon of paint. It is cut into eight 1-ft cubes. How much paint is needed for the newly exposed faces?',change:'把大立方体边长改为 2 ft，并给出原用漆量。',method:'新暴露表面积等于所有小立方体表面积减去原外表面积。',answer:'0.1 gallon',solution:'原表面有 6×2²=24 个单位面，8 个小立方体共有 8×6=48 面；新暴露面也是 24 面，面积与原表面相同，因此需要同样的 0.1 加仑。'},
  '2005-g5-6-25': {text:'A central circle touches four congruent circles, one in each diagonal direction. Each of the four outer circles contributes one quarter of its area to a shaded region, and the whole central circle is shaded. What is the ratio of shaded to unshaded area?',change:'用面积份额清楚描述原圆形阴影关系。',method:'将四个四分之一圆合并成一个整圆。',answer:'2:3',solution:'阴影面积等于中央一圆加四个四分之一圆，即 2 个圆面积；总面积 5 个圆面积，未阴影为 3 个，比例 2:3。'},
  '2005-g5-6-26': {text:'A cat sleeps for 12 hours and is awake for the next 12 hours, repeating daily. For how many hours in a day is it doing the same activity 3 hours ago and 1 hour from now?',change:'把比较时刻改为相隔 4 小时。',method:'在 24 小时周期上标出活动切换点，找两侧时间跨越交界的时段。',answer:'16 hours',solution:'比较时刻相隔 4 小时。两时刻活动不同只会发生在中午或午夜交界附近，共 2×4=8 小时；其余 24−8=16 小时相同。'},
  '2005-g5-6-27': {text:'A prism is made from 56 unit cubes. Its base is a connected shape of unit squares with perimeter 20 cm. What is its height?',change:'改变单位立方体总数与底面周长。',method:'结合周长限制底面积范围，再从总体积的因数中筛选。',answer:'4 cm',solution:'底面面积是 56 的因数。周长 20 的连通方格图形面积在 9 到 25 之间；该区间内 56 的因数只有 14。高度为 56÷14=4 cm。'},
  '2005-g5-6-28': {text:'How many three-digit numbers with distinct digits satisfy that the first digit is the square of the quotient of the second digit divided by the third?',change:'保留数字互异条件，要求解释枚举方法。',method:'令首位为 a，则 b/c=√a；枚举 1–9 的完全平方数。',answer:'4',solution:'首位只能为 1、4、9。1 时 b=c，违反互异；4 时 b=2c，得到 421、463；9 时 b=3c，得到 931、962。共 4 个。'},
  '2005-g5-6-29': {text:'In the 7-unit-side equilateral triangle, the shaded region has area 22.5 when each smallest triangle has area 1. What fraction of the whole triangle is shaded?',change:'将原图计数答案改为求阴影占总面积的分数。',method:'总面积为 7² 个单位小三角形，再化简面积比。',answer:'45/98',solution:'大三角形由 49 个单位小三角形组成。阴影比例为 22.5/49=(45/2)/49=45/98。'},
  '2005-g5-6-30': {text:'Mary, Dorothy, Sylvia, Ella, and Kathy sit in a row. Sylvia is not at either end; Kathy is at the far left; Kathy is not next to Sylvia; Sylvia is not next to Dorothy; Ella sits to the right of Dorothy. Who is farthest right?',change:'补充 Kathy 坐在最左侧，使位置题条件更集中。',method:'先安排 Sylvia、Kathy 的限制，再放 Dorothy 与必须在其右侧的 Ella。',answer:'Ella',solution:'Kathy 在 1 号位，Sylvia 不能在 2 号位，且不在两端，所以可在 3 或 4。Sylvia 不邻 Dorothy；再结合 Ella 在 Dorothy 右边，唯一可排的最右座位是 Ella。'}
});

Object.assign(KANGAROO_EXTENSIONS, {
  '2006-g3-4-1': {text:'A hike takes 2 hours up, a 15-minute rest, and 3 hours down. What is the latest start time to be home by 4 p.m.?',change:'改变上山、休息、下山时间和返家时限。',method:'先求全程时间，再从截止时间倒推。',answer:'10:45 a.m.',solution:'总时长为 2小时+15分+3小时=5小时15分。16:00 往前推 5小时15分是 10:45。'},
  '2006-g3-4-2': {text:'What is 4 × 0 × 7 + 1999?',change:'替换乘数和末尾加数。',method:'先处理乘积中的零因数。',answer:'1999',solution:'乘积含有因数 0，所以等于 0；0+1999=1999。'},
  '2006-g3-4-3': {text:'A block has 24 unit cubes. The smaller block has 17. How many cubes were removed?',change:'用明确数量改写立体图形差异题。',method:'用原有数量减去剩余数量。',answer:'7 cubes',solution:'24−17=7 个小方块被移走。'},
  '2006-g3-4-4': {text:'If tomorrow is Monday, what day was yesterday?',change:'替换已知的明天星期。',method:'先找今天，再往前一天。',answer:'Saturday',solution:'明天星期一，所以今天星期日；昨天是星期六。'},
  '2006-g3-4-5': {text:'A player starts with 12 darts. Each bullseye earns 3 extra darts. After returning all darts, he has 24. How many bullseyes did he hit?',change:'更换初始飞镖、奖励数量和最终数量。',method:'用总增量除以每次命中奖励的飞镖数。',answer:'4',solution:'增加了 24−12=12 枚；每次命中增加 3 枚，因此命中 12÷3=4 次。'},
  '2006-g3-4-6': {text:'A kangaroo enters room A. The only doors lead A–B, B–C, and C–D. If it passes through each door once and leaves at the far end, which exit does it use?',change:'把三角房间路线图改为文字给定的相连房间。',method:'按门的连接顺序追踪从入口到终点的路线。',answer:'Exit D',solution:'路线依次经过 A–B、B–C、C–D，因此最终从 D 离开。'},
  '2006-g3-4-7': {text:'Nine square tables are joined in one straight line. Four people can sit around one table, one on each side. How many seats are around the long table?',change:'改变桌数，保留每桌四边各一人的条件。',method:'拼接后每多一张桌只增加两侧座位。',answer:'20',solution:'两端各有 1 个座位，每张桌贡献上下两侧各 1 个，共 2×9+2=20 个座位。'},
  '2006-g3-4-8': {text:'You have one $10, one $5, one $2, and one $1 bill. Which amount cannot be made: $7, $9, or $18?',change:'更换纸币面额和候选金额。',method:'列出纸币子集和，检查每个候选是否可凑。',answer:'$9',solution:'7=5+2，18=10+5+2+1。要凑 9 必须用 5+2+1=8 或加入 10 超额，因此不能组成。'},
  '2006-g3-4-9': {text:'One side of a street has odd house numbers 1 through 25. The other side has even numbers 2 through 18. How many houses are there?',change:'更换两侧房号范围。',method:'分别数奇数和偶数房屋，再相加。',answer:'22',solution:'奇数房屋有 13 户，偶数房屋有 9 户，共 22 户。'},
  '2006-g3-4-10': {text:'A shape is made from 12 unit squares. If 3 unit squares are cut away, how many remain?',change:'把依赖图案的裁剪选择题改成方格面积计数。',method:'用原方格数减去切下的方格数。',answer:'9 squares',solution:'12−3=9 个单位方格仍在图形中。'},
  '2006-g3-4-11': {text:'Three bus routes from A to B cost $4, $3+$2, and $1+$1+$4. Which route is cheapest?',change:'明确替代公交网络的路线票价。',method:'分别求每条路线的总票价并比较。',answer:'The $4 route',solution:'三条路线费用分别为 $4、$5、$6，最低的是直接支付 $4 的路线。'},
  '2006-g3-4-12': {text:'Arrange the cards 52, 8, 4, and 17 in a row to make the smallest possible number. What is it?',change:'替换数字卡片，保留连接后比较整体数值。',method:'按连接后的数字字符串比较顺序。',answer:'417528',solution:'比较首位后把 4 放在最前，再接 17、52、8 得到 417528；交换相邻卡片核对可知该连接最小。'},
  '2006-g3-4-13': {text:'Weights 1 through 8 pounds are placed two per box. Two boxes weigh 12 and 10 pounds. Which two weights are in the third box?',change:'把砝码范围扩到 1–8，并改前两箱重量。',method:'求所有砝码总重，再减已知两箱重量。',answer:'6 lb and 8 lb',solution:'总重为 36 磅，第三箱重 36−12−10=14 磅。剩余砝码中凑成 14 的一对为 6 和 8。'},
  '2006-g3-4-14': {text:'Four routes on a square grid go from the same start to the same finish. Each uses 7 horizontal and 5 vertical unit segments. Which is shortest?',change:'用明确路线位移替换原路线图。',method:'路线长度等于全部水平与竖直路段之和。',answer:'All are equally short',solution:'每条路线都是 7+5=12 个单位路段，故长度相等。'},
  '2006-g3-4-15': {text:'Petals are numbered 5, 11, 17, 23, 29, and 35. Add the numbers that leave remainder 5 when divided by 6.',change:'更换花瓣数字并保留同余筛选。',method:'检查每个数是否比 6 的倍数多 5。',answer:'120',solution:'六个数都除以 6 余 5，总和为 5+11+17+23+29+35=120。'},
  '2006-g3-4-16': {text:'A puzzle allows rotations but not flips. Which candidate piece is absent? Compare pieces A, B, D, E, and a mirror image of B.',change:'突出旋转与翻面的区别。',method:'旋转保持形状的左右方向，镜像片无法仅靠旋转匹配。',answer:'The mirror image of B',solution:'前四块都可通过旋转找到对应形状；镜像的 B 需要翻面才能吻合，因此不存在。'},
  '2006-g3-4-17': {text:'Dana is halfway between Hanna and Lena. Also HD=DL=LB. If Dana is 5 feet from Bennie, how far is Hanna from Bennie?',change:'把给定的 Dana 到 Bennie 距离改为 5 英尺。',method:'由三段相等关系求单段长度，再合并。',answer:'7.5 feet',solution:'设 HD=DL=LB=x。DB=DL+LB=2x=5，因此 x=2.5。HB=HD+DB=2.5+5=7.5 英尺。'},
  '2006-g3-4-18': {text:'A five-story card house follows the same pattern as the one-, two-, and three-story examples. How many cards are needed?',change:'把目标层数从四层改成五层。',method:'每层增加新的倒 V 支架与横梁，按结构计数。',answer:'40 cards',solution:'n 层需要 n(n+1) 张斜卡和 n(n−1)/2 张横卡；n=5 时为 30+10=40 张。'},
  '2006-g3-4-19': {text:'A solid is a 2×2×2 cube made from eight unit cubes. How many unit faces are painted on its entire outside, including the bottom?',change:'将阶梯结构改为 2×2×2 立方体。',method:'数大立方体六个面，每个面含四个单位面。',answer:'24 faces',solution:'六个外表面各有 2×2=4 个单位面，共 6×4=24 个面。'},
  '2006-g3-4-20': {text:'Four friends live on two floors, two on each. Mira is on a different floor from Sam and Lee. Who must live with Sam?',change:'减少人物并保留楼层异同约束。',method:'由两层规则推出 Sam 与 Lee 在 Mira 的对面楼层。',answer:'Lee',solution:'只有两层；Sam 和 Lee 都与 Mira 在不同层，因此二人必在同一层，Sam 的室友是 Lee。'},
  '2006-g3-4-21': {text:'In 1+2+3+4+5, replace each sign by + or −. Which result is impossible: 1, 2, 3, 4, or 5?',change:'替换参与运算的整数与候选结果。',method:'观察奇数项个数对奇偶性的影响。',answer:'Even results',solution:'五个数中的奇数项有 1、3、5，共三个；加减三个奇数与任意偶数后结果仍为奇数。因此 2 和 4 不可能。'},
  '2006-g3-4-22': {text:'In a 31-day month with five Tuesdays, which day cannot also occur five times: Sunday, Monday, Wednesday, or Saturday?',change:'改变要判断的月份和候选星期。',method:'31 天中出现五次的星期是连续的三天。',answer:'Saturday',solution:'五次出现的三个星期日必须连续。若星期二出现五次，这三天只能是周日至周二、周一至周三或周二至周四；星期六不会出现五次。'},
  '2006-g3-4-23': {text:'Fill a 3×3 square with 1, 2, and 3 once per row and column. If the upper-left cell is 2, how many fillings are possible?',change:'把固定角格数字从 1 改为 2。',method:'交换数字名称可建立与原问题的一一对应。',answer:'4',solution:'对 1、2、3 作循环重命名，把左上角的 2 映射为 1；这与原题的填法一一对应，因此仍有 4 种。'},
  '2006-g3-4-24': {text:'A balanced mobile has a circle weighing 24 g. The square has the same weight as two circles. What does the square weigh?',change:'改变圆的重量及形状之间的关系。',method:'用圆的单位重量乘以对应数量。',answer:'48 g',solution:'正方形重两个圆，因此重量为 2×24=48 克。'},
});
