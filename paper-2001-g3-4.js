// Teaching content imported from Math Kangaroo G3-4.docx; figures reference the original source PDF pages.
KANGAROO_DATA["2001-g3-4"] = [
  {
    "no": 1,
    "points": 3,
    "text": "Julia has four candles, each lasting3 hours. Two were partly burned near a window and blown out, after30 minutes and later after another hour. She then lights all four. How long until the last candle burns out?",
    "options": {
      "A": "1 hr30 min",
      "B": "2 hr",
      "C": "3 hr",
      "D": "7 hr30 min",
      "E": "8 hr"
    },
    "grade": "3-4",
    "title": "蜡烛",
    "tags": [
      "逻辑推理"
    ],
    "hints": [
      "找出从未点过的蜡烛。",
      "同时燃烧看最长剩余时间。",
      "两支新蜡烛还可燃烧3小时。"
    ],
    "methods": [
      "Compare remaining-life bars rather than adding lengths of time."
    ],
    "solution": "Two candles have not yet burned at all. Once all four are lit, those two last the full3 hours; the partly used candles finish sooner. Thus the last burns out3 hours later.",
    "tip": "The earlier timing does not affect the maximum because two candles remain new.",
    "answer": "C"
  },
  {
    "no": 2,
    "points": 3,
    "text": "Joseph has7 sticks and breaks one into two pieces. How many sticks or pieces does he now have?",
    "options": {
      "A": "5",
      "B": "6",
      "C": "7",
      "D": "8",
      "E": "9"
    },
    "grade": "3-4",
    "title": "断棒",
    "tags": [
      "逻辑推理"
    ],
    "hints": [
      "取走被折的一根。",
      "放回两段。",
      "总数净增加1。"
    ],
    "methods": [
      "Model seven paper strips and cut one."
    ],
    "solution": "One old stick is replaced by two pieces:7−1+2=8. One break adds one piece.",
    "tip": "Count pieces, not the original named objects.",
    "answer": "D"
  },
  {
    "no": 3,
    "points": 3,
    "text": "A chocolate heart is drawn on a square grid. Each square weighs10 g. What is the whole heart's weight?",
    "options": {
      "A": "340 grams",
      "B": "360 grams",
      "C": "380 grams",
      "D": "400 grams",
      "E": "420 grams"
    },
    "grade": "3-4",
    "title": "面积",
    "tags": [
      "逻辑推理"
    ],
    "hints": [
      "完整格与半格分别数。",
      "两个半格拼成一格。",
      "逐行面积相加得到40。"
    ],
    "methods": [
      "Reflect or rearrange the half-squares into full squares."
    ],
    "solution": "Pair the diagonal half-squares. From top to bottom the eight horizontal strips have areas2,6,8,8,7,5,3,1 unit squares. Sum40, giving40×10=400 g.",
    "tip": "Count area, not just the number of grid cells touched by the outline.",
    "answer": "D",
    "figure": "assets/2001-g3-4/page-1.png"
  },
  {
    "no": 4,
    "points": 3,
    "text": "There are12 pairs of shoes on each of10 shelves. Three centipedes buy30 pairs each and two buy5 pairs each. How many pairs remain?",
    "options": {
      "A": "10",
      "B": "15",
      "C": "20",
      "D": "25",
      "E": "30"
    },
    "grade": "3-4",
    "title": "库存",
    "tags": [
      "运算律"
    ],
    "hints": [
      "先算总库存。",
      "两类顾客分别算购买量。",
      "120−90−10。"
    ],
    "methods": [
      "Subtract purchases customer by customer."
    ],
    "solution": "Initial stock=12×10=120 pairs. Sold=3×30+2×5=100 pairs. Remaining=20 pairs.",
    "tip": "Keep the unit as pairs throughout.",
    "answer": "C"
  },
  {
    "no": 5,
    "points": 3,
    "text": "Kaya gives her mother1 cup of berries on day1, then twice the previous day's amount each day for5 days. How many cups in total?",
    "options": {
      "A": "5",
      "B": "31",
      "C": "21",
      "D": "11",
      "E": "16"
    },
    "grade": "3-4",
    "title": "倍增",
    "tags": [
      "逻辑推理"
    ],
    "hints": [
      "列出五天数量。",
      "每天翻倍。",
      "求总和而不是第五天数量。"
    ],
    "methods": [
      "For these powers of2, total through a day is twice the last amount minus1."
    ],
    "solution": "Daily amounts are1,2,4,8,16. Their sum is31;16 is only the final day's contribution.",
    "tip": "Use a day/amount/running-total table.",
    "answer": "B"
  },
  {
    "no": 6,
    "points": 3,
    "text": "Which expression is correct? [The following reproduces the printed PDF; see the correction below.]",
    "options": {
      "A": "12+(4+8)=11",
      "B": "8×2+3=40",
      "C": "2×3+4×5=50",
      "D": "(10+8)+2=14",
      "E": "18−6+3=16"
    },
    "grade": "3-4",
    "title": "运算顺序",
    "tags": [
      "逻辑推理"
    ],
    "hints": [
      "逐项按运算顺序核算。",
      "加减同级从左往右。",
      "E左边是15，与16不等。"
    ],
    "methods": [
      "Alternatively change E's plus sign to division, producing18−6÷3=16."
    ],
    "solution": "As printed, none is correct: the left sides equal24,19,26,20,15 respectively. The source answer key says E, but18−6+3=15, not16. A possible intended repair is18−6÷3=16; this is a classroom correction, not a verified reading of the original.",
    "tip": "Do not mark an invalid equality correct just because of the key. Show students the printed-error note; distinguish the source key E from the verified result.",
    "issue": "原卷答案表标 E，但五个等式左边分别为 24、19、26、20、15，均不等于右边；保留原题并不自动判分。",
    "answer": null,
    "sourceAnswer": "E",
    "answerDisplay": "E（原卷无正确选项）"
  },
  {
    "no": 7,
    "points": 3,
    "text": "There are19 girls and12 boys. At least how many students must join so six equal-sized groups can be made?",
    "options": {
      "A": "1",
      "B": "2",
      "C": "3",
      "D": "4",
      "E": "5"
    },
    "grade": "3-4",
    "title": "整除",
    "tags": [
      "比例"
    ],
    "hints": [
      "先算总人数31。",
      "寻找不小于31的6的倍数。",
      "36−31。"
    ],
    "methods": [
      "Divide31 by6: remainder1, so another5 completes a group-size multiple."
    ],
    "solution": "There are31 students. The next multiple of6 is36, requiring36−31=5 additional students.",
    "tip": "Six equal groups need a divisible total; groups need not have equal gender mixes.",
    "answer": "E"
  },
  {
    "no": 8,
    "points": 3,
    "text": "Four14 cm sticks lie in a row with three equal gaps; the total span is80 cm. How long is one gap?",
    "options": {
      "A": "1 cm",
      "B": "2 cm",
      "C": "3 cm",
      "D": "5 cm",
      "E": "8 cm"
    },
    "grade": "3-4",
    "title": "间隔",
    "tags": [
      "逻辑推理"
    ],
    "hints": [
      "算木棒占用长度。",
      "四根之间只有三个间隔。",
      "24÷3。"
    ],
    "methods": [
      "Write14+g+14+g+14+g+14=80."
    ],
    "solution": "Sticks occupy4×14=56 cm. Gaps occupy80−56=24 cm. Four sticks have three internal gaps, so24÷3=8 cm.",
    "tip": "Demonstrate n objects have n−1 internal gaps. 4-Point Questions",
    "answer": "E",
    "figure": "assets/2001-g3-4/page-2.png"
  },
  {
    "no": 9,
    "points": 4,
    "text": "Bobby was born on Abby's third birthday. How many years later will Abby be twice Bobby's age?",
    "options": {
      "A": "1",
      "B": "2",
      "C": "3",
      "D": "4",
      "E": "5"
    },
    "grade": "3-4",
    "title": "年龄",
    "tags": [
      "比例"
    ],
    "hints": [
      "两人永远差3岁。",
      "两倍关系时差等于小者年龄。",
      "小者3岁，大者6岁。"
    ],
    "methods": [
      "Use an age table or solve t+3=2t."
    ],
    "solution": "Their age difference is always3 years. When Bobby is3 and Abby6, Abby is twice his age. This happens3 years after Bobby's birth.",
    "tip": "The reference point is Bobby's birth, not an unspecified present date.",
    "answer": "C"
  },
  {
    "no": 10,
    "points": 4,
    "text": "A cave's lowest point is221 m below its entrance and its highest point419 m above it. What is the distance between the two?",
    "options": {
      "A": "198 m",
      "B": "221 m",
      "C": "419 m",
      "D": "640 m",
      "E": "650 m"
    },
    "grade": "3-4",
    "title": "高差",
    "tags": [
      "逻辑推理"
    ],
    "hints": [
      "画入口为0的数轴。",
      "两点在0两侧。",
      "221+419。"
    ],
    "methods": [
      "Compute419−(−221)=640."
    ],
    "solution": "The path on the vertical number line runs221 m up to entrance level and another419 m to the highest point. Total640 m.",
    "tip": "Use signed height or two positive distances consistently.",
    "answer": "D"
  },
  {
    "no": 11,
    "points": 4,
    "text": "20 candies are shared among children. Each gets at least1, and all amounts differ. What is the greatest number of children?",
    "options": {
      "A": "20",
      "B": "10",
      "C": "8",
      "D": "6",
      "E": "5"
    },
    "grade": "3-4",
    "title": "最值",
    "tags": [
      "逻辑推理"
    ],
    "hints": [
      "要人数多就先用最小份数。",
      "六人的最低总数21。",
      "给出五人的可行分法。"
    ],
    "methods": [
      "Use cumulative triangular numbers and then exhibit a distribution."
    ],
    "solution": "Six children need at least1+2+3+4+5+6=21 candies, too many. Five are possible:1,2,3,4,10 sum20 and are distinct. Maximum5.",
    "tip": "A lower bound alone proves impossibility; also provide a construction for the claimed maximum.",
    "answer": "E"
  },
  {
    "no": 12,
    "points": 4,
    "text": "Which solid differs from the others?",
    "options": {
      "A": "Solid A",
      "B": "Solid B",
      "C": "Solid C",
      "D": "Solid D",
      "E": "Solid E"
    },
    "grade": "3-4",
    "title": "立体旋转",
    "tags": [
      "逻辑推理"
    ],
    "hints": [
      "先找最长直线作参照。",
      "对齐后比较两端分支。",
      "旋转不能把镜像结构变成原结构。"
    ],
    "methods": [
      "Build one model and rotate it to match A–D, then compare E."
    ],
    "solution": "Rotate each solid mentally so its longest straight run points in the same direction. A–D have the same relative placement of the two end branches. E has the reversed branch orientation and cannot be obtained by a rigid rotation.",
    "tip": "Compare cube adjacency and end-branch direction, not the page silhouette.",
    "answer": "E",
    "figure": "assets/2001-g3-4/page-2.png"
  },
  {
    "no": 13,
    "points": 4,
    "text": "Ella is in the17th train car from the front and Bella in the34th from the rear. They are in the same car. How many cars?",
    "options": {
      "A": "48",
      "B": "49",
      "C": "50",
      "D": "51",
      "E": "52"
    },
    "grade": "3-4",
    "title": "双向编号",
    "tags": [
      "逻辑推理"
    ],
    "hints": [
      "同一车厢被两边都数到。",
      "先相加。",
      "再减重复的1节。"
    ],
    "methods": [
      "Count16 cars before, one shared, and33 after."
    ],
    "solution": "17+34 counts their shared car twice. Subtract one:17+34−1=50.",
    "tip": "Use an actual row of counters to show the overlap.",
    "answer": "C"
  },
  {
    "no": 14,
    "points": 4,
    "text": "Adam and Bart initially have equal chestnut counts. Adam gives Bart half of his own chestnuts. How many times as many does Bart then have as Adam?",
    "options": {
      "A": "2",
      "B": "3",
      "C": "4",
      "D": "5",
      "E": "Depends on the initial amount"
    },
    "grade": "3-4",
    "title": "转移",
    "tags": [
      "比例"
    ],
    "hints": [
      "把每人的原数量分两半。",
      "Adam剩1份，Bart有3份。",
      "比的是转移后的数量。"
    ],
    "methods": [
      "Try20 each: Adam10, Bart30."
    ],
    "solution": "Use2 units each initially. Adam transfers1 unit, leaving1; Bart now has3. Ratio3:1, independent of the initial even positive count.",
    "tip": "Total chestnuts are conserved; state divisibility if using whole chestnuts.",
    "answer": "B"
  },
  {
    "no": 15,
    "points": 4,
    "text": "Squares and triangles have17 vertices altogether. How many triangles are there?",
    "options": {
      "A": "1",
      "B": "2",
      "C": "3",
      "D": "4",
      "E": "5"
    },
    "grade": "3-4",
    "title": "顶点",
    "tags": [
      "逻辑推理"
    ],
    "hints": [
      "三角形3顶点，正方形4顶点。",
      "从17减去3t。",
      "余数要是4的倍数。"
    ],
    "methods": [
      "Reduce modulo4:3t≡1, so t≡3 mod4."
    ],
    "solution": "If t triangles and s squares,3t+4s=17. Test t=1,2,3,4,5: only t=3 leaves8, divisible by4, giving s=2.",
    "tip": "Count separate shape vertices; shapes do not share vertices on the table.",
    "answer": "C"
  },
  {
    "no": 16,
    "points": 4,
    "text": "What is the least number of matches to add to obtain exactly11 squares?",
    "options": {
      "A": "2",
      "B": "3",
      "C": "4",
      "D": "5",
      "E": "6"
    },
    "grade": "3-4",
    "title": "火柴",
    "tags": [
      "逻辑推理"
    ],
    "hints": [
      "先按边长数原来的8个。",
      "找左上内部的缺口。",
      "两根补出3个小正方形。"
    ],
    "methods": [
      "Mark missing unit edges and tally how many squares each would complete."
    ],
    "solution": "Use grid coordinates with top-left(0,0), rightward x, downward y. Add(2,1)–(2,2) and(1,2)–(2,2). These complete three unit squares. The final counts are6 unit squares,2 squares of side2 and3 squares of side3:11 total. Initially there are8; no single missing unit edge completes three squares, so one match cannot suffice.",
    "tip": "Use the coordinates to place the two matches unambiguously; count composite squares. 5-Point Questions",
    "answer": "A",
    "figure": "assets/2001-g3-4/page-3.png"
  },
  {
    "no": 17,
    "points": 5,
    "text": "Numbers1,2,3,4 are shown with mirror reflections. Which picture comes next?",
    "options": {
      "A": "Figure A",
      "B": "Figure B",
      "C": "Figure C",
      "D": "Figure D",
      "E": "Figure E"
    },
    "grade": "3-4",
    "title": "镜像",
    "tags": [
      "图形识别"
    ],
    "hints": [
      "先找镜轴方向。",
      "下一项应是数字5。",
      "将5上下反射并组合。"
    ],
    "methods": [
      "Fold tracing paper along a horizontal line."
    ],
    "solution": "The examples combine each numeral with its reflection across a horizontal line. Apply the same reflection to5, preserving its position relative to the mirror line. The result is figure C.",
    "tip": "Reflection reverses above/below; it is not simply rotating a numeral.",
    "answer": "C",
    "figure": "assets/2001-g3-4/page-3.png"
  },
  {
    "no": 18,
    "points": 5,
    "text": "Which napkin can result from the folded paper cut-out?",
    "options": {
      "A": "Napkin A",
      "B": "Napkin B",
      "C": "Napkin C",
      "D": "Napkin D",
      "E": "Napkin E"
    },
    "grade": "3-4",
    "title": "折叠剪纸",
    "tags": [
      "对称"
    ],
    "hints": [
      "先看切口是否靠折边。",
      "展开一次就反射一次。",
      "孔的位置和形状都要匹配。"
    ],
    "methods": [
      "Use a folded paper model and cut the notch."
    ],
    "solution": "Unfold one crease at a time and reflect the small cut across each crease. The notch at the folded edge produces two interior diamond-shaped holes, as in C, rather than square holes or edge notches.",
    "tip": "Track number, location and shape of holes; preserve the original folding sequence.",
    "answer": "C",
    "figure": "assets/2001-g3-4/page-4.png"
  },
  {
    "no": 19,
    "points": 5,
    "text": "A Math Club has12 boys and8 girls. Each week1 boy and2 girls join. How many total members when the counts become equal?",
    "options": {
      "A": "20",
      "B": "24",
      "C": "28",
      "D": "32",
      "E": "36"
    },
    "grade": "3-4",
    "title": "增长差",
    "tags": [
      "逻辑推理"
    ],
    "hints": [
      "初始人数差4。",
      "每周差距缩小1。",
      "四周后各16人。"
    ],
    "methods": [
      "Solve12+w=8+2w."
    ],
    "solution": "The initial gap is4. Girls gain one more member per week than boys, so equality takes4 weeks. Counts become16 and16; total32.",
    "tip": "Use difference growth, not total growth, to find the time.",
    "answer": "D"
  },
  {
    "no": 20,
    "points": 5,
    "text": "How many three-digit numbers have digit sum4?",
    "options": {
      "A": "10",
      "B": "9",
      "C": "8",
      "D": "7",
      "E": "6"
    },
    "grade": "3-4",
    "title": "数位和",
    "tags": [
      "分类"
    ],
    "hints": [
      "百位至少1。",
      "按百位分类。",
      "每类分别4、3、2、1个。"
    ],
    "methods": [
      "List100-based,200-based,300-based and400-based cases."
    ],
    "solution": "Hundreds digit1 leaves a two-digit-position sum3, giving4 possibilities; hundreds2 gives3; hundreds3 gives2; hundreds4 gives1. Total4+3+2+1=10.",
    "tip": "Allow zeros in tens and units; do not allow zero hundreds.",
    "answer": "A"
  },
  {
    "no": 21,
    "points": 5,
    "text": "Two square towels each have perimeter720 cm. Three identical rectangular towels fill the remaining strip to make the large square shown. What is one rectangle's perimeter?",
    "options": {
      "A": "600 cm",
      "B": "560 cm",
      "C": "440 cm",
      "D": "360 cm",
      "E": "300 cm"
    },
    "grade": "3-4",
    "title": "拼接",
    "tags": [
      "周长"
    ],
    "hints": [
      "先求小正方形边长180。",
      "大正方形边长360。",
      "下方每块宽120、高180。"
    ],
    "methods": [
      "Use the ratio rectangle sides=3:2, or P_rectangle=(5/6)P_square."
    ],
    "solution": "Each small square side is720÷4=180 cm. Two side-by-side squares make the large square width360, hence height360. The lower strip has height180 and is split into three equal widths120. Rectangle perimeter=2×(180+120)=600 cm.",
    "tip": "The entire outside shape is square; use that to determine the lower strip's height.",
    "answer": "A",
    "figure": "assets/2001-g3-4/page-4.png"
  },
  {
    "no": 22,
    "points": 5,
    "text": "Todd has as much money as Will and Kevin together. Will has$10 less than Kevin. They have$40 altogether. How much does Will have?",
    "options": {
      "A": "$4",
      "B": "$5",
      "C": "$10",
      "D": "$15",
      "E": "$20"
    },
    "grade": "3-4",
    "title": "和差",
    "tags": [
      "逻辑推理"
    ],
    "hints": [
      "先把Todd与另外两人分两半。",
      "Will和Kevin合计20、差10。",
      "较少数=(20−10)÷2。"
    ],
    "methods": [
      "Let Will=w, Kevin=w+10, Todd=2w+10; solve4w+20=40."
    ],
    "solution": "Todd is half the total, so Todd=$20 and Will+Kevin=$20. Remove the$10 difference; the other$10 splits equally, giving Will=$5 and Kevin=$15.",
    "tip": "Check both the total-money relation and the difference.",
    "answer": "B"
  },
  {
    "no": 23,
    "points": 5,
    "text": "Each of three baskets has11 candy bars. Remove one at a time: left, middle, right, middle, then repeat. When middle is empty, what is the largest number left in one basket?",
    "options": {
      "A": "1",
      "B": "2",
      "C": "5",
      "D": "6",
      "E": "11"
    },
    "grade": "3-4",
    "title": "周期取物",
    "tags": [
      "逻辑推理"
    ],
    "hints": [
      "四步一周期。",
      "五轮后中篮剩1。",
      "再取左、中，立刻停止。"
    ],
    "methods": [
      "Track only the final incomplete cycle after using whole cycles."
    ],
    "solution": "A cycle removes(1,2,1) from(left,middle,right). After5 cycles, counts are(6,1,6). The next left removal gives(5,1,6), then middle gives(5,0,6). The largest remaining count is6.",
    "tip": "Stopping mid-cycle matters; do not finish a cycle after middle empties.",
    "answer": "D"
  },
  {
    "no": 24,
    "points": 5,
    "text": "A die has opposite faces summing to7. Roll it along the arrows to the starred square. What is on top?",
    "options": {
      "A": "5",
      "B": "4",
      "C": "3",
      "D": "1",
      "E": "Other number"
    },
    "grade": "3-4",
    "title": "骰子滚动",
    "tags": [
      "逻辑推理"
    ],
    "hints": [
      "先补齐相对面。",
      "每步更新顶面和运动方向两侧面。",
      "沿右、后、右、后滚动。"
    ],
    "methods": [
      "Use a labelled cube and physically follow the arrows."
    ],
    "solution": "Initially top=3, front=1, right=2; bottom=4, back=6, left=5. The arrows alternate one step right, away, right, away. Top faces after these rolls are5,1,4,2. The final top is2, so choose E.",
    "tip": "Keep a fixed board orientation; turning the page is different from rolling the die.",
    "answer": "E",
    "figure": "assets/2001-g3-4/page-5.png"
  }
];

