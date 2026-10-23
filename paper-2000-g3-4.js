// Teaching content imported from data/2000-g3-4-guide.txt; questions and figures checked against the original PDF.
KANGAROO_DATA["2000-g3-4"] = [
  {
    "no": 1,
    "points": 3,
    "text": "A birthday candle stays lit for 15 minutes. For how long will 10 birthday candles stay lit if they are lit at the same time and no one blows them out?",
    "options": {
      "A": "1.5 minutes",
      "B": "15 minutes",
      "C": "150 minutes",
      "D": "1.5 hours",
      "E": "15 hours"
    },
    "answer": "B",
    "title": "Birthday Candles",
    "grade": "3-4",
    "tags": [
      "测量",
      "逻辑推理"
    ],
    "solution": "All 10 candles are lit simultaneously. Each candle burns for 15 minutes, so they all burn out after the same 15 minutes. Do not add their burning times.",
    "hints": [
      "Imagine lighting two candles together. Does either burn longer?",
      "Are the candles lit together or one after another?",
      "Because they all burn at the same time, the elapsed time stays 15 minutes."
    ],
    "methods": [
      "Draw ten parallel 15-minute timelines.",
      "Demonstrate with several candles on a cake."
    ],
    "tip": "Imagine lighting two candles together. Does either burn longer?"
  },
  {
    "no": 2,
    "points": 3,
    "text": "The little kangaroo was sick. Dr. Ohpain prescribed 3 pills for him to take one at a time every twenty minutes. How many minutes after taking the first pill will the little kangaroo take the last pill?",
    "options": {
      "A": "20",
      "B": "30",
      "C": "40",
      "D": "50",
      "E": "60"
    },
    "answer": "C",
    "title": "Taking Medicine",
    "grade": "3-4",
    "tags": [
      "测量",
      "应用题"
    ],
    "solution": "Take the first pill at minute 0, the second at minute 20, and the third at minute 40. There are two waiting intervals, so 2 × 20 = 40 minutes.",
    "hints": [
      "When is the first pill taken?",
      "Mark each pill on a timeline.",
      "Three pills create only two 20-minute gaps."
    ],
    "methods": [
      "Draw: pill — 20 min — pill — 20 min — pill.",
      "Use the general rule: (number of pills − 1) × interval."
    ],
    "tip": "When is the first pill taken?"
  },
  {
    "no": 3,
    "points": 3,
    "text": "For which of the following numbers is the product of the digits greater than the sum of the digits?",
    "options": {
      "A": "112",
      "B": "209",
      "C": "312",
      "D": "222",
      "E": "211"
    },
    "answer": "D",
    "title": "Product and Sum of Digits",
    "grade": "3-4",
    "tags": [
      "数与运算",
      "位值"
    ],
    "solution": "Compare each digit product with its digit sum: 112: 2 versus 4; 209: 0 versus 11; 312: 6 versus 6; 222: 8 versus 6; 211: 2 versus 4. Only 222 has product greater than sum.",
    "hints": [
      "What does it mean to multiply digits rather than add them?",
      "Calculate both totals for each choice.",
      "For 222, compare 2 × 2 × 2 and 2 + 2 + 2."
    ],
    "methods": [
      "Eliminate 209 immediately because its digit product is zero.",
      "Notice that factors of 1 do not increase a product."
    ],
    "tip": "What does it mean to multiply digits rather than add them?"
  },
  {
    "no": 4,
    "points": 3,
    "text": "Gavel lives on the second floor, and Pavel lives in the same building but has to walk up twice as many stairs as Gavel. There are no stairs to the entrance of the building. On which floor does Pavel live?",
    "options": {
      "A": "on the 2nd floor",
      "B": "on the 3rd floor",
      "C": "on the 4th floor",
      "D": "on the 5th floor",
      "E": "on the 6th floor"
    },
    "answer": "B",
    "title": "Climbing Stairs",
    "grade": "3-4",
    "tags": [
      "应用题",
      "逻辑推理"
    ],
    "solution": "Gavel climbs one flight from the first floor (the entrance level) to the second floor. Pavel climbs twice as many stairs, meaning two equal flights. Two flights reach the third floor.",
    "hints": [
      "How many flights reach the second floor?",
      "Draw and number the floors of a building.",
      "Two flights from the first floor lead to floor 3."
    ],
    "methods": [
      "Use a floor diagram and count gaps, not labels.",
      "Use a number line starting at floor 1."
    ],
    "tip": "How many flights reach the second floor?"
  },
  {
    "no": 5,
    "points": 3,
    "text": "Four candy bars and three lollipops cost $4.50. One candy bar costs 90 cents. How much does one lollipop cost?",
    "options": {
      "A": "20 cents",
      "B": "30 cents",
      "C": "40 cents",
      "D": "50 cents",
      "E": "60 cents"
    },
    "answer": "B",
    "title": "Candy Bars and Lollipops",
    "grade": "3-4",
    "tags": [
      "应用题",
      "数与运算"
    ],
    "solution": "Four candy bars cost 4 × $0.90 = $3.60. The three lollipops cost $4.50 − $3.60 = $0.90. Each lollipop costs $0.90 ÷ 3 = $0.30.",
    "hints": [
      "Which item has a known price?",
      "Find the total cost of the four candy bars first.",
      "Subtract $3.60 from $4.50 and divide by three."
    ],
    "methods": [
      "Work entirely in cents: 450 − 360 = 90.",
      "Use a bar model or substitute the answer choices."
    ],
    "tip": "Which item has a known price?"
  },
  {
    "no": 6,
    "points": 3,
    "text": "One tour bus can seat no more than 55 people. What is the smallest number of buses needed to seat 160 people?",
    "options": {
      "A": "1",
      "B": "2",
      "C": "3",
      "D": "4",
      "E": "5"
    },
    "answer": "C",
    "title": "Tour Buses",
    "grade": "3-4",
    "tags": [
      "应用题",
      "数与运算"
    ],
    "solution": "Two buses seat at most 2 × 55 = 110 people, which is insufficient. Three buses seat 3 × 55 = 165, enough for 160. The minimum is three.",
    "hints": [
      "How many people fit on one bus?",
      "Compare the capacities of two buses and three buses.",
      "Two hold 110; three hold 165."
    ],
    "methods": [
      "Divide 160 by 55 and round up because of the remainder.",
      "Repeatedly subtract groups of 55."
    ],
    "tip": "How many people fit on one bus?"
  },
  {
    "no": 7,
    "points": 3,
    "text": "A person needs 12 minutes to walk around a square plaza. How much time will it take for the same person to walk at the same pace around a plaza that has an area that is four times greater?",
    "options": {
      "A": "48 minutes",
      "B": "24 minutes",
      "C": "30 minutes",
      "D": "20 minutes",
      "E": "36 minutes"
    },
    "answer": "B",
    "title": "Walking Around a Square",
    "grade": "3-4",
    "tags": [
      "几何",
      "面积",
      "周长"
    ],
    "solution": "The larger square has four times the area, so each side is twice as long (for example, 2 × 2 versus 4 × 4). Its perimeter is therefore twice the original perimeter. At the same pace, time doubles: 12 × 2 = 24 minutes.",
    "hints": [
      "What matters for walking around a square: area or perimeter?",
      "Compare areas and perimeters of squares with sides 2 and 4.",
      "Four times the area means twice the side length and twice the time."
    ],
    "methods": [
      "Draw a 2-by-2 arrangement of four copies of the small square.",
      "Compare specific side lengths and perimeters numerically."
    ],
    "tip": "What matters for walking around a square: area or perimeter?",
    "figure": "assets/2000-g3-4/q7.png",
    "figureAlt": "Original question 7 diagram: Walking Around a Square"
  },
  {
    "no": 8,
    "points": 3,
    "text": "It is 120 km from Zakopane to the Krakow airport. Buses leave from Zakopane for the airport at 30 minutes past every hour. The buses drive with an average speed of 60 km per hour. A group of \"Kangaroos,\" members of a math camp in Zakopane, is supposed to arrive at the airport at 11:30. What is the latest time their bus had to leave Zakopane to get them to the airport on time?",
    "options": {
      "A": "7:30",
      "B": "8:30",
      "C": "9:30",
      "D": "10:30",
      "E": "11:30"
    },
    "answer": "C",
    "title": "Airport Bus Schedule",
    "grade": "3-4",
    "tags": [
      "测量",
      "行程问题"
    ],
    "solution": "Travel time = 120 km ÷ 60 km/h = 2 hours. To reach the airport by 11:30, the bus must leave by 9:30. Buses depart at half past each hour, so 9:30 is available and latest.",
    "hints": [
      "How do distance and speed determine travel time?",
      "Divide 120 by 60 to find the journey duration.",
      "Count back two hours from 11:30."
    ],
    "methods": [
      "Mark departures and arrival on a timeline.",
      "Test each multiple-choice departure by adding two hours."
    ],
    "tip": "How do distance and speed determine travel time?"
  },
  {
    "no": 9,
    "points": 4,
    "text": "During the time that Kathy eats two bowls of ice cream, Betty eats three bowls of ice cream. The two girls ate 10 bowls of ice cream in one hour. How many bowls of ice cream did Kathy eat?",
    "options": {
      "A": "3",
      "B": "4",
      "C": "5",
      "D": "6",
      "E": "7"
    },
    "answer": "B",
    "title": "Eating Ice Cream",
    "grade": "3-4",
    "tags": [
      "比例",
      "应用题"
    ],
    "solution": "Kathy and Betty's rates are in the ratio 2:3. Each joint group contains five bowls. Ten bowls = two groups, so Kathy eats 2 × 2 = 4 bowls.",
    "hints": [
      "What is the ratio between the two girls' bowls?",
      "Group the total into sets of 2 + 3.",
      "Ten bowls make two groups of five; Kathy takes two per group."
    ],
    "methods": [
      "Draw K K B B B twice.",
      "Kathy's fraction of the total is 2/5."
    ],
    "tip": "What is the ratio between the two girls' bowls?"
  },
  {
    "no": 10,
    "points": 4,
    "text": "Which four digits need to be removed from the number 4921508 to get the smallest possible three-digit number?",
    "options": {
      "A": "4, 9, 2, 1",
      "B": "4, 2, 1, 0",
      "C": "1, 5, 0, 8",
      "D": "4, 9, 2, 5",
      "E": "4, 9, 5, 8"
    },
    "answer": "D",
    "title": "Removing Digits",
    "grade": "3-4",
    "tags": [
      "位值",
      "最值"
    ],
    "solution": "Keep the remaining digits in original order. From 4921508, the smallest possible first (hundreds) digit is 1, so discard 4, 9, 2. Of the four remaining digits 1, 5, 0, 8, remove 5 to keep 1, 0, 8: the smallest possible three-digit number is 108.",
    "hints": [
      "Which place value most strongly affects a three-digit number?",
      "Find the smallest nonzero first digit that leaves two later digits.",
      "Keep 1; from 1508 remove the 5."
    ],
    "methods": [
      "Check the five options and compare the three-digit results.",
      "Use a greedy place-value strategy: choose the smallest possible hundreds, then tens digit."
    ],
    "tip": "Which place value most strongly affects a three-digit number?"
  },
  {
    "no": 11,
    "points": 4,
    "text": "In each of two baskets there were 12 apples. Aria took a certain number of apples from the first basket. From the second basket, Zoe took a number of apples equal to the number of apples remaining in the first basket. How many apples were left in both baskets altogether?",
    "options": {
      "A": "6",
      "B": "12",
      "C": "18",
      "D": "20",
      "E": "24"
    },
    "answer": "B",
    "title": "Apples in Two Baskets",
    "grade": "3-4",
    "tags": [
      "应用题",
      "代数"
    ],
    "solution": "Suppose Aria takes 5 from her basket of 12, leaving 7. Zoe then takes 7 from the other basket, leaving 5. Total left = 7 + 5 = 12. In general, if Aria takes x, the baskets end with (12 − x) and x, whose sum is always 12.",
    "hints": [
      "Is Aria's exact number of apples given?",
      "Try a specific number such as five.",
      "The first basket keeps 12 − x while the second keeps x."
    ],
    "methods": [
      "Demonstrate with counters in two baskets.",
      "Use complementary pairs that always sum to 12."
    ],
    "tip": "Is Aria's exact number of apples given?"
  },
  {
    "no": 12,
    "points": 4,
    "text": "Students walked to the museum in rows of three. Adam, Bart, and Carl noticed that they were in the seventh row from the front and in the fifth row from the back. How many students went to the museum?",
    "options": {
      "A": "12",
      "B": "24",
      "C": "30",
      "D": "33",
      "E": "36"
    },
    "answer": "D",
    "title": "Students Walking in Rows",
    "grade": "3-4",
    "tags": [
      "计数",
      "应用题"
    ],
    "solution": "The boys' row is 7th from the front and 5th from the back. Total rows = 7 + 5 − 1 = 11 because their row is counted twice. Each row contains three students, so total = 11 × 3 = 33.",
    "hints": [
      "What happens if you count the same row from both ends?",
      "Draw the rows before and behind the boys.",
      "Find 7 + 5 − 1 rows, then multiply by three."
    ],
    "methods": [
      "Count six rows ahead + their row + four rows behind.",
      "Use the general position formula front + back − 1."
    ],
    "tip": "What happens if you count the same row from both ends?"
  },
  {
    "no": 13,
    "points": 4,
    "text": "Fourteen cats took part in a cat play. Some of them played moms and some of them played their kids. Every mom in this play had at least two kids. What is the greatest possible number of cat-moms in the play?",
    "options": {
      "A": "3",
      "B": "4",
      "C": "5",
      "D": "6",
      "E": "7"
    },
    "answer": "B",
    "title": "Cat Moms and Kittens",
    "grade": "3-4",
    "tags": [
      "计数",
      "最值"
    ],
    "solution": "Each mom must have at least two kittens, so each mom requires at least three cats total. With 14 cats, four moms need 8 kittens, leaving 2 extra cats to play kittens. Five moms would need at least 10 kittens, totaling 15 cats, which is impossible.",
    "hints": [
      "What is the fewest kittens for each mom?",
      "Make groups of one mom and two kittens.",
      "Five such groups would need 15 cats, more than available."
    ],
    "methods": [
      "Draw and count groups of three.",
      "Let m be moms; 3m ≤ 14."
    ],
    "tip": "What is the fewest kittens for each mom?"
  },
  {
    "no": 14,
    "points": 4,
    "text": "The first and the second scales are balanced (see the picture). How many plums do you need to place on the left side of the third scale to keep it in balance?",
    "options": {
      "A": "2",
      "B": "3",
      "C": "4",
      "D": "5",
      "E": "6"
    },
    "answer": "C",
    "title": "Balanced Scales",
    "grade": "3-4",
    "tags": [
      "逻辑推理",
      "天平"
    ],
    "solution": "From the picture: 10 plums = 3 apples + 1 pear; 6 plums = 1 apple + 1 pear. Subtract: 4 plums = 2 apples, so one apple = 2 plums. Then 6 plums = 2 plums + 1 pear, so a pear = 4 plums.",
    "hints": [
      "What does a balanced scale tell you?",
      "Compare the top two scales and cancel matching fruits.",
      "Four plums equal two apples; replace the apple in the second equation."
    ],
    "methods": [
      "Cross off identical fruit groupings visually.",
      "Use substitution or simple equations."
    ],
    "tip": "What does a balanced scale tell you?",
    "figure": "assets/2000-g3-4/q14.png",
    "figureAlt": "Original question 14 diagram: Balanced Scales"
  },
  {
    "no": 15,
    "points": 4,
    "text": "Each of the five neighbors owns a rectangular plot of land with the same area. The parts of the land with flowers growing on them are fenced in (solid line in the pictures). Who has the longest fence?",
    "options": {
      "A": "Mr. Adam",
      "B": "Mr. John",
      "C": "Mr. Jack",
      "D": "Mr. Peter",
      "E": "Mr. Mark"
    },
    "answer": "C",
    "title": "The Longest Fence",
    "grade": "3-4",
    "tags": [
      "几何",
      "周长"
    ],
    "solution": "Compare solid fence segments in the five figures shown here, not the garden areas. In options A, B, D, and E, horizontal/vertical segments can be paired or straightened to the same total as the rectangular boundary. Mr. Jack's I-shaped fenced region includes extra internal turns and has the longest solid fence.",
    "hints": [
      "Does equal area imply equal fence length?",
      "Compare horizontal and vertical segments separately.",
      "Look for extra fence length that cannot be matched to the rectangle's boundary."
    ],
    "methods": [
      "Mentally straighten each bent segment.",
      "Overlay an imaginary grid and count fence units."
    ],
    "tip": "Does equal area imply equal fence length?",
    "figure": "assets/2000-g3-4/q15.png",
    "figureAlt": "Original question 15 diagram: The Longest Fence"
  },
  {
    "no": 16,
    "points": 4,
    "text": "For his birthday Patrick got a box with some identical cube blocks. He used all of them to make two projects (see the picture). All the blocks together weigh 900 grams. The project on the left weighs 300 grams and the picture shows all the blocks it is made of. How many blocks in the figure on the right are not shown?",
    "options": {
      "A": "4",
      "B": "5",
      "C": "6",
      "D": "7",
      "E": "8"
    },
    "answer": "C",
    "title": "Building with Cubes",
    "grade": "3-4",
    "tags": [
      "空间想象",
      "计数"
    ],
    "solution": "The first project has 10 cubes and weighs 300 g, so each cube weighs 30 g. The second weighs 900 − 300 = 600 g and therefore contains 600 ÷ 30 = 20 cubes. Its picture shows 14 visible cubes, leaving 20 − 14 = 6 hidden.",
    "hints": [
      "Are all cube weights equal?",
      "Use the first structure to determine the weight per cube.",
      "Second structure has 20 cubes in all; 14 are visible."
    ],
    "methods": [
      "Use the 2:1 weight ratio between second and first projects.",
      "Count the figure in layers or rows."
    ],
    "tip": "Are all cube weights equal?",
    "figure": "assets/2000-g3-4/q16.png",
    "figureAlt": "Original question 16 diagram: Building with Cubes"
  },
  {
    "no": 17,
    "points": 5,
    "text": "Altogether, 6 hens eat 8 cups of grain in 3 days. How many cups of grain will 3 hens eat in 9 days?",
    "options": {
      "A": "10",
      "B": "12",
      "C": "14",
      "D": "16",
      "E": "9"
    },
    "answer": "B",
    "title": "Feeding Hens",
    "grade": "3-4",
    "tags": [
      "比例",
      "应用题"
    ],
    "solution": "Three hens are half of six, so in three days they consume half of 8 cups = 4 cups. Nine days is three times as long, so those three hens need 4 × 3 = 12 cups.",
    "hints": [
      "Do fewer hens eat more or less over the same period?",
      "First adjust the number of hens, then the days.",
      "Three hens consume four cups in three days; triple for nine days."
    ],
    "methods": [
      "Find cups per hen per day.",
      "Compare 18 hen-days with 27 hen-days."
    ],
    "tip": "Do fewer hens eat more or less over the same period?"
  },
  {
    "no": 18,
    "points": 5,
    "text": "Adrianna's birthday present is placed in a box with dimensions of 10 cm x 10 cm x 30 cm and wrapped with a ribbon as shown in the picture. What is the length of the ribbon?",
    "options": {
      "A": "200 cm",
      "B": "240 cm",
      "C": "260 cm",
      "D": "300 cm",
      "E": "350 cm"
    },
    "answer": "B",
    "title": "Ribbon Around a Present",
    "grade": "3-4",
    "tags": [
      "几何",
      "周长",
      "空间想象"
    ],
    "solution": "The picture has two short loops around 10 cm × 10 cm cross-sections and two long loops around 30 cm × 10 cm cross-sections. Short loops: 2 × [2(10 + 10)] = 80 cm. Long loops: 2 × [2(30 + 10)] = 160 cm. Total = 240 cm, excluding knots.",
    "hints": [
      "Can you trace each ribbon loop?",
      "Imagine removing a loop and flattening it into a rectangle.",
      "Add two 40 cm loops and two 80 cm loops."
    ],
    "methods": [
      "Unfold the paths into flat rectangles.",
      "Count ribbon lengths running along each box dimension."
    ],
    "tip": "Can you trace each ribbon loop?",
    "figure": "assets/2000-g3-4/q18.png",
    "figureAlt": "Original question 18 diagram: Ribbon Around a Present"
  },
  {
    "no": 19,
    "points": 5,
    "text": "Three kangaroos were born consecutively every 4 years. Right now, the oldest kangaroo is 5 times as old as the youngest one. How old is the youngest kangaroo?",
    "options": {
      "A": "10",
      "B": "8",
      "C": "6",
      "D": "4",
      "E": "2"
    },
    "answer": "E",
    "title": "Kangaroo Ages",
    "grade": "3-4",
    "tags": [
      "年龄问题",
      "应用题"
    ],
    "solution": "Three kangaroos are born four years apart, so the oldest is 8 years older than the youngest. Their ages have ratio 5:1, a difference of four equal parts. Four parts = 8 years, so one part = 2 years. Ages are 2, 6, and 10.",
    "hints": [
      "How much older is the oldest than the youngest?",
      "Draw one bar for youngest, five for oldest.",
      "The eight-year gap equals four copies of the youngest's age."
    ],
    "methods": [
      "Test possible youngest ages against the fivefold condition.",
      "Write 5x − x = 8."
    ],
    "tip": "How much older is the oldest than the youngest?"
  },
  {
    "no": 20,
    "points": 5,
    "text": "When Mary was leaving home between 8 and 9 o'clock in the morning, she noticed that the hour hand and the minute hand on her watch were overlapping. When she returned home between 2 and 3 o'clock in the afternoon, the hour hand and the minute hand formed a straight line (see the picture). How long was Mary away from home?",
    "options": {
      "A": "5 hours",
      "B": "5 and a half hours",
      "C": "6 hours",
      "D": "6 and a half hours",
      "E": "7 hours"
    },
    "answer": "C",
    "title": "Clock Hands",
    "grade": "3-4",
    "tags": [
      "测量",
      "角度",
      "周期"
    ],
    "solution": "At departure, the two hands overlap. In six hours, the minute hand completes six full rotations while the hour hand rotates half a turn. Thus the hands, which started together, end opposite each other. The overlap between 8 and 9 therefore leads to an opposite-hands position between 2 and 3, six hours later.",
    "hints": [
      "How do the hands look at departure versus return?",
      "What does a six-hour advance do to each hand?",
      "The minute hand returns to the same direction; the hour hand moves 180 degrees."
    ],
    "methods": [
      "Draw both clocks and rotate forward six hours.",
      "Use relative angular speed (360 − 30 = 330 degrees per hour)."
    ],
    "tip": "How do the hands look at departure versus return?",
    "figure": "assets/2000-g3-4/q20.png",
    "figureAlt": "Original question 20 diagram: Clock Hands"
  },
  {
    "no": 21,
    "points": 5,
    "text": "Find the number which has the following property: If we add together this number and half of this number, we will get a number which is 3 less than twice the original number.",
    "options": {
      "A": "2",
      "B": "4",
      "C": "6",
      "D": "8",
      "E": "10"
    },
    "answer": "C",
    "title": "Finding a Number",
    "grade": "3-4",
    "tags": [
      "数与运算",
      "方程"
    ],
    "solution": "A number plus half itself makes 1.5 copies. Twice the number makes 2 copies. The gap between 2 and 1.5 copies is half the number, and the problem says that gap is 3. Thus half the number is 3 and the number is 6. Check: 6 + 3 = 12 − 3 = 9.",
    "hints": [
      "What does a number plus half of itself look like?",
      "Compare 1.5 copies with 2 copies.",
      "The missing half-copy equals three."
    ],
    "methods": [
      "Draw a two-bar model.",
      "Write x + x/2 = 2x − 3 or test answer choices."
    ],
    "tip": "What does a number plus half of itself look like?"
  },
  {
    "no": 22,
    "points": 5,
    "text": "Three identical dice are placed one on top of the other (see the picture). The sides which touch each other have the same numbers of dots. What is the number of dots on the bottom of the lowest die?",
    "options": {
      "A": "1",
      "B": "2",
      "C": "3",
      "D": "5",
      "E": "6"
    },
    "answer": "A",
    "title": "Stacked Dice",
    "grade": "3-4",
    "tags": [
      "空间想象",
      "逻辑推理"
    ],
    "solution": "The top die shows 6, 4 and 5; the middle die shows 2 and 3. The two matching contact faces cannot have any of these five values, so both have 1 dot. Thus the top die has 6 opposite 1. The dice are identical, so the middle die has 6 on its bottom and the lowest die has 6 on top. The bottom of the lowest die therefore has 1 dot.",
    "hints": [
      "Which numbers are visible on the top and middle dice?",
      "The matching faces between those dice cannot repeat any number already visible on either die.",
      "Only 1 remains for the first contact pair. This shows that 1 and 6 are opposite; follow that pair down the stack."
    ],
    "methods": [
      "Stack actual dice with the same orientation as the picture.",
      "Sketch a face-by-face table or construct paper cubes."
    ],
    "tip": "Which numbers are visible on the top and middle dice?",
    "figure": "assets/2000-g3-4/q22.png",
    "figureAlt": "Original question 22 diagram: Stacked Dice"
  },
  {
    "no": 23,
    "points": 5,
    "text": "Pete wanted to draw the picture of a kangaroo shown, without lifting his pencil from the paper and without going over the same line twice. At what point should he start (see the picture)?",
    "options": {
      "A": "A",
      "B": "B or C",
      "C": "D or E",
      "D": "K",
      "E": "There is no such point; this is impossible."
    },
    "answer": "E",
    "title": "One-Stroke Kangaroo",
    "grade": "3-4",
    "tags": [
      "图论",
      "路径"
    ],
    "solution": "A connected drawing can be traced in one stroke without repeating an edge only if it has zero or two odd-degree vertices. Here A is a degree-1 endpoint, while K and C are degree-3 junctions. These already give more than two odd-degree vertices, so no starting point works. At an internal vertex, each arrival must be paired with a departure; only the two ends of a stroke can have an unpaired edge.",
    "hints": [
      "What happens when three lines meet at a junction?",
      "Count lines meeting at each point, especially odd counts.",
      "A one-stroke path may have at most two odd-degree endpoints; find four here."
    ],
    "methods": [
      "Try tracing without repeating edges.",
      "Reduce the kangaroo to a simple network of dots and lines."
    ],
    "tip": "What happens when three lines meet at a junction?",
    "figure": "assets/2000-g3-4/q23.png",
    "figureAlt": "Original question 23 diagram: One-Stroke Kangaroo"
  },
  {
    "no": 24,
    "points": 5,
    "text": "A magical ball falling to the ground bounces twice as high as the height from which it was dropped. From what height was the ball dropped if it reached the height of 320 cm after the second bounce?",
    "options": {
      "A": "80 cm",
      "B": "160 cm",
      "C": "320 cm",
      "D": "640 cm",
      "E": "1280 cm"
    },
    "answer": "A",
    "title": "Magical Bouncing Ball",
    "grade": "3-4",
    "tags": [
      "逆向思维",
      "数与运算"
    ],
    "solution": "Each bounce doubles the previous height. Since the ball reaches 320 cm after the second bounce, work backward: after the first bounce it reached 320 ÷ 2 = 160 cm; the original drop was 160 ÷ 2 = 80 cm. Check: 80 → 160 → 320.",
    "hints": [
      "Does each bounce double or halve the height?",
      "Which operation reverses doubling?",
      "Divide 320 by two twice."
    ],
    "methods": [
      "Test the answer options forward.",
      "View two doublings as multiplication by four."
    ],
    "tip": "Does each bounce double or halve the height?"
  }
];

