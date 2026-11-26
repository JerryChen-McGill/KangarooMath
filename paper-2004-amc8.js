// Source: user-provided AoPS PDFs in past papers/ACM 8. Problems © MAA.
KANGAROO_DATA["2004-amc8"] = [
  {
    "no": 1,
    "searchText": "On a map, a -centimeter length represents kilometers. How many kilometers does a -centimeter length represent?\n",
    "questionImage": "assets/2004-amc8-local/q1.png",
    "grade": "amc8",
    "points": 1,
    "title": "地图比例尺换算",
    "text": "地图比例尺换算",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "B",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2004_AMC_8_Problems/Problem_1",
    "tags": [
      "比例",
      "单位换算"
    ],
    "methods": [
      "用已知的一组图上长度与实际距离求出每厘米代表的千米数，再乘目标图上长度即得所问距离。",
      "把两段图上长度之比等于对应实际距离之比写成比例式，交叉相乘一次解出结果。"
    ],
    "hints": []
  },
  {
    "no": 2,
    "searchText": "How many different four-digit numbers can be formed by rearranging the four digits in ?",
    "questionImage": "assets/2004-amc8-local/q2.png",
    "grade": "amc8",
    "points": 1,
    "title": "四位数重排计数",
    "text": "四位数重排计数",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "B",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2004_AMC_8_Problems/Problem_2",
    "tags": [
      "排列",
      "分类讨论"
    ],
    "methods": [
      "先算四个数字的全排列，再扣除首位为零不合法以及重复数字造成的重复计数。",
      "按千位可取的不同数字分类，逐类枚举剩余三位的排法并累加，得到不同四位数的个数。"
    ],
    "hints": []
  },
  {
    "no": 3,
    "searchText": "Twelve friends met for dinner at Oscar's Overstuffed Oyster House, and each ordered one meal. The portions were so large, there\nwas enough food for people. If they shared, how many meals should they have ordered to have just enough food for the of\nthem?",
    "questionImage": "assets/2004-amc8-local/q3.png",
    "grade": "amc8",
    "points": 1,
    "title": "餐点份量分配",
    "text": "餐点份量分配",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "A",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2004_AMC_8_Problems/Problem_3",
    "tags": [
      "比例",
      "应用题"
    ],
    "methods": [
      "由十二份餐够题给人数求出每人实际食量占一份的几分之几，再用朋友们的人数除以它得应点份数。",
      "把份数与人数的正比关系写成比例式，用已知的「十二份对若干人」交叉相乘解出刚好够用的份数。"
    ],
    "hints": []
  },
  {
    "no": 4,
    "searchText": "Ms. Hamilton’s eighth-grade class wants to participate in the annual three-person-team basketball tournament. Lance, Sally, Joy,\nand Fred are chosen for the team. In how many ways can the three starters be chosen?",
    "questionImage": "assets/2004-amc8-local/q4.png",
    "grade": "amc8",
    "points": 1,
    "title": "首发三人选法",
    "text": "首发三人选法",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "B",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2004_AMC_8_Problems/Problem_4",
    "tags": [
      "组合",
      "逆向思维"
    ],
    "methods": [
      "从四人中选三人等价于决定哪一人不上场，故共有四种选法。",
      "用组合数或逐一列举所有三人组合，核对不重不漏后得到选法总数。"
    ],
    "hints": []
  },
  {
    "no": 5,
    "searchText": "Ms. Hamilton's eighth-grade class wants to participate in the annual three-person-team basketball tournament. The losing team of\neach game is eliminated from the tournament. If sixteen teams compete, how many games will be played to determine the winner?",
    "questionImage": "assets/2004-amc8-local/q5.png",
    "grade": "amc8",
    "points": 1,
    "title": "淘汰赛场次",
    "text": "淘汰赛场次",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "D",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2004_AMC_8_Problems/Problem_5",
    "tags": [
      "比赛问题",
      "逆向思维"
    ],
    "methods": [
      "每场淘汰一队，十六队决出冠军需淘汰十五队，故共进行十五场。",
      "按轮次逐轮统计场次（十六进八、八进四、四进二、决赛），把各轮场次相加得总场数。"
    ],
    "hints": []
  },
  {
    "no": 6,
    "searchText": "After Sally takes shots, she has made of her shots. After she takes more shots, she raises her percentage to .\nHow many of the last shots did she make?",
    "questionImage": "assets/2004-amc8-local/q6.png",
    "grade": "amc8",
    "points": 1,
    "title": "投篮命中率提升",
    "text": "投篮命中率提升",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "C",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2004_AMC_8_Problems/Problem_6",
    "tags": [
      "百分数",
      "方程"
    ],
    "methods": [
      "设最后一批投篮命中 x 个，用「原命中数加 x 除以总出手数等于新命中率」列方程解出 x。",
      "抓住两次命中率对应的命中总数之差，先由前后两个百分率分别算出应有的命中数，相减即得最后一批命中个数。"
    ],
    "hints": []
  },
  {
    "no": 7,
    "searchText": "An athlete's target heart rate, in beats per minute, is of the theoretical maximum heart rate. The maximum heart rate is\nfound by subtracting the athlete's age, in years, from . To the nearest whole number, what is the target heart rate of an athlete\nwho is years old?",
    "questionImage": "assets/2004-amc8-local/q7.png",
    "grade": "amc8",
    "points": 1,
    "title": "目标心率计算",
    "text": "目标心率计算",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "B",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2004_AMC_8_Problems/Problem_7",
    "tags": [
      "百分数",
      "应用题"
    ],
    "methods": [
      "先用给定常数减去题给年龄得理论最大心率，再乘目标百分比并四舍五入到最近的整数。",
      "把「常数减年龄」写成代数式后整体乘百分率，先估算积落在哪两个相邻整数之间，再按取整临界值定出最接近的整数。"
    ],
    "hints": []
  },
  {
    "no": 8,
    "searchText": "Find the number of two-digit positive integers whose digits total .",
    "questionImage": "assets/2004-amc8-local/q8.png",
    "grade": "amc8",
    "points": 1,
    "title": "数字和的两位数",
    "text": "数字和的两位数",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "B",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2004_AMC_8_Problems/Problem_8",
    "tags": [
      "数字和",
      "枚举"
    ],
    "methods": [
      "设十位为 a、个位为 b，由 a 加 b 等于题给数字和且 a 在一到九、b 在零到九，逐一代入 a 求合法 b 的个数。",
      "利用数字和固定时每个合法十位唯一确定个位的一一对应关系，计数即等于十位可取值的个数。"
    ],
    "hints": []
  },
  {
    "no": 9,
    "searchText": "The average of the five numbers in a list is . The average of the first two numbers is . What is the average of the last three\nnumbers?",
    "questionImage": "assets/2004-amc8-local/q9.png",
    "grade": "amc8",
    "points": 1,
    "title": "分组平均数",
    "text": "分组平均数",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "D",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2004_AMC_8_Problems/Problem_9",
    "tags": [
      "方程",
      "代数"
    ],
    "methods": [
      "由五个数的平均求总和，减去前两数平均乘二得前两数之和，余下部分除以三即得后三数平均。",
      "设后三数平均为 x，用「总和等于前两数之和加三 x」列方程解出 x。"
    ],
    "hints": []
  },
  {
    "no": 10,
    "searchText": "Handy Aaron helped a neighbor hours on Monday, minutes on Tuesday, from 8:20 to 10:45 on Wednesday morning, and a\nhalf-hour on Friday. He is paid per hour. How much did he earn for the week?",
    "questionImage": "assets/2004-amc8-local/q10.png",
    "grade": "amc8",
    "points": 1,
    "title": "一周工时报酬",
    "text": "一周工时报酬",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "E",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2004_AMC_8_Problems/Problem_10",
    "tags": [
      "单位换算",
      "应用题"
    ],
    "methods": [
      "把周一工时、周二分钟数、周三 8:20 到 10:45 的时长与周五半小时统一化成小时，求和后乘时薪。",
      "以分钟为单位累加四段时长再除以六十换成小时，或把每段工时先折算成钱再相加得总收入。"
    ],
    "hints": []
  },
  {
    "no": 11,
    "searchText": "The numbers and are rearranged according to these rules:\nWhat is the average of the first and last numbers?",
    "questionImage": "assets/2004-amc8-local/q11.png",
    "grade": "amc8",
    "points": 1,
    "title": "按规则重排首尾",
    "text": "按规则重排首尾",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "C",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2004_AMC_8_Problems/Problem_11",
    "tags": [
      "数列",
      "配对求和"
    ],
    "methods": [
      "按给定规则逐步写出重排后的整列数，读出首项与末项，相加除以二得平均。",
      "利用重排的对称性，首尾两数在规则下成对对应，用配对求和直接得到首尾之和的一半，无需列出全部项。"
    ],
    "hints": []
  },
  {
    "no": 12,
    "searchText": "Niki usually leaves her cell phone on. If her cell phone is on but she is not actually using it, the battery will last for hours. If she\nis using it constantly, the battery will last for only hours. Since the last recharge, her phone has been on hours, and during that\ntime she has used it for minutes. If she doesn’t talk any more but leaves the phone on, how many more hours will the battery\nlast?",
    "questionImage": "assets/2004-amc8-local/q12.png",
    "grade": "amc8",
    "points": 1,
    "title": "手机续航时间",
    "text": "手机续航时间",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "B",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2004_AMC_8_Problems/Problem_12",
    "tags": [
      "分数",
      "单位换算"
    ],
    "methods": [
      "把总电量看作 1，分别求待机与通话每小时耗电率，由已待机时长与通话分钟折成的小时算出已耗电量，剩余电量除以待机耗电率。",
      "把通话时间按两种耗电率之比折算成等效待机时间，与已待机时长相加得到已用掉的待机时长，再由满电待机总时长减去它。"
    ],
    "hints": []
  },
  {
    "no": 13,
    "searchText": "\nAmy, Bill and Celine are friends with different ages. Exactly one of the following statements is true.\nI. Bill is the oldest.\nII. Amy is not the oldest.\nIII. Celine is not the youngest.\nRank the friends from the oldest to the youngest.",
    "questionImage": "assets/2004-amc8-local/q13.png",
    "grade": "amc8",
    "points": 1,
    "title": "真假话年龄排序",
    "text": "真假话年龄排序",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "E",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2004_AMC_8_Problems/Problem_13",
    "tags": [
      "逻辑推理",
      "排除法"
    ],
    "methods": [
      "分别假设三句话中某一句为真，逐一检验另外两句是否同时为假，只有一种假设自洽，据此排出年龄次序。",
      "利用陈述间的蕴含关系（如「Bill 最大」为真会连带推出别的陈述为真），由矛盾直接排除不可能为真的句子，再定唯一真话。"
    ],
    "hints": []
  },
  {
    "no": 14,
    "searchText": "What is the area enclosed by the geoboard quadrilateral below?",
    "questionImage": "assets/2004-amc8-local/q14.png",
    "grade": "amc8",
    "points": 1,
    "title": "钉板四边形面积",
    "text": "钉板四边形面积",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "C",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2004_AMC_8_Problems/Problem_14",
    "tags": [
      "网格",
      "割补法"
    ],
    "methods": [
      "用外接矩形面积减去四周多余的直角三角形面积（割补法）得到四边形面积。",
      "沿一条对角线把四边形分成两个三角形分别用底乘高求面积再相加，或按格点多边形由内部点与边界点数直接算面积。"
    ],
    "hints": []
  },
  {
    "no": 15,
    "searchText": "Thirteen black and six white hexagonal tiles were used to create the figure below. If a new figure is created by attaching a border of\nwhite tiles with the same size and shape as the others, what will be the difference between the total number of white tiles and the\ntotal number of black tiles in the new figure?",
    "questionImage": "assets/2004-amc8-local/q15.png",
    "grade": "amc8",
    "points": 1,
    "title": "六边形瓷砖加边",
    "text": "六边形瓷砖加边",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "C",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2004_AMC_8_Problems/Problem_15",
    "tags": [
      "六边形",
      "计数"
    ],
    "methods": [
      "黑砖数不变（十三块），只需数出新增一圈白砖的块数，加原有六块白砖后减去黑砖数即得差。",
      "按围绕图形的边界分层递推，或按每条边上新增的砖数分类累加并扣除顶点重复计数，得到加边后的白砖总数再作差。"
    ],
    "hints": []
  },
  {
    "no": 16,
    "searchText": "Two mL pitchers contain orange juice. One pitcher is full and the other pitcher is full. Water is added to fill each\npitcher completely, then both pitchers are poured into one large container. What fraction of the mixture in the large container is\norange juice?",
    "questionImage": "assets/2004-amc8-local/q16.png",
    "grade": "amc8",
    "points": 1,
    "title": "橙汁加水占比",
    "text": "橙汁加水占比",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "C",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2004_AMC_8_Problems/Problem_16",
    "tags": [
      "分数",
      "比例"
    ],
    "methods": [
      "设每壶容量为 1，把两壶中原有橙汁按各自的分数相加，除以混合后的总液量两份即得橙汁占比。",
      "取两壶容量的公倍数作为份数，逐壶算出橙汁份数，再用「橙汁总份数除以总份数」列出比例式求解。"
    ],
    "hints": []
  },
  {
    "no": 17,
    "searchText": "Three friends have a total of identical pencils, and each one has at least one pencil. In how many ways can this happen?",
    "questionImage": "assets/2004-amc8-local/q17.png",
    "grade": "amc8",
    "points": 1,
    "title": "铅笔分配方案",
    "text": "铅笔分配方案",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "D",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2004_AMC_8_Problems/Problem_17",
    "tags": [
      "组合",
      "枚举"
    ],
    "methods": [
      "先给每人一支，剩余相同铅笔分给三人且允许为零，用隔板法（插板）得组合数。",
      "固定其中一人所得支数，对另一人枚举取值范围，累加所有合法三元组的数目。"
    ],
    "hints": []
  },
  {
    "no": 18,
    "searchText": "Five friends compete in a dart-throwing contest. Each one has two darts to throw at the same circular target, and each individual's\nscore is the sum of the scores in the target regions that are hit. The scores for the target regions are the whole numbers through\n. Each throw hits the target in a region with a different value. The scores are: Alice points, Ben points, Cindy points,\nDave points, and Ellen points. Who hits the region worth points?",
    "questionImage": "assets/2004-amc8-local/q18.png",
    "grade": "amc8",
    "points": 1,
    "title": "飞镖分值配对",
    "text": "飞镖分值配对",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "A",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2004_AMC_8_Problems/Problem_18",
    "tags": [
      "逻辑推理",
      "配对求和"
    ],
    "methods": [
      "把每人的得分拆成两个不同区域值之和，列出所有可能的两数组合，用各人得分互不相同逐步排除，锁定含目标分值的人。",
      "从总分入手，五个得分之和等于所有被命中区域值之和（每区域只被命中一次），用总和反推哪些区域被使用，再对照各人得分定位。"
    ],
    "hints": []
  },
  {
    "no": 19,
    "searchText": "A whole number larger than leaves a remainder of when divided by each of the numbers and . The smallest such\nnumber lies between which two numbers?",
    "questionImage": "assets/2004-amc8-local/q19.png",
    "grade": "amc8",
    "points": 1,
    "title": "同余最小数范围",
    "text": "同余最小数范围",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "B",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2004_AMC_8_Problems/Problem_19",
    "tags": [
      "同余",
      "倍数"
    ],
    "methods": [
      "若除以各除数余数相同，则该数减去余数是各除数的公倍数，取最小公倍数加余数得最小数，再判断落在哪两个界值之间。",
      "把「余数相同」转成「两两之差为各除数的公倍数」，从最小公倍数加余数起逐一构造候选数，用排除法对照选项区间。"
    ],
    "hints": []
  },
  {
    "no": 20,
    "searchText": "Two-thirds of the people in a room are seated in three-fourths of the chairs. The rest of the people are standing. If there are\nempty chairs, how many people are in the room?",
    "questionImage": "assets/2004-amc8-local/q20.png",
    "grade": "amc8",
    "points": 1,
    "title": "空椅求人数",
    "text": "空椅求人数",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "D",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2004_AMC_8_Problems/Problem_20",
    "tags": [
      "分数",
      "方程"
    ],
    "methods": [
      "设总人数与总椅数，由三分之二的人坐在四分之三的椅子上得等式，再由题给空椅数（四分之一椅子减去站着的人占位）列方程解人数。",
      "把坐着的人数同时看作三分之二人数与四分之三椅子数，用比例把空椅数换算成人数，再按分数反推总人数。"
    ],
    "hints": []
  },
  {
    "no": 21,
    "searchText": "Spinners and are spun. On each spinner, the arrow is equally likely to land on each number. What is the probability that the\nproduct of the two spinners' numbers is even?",
    "questionImage": "assets/2004-amc8-local/q21.png",
    "grade": "amc8",
    "points": 1,
    "title": "转盘乘积为偶",
    "text": "转盘乘积为偶",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "D",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2004_AMC_8_Problems/Problem_21",
    "tags": [
      "概率",
      "分类讨论"
    ],
    "methods": [
      "乘积为奇当且仅当两盘都为奇数，用 1 减去「两盘都转到奇数」的概率即得乘积为偶的概率。",
      "枚举两盘所有等可能的有序结果，按奇偶分类统计乘积为偶的情形数，再除以总结果数。"
    ],
    "hints": []
  },
  {
    "no": 22,
    "searchText": "At a party there are only single women and married men with their wives. The probability that a randomly selected woman is single\nis . What fraction of the people in the room are married men?",
    "questionImage": "assets/2004-amc8-local/q22.png",
    "grade": "amc8",
    "points": 1,
    "title": "单身女与已婚男",
    "text": "单身女与已婚男",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "B",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2004_AMC_8_Problems/Problem_22",
    "tags": [
      "概率",
      "方程"
    ],
    "methods": [
      "设单身女为 s、已婚夫妇为 m 对，由「s 除以 s 加 m 等于题给概率」解出 s 与 m 的比，再用 m 除以 s 加 2m 得已婚男占全体的比例。",
      "把每位已婚男与其妻视为绑定的一对，取便于计算的女性总人数代入题给概率，用女性中单身与已婚的份额直接换算已婚男的占比。"
    ],
    "hints": []
  },
  {
    "no": 23,
    "searchText": "Tess runs counterclockwise around rectangular block . She lives at corner . Which graph could represent her straight-\nline distance from home?",
    "questionImage": "assets/2004-amc8-local/q23.png",
    "grade": "amc8",
    "points": 1,
    "title": "绕街区距离图像",
    "text": "绕街区距离图像",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "D",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2004_AMC_8_Problems/Problem_23",
    "tags": [
      "行程问题",
      "图形识别"
    ],
    "methods": [
      "沿矩形四边逐段分析到 A 的直线距离：相邻边上由零增大，对边上先增后减，最后一条边单调减回零，据此选出吻合的图像。",
      "只抓几个关键特征——起点终点距离为零、经过对角顶点时达到最大、各段走势连续——用排除法剔除不符的图像。"
    ],
    "hints": []
  },
  {
    "no": 24,
    "searchText": "In the figure, is a rectangle and is a parallelogram. Using the measurements given in the figure, what is the\nlength of the segment that is perpendicular to and ?",
    "questionImage": "assets/2004-amc8-local/q24.png",
    "grade": "amc8",
    "points": 1,
    "title": "矩形平行四边形高",
    "text": "矩形平行四边形高",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "C",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2004_AMC_8_Problems/Problem_24",
    "tags": [
      "面积",
      "等高模型"
    ],
    "methods": [
      "把同一图形的面积用两种底与对应高表示，由矩形面积与平行四边形面积相等列出方程，解出所求的垂直线段长。",
      "利用平行线与垂直关系把所求线段看作两平行线间的距离，用已知边长配合勾股定理或相似三角形比例换算求出。"
    ],
    "hints": []
  },
  {
    "no": 25,
    "searchText": "Two squares intersect at right angles, bisecting their intersecting sides, as shown. The circle's diameter is the segment\nbetween the two points of intersection. What is the area of the shaded region created by removing the circle from the squares?",
    "questionImage": "assets/2004-amc8-local/q25.png",
    "grade": "amc8",
    "points": 1,
    "title": "两方交叠去圆",
    "text": "两方交叠去圆",
    "options": {
      "A": "选项 A",
      "B": "选项 B",
      "C": "选项 C",
      "D": "选项 D",
      "E": "选项 E"
    },
    "answer": "D",
    "solutionUrl": "https://artofproblemsolving.com/wiki/index.php?title=2004_AMC_8_Problems/Problem_25",
    "tags": [
      "容斥原理",
      "对称"
    ],
    "methods": [
      "用容斥求两正方形并集面积（各自面积和减去重叠部分），再减去以两交点连线为直径的圆面积，得阴影面积。",
      "利用相交边被平分与直角相交的对称性，把阴影分成若干全等块，先算一块（正方形部分减圆扇形）的面积再乘块数。"
    ],
    "hints": []
  }
];
