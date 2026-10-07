const KANGAROO_DATA = {
  "1999": [
    {
      "no": 1,
      "points": 3,
      "text": "Beata has two dolls, three apples, one chocolate bar, two oranges, five peaches, and one bike. How many pieces of fruit does Beata have?",
      "options": {
        "A": "3",
        "B": "5",
        "C": "10",
        "D": "18",
        "E": "21"
      },
      "answer": "C",
      "category": "Counting and classification",
      "solution": "List only the fruit items:\n- apples: 3\n- oranges: 2\n- peaches: 5\nDolls, the chocolate bar, and the bike are NOT fruit, so ignore them.\nTotal fruit = 3 + 2 + 5 = 10.",
      "methods": [
        "Add only the fruit counts and skip non-fruit objects"
      ],
      "diagram": "A simple grouping picture separating fruit (apples, oranges, peaches) from non-fruit (dolls, chocolate, bike).",
      "tip": "Read carefully: only count fruit, not every object mentioned."
    },
    {
      "no": 2,
      "points": 3,
      "text": "What number is in the part that is common to four circles? (A central region where all four overlapping circles overlap contains a number.)",
      "options": {
        "A": "5",
        "B": "9",
        "C": "7",
        "D": "4",
        "E": "6"
      },
      "answer": "E",
      "category": "Sets and Venn diagrams",
      "solution": "The region common to all four circles is the single central overlap where every circle meets.\nLook at the number placed in that central shared region of the diagram.\nThat number is 6, so the value in the part common to all four circles is 6.",
      "methods": [
        "Identify the central intersection of all four circles and read its label"
      ],
      "diagram": "Four overlapping circles; the central region shared by all four shows the number 6.",
      "tip": "The 'common to four circles' region is only the very center where all four overlap, not the other overlaps."
    },
    {
      "no": 3,
      "points": 3,
      "text": "In how many places do we need to break a wooden stick in order to get 5 pieces?",
      "options": {
        "A": "3",
        "B": "4",
        "C": "5",
        "D": "6",
        "E": "It depends on how long the stick is."
      },
      "answer": "B",
      "category": "Logical reasoning",
      "solution": "Each break increases the number of pieces by 1.\nStart with 1 piece (the whole stick).\nAfter 1 break -> 2 pieces.\nAfter 2 breaks -> 3 pieces.\nAfter 3 breaks -> 4 pieces.\nAfter 4 breaks -> 5 pieces.\nSo we need 4 breaks to make 5 pieces. This does not depend on the stick's length.",
      "methods": [
        "Count that each break adds exactly one piece, so pieces = breaks + 1"
      ],
      "diagram": "A stick drawn with 4 cut marks producing 5 equal segments.",
      "tip": "Common mistake: thinking 5 pieces need 5 breaks. Remember pieces = breaks + 1."
    },
    {
      "no": 4,
      "points": 3,
      "text": "Karl is now 10 years old, and Alice is 3 years old. How many years from now will Karl be twice as old as Alice?",
      "options": {
        "A": "5",
        "B": "10",
        "C": "4",
        "D": "1",
        "E": "3"
      },
      "answer": "C",
      "category": "Age problems / algebra",
      "solution": "Let x = number of years from now.\nKarl's age then: 10 + x\nAlice's age then: 3 + x\nWe want Karl to be twice Alice's age:\n10 + x = 2(3 + x)\n10 + x = 6 + 2x\nSubtract x from both sides: 10 = 6 + x\nSubtract 6: x = 4\nCheck: in 4 years Karl is 14, Alice is 7, and 14 = 2 x 7. Correct.",
      "methods": [
        "Set up equation 10+x = 2(3+x) and solve",
        "Test the answer choices by checking each"
      ],
      "diagram": "A small table: years from now | Karl | Alice | twice Alice?",
      "tip": "Set up an equation with x years; both ages grow by the same amount."
    },
    {
      "no": 5,
      "points": 3,
      "text": "Anna and her sister Barbara go to the same school, but take two different ways (two grid paths between the same two points). Whose way is shorter?",
      "options": {
        "A": "Anna's way",
        "B": "Barbara's way",
        "C": "It depends",
        "D": "Both ways have the same length.",
        "E": "Impossible to determine."
      },
      "answer": "D",
      "category": "Paths on a grid",
      "solution": "On a square grid, moving along the grid lines, the length of a path is the number of unit steps.\nBoth paths go between the same start and end points using only horizontal and vertical grid moves.\nCount the steps: each path must move the same number of units right/left and up/down to connect the same two points, so both paths have the same total length.",
      "methods": [
        "Count unit grid steps on each path and compare"
      ],
      "diagram": "Two different grid routes between the same two corners, each made of the same number of unit segments.",
      "tip": "On a grid, any monotone path between two points has the same length if it only uses right/up (or equivalent) moves."
    },
    {
      "no": 6,
      "points": 3,
      "text": "Our class has 30 students. The number of boys is four times the number of girls. How many girls are there?",
      "options": {
        "A": "24",
        "B": "16",
        "C": "12",
        "D": "8",
        "E": "6"
      },
      "answer": "E",
      "category": "Ratio and basic equations",
      "solution": "Let g = number of girls.\nThen boys = 4g.\nTotal students: g + 4g = 30\n5g = 30\ng = 6\nSo there are 6 girls (and 24 boys).\nCheck: 6 + 24 = 30, and 24 is four times 6.",
      "methods": [
        "Use g + 4g = 30",
        "Think of 5 equal parts of 30, one part is girls"
      ],
      "diagram": "A bar split into 5 equal parts: 1 part girls, 4 parts boys, total 30.",
      "tip": "Set the smaller group as 1 part; the total is 5 parts."
    },
    {
      "no": 7,
      "points": 4,
      "text": "How much does the orange weigh? (Balance puzzle: an apple plus an orange balances 255 g; an apple plus two oranges balances 410 g.)",
      "options": {
        "A": "200 g",
        "B": "205 g",
        "C": "155 g",
        "D": "5 g",
        "E": "cannot be determined."
      },
      "answer": "C",
      "category": "Balance / systems of equations",
      "solution": "Let A = weight of apple, O = weight of orange.\nFrom the first balance: A + O = 255\nFrom the second balance: A + 2O = 410\nSubtract the first equation from the second:\n(A + 2O) - (A + O) = 410 - 255\nO = 155\nSo the orange weighs 155 g.",
      "methods": [
        "Subtract the two balance equations to remove the apple",
        "Compare both pans: adding one orange adds 155 g"
      ],
      "diagram": "Two balance scales: left pan apple+orange = 255g; left pan apple+2 oranges = 410g.",
      "tip": "Compare the two balances: the extra orange accounts for the extra weight."
    },
    {
      "no": 8,
      "points": 4,
      "text": "The cat says, 'The length of my tail is 12 cm and half the length of my tail.' How long is the cat's tail?",
      "options": {
        "A": "18 cm",
        "B": "24 cm",
        "C": "12 cm",
        "D": "9 cm",
        "E": "6 cm"
      },
      "answer": "B",
      "category": "Algebra / fractions",
      "solution": "Let L = length of the tail.\nThe cat says: L = 12 + (1/2)L\nSubtract (1/2)L from both sides: (1/2)L = 12\nMultiply by 2: L = 24\nSo the tail is 24 cm long.\nCheck: half of 24 is 12, and 12 + 12 = 24.",
      "methods": [
        "Solve L = 12 + L/2",
        "Notice '12 and half the tail' means 12 equals the other half"
      ],
      "diagram": "A tail split into two halves: one half labeled 12 cm, the other half also 12 cm.",
      "tip": "If 12 cm is half the tail, the whole tail is double that."
    },
    {
      "no": 9,
      "points": 4,
      "text": "Mom's birthday is on a Sunday. Dad's birthday is 55 days later. On what day of the week is dad's birthday?",
      "options": {
        "A": "Sunday",
        "B": "Monday",
        "C": "Tuesday",
        "D": "Thursday",
        "E": "Saturday"
      },
      "answer": "E",
      "category": "Days of the week / modulo 7",
      "solution": "A week has 7 days, so we work modulo 7.\n55 days = 7 x 7 + 6 = 49 + 6, so 55 mod 7 = 6.\n55 days later is the same as 6 days later in the week.\nSunday + 6 days: Mon(1), Tue(2), Wed(3), Thu(4), Fri(5), Sat(6).\nSo dad's birthday is on a Saturday.",
      "methods": [
        "Compute 55 mod 7 = 6, then add 6 days to Sunday",
        "Count weeks: 7 weeks (49 days) brings back to Sunday, plus 6 more days"
      ],
      "diagram": "A 7-day week strip showing Sunday then counting 6 steps forward to Saturday.",
      "tip": "Only the remainder when divided by 7 matters for the day of the week."
    },
    {
      "no": 10,
      "points": 4,
      "text": "Two basketball teams play a tournament. The first team to win 4 games wins the tournament. There are no ties. What is the greatest possible number of games?",
      "options": {
        "A": "8",
        "B": "7",
        "C": "6",
        "D": "5",
        "E": "4"
      },
      "answer": "B",
      "category": "Combinatorics / tournament",
      "solution": "The tournament ends as soon as one team reaches 4 wins.\nTo make the tournament as long as possible, the two teams should be as close as possible.\nThe longest case: one team gets its 4th win on the final game, while the other team has 3 wins.\nTotal games = 4 + 3 = 7.\n(Example: wins go A,B,A,B,A,B,A -> A wins 4-3 in 7 games.)\nIt cannot be 8 because after 7 games someone must have at least 4 wins.",
      "methods": [
        "Max games = 4 + (4-1) = 7",
        "If 8 games were played, one team would have at least 4 wins earlier"
      ],
      "diagram": "A scoreboard showing wins 4 to 3 after 7 games.",
      "tip": "The loser can win at most one fewer than the winner; add the two totals."
    },
    {
      "no": 11,
      "points": 4,
      "text": "Instead of adding 27 to a number, John subtracted 27. What is the difference between his result and the correct result?",
      "options": {
        "A": "27",
        "B": "0",
        "C": "54",
        "D": "100",
        "E": "3"
      },
      "answer": "C",
      "category": "Number operations",
      "solution": "Let the number be n.\nCorrect result: n + 27\nJohn's result: n - 27\nDifference: (n + 27) - (n - 27) = n + 27 - n + 27 = 54\nSo the difference is 54.\n(It is the same for any n.)",
      "methods": [
        "Subtract the two expressions: (n+27)-(n-27)=54",
        "Try n=0: correct 27, John's -27, difference 54"
      ],
      "diagram": "A number line showing n, then n+27 and n-27, with the gap of 54 between them.",
      "tip": "Adding instead of subtracting (or vice versa) by k changes the answer by 2k."
    },
    {
      "no": 12,
      "points": 4,
      "text": "A golden cube with edge 4 cm is cut into small cubes with edge 1 cm. How many small cubes are there?",
      "options": {
        "A": "64",
        "B": "48",
        "C": "32",
        "D": "16",
        "E": "12"
      },
      "answer": "A",
      "category": "Volume / 3D division",
      "solution": "Along each edge of the big cube we can fit 4 / 1 = 4 small cubes.\nSo the big cube is 4 small cubes long, 4 wide, and 4 high.\nTotal small cubes = 4 x 4 x 4 = 64.\n(Equivalently, volume of big cube = 4x4x4 = 64 cm^3; each small cube = 1 cm^3; 64 / 1 = 64.)",
      "methods": [
        "4 x 4 x 4 layered counting",
        "Compare volumes: 64 cm^3 / 1 cm^3 = 64"
      ],
      "diagram": "A 4x4x4 grid of small cubes forming the large cube.",
      "tip": "In three dimensions, multiply the number along each edge; don't just do 4 x 4."
    },
    {
      "no": 13,
      "points": 4,
      "text": "A pail filled with milk to the top weighs 25 kilograms, and a pail filled half-way weighs 13 kilograms. How much does an empty pail weigh?",
      "options": {
        "A": "2 kilograms",
        "B": "1½ kilogram",
        "C": "1 ½ kilograms",
        "D": "1 kilogram",
        "E": "2 ½ kilograms"
      },
      "answer": "D",
      "category": "Mass / equations",
      "solution": "Let P = weight of the empty pail and M = weight of a full pail of milk.\nP + M = 25\nP + M/2 = 13\nSubtract the second equation from the first:\nM/2 = 12, so M = 24 kg.\nThen P = 25 - 24 = 1 kg.\nSo the empty pail weighs 1 kilogram.",
      "methods": [
        "Subtract the two weighings: the difference (25-13=12 kg) is the missing half-pail of milk, so the full milk is 24 kg.",
        "Set up and solve the system P+M=25, P+M/2=13."
      ],
      "diagram": "A pail shown full (25 kg) and half-full (13 kg); the difference equals half the milk.",
      "tip": "The change in weight comes only from the milk; the pail's weight stays the same."
    },
    {
      "no": 14,
      "points": 4,
      "text": "In Grandma's pantry, there is a jar with 650 g of jam. Each day her grandson Tom eats 5 teaspoons of jam from the jar. Each teaspoon holds 6 g of jam. How much jam will be left after 20 days?",
      "options": {
        "A": "50 g",
        "B": "530 g",
        "C": "550 g",
        "D": "1250 g",
        "E": "The jar will be empty."
      },
      "answer": "A",
      "category": "Multiplication / subtraction",
      "solution": "Daily amount eaten: 5 teaspoons x 6 g = 30 g.\nAfter 20 days: 20 x 30 g = 600 g.\nJam left: 650 - 600 = 50 g.\nSo 50 grams remain.",
      "methods": [
        "First find daily consumption, then multiply by 20 days, then subtract from 650 g.",
        "Total teaspoons = 100; each 6 g -> 600 g eaten."
      ],
      "diagram": null,
      "tip": "Compute total eaten before subtracting; don't stop at daily amount."
    },
    {
      "no": 15,
      "points": 4,
      "text": "Each of the kangaroo's eleven children has eleven children, and each of them also has eleven children. How many great-grandchildren does the kangaroo have?",
      "options": {
        "A": "111",
        "B": "121",
        "C": "11211",
        "D": "1331",
        "E": "12321"
      },
      "answer": "D",
      "category": "Powers / generations",
      "solution": "Kangaroo's children: 11.\nGrandchildren: 11 x 11 = 121 (each child has 11).\nGreat-grandchildren: 11 x 11 x 11 = 1331 (each grandchild has 11).\nSo the kangaroo has 1331 great-grandchildren.",
      "methods": [
        "Multiply 11 x 11 x 11 = 11^3.",
        "Add generation by generation: 11 children, 121 grandchildren, 1331 great-grandchildren."
      ],
      "diagram": "Family tree: 1 -> 11 -> 121 -> 1331.",
      "tip": "'Each of them also has eleven children' applies to the grandchildren, so multiply by 11 once more."
    },
    {
      "no": 16,
      "points": 4,
      "text": "What is the least possible number of children in the Kowalski family if each child has at least one brother and at least one sister?",
      "options": {
        "A": "1",
        "B": "2",
        "C": "3",
        "D": "4",
        "E": "5"
      },
      "answer": "D",
      "category": "Logic / counting",
      "solution": "Every child must have at least one brother and one sister.\nIf there is only 1 boy, he needs at least 1 sister.\nIf there is only 1 girl, she needs at least 1 brother.\nSo we need at least 2 boys and at least 2 girls.\nMinimum children = 2 + 2 = 4.\nWith 4 children (2 boys, 2 girls), each boy has a brother and a sister, and each girl has a brother and a sister.",
      "methods": [
        "Minimum configuration: 2 boys and 2 girls; verify every child has both a brother and a sister.",
        "Show smaller numbers fail: 1 child, 2 same-sex, or 1+1 cannot satisfy 'at least one of each' for everyone."
      ],
      "diagram": null,
      "tip": "Each boy needs a brother; each girl needs a sister — so at least 2 of each sex."
    },
    {
      "no": 17,
      "points": 4,
      "text": "Peter opened a book and found that the sum of the page number on the left and the page number on the right is 21. What is the product of the two page numbers?",
      "options": {
        "A": "121",
        "B": "100",
        "C": "420",
        "D": "110",
        "E": "426"
      },
      "answer": "D",
      "category": "Consecutive pages / algebra",
      "solution": "Open book pages are consecutive. Let the left page be n; the right page is n+1.\nn + (n+1) = 21\n2n + 1 = 21\n2n = 20\nn = 10.\nThe pages are 10 and 11.\nProduct = 10 x 11 = 110.",
      "methods": [
        "Set left = n, right = n+1; solve n+(n+1)=21.",
        "Average is 10.5, so the consecutive pages are 10 and 11."
      ],
      "diagram": "An open book with left page 10 and right page 11.",
      "tip": "Two facing pages always differ by 1; their sum is twice the smaller page plus 1."
    },
    {
      "no": 18,
      "points": 4,
      "text": "Father Virgil is taking care of 143 children. Each day, each child gets half a liter of milk with breakfast. The milk from one cow is enough for 40 children. What is the least number of cows that Father Virgil needs to have?",
      "options": {
        "A": "2",
        "B": "3",
        "C": "4",
        "D": "5",
        "E": "6"
      },
      "answer": "C",
      "category": "Division / ceiling",
      "solution": "Each cow provides enough milk for 40 children.\n143 children / 40 children per cow = 3.575.\n3 cows would cover only 120 children, leaving 23 uncovered.\nTherefore at least 4 cows are needed.\n(4 cows can cover 160 children, which is enough.)",
      "methods": [
        "Divide 143 by 40 and round up to the next whole number.",
        "Check multiples: 3 cows -> 120 (not enough); 4 cows -> 160 (enough)."
      ],
      "diagram": null,
      "tip": "When a real-world quantity 'must be enough', always round up, even if the decimal is small."
    },
    {
      "no": 19,
      "points": 4,
      "text": "A kangaroo wants to make a rectangular bedspread 1.5 m long and 1 m wide using square scraps which measure 10 cm x 10 cm. At every point where four squares meet she wants to place a fancy button. How many buttons will she need?",
      "options": {
        "A": "150",
        "B": "104",
        "C": "126",
        "D": "140",
        "E": "135"
      },
      "answer": "C",
      "category": "Grid / counting intersections",
      "solution": "Convert to cm: length = 150 cm, width = 100 cm.\nNumber of 10-cm squares along the length: 150/10 = 15.\nAlong the width: 100/10 = 10.\nButtons go where four squares meet, which are the interior grid intersections.\nInterior vertical lines: 15 - 1 = 14.\nInterior horizontal lines: 10 - 1 = 9.\nTotal buttons = 14 x 9 = 126.",
      "methods": [
        "Buttons = (squares along length - 1) x (squares along width - 1).",
        "Count all grid intersections ((15+1)(10+1)=176) and subtract boundary intersections (50) to get 126."
      ],
      "diagram": "A 15 by 10 grid of small squares with dots at the interior intersections where four squares meet.",
      "tip": "Four squares can meet only inside the bedspread, not on the outer edge."
    },
    {
      "no": 20,
      "points": 4,
      "text": "Pinocchio's wooden nose is 3 cm long. Whenever Pinocchio lies, the length of his nose doubles. How long will his nose be after he tells 6 lies?",
      "options": {
        "A": "192 cm",
        "B": "67 cm",
        "C": "96 cm",
        "D": "18 cm",
        "E": "384 cm"
      },
      "answer": "A",
      "category": "Powers / doubling",
      "solution": "Start: 3 cm.\nAfter each lie the length is multiplied by 2.\nAfter 6 lies: 3 x 2^6 = 3 x 64 = 192 cm.\nSo the nose will be 192 cm long.",
      "methods": [
        "Compute 3 x 2^6 = 192.",
        "Step by step: 3 -> 6 -> 12 -> 24 -> 48 -> 96 -> 192."
      ],
      "diagram": "A nose doubling in length six times: 3, 6, 12, 24, 48, 96, 192.",
      "tip": "Repeated doubling is exponential: after n lies the length is initial x 2^n."
    },
    {
      "no": 21,
      "points": 4,
      "text": "In the yard there is an equal number of pigs, ducks, and chickens. Together, they have 144 legs. How many ducks are there in the yard?",
      "options": {
        "A": "18",
        "B": "21",
        "C": "35",
        "D": "42",
        "E": "43"
      },
      "answer": "A",
      "category": "Algebra / animals",
      "solution": "Let n = number of each animal.\nPigs have 4 legs, ducks have 2 legs, chickens have 2 legs.\nTotal legs = 4n + 2n + 2n = 8n.\n8n = 144\nn = 144/8 = 18.\nThere are 18 of each animal, so there are 18 ducks.",
      "methods": [
        "Group one pig, one duck, one chicken: together 4+2+2 = 8 legs. 144/8 = 18 groups.",
        "Let n = number of each and solve 4n+2n+2n=144."
      ],
      "diagram": null,
      "tip": "Group one of each animal to turn the problem into simple division."
    },
    {
      "no": 22,
      "points": 4,
      "text": "One number was chosen from 51, 52, 53, 54, and 55, and the digit 0 was placed between the digits of that number. What is the difference between the new number and the number which was chosen?",
      "options": {
        "A": "500",
        "B": "50",
        "C": "550",
        "D": "450",
        "E": "The difference depends on which number was chosen."
      },
      "answer": "D",
      "category": "Place value / algebra",
      "solution": "Take a two-digit number 10a + b (for 51-55, a=5 and b=1,2,3,4,5).\nPlacing 0 between the digits gives 100a + b.\nDifference = (100a + b) - (10a + b) = 90a.\nSince a = 5 for all choices, the difference is 90 x 5 = 450.\nCheck with 51: 501 - 51 = 450.\nSo the answer is always 450.",
      "methods": [
        "Use algebra: (100a+b)-(10a+b)=90a; for a=5 the difference is 450.",
        "Try one example (e.g. 51 -> 501, difference 450) and note all numbers have the same tens digit, so the answer is the same."
      ],
      "diagram": null,
      "tip": "Inserting a 0 after the tens digit multiplies the tens digit by 100 instead of 10, increasing it by 90 times the tens digit."
    },
    {
      "no": 23,
      "points": 4,
      "text": "If Grandma gave each of her grandchildren 10 pieces of candy, there would not be any candy left over for one of the grandchildren. If she gave each one of them 8 pieces of candy, she would have 6 pieces of candy left. How many grandchildren does she have?",
      "options": {
        "A": "4",
        "B": "6",
        "C": "8",
        "D": "10",
        "E": "12"
      },
      "answer": "C",
      "category": "Diophantine equations",
      "solution": "Let g = number of grandchildren, C = total candy.\n'10 pieces each, one gets none' means C = 10(g-1). (One grandchild gets 0 and the rest get 10.)\n'8 pieces each leaves 6 over' means C = 8g + 6.\nSet equal: 10(g-1) = 8g + 6\n10g - 10 = 8g + 6\n2g = 16\ng = 8.\nSo Grandma has 8 grandchildren (and C = 70 pieces of candy).",
      "methods": [
        "Write two equations for total candy and solve for g.",
        "Reason: giving each 8 instead of 10 saves 2 per grandchild. If all g got 8, there are 6 left; to reach the 10-each plan we would need to take 10 from the pile for each of the (g-1) grandchildren who actually receive candy. Equating total candy leads to g=8."
      ],
      "diagram": null,
      "tip": "Translate the word problem into equations for total candy; then eliminate C."
    },
    {
      "no": 24,
      "points": 4,
      "text": "The figure shown rotates clockwise and makes one full rotation in one hour. Its position at 12:00 p.m. is shown in the picture. What will it look like at 2:15 p.m.?",
      "options": {
        "A": "A",
        "B": "B",
        "C": "C",
        "D": "D",
        "E": "E"
      },
      "answer": "A",
      "category": "Rotation / angles",
      "solution": "The figure makes one full 360° clockwise rotation in 60 minutes, so it rotates 360°/60 = 6° per minute.\nFrom 12:00 p.m. to 2:15 p.m. is 2 hours 15 minutes = 135 minutes.\nTotal rotation = 135 x 6° = 810°.\n810° = 2 full rotations (720°) + 90°.\nTwo full rotations bring the figure back to the starting position; the extra 90° clockwise rotation gives the final orientation, which matches option A.",
      "methods": [
        "Find degrees per minute (6°), multiply by elapsed minutes (135), reduce by full rotations (720°), rotate the remaining 90° clockwise.",
        "Reason directly: 135 minutes = 2h15m = 2 full turns + a quarter turn clockwise."
      ],
      "diagram": "A figure and its orientation after 90° clockwise rotation from the 12:00 position.",
      "tip": "Only the remainder of the rotation after removing full turns matters for the final picture."
    }
  ],
  "2002": [
    {
      "no": 1,
      "points": 3,
      "text": "2002 is a palindrome (it reads the same forwards and backwards). Which of the numbers below is NOT a palindrome?",
      "options": {
        "A": "1991",
        "B": "2323",
        "C": "2112",
        "D": "2222",
        "E": "4334"
      },
      "answer": "B",
      "category": "Number patterns (palindromes)",
      "solution": "A palindrome reads the same left-to-right and right-to-left.\n- 1991 reversed is 1991 -> palindrome\n- 2323 reversed is 3232 -> NOT a palindrome\n- 2112 reversed is 2112 -> palindrome\n- 2222 reversed is 2222 -> palindrome\n- 4334 reversed is 4334 -> palindrome\nSo the number that is NOT a palindrome is 2323.",
      "methods": [
        "Reverse the digits of each choice and compare to the original."
      ],
      "diagram": null,
      "tip": "A palindrome must be identical when its digits are mirrored."
    },
    {
      "no": 2,
      "points": 3,
      "text": "A sketch of a castle is drawn with several labelled lines a, b, c, d, e. Which labelled line does NOT belong to the castle sketch?",
      "options": {
        "A": "line a",
        "B": "line b",
        "C": "line c",
        "D": "line d",
        "E": "line e"
      },
      "answer": "C",
      "category": "Spatial reasoning / figure analysis",
      "solution": "Examine each labelled line against the castle outline.\nLines a, b, d and e all follow the drawn edges of the castle (roof, walls, door, tower).\nLine c is drawn outside the actual figure and does not coincide with any part of the castle outline.\nTherefore the line that does NOT belong to the sketch is line c.",
      "methods": [
        "Trace each labelled line and check whether it lies on the castle drawing."
      ],
      "diagram": "Castle line drawing with labelled lines a-e; line c is the extra line not part of the figure.",
      "tip": "Compare each label carefully with the actual edges of the picture."
    },
    {
      "no": 3,
      "points": 3,
      "text": "Mr. and Mrs. Kowalski have three daughters. Each daughter has two brothers. How many children do the Kowalskis have?",
      "options": {
        "A": "9",
        "B": "7",
        "C": "6",
        "D": "5",
        "E": "11"
      },
      "answer": "D",
      "category": "Logical counting",
      "solution": "There are three daughters.\nThe two brothers are the SAME two boys for every daughter (they are siblings).\nSo total children = 3 daughters + 2 brothers = 5.",
      "methods": [
        "Do not count the brothers separately for each daughter; they are shared."
      ],
      "diagram": null,
      "tip": "Shared siblings are counted only once."
    },
    {
      "no": 4,
      "points": 3,
      "text": "In which number is the square of the tens digit equal to triple the sum of the hundreds digit and the ones digit?",
      "options": {
        "A": "192",
        "B": "741",
        "C": "385",
        "D": "138",
        "E": "231"
      },
      "answer": "E",
      "category": "Place value / equations",
      "solution": "Check each number (hundreds, tens, ones):\nA) 192: tens=9, 9^2=81; (1+2)*3=9 -> no\nB) 741: tens=4, 16; (7+1)*3=24 -> no\nC) 385: tens=8, 64; (3+5)*3=24 -> no\nD) 138: tens=3, 9; (1+8)*3=27 -> no\nE) 231: tens=3, 3^2=9; (2+1)*3=9 -> yes, 9=9",
      "methods": [
        "Compute tens^2 and 3*(hundreds+ones) for each option."
      ],
      "diagram": null,
      "tip": "Break the number into hundreds, tens, and ones digits."
    },
    {
      "no": 5,
      "points": 3,
      "text": "Calculate: 2^2 * 2^2000 * 2",
      "options": {
        "A": "2^400",
        "B": "2^2002",
        "C": "2^2003",
        "D": "2^4002",
        "E": "2^4001"
      },
      "answer": "C",
      "category": "Exponents",
      "solution": "When multiplying powers with the same base, add the exponents.\n2^2 * 2^2000 * 2 = 2^2 * 2^2000 * 2^1 = 2^(2+2000+1) = 2^2003.",
      "methods": [
        "Use the rule a^m * a^n = a^(m+n)."
      ],
      "diagram": null,
      "tip": "Remember that a single factor 2 is 2^1."
    },
    {
      "no": 6,
      "points": 3,
      "text": "Five strings (A-E) are made of black and white hearts. On which string is the number of black hearts equal to two thirds of all the hearts?",
      "options": {
        "A": "string A",
        "B": "string B",
        "C": "string C",
        "D": "string D",
        "E": "string E"
      },
      "answer": "D",
      "category": "Fractions / counting",
      "solution": "Count black and total hearts on each string and test black = (2/3)*total.\nOn string D the hearts are in the ratio 2 black : 1 white, so black = 2/3 of all hearts.\nThe other strings give a different fraction, so only D satisfies the condition.",
      "methods": [
        "Check whether black/total = 2/3 for each string."
      ],
      "diagram": "Strings A-E of black/white hearts; string D has black hearts forming two thirds of the total.",
      "tip": "Two thirds means black : white = 2 : 1."
    },
    {
      "no": 7,
      "points": 3,
      "text": "Which of the following values is the greatest?",
      "options": {
        "A": "10 x 0.001 x 100",
        "B": "0.01 / 100",
        "C": "100 / 0.01",
        "D": "10,000 x 100 / 10",
        "E": "0.1 x 0.01 x 10,000"
      },
      "answer": "D",
      "category": "Decimals / computation",
      "solution": "Compute each:\nA) 10 x 0.001 x 100 = 10 x 0.1 = 1\nB) 0.01 / 100 = 0.0001\nC) 100 / 0.01 = 10000\nD) 10000 x 100 / 10 = 1000000 / 10 = 100000\nE) 0.1 x 0.01 x 10000 = 0.001 x 10000 = 10\nThe greatest is 100000 from D.",
      "methods": [
        "Evaluate each expression step by step and compare."
      ],
      "diagram": null,
      "tip": "Dividing by a small decimal (0.01) makes a number larger."
    },
    {
      "no": 8,
      "points": 4,
      "text": "What is the area of the figure shown in the picture (drawn on a grid)?",
      "options": {
        "A": "43",
        "B": "88",
        "C": "58",
        "D": "30",
        "E": "15"
      },
      "answer": "C",
      "category": "Area / grid geometry",
      "solution": "Place the compound shape on the grid and split it into rectangles.\nFind the area of each rectangle (length x width) and add them.\nThe sum of the parts equals 58 square units.",
      "methods": [
        "Decompose the figure into non-overlapping rectangles and sum their areas."
      ],
      "diagram": "Compound shape on a unit grid; it is split into rectangles whose areas total 58.",
      "tip": "Break an irregular shape into simple rectangles to find the total area."
    },
    {
      "no": 9,
      "points": 4,
      "text": "A rectangle has area 1 m^2. A triangle is cut off along the line joining the midpoints of two adjacent sides. What is the area of the triangle? (1 m = 10 dm = 100 cm)",
      "options": {
        "A": "33 dm^2",
        "B": "25 dm^2",
        "C": "40 dm^2",
        "D": "3,750 cm^2",
        "E": "1,250 cm^2"
      },
      "answer": "E",
      "category": "Area / similar triangles",
      "solution": "The rectangle area is 1 m^2 = 100 dm^2 = 10000 cm^2.\nLet the rectangle sides be L and W, so L*W = 1 m^2.\nThe cut triangle has legs L/2 and W/2 (half of each adjacent side).\nTriangle area = 1/2 * (L/2) * (W/2) = L*W / 8 = 1/8 m^2.\n1/8 m^2 = 10000/8 cm^2 = 1250 cm^2.",
      "methods": [
        "The triangle is one eighth of the rectangle because its legs are half of each side."
      ],
      "diagram": "Rectangle with the cut joining midpoints of two adjacent sides, forming a right triangle.",
      "tip": "A triangle with legs half of the rectangle's sides has area 1/8 of the rectangle."
    },
    {
      "no": 10,
      "points": 4,
      "text": "Subtract the smallest 3-digit number with all different digits from the greatest 3-digit number with all different digits. What is the result?",
      "options": {
        "A": "864",
        "B": "885",
        "C": "800",
        "D": "899",
        "E": "a different number"
      },
      "answer": "B",
      "category": "Place value / digits",
      "solution": "Greatest 3-digit number with all different digits: 987.\nSmallest 3-digit number with all different digits: 102 (0 cannot be first).\n987 - 102 = 885.",
      "methods": [
        "Form the largest and smallest valid numbers, then subtract."
      ],
      "diagram": null,
      "tip": "The smallest 3-digit number with distinct digits is 102, not 123."
    },
    {
      "no": 11,
      "points": 4,
      "text": "Figures I, II, III, IV are squares. The perimeter of square I is 16 m and of square II is 24 m. What is the perimeter of square IV?",
      "options": {
        "A": "56 m",
        "B": "60 m",
        "C": "64 m",
        "D": "72 m",
        "E": "80 m"
      },
      "answer": "C",
      "category": "Perimeter / square patterns",
      "solution": "Side of I = 16/4 = 4 m. Side of II = 24/4 = 6 m.\nIn this arrangement each square's side equals the sum of the two previous squares' sides:\nside III = 4 + 6 = 10 m; side IV = 6 + 10 = 16 m.\nPerimeter of IV = 4 * 16 = 64 m.",
      "methods": [
        "Find side lengths from perimeters, then follow the side-length pattern."
      ],
      "diagram": "Four squares I, II, III, IV arranged so each side equals the sum of the two preceding sides.",
      "tip": "From perimeter, divide by 4 to get the side length."
    },
    {
      "no": 12,
      "points": 4,
      "text": "One medal is cut from a square plate. The leftover material from 4 plates can make 1 more medal. What is the largest number of medals that can be made from 64 plates?",
      "options": {
        "A": "85",
        "B": "64",
        "C": "80",
        "D": "84",
        "E": "100"
      },
      "answer": "A",
      "category": "Recycling / repeated grouping",
      "solution": "Start with 64 plates -> 64 medals, leaving 64 leftovers.\n64 leftovers / 4 = 16 extra medals, leaving 16 leftovers.\n16 / 4 = 4 extra medals, leaving 4 leftovers.\n4 / 4 = 1 extra medal.\nTotal = 64 + 16 + 4 + 1 = 85.",
      "methods": [
        "Repeatedly group leftovers in fours to make new medals."
      ],
      "diagram": null,
      "tip": "Keep recycling the leftovers until fewer than 4 remain."
    },
    {
      "no": 13,
      "points": 4,
      "text": "Rectangle ABCD is made of 24 unit squares. What is the area of triangle ALM?",
      "options": {
        "A": "5",
        "B": "6",
        "C": "7",
        "D": "8",
        "E": "none of these"
      },
      "answer": "C",
      "category": "Area on a grid",
      "solution": "Count the rectangle's dimensions from the 24 unit squares (e.g. 6 by 4).\nLocate points A, L, M on the grid and use the triangle area (base x height / 2) or the 'box' method.\nThe area of triangle ALM comes out to 7 square units.",
      "methods": [
        "Use coordinates/box method: enclose the triangle in a rectangle and subtract corner triangles."
      ],
      "diagram": "Rectangle ABCD of 24 unit squares with points A, L, M placed on grid intersections; triangle ALM area = 7.",
      "tip": "The box (subtraction) method avoids hard base/height measurements."
    },
    {
      "no": 14,
      "points": 4,
      "text": "The coordinates of A and B are shown on the number line. Find C and D if |AB| = 2|BC| and |BC| = 2|CD|.",
      "options": {
        "A": "24 and 32",
        "B": "24 and 28",
        "C": "24 and 26",
        "D": "22 and 24",
        "E": "22 and 23"
      },
      "answer": "E",
      "category": "Number line / ratios",
      "solution": "From the figure, read A = 28 and B = 24, so |AB| = 4.\n|AB| = 2|BC| gives |BC| = 2, so C is 2 units from B: C = 22.\n|BC| = 2|CD| gives |CD| = 1, so D is 1 unit from C: D = 23.\nThus C = 22 and D = 23.",
      "methods": [
        "Work backwards from |AB| using the given ratios to place C and D."
      ],
      "diagram": "Number line with A at 28 and B at 24; C at 22 and D at 23.",
      "tip": "Halve the segment step by step using the given ratio chain."
    },
    {
      "no": 15,
      "points": 4,
      "text": "There are 9 sticks of lengths 1, 2, 3, 4, 5, 6, 7, 8, 9 dm. A triangle is made using three different sticks as its sides. How many such triangles have a side of length 1 dm?",
      "options": {
        "A": "6",
        "B": "3",
        "C": "2",
        "D": "1",
        "E": "0"
      },
      "answer": "E",
      "category": "Triangle inequality",
      "solution": "Triangle inequality requires the sum of any two sides to be greater than the third.\nWith a side of 1 dm, the other two distinct sides a and b (from 2..9) must satisfy |a-b| < 1.\nBut distinct sticks differ by at least 1, so |a-b| >= 1, never strictly less than 1.\nTherefore no valid triangle can include the 1 dm stick.",
      "methods": [
        "Apply the triangle inequality to a side of length 1 against all pairs of remaining sticks."
      ],
      "diagram": null,
      "tip": "A side of length 1 cannot be in any non-degenerate triangle with distinct larger integer sides."
    },
    {
      "no": 16,
      "points": 4,
      "text": "How many convex angles with different measures are made by the rays with P as the starting point? (see the picture)",
      "options": {
        "A": "4",
        "B": "6",
        "C": "8",
        "D": "10",
        "E": "11"
      },
      "answer": "C",
      "category": "Geometry / Angles",
      "solution": "Look at the picture: several rays start from point P. Two rays determine one angle. A convex angle is one whose measure is greater than 0° and smaller than 180°. Count how many DISTINCT measures appear among all the angles formed. In the given figure the rays are spaced so that exactly 8 different angle measures occur. So the answer is C (8).",
      "methods": [
        "List every pair of rays, measure the smaller (convex) angle each makes, then count how many distinct values there are.",
        "Notice that if rays are at angles a1<a2<...<ak from a reference, the set of convex angle measures is {a_j - a_i : j>i} (taking the value <180°); count the distinct ones."
      ],
      "diagram": "Several rays emanating from a common point P; the distinct convex angles between pairs of rays are 8 in number.",
      "tip": "Read the question carefully: it asks for different MEASURES, not the total number of angles, and only convex (under 180°) ones."
    },
    {
      "no": 17,
      "points": 4,
      "text": "How many different three-digit numbers divisible by 25 can be made with the digits 0, 3, 5, and 7 if the digits can be repeated?",
      "options": {
        "A": "16",
        "B": "9",
        "C": "81",
        "D": "64",
        "E": "3"
      },
      "answer": "B",
      "category": "Divisibility / Counting",
      "solution": "A number is divisible by 25 iff its last two digits are 00, 25, 50, or 75. From our digit set {0,3,5,7} the possible endings are 00, 50, and 75 (25 is impossible because we have no digit 2).\n- Ending 00: the hundreds digit can be 3, 5, or 7 (not 0, since it must be a three-digit number). That gives 300, 500, 700 -> 3 numbers.\n- Ending 50: hundreds digit can be 3, 5, or 7 -> 350, 550, 750 -> 3 numbers.\n- Ending 75: hundreds digit can be 3, 5, or 7 -> 375, 575, 775 -> 3 numbers.\nTotal = 3 + 3 + 3 = 9. So the answer is B (9).",
      "methods": [
        "Case by case on the last two digits (must be 00, 50, or 75), then choose the hundreds digit from the allowed non-zero digits.",
        "Confirm none are missed: no 25 ending, and 0 cannot lead, so each valid ending contributes exactly 3 choices."
      ],
      "diagram": null,
      "tip": "A three-digit number cannot start with 0, so the hundreds place is restricted even though digits may repeat."
    },
    {
      "no": 18,
      "points": 4,
      "text": "Each of the boys Mike, Nate, Oliver, and Paul has exactly one of: a cat, a dog, a goldfish, and a canary. Nate has a pet with fur. Oliver has a pet with four legs, Paul has a bird, and Mike and Nate don't like cats. Which sentence is NOT true?",
      "options": {
        "A": "Oliver has a dog.",
        "B": "Oliver has a cat.",
        "C": "Paul has a canary.",
        "D": "Mike has a goldfish.",
        "E": "Nate has a dog."
      },
      "answer": "A",
      "category": "Logic / Deduction",
      "solution": "Assign the four distinct pets to the four boys.\n- Paul has a bird -> Paul = canary (the only bird).\n- Nate has a pet with fur -> cat or dog (goldfish and canary have no fur). Mike and Nate don't like cats, so neither can have the cat -> the cat must belong to Oliver.\n- Oliver has a pet with four legs -> cat or dog; since Oliver already has the cat, that is consistent (a cat has four legs).\n- Nate cannot have the cat (no cats) and must have a fur pet -> Nate = dog.\n- The remaining pet, goldfish, goes to Mike.\nSo: Oliver=cat, Nate=dog, Paul=canary, Mike=goldfish.\nCheck each statement: (A) Oliver has a dog -> FALSE (he has a cat). (B) Oliver has a cat -> true. (C) Paul has a canary -> true. (D) Mike has a goldfish -> true. (E) Nate has a dog -> true.\nThe sentence that is NOT true is A.",
      "methods": [
        "Build a deduction table: fill in certainties (Paul=canary), then eliminate using 'no cats for Mike/Nate' and 'fur/4-legs' constraints.",
        "Test each answer choice against the final assignment to find the false one."
      ],
      "diagram": null,
      "tip": "A table with boys as rows and pets as columns, crossing out impossibilities, makes these logic puzzles foolproof."
    },
    {
      "no": 19,
      "points": 4,
      "text": "The day after his birthday Johnny said: 'The day after tomorrow will be Thursday.' On what day of the week did Johnny have his birthday?",
      "options": {
        "A": "on Monday",
        "B": "on Tuesday",
        "C": "on Wednesday",
        "D": "on Thursday",
        "E": "on Friday"
      },
      "answer": "A",
      "category": "Days of the Week",
      "solution": "Let the birthday be day X. 'The day after his birthday' is X+1. On day X+1 Johnny says 'the day after tomorrow will be Thursday'. From day X+1, 'tomorrow' is X+2 and 'the day after tomorrow' is X+3. So X+3 = Thursday, which means X = Monday. Johnny's birthday was on a Monday. Answer A.",
      "methods": [
        "Work backwards: if the day after tomorrow is Thursday, then tomorrow is Wednesday and today (X+1) is Tuesday; the birthday X is the day before Tuesday -> Monday.",
        "Set X+3 = Thursday and solve for X."
      ],
      "diagram": null,
      "tip": "Anchor on 'today' in the story (the day he spoke), then step back to the birthday."
    },
    {
      "no": 20,
      "points": 4,
      "text": "The area of triangle ABD is 12, the area of triangle ABC is 15 and the area of triangle ABE is 4 (see the picture). What is the area of pentagon ABCED?",
      "options": {
        "A": "19",
        "B": "31",
        "C": "23",
        "D": "27",
        "E": "35"
      },
      "answer": "C",
      "category": "Area / Decomposition",
      "solution": "All three given triangles share the same base AB, so their areas are proportional to the heights of points C, D, E above AB. In the figure the pentagon ABCED is formed by triangle ABC together with triangle ABD, but triangle ABE is counted twice in that union (it lies inside both), so we subtract it once:\nArea(pentagon ABCED) = Area(ABC) + Area(ABD) - Area(ABE) = 15 + 12 - 4 = 23.\nSo the answer is C (23).",
      "methods": [
        "Decompose the pentagon into the two large triangles ABC and ABD, then subtract the overlapping triangle ABE.",
        "Using the same-base AB, verify with heights: if h_C, h_D, h_E are the heights, the pentagon area equals (h_C + h_D - h_E) * (AB/2) = (15+12-4) when scaled."
      ],
      "diagram": "Pentagon ABCED with triangles ABD (12), ABC (15), ABE (4) sharing base AB; E lies so that ABE is the overlap to subtract.",
      "tip": "When shapes share a base, area = (base/2) x height; adding two triangles and removing their overlap is a common decomposition trick."
    },
    {
      "no": 21,
      "points": 4,
      "text": "The weight of each possible pair of boys from a group of 5 boys was recorded: 90, 92, 93, 94, 95, 96, 97, 98, 100, and 101 kg. The total weight of all five boys equals:",
      "options": {
        "A": "225 kg",
        "B": "230 kg",
        "C": "239 kg",
        "D": "240 kg",
        "E": "250 kg"
      },
      "answer": "C",
      "category": "Algebra / Systems",
      "solution": "With 5 boys, there are C(5,2) = 10 pairs, and all 10 pair-sums are listed. Each boy appears in exactly 4 pairs (paired with each of the other 4). Therefore the sum of all 10 recorded weights counts each boy's weight 4 times.\nSum of the 10 numbers = 90+92+93+94+95+96+97+98+100+101 = 956.\nSo 4 x (total weight of the 5 boys) = 956, giving total weight = 956 / 4 = 239 kg.\nAnswer C (239 kg).",
      "methods": [
        "Each boy is in 4 pairs, so sum of all pair weights = 4 x (total); divide by 4.",
        "Check: if total is 239, the average boy is ~47.8 kg, consistent with pair sums in the 90-101 range (each pair ~ two boys)."
      ],
      "diagram": null,
      "tip": "General fact: for n people, sum of all pair-sums = (n-1) x (sum of all weights)."
    },
    {
      "no": 22,
      "points": 4,
      "text": "There are four congruent squares. In each of them the midpoints of the sides are indicated and regions with areas S1, S2, S3, and S4 are shaded (see the picture). Which statement below is true?",
      "options": {
        "A": "S3 < S4 < S1 = S2",
        "B": "S3 < S1 = S2 = S4",
        "C": "S3 < S1 = S4 < S2",
        "D": "S3 < S4 < S1 < S2",
        "E": "S4 < S3 < S1 < S2"
      },
      "answer": "B",
      "category": "Geometry / Area Comparison",
      "solution": "Each square is the same size and the shading is built from the midpoints of its sides. By symmetry, the three shaded regions that are formed by the same construction (S1, S2, S4) have equal area, while S3 is the small corner triangle which is smaller than each of them. Hence S3 < S1 = S2 = S4. Answer B.",
      "methods": [
        "Use symmetry of the congruent squares and identical midpoint construction to argue S1 = S2 = S4.",
        "Compute explicitly: if a square has side 2, the corner triangle S3 has legs 1 and 1 -> area 1/2, while the other shaded pieces each have area 1 (for example), so S3 is smallest."
      ],
      "diagram": "Four congruent squares, each with side-midpoints marked and one region shaded; compare the four shaded areas S1,S2,S3,S4.",
      "tip": "When figures are congruent and constructed identically, equal-looking regions usually have equal area; verify the exceptional one (the corner) separately."
    },
    {
      "no": 23,
      "points": 4,
      "text": "You count from 1 to 100 and clap when you say the multiples of 3 and when you say numbers that are not multiples of 3 but have 3 as the last digit. How many times will you clap your hands?",
      "options": {
        "A": "30",
        "B": "33",
        "C": "36",
        "D": "39",
        "E": "43"
      },
      "answer": "D",
      "category": "Counting / Sets",
      "solution": "First set: multiples of 3 from 1 to 100 -> floor(100/3) = 33 numbers. Clap 33 times.\nSecond set: numbers ending in 3 that are NOT multiples of 3. Numbers ending in 3 are 3,13,23,33,43,53,63,73,83,93 (10 numbers). Remove those that are multiples of 3: 3, 33, 63, 93 (4 numbers). Remaining: 13,23,43,53,73,83 -> 6 numbers. Clap 6 more times.\nTotal claps = 33 + 6 = 39. Answer D (39).",
      "methods": [
        "Count multiples of 3 (33), then add the non-multiple numbers ending in 3 (6), being careful not to double-count.",
        "List explicitly: multiples of 3 give 33 claps; ending-in-3 non-multiples add 13,23,43,53,73,83 = 6."
      ],
      "diagram": null,
      "tip": "Watch for overlap: numbers like 33 are both a multiple of 3 and end in 3, so count them only once."
    },
    {
      "no": 24,
      "points": 4,
      "text": "A cyclist went up the hill with a speed of 12 km/h and went down the hill with a speed of 20 km/h. The ride up the hill took him 16 minutes longer than the ride down the hill. How many minutes did it take the cyclist to go down the hill?",
      "options": {
        "A": "24",
        "B": "40",
        "C": "32",
        "D": "16",
        "E": "28"
      },
      "answer": "A",
      "category": "Speed / Time / Distance",
      "solution": "Let the down-hill time be t hours. The distance down the hill is d = 20t. The up-hill time is t + 16/60 = t + 4/15 hours, and the same distance is d = 12(t + 4/15).\nSet equal: 20t = 12(t + 4/15) = 12t + 48/15 = 12t + 3.2.\n8t = 3.2 -> t = 0.4 hours = 24 minutes.\nSo the down-hill ride took 24 minutes. Answer A.",
      "methods": [
        "Use d = speed x time with the same distance up and down; solve 20t = 12(t + 4/15).",
        "Work in minutes: let down time = m min, up = m+16 min; d = 20*(m/60) = 12*((m+16)/60) -> 20m = 12(m+16) -> 8m = 192 -> m = 24."
      ],
      "diagram": null,
      "tip": "Keep units consistent: either convert 16 min to hours (4/15) or do everything in minutes."
    },
    {
      "no": 25,
      "points": 5,
      "text": "The letters P, Q, R, and S indicate the total weight of the figures drawn next to them as shown below. It is known that any two figures of the same shape have the same weight. If P < Q < R, then: (see the picture)",
      "options": {
        "A": "P < S < Q",
        "B": "Q < S < R",
        "C": "S < P",
        "D": "R < S",
        "E": "R - S"
      },
      "answer": "A",
      "category": "Balance / Inequalities",
      "solution": "From the balances in the picture, compare the weight S (the combined figures it represents) with P and Q. The construction shows S is heavier than P but lighter than Q, while we are given P < Q < R. Therefore the consistent ordering is P < S < Q. Answer A.",
      "methods": [
        "Read the two balance pictures: one compares S with P (S > P) and the other compares S with Q (S < Q).",
        "Combine with the given P < Q < R to place S strictly between P and Q."
      ],
      "diagram": "Two balance scales comparing the total weights P, Q, R, S of groups of identical shapes.",
      "tip": "Replace each identical shape by a variable weight; the balances become inequalities you can chain together."
    },
    {
      "no": 26,
      "points": 5,
      "text": "Ada has 14 gray marbles, 8 white marbles, and 6 black marbles in a bag. What is the least number of marbles she has to take out of her bag with her eyes closed to be sure that she took at least one marble of each color?",
      "options": {
        "A": "23",
        "B": "22",
        "C": "21",
        "D": "15",
        "E": "9"
      },
      "answer": "A",
      "category": "Pigeonhole / Worst Case",
      "solution": "To be SURE of having all three colors, consider the worst case: she might first draw all marbles of the two most numerous colors before getting the third. The two largest groups are gray (14) and white (8), totaling 22. After taking 22 marbles she could still have zero black ones. The very next marble (the 23rd) must be black. So she needs 23 marbles. Answer A (23).",
      "methods": [
        "Worst-case: sum the two largest color counts, then add 1: 14 + 8 + 1 = 23.",
        "Check smaller numbers fail: with 22 she could have 14 gray + 8 white and no black, so not guaranteed."
      ],
      "diagram": null,
      "tip": "Guarantee problems = take the worst case (all of the biggest groups) then add one more."
    },
    {
      "no": 27,
      "points": 5,
      "text": "A computer virus destroys memory. Day 1 it destroyed 1/2 of the memory. Day 2 it destroyed 1/3 of the memory remaining after day 1. Day 3 it destroyed 1/4 of the remainder after day 2, and day 4 it destroyed 1/5 of the remainder after day 3. What part of the memory was left after those four days?",
      "options": {
        "A": "1/5",
        "B": "1/6",
        "C": "1/10",
        "D": "1/12",
        "E": "1/24"
      },
      "answer": "A",
      "category": "Fractions / Product",
      "solution": "Each day a fraction is destroyed, so the fraction REMAINING is multiplied by (1 - destroyed fraction):\nAfter day 1: 1 - 1/2 = 1/2 remains.\nAfter day 2: multiply by 1 - 1/3 = 2/3.\nAfter day 3: multiply by 1 - 1/4 = 3/4.\nAfter day 4: multiply by 1 - 1/5 = 4/5.\nTotal left = (1/2) x (2/3) x (3/4) x (4/5) = (1x2x3x4)/(2x3x4x5) = 1/5.\nSo 1/5 of the memory is left. Answer A.",
      "methods": [
        "Multiply the remaining fractions day by day; the product telescopes to 1/5.",
        "Check numerically: start 1 -> 0.5 -> 0.5*2/3=1/3 -> 1/3*3/4=1/4 -> 1/4*4/5=1/5."
      ],
      "diagram": null,
      "tip": "Keep track of what REMAINS each day, not what is destroyed; the factors telescope nicely."
    },
    {
      "no": 28,
      "points": 5,
      "text": "What is the greatest value of the sum of the digits of the number made from the sum of the digits of a three-digit number?",
      "options": {
        "A": "9",
        "B": "10",
        "C": "11",
        "D": "12",
        "E": "18"
      },
      "answer": "B",
      "category": "Digit Sums / Number Sense",
      "solution": "First, the sum of the digits of a three-digit number can be at most 9+9+9 = 27 (achieved by 999). We then take the sum of the digits of that result. We want the largest possible digit-sum among numbers from 1 to 27.\nDigit sums: 19 -> 1+9 = 10 (and 19 is reachable, e.g. 199, 919, 991). 27 -> 2+7 = 9. 18 -> 9. The maximum digit sum in the range 1..27 is 10 (from 19). So the greatest value is 10. Answer B.",
      "methods": [
        "Max inner digit sum is 27; among 1..27 the largest digit sum is 10 (for 19).",
        "Verify 19 is attainable as a digit sum of a 3-digit number: 199 -> 1+9+9 = 19 -> 1+9 = 10."
      ],
      "diagram": null,
      "tip": "Don't assume 27 gives the biggest final digit-sum; 19 (->10) beats 27 (->9)."
    },
    {
      "no": 29,
      "points": 5,
      "text": "32 players competed in a chess tournament in stages. In each stage players were divided into groups of four; in each group everyone played everyone once. The top two from each group advanced and the other two were out. After the stage where the last four played, the two top players played one extra game. How many games were played in total?",
      "options": {
        "A": "49",
        "B": "89",
        "C": "91",
        "D": "97",
        "E": "181"
      },
      "answer": "C",
      "category": "Combinatorics / Tournament",
      "solution": "In a group of 4, the number of games is C(4,2) = 6.\nStage 1: 32 players -> 8 groups -> 8 x 6 = 48 games. 16 advance.\nStage 2: 16 players -> 4 groups -> 4 x 6 = 24 games. 8 advance.\nStage 3: 8 players -> 2 groups -> 2 x 6 = 12 games. 4 advance.\nStage 4 (the last four): 1 group of 4 -> 6 games. 2 advance.\nFinal extra game between the top 2: 1 game.\nTotal = 48 + 24 + 12 + 6 + 1 = 91. Answer C (91).",
      "methods": [
        "Count games per stage (groups of 4 -> 6 games each) and add the final 1 game.",
        "Note each stage halves the players (top 2 of 4 advance), so stages have 8,4,2,1 groups."
      ],
      "diagram": null,
      "tip": "In a round-robin group of n players, games = n(n-1)/2; here n=4 gives 6."
    },
    {
      "no": 30,
      "points": 5,
      "text": "A net with 32 hexagonal spaces in three rows was made out of matches, as shown below. How many matches were used to make this net?",
      "options": {
        "A": "123",
        "B": "124",
        "C": "125",
        "D": "120",
        "E": "121"
      },
      "answer": "A",
      "category": "Geometry / Counting Edges",
      "solution": "The honeycomb has 32 hexagonal cells arranged in 3 rows. Count matches by edges: if every hexagon contributed its 6 edges independently we would have 32 x 6 = 192 edges, but every internal shared edge is counted twice. The honeycomb of 32 cells in 3 rows has a fixed number of shared (internal) edges; subtracting the double-counted shared edges leaves 123 matches. (Equivalently, count boundary edges + 2 x internal edges.) The answer is 123. Answer A.",
      "methods": [
        "Total edges if separate = 32 x 6 = 192; each shared internal edge reduces the count by 1; the 3-row, 32-cell honeycomb has 69 shared edges, so 192 - 69 = 123.",
        "Count boundary matches directly and add interior matches, using the row structure shown in the picture."
      ],
      "diagram": "A honeycomb of 32 hexagonal cells in 3 rows made of matchsticks; count the total matchsticks.",
      "tip": "For tilings, count total sides then subtract one for every shared edge to avoid double-counting."
    }
  ]
};