Object.assign(KANGAROO_EXTENSIONS, {
  "2000-g3-4-1": {
    "text": "A candle lasts 25 minutes. How long do 20 identical candles last if lit simultaneously?",
    "answer": "25 minutes.",
    "change": "Change the number of candles and each candle’s burning time.",
    "method": "Compare parallel burning times; do not add them.",
    "solution": "All 20 candles burn together for 25 minutes, so the elapsed time is 25 minutes."
  },
  "2000-g3-4-2": {
    "text": "A patient takes 6 pills, one every 15 minutes. How long from the first to the last pill?",
    "answer": "75 minutes.",
    "change": "Increase the number of pills and shorten the interval.",
    "method": "Count the gaps between the first and last pill.",
    "solution": "Six pills create five waiting intervals: (6 − 1) × 15 = 75 minutes."
  },
  "2000-g3-4-3": {
    "text": "Which number has digit product greater than digit sum: 123, 224, 311, 402, or 211?",
    "answer": "224 (product 16, sum 8).",
    "change": "Change the five numbers while keeping the digit-product comparison.",
    "method": "For each candidate, compare the product and sum of its digits.",
    "solution": "The product/sum pairs are 6/6, 16/8, 3/5, 0/6 and 2/4. Only 224 has a greater product."
  },
  "2000-g3-4-4": {
    "text": "Emma lives on floor 4. Emma and Jack both start at the entrance on floor 1, and Jack climbs twice as many stairs as Emma. All flights are equal. Which floor does Jack reach?",
    "answer": "7th floor.",
    "change": "Change the starting floor reached by the first person.",
    "method": "Count flights starting from floor 1, then add one to recover the floor label.",
    "solution": "Emma climbs 4 − 1 = 3 flights. Jack climbs 2 × 3 = 6 flights, reaching floor 1 + 6 = 7."
  },
  "2000-g3-4-5": {
    "text": "Five chocolate bars and four lollipops cost $8.20. Each bar costs $1.40. Find one lollipop's price.",
    "answer": "$0.30.",
    "change": "Change the quantities, total cost and known unit price.",
    "method": "Subtract the known total cost before dividing by the number of lollipops.",
    "solution": "The bars cost 5 × $1.40 = $7.00. Each lollipop costs ($8.20 − $7.00) ÷ 4 = $0.30."
  },
  "2000-g3-4-6": {
    "text": "How many 48-seat buses are needed for 238 students?",
    "answer": "5 buses.",
    "change": "Change the bus capacity and the number of passengers.",
    "method": "Find the smallest whole number of buses whose capacity covers everyone.",
    "solution": "Four buses hold 192 students, which is too few. Five hold 240, so five buses are needed."
  },
  "2000-g3-4-7": {
    "text": "A square takes 8 minutes to walk around. How long for a square with nine times its area at the same pace?",
    "answer": "24 minutes.",
    "change": "Change the area factor from four to nine.",
    "method": "Find the side-length factor before scaling the perimeter.",
    "solution": "Nine times the area gives three times the side length and perimeter: 8 × 3 = 24 minutes."
  },
  "2000-g3-4-8": {
    "text": "A bus travels 180 km at 60 km/h; departures are at :15 each hour. What is the latest departure to arrive by 14:00?",
    "answer": "10:15.",
    "change": "Change the distance, departure minutes and arrival deadline.",
    "method": "Subtract the journey time, then choose the latest scheduled departure.",
    "solution": "The journey takes 180 ÷ 60 = 3 hours. A departure must be no later than 11:00; the latest available is 10:15, arriving at 13:15."
  },
  "2000-g3-4-9": {
    "text": "Tom and Ben eat sandwiches in the ratio 3:5. Together they eat 24. How many does Tom eat?",
    "answer": "9 sandwiches.",
    "change": "Change the ratio and the total number of items.",
    "method": "Divide the total into ratio-sized groups.",
    "solution": "There are 3 + 5 = 8 parts. Each part is 24 ÷ 8 = 3 sandwiches; Tom eats 3 × 3 = 9."
  },
  "2000-g3-4-10": {
    "text": "Remove four digits from 5832047 to make the smallest possible three-digit number while keeping the order.",
    "answer": "Remove 5, 8, 3, and 7, leaving 204.",
    "change": "Change the seven-digit number but keep the digit order.",
    "method": "Choose the smallest possible hundreds digit, then tens and units, without reordering.",
    "solution": "The smallest feasible nonzero hundreds digit is 2. From the later digits 0, 4, 7, keep 0 and 4. The result is 204."
  },
  "2000-g3-4-11": {
    "text": "Two baskets each contain 20 oranges. Emma removes some from the first; Jack removes from the second as many as remain in the first. How many remain in total?",
    "answer": "20 oranges.",
    "change": "Change the fruit and the number in each basket.",
    "method": "Write the remaining quantities as complementary parts of one original basket.",
    "solution": "If Emma removes x oranges, the first basket has 20 − x and the second has x. Total: 20."
  },
  "2000-g3-4-12": {
    "text": "Students walk in rows of four. Lucy is in the 9th row from the front and 6th from the back. How many students?",
    "answer": "56 students.",
    "change": "Change the row size and positions counted from each end.",
    "method": "Add the two row positions, subtract one, then multiply by the row size.",
    "solution": "There are 9 + 6 − 1 = 14 rows, so 14 × 4 = 56 students."
  },
  "2000-g3-4-13": {
    "text": "Twenty-three cats act as moms or kittens; every mom has at least three kittens. What is the greatest number of moms?",
    "answer": "5 moms.",
    "change": "Change the total and require at least three kittens per mom.",
    "method": "Group one mom with the minimum required number of kittens.",
    "solution": "Each mom needs at least three kittens, making a group of four. Five moms and eighteen kittens work; six moms would need at least 24 cats."
  },
  "2000-g3-4-14": {
    "text": "One scale shows 12 plums = 3 apples + 1 pear; another shows 8 plums = 1 apple + 1 pear. How many plums equal one pear?",
    "answer": "6 plums.",
    "change": "Change the two balanced-scale equations.",
    "method": "Subtract the balance equations to find an apple, then substitute.",
    "solution": "Subtract: 12 − 8 = 4 plums equal 3 − 1 = 2 apples. An apple equals 2 plums, so a pear equals 8 − 2 = 6 plums."
  },
  "2000-g3-4-15": {
    "text": "A rectangle is 8 m by 5 m. A second boundary replaces a 2 m straight section with a 3 m deep rectangular indentation. How much longer is the second fence?",
    "answer": "6 m longer.",
    "change": "Replace the pictured boundaries with a measured rectangular indentation.",
    "method": "Compare the removed straight segment with the three new sides of the indentation.",
    "solution": "The old segment is 2 m. The detour is 3 + 2 + 3 = 8 m, so the fence is 8 − 2 = 6 m longer."
  },
  "2000-g3-4-16": {
    "text": "Two structures together weigh 1,200 g. An 8-cube structure weighs 320 g; the other shows 15 visible cubes. How many cubes are hidden in the second?",
    "answer": "7 cubes.",
    "change": "Change the total weight, known structure and visible cube count.",
    "method": "Find the unit cube weight, then subtract visible cubes from the second structure’s total.",
    "solution": "Each cube weighs 320 ÷ 8 = 40 g. The second structure weighs 1200 − 320 = 880 g and has 880 ÷ 40 = 22 cubes. Hidden: 22 − 15 = 7."
  },
  "2000-g3-4-17": {
    "text": "Eight rabbits eat 12 kg in four days. How much do six rabbits eat in eight days at the same rate?",
    "answer": "18 kg.",
    "change": "Change the animals, food amount and feeding period.",
    "method": "Scale the food amount by the animal ratio and the time ratio.",
    "solution": "Scale by both changes: 12 × (6 ÷ 8) × (8 ÷ 4) = 18 kg."
  },
  "2000-g3-4-18": {
    "text": "A 20 cm × 10 cm × 10 cm gift is wrapped with two ribbon loops around 10 cm × 10 cm cross-sections and two loops around 20 cm × 10 cm cross-sections. How much ribbon is needed, ignoring knots?",
    "answer": "200 cm.",
    "change": "Shorten the box while retaining two short and two long ribbon loops.",
    "method": "Add the perimeters of two 10 × 10 loops and two 20 × 10 loops.",
    "solution": "Two short loops need 2 × 2(10 + 10) = 80 cm. Two long loops need 2 × 2(20 + 10) = 120 cm. Total: 200 cm."
  },
  "2000-g3-4-19": {
    "text": "Three brothers were born four years apart. The oldest is three times as old as the youngest. Find the youngest age.",
    "answer": "4 years.",
    "change": "Change the oldest-to-youngest age ratio from five to three.",
    "method": "Compare the fixed eight-year age gap with the difference in ratio parts.",
    "solution": "The oldest is 8 years older. The ratio 3:1 gives a difference of two parts; each part is 8 ÷ 2 = 4 years."
  },
  "2000-g3-4-20": {
    "text": "At some time between 9 and 10, the clock hands overlap. What angle do they form six hours later?",
    "answer": "180 degrees.",
    "change": "Change the starting hour while keeping a six-hour advance.",
    "method": "Track how far each hand moves in six hours.",
    "solution": "The minute hand completes six turns and returns to its starting direction. The hour hand makes half a turn, so the angle is 180°."
  },
  "2000-g3-4-21": {
    "text": "A number plus one third of itself is eight less than twice the number. Find it.",
    "answer": "12.",
    "change": "Change one half to one third and the difference from three to eight.",
    "method": "Find the difference between two copies and one and one-third copies.",
    "solution": "Two copies minus one and one-third copies leave two thirds of the number. Thus (2/3)x = 8 and x = 12; check 12 + 4 = 24 − 8."
  },
  "2000-g3-4-22": {
    "text": "Three identical standard dice (opposite faces sum to 7) are stacked with matching touching faces. If the top of the highest die shows 4, what appears on the bottom of the lowest die?",
    "answer": "3 dots.",
    "change": "Use standard dice and specify the top face of the stack.",
    "method": "Follow matching contact faces and use opposite faces summing to seven.",
    "solution": "From top to bottom the face pairs are 4/3, 3/4, 4/3, since touching faces match. The bottom face has 3 dots."
  },
  "2000-g3-4-23": {
    "text": "Can a rectangle with one diagonal be drawn in a single stroke without tracing an edge twice? Where should you start?",
    "answer": "Yes. Start at either endpoint of the diagonal.",
    "change": "Replace the kangaroo network with a rectangle and one diagonal.",
    "method": "Count odd-degree vertices and choose one as the starting point.",
    "solution": "The two diagonal endpoints each have degree 3; the other corners have degree 2. Exactly two odd vertices allow a one-stroke path starting at either diagonal endpoint."
  },
  "2000-g3-4-24": {
    "text": "A magical ball bounces three times as high after each bounce. Its third bounce reaches 540 cm. What was the original drop height?",
    "answer": "20 cm.",
    "change": "Change doubling to tripling and use three bounces.",
    "method": "Undo each tripling by dividing by three.",
    "solution": "Work backward through three bounces: 540 ÷ 3 ÷ 3 ÷ 3 = 20 cm. Check: 20 → 60 → 180 → 540."
  }
});
