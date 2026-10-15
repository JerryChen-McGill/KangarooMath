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
