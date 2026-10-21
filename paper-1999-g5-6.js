// Imported from the linked Google teaching guide; original questions and figures checked against the local PDF.
KANGAROO_DATA["1999-g5-6"] = [
  {
    "no": 1,
    "points": 3,
    "text": "1999 – 999 – 99 – 9 =",
    "options": {
      "A": "1900",
      "B": "1090",
      "C": "1000",
      "D": "1990",
      "E": "1009"
    },
    "answer": null,
    "solution": "Subtract from left to right: 1999 − 999 = 1000; 1000 − 99 = 901; 901 − 9 = 892. Important: the PDF answer key says B (1090), but the expression as printed evaluates to 892; none of the choices matches. This is a source inconsistency to point out in class.",
    "methods": [
      "Group 999 + 99 + 9 = 1107 and subtract from 1999.",
      "Use column subtraction."
    ],
    "hints": [
      "What is 1999 minus 999?",
      "Perform each subtraction in written order.",
      "Then subtract 99 and 9 separately."
    ],
    "grade": "5-6",
    "tags": [
      "数与运算",
      "位值"
    ],
    "tip": "What is 1999 minus 999?",
    "title": "Subtraction and Place Value",
    "sourceAnswer": "B",
    "answerDisplay": "892（无匹配选项）",
    "issue": "原卷印刷有误：按所印算式计算为 892，A–E 均不匹配，原答案表标 B（1090）。本题保留原貌，不自动判对错。"
  },
  {
    "no": 2,
    "points": 3,
    "text": "Anna and her sister Mary take two different ways to school. Whose way is longer?",
    "options": {
      "A": "Anna's way",
      "B": "Mary's way",
      "C": "It depends on the distance to the school.",
      "D": "Both ways have the same length.",
      "E": "It is impossible to determine."
    },
    "answer": "D",
    "solution": "The drawing shows both paths travel the same total horizontal distance and the same total vertical distance without moving backward. Their horizontal segments can be lined up, and so can their vertical segments. Consequently, both routes have equal lengths.",
    "methods": [
      "Straighten each staircase path mentally.",
      "Use a grid and count rightward and downward unit lengths."
    ],
    "hints": [
      "What directions are the path segments?",
      "Can you combine all horizontal pieces into one segment?",
      "Compare total horizontal travel and total vertical travel, not the number of turns."
    ],
    "grade": "5-6",
    "tags": [
      "几何",
      "路径",
      "网格"
    ],
    "tip": "What directions are the path segments?",
    "title": "Two Paths to School",
    "figure": "assets/1999-g5-6/q2.png",
    "figureAlt": "Original question 2 diagram: Two Paths to School"
  },
  {
    "no": 3,
    "points": 3,
    "text": "One quarter of one half of double 32 is equal to",
    "options": {
      "A": "4",
      "B": "8",
      "C": "16",
      "D": "32",
      "E": "64"
    },
    "answer": "B",
    "solution": "Double 32 to get 64; take half to get 32; take one-quarter to get 8. In symbols: 32 × 2 × (1/2) × (1/4) = 8.",
    "methods": [
      "Notice that doubling and halving cancel.",
      "Work from the end using fractions."
    ],
    "hints": [
      "What does 'double 32' mean?",
      "Do the operations in the order described.",
      "Double, halve, then divide by four."
    ],
    "grade": "5-6",
    "tags": [
      "数与运算",
      "分数"
    ],
    "tip": "What does 'double 32' mean?",
    "title": "A Quarter of a Half of Double"
  },
  {
    "no": 4,
    "points": 3,
    "text": "How many different ways connect city A to city C?",
    "options": {
      "A": "2",
      "B": "3",
      "C": "5",
      "D": "6",
      "E": "9"
    },
    "answer": "D",
    "solution": "The diagram shows three possible paths from city A to city B and two possible paths from B to C. Pair any A–B choice with any B–C choice: 3 × 2 = 6 routes.",
    "methods": [
      "Draw a branching tree.",
      "List all ordered pairs of route choices."
    ],
    "hints": [
      "How many choices exist for the first leg?",
      "How many second-leg choices follow each first leg?",
      "Multiply the three first-leg possibilities by the two second-leg possibilities."
    ],
    "grade": "5-6",
    "tags": [
      "计数",
      "路径",
      "乘法原理"
    ],
    "tip": "How many choices exist for the first leg?",
    "title": "Routes Between Cities",
    "figure": "assets/1999-g5-6/q4.png",
    "figureAlt": "Original question 4 diagram: Routes Between Cities"
  },
  {
    "no": 5,
    "points": 3,
    "text": "How many times faster does the minute hand of any clock move than the hour hand?",
    "options": {
      "A": "6",
      "B": "12",
      "C": "9",
      "D": "10",
      "E": "15"
    },
    "answer": "B",
    "solution": "The minute hand makes one complete 360° turn in one hour. The hour hand completes only 1/12 of a turn in that time, or 30°. Thus 360 ÷ 30 = 12.",
    "methods": [
      "Compare degrees per hour (360° versus 30°).",
      "Compare periods of rotation (1 hour versus 12 hours)."
    ],
    "hints": [
      "How long is one revolution of the minute hand?",
      "How long is one revolution of the hour hand?",
      "Compare 60 minutes with 12 × 60 minutes."
    ],
    "grade": "5-6",
    "tags": [
      "比例",
      "角度",
      "周期"
    ],
    "tip": "How long is one revolution of the minute hand?",
    "title": "Clock-Hand Speed"
  },
  {
    "no": 6,
    "points": 3,
    "text": "In the picture to the right some small squares are shaded. The big square has dimensions of 9 x 9 and is made up of both shaded and white small squares. Find the difference between the number of shaded squares and white squares.",
    "options": {
      "A": "0",
      "B": "1",
      "C": "5",
      "D": "9",
      "E": "10"
    },
    "answer": "D",
    "solution": "The pictured 9 × 9 chess-like pattern has 81 unit squares. Alternating colors in an odd-by-odd checkerboard would differ by 1, but the actual drawing has a different shaded distribution. Pair equal shaded and unshaded squares in the symmetric regions as the solution diagram does; its four frames each leave two extra shaded squares, plus the top-left shaded square: 4 × 2 + 1 = 9.",
    "methods": [
      "Count each color explicitly by rows.",
      "Mark pairs of one shaded and one white square and count leftovers."
    ],
    "hints": [
      "Can you pair nearby shaded and white squares?",
      "Use the red-frame grouping shown in the solution diagram.",
      "Four frames each contribute two extra shaded squares, plus one corner square."
    ],
    "grade": "5-6",
    "tags": [
      "计数",
      "网格",
      "配对求和"
    ],
    "tip": "Can you pair nearby shaded and white squares?",
    "title": "Shaded 9 × 9 Square",
    "figure": "assets/1999-g5-6/q6.png",
    "figureAlt": "Original question 6 diagram: Shaded 9 × 9 Square"
  },
  {
    "no": 7,
    "points": 3,
    "text": "ABCD is a square and point M is the midpoint of side AB. The shaded part has an area equal to 9 cm² (see the picture). What is the area of square ABCD?",
    "options": {
      "A": "18 cm²",
      "B": "27 cm²",
      "C": "32 cm²",
      "D": "36 cm²",
      "E": "45 cm²"
    },
    "answer": "D",
    "solution": "In the diagram, the shaded triangle has a base half the square's side and a height equal to the full side. Its area is (1/2) × (side/2) × side = one-quarter of the square's area. The shaded area is 9 cm², so the whole square is 4 × 9 = 36 cm².",
    "methods": [
      "Fold/cut the square into four equal-area triangles.",
      "Let the side be s and compare s² with s²/4."
    ],
    "hints": [
      "What fraction of AB is AM?",
      "How do you calculate the shaded triangle's area?",
      "Its base is half the square's side, so the triangle occupies one-quarter of the square."
    ],
    "grade": "5-6",
    "tags": [
      "几何",
      "面积",
      "中点",
      "三角形"
    ],
    "tip": "What fraction of AB is AM?",
    "title": "Square Area with Midpoint",
    "figure": "assets/1999-g5-6/q7.png",
    "figureAlt": "Original question 7 diagram: Square Area with Midpoint"
  },
  {
    "no": 8,
    "points": 3,
    "text": "A movie started at 1:47 p.m. and finished at 4:18 p.m. How long was the movie?",
    "options": {
      "A": "185 min",
      "B": "151 min",
      "C": "91 min",
      "D": "149 min",
      "E": "209 min"
    },
    "answer": "B",
    "solution": "From 1:47 p.m. to 2:00 is 13 minutes; from 2:00 to 4:00 is 120 minutes; from 4:00 to 4:18 is 18 minutes. Total 13 + 120 + 18 = 151 minutes.",
    "methods": [
      "Convert both times to minutes after noon and subtract.",
      "Jump along a timeline through 2:00 and 4:00."
    ],
    "hints": [
      "How many minutes until 2:00?",
      "Split the time at whole-hour boundaries.",
      "Add 13 minutes, 120 minutes, and 18 minutes."
    ],
    "grade": "5-6",
    "tags": [
      "应用题",
      "单位换算"
    ],
    "tip": "How many minutes until 2:00?",
    "title": "Movie Running Time"
  },
  {
    "no": 9,
    "points": 3,
    "text": "At a birthday party, one person found out that no two of the people present were born in the same month. What is the greatest possible number of people at that party?",
    "options": {
      "A": "11",
      "B": "12",
      "C": "13",
      "D": "24",
      "E": "44"
    },
    "answer": "B",
    "solution": "There are 12 calendar months. If no two attendees were born in the same month, each month can be represented at most once. The largest possible group has 12 people.",
    "methods": [
      "Use 12 labeled boxes, one per month.",
      "Apply the pigeonhole principle."
    ],
    "hints": [
      "How many different months exist?",
      "What happens if two people share a birth month?",
      "Give each person a unique month; no more than twelve are available."
    ],
    "grade": "5-6",
    "tags": [
      "逻辑推理",
      "抽屉原理"
    ],
    "tip": "How many different months exist?",
    "title": "Birthday Months"
  },
  {
    "no": 10,
    "points": 3,
    "text": "How many bricks were taken out from the wall shown in the picture?",
    "options": {
      "A": "26",
      "B": "32",
      "C": "36",
      "D": "40",
      "E": "42"
    },
    "answer": "A",
    "solution": "The diagram shows empty positions shaped like equal-size bricks. Count the missing slots row by row: 1 + 3 + 5 + 10 + 3 + 4 = 26. The removed-brick count is the number of blank brick-sized spaces, not the perimeter.",
    "methods": [
      "Shade and number every missing slot.",
      "Break the gap into smaller rectangular groups."
    ],
    "hints": [
      "What counts as one brick-sized missing space?",
      "Count blanks in each horizontal row.",
      "Add the row counts 1, 3, 5, 10, 3, and 4."
    ],
    "grade": "5-6",
    "tags": [
      "计数",
      "网格"
    ],
    "tip": "What counts as one brick-sized missing space?",
    "title": "Missing Bricks in a Wall",
    "figure": "assets/1999-g5-6/q10.png",
    "figureAlt": "Original question 10 diagram: Missing Bricks in a Wall"
  },
  {
    "no": 11,
    "points": 4,
    "text": "John opened a book and found that the sum of the page number on the left and the page number on the right is equal to 25. What is the product of the two page numbers?",
    "options": {
      "A": "169",
      "B": "144",
      "C": "150",
      "D": "156",
      "E": "1998"
    },
    "answer": "D",
    "solution": "Facing pages have consecutive numbers, with the left page even and right page odd. Two consecutive numbers totaling 25 are 12 and 13. Their product is 12 × 13 = 156.",
    "methods": [
      "Try consecutive pairs.",
      "Use x + (x + 1) = 25."
    ],
    "hints": [
      "Are facing pages consecutive?",
      "Which consecutive numbers add to 25?",
      "Multiply 12 and 13."
    ],
    "grade": "5-6",
    "tags": [
      "数论",
      "页码问题",
      "方程"
    ],
    "tip": "Are facing pages consecutive?",
    "title": "Consecutive Book Pages"
  },
  {
    "no": 12,
    "points": 4,
    "text": "A certain kangaroo's jump is 5 m long. How many jumps does it need to make to cover a distance of 5000m + 5000 dm + 5000 cm + 5000 mm?",
    "options": {
      "A": "1000",
      "B": "1100",
      "C": "1110",
      "D": "1111",
      "E": "5555"
    },
    "answer": "D",
    "solution": "Convert every quantity to meters: 5000 m + 5000 dm (500 m) + 5000 cm (50 m) + 5000 mm (5 m) = 5555 m. At 5 m per jump: 5555 ÷ 5 = 1111 jumps.",
    "methods": [
      "Convert everything to centimeters instead.",
      "Convert each term into a number of jumps, then add."
    ],
    "hints": [
      "Are all distances in the same unit?",
      "Convert decimeters, centimeters and millimeters to meters.",
      "Add 5000 + 500 + 50 + 5 and divide by 5."
    ],
    "grade": "5-6",
    "tags": [
      "应用题",
      "单位换算",
      "除法"
    ],
    "tip": "Are all distances in the same unit?",
    "title": "Kangaroo Jumps and Metric Units"
  },
  {
    "no": 13,
    "points": 4,
    "text": "A stick that in reality measures 1 m is 2 cm long in a certain picture, and in that same picture the height of a fence is 4.5 cm. What is the actual height of the fence in cm?",
    "options": {
      "A": "450",
      "B": "225",
      "C": "45",
      "D": "22.5",
      "E": "4.5"
    },
    "answer": "B",
    "solution": "A 1 m = 100 cm stick is drawn as 2 cm, so each drawing centimeter represents 50 actual centimeters. A 4.5 cm drawing represents 4.5 × 50 = 225 cm.",
    "methods": [
      "Use a ratio table.",
      "Set up an equal-ratio equation."
    ],
    "hints": [
      "How long is 1 meter in centimeters?",
      "What actual length does 1 cm on the drawing represent?",
      "Multiply 4.5 by 50."
    ],
    "grade": "5-6",
    "tags": [
      "比例",
      "测量"
    ],
    "tip": "How long is 1 meter in centimeters?",
    "title": "Scale Drawing of a Fence"
  },
  {
    "no": 14,
    "points": 4,
    "text": "Find the sum of the missing digits.\n6A3 × 5 = 346B. Find A + B (A and B are digits).",
    "options": {
      "A": "6",
      "B": "8",
      "C": "10",
      "D": "12",
      "E": "14"
    },
    "answer": "E",
    "solution": "The vertical multiplication shown in the source is 6□3 × 5 = 3465. Divide 3465 by 5 to get 693, so the missing middle digit is 9. The result's missing digit is 5, giving 9 + 5 = 14. Use the original image to show the blank positions.",
    "methods": [
      "Use long division.",
      "Use column multiplication and carries."
    ],
    "hints": [
      "What digit can be found by working backward?",
      "Divide the product by 5.",
      "693 × 5 = 3465; add the two missing digits."
    ],
    "grade": "5-6",
    "tags": [
      "数与运算",
      "位值",
      "逆向思维"
    ],
    "tip": "What digit can be found by working backward?",
    "title": "Missing Digits in Multiplication"
  },
  {
    "no": 15,
    "points": 4,
    "text": "Which of the figures below will form a rectangle when combined with the figure to the right?",
    "options": {
      "A": "Figure A (see diagram)",
      "B": "Figure B (see diagram)",
      "C": "Figure C (see diagram)",
      "D": "Figure D (see diagram)",
      "E": "Figure E (see diagram)"
    },
    "answer": "C",
    "solution": "The target figure and five choices appear in the original paper. Rotate/fit each candidate mentally without overlap or gaps. Choice C fills the missing complementary outline to form a rectangle.",
    "methods": [
      "Trace the outline on squared paper.",
      "Rotate paper cutouts and try to tile a rectangle."
    ],
    "hints": [
      "What final outside boundary must you create?",
      "Compare notches and protrusions in each option.",
      "Only option C completes all indentations without gaps."
    ],
    "grade": "5-6",
    "tags": [
      "几何",
      "图形识别",
      "空间想象"
    ],
    "tip": "What final outside boundary must you create?",
    "title": "Completing a Rectangle",
    "figure": "assets/1999-g5-6/q15.png",
    "figureAlt": "Original question 15 diagram: Completing a Rectangle"
  },
  {
    "no": 16,
    "points": 4,
    "text": "The dog is 9 times as heavy as the cat, the mouse is 20 times lighter than the cat, and the turnip is 6 times as heavy as the mouse. How many times is the dog as heavy as the turnip?",
    "options": {
      "A": "30",
      "B": "27",
      "C": "1080",
      "D": "15",
      "E": "The dog is lighter than the turnip."
    },
    "answer": "A",
    "solution": "Dog = 9 cats. Cat = 20 mice. So dog = 9 × 20 = 180 mice. Turnip = 6 mice. The dog-to-turnip ratio is 180 ÷ 6 = 30.",
    "methods": [
      "Use a ratio chain.",
      "Choose a convenient numerical mouse weight and compare."
    ],
    "hints": [
      "Which animal can serve as the common unit?",
      "Express dog and turnip weights in mice.",
      "Divide 9 × 20 by 6."
    ],
    "grade": "5-6",
    "tags": [
      "比例",
      "乘法",
      "除法"
    ],
    "tip": "Which animal can serve as the common unit?",
    "title": "Dog, Cat, Mouse and Turnip Weights"
  },
  {
    "no": 17,
    "points": 4,
    "text": "A kangaroo wants to make a rectangular quilt 1.5 m long and 1 m wide using square scraps which measure 10 cm x 10 cm. At every point where four squares meet she wants to place a fancy button. How many buttons will she need?",
    "options": {
      "A": "150",
      "B": "104",
      "C": "126",
      "D": "140",
      "E": "135"
    },
    "answer": "C",
    "solution": "The quilt is 150 cm by 100 cm, formed from 10 cm square scraps: 15 columns and 10 rows. A button goes only at an interior point where four scraps meet. There are 15 − 1 = 14 vertical interior joins and 10 − 1 = 9 horizontal joins, hence 14 × 9 = 126 buttons.",
    "methods": [
      "Draw a smaller rectangular grid first.",
      "Use the formula (columns − 1)(rows − 1)."
    ],
    "hints": [
      "How many squares fit along each side?",
      "Do points along the outer boundary touch four squares?",
      "Count 14 interior vertical positions times nine interior horizontal positions."
    ],
    "grade": "5-6",
    "tags": [
      "计数",
      "网格",
      "单位换算"
    ],
    "tip": "How many squares fit along each side?",
    "title": "Buttons on a Square-Scrap Quilt"
  },
  {
    "no": 18,
    "points": 4,
    "text": "One bowl contained 26 liters of water and another bowl contained 7 liters of water. The same amount of water was added to each bowl, and now the second bowl contains 3 times less water than the first bowl. How many liters of water were added to each bowl?",
    "options": {
      "A": "2.5",
      "B": "5",
      "C": "7.5",
      "D": "10",
      "E": "15"
    },
    "answer": "A",
    "solution": "First bowl has 26 L; second has 7 L. After x liters go into both, the first contains three times the second: 26 + x = 3(7 + x). Thus 26 + x = 21 + 3x; 5 = 2x, so x = 2.5 L.",
    "methods": [
      "Use a bar model based on their constant 19 L difference.",
      "Test multiple-choice values."
    ],
    "hints": [
      "What stays equal when you pour water into both bowls?",
      "Write the final amounts in the two bowls.",
      "The larger final amount is three times the smaller final amount."
    ],
    "grade": "5-6",
    "tags": [
      "代数",
      "方程",
      "比例"
    ],
    "tip": "What stays equal when you pour water into both bowls?",
    "title": "Equal Water Added to Two Bowls"
  },
  {
    "no": 19,
    "points": 4,
    "text": "In a magic square, the sum of the numbers in the cells in each vertical column, in each horizontal row, and along each diagonal is the same. The square shown to the right is a magic square. Two of the numbers have been taken out, and three were covered with the letters A, B, and C. Find the sum A+B+ C.\nRows: [16, 3, A]; [C, 10, blank]; [B, blank, 4].",
    "options": {
      "A": "30",
      "B": "41",
      "C": "14",
      "D": "25",
      "E": "It is impossible to determine."
    },
    "answer": "D",
    "solution": "In the shown 3 × 3 square, the complete diagonal 16 + 10 + 4 = 30 gives the common sum. First row 16 + 3 + A = 30 gives A = 11. First column 16 + C + B = 30; from the finished square C = 5 and B = 9. Thus A + B + C = 11 + 9 + 5 = 25. The filled rows are 16,3,11 / 5,10,15 / 9,17,4.",
    "methods": [
      "Work from rows/columns with the fewest blanks.",
      "Use the center-value property of 3 × 3 magic squares."
    ],
    "hints": [
      "Find a complete row, column or diagonal first.",
      "Use its total as the magic sum everywhere.",
      "The complete diagonal sums to 30; solve the missing cells."
    ],
    "grade": "5-6",
    "tags": [
      "逻辑推理",
      "方程",
      "数字和"
    ],
    "tip": "Find a complete row, column or diagonal first.",
    "title": "Magic Square with Missing Values",
    "figure": "assets/1999-g5-6/q19.png",
    "figureAlt": "Original question 19 diagram: Magic Square with Missing Values"
  },
  {
    "no": 20,
    "points": 4,
    "text": "John and Adam are making a square using small squares with the same dimensions. Adam places one red square down, and John adds 8 green squares around it to make a second square. Then Adam places 16 yellow squares around this square to make a third square, and so forth. How many squares does Adam have to place to make the fifth square?",
    "options": {
      "A": "32",
      "B": "64",
      "C": "81",
      "D": "121",
      "E": "125"
    },
    "answer": "A",
    "solution": "The square grows from side length 1 to 3 to 5 to 7 to 9 unit squares. The fifth square has 9² = 81 cells; the fourth has 7² = 49. Adam adds the fifth ring: 81 − 49 = 32 squares.",
    "methods": [
      "Count the added border as four strips.",
      "Notice successive rings add 8, 16, 24, 32, ... squares."
    ],
    "hints": [
      "How does the side length grow each time?",
      "Find the total cells in the fourth and fifth squares.",
      "Subtract 7² from 9²."
    ],
    "grade": "5-6",
    "tags": [
      "几何",
      "面积",
      "递推"
    ],
    "tip": "How does the side length grow each time?",
    "title": "Colored Layers of a Growing Square"
  },
  {
    "no": 21,
    "points": 5,
    "text": "Ela came to Anna's birthday party 5 minutes earlier than Stan but 3 minutes later than Iwona. Iwona left first. She left 2 minutes earlier than Stan and 5 minutes earlier than Ela. How many minutes longer was Ela at the party than Stan?",
    "options": {
      "A": "2",
      "B": "4",
      "C": "6",
      "D": "8",
      "E": "Stan stayed longer than Ela."
    },
    "answer": "D",
    "solution": "Ela arrives five minutes before Stan. Iwona leaves two minutes before Stan and five minutes before Ela, so Ela leaves three minutes after Stan. Ela's duration exceeds Stan's by five minutes at the beginning plus three at the end: 5 + 3 = 8 minutes.",
    "methods": [
      "Draw arrival and departure on one timeline.",
      "Assign arbitrary clock times and compare stays."
    ],
    "hints": [
      "Who arrives earlier, Ela or Stan?",
      "Who leaves later, and by how much?",
      "Ela starts 5 minutes earlier and ends 3 minutes later."
    ],
    "grade": "5-6",
    "tags": [
      "应用题",
      "比较大小"
    ],
    "tip": "Who arrives earlier, Ela or Stan?",
    "title": "Arrival and Departure Times at a Party"
  },
  {
    "no": 22,
    "points": 5,
    "text": "Six hundred and six people can eat six hundred and six hotdogs, six hundred of which are with mustard and six are without mustard. How many hotdogs without mustard will you need for six hundred and six thousand six hundred and six people?",
    "options": {
      "A": "606",
      "B": "1000",
      "C": "6006",
      "D": "606,606",
      "E": "600,600"
    },
    "answer": "C",
    "solution": "Among 606 hotdogs for 606 people, six are without mustard: 6 per 606 people. For 606,606 people, note 606,606 = 606 × 1001. Thus non-mustard hotdogs = 6 × 1001 = 6006.",
    "methods": [
      "Use proportional reasoning.",
      "Observe the repeated-number factor 1001."
    ],
    "hints": [
      "How many mustard-free hotdogs are needed per 606 people?",
      "How many groups of 606 people are in 606,606?",
      "Multiply six by the number of groups."
    ],
    "grade": "5-6",
    "tags": [
      "比例",
      "乘法"
    ],
    "tip": "How many mustard-free hotdogs are needed per 606 people?",
    "title": "Hotdogs Without Mustard"
  },
  {
    "no": 23,
    "points": 5,
    "text": "Four squirrels ate 1999 nuts altogether, and each one ate at least 100 nuts. The first squirrel ate more nuts than any other squirrel. The second and third squirrels together ate 1265 nuts. How many nuts did the first squirrel eat?",
    "options": {
      "A": "598",
      "B": "271",
      "C": "629",
      "D": "634",
      "E": "other answer"
    },
    "answer": "D",
    "solution": "Second and third together eat 1265; first plus fourth = 1999 − 1265 = 734. The fourth eats at least 100, so the first eats at most 634. Also, among the second and third, at least one eats at least 633 (since their sum is 1265). The first must eat more than either, thus at least 634. It must therefore eat exactly 634 nuts. The remaining squirrels can eat 633, 632, and 100.",
    "methods": [
      "Use upper and lower bounds for the first squirrel.",
      "Try the answer choices and enforce all conditions."
    ],
    "hints": [
      "What is the sum eaten by first and fourth?",
      "What is the smallest possible number eaten by the fourth?",
      "Use the fact that one of the middle squirrels ate at least 633."
    ],
    "grade": "5-6",
    "tags": [
      "逻辑推理",
      "不等式",
      "最值"
    ],
    "tip": "What is the sum eaten by first and fourth?",
    "title": "Squirrels Sharing Nuts"
  },
  {
    "no": 24,
    "points": 5,
    "text": "When it is raining, the cat stays in the room or in the basement. When the cat stays in the room, the mouse is in the foyer and the cheese is in the refrigerator. When the cheese is on the table and the cat stays in the basement, the mouse is in the room. Right now, it is raining and the cheese is on the table. So, for sure:",
    "options": {
      "A": "The cat is in the room.",
      "B": "The cat is in the room and the mouse is in the foyer.",
      "C": "The mouse is in the foyer.",
      "D": "The cat is in the basement and the mouse is in the room.",
      "E": "This situation is impossible."
    },
    "answer": "D",
    "solution": "It is raining, so the cat is either in the room or basement. If it were in the room, the cheese would be in the refrigerator. The cheese is on the table, so the cat cannot be in the room; it must be in the basement. The stated basement-and-table condition places the mouse in the room.",
    "methods": [
      "Use a two-case table.",
      "Reason by contradiction."
    ],
    "hints": [
      "What locations can the cat occupy when it rains?",
      "Would cheese on the table be possible with the cat in the room?",
      "Eliminate the room, then use the basement-and-table condition."
    ],
    "grade": "5-6",
    "tags": [
      "逻辑推理",
      "排除法"
    ],
    "tip": "What locations can the cat occupy when it rains?",
    "title": "Rain, Cat, Mouse and Cheese"
  },
  {
    "no": 25,
    "points": 5,
    "text": "What is the maximum number of acute angles that can be made by six rays coming out from the same point?",
    "options": {
      "A": "6",
      "B": "8",
      "C": "9",
      "D": "12",
      "E": "15"
    },
    "answer": "E",
    "solution": "Each pair of distinct rays forms one smaller angle. The number of pairs among six rays is 6 × 5 ÷ 2 = 15. Place all six rays within a narrow sector less than 90° wide, and every pair creates an acute angle, so all 15 are possible.",
    "methods": [
      "List pairs systematically.",
      "Use the combination formula n(n−1)/2."
    ],
    "hints": [
      "How many rays define one angle?",
      "Can all rays lie within a sector narrower than 90°?",
      "Count the pairs of six rays without counting a pair twice."
    ],
    "grade": "5-6",
    "tags": [
      "几何",
      "角度",
      "组合"
    ],
    "tip": "How many rays define one angle?",
    "title": "Acute Angles Formed by Six Rays"
  },
  {
    "no": 26,
    "points": 5,
    "text": "The \"yield\" of 36 equals 18, the \"yield\" of 325 equals 30, the \"yield\" of 45 equals 20, and the \"yield\" of 30 equals 0. What is the \"yield\" of 531?",
    "options": {
      "A": "10",
      "B": "15",
      "C": "16",
      "D": "21",
      "E": "22"
    },
    "answer": "B",
    "solution": "The yield pattern is multiplication of digits: 3 × 6 = 18; 3 × 2 × 5 = 30; 4 × 5 = 20; 3 × 0 = 0. For 531, yield = 5 × 3 × 1 = 15.",
    "methods": [
      "Look for a rule shared by every example.",
      "Eliminate addition using 30 yielding zero."
    ],
    "hints": [
      "What operation turns 36 into 18?",
      "Test the same operation on 325 and 45.",
      "Multiply 5, 3 and 1."
    ],
    "grade": "5-6",
    "tags": [
      "数论",
      "数字特征",
      "乘法"
    ],
    "tip": "What operation turns 36 into 18?",
    "title": "The Yield of a Number"
  },
  {
    "no": 27,
    "points": 5,
    "text": "The diagram to the right corresponds to only one of the cubes below. Which one?",
    "options": {
      "A": "Figure A (see diagram)",
      "B": "Figure B (see diagram)",
      "C": "Figure C (see diagram)",
      "D": "Figure D (see diagram)",
      "E": "Figure E (see diagram)"
    },
    "answer": "E",
    "solution": "The diagram on the original page displays a cube net marked M, N, O, P, R, S and five possible folded cubes. Fold the net mentally. Use N as a reference face and check adjacent faces, opposite faces and their orientation. Choices A–D place a face or letter orientation inconsistently; E is the matching cube (as confirmed by the source solution).",
    "methods": [
      "Cut out and fold a paper net.",
      "Use face-adjacency and opposite-face tables."
    ],
    "hints": [
      "Which squares touch N in the flat net?",
      "Which faces become opposite after folding?",
      "Check not just the three visible letters but their cyclic orientation."
    ],
    "grade": "5-6",
    "tags": [
      "几何",
      "立方体",
      "空间想象"
    ],
    "tip": "Which squares touch N in the flat net?",
    "title": "Cube Net and Letter Positions",
    "figure": "assets/1999-g5-6/q27.png",
    "figureAlt": "Original question 27 diagram: Cube Net and Letter Positions"
  },
  {
    "no": 28,
    "points": 5,
    "text": "In each one of the 5 cups shown below you can find coffee, cocoa, or tea. There is twice as much coffee as cocoa. None of the beverages was poured into three cups. In which cup- is the cocoa?",
    "options": {
      "A": "950 g",
      "B": "750 g",
      "C": "550 g",
      "D": "475 g",
      "E": "325 g"
    },
    "answer": "B",
    "solution": "The source figure gives five cup amounts: 950 g, 750 g, 550 g, 475 g and 325 g. There are three beverages across five cups; none occupies three cups, so one beverage occupies one cup and the other two occupy two each. Because coffee is twice cocoa, find a two-cup coffee sum double a single-cup cocoa amount: 950 + 550 = 1500 g, exactly twice 750 g. Thus 750 g cup 2 holds cocoa; the other two cups hold tea.",
    "methods": [
      "List sums of two cups systematically.",
      "Use a table to test candidates for the single cocoa cup."
    ],
    "hints": [
      "How many cups can each drink occupy?",
      "Find one cup whose amount could be doubled by adding two other cups.",
      "950 + 550 = 2 × 750."
    ],
    "grade": "5-6",
    "tags": [
      "逻辑推理",
      "比例",
      "枚举"
    ],
    "tip": "How many cups can each drink occupy?",
    "title": "Coffee, Cocoa and Tea in Cups",
    "figure": "assets/1999-g5-6/q28.png",
    "figureAlt": "Original question 28 diagram: Coffee, Cocoa and Tea in Cups"
  },
  {
    "no": 29,
    "points": 5,
    "text": "How many squares are there in the figure to the right?",
    "options": {
      "A": "46",
      "B": "47",
      "C": "45",
      "D": "33",
      "E": "37"
    },
    "answer": "B",
    "solution": "Count by side length. The plain 4 × 4 grid has 16 + 9 + 4 + 1 = 30 squares. The added segments create 3 outlined squares, 2 further unit squares across their joins, and 12 half-unit squares. Total: 30 + 3 + 2 + 12 = 47. The guide’s previous 3 + 6 + 8 grouping has been corrected against the source solution.",
    "methods": [
      "Count by side length rather than by position.",
      "Color-code squares so none are missed."
    ],
    "hints": [
      "Which square sizes exist in the 4 × 4 grid?",
      "Count all grid-aligned squares first.",
      "Then locate squares created by the extra interior segments."
    ],
    "grade": "5-6",
    "tags": [
      "几何",
      "正方形",
      "计数",
      "分类讨论"
    ],
    "tip": "Which square sizes exist in the 4 × 4 grid?",
    "title": "Counting Squares in a Grid Figure",
    "figure": "assets/1999-g5-6/q29.png",
    "figureAlt": "Original question 29 diagram: Counting Squares in a Grid Figure"
  },
  {
    "no": 30,
    "points": 5,
    "text": "An electronic clock shows hours, minutes, and seconds. Right now it shows 19:58:47. As you can see, all the digits are different. After how many seconds will you see all different digits again?",
    "options": {
      "A": "40",
      "B": "73",
      "C": "156",
      "D": "157",
      "E": "898"
    },
    "answer": "E",
    "solution": "The current display is 19:58:47 and all six digits differ. At 19:58:48 the digit 8 repeats, and at 19:58:49 the 9 repeats. During 19:59 the 9 repeats; throughout 20:00–20:12 the 0 or 2 repeats. The first later six-distinct-digit display is 20:13:45. Elapsed time is 13 seconds to 19:59:00, then 14 minutes 45 seconds to 20:13:45: 13 + 14 × 60 + 45 = 898 seconds.",
    "methods": [
      "Systematically scan valid hours, minutes, seconds.",
      "Convert both times to seconds since midnight and subtract."
    ],
    "hints": [
      "Do the very next seconds still have distinct digits?",
      "What repeated digits occur around 19:59 and 20:00?",
      "Check 20:13:45 and subtract 19:58:47."
    ],
    "grade": "5-6",
    "tags": [
      "数论",
      "数字特征",
      "枚举",
      "单位换算"
    ],
    "tip": "Do the very next seconds still have distinct digits?",
    "title": "Digital Clock: All Different Digits"
  }
];
Object.assign(KANGAROO_EXTENSIONS, {
  "1999-g5-6-1": {
    "text": "Change only the last subtraction: calculate 1999 − 999 − 99 − 19.",
    "change": "The final subtracted number changes from 9 to 19; the subtraction structure stays identical.",
    "method": "Group the three subtrahends first or subtract step by step.",
    "answer": "882",
    "solution": "882: 1999 − 999 = 1000; − 99 = 901; − 19 = 882."
  },
  "1999-g5-6-2": {
    "text": "Draw two new staircase paths from (0,0) to (6,4), each using only right and down steps. Which is longer?",
    "change": "Replace the pictured paths with two different routes but preserve the same endpoints and directions.",
    "method": "Add the total horizontal and vertical distances for each path.",
    "answer": "They are equal at 10 units",
    "solution": "They are equal at 10 units: 6 right + 4 down on either route."
  },
  "1999-g5-6-3": {
    "text": "Find one-quarter of one-half of double 48.",
    "change": "Only the starting number changes from 32 to 48.",
    "method": "Double, take half, then divide by four; or cancel doubling against halving.",
    "answer": "12",
    "solution": "12: 48 × 2 = 96; half is 48; one-quarter is 12."
  },
  "1999-g5-6-4": {
    "text": "A journey has four possible routes from A to B and three from B to C. How many A-to-C routes via B are there?",
    "change": "Change the numbers of path choices but keep the two-stage route framework.",
    "method": "Multiply independent choices, or draw a choice tree.",
    "answer": "12 routes",
    "solution": "12 routes: 4 × 3 = 12."
  },
  "1999-g5-6-5": {
    "text": "How many degrees does the minute hand turn while the hour hand turns 45°?",
    "change": "Replace the speed-ratio question with an angle question; the relative speed remains unchanged.",
    "method": "Multiply the hour-hand angle by 12.",
    "answer": "540°",
    "solution": "540°: the minute hand moves 12 × 45° = 540°."
  },
  "1999-g5-6-6": {
    "text": "In an alternating 11 × 11 checkerboard whose top-left corner is shaded, how many more shaded than white unit squares are there?",
    "change": "Use an 11 × 11 alternating pattern instead of the original shading arrangement; still compare the counts of two colors.",
    "method": "Pair neighboring different-colored squares and count the leftover corner color.",
    "answer": "1 more shaded square",
    "solution": "1 more shaded square: 61 shaded and 60 white."
  },
  "1999-g5-6-7": {
    "text": "ABCD is a square, M is the midpoint of AB, and triangle AMD has area 16 cm². Find the square’s area.",
    "change": "Change only the shaded area from 9 to 16 cm².",
    "method": "The shaded region remains one-quarter of the square.",
    "answer": "64 cm²",
    "solution": "64 cm²: 4 × 16 = 64."
  },
  "1999-g5-6-8": {
    "text": "A movie runs from 1:52 p.m. to 4:23 p.m. How long is it?",
    "change": "Change only the start and end minutes while keeping the same time-interval method.",
    "method": "Count to 2:00, then whole hours, then the last minutes.",
    "answer": "151 minutes",
    "solution": "151 minutes: 8 + 120 + 23 = 151."
  },
  "1999-g5-6-9": {
    "text": "At a gathering, no two people were born on the same day of the week. What is the largest possible group?",
    "change": "Change the category from birth month to day of the week, keeping the 'all different' restriction.",
    "method": "Count how many possible categories are available.",
    "answer": "7 people",
    "solution": "7 people: one per weekday."
  },
  "1999-g5-6-10": {
    "text": "A wall has empty brick slots in five rows: 2, 4, 6, 5, and 3. How many bricks were removed?",
    "change": "Change the row-by-row missing-brick counts while retaining the counting strategy.",
    "method": "Count the spaces in each row, then sum them.",
    "answer": "20 bricks",
    "solution": "20 bricks: 2 + 4 + 6 + 5 + 3 = 20."
  },
  "1999-g5-6-11": {
    "text": "Two facing pages total 41. What is their product?",
    "change": "Change the page-number sum from 25 to 41.",
    "method": "Find consecutive numbers with the given sum, then multiply.",
    "answer": "420",
    "solution": "420: the pages are 20 and 21; 20 × 21 = 420."
  },
  "1999-g5-6-12": {
    "text": "A kangaroo jumps 4 m at a time. How many jumps cover 4000 m + 4000 dm + 4000 cm + 4000 mm?",
    "change": "Change the repeated number from 5000 to 4000 and jump length from 5 to 4.",
    "method": "Convert all units to meters before dividing by jump length.",
    "answer": "1111 jumps",
    "solution": "1111 jumps: total distance 4444 m; 4444 ÷ 4 = 1111."
  },
  "1999-g5-6-13": {
    "text": "A 1 m stick appears 4 cm long in a picture. A fence appears 6 cm tall. Find the real fence height.",
    "change": "Change the drawing scale and drawn fence height, but preserve the ratio method.",
    "method": "Find actual centimeters per drawn centimeter.",
    "answer": "150 cm",
    "solution": "150 cm: 100 ÷ 4 = 25 cm per drawing cm; 6 × 25 = 150."
  },
  "1999-g5-6-14": {
    "text": "Fill 7A4 × 5 = 3B70, where A and B are digits. Find ALL possible values of A + B.",
    "change": "保留文档中的乘法式，改为求所有可能值，修正文档误判为唯一解的问题。",
    "method": "从十位与进位入手，按 A 的可能值逐个检查。",
    "answer": "6, 9, 12, 15, 18",
    "solution": "A 可为 1、3、5、7、9，对应 B 为 5、6、7、8、9：714×5=3570，734×5=3670，754×5=3770，774×5=3870，794×5=3970。因此 A+B 为 6、9、12、15、18；原文档的 6 只是其中一种。"
  },
  "1999-g5-6-15": {
    "text": "Draw an L-shaped triomino made of three unit squares. What one unit-square arrangement completes a 2 × 2 square?",
    "change": "Replace the pictured irregular pieces with a simpler complementary shape, keeping the exact-fit logic.",
    "method": "Identify the missing cell inside the intended rectangular outline.",
    "answer": "One unit square in the uncovered corner; the 3-cell L plus 1 square creates a 2 × 2 square.",
    "solution": "One unit square in the uncovered corner; the 3-cell L plus 1 square creates a 2 × 2 square."
  },
  "1999-g5-6-16": {
    "text": "The dog weighs 8 cats, a cat weighs 15 mice, and a turnip weighs 5 mice. How many times heavier is the dog?",
    "change": "Only the three weight multipliers change.",
    "method": "Express both objects in mouse units, then divide.",
    "answer": "24 times",
    "solution": "24 times: (8 × 15) ÷ 5 = 24."
  },
  "1999-g5-6-17": {
    "text": "Make a 2 m × 1.2 m quilt from 10 cm squares. How many four-square interior junctions need buttons?",
    "change": "Change the quilt's dimensions only.",
    "method": "Find the number of columns and rows; subtract one from each before multiplying.",
    "answer": "209",
    "solution": "209: 20 columns and 12 rows give 19 × 11 = 209."
  },
  "1999-g5-6-18": {
    "text": "One bowl has 34 L, another has 10 L. Add the same quantity to both so the first has three times the second. How much is added?",
    "change": "Change the starting water amounts but retain the final 3:1 relationship.",
    "method": "Let both additions be x and compare 34 + x with 3(10 + x).",
    "answer": "2 L",
    "solution": "2 L: 34 + 2 = 36 and 10 + 2 = 12; 36 is three times 12."
  },
  "1999-g5-6-19": {
    "text": "Add 2 to every number in the original completed magic square. What is the new sum of the cells corresponding to A, B and C?",
    "change": "Shift every entry by the same constant, preserving the magic-square pattern.",
    "method": "The same three target cells each increase by two.",
    "answer": "31",
    "solution": "31: original A+B+C = 25; three increases of 2 give 31."
  },
  "1999-g5-6-20": {
    "text": "How many squares must be added to form the sixth concentric square?",
    "change": "Increase the target from the fifth to sixth layer; all growth rules stay the same.",
    "method": "Compare consecutive odd-sized square areas.",
    "answer": "40 squares",
    "solution": "40 squares: 11² − 9² = 121 − 81 = 40."
  },
  "1999-g5-6-21": {
    "text": "Ela arrives 7 minutes before Stan and leaves 4 minutes after him. How much longer does Ela stay?",
    "change": "Change only the arrival and departure offsets.",
    "method": "Add the early-arrival advantage and late-departure advantage.",
    "answer": "11 minutes",
    "solution": "11 minutes: 7 + 4 = 11."
  },
  "1999-g5-6-22": {
    "text": "For every 404 people, four hotdogs have no mustard. How many mustard-free hotdogs are needed for 404,404 people?",
    "change": "Change the group size and exception count, retaining the proportional relationship.",
    "method": "Find the number of equal-size groups, then multiply the exception count.",
    "answer": "4004",
    "solution": "4004: 404,404 = 404 × 1001, so 4 × 1001 = 4004."
  },
  "1999-g5-6-23": {
    "text": "Four squirrels eat 2019 nuts. The second and third together eat 1265, every squirrel eats at least 120, and the first eats the most. How many nuts does the first eat?",
    "change": "Increase the total from 1999 to 2019 and the minimum per squirrel from 100 to 120; keep the bounding method.",
    "method": "Bound the first from above using the fourth squirrel and from below using the larger of the second and third.",
    "answer": "634 nuts",
    "solution": "634 nuts: first + fourth = 2019 − 1265 = 754; fourth ≥ 120 makes first ≤ 634. One of the middle squirrels ate at least 633, so the first must have ≥ 634. Therefore exactly 634."
  },
  "1999-g5-6-24": {
    "text": "When it rains, the cat is either in the room or in the basement. If the cat is in the room, the cheese is in the refrigerator. If the cat is in the basement and the cheese is on the counter, the mouse is in the room. It is raining, and the cheese is on the counter (not in the refrigerator). Where are the cat and the mouse?",
    "change": "Replace 'table' with 'counter' but leave the conditional logic unchanged.",
    "method": "Eliminate the cat-in-room option, then apply the other if–then rule.",
    "answer": "The cat is in the basement and mouse in the room, by the same elimination.",
    "solution": "The cat is in the basement and mouse in the room, by the same elimination."
  },
  "1999-g5-6-25": {
    "text": "What is the maximum number of acute angles made by seven rays from a single point?",
    "change": "Increase the number of rays from six to seven, leaving the geometric arrangement unchanged.",
    "method": "Place all rays inside a 90° sector and count unordered pairs.",
    "answer": "21 acute angles",
    "solution": "21 acute angles: 7 × 6 ÷ 2 = 21."
  },
  "1999-g5-6-26": {
    "text": "What is the yield of 642 using the same rule?",
    "change": "Change only the input digits, keeping the digit-product rule.",
    "method": "Multiply the digits rather than adding them.",
    "answer": "48",
    "solution": "48: 6 × 4 × 2 = 48."
  },
  "1999-g5-6-27": {
    "text": "Use the net with N in the center, R above N, S below N, M left of N, O right of N, and P right of O. Which faces are opposite M, N and O?",
    "change": "Ask for opposite-face relationships rather than a multiple-choice picture; use the unchanged net.",
    "method": "Fold the net mentally or physically, then list opposite pairs.",
    "answer": "With the source net arranged R above N, S below N, M left of N, O right of N and P right of O",
    "solution": "With the source net arranged R above N, S below N, M left of N, O right of N and P right of O: opposite pairs N–P, M–O and R–S."
  },
  "1999-g5-6-28": {
    "text": "Five cups contain 1900, 1500, 1100, 950 and 650 g of coffee, cocoa or tea. Each cup holds only one beverage. Cocoa occupies one cup, coffee occupies two and tea occupies two. There is twice as much coffee as cocoa. Which amount is cocoa?",
    "change": "Double all five cup quantities, keeping the matching-sums logic.",
    "method": "Find the single cup whose amount doubled equals two other cup amounts together.",
    "answer": "1500 g",
    "solution": "1500 g: 1900 + 1100 = 3000 = 2 × 1500."
  },
  "1999-g5-6-29": {
    "text": "How many squares are there in a plain 5 × 5 grid with no extra segments?",
    "change": "Increase the grid size and remove the additional interior segments; retain square-counting by size.",
    "method": "Add counts of 1 × 1, 2 × 2, 3 × 3, 4 × 4 and 5 × 5 squares.",
    "answer": "55",
    "solution": "55: 25 + 16 + 9 + 4 + 1 = 55."
  },
  "1999-g5-6-30": {
    "text": "At 20:13:45, all displayed digits differ. What is the next time the digits are all different?",
    "change": "Keep the six-distinct-digit digital-clock task but change the starting display.",
    "method": "Test seconds in order while avoiding any digit already shown elsewhere.",
    "answer": "20",
    "solution": "20:13:46, one second later: digits 2,0,1,3,4,6 are all different."
  }
});
