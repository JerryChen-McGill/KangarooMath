// Teaching content imported from Math Kangaroo G3-4.docx; figures reference the original source PDF pages.
KANGAROO_DATA["1998-g3-4"] = [
  {
    "no": 1,
    "points": 3,
    "text": "At the zoo Jacob counted four legs, two ears and one tail per kangaroo, obtaining 63 altogether. How many kangaroos did he see?",
    "options": {
      "A": "6",
      "B": "7",
      "C": "9",
      "D": "10",
      "E": "12"
    },
    "grade": "3-4",
    "title": "合并计数",
    "tags": [
      "除法"
    ],
    "hints": [
      "先算一只贡献多少。",
      "把总数按每只分组。",
      "63÷7=9。"
    ],
    "methods": [
      "Draw nine groups of seven; check 9×7=63."
    ],
    "solution": "Each kangaroo contributes 4+2+1=7 counted parts. Therefore 63÷7=9 kangaroos.",
    "tip": "Clarify that the problem counts parts, not animals; use its stated four-leg model.",
    "answer": "C"
  },
  {
    "no": 2,
    "points": 3,
    "text": "Which placement of parentheses makes 6 × 8 + 20 ÷ 4 − 2 equal 58?",
    "options": {
      "A": "6×(8+20)÷4−2",
      "B": "(6×8+20÷4)−2",
      "C": "(6×8+20)÷4−2",
      "D": "6×8+20÷(4−2)",
      "E": "6×(8+20÷4)−2"
    },
    "grade": "3-4",
    "title": "括号",
    "tags": [
      "运算律"
    ],
    "hints": [
      "先算6×8。",
      "要得到58还差10。",
      "让20除以2，把4−2括起来。"
    ],
    "methods": [
      "Evaluate all five choices in a table."
    ],
    "solution": "D gives 48+20÷2=48+10=58. A=40, B=51, C=15, E=76.",
    "tip": "Have students state the order before computing; parentheses change the divisor.",
    "answer": "D"
  },
  {
    "no": 3,
    "points": 3,
    "text": "How many triangles can you see in the picture? [Use the six-pointed star in the source PDF, p.1.]",
    "options": {
      "A": "2",
      "B": "6",
      "C": "8",
      "D": "10",
      "E": "12"
    },
    "grade": "3-4",
    "title": "三角形计数",
    "tags": [
      "分类"
    ],
    "hints": [
      "按大小分类。",
      "先数六个尖角。",
      "再找两个完整的大三角形。"
    ],
    "methods": [
      "Trace each triangle in a different color and record its three vertices."
    ],
    "solution": "There are six small triangles at the six tips and two large original triangles. Total: 6+2=8. The central hexagon is not a triangle.",
    "tip": "Count composite triangles as well as individual regions; avoid counting the central hexagon.",
    "answer": "C",
    "figure": "assets/1998-g3-4/q3.png"
  },
  {
    "no": 4,
    "points": 3,
    "text": "Faith lives in apartment 17. The first floor has stores; each higher floor has 3 apartments, numbered consecutively. On which floor does she live?",
    "options": {
      "A": "4th",
      "B": "5th",
      "C": "6th",
      "D": "7th",
      "E": "8th"
    },
    "grade": "3-4",
    "title": "楼层编号",
    "tags": [
      "逻辑推理"
    ],
    "hints": [
      "先列2楼的门牌。",
      "每3户为一层。",
      "17在16–18组，再加商店层。"
    ],
    "methods": [
      "Use a two-column table of floor and apartment range."
    ],
    "solution": "Residential floor groups are 1–3, 4–6, 7–9, 10–12, 13–15, 16–18. Apartment 17 is in the sixth residential group, hence floor 7.",
    "tip": "Distinguish the residential group number from the building floor.",
    "answer": "D"
  },
  {
    "no": 5,
    "points": 3,
    "text": "What number makes 12 × 12 × 12 = 6 × ___ × 6 true?",
    "options": {
      "A": "12",
      "B": "24",
      "C": "48",
      "D": "72",
      "E": "60"
    },
    "grade": "3-4",
    "title": "等式",
    "tags": [
      "乘法"
    ],
    "hints": [
      "比较两端因数。",
      "12变6各缩小一半。",
      "中间因数需扩大4倍。"
    ],
    "methods": [
      "Cancel the factors 6×6 before multiplying."
    ],
    "solution": "The blank is 1728÷36=48. Equivalently, halving both outer 12s requires multiplying the middle 12 by four.",
    "tip": "Use factor compensation so students need not calculate a large cube first.",
    "answer": "C"
  },
  {
    "no": 6,
    "points": 3,
    "text": "How many three-digit numbers can be made using 3, 0 and 7 exactly once each?",
    "options": {
      "A": "2",
      "B": "3",
      "C": "4",
      "D": "5",
      "E": "6"
    },
    "grade": "3-4",
    "title": "排列",
    "tags": [
      "逻辑推理"
    ],
    "hints": [
      "百位能不能是0。",
      "百位选3或7。",
      "每种开头有两种排法。"
    ],
    "methods": [
      "List all six permutations and remove 037 and 073."
    ],
    "solution": "The numbers are 307, 370, 703 and 730. There are two choices for the hundreds digit and two orders for the remaining digits: 2×2=4.",
    "tip": "Explain why a leading zero does not make a three-digit number.",
    "answer": "C"
  },
  {
    "no": 7,
    "points": 3,
    "text": "How many blocks form the tower?",
    "options": {
      "A": "20",
      "B": "22",
      "C": "25",
      "D": "28",
      "E": "30"
    },
    "grade": "3-4",
    "title": "立体计数",
    "tags": [
      "逻辑推理"
    ],
    "hints": [
      "按柱子计数而非露出的面。",
      "找中央4块高的一柱。",
      "四个方向各有3+2+1块。"
    ],
    "methods": [
      "Count horizontal layers: 13+9+5+1=28."
    ],
    "solution": "The central column has height 4. Each of four arms has columns of heights 3, 2 and 1. Total=4+4×(3+2+1)=28; the central column is counted once.",
    "tip": "Build a cross-shaped model and include hidden supporting cubes.",
    "answer": "D",
    "figure": "assets/1998-g3-4/q7.png"
  },
  {
    "no": 8,
    "points": 3,
    "text": "A number is multiplied by 3, then 18 is added, giving 180. What was the number?",
    "options": {
      "A": "52",
      "B": "54",
      "C": "50",
      "D": "48",
      "E": "62"
    },
    "grade": "3-4",
    "title": "逆运算",
    "tags": [
      "方程"
    ],
    "hints": [
      "从最后一步倒推。",
      "先减18。",
      "再除以3。"
    ],
    "methods": [
      "Write 3x+18=180 or draw an input-output machine."
    ],
    "solution": "Undo the final addition first: 180−18=162. Then undo multiplication: 162÷3=54. Check 54×3+18=180.",
    "tip": "Reverse both the operation and its order. 4-Point Questions",
    "answer": "B"
  },
  {
    "no": 9,
    "points": 4,
    "text": "A kangaroo travels from START to FINISH. Each edge is labelled with minutes. What is the shortest time?",
    "options": {
      "A": "11 minutes",
      "B": "8 minutes",
      "C": "10 minutes",
      "D": "18 minutes",
      "E": "6 minutes"
    },
    "grade": "3-4",
    "title": "最短路径",
    "tags": [
      "比较大小"
    ],
    "hints": [
      "路程要加边上的时间。",
      "允许斜边把上方接到下方。",
      "比较到每个节点的最短累计时间。"
    ],
    "methods": [
      "Label each junction with its best known arrival time."
    ],
    "solution": "Name the upper-left, lower-left, upper-right and lower-right junctions A,B,C,D. Edges: SA=2, SB=8, AB=6, AC=2, BC=3, BD=2, CD=6, CF=7, DF=1. The route S–A–C–B–D–F costs 2+2+3+2+1=10. Best distances to A,C,B,D,F are 2,4,7,9,10.",
    "tip": "Shortest-looking routes need not have the smallest total time; arrows are not specified, so use the undirected paths.",
    "answer": "C",
    "figure": "assets/1998-g3-4/q9.png"
  },
  {
    "no": 10,
    "points": 4,
    "text": "Joanna divides cookies among 2, then 3, then 4 plates; each time one cookie is left. What is the smallest possible number?",
    "options": {
      "A": "9",
      "B": "10",
      "C": "11",
      "D": "12",
      "E": "13"
    },
    "grade": "3-4",
    "title": "余数",
    "tags": [
      "比例"
    ],
    "hints": [
      "先拿走余下的1块。",
      "余下数量应同时被2、3、4整除。",
      "最小正公倍数是12。"
    ],
    "methods": [
      "Test the five given choices by division."
    ],
    "solution": "Subtract the leftover cookie: the remaining number must be divisible by 2,3,4. Their least positive common multiple is 12, so the intended answer is 13. Literally 1 also satisfies the remainders if empty plates are allowed; the given choices and normal sharing context exclude that case.",
    "tip": "State the positive-share assumption explicitly; distinguish a modelling condition from arithmetic.",
    "answer": "E"
  },
  {
    "no": 11,
    "points": 4,
    "text": "A number minus 40 plus 2000 equals 3250. What was the starting number?",
    "options": {
      "A": "2040",
      "B": "1960",
      "C": "1290",
      "D": "3210",
      "E": "1250"
    },
    "grade": "3-4",
    "title": "逆运算",
    "tags": [
      "运算律"
    ],
    "hints": [
      "倒着走运算链。",
      "3250先减2000。",
      "然后加40。"
    ],
    "methods": [
      "Combine the net change: +1960, so subtract 1960."
    ],
    "solution": "Undo +2000 to obtain 1250, then undo −40 to obtain 1290. Check 1290−40+2000=3250.",
    "tip": "Contrast undoing subtraction with subtracting again.",
    "answer": "C"
  },
  {
    "no": 12,
    "points": 4,
    "text": "On Monday a snail starts at the bottom of a 5 m well. It climbs 2 m each day and slips 1 m each night. On which day does it escape?",
    "options": {
      "A": "Tuesday",
      "B": "Wednesday",
      "C": "Thursday",
      "D": "Friday",
      "E": "Monday"
    },
    "grade": "3-4",
    "title": "爬井",
    "tags": [
      "逻辑推理"
    ],
    "hints": [
      "记录每天白天和夜晚的位置。",
      "到井口立即停止。",
      "周四白天从3米爬到5米。"
    ],
    "methods": [
      "To reach the rim, first reach 5−2=3 m at the start of a day."
    ],
    "solution": "Monday reaches 2 then slips to1; Tuesday reaches3 then slips to2; Wednesday reaches4 then slips to3; Thursday reaches5 and escapes. There is no slide after escape.",
    "tip": "The last day differs from earlier full day-night cycles.",
    "answer": "C"
  },
  {
    "no": 13,
    "points": 4,
    "text": "Which piece was cut from the same square as piece Z?",
    "options": {
      "A": "Figure A",
      "B": "Figure B",
      "C": "Figure C",
      "D": "Figure D",
      "E": "Figure E"
    },
    "grade": "3-4",
    "title": "拼图",
    "tags": [
      "图形识别"
    ],
    "hints": [
      "区分外边和切口。",
      "切口凸起对应凹陷。",
      "旋转Z与A拼成正方形。"
    ],
    "methods": [
      "Use paper cutouts or trace the shared cut line."
    ],
    "solution": "Rotate Z and match its irregular cut boundary to each candidate. A has the complementary rises and dips, and the two straight outside boundaries complete a square without gaps or overlaps.",
    "tip": "Permit rotations; do not assume that merely similar jagged edges must fit.",
    "answer": "A",
    "figure": "assets/1998-g3-4/q13.png"
  },
  {
    "no": 14,
    "points": 4,
    "text": "31 runners finish without ties. The number before John is one quarter of the number after him. What is John's place?",
    "options": {
      "A": "6th",
      "B": "7th",
      "C": "8th",
      "D": "20th",
      "E": "21st"
    },
    "grade": "3-4",
    "title": "名次",
    "tags": [
      "比例"
    ],
    "hints": [
      "总人数先减去John。",
      "前后人数比1:4。",
      "前面6人所以第7。"
    ],
    "methods": [
      "Use b+4b+1=31."
    ],
    "solution": "Exclude John: 30 runners remain. Split them in ratio 1:4, so 30÷5=6 finish before him and24 after. Place=6+1=7.",
    "tip": "Rank is one more than the number ahead; explicitly assume no ties.",
    "answer": "B"
  },
  {
    "no": 15,
    "points": 4,
    "text": "Half a loaf costs 6 pence more than a quarter loaf. What does a whole loaf cost?",
    "options": {
      "A": "6",
      "B": "12",
      "C": "18",
      "D": "24",
      "E": "30"
    },
    "grade": "3-4",
    "title": "分数",
    "tags": [
      "逻辑推理"
    ],
    "hints": [
      "画四等份面包。",
      "半个比四分之一个多一份。",
      "每份6便士，共四份。"
    ],
    "methods": [
      "Let the whole price be P; P/2−P/4=6."
    ],
    "solution": "The difference between one half and one quarter is one quarter. Thus one quarter costs6 pence and a whole loaf costs4×6=24 pence.",
    "tip": "Compare equal-sized parts; the price difference is not the half-loaf price.",
    "answer": "D"
  },
  {
    "no": 16,
    "points": 4,
    "text": "The clock has fallen and its upright direction is unknown. What time does it show?",
    "options": {
      "A": "11:45",
      "B": "9:00",
      "C": "8:25",
      "D": "6:35",
      "E": "3:00"
    },
    "grade": "3-4",
    "title": "时钟",
    "tags": [
      "空间想象"
    ],
    "hints": [
      "先分辨长短针。",
      "比较顺时针相隔的刻度。",
      "不能只看纸面上下方向。"
    ],
    "methods": [
      "Draw the hand configurations for all five options, then rotate each."
    ],
    "solution": "Use the relative positions of the hands, not the page orientation. The long minute hand points exactly to an hour tick and the short hand to another tick, three intervals away. Of the choices, 3:00 has the correct hand lengths and clockwise order. At9:00 the short hand would lie on the opposite side of the minute hand.",
    "tip": "Use minute-hand alignment and clockwise order; a right angle alone cannot distinguish3:00 from9:00. 5-Point Questions",
    "answer": "E",
    "figure": "assets/1998-g3-4/q16.png"
  },
  {
    "no": 17,
    "points": 5,
    "text": "Each box equals the average of the two boxes below it. Bottom row: 5, blank,9; the left middle box is6. What is the top?",
    "options": {
      "A": "5",
      "B": "7",
      "C": "8",
      "D": "9",
      "E": "12"
    },
    "grade": "3-4",
    "title": "平均数金字塔",
    "tags": [
      "逻辑推理"
    ],
    "hints": [
      "上层是下层两数平均。",
      "5与谁平均得到6。",
      "求出7、8，再平均。"
    ],
    "methods": [
      "Use symmetry of the arithmetic sequence5,7,9."
    ],
    "solution": "(5+x)/2=6 gives x=7. The right middle box is(7+9)/2=8, and the top is(6+8)/2=7.",
    "tip": "Check the example's average rule; do not substitute the usual addition-pyramid rule.",
    "answer": "B",
    "figure": "assets/1998-g3-4/q17.png"
  },
  {
    "no": 18,
    "points": 5,
    "text": "There are15 white, red and black balls altogether. White balls are7 times as many as red balls. How many are black?",
    "options": {
      "A": "1",
      "B": "3",
      "C": "5",
      "D": "7",
      "E": "9"
    },
    "grade": "3-4",
    "title": "整数约束",
    "tags": [
      "比例"
    ],
    "hints": [
      "红白球合成8份。",
      "红球至少1个。",
      "红球若2个总数就超过15。"
    ],
    "methods": [
      "Try the listed black counts and test whether the remainder is a positive multiple of8."
    ],
    "solution": "All three colors are present. If red=r≥1, white=7r, so8r<15. Thus r=1, white=7 and black=15−8=7.",
    "tip": "The extension shows why the original answer is unique and why changing a total can remove uniqueness.",
    "answer": "D"
  },
  {
    "no": 19,
    "points": 5,
    "text": "Paul is80 cents short of buying4 ice creams. He buys3 and has30 cents left. What is the price of one serving?",
    "options": {
      "A": "70 cents",
      "B": "80 cents",
      "C": "90 cents",
      "D": "1 dollar",
      "E": "1 dollar10 cents"
    },
    "grade": "3-4",
    "title": "盈亏",
    "tags": [
      "逻辑推理"
    ],
    "hints": [
      "比较买4份与买3份。",
      "差的正好是一份价格。",
      "剩余30加不足80。"
    ],
    "methods": [
      "Write4p−80=3p+30."
    ],
    "solution": "The extra serving would require the30 cents left plus80 cents missing:110 cents. If p=110, his money is3×110+30=360 cents, and4 servings cost440.",
    "tip": "Both situations use the same starting amount; add shortage and surplus.",
    "answer": "E"
  },
  {
    "no": 20,
    "points": 5,
    "text": "A square grid board has side1 m and is made of5 cm matches. How many matches are needed?",
    "options": {
      "A": "400",
      "B": "480",
      "C": "640",
      "D": "840",
      "E": "960"
    },
    "grade": "3-4",
    "title": "网格",
    "tags": [
      "计数"
    ],
    "hints": [
      "先统一单位。",
      "20格需要21条格线。",
      "横竖各21×20根。"
    ],
    "methods": [
      "Count400 cells×4 edges, then subtract the double-counted interior edges."
    ],
    "solution": "Each side contains100÷5=20 unit intervals. There are21 vertical lines with20 matches each and21 horizontal lines with20 each. Total2×21×20=840.",
    "tip": "Use a2×2 grid to demonstrate why adjacent cells share matches.",
    "answer": "D",
    "figure": "assets/1998-g3-4/q20.png"
  },
  {
    "no": 21,
    "points": 5,
    "text": "How many three-digit numbers have digit sum5?",
    "options": {
      "A": "10",
      "B": "15",
      "C": "20",
      "D": "25",
      "E": "30"
    },
    "grade": "3-4",
    "title": "数位和",
    "tags": [
      "逻辑推理"
    ],
    "hints": [
      "百位从1开始。",
      "固定百位后枚举十位个位。",
      "5+4+3+2+1。"
    ],
    "methods": [
      "Subtract1 from the hundreds digit and distribute4 across three nonnegative positions."
    ],
    "solution": "For hundreds digits1,2,3,4,5, the remaining two digits sum to4,3,2,1,0, giving5,4,3,2,1 ordered pairs. Total15.",
    "tip": "Pairs such as(0,4) and(4,0) give different numbers.",
    "answer": "B"
  },
  {
    "no": 22,
    "points": 5,
    "text": "Ann is3 years older than Barb and2 years younger than Cali. Dorothy is1 year younger than Barb. How much older is Cali than Dorothy?",
    "options": {
      "A": "5 years",
      "B": "6 years",
      "C": "4 years",
      "D": "2 years",
      "E": "Same age"
    },
    "grade": "3-4",
    "title": "年龄差",
    "tags": [
      "逻辑推理"
    ],
    "hints": [
      "以Barb为基准。",
      "Cali比Barb大5岁。",
      "Dorothy比Barb小1岁。"
    ],
    "methods": [
      "Choose convenient sample ages and compare."
    ],
    "solution": "Take Barb's age as b. Ann=b+3, Cali=b+5, Dorothy=b−1. Cali−Dorothy=6 years. The source's 'Baro' is read as Barb in context.",
    "tip": "Use a common baseline and explain the small name typo in the source.",
    "answer": "B"
  },
  {
    "no": 23,
    "points": 5,
    "text": "A soccer team plays31 games and earns64 points. Wins earn3, draws1 and losses0;7 games are draws. How many losses?",
    "options": {
      "A": "0",
      "B": "5",
      "C": "19",
      "D": "21",
      "E": "24"
    },
    "grade": "3-4",
    "title": "比赛积分",
    "tags": [
      "分类"
    ],
    "hints": [
      "先扣掉平局积分。",
      "剩下积分除以3求胜场。",
      "总场数减胜场和平局。"
    ],
    "methods": [
      "Organize games and points in a three-row table."
    ],
    "solution": "Draws contribute7 points, leaving57 from wins. Wins=57÷3=19. Losses=31−7−19=5.",
    "tip": "A loss adds a game but no points; check both totals.",
    "answer": "B"
  },
  {
    "no": 24,
    "points": 5,
    "text": "In12345678910111213141516…, which natural number contains the180th digit?",
    "options": {
      "A": "92",
      "B": "93",
      "C": "94",
      "D": "95",
      "E": "96"
    },
    "grade": "3-4",
    "title": "连续数字串",
    "tags": [
      "逻辑推理"
    ],
    "hints": [
      "先扣除一位数占9位。",
      "171包含85个完整两位数再1位。",
      "10往后第86个数是95。"
    ],
    "methods": [
      "Number94 ends at position9+85×2=179, so95 occupies180–181."
    ],
    "solution": "Numbers1–9 use9 digits. The next171 digits reach the first digit of the86th two-digit number because171=85×2+1. The86th number starting at10 is95.",
    "tip": "Distinguish the digit's value from the number containing it.",
    "answer": "D"
  }
];