Object.assign(KANGAROO_EXTENSIONS, {
  "2001-g3-4-1": {
    "text": "Each new candle lasts4 hours, and two are still unused at the final lighting. When does the last go out?",
    "change": "沿用文档拓展题的同一策略，替换数字或条件。",
    "method": "找出从未点过的蜡烛；同时燃烧看最长剩余时间。",
    "answer": "4 hours, provided the partly burned candles have at most4 hours left.",
    "solution": "4 hours, provided the partly burned candles have at most4 hours left."
  },
  "2001-g3-4-2": {
    "text": "He breaks3 different sticks once each. How many pieces are there?",
    "change": "沿用文档拓展题的同一策略，替换数字或条件。",
    "method": "取走被折的一根；放回两段。",
    "answer": "10",
    "solution": "10;7+3=10."
  },
  "2001-g3-4-3": {
    "text": "The same heart uses chocolate weighing12 g per square. What is its weight?",
    "change": "沿用文档拓展题的同一策略，替换数字或条件。",
    "method": "完整格与半格分别数；两个半格拼成一格。",
    "answer": "480 g",
    "solution": "480 g;40×12=480."
  },
  "2001-g3-4-4": {
    "text": "There are13 pairs per shelf instead. How many pairs remain after the same purchases?",
    "change": "沿用文档拓展题的同一策略，替换数字或条件。",
    "method": "先算总库存；两类顾客分别算购买量。",
    "answer": "30 pairs",
    "solution": "30 pairs;130−100=30."
  },
  "2001-g3-4-5": {
    "text": "Keep doubling for6 days. What is the total?",
    "change": "沿用文档拓展题的同一策略，替换数字或条件。",
    "method": "列出五天数量；每天翻倍。",
    "answer": "63 cups",
    "solution": "63 cups;31+32=63."
  },
  "2001-g3-4-6": {
    "text": "Correct only E's right-hand side, keeping its printed operations. What should it be?",
    "change": "沿用文档拓展题的同一策略，替换数字或条件。",
    "method": "逐项按运算顺序核算；加减同级从左往右。",
    "answer": "15",
    "solution": "15;18−6+3=12+3=15."
  },
  "2001-g3-4-7": {
    "text": "There are20 girls and12 boys. How many must join?",
    "change": "沿用文档拓展题的同一策略，替换数字或条件。",
    "method": "先算总人数31；寻找不小于31的6的倍数。",
    "answer": "4",
    "solution": "4;32 rises to36."
  },
  "2001-g3-4-8": {
    "text": "Four14 cm sticks span83 cm. Find each equal gap.",
    "change": "沿用文档拓展题的同一策略，替换数字或条件。",
    "method": "算木棒占用长度；四根之间只有三个间隔。",
    "answer": "9 cm",
    "solution": "9 cm; (83−56)÷3=9."
  },
  "2001-g3-4-9": {
    "text": "Bobby was born on Abby's fourth birthday. How many years until Abby is twice his age?",
    "change": "沿用文档拓展题的同一策略，替换数字或条件。",
    "method": "两人永远差3岁；两倍关系时差等于小者年龄。",
    "answer": "4 years",
    "solution": "4 years; ages4 and8."
  },
  "2001-g3-4-10": {
    "text": "The lower point is250 m below and upper point400 m above. Find the vertical range.",
    "change": "沿用文档拓展题的同一策略，替换数字或条件。",
    "method": "画入口为0的数轴；两点在0两侧。",
    "answer": "650 m",
    "solution": "650 m;250+400=650."
  },
  "2001-g3-4-11": {
    "text": "With21 candies and the same rules, what is the maximum?",
    "change": "沿用文档拓展题的同一策略，替换数字或条件。",
    "method": "要人数多就先用最小份数；六人的最低总数21。",
    "answer": "6",
    "solution": "6;1+2+3+4+5+6=21, while seven need28."
  },
  "2001-g3-4-12": {
    "text": "Make solid A from cubes. If the whole model is rotated, do its cube connections or branch order change?",
    "change": "沿用文档拓展题的同一策略，替换数字或条件。",
    "method": "先找最长直线作参照；对齐后比较两端分支。",
    "answer": "Connections and handedness do not change",
    "solution": "Connections and handedness do not change; it remains the same solid."
  },
  "2001-g3-4-13": {
    "text": "The shared car is12th from the front and20th from the rear. How many cars?",
    "change": "沿用文档拓展题的同一策略，替换数字或条件。",
    "method": "同一车厢被两边都数到；先相加。",
    "answer": "31",
    "solution": "31;12+20−1=31."
  },
  "2001-g3-4-14": {
    "text": "Adam gives Bart one third of his chestnuts. What is Bart-to-Adam ratio now?",
    "change": "沿用文档拓展题的同一策略，替换数字或条件。",
    "method": "把每人的原数量分两半；Adam剩1份，Bart有3份。",
    "answer": "2:1",
    "solution": "2:1; begin with3 units each, end with2 and4."
  },
  "2001-g3-4-15": {
    "text": "There are21 vertices and at least one of each shape. How many triangles?",
    "change": "沿用文档拓展题的同一策略，替换数字或条件。",
    "method": "三角形3顶点，正方形4顶点；从17减去3t。",
    "answer": "3",
    "solution": "3;3×3+4×3=21. The other nonnegative solution t=7 has no square and is excluded."
  },
  "2001-g3-4-16": {
    "text": "For that same completed figure, how many squares have side at least2 units?",
    "change": "沿用文档拓展题的同一策略，替换数字或条件。",
    "method": "先按边长数原来的8个；找左上内部的缺口。",
    "answer": "5",
    "solution": "5; two of side2 and three of side3."
  },
  "2001-g3-4-17": {
    "text": "Draw6 together with its reflection across the same horizontal mirror line.",
    "change": "沿用文档拓展题的同一策略，替换数字或条件。",
    "method": "先找镜轴方向；下一项应是数字5。",
    "answer": "A vertically reflected pair of6s",
    "solution": "A vertically reflected pair of6s; corresponding points lie equally far above and below the line."
  },
  "2001-g3-4-18": {
    "text": "If the cut is repeated with a larger triangular notch at the same place, how do the unfolded holes change?",
    "change": "沿用文档拓展题的同一策略，替换数字或条件。",
    "method": "先看切口是否靠折边；展开一次就反射一次。",
    "answer": "There are still two diamond holes at corresponding symmetric positions, but they are larger, provided they do not meet an outer edge.",
    "solution": "There are still two diamond holes at corresponding symmetric positions, but they are larger, provided they do not meet an outer edge."
  },
  "2001-g3-4-19": {
    "text": "Start with14 boys and8 girls and the same weekly intake. What is the total at equality?",
    "change": "沿用文档拓展题的同一策略，替换数字或条件。",
    "method": "初始人数差4；每周差距缩小1。",
    "answer": "40",
    "solution": "40; after6 weeks there are20 boys and20 girls."
  },
  "2001-g3-4-20": {
    "text": "How many three-digit numbers have digit sum5?",
    "change": "沿用文档拓展题的同一策略，替换数字或条件。",
    "method": "百位至少1；按百位分类。",
    "answer": "15",
    "solution": "15;5+4+3+2+1=15."
  },
  "2001-g3-4-21": {
    "text": "Each square towel's perimeter becomes600 cm with the same arrangement. Find one rectangle's perimeter.",
    "change": "沿用文档拓展题的同一策略，替换数字或条件。",
    "method": "先求小正方形边长180；大正方形边长360。",
    "answer": "500 cm",
    "solution": "500 cm; square side150, rectangle150 by100."
  },
  "2001-g3-4-22": {
    "text": "The total is$60 and the difference stays$10. How much does Will have?",
    "change": "沿用文档拓展题的同一策略，替换数字或条件。",
    "method": "先把Todd与另外两人分两半；Will和Kevin合计20、差10。",
    "answer": "$10",
    "solution": "$10; Will+Kevin=30, so Will=(30−10)÷2."
  },
  "2001-g3-4-23": {
    "text": "Start with12 bars in each basket instead. What is the largest remainder when middle empties?",
    "change": "沿用文档拓展题的同一策略，替换数字或条件。",
    "method": "四步一周期；五轮后中篮剩1。",
    "answer": "6",
    "solution": "6; after6 full cycles the counts are(6,0,6)."
  },
  "2001-g3-4-24": {
    "text": "What is the top after only the first two rolls along the same route?",
    "change": "沿用文档拓展题的同一策略，替换数字或条件。",
    "method": "先补齐相对面；每步更新顶面和运动方向两侧面。",
    "answer": "1",
    "solution": "1; first right roll brings5 up, then the away roll brings the original front1 up."
  }
});