Object.assign(KANGAROO_EXTENSIONS, {
  "1998-g3-4-1": {
    "text": "The total is 84 instead of 63. How many kangaroos are there?",
    "change": "沿用文档拓展题的同一策略，替换数字或条件。",
    "method": "先算一只贡献多少；把总数按每只分组。",
    "answer": "12",
    "solution": "12; 84÷7=12."
  },
  "1998-g3-4-2": {
    "text": "Keep D's parentheses but replace 20 by 24. What is the result?",
    "change": "沿用文档拓展题的同一策略，替换数字或条件。",
    "method": "先算6×8；要得到58还差10。",
    "answer": "60",
    "solution": "60; 48+24÷2=60."
  },
  "1998-g3-4-3": {
    "text": "Draw the same star. How many small tip triangles remain if one tip is covered?",
    "change": "沿用文档拓展题的同一策略，替换数字或条件。",
    "method": "按大小分类；先数六个尖角。",
    "answer": "5 small tip triangles",
    "solution": "5 small tip triangles; this extension counts only the six tip regions."
  },
  "1998-g3-4-4": {
    "text": "On which floor is apartment 22 in the same building?",
    "change": "沿用文档拓展题的同一策略，替换数字或条件。",
    "method": "先列2楼的门牌；每3户为一层。",
    "answer": "9th floor: ceil(22÷3)+1=9.",
    "solution": "9th floor: ceil(22÷3)+1=9."
  },
  "1998-g3-4-5": {
    "text": "What number makes 10×10×10=5×___×5?",
    "change": "沿用文档拓展题的同一策略，替换数字或条件。",
    "method": "比较两端因数；12变6各缩小一半。",
    "answer": "40",
    "solution": "40; 1000÷25=40."
  },
  "1998-g3-4-6": {
    "text": "Use 2, 5 and 8 once each. How many three-digit numbers can be made?",
    "change": "沿用文档拓展题的同一策略，替换数字或条件。",
    "method": "百位能不能是0；百位选3或7。",
    "answer": "6",
    "solution": "6; 3×2×1=6 because zero is absent."
  },
  "1998-g3-4-7": {
    "text": "Extend the same four-arm tower to a central height of 5, with arm heights 4,3,2,1. How many blocks?",
    "change": "沿用文档拓展题的同一策略，替换数字或条件。",
    "method": "按柱子计数而非露出的面；找中央4块高的一柱。",
    "answer": "45",
    "solution": "45; 5+4×(4+3+2+1)=45."
  },
  "1998-g3-4-8": {
    "text": "A number is multiplied by 3, then 18 is added, giving 198. Find it.",
    "change": "沿用文档拓展题的同一策略，替换数字或条件。",
    "method": "从最后一步倒推；先减18。",
    "answer": "60",
    "solution": "60; (198−18)÷3=60."
  },
  "1998-g3-4-9": {
    "text": "If only the last edge DF changes from 1 to 2 minutes, what is the new shortest time?",
    "change": "沿用文档拓展题的同一策略，替换数字或条件。",
    "method": "路程要加边上的时间；允许斜边把上方接到下方。",
    "answer": "11 minutes",
    "solution": "11 minutes; S–A–C–F and S–A–C–B–D–F both cost 11."
  },
  "1998-g3-4-10": {
    "text": "With at least one cookie on each plate, what is the smallest number leaving 1 when divided among 2,3 and 5 plates?",
    "change": "沿用文档拓展题的同一策略，替换数字或条件。",
    "method": "先拿走余下的1块；余下数量应同时被2、3、4整除。",
    "answer": "31",
    "solution": "31; lcm(2,3,5)+1=31."
  },
  "1998-g3-4-11": {
    "text": "A number minus 40 plus 2000 equals 3500. Find it.",
    "change": "沿用文档拓展题的同一策略，替换数字或条件。",
    "method": "倒着走运算链；3250先减2000。",
    "answer": "1540",
    "solution": "1540; 3500−2000+40=1540."
  },
  "1998-g3-4-12": {
    "text": "The well is 6 m deep with the same climbing and slipping. On which day does the snail escape?",
    "change": "沿用文档拓展题的同一策略，替换数字或条件。",
    "method": "记录每天白天和夜晚的位置；到井口立即停止。",
    "answer": "Friday",
    "solution": "Friday; after four nights it is at4 m, then climbs to6 m."
  },
  "1998-g3-4-13": {
    "text": "Trace Z and candidate A. If both are rotated through a quarter-turn, can they still make a square?",
    "change": "沿用文档拓展题的同一策略，替换数字或条件。",
    "method": "区分外边和切口；切口凸起对应凹陷。",
    "answer": "Yes",
    "solution": "Yes; a rigid rotation preserves the complementary boundary and the completed square."
  },
  "1998-g3-4-14": {
    "text": "There are 36 runners with the same 1:4 ratio before and after John. What is his place?",
    "change": "沿用文档拓展题的同一策略，替换数字或条件。",
    "method": "总人数先减去John；前后人数比1:4。",
    "answer": "8th",
    "solution": "8th; (36−1)÷5=7 ahead."
  },
  "1998-g3-4-15": {
    "text": "The difference is 8 pence instead of6. What is the price of a whole loaf?",
    "change": "沿用文档拓展题的同一策略，替换数字或条件。",
    "method": "画四等份面包；半个比四分之一个多一份。",
    "answer": "32 pence",
    "solution": "32 pence; 4×8=32."
  },
  "1998-g3-4-16": {
    "text": "Rotate an ordinary clock showing3:00 through180°. What time does it still show?",
    "change": "沿用文档拓展题的同一策略，替换数字或条件。",
    "method": "先分辨长短针；比较顺时针相隔的刻度。",
    "answer": "3:00",
    "solution": "3:00; rotating the whole clock does not change the time."
  },
  "1998-g3-4-17": {
    "text": "Replace bottom5 and9 by7 and11, and left middle6 by8. Find the top.",
    "change": "沿用文档拓展题的同一策略，替换数字或条件。",
    "method": "上层是下层两数平均；5与谁平均得到6。",
    "answer": "9",
    "solution": "9; bottom middle9, right middle10, top(8+10)/2=9."
  },
  "1998-g3-4-18": {
    "text": "There are19 balls, with white7 times red and all colors present. What black-ball counts are possible?",
    "change": "沿用文档拓展题的同一策略，替换数字或条件。",
    "method": "红白球合成8份；红球至少1个。",
    "answer": "11 or3: red can be1 or2, giving19−8=11 or19−16=3.",
    "solution": "11 or3: red can be1 or2, giving19−8=11 or19−16=3."
  },
  "1998-g3-4-19": {
    "text": "He is70 cents short of4 servings but has20 cents left after3. Find the unit price.",
    "change": "沿用文档拓展题的同一策略，替换数字或条件。",
    "method": "比较买4份与买3份；差的正好是一份价格。",
    "answer": "90 cents",
    "solution": "90 cents;70+20=90."
  },
  "1998-g3-4-20": {
    "text": "Make the same board with10 cm matches. How many matches?",
    "change": "沿用文档拓展题的同一策略，替换数字或条件。",
    "method": "先统一单位；20格需要21条格线。",
    "answer": "220",
    "solution": "220; n=10, so2n(n+1)=220."
  },
  "1998-g3-4-21": {
    "text": "How many three-digit numbers have digit sum6?",
    "change": "沿用文档拓展题的同一策略，替换数字或条件。",
    "method": "百位从1开始；固定百位后枚举十位个位。",
    "answer": "21",
    "solution": "21;6+5+4+3+2+1=21."
  },
  "1998-g3-4-22": {
    "text": "Ann is4 years older than Barb and2 younger than Cali; Dorothy is1 younger than Barb. Find the gap.",
    "change": "沿用文档拓展题的同一策略，替换数字或条件。",
    "method": "以Barb为基准；Cali比Barb大5岁。",
    "answer": "7 years",
    "solution": "7 years;4+2+1=7."
  },
  "1998-g3-4-23": {
    "text": "The same31 games and7 draws give61 points. How many losses?",
    "change": "沿用文档拓展题的同一策略，替换数字或条件。",
    "method": "先扣掉平局积分；剩下积分除以3求胜场。",
    "answer": "6",
    "solution": "6; wins=(61−7)÷3=18, losses31−7−18=6."
  },
  "1998-g3-4-24": {
    "text": "Which number contains the181st digit?",
    "change": "沿用文档拓展题的同一策略，替换数字或条件。",
    "method": "先扣除一位数占9位；171包含85个完整两位数再1位。",
    "answer": "95 again",
    "solution": "95 again; it is the second digit of95."
  }
});
