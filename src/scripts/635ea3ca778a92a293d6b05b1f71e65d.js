// ws:src/tileset.js
var TILESET_IMAGE = "./terrain.png";
var TILE = 32;
var COLUMNS = 32;
var TERRAINS = [
  "Dirt_Tan",
  "Dirt_Brown",
  "Dirt_Dark",
  "Rock_White",
  "Rock_Gray",
  "Rock_Dark",
  "Rock_Black",
  "Hole_Brown",
  "Hole_Black",
  "Mud_Brown",
  "Grass",
  "Grass_Light",
  "Grass_Dark",
  "Grass_Dead",
  "Soil",
  "Sand",
  "Snow_1",
  "Snow_2",
  "Gravel_1",
  "Dirt_Roots",
  "Water_Shallows_Dirt",
  "Water",
  "Water_Deep",
  "Water_Purple",
  "Water_Green",
  "Lava",
  "Water_Shallows_Sand",
  "Ice",
  "Ice_Melting",
  "Earth_Cracked",
  "Stone_White",
  "Stone_Tan",
  "Mudstone_Gray",
  "Mudstone_Brown",
];
var BASE = [
  97, 100, 103, 106, 109, 112, 115, 118, 121, 124, 321, 324, 327, 330, 333, 336,
  339, 342, 345, 348, 545, 548, 551, 554, 557, 560, 837, 838, 841, 784, 787,
  790, 793, 796,
];
var RANK = [
  7, 8, 9, 3, 4, 5, 6, 21, 20, 22, 31, 29, 28, 30, 2, 0, 10, 11, 32, 23, 16, 15,
  14, 12, 13, 33, 17, 18, 19, 1, 26, 27, 24, 25,
];
var MASKS = [
  [
    0,
    130,
    128,
    129,
    66,
    98,
    192,
    1,
    64,
    193,
    96,
    2,
    65,
    33,
    34,
    [97, 160, 161, 162],
  ],
  [
    0,
    133,
    131,
    132,
    69,
    101,
    195,
    4,
    67,
    196,
    99,
    5,
    68,
    36,
    37,
    [100, 163, 164, 165],
  ],
  [
    0,
    136,
    134,
    135,
    72,
    104,
    198,
    7,
    70,
    199,
    102,
    8,
    71,
    39,
    40,
    [103, 166, 167, 168],
  ],
  [
    0,
    139,
    137,
    138,
    75,
    107,
    201,
    10,
    73,
    202,
    105,
    11,
    74,
    42,
    43,
    [106, 169, 170, 171],
  ],
  [
    0,
    142,
    140,
    141,
    78,
    110,
    204,
    13,
    76,
    205,
    108,
    14,
    77,
    45,
    46,
    [109, 172, 173, 174],
  ],
  [
    0,
    145,
    143,
    144,
    [81, 209],
    113,
    207,
    16,
    79,
    208,
    111,
    17,
    80,
    48,
    49,
    [112, 175, 176, 177],
  ],
  [
    0,
    148,
    146,
    147,
    84,
    116,
    210,
    19,
    82,
    211,
    114,
    20,
    83,
    51,
    52,
    [115, 178, 179, 180],
  ],
  [0, 151, 149, 150, 87, 119, 213, 22, 85, 214, 117, 23, 86, 54, 55, 118],
  [0, 154, 152, 153, 90, 122, 216, 25, 88, 217, 120, 26, 89, 57, 58, 121],
  [
    0,
    157,
    155,
    156,
    93,
    125,
    219,
    28,
    91,
    220,
    123,
    29,
    92,
    60,
    61,
    [124, 187, 188, 189],
  ],
  [
    0,
    354,
    352,
    353,
    290,
    322,
    416,
    225,
    288,
    417,
    320,
    226,
    289,
    257,
    258,
    [321, 384, 385, 386, 418],
  ],
  [
    0,
    357,
    355,
    356,
    293,
    325,
    419,
    228,
    291,
    420,
    323,
    229,
    292,
    260,
    261,
    [324, 387, 388, 389, 421],
  ],
  [
    0,
    360,
    358,
    359,
    296,
    328,
    422,
    231,
    294,
    423,
    326,
    232,
    295,
    263,
    264,
    [327, 390, 391, 392],
  ],
  [
    0,
    363,
    361,
    362,
    299,
    331,
    425,
    234,
    297,
    426,
    329,
    235,
    298,
    266,
    267,
    [330, 393, 394, 395, 427],
  ],
  [
    0,
    366,
    364,
    365,
    302,
    334,
    428,
    237,
    300,
    429,
    332,
    238,
    301,
    269,
    270,
    [333, 1130],
  ],
  [
    0,
    369,
    367,
    368,
    305,
    337,
    431,
    240,
    303,
    432,
    335,
    241,
    304,
    272,
    273,
    [336, 399, 400, 401, 769, 772],
  ],
  [
    0,
    372,
    370,
    371,
    308,
    340,
    434,
    243,
    306,
    435,
    338,
    244,
    307,
    275,
    276,
    [339, 402, 403, 404, 775, 778, 781],
  ],
  [
    0,
    375,
    373,
    374,
    311,
    343,
    437,
    246,
    309,
    438,
    341,
    247,
    310,
    278,
    279,
    [342, 405, 406, 407],
  ],
  [
    0,
    378,
    376,
    377,
    314,
    346,
    440,
    249,
    312,
    441,
    344,
    250,
    313,
    281,
    282,
    [345, 408, 409],
  ],
  [
    0,
    381,
    379,
    380,
    317,
    349,
    443,
    252,
    315,
    444,
    347,
    253,
    316,
    284,
    285,
    [348, 411, 412, 413, 1369, 1372],
  ],
  [
    0,
    578,
    576,
    577,
    514,
    546,
    640,
    449,
    512,
    641,
    544,
    450,
    513,
    481,
    482,
    [545, 608, 609, 610, 663, 1363, 1366],
  ],
  [
    0,
    581,
    579,
    580,
    517,
    549,
    643,
    452,
    515,
    644,
    547,
    453,
    516,
    484,
    485,
    [548, 566, 569, 572, 611, 612, 613],
  ],
  [
    0,
    584,
    582,
    583,
    520,
    552,
    646,
    455,
    518,
    647,
    550,
    456,
    519,
    487,
    488,
    [551, 563, 614, 615, 616, 626, 627, 628],
  ],
  [
    0,
    587,
    585,
    586,
    523,
    555,
    649,
    458,
    521,
    650,
    553,
    459,
    522,
    490,
    491,
    [554, 617, 618, 619],
  ],
  [
    0,
    590,
    588,
    589,
    526,
    558,
    652,
    461,
    524,
    653,
    556,
    462,
    525,
    493,
    494,
    [557, 620, 621, 622],
  ],
  [
    0,
    593,
    591,
    592,
    529,
    561,
    655,
    464,
    527,
    656,
    559,
    465,
    528,
    496,
    497,
    [560, 623, 624, 625],
  ],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, [837, 867, 868]],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, [838, 839, 840]],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, [681, 713, 841, 842, 843]],
  [
    0,
    817,
    815,
    816,
    753,
    785,
    879,
    688,
    751,
    880,
    783,
    689,
    752,
    720,
    721,
    [784, 847, 848, 849],
  ],
  [
    0,
    820,
    818,
    819,
    756,
    788,
    882,
    691,
    754,
    883,
    786,
    692,
    755,
    723,
    724,
    [787, 850, 851, 852, 1348],
  ],
  [
    0,
    823,
    821,
    822,
    759,
    791,
    885,
    694,
    757,
    886,
    789,
    695,
    758,
    726,
    727,
    [790, 853, 854, 855, 1351],
  ],
  [
    0,
    826,
    824,
    825,
    762,
    794,
    888,
    697,
    [760, 889],
    0,
    792,
    698,
    761,
    729,
    730,
    [793, 856, 857, 858, 1354],
  ],
  [
    0,
    829,
    827,
    828,
    765,
    797,
    891,
    700,
    763,
    892,
    795,
    701,
    764,
    732,
    733,
    [796, 859, 860, 861, 1360],
  ],
];
var TERRAIN_INDEX = Object.fromEntries(TERRAINS.map((n, i) => [n, i]));

// ws:src/props.js
var PROPS_IMAGE = "./props.png";
var PROPS = [
  [0, 0, 271, 314, "tree", "green", 40],
  [273, 0, 271, 314, "tree", "brown", 40],
  [546, 0, 271, 314, "tree", "orange", 40],
  [819, 0, 271, 314, "tree", "pale", 40],
  [1092, 0, 271, 314, "tree", "dead", 37],
  [1365, 0, 242, 298, "tree", "green", 43],
  [1609, 0, 242, 298, "tree", "brown", 43],
  [0, 316, 242, 298, "tree", "orange", 43],
  [244, 316, 242, 298, "tree", "pale", 43],
  [488, 316, 242, 298, "tree", "dead", 39],
  [732, 316, 192, 224, "conifer", "green", 0],
  [926, 316, 192, 224, "conifer_snow", "green", 16],
  [1120, 316, 127, 214, "conifer", "green", 3],
  [1249, 316, 127, 214, "conifer_snow", "green", 19],
  [1378, 316, 112, 203, "tree", "green", 9],
  [1492, 316, 112, 203, "tree", "brown", 9],
  [1606, 316, 112, 203, "tree", "orange", 9],
  [1720, 316, 112, 203, "tree", "pale", 9],
  [1834, 316, 112, 203, "tree", "dead", 8],
  [0, 616, 128, 190, "tree", "green", 41],
  [130, 616, 128, 190, "tree", "brown", 41],
  [260, 616, 128, 190, "tree", "orange", 41],
  [390, 616, 128, 190, "tree", "pale", 41],
  [520, 616, 170, 189, "tree", "green", 35],
  [692, 616, 170, 189, "tree", "brown", 35],
  [864, 616, 170, 189, "tree", "orange", 35],
  [1036, 616, 170, 189, "tree", "pale", 35],
  [1208, 616, 170, 189, "tree", "dead", 32],
  [1380, 616, 160, 189, "tree", "green", 36],
  [1542, 616, 160, 189, "tree", "brown", 36],
  [1704, 616, 160, 189, "tree", "orange", 36],
  [1866, 616, 160, 189, "tree", "pale", 36],
  [0, 808, 160, 189, "tree", "dead", 33],
  [162, 808, 165, 188, "tree", "green", 34],
  [329, 808, 165, 188, "tree", "brown", 34],
  [496, 808, 165, 188, "tree", "orange", 34],
  [663, 808, 165, 188, "tree", "pale", 34],
  [830, 808, 165, 188, "tree", "dead", 31],
  [997, 808, 106, 183, "tree", "dead", 38],
  [1105, 808, 113, 179, "tree", "green", 42],
  [1220, 808, 113, 179, "tree", "brown", 42],
  [1335, 808, 113, 179, "tree", "orange", 42],
  [1450, 808, 113, 179, "tree", "pale", 42],
  [1565, 808, 154, 170, "tree", "green", 38],
  [1721, 808, 154, 170, "tree", "brown", 38],
  [1877, 808, 154, 170, "tree", "orange", 38],
  [0, 999, 154, 170, "tree", "pale", 38],
  [156, 999, 154, 170, "tree", "dead", 34],
  [312, 999, 150, 169, "tree", "green", 39],
  [464, 999, 150, 169, "tree", "brown", 39],
  [616, 999, 150, 169, "tree", "orange", 39],
  [768, 999, 150, 169, "tree", "pale", 39],
  [920, 999, 127, 165, "tree", "green", 37],
  [1049, 999, 127, 165, "tree", "brown", 37],
  [1178, 999, 127, 165, "tree", "orange", 37],
  [1307, 999, 127, 165, "tree", "pale", 37],
  [1436, 999, 93, 159, "tree", "green", 26],
  [1531, 999, 93, 159, "tree", "brown", 26],
  [1626, 999, 93, 159, "tree", "orange", 26],
  [1721, 999, 93, 159, "tree", "pale", 26],
  [1816, 999, 172, 158, "tree", "green", 28],
  [0, 1171, 172, 158, "tree", "brown", 29],
  [174, 1171, 172, 158, "tree", "orange", 28],
  [348, 1171, 172, 158, "tree", "pale", 28],
  [522, 1171, 74, 158, "conifer", "green", 2],
  [598, 1171, 74, 158, "conifer_snow", "green", 18],
  [674, 1171, 82, 157, "conifer", "green", 1],
  [758, 1171, 82, 157, "conifer_snow", "green", 17],
  [842, 1171, 160, 156, "tree", "green", 29],
  [1004, 1171, 160, 156, "tree", "brown", 30],
  [1166, 1171, 160, 156, "tree", "orange", 29],
  [1328, 1171, 160, 156, "tree", "pale", 29],
  [1490, 1171, 128, 156, "tree", "dead", 35],
  [1620, 1171, 73, 154, "conifer", "green", 4],
  [1695, 1171, 73, 154, "conifer_snow", "green", 20],
  [1770, 1171, 125, 151, "tree", "green", 27],
  [1897, 1171, 125, 151, "tree", "brown", 27],
  [0, 1331, 125, 151, "tree", "orange", 27],
  [127, 1331, 125, 151, "tree", "pale", 27],
  [254, 1331, 94, 150, "tree", "dead", 23],
  [350, 1331, 92, 150, "tree", "dead", 40],
  [444, 1331, 61, 150, "tree", "brown", 28],
  [507, 1331, 61, 150, "tree", "dead", 22],
  [570, 1331, 63, 149, "tree", "green", 31],
  [635, 1331, 63, 149, "tree", "orange", 31],
  [700, 1331, 63, 149, "tree", "pale", 31],
  [765, 1331, 63, 149, "conifer", "green", 5],
  [830, 1331, 63, 149, "conifer_snow", "green", 21],
  [895, 1331, 139, 148, "tree", "dead", 36],
  [1036, 1331, 62, 145, "tree", "green", 30],
  [1100, 1331, 62, 145, "tree", "brown", 31],
  [1164, 1331, 62, 145, "tree", "orange", 30],
  [1228, 1331, 62, 145, "tree", "pale", 30],
  [1292, 1331, 127, 142, "tree", "dead", 26],
  [1421, 1331, 95, 140, "tree", "dead", 27],
  [1518, 1331, 54, 140, "tree", "dead", 25],
  [1574, 1331, 104, 138, "tree", "green", 32],
  [1680, 1331, 104, 138, "tree", "brown", 32],
  [1786, 1331, 104, 138, "tree", "orange", 32],
  [1892, 1331, 104, 138, "tree", "pale", 32],
  [0, 1484, 94, 137, "tree", "green", 25],
  [96, 1484, 94, 137, "tree", "brown", 25],
  [192, 1484, 94, 137, "tree", "orange", 25],
  [288, 1484, 94, 137, "tree", "pale", 25],
  [384, 1484, 123, 133, "tree", "dead", 24],
  [509, 1484, 120, 128, "tree", "green", 21],
  [631, 1484, 120, 128, "tree", "brown", 21],
  [753, 1484, 120, 128, "tree", "orange", 21],
  [875, 1484, 120, 128, "tree", "pale", 21],
  [997, 1484, 107, 128, "tree", "green", 18],
  [1106, 1484, 107, 128, "tree", "brown", 18],
  [1215, 1484, 107, 128, "tree", "orange", 18],
  [1324, 1484, 107, 128, "tree", "pale", 18],
  [1433, 1484, 89, 128, "tree", "green", 17],
  [1524, 1484, 89, 128, "tree", "brown", 17],
  [1615, 1484, 89, 128, "tree", "orange", 17],
  [1706, 1484, 89, 128, "tree", "pale", 17],
  [1797, 1484, 64, 128, "tree", "green", 11],
  [1863, 1484, 64, 128, "tree", "brown", 11],
  [1929, 1484, 64, 128, "tree", "orange", 11],
  [0, 1623, 64, 128, "tree", "pale", 11],
  [66, 1623, 115, 127, "tree", "green", 20],
  [183, 1623, 115, 127, "tree", "brown", 20],
  [300, 1623, 115, 127, "tree", "orange", 20],
  [417, 1623, 115, 127, "tree", "pale", 20],
  [534, 1623, 94, 127, "tree", "green", 19],
  [630, 1623, 94, 127, "tree", "brown", 19],
  [726, 1623, 94, 127, "tree", "orange", 19],
  [822, 1623, 94, 127, "tree", "pale", 19],
  [918, 1623, 89, 126, "tree", "green", 22],
  [1009, 1623, 89, 126, "tree", "brown", 22],
  [1100, 1623, 89, 126, "tree", "orange", 22],
  [1191, 1623, 89, 126, "tree", "pale", 22],
  [1282, 1623, 96, 125, "tree", "dead", 15],
  [1380, 1623, 123, 124, "tree", "dead", 16],
  [1505, 1623, 96, 122, "tree", "green", 14],
  [1603, 1623, 96, 122, "tree", "brown", 14],
  [1701, 1623, 96, 122, "tree", "orange", 14],
  [1799, 1623, 96, 122, "tree", "pale", 14],
  [1897, 1623, 93, 122, "tree", "dead", 17],
  [0, 1753, 96, 120, "tree", "green", 12],
  [98, 1753, 96, 120, "tree", "brown", 12],
  [196, 1753, 96, 120, "tree", "orange", 12],
  [294, 1753, 96, 120, "tree", "pale", 12],
  [392, 1753, 96, 120, "tree", "dead", 9],
  [490, 1753, 88, 120, "tree", "green", 23],
  [580, 1753, 88, 120, "tree", "brown", 23],
  [670, 1753, 88, 120, "tree", "orange", 23],
  [760, 1753, 88, 120, "tree", "pale", 23],
  [850, 1753, 82, 120, "tree", "dead", 18],
  [934, 1753, 101, 119, "tree", "dead", 19],
  [1037, 1753, 95, 118, "tree", "green", 15],
  [1134, 1753, 95, 118, "tree", "brown", 15],
  [1231, 1753, 95, 118, "tree", "orange", 15],
  [1328, 1753, 95, 118, "tree", "pale", 15],
  [1425, 1753, 131, 117, "tree", "dead", 28],
  [1558, 1753, 64, 117, "tree", "dead", 10],
  [1624, 1753, 63, 117, "tree", "green", 13],
  [1689, 1753, 63, 117, "tree", "brown", 13],
  [1754, 1753, 63, 117, "tree", "orange", 13],
  [1819, 1753, 63, 117, "tree", "pale", 13],
  [1884, 1753, 108, 111, "tree", "dead", 20],
  [1994, 1753, 50, 111, "tree", "green", 24],
  [0, 1875, 50, 111, "tree", "brown", 24],
  [52, 1875, 50, 111, "tree", "orange", 24],
  [104, 1875, 50, 111, "tree", "pale", 24],
  [156, 1875, 86, 107, "tree", "dead", 21],
  [244, 1875, 83, 106, "tree", "green", 16],
  [329, 1875, 83, 106, "tree", "brown", 16],
  [414, 1875, 83, 106, "tree", "orange", 16],
  [499, 1875, 83, 106, "tree", "pale", 16],
  [584, 1875, 76, 99, "tree", "dead", 29],
  [662, 1875, 128, 97, "tree", "green", 2],
  [792, 1875, 128, 97, "tree", "brown", 2],
  [922, 1875, 128, 97, "tree", "orange", 2],
  [1052, 1875, 128, 97, "tree", "pale", 2],
  [1182, 1875, 128, 96, "tree", "dead", 2],
  [1312, 1875, 64, 96, "tree", "green", 1],
  [1378, 1875, 64, 96, "tree", "brown", 1],
  [1444, 1875, 64, 96, "tree", "orange", 1],
  [1510, 1875, 64, 96, "tree", "pale", 1],
  [1576, 1875, 64, 96, "tree", "dead", 1],
  [1642, 1875, 58, 96, "tree", "green", 0],
  [1702, 1875, 58, 96, "tree", "brown", 0],
  [1762, 1875, 58, 96, "tree", "orange", 0],
  [1822, 1875, 58, 96, "tree", "pale", 0],
  [1882, 1875, 60, 95, "conifer", "green", 9],
  [1944, 1875, 60, 95, "conifer_snow", "green", 25],
  [0, 1988, 58, 93, "tree", "green", 4],
  [60, 1988, 58, 93, "tree", "brown", 4],
  [120, 1988, 58, 93, "tree", "orange", 4],
  [180, 1988, 58, 93, "tree", "pale", 4],
  [240, 1988, 83, 92, "tree", "green", 3],
  [325, 1988, 83, 92, "tree", "brown", 3],
  [410, 1988, 83, 92, "tree", "orange", 3],
  [495, 1988, 83, 92, "tree", "pale", 3],
  [580, 1988, 83, 92, "tree", "dead", 3],
  [665, 1988, 95, 91, "tree", "dead", 13],
  [762, 1988, 87, 91, "tree", "dead", 12],
  [851, 1988, 58, 87, "bush", "green", 216],
  [911, 1988, 84, 81, "bush", "dead", 11],
  [997, 1988, 94, 80, "bush", "green", 33],
  [1093, 1988, 94, 80, "bush", "brown", 33],
  [1189, 1988, 94, 80, "bush", "orange", 33],
  [1285, 1988, 94, 80, "bush", "pale", 33],
  [1381, 1988, 64, 80, "bush", "green", 7],
  [1447, 1988, 64, 80, "bush", "brown", 7],
  [1513, 1988, 64, 80, "bush", "orange", 7],
  [1579, 1988, 64, 80, "bush", "pale", 7],
  [1645, 1988, 64, 80, "bush", "dead", 6],
  [1711, 1988, 58, 80, "bush", "dead", 14],
  [1771, 1988, 38, 80, "conifer", "green", 10],
  [1811, 1988, 38, 80, "conifer_snow", "green", 26],
  [1851, 1988, 56, 78, "conifer", "green", 6],
  [1909, 1988, 56, 78, "conifer_snow", "green", 22],
  [1967, 1988, 52, 64, "bush", "dead", 0],
  [0, 2083, 36, 64, "conifer", "green", 11],
  [38, 2083, 36, 64, "conifer_snow", "green", 27],
  [76, 2083, 32, 64, "bush", "green", 212],
  [110, 2083, 29, 64, "bush", "green", 211],
  [141, 2083, 64, 63, "bush", "green", 38],
  [207, 2083, 47, 62, "bush", "green", 108],
  [256, 2083, 32, 62, "bush", "green", 208],
  [290, 2083, 28, 62, "bush", "green", 203],
  [320, 2083, 61, 61, "bush", "green", 234],
  [383, 2083, 31, 60, "conifer", "green", 12],
  [416, 2083, 31, 60, "conifer_snow", "green", 28],
  [449, 2083, 30, 60, "bush", "green", 214],
  [481, 2083, 29, 60, "bush", "green", 191],
  [512, 2083, 62, 59, "bush", "green", 297],
  [576, 2083, 36, 59, "bush", "green", 314],
  [614, 2083, 32, 59, "bush", "green", 315],
  [648, 2083, 30, 59, "conifer", "green", 13],
  [680, 2083, 30, 59, "conifer_snow", "green", 29],
  [712, 2083, 63, 58, "bush", "green", 302],
  [777, 2083, 55, 58, "bush", "green", 5],
  [834, 2083, 55, 58, "bush", "brown", 5],
  [891, 2083, 55, 58, "bush", "orange", 5],
  [948, 2083, 55, 58, "bush", "pale", 5],
  [1005, 2083, 55, 58, "bush", "dead", 4],
  [1062, 2083, 32, 58, "bush", "green", 292],
  [1096, 2083, 26, 58, "bush", "green", 257],
  [1124, 2083, 54, 57, "bush", "green", 238],
  [1180, 2083, 36, 57, "bush", "green", 298],
  [1218, 2083, 22, 56, "bush", "green", 317],
  [1242, 2083, 22, 56, "bush", "green", 318],
  [1266, 2083, 32, 55, "bush", "green", 210],
  [1300, 2083, 48, 54, "bush", "green", 6],
  [1350, 2083, 48, 54, "bush", "brown", 6],
  [1400, 2083, 48, 54, "bush", "orange", 6],
  [1450, 2083, 48, 54, "bush", "pale", 6],
  [1500, 2083, 48, 54, "bush", "dead", 5],
  [1550, 2083, 28, 53, "bush", "green", 193],
  [1580, 2083, 28, 53, "bush", "green", 194],
  [1610, 2083, 28, 52, "bush", "green", 239],
  [1640, 2083, 64, 51, "bush", "green", 153],
  [1706, 2083, 25, 51, "bush", "green", 262],
  [1733, 2083, 59, 50, "bush", "green", 259],
  [1794, 2083, 59, 50, "bush", "green", 282],
  [1855, 2083, 43, 50, "bush", "green", 8],
  [1900, 2083, 43, 50, "bush", "brown", 8],
  [1945, 2083, 43, 50, "bush", "orange", 8],
  [1990, 2083, 43, 50, "bush", "pale", 8],
  [0, 2149, 43, 50, "bush", "dead", 7],
  [45, 2149, 24, 49, "bush", "green", 303],
  [71, 2149, 19, 49, "bush", "green", 213],
  [92, 2149, 61, 47, "bush", "green", 261],
  [155, 2149, 61, 47, "bush", "green", 286],
  [218, 2149, 27, 47, "bush", "green", 195],
  [247, 2149, 32, 46, "conifer", "green", 7],
  [281, 2149, 32, 46, "conifer", "green", 8],
  [315, 2149, 32, 46, "conifer_snow", "green", 23],
  [349, 2149, 32, 46, "conifer_snow", "green", 24],
  [383, 2149, 34, 45, "bush", "green", 319],
  [419, 2149, 21, 45, "bush", "green", 320],
  [442, 2149, 30, 42, "conifer", "green", 14],
  [474, 2149, 30, 42, "conifer_snow", "green", 30],
  [506, 2149, 50, 41, "bush", "green", 294],
  [558, 2149, 33, 41, "plant", "green", 248],
  [593, 2149, 59, 40, "bush", "green", 264],
  [654, 2149, 59, 40, "bush", "green", 287],
  [715, 2149, 32, 40, "plant", "green", 312],
  [749, 2149, 31, 40, "plant", "green", 322],
  [782, 2149, 19, 38, "plant", "green", 246],
  [803, 2149, 12, 35, "plant", "green", 219],
  [817, 2149, 64, 32, "bush", "green", 277],
  [883, 2149, 37, 32, "plant", "green", 249],
  [922, 2149, 32, 32, "rock", "gray", 0],
  [956, 2149, 32, 32, "rock", "gray", 1],
  [990, 2149, 32, 32, "plant", "green", 296],
  [1024, 2149, 28, 32, "plant", "green", 202],
  [1054, 2149, 28, 32, "plant", "green", 323],
  [1084, 2149, 23, 32, "conifer", "green", 15],
  [1109, 2149, 23, 32, "conifer_snow", "green", 31],
  [1134, 2149, 96, 31, "bush", "green", 313],
  [1232, 2149, 64, 31, "bush", "green", 176],
  [1298, 2149, 62, 31, "bush", "green", 189],
  [1362, 2149, 30, 31, "plant", "green", 188],
  [1394, 2149, 26, 31, "plant", "green", 235],
  [1422, 2149, 22, 31, "plant", "green", 190],
  [1446, 2149, 17, 31, "plant", "green", 295],
  [1465, 2149, 29, 30, "plant", "green", 236],
  [1496, 2149, 28, 30, "plant", "green", 266],
  [1526, 2149, 20, 30, "plant", "green", 276],
  [1548, 2149, 33, 29, "plant", "green", 265],
  [1583, 2149, 28, 29, "plant", "green", 254],
  [1613, 2149, 28, 29, "plant", "green", 255],
  [1643, 2149, 28, 29, "plant", "green", 256],
  [1673, 2149, 24, 29, "plant", "green", 178],
  [1699, 2149, 32, 28, "plant", "green", 324],
  [1733, 2149, 30, 28, "plant", "green", 215],
  [1765, 2149, 29, 28, "plant", "green", 204],
  [1796, 2149, 29, 28, "plant", "green", 281],
  [1827, 2149, 29, 28, "plant", "green", 289],
  [1858, 2149, 28, 28, "plant", "green", 279],
  [1888, 2149, 23, 28, "plant", "green", 316],
  [1913, 2149, 16, 28, "plant", "green", 177],
  [1931, 2149, 15, 28, "plant", "green", 9],
  [1948, 2149, 15, 28, "plant", "green", 16],
  [1965, 2149, 15, 28, "plant", "green", 17],
  [1982, 2149, 15, 28, "plant", "green", 18],
  [0, 2201, 63, 27, "bush", "green", 179],
  [65, 2201, 30, 27, "plant", "green", 192],
  [97, 2201, 31, 26, "plant", "green", 126],
  [130, 2201, 31, 26, "plant", "green", 290],
  [163, 2201, 31, 26, "plant", "green", 301],
  [196, 2201, 28, 26, "plant", "green", 164],
  [226, 2201, 28, 26, "plant", "green", 184],
  [256, 2201, 28, 26, "plant", "green", 227],
  [286, 2201, 27, 26, "plant", "green", 133],
  [315, 2201, 19, 26, "plant", "green", 258],
  [336, 2201, 59, 25, "bush", "green", 283],
  [397, 2201, 43, 25, "bush", "green", 310],
  [442, 2201, 32, 25, "plant", "green", 127],
  [476, 2201, 32, 25, "plant", "green", 148],
  [510, 2201, 28, 25, "plant", "green", 288],
  [540, 2201, 27, 25, "plant", "green", 167],
  [569, 2201, 25, 25, "plant", "green", 230],
  [596, 2201, 18, 25, "plant", "green", 82],
  [616, 2201, 59, 24, "bush", "green", 293],
  [677, 2201, 32, 24, "plant", "green", 97],
  [711, 2201, 32, 24, "plant", "green", 185],
  [745, 2201, 32, 24, "plant", "green", 209],
  [779, 2201, 29, 24, "plant", "green", 109],
  [810, 2201, 29, 24, "plant", "green", 110],
  [841, 2201, 29, 24, "plant", "green", 131],
  [872, 2201, 29, 24, "plant", "green", 132],
  [903, 2201, 20, 24, "plant", "green", 81],
  [925, 2201, 17, 24, "plant", "green", 63],
  [944, 2201, 13, 24, "plant", "green", 41],
  [959, 2201, 13, 24, "plant", "green", 42],
  [974, 2201, 13, 24, "plant", "green", 43],
  [989, 2201, 13, 24, "plant", "green", 44],
  [1004, 2201, 28, 23, "plant", "green", 149],
  [1034, 2201, 28, 23, "plant", "green", 305],
  [1064, 2201, 27, 23, "plant", "green", 272],
  [1093, 2201, 17, 23, "plant", "green", 96],
  [1112, 2201, 32, 22, "plant", "green", 311],
  [1146, 2201, 27, 22, "plant", "green", 80],
  [1175, 2201, 27, 22, "plant", "green", 83],
  [1204, 2201, 27, 22, "plant", "green", 84],
  [1233, 2201, 27, 22, "plant", "green", 85],
  [1262, 2201, 16, 22, "plant", "green", 0],
  [1280, 2201, 16, 22, "plant", "green", 1],
  [1298, 2201, 16, 22, "plant", "green", 26],
  [1316, 2201, 16, 22, "plant", "green", 50],
  [1334, 2201, 16, 22, "plant", "green", 51],
  [1352, 2201, 16, 22, "plant", "green", 52],
  [1370, 2201, 16, 22, "plant", "green", 53],
  [1388, 2201, 16, 22, "plant", "green", 65],
  [1406, 2201, 15, 22, "plant", "green", 64],
  [1423, 2201, 15, 22, "plant", "green", 66],
  [1440, 2201, 15, 22, "plant", "green", 67],
  [1457, 2201, 40, 21, "bush", "green", 321],
  [1499, 2201, 32, 21, "plant", "green", 291],
  [1533, 2201, 28, 21, "plant", "green", 306],
  [1563, 2201, 27, 21, "plant", "green", 225],
  [1592, 2201, 27, 21, "plant", "green", 300],
  [1621, 2201, 26, 21, "plant", "green", 86],
  [1649, 2201, 23, 21, "plant", "green", 299],
  [1674, 2201, 16, 21, "plant", "green", 165],
  [1692, 2201, 16, 21, "plant", "green", 224],
  [1710, 2201, 16, 21, "plant", "green", 231],
  [1728, 2201, 14, 21, "plant", "green", 10],
  [1744, 2201, 14, 21, "plant", "green", 23],
  [1760, 2201, 14, 21, "plant", "green", 24],
  [1776, 2201, 14, 21, "plant", "green", 25],
  [1792, 2201, 30, 20, "plant", "green", 111],
  [1824, 2201, 30, 20, "plant", "green", 112],
  [1856, 2201, 30, 20, "plant", "green", 135],
  [1888, 2201, 30, 20, "plant", "green", 136],
  [1920, 2201, 23, 20, "plant", "green", 134],
  [1945, 2201, 22, 20, "plant", "green", 263],
  [1969, 2201, 15, 20, "plant", "green", 260],
  [1986, 2201, 13, 20, "plant", "green", 232],
  [2001, 2201, 10, 20, "plant", "green", 325],
  [2013, 2201, 25, 19, "plant", "green", 284],
  [0, 2230, 22, 19, "plant", "green", 307],
  [24, 2230, 21, 19, "plant", "green", 144],
  [47, 2230, 21, 19, "plant", "green", 173],
  [70, 2230, 19, 19, "plant", "green", 147],
  [91, 2230, 19, 19, "plant", "green", 166],
  [112, 2230, 17, 19, "plant", "green", 151],
  [131, 2230, 16, 19, "plant", "green", 228],
  [149, 2230, 12, 19, "plant", "green", 217],
  [163, 2230, 8, 19, "plant", "green", 15],
  [173, 2230, 8, 19, "plant", "green", 31],
  [183, 2230, 8, 19, "plant", "green", 32],
  [193, 2230, 8, 19, "plant", "green", 33],
  [203, 2230, 51, 18, "bush", "green", 309],
  [256, 2230, 18, 18, "plant", "green", 94],
  [276, 2230, 18, 18, "plant", "green", 95],
  [296, 2230, 18, 18, "plant", "green", 98],
  [316, 2230, 15, 18, "plant", "green", 240],
  [333, 2230, 15, 18, "plant", "green", 241],
  [350, 2230, 15, 18, "plant", "green", 242],
  [367, 2230, 32, 17, "plant", "green", 196],
  [401, 2230, 31, 17, "plant", "green", 197],
  [434, 2230, 26, 17, "plant", "green", 206],
  [462, 2230, 26, 17, "plant", "green", 207],
  [490, 2230, 18, 17, "plant", "green", 142],
  [510, 2230, 17, 17, "plant", "green", 186],
  [529, 2230, 17, 17, "plant", "green", 218],
  [548, 2230, 17, 17, "plant", "green", 271],
  [567, 2230, 16, 17, "plant", "green", 220],
  [585, 2230, 15, 17, "plant", "green", 243],
  [602, 2230, 15, 17, "plant", "green", 244],
  [619, 2230, 15, 17, "plant", "green", 245],
  [636, 2230, 13, 17, "plant", "green", 229],
  [651, 2230, 8, 17, "plant", "green", 3],
  [661, 2230, 8, 17, "plant", "green", 5],
  [671, 2230, 22, 16, "plant", "green", 199],
  [695, 2230, 20, 16, "plant", "green", 285],
  [717, 2230, 18, 16, "plant", "green", 58],
  [737, 2230, 18, 16, "plant", "green", 59],
  [757, 2230, 18, 16, "plant", "green", 60],
  [777, 2230, 18, 16, "plant", "green", 61],
  [797, 2230, 18, 16, "plant", "green", 150],
  [817, 2230, 18, 16, "plant", "green", 161],
  [837, 2230, 18, 16, "plant", "green", 174],
  [857, 2230, 17, 16, "plant", "green", 117],
  [876, 2230, 16, 16, "plant", "green", 91],
  [894, 2230, 16, 16, "plant", "green", 92],
  [912, 2230, 16, 16, "plant", "green", 93],
  [930, 2230, 16, 16, "plant", "green", 102],
  [948, 2230, 16, 16, "plant", "green", 103],
  [966, 2230, 16, 16, "plant", "green", 104],
  [984, 2230, 16, 16, "plant", "green", 116],
  [1002, 2230, 16, 16, "plant", "green", 278],
  [1020, 2230, 16, 16, "plant", "green", 304],
  [1038, 2230, 15, 16, "plant", "green", 114],
  [1055, 2230, 15, 16, "plant", "green", 118],
  [1072, 2230, 15, 16, "plant", "green", 124],
  [1089, 2230, 12, 16, "plant", "green", 156],
  [1103, 2230, 9, 16, "plant", "green", 138],
  [1114, 2230, 8, 16, "plant", "green", 226],
  [1124, 2230, 19, 15, "plant", "green", 87],
  [1145, 2230, 19, 15, "plant", "green", 88],
  [1166, 2230, 18, 15, "plant", "green", 143],
  [1186, 2230, 17, 15, "plant", "green", 152],
  [1205, 2230, 16, 15, "plant", "green", 168],
  [1223, 2230, 16, 15, "plant", "green", 198],
  [1241, 2230, 14, 15, "plant", "green", 273],
  [1257, 2230, 14, 15, "plant", "green", 274],
  [1273, 2230, 9, 15, "plant", "green", 163],
  [1284, 2230, 9, 15, "plant", "green", 183],
  [1295, 2230, 28, 14, "plant", "green", 159],
  [1325, 2230, 20, 14, "plant", "green", 72],
  [1347, 2230, 20, 14, "plant", "green", 73],
  [1369, 2230, 20, 14, "plant", "green", 74],
  [1391, 2230, 20, 14, "plant", "green", 75],
  [1413, 2230, 19, 14, "plant", "green", 237],
  [1434, 2230, 19, 14, "plant", "green", 253],
  [1455, 2230, 16, 14, "plant", "green", 2],
  [1473, 2230, 16, 14, "plant", "green", 6],
  [1491, 2230, 16, 14, "plant", "green", 7],
  [1509, 2230, 16, 14, "plant", "green", 19],
  [1527, 2230, 16, 14, "plant", "green", 20],
  [1545, 2230, 16, 14, "plant", "green", 34],
  [1563, 2230, 16, 14, "plant", "green", 35],
  [1581, 2230, 16, 14, "plant", "green", 47],
  [1599, 2230, 16, 14, "plant", "green", 48],
  [1617, 2230, 16, 14, "plant", "green", 76],
  [1635, 2230, 15, 14, "plant", "green", 119],
  [1652, 2230, 15, 14, "plant", "green", 120],
  [1669, 2230, 14, 14, "plant", "green", 55],
  [1685, 2230, 14, 14, "plant", "green", 56],
  [1701, 2230, 14, 14, "plant", "green", 57],
  [1717, 2230, 14, 14, "plant", "green", 62],
  [1733, 2230, 14, 14, "plant", "green", 99],
  [1749, 2230, 14, 14, "plant", "green", 100],
  [1765, 2230, 14, 14, "plant", "green", 101],
  [1781, 2230, 14, 14, "plant", "green", 105],
  [1797, 2230, 14, 14, "plant", "green", 125],
  [1813, 2230, 14, 14, "plant", "green", 128],
  [1829, 2230, 14, 14, "plant", "green", 129],
  [1845, 2230, 14, 14, "plant", "green", 130],
  [1861, 2230, 13, 14, "plant", "green", 154],
  [1876, 2230, 11, 14, "plant", "green", 181],
  [1889, 2230, 19, 13, "plant", "green", 250],
  [1910, 2230, 19, 13, "plant", "green", 251],
  [1931, 2230, 19, 13, "plant", "green", 252],
  [1952, 2230, 17, 13, "plant", "green", 247],
  [1971, 2230, 15, 13, "plant", "green", 171],
  [1988, 2230, 15, 13, "plant", "green", 180],
  [2005, 2230, 14, 13, "plant", "green", 280],
  [2021, 2230, 13, 13, "plant", "green", 21],
  [0, 2251, 13, 13, "plant", "green", 113],
  [15, 2251, 13, 13, "plant", "green", 115],
  [30, 2251, 13, 13, "plant", "green", 121],
  [45, 2251, 13, 13, "plant", "green", 122],
  [60, 2251, 13, 13, "plant", "green", 137],
  [75, 2251, 13, 13, "plant", "green", 139],
  [90, 2251, 13, 13, "plant", "green", 140],
  [105, 2251, 13, 13, "plant", "green", 141],
  [120, 2251, 13, 13, "plant", "green", 157],
  [135, 2251, 12, 13, "plant", "green", 123],
  [149, 2251, 12, 13, "plant", "green", 169],
  [163, 2251, 11, 13, "plant", "green", 27],
  [176, 2251, 11, 13, "plant", "green", 28],
  [189, 2251, 11, 13, "plant", "green", 29],
  [202, 2251, 11, 13, "plant", "green", 30],
  [215, 2251, 11, 13, "plant", "green", 54],
  [228, 2251, 11, 13, "plant", "green", 68],
  [241, 2251, 11, 13, "plant", "green", 69],
  [254, 2251, 11, 13, "plant", "green", 70],
  [267, 2251, 11, 13, "plant", "green", 71],
  [280, 2251, 11, 13, "plant", "green", 269],
  [293, 2251, 11, 13, "plant", "green", 270],
  [306, 2251, 8, 13, "plant", "green", 233],
  [316, 2251, 16, 12, "plant", "green", 8],
  [334, 2251, 16, 12, "plant", "green", 49],
  [352, 2251, 16, 12, "plant", "green", 205],
  [370, 2251, 15, 12, "plant", "green", 308],
  [387, 2251, 14, 12, "plant", "green", 275],
  [403, 2251, 13, 12, "plant", "green", 155],
  [418, 2251, 12, 12, "plant", "green", 145],
  [432, 2251, 12, 12, "plant", "green", 146],
  [446, 2251, 12, 12, "plant", "green", 158],
  [460, 2251, 12, 12, "plant", "green", 221],
  [474, 2251, 12, 12, "plant", "green", 222],
  [488, 2251, 16, 11, "plant", "green", 170],
  [506, 2251, 14, 11, "plant", "green", 13],
  [522, 2251, 14, 11, "plant", "green", 14],
  [538, 2251, 14, 11, "plant", "green", 36],
  [554, 2251, 14, 11, "plant", "green", 40],
  [570, 2251, 13, 11, "plant", "green", 11],
  [585, 2251, 13, 11, "plant", "green", 12],
  [600, 2251, 13, 11, "plant", "green", 39],
  [615, 2251, 13, 11, "plant", "green", 45],
  [630, 2251, 13, 11, "plant", "green", 46],
  [645, 2251, 10, 11, "plant", "green", 267],
  [657, 2251, 10, 11, "plant", "green", 268],
  [669, 2251, 16, 10, "plant", "green", 4],
  [687, 2251, 16, 10, "plant", "green", 22],
  [705, 2251, 16, 10, "plant", "green", 37],
  [723, 2251, 10, 10, "plant", "green", 77],
  [735, 2251, 10, 10, "plant", "green", 78],
  [747, 2251, 10, 10, "plant", "green", 79],
];

// ws:src/noise.js
function clamp(v, a, b) {
  return v < a ? a : v > b ? b : v;
}
function lerp(a, b, t) {
  return a + (b - a) * t;
}
function smoothstep(edge0, edge1, x) {
  const t = clamp((x - edge0) / (edge1 - edge0), 0, 1);
  return t * t * (3 - 2 * t);
}
function hashInt(x) {
  x = Math.imul(x ^ (x >>> 16), 2146121005);
  x = Math.imul(x ^ (x >>> 15), 2221713035);
  return (x ^ (x >>> 16)) >>> 0;
}
function hash2i(ix, iy, seed) {
  const h = hashInt(
    Math.imul(ix | 0, 668265261) ^ hashInt((iy | 0) ^ hashInt(seed | 0)),
  );
  return h / 4294967296;
}
function mulberry32(seed) {
  let a = seed >>> 0;
  return function () {
    a = (a + 1831565813) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
function fade(t) {
  return t * t * t * (t * (t * 6 - 15) + 10);
}
function valueNoise2D(x, y, seed) {
  const ix = Math.floor(x),
    iy = Math.floor(y);
  const u = fade(x - ix),
    v = fade(y - iy);
  const n00 = hash2i(ix, iy, seed);
  const n10 = hash2i(ix + 1, iy, seed);
  const n01 = hash2i(ix, iy + 1, seed);
  const n11 = hash2i(ix + 1, iy + 1, seed);
  const a = n00 + (n10 - n00) * u;
  const b = n01 + (n11 - n01) * u;
  return a + (b - a) * v;
}
function fbm2D(x, y, seed, octaves = 5, lacunarity = 2, gain = 0.5) {
  let total = 0,
    amp = 1,
    norm = 0,
    fx = x,
    fy = y;
  for (let i = 0; i < octaves; i++) {
    total += valueNoise2D(fx, fy, seed + i * 131) * amp;
    norm += amp;
    amp *= gain;
    fx *= lacunarity;
    fy *= lacunarity;
  }
  return total / norm;
}
function ridge2D(x, y, seed, octaves = 5, lacunarity = 2, gain = 0.5) {
  let total = 0,
    amp = 1,
    norm = 0,
    fx = x,
    fy = y;
  for (let i = 0; i < octaves; i++) {
    const n = 1 - Math.abs(valueNoise2D(fx, fy, seed + i * 977) * 2 - 1);
    total += n * n * amp;
    norm += amp;
    amp *= gain;
    fx *= lacunarity;
    fy *= lacunarity;
  }
  return total / norm;
}

// ws:src/render.js
var CACHE_SIZES = [512, 1024, 2048, 4096];
function planCell(corners, salt) {
  const uniq = [];
  for (let k = 0; k < 4; k++) {
    const t = corners[k];
    if (!uniq.includes(t)) uniq.push(t);
  }
  uniq.sort((a, b) => (RANK[a] ?? -1) - (RANK[b] ?? -1));
  const ids = [];
  const first = uniq[0];
  ids.push(fillId(first, salt));
  for (const t of uniq) {
    let m = 0;
    for (let k = 0; k < 4; k++) if (corners[k] === t) m |= 1 << k;
    const cell = MASKS[t] ? MASKS[t][m] : 0;
    if (!cell) continue;
    ids.push(Array.isArray(cell) ? cell[salt % cell.length] : cell);
  }
  return ids;
}
function fillId(t, salt) {
  const cell = MASKS[t] ? MASKS[t][15] : 0;
  if (Array.isArray(cell) && cell.length) return cell[salt % cell.length];
  if (typeof cell === "number" && cell) return cell;
  return BASE[t];
}
function tileKey(ids) {
  let s = "";
  for (let i = 0; i < ids.length; i++)
    s += ids[i] + (i === ids.length - 1 ? "" : ",");
  return s;
}
var Renderer = class {
  constructor() {
    this.terrainImg = null;
    this.propImg = null;
    this.ready = false;
    this.cacheLevel = 0;
    this.cacheCanvas = null;
    this.cacheCtx = null;
    this.cacheMap = /* @__PURE__ */ new Map();
    this.cacheCursor = 0;
    this.composeCount = 0;
    this.shadowCache = /* @__PURE__ */ new Map();
    this._alloc(0);
  }
  async load(assets = {}) {
    const [t, p] = await Promise.all([
      loadImage(assets.tilesetUrl || TILESET_IMAGE),
      loadImage(assets.propsUrl || PROPS_IMAGE),
    ]);
    this.terrainImg = t;
    this.propImg = p;
    this.ready = true;
    return this;
  }
  _alloc(level) {
    const size = CACHE_SIZES[level];
    this.cacheLevel = level;
    this.cacheCanvas = new OffscreenCanvas(size, size);
    this.cacheCtx = this.cacheCanvas.getContext("2d");
    this.cacheCtx.imageSmoothingEnabled = false;
    this.cols = size / TILE;
    this.cacheMap = /* @__PURE__ */ new Map();
    this.cacheCursor = 0;
    if (this.slotMap) this.slotMap.fill(-1);
    this.worldImage = null;
    this.worldImageWorld = null;
  }
  invalidate() {
    this.cacheMap.clear();
    this.cacheCursor = 0;
    if (this.slotMap) this.slotMap.fill(-1);
    this.worldImage = null;
    this.worldImageWorld = null;
  }
  pptFor(world) {
    return clamp(Math.floor(4096 / Math.max(world.W, world.H)), 8, 32);
  }
  worldImageValid(world) {
    return !!(
      this.worldImage &&
      this.worldImageWorld === world &&
      world.W * this.worldImagePpt === this.worldImage.width
    );
  }
  ensureWorldImage(world) {
    const ppt = this.pptFor(world);
    if (this.worldImageValid(world) && this.worldImagePpt === ppt)
      return this.worldImage;
    const w = Math.max(1, world.W * ppt),
      h = Math.max(1, world.H * ppt);
    const c = new OffscreenCanvas(w, h);
    const g = c.getContext("2d");
    g.imageSmoothingEnabled = true;
    this.ensureSlotMap(world);
    for (let ty = 0; ty < world.H; ty++) {
      for (let tx = 0; tx < world.W; tx++) {
        const slot = this.slotFor(world, tx, ty);
        g.drawImage(
          this.cacheCanvas,
          (slot % this.cols) * TILE,
          Math.floor(slot / this.cols) * TILE,
          TILE,
          TILE,
          tx * ppt,
          ty * ppt,
          ppt,
          ppt,
        );
      }
    }
    this.worldImage = c;
    this.worldImageCtx = g;
    this.worldImagePpt = ppt;
    this.worldImageWorld = world;
    return c;
  }
  patchWorldImage(world, x0, y0, x1, y1) {
    if (!this.worldImageValid(world)) return;
    const ppt = this.worldImagePpt;
    const g = this.worldImageCtx;
    g.imageSmoothingEnabled = true;
    const W = world.W,
      H = world.H;
    const ax = Math.max(0, x0),
      bx = Math.min(W - 1, x1);
    const ay = Math.max(0, y0),
      by = Math.min(H - 1, y1);
    for (let y = ay; y <= by; y++) {
      for (let x = ax; x <= bx; x++) {
        const slot = this.slotFor(world, x, y);
        g.drawImage(
          this.cacheCanvas,
          (slot % this.cols) * TILE,
          Math.floor(slot / this.cols) * TILE,
          TILE,
          TILE,
          x * ppt,
          y * ppt,
          ppt,
          ppt,
        );
      }
    }
  }
  ensureSlotMap(world) {
    if (this.slotMap && this.slotW === world.W && this.slotH === world.H)
      return;
    this.slotMap = new Int32Array(world.W * world.H).fill(-1);
    this.slotW = world.W;
    this.slotH = world.H;
  }
  cornersFor(world, tx, ty) {
    const c = world.corners,
      cw = world.cw;
    const r0 = ty * cw,
      r1 = (ty + 1) * cw;
    return [c[r0 + tx], c[r0 + tx + 1], c[r1 + tx], c[r1 + tx + 1]];
  }
  slotFor(world, tx, ty) {
    const i = ty * this.slotW + tx;
    const s = this.slotMap[i];
    if (s >= 0) return s;
    const v = this.cellSlot(this.cornersFor(world, tx, ty), tx, ty);
    this.slotMap[i] = v;
    return v;
  }
  invalidateCells(x0, y0, x1, y1) {
    if (!this.slotMap) return;
    const W = this.slotW,
      H = this.slotH;
    const ax = Math.max(0, x0),
      bx = Math.min(W - 1, x1);
    const ay = Math.max(0, y0),
      by = Math.min(H - 1, y1);
    for (let y = ay; y <= by; y++) {
      const row = y * W;
      for (let x = ax; x <= bx; x++) this.slotMap[row + x] = -1;
    }
    if (this.worldImageWorld)
      this.patchWorldImage(this.worldImageWorld, ax, ay, bx, by);
  }
  cellSlot(corners, tx, ty) {
    const salt = hash2i(tx, ty, 40503) >>> 0;
    const ids = planCell(corners, salt);
    const key = tileKey(ids);
    let slot = this.cacheMap.get(key);
    if (slot !== void 0) return slot;
    if (this.cacheCursor >= this.cols * this.cols) {
      if (this.cacheLevel + 1 < CACHE_SIZES.length)
        this._alloc(this.cacheLevel + 1);
      else {
        this.invalidate();
      }
    }
    slot = this.cacheCursor++;
    const sx = (slot % this.cols) * TILE;
    const sy = Math.floor(slot / this.cols) * TILE;
    const ctx = this.cacheCtx;
    for (const id of ids) {
      const ix = (id % COLUMNS) * TILE;
      const iy = Math.floor(id / COLUMNS) * TILE;
      ctx.drawImage(this.terrainImg, ix, iy, TILE, TILE, sx, sy, TILE, TILE);
    }
    this.composeCount++;
    this.cacheMap.set(key, slot);
    return slot;
  }
  drawCell(ctx, world, tx, ty, dx, dy, ts) {
    const slot = this.slotFor(world, tx, ty);
    const sx = (slot % this.cols) * TILE;
    const sy = Math.floor(slot / this.cols) * TILE;
    const size = ts || TILE;
    ctx.drawImage(this.cacheCanvas, sx, sy, TILE, TILE, dx, dy, size, size);
  }
  shadowSprite(w, h) {
    const key = Math.round(w) + "x" + Math.round(h);
    let c = this.shadowCache.get(key);
    if (c) return c;
    const rx = Math.max(3, w * 0.34),
      ry = Math.max(2, rx * 0.4);
    const pad = 2;
    c = new OffscreenCanvas(
      Math.ceil(rx * 2 + pad * 2),
      Math.ceil(ry * 2 + pad * 2),
    );
    const g = c.getContext("2d");
    const grad = g.createRadialGradient(
      c.width / 2,
      c.height / 2,
      0,
      c.width / 2,
      c.height / 2,
      Math.max(c.width, c.height) / 2,
    );
    grad.addColorStop(0, "rgba(0,0,0,0.30)");
    grad.addColorStop(0.55, "rgba(0,0,0,0.18)");
    grad.addColorStop(1, "rgba(0,0,0,0)");
    g.fillStyle = grad;
    g.save();
    g.translate(c.width / 2, c.height / 2);
    g.scale(1, ry / rx);
    g.beginPath();
    g.arc(0, 0, rx, 0, Math.PI * 2);
    g.fill();
    g.restore();
    this.shadowCache.set(key, c);
    return c;
  }
  drawPropShadow(ctx, prop) {
    const row = PROPS[prop.s];
    if (!row) return;
    const kind = row[4];
    if (kind === "plant") return;
    const sc = prop.sc || 1;
    const w = row[2] * sc,
      h = row[3] * sc;
    const sh = this.shadowSprite(w, h);
    ctx.drawImage(
      sh,
      Math.round(prop.x - sh.width / 2),
      Math.round(prop.y - sh.height * 0.52),
    );
  }
  drawProp(ctx, prop) {
    const row = PROPS[prop.s];
    if (!row) return;
    const sc = prop.sc || 1;
    const [sx, sy, rw, rh] = row;
    const w = rw * sc,
      h = rh * sc;
    const dx = Math.round(prop.x - w / 2);
    const dy = Math.round(prop.y - h);
    if (prop.flip) {
      ctx.save();
      ctx.translate(dx + w, dy);
      ctx.scale(-1, 1);
      ctx.drawImage(this.propImg, sx, sy, w, h, 0, 0, w, h);
      ctx.restore();
    } else {
      ctx.drawImage(this.propImg, sx, sy, w, h, dx, dy, w, h);
    }
  }
  render(ctx, world, view, canvasW, canvasH, opts = {}) {
    const z = view.zoom;
    const dpr = opts.dpr || 1;
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.imageSmoothingEnabled = false;
    ctx.fillStyle = opts.background || "#101418";
    ctx.fillRect(0, 0, canvasW, canvasH);
    if (!this.ready) return;
    const tx0 = clamp(Math.floor(view.x / TILE), 0, world.W - 1);
    const ty0 = clamp(Math.floor(view.y / TILE), 0, world.H - 1);
    const tx1 = clamp(
      Math.ceil((view.x + canvasW / (z * dpr)) / TILE),
      0,
      world.W - 1,
    );
    const ty1 = clamp(
      Math.ceil((view.y + canvasH / (z * dpr)) / TILE),
      0,
      world.H - 1,
    );
    ctx.setTransform(
      z * dpr,
      0,
      0,
      z * dpr,
      -view.x * z * dpr,
      -view.y * z * dpr,
    );
    const viewW = canvasW / (z * dpr),
      viewH = canvasH / (z * dpr);
    this.ensureSlotMap(world);
    const ppt = this.pptFor(world);
    if (z * TILE * dpr <= ppt) {
      const img = this.ensureWorldImage(world);
      const scale = TILE / ppt;
      const eff = (z * TILE * dpr) / ppt;
      ctx.imageSmoothingEnabled = eff < 0.9;
      ctx.imageSmoothingQuality = "low";
      ctx.drawImage(
        img,
        view.x / scale,
        view.y / scale,
        viewW / scale,
        viewH / scale,
        view.x,
        view.y,
        viewW,
        viewH,
      );
      ctx.imageSmoothingEnabled = false;
    } else {
      for (let ty = ty0; ty <= ty1; ty++) {
        for (let tx = tx0; tx <= tx1; tx++) {
          this.drawCell(ctx, world, tx, ty, tx * TILE, ty * TILE);
        }
      }
    }
    if (opts.showFields) {
      this.drawFieldOverlay(ctx, world, opts.showFields, tx0, ty0, tx1, ty1);
    }
    if (opts.grid && z >= 0.75) {
      ctx.strokeStyle = "rgba(255,255,255,0.16)";
      ctx.lineWidth = 1 / (z * dpr);
      ctx.beginPath();
      for (let tx = tx0; tx <= tx1 + 1; tx++) {
        ctx.moveTo(tx * TILE, ty0 * TILE);
        ctx.lineTo(tx * TILE, (ty1 + 1) * TILE);
      }
      for (let ty = ty0; ty <= ty1 + 1; ty++) {
        ctx.moveTo(tx0 * TILE, ty * TILE);
        ctx.lineTo((tx1 + 1) * TILE, ty * TILE);
      }
      ctx.stroke();
    }
    const props = world.props;
    const yMax = (ty1 + 2) * TILE;
    const yMin = ty0 * TILE - 400;
    let start = 0,
      end = props.length;
    while (start < end && props[start].y < yMin) start++;
    while (end > start && props[end - 1].y > yMax) end--;
    if (!opts.hideShadows) {
      for (let i = start; i < end; i++) {
        const p = props[i];
        if (p.x < view.x - 400 || p.x > view.x + canvasW / (z * dpr) + 400)
          continue;
        this.drawPropShadow(ctx, p);
      }
    }
    if (!opts.hideProps) {
      for (let i = start; i < end; i++) this.drawProp(ctx, props[i]);
    }
    if (opts.selectedProp != null && props[opts.selectedProp]) {
      const p = props[opts.selectedProp];
      const row = PROPS[p.s];
      const sc = p.sc || 1;
      ctx.strokeStyle = "#ffd34d";
      ctx.lineWidth = 1.5 / (z * dpr);
      ctx.strokeRect(
        p.x - (row[2] * sc) / 2,
        p.y - row[3] * sc,
        row[2] * sc,
        row[3] * sc,
      );
    }
    ctx.setTransform(1, 0, 0, 1, 0, 0);
  }
  drawFieldOverlay(ctx, world, fieldName, tx0, ty0, tx1, ty1) {
    const f = world.fields[fieldName];
    if (!f) return;
    ctx.save();
    for (let ty = ty0; ty <= ty1; ty++) {
      for (let tx = tx0; tx <= tx1; tx++) {
        let sum = 0;
        for (const [ox, oy] of [
          [0, 0],
          [1, 0],
          [0, 1],
          [1, 1],
        ])
          sum += f[(ty + oy) * world.cw + tx + ox];
        const v = sum / 4;
        ctx.fillStyle = rampColor(v, fieldName);
        ctx.fillRect(tx * TILE, ty * TILE, TILE, TILE);
      }
    }
    ctx.restore();
  }
  renderFull(world, scale, opts = {}) {
    const W = Math.round(world.W * TILE * scale);
    const H = Math.round(world.H * TILE * scale);
    const canvas = new OffscreenCanvas(W, H);
    const ctx = canvas.getContext("2d");
    ctx.imageSmoothingEnabled = scale < 1;
    this.invalidate();
    this.ensureSlotMap(world);
    for (let ty = 0; ty < world.H; ty++) {
      const r0 = ty * world.cw,
        r1 = (ty + 1) * world.cw;
      for (let tx = 0; tx < world.W; tx++) {
        this.drawCell(
          ctx,
          world,
          tx,
          ty,
          Math.round(tx * TILE * scale),
          Math.round(ty * TILE * scale),
          Math.round(TILE * scale),
        );
      }
    }
    if (!opts.hideShadows)
      for (const p of world.props) {
        const row = PROPS[p.s];
        if (!row || row[4] === "plant") continue;
        const sc = p.sc || 1;
        const sh = this.shadowSprite(row[2] * sc * scale, row[3] * sc * scale);
        ctx.drawImage(
          sh,
          Math.round(p.x * scale - sh.width / 2),
          Math.round((p.y - row[3] * sc * 0.42) * scale - sh.height / 2),
        );
      }
    if (!opts.hideProps)
      for (const p of world.props) {
        const row = PROPS[p.s];
        if (!row) continue;
        const sc = p.sc || 1;
        const [sx, sy, rw, rh] = row;
        const w = rw * sc,
          h = rh * sc;
        const dx = Math.round((p.x - w / 2) * scale),
          dy = Math.round((p.y - h) * scale);
        if (p.flip) {
          ctx.save();
          ctx.translate(dx + w * scale, dy);
          ctx.scale(-1, 1);
          ctx.drawImage(
            this.propImg,
            sx,
            sy,
            rw,
            rh,
            0,
            0,
            w * scale,
            h * scale,
          );
          ctx.restore();
        } else {
          ctx.drawImage(
            this.propImg,
            sx,
            sy,
            rw,
            rh,
            dx,
            dy,
            w * scale,
            h * scale,
          );
        }
      }
    return canvas;
  }
  renderMinimap(world, size) {
    const mw = size,
      mh = Math.max(1, Math.round((size * world.H) / world.W));
    const c = new OffscreenCanvas(mw, mh);
    const ctx = c.getContext("2d");
    if (!this.ready) return c;
    const img = this.ensureWorldImage(world);
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = "medium";
    ctx.drawImage(img, 0, 0, img.width, img.height, 0, 0, mw, mh);
    return c;
  }
};
var RAMPS = {
  elev: [
    [8, 22, 48],
    [24, 76, 128],
    [60, 140, 90],
    [140, 170, 80],
    [150, 130, 100],
    [235, 235, 240],
  ],
  water: [
    [8, 20, 40],
    [40, 120, 200],
    [190, 230, 255],
  ],
  depth: [
    [10, 20, 40],
    [30, 90, 170],
    [130, 200, 250],
  ],
  moist: [
    [180, 140, 70],
    [160, 190, 110],
    [40, 110, 190],
  ],
  temp: [
    [60, 90, 200],
    [90, 180, 160],
    [220, 190, 90],
    [220, 90, 60],
  ],
  rock: [
    [60, 60, 66],
    [150, 150, 150],
    [240, 240, 240],
  ],
  flow: [
    [20, 30, 40],
    [70, 160, 220],
  ],
  distWater: [
    [20, 60, 140],
    [200, 220, 240],
  ],
};
function rampColor(v, name) {
  const ramp = RAMPS[name] || RAMPS.elev;
  const t = clamp(v, 0, 1) * (ramp.length - 1);
  const i = Math.min(ramp.length - 2, Math.floor(t));
  const f = t - i;
  const a = ramp[i],
    b = ramp[i + 1];
  const r = Math.round(a[0] + (b[0] - a[0]) * f);
  const g = Math.round(a[1] + (b[1] - a[1]) * f);
  const bl = Math.round(a[2] + (b[2] - a[2]) * f);
  return `rgb(${r},${g},${bl})`;
}
function loadImage(src) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.onload = () => resolve(img);
    img.onerror = () => reject(new Error("failed to load " + src));
    img.src = new URL(src, import.meta.url).href;
  });
}

// ws:src/editor.js
var MIN_ZOOM = 0.03;
var MAX_ZOOM = 8;
var Editor = class {
  constructor(renderer) {
    this.renderer = renderer;
    this.world = null;
    this.canvas = null;
    this.ctx = null;
    this.view = { x: 0, y: 0, zoom: 1 };
    this.opts = {
      grid: true,
      props: true,
      shadows: true,
      field: "",
      selectedProp: -1,
    };
    this.tool = "brush";
    this.terrain = TERRAIN_INDEX.Grass;
    this.propIndex = -1;
    this.propScale = 1;
    this.brushSize = 4;
    this.shape = "square";
    this._undoStack = [];
    this._redoStack = [];
    this._undoBytes = 0;
    this.maxHistBytes = 96 * 1024 * 1024;
    this.dirty = false;
    this.pointer = { tx: 0, ty: 0, px: 0, py: 0, inside: false };
    this.selectedProp = -1;
    this.minimapCanvas = null;
    this.minimapDirty = true;
    this.minimapSize = 320;
    this.onStatus = () => {};
    this.onChange = () => {};
    this.onHistory = () => {};
    this.onDirty = () => {};
    this._dragging = null;
    this._panning = null;
    this._space = false;
    this._paintLast = null;
    this._pendingSnap = null;
    this._raf = 0;
  }
  attach(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d", { alpha: false });
    const cv = canvas;
    const onDown = (e) => this._onDown(e);
    const onMove = (e) => this._onMove(e);
    const onUp = (e) => this._onUp(e);
    const onLeave = () => {
      this.pointer.inside = false;
      this.requestDraw();
    };
    const onWheel = (e) => this._onWheel(e);
    const onCtx = (e) => e.preventDefault();
    const onKeyDown = (e) => this._onKey(e);
    const onKeyUp = (e) => {
      if (e.code === "Space") {
        this._space = false;
        this._syncCursor();
      }
    };
    cv.addEventListener("pointerdown", onDown);
    cv.addEventListener("pointermove", onMove);
    cv.addEventListener("pointerup", onUp);
    cv.addEventListener("pointercancel", onUp);
    cv.addEventListener("pointerleave", onLeave);
    cv.addEventListener("wheel", onWheel, { passive: false });
    cv.addEventListener("contextmenu", onCtx);
    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("keyup", onKeyUp);
    this._teardown = () => {
      cv.removeEventListener("pointerdown", onDown);
      cv.removeEventListener("pointermove", onMove);
      cv.removeEventListener("pointerup", onUp);
      cv.removeEventListener("pointercancel", onUp);
      cv.removeEventListener("pointerleave", onLeave);
      cv.removeEventListener("wheel", onWheel);
      cv.removeEventListener("contextmenu", onCtx);
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("keyup", onKeyUp);
    };
    this.resize();
  }
  detach() {
    if (this._teardown) {
      this._teardown();
      this._teardown = null;
    }
    if (this._raf) {
      cancelAnimationFrame(this._raf);
      this._raf = 0;
    }
    this.canvas = null;
    this.ctx = null;
  }
  setWorld(world, keepView) {
    this.world = world;
    this.selectedProp = -1;
    this.opts.selectedProp = -1;
    this._undoStack = [];
    this._redoStack = [];
    this._undoBytes = 0;
    this._pendingSnap = null;
    this.minimapDirty = true;
    if (!keepView) this.fit();
    this.onHistory();
    this.markDirty(false);
    this.status();
    this.requestDraw();
  }
  resize() {
    if (!this.canvas) return;
    const r = this.canvas.getBoundingClientRect();
    const dpr = Math.min(2, window.devicePixelRatio || 1);
    const w = Math.max(64, Math.round(r.width * dpr));
    const h = Math.max(64, Math.round(r.height * dpr));
    if (this.canvas.width !== w || this.canvas.height !== h) {
      this.canvas.width = w;
      this.canvas.height = h;
      this.dpr = dpr;
    }
    this.requestDraw();
  }
  get viewW() {
    return this.canvas.width / this.dpr;
  }
  get viewH() {
    return this.canvas.height / this.dpr;
  }
  fit() {
    const w = this.world;
    if (!w || !this.canvas) return;
    const pad = 24;
    const zx = (this.viewW - pad * 2) / (w.W * TILE);
    const zy = (this.viewH - pad * 2) / (w.H * TILE);
    this.view.zoom = Math.max(MIN_ZOOM, Math.min(MAX_ZOOM, Math.min(zx, zy)));
    this.centerOn((w.W * TILE) / 2, (w.H * TILE) / 2);
  }
  centerOn(worldX, worldY) {
    this.view.x = worldX - this.viewW / (2 * this.view.zoom);
    this.view.y = worldY - this.viewH / (2 * this.view.zoom);
    this.clampView();
    this.requestDraw();
  }
  zoomAt(screenX, screenY, factor) {
    const wx = this.view.x + screenX / this.view.zoom;
    const wy = this.view.y + screenY / this.view.zoom;
    this.view.zoom = Math.max(
      MIN_ZOOM,
      Math.min(MAX_ZOOM, this.view.zoom * factor),
    );
    this.view.x = wx - screenX / this.view.zoom;
    this.view.y = wy - screenY / this.view.zoom;
    this.clampView();
    this.requestDraw();
  }
  clampView() {
    const w = this.world;
    if (!w) return;
    const mw = w.W * TILE,
      mh = w.H * TILE;
    const vw = this.viewW / this.view.zoom,
      vh = this.viewH / this.view.zoom;
    const slackX = mw * 0.6,
      slackY = mh * 0.6;
    this.view.x = Math.max(-slackX, Math.min(mw - vw + slackX, this.view.x));
    this.view.y = Math.max(-slackY, Math.min(mh - vh + slackY, this.view.y));
  }
  screenToWorld(sx, sy) {
    return {
      x: this.view.x + sx / this.view.zoom,
      y: this.view.y + sy / this.view.zoom,
    };
  }
  worldToScreen(wx, wy) {
    return {
      x: (wx - this.view.x) * this.view.zoom,
      y: (wy - this.view.y) * this.view.zoom,
    };
  }
  localPointer(e) {
    const r = this.canvas.getBoundingClientRect();
    return { x: e.clientX - r.left, y: e.clientY - r.top };
  }
  markDirty(v) {
    if (this.dirty === v) return;
    this.dirty = v;
    this.onDirty(v);
  }
  requestDraw() {
    if (this._raf) return;
    this._raf = requestAnimationFrame(() => {
      this._raf = 0;
      this.draw();
    });
  }
  draw() {
    const w = this.world;
    if (!w || !this.canvas) return;
    const ctx = this.ctx;
    const dpr = this.dpr;
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.fillStyle = "#080b0f";
    ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    this.renderer.render(
      ctx,
      w,
      this.view,
      this.canvas.width,
      this.canvas.height,
      {
        dpr,
        background: "#0a1420",
        grid: this.opts.grid && this.view.zoom >= 0.5,
        hideProps: !this.opts.props,
        hideShadows: !this.opts.shadows,
        showFields: this.opts.field || false,
        selectedProp:
          this.opts.selectedProp >= 0 ? this.opts.selectedProp : null,
      },
    );
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    this._drawOverlay(ctx);
    ctx.setTransform(1, 0, 0, 1, 0, 0);
  }
  _drawOverlay(ctx) {
    const p = this.pointer;
    if (!p.inside || !this.world) return;
    if (this.tool === "pan") return;
    if (this.tool === "prop" && this.propIndex >= 0) {
      const row = PROPS[this.propIndex];
      if (!row) return;
      const sc2 = this.propScale * this.view.zoom;
      const w = row[2] * sc2,
        h = row[3] * sc2;
      const s = this.worldToScreen(p.px, p.py);
      ctx.globalAlpha = 0.72;
      ctx.imageSmoothingEnabled = false;
      ctx.drawImage(
        this.renderer.propImg,
        row[0],
        row[1],
        row[2],
        row[3],
        s.x - w / 2,
        s.y - h,
        w,
        h,
      );
      ctx.globalAlpha = 0.9;
      ctx.strokeStyle = "#ffca45";
      ctx.lineWidth = 1;
      ctx.strokeRect(
        Math.round(s.x - w / 2) + 0.5,
        Math.round(s.y - h) + 0.5,
        Math.round(w),
        Math.round(h),
      );
      ctx.globalAlpha = 1;
      return;
    }
    if (this.tool === "select") return;
    if (
      this._dragging &&
      (this._dragging.tool === "rect" || this._dragging.tool === "line")
    ) {
      this._drawDragPreview(ctx);
      return;
    }
    const cell = this._brushCells(p.tx, p.ty);
    if (!cell.length) return;
    const sc = this.view.zoom;
    ctx.strokeStyle = "rgba(255,202,69,0.85)";
    ctx.lineWidth = 1;
    ctx.beginPath();
    for (const c of cell) {
      const s = this.worldToScreen(c[0] * TILE, c[1] * TILE);
      const x = Math.round(s.x) + 0.5,
        y = Math.round(s.y) + 0.5,
        z = Math.round(TILE * sc);
      ctx.rect(x, y, z, z);
    }
    ctx.stroke();
    if (this.view.zoom >= 0.6) {
      ctx.fillStyle = "rgba(255,202,69,0.10)";
      ctx.fill();
    }
  }
  _drawDragPreview(ctx) {
    const d = this._dragging;
    const zoom = this.view.zoom;
    ctx.strokeStyle = "rgba(255,202,69,0.9)";
    ctx.lineWidth = 1;
    ctx.beginPath();
    if (d.tool === "line") {
      const z = Math.round(TILE * zoom);
      for (const c of this._lineCells(d.tx0, d.ty0, d.tx, d.ty)) {
        const s = this.worldToScreen(c[0] * TILE, c[1] * TILE);
        ctx.rect(Math.round(s.x) + 0.5, Math.round(s.y) + 0.5, z, z);
      }
    } else {
      const ax = Math.min(d.tx0, d.tx),
        bx = Math.max(d.tx0, d.tx);
      const ay = Math.min(d.ty0, d.ty),
        by = Math.max(d.ty0, d.ty);
      const a = this.worldToScreen(ax * TILE, ay * TILE);
      const b = this.worldToScreen((bx + 1) * TILE, (by + 1) * TILE);
      if (this.shape === "round") {
        ctx.ellipse(
          (a.x + b.x) / 2,
          (a.y + b.y) / 2,
          Math.abs(b.x - a.x) / 2,
          Math.abs(b.y - a.y) / 2,
          0,
          0,
          Math.PI * 2,
        );
      } else {
        ctx.rect(
          Math.round(a.x) + 0.5,
          Math.round(a.y) + 0.5,
          Math.round(b.x - a.x),
          Math.round(b.y - a.y),
        );
      }
    }
    ctx.stroke();
    ctx.fillStyle = "rgba(255,202,69,0.12)";
    ctx.fill();
  }
  _brushCells(cx, cy) {
    const n = this.brushSize;
    const x0 = cx - Math.floor((n - 1) / 2);
    const y0 = cy - Math.floor((n - 1) / 2);
    const out = [];
    if (n <= 1) {
      out.push([cx, cy]);
      return out;
    }
    if (this.shape === "square") {
      for (let y = y0; y < y0 + n; y++)
        for (let x = x0; x < x0 + n; x++) out.push([x, y]);
    } else {
      const c = (n - 1) / 2,
        r = n / 2 - 0.5;
      for (let y = 0; y < n; y++)
        for (let x = 0; x < n; x++) {
          const dx = x - c,
            dy = y - c;
          if (dx * dx + dy * dy <= r * r) out.push([x0 + x, y0 + y]);
        }
    }
    return out;
  }
  _onDown(e) {
    if (!this.world) return;
    try {
      this.canvas.setPointerCapture(e.pointerId);
    } catch (err) {}
    const lp = this.localPointer(e);
    const wp = this.screenToWorld(lp.x, lp.y);
    const tx = Math.floor(wp.x / TILE),
      ty = Math.floor(wp.y / TILE);
    if (
      e.button === 1 ||
      this._space ||
      this.tool === "pan" ||
      (e.button === 2 && this.tool === "pan")
    ) {
      this._panning = { sx: lp.x, sy: lp.y, vx: this.view.x, vy: this.view.y };
      this.canvas.classList.add("panning");
      e.preventDefault();
      return;
    }
    if (this.tool === "pick") {
      this.pickTerrain(tx, ty);
      return;
    }
    if (this.tool === "select") {
      this._selectDown(tx, ty, wp, e);
      return;
    }
    if (this.tool === "prop") {
      this._beginOp("prop");
      if (e.shiftKey || e.button === 2) this.erasePropAt(wp.x, wp.y);
      else this.placeProp(wp.x, wp.y);
      this._commitOp();
      return;
    }
    if (tx < 0 || ty < 0 || tx >= this.world.W || ty >= this.world.H) return;
    this._beginOp(this.tool);
    if (this.tool === "fill") {
      this.floodFill(tx, ty);
      this._commitOp();
      this._paintLast = null;
      return;
    }
    this._dragging = { tool: this.tool, tx0: tx, ty0: ty, tx, ty };
    this._paintLast = null;
    if (this.tool === "brush") this._paintStroke(tx, ty);
    this.requestDraw();
  }
  _onMove(e) {
    if (!this.world) return;
    const lp = this.localPointer(e);
    const wp = this.screenToWorld(lp.x, lp.y);
    const tx = Math.floor(wp.x / TILE),
      ty = Math.floor(wp.y / TILE);
    this.pointer.px = wp.x;
    this.pointer.py = wp.y;
    this.pointer.tx = tx;
    this.pointer.ty = ty;
    this.pointer.inside = true;
    if (this._panning) {
      this.view.x =
        this._panning.vx - (lp.x - this._panning.sx) / this.view.zoom;
      this.view.y =
        this._panning.vy - (lp.y - this._panning.sy) / this.view.zoom;
      this.clampView();
      this.requestDraw();
      return;
    }
    if (this._dragging) {
      const d = this._dragging;
      if (d.tool === "brush") {
        this._paintStroke(tx, ty);
      } else {
        d.tx = tx;
        d.ty = ty;
      }
      this.status();
      this.requestDraw();
      return;
    }
    if (this._movingProp) {
      const p = this.world.props[this._movingProp];
      if (p) {
        p.x = Math.round(wp.x);
        p.y = Math.round(wp.y);
        this.markDirty(true);
        this.requestDraw();
      }
      return;
    }
    this.status();
    this.requestDraw();
  }
  _onUp(e) {
    if (this._panning) {
      this._panning = null;
      this.canvas.classList.remove("panning");
    }
    if (this._dragging) {
      const d = this._dragging;
      if (d.tool === "rect") this._applyRect(d.tx0, d.ty0, d.tx, d.ty);
      else if (d.tool === "line") this._applyLine(d.tx0, d.ty0, d.tx, d.ty);
      this._dragging = null;
      this._paintLast = null;
      this._commitOp();
      this.afterEdit();
    }
    if (this._movingProp != null) {
      this._movingProp = null;
      this.world.props.sort((a, b) => a.y - b.y || a.x - b.x);
      this.opts.selectedProp = -1;
      this.selectedProp = -1;
      this.afterEdit();
    }
    this.requestDraw();
  }
  _onWheel(e) {
    if (!this.world) return;
    e.preventDefault();
    const lp = this.localPointer(e);
    const f = Math.exp(-e.deltaY * (e.deltaMode === 1 ? 0.05 : 16e-4));
    this.zoomAt(lp.x, lp.y, f);
    this.status();
  }
  _onKey(e) {
    if (e.target && /INPUT|TEXTAREA|SELECT/.test(e.target.tagName)) return;
    const k = e.key.toLowerCase();
    if (e.code === "Space") {
      this._space = true;
      this._syncCursor();
      e.preventDefault();
      return;
    }
    if ((e.ctrlKey || e.metaKey) && k === "z") {
      e.preventDefault();
      if (e.shiftKey) this.redo();
      else this.undo();
      return;
    }
    if ((e.ctrlKey || e.metaKey) && k === "y") {
      e.preventDefault();
      this.redo();
      return;
    }
    if (e.ctrlKey || e.metaKey || e.altKey) return;
    const tools = {
      b: "brush",
      r: "rect",
      f: "fill",
      l: "line",
      i: "pick",
      t: "prop",
      v: "select",
      h: "pan",
    };
    if (tools[k]) {
      this.setTool(tools[k]);
      return;
    }
    if (k === "g") {
      this.opts.grid = !this.opts.grid;
      this.onChange("opts");
      this.requestDraw();
      return;
    }
    if (k === "p") {
      this.opts.props = !this.opts.props;
      this.onChange("opts");
      this.requestDraw();
      return;
    }
    if (k === "0") {
      this.fit();
      return;
    }
    if (k === "[" || k === "]") {
      this.setBrushSize(this.brushSize + (k === "]" ? 1 : -1));
      return;
    }
    if (k === "delete" || k === "backspace") {
      if (this.selectedProp >= 0) {
        this.snapshot("delete prop");
        this.deleteProp(this.selectedProp);
      }
      return;
    }
    if (k === "e" && this.selectedProp >= 0) {
      const p = this.world.props[this.selectedProp];
      this.snapshot("flip prop");
      p.flip = p.flip ? 0 : 1;
      this.afterEdit();
    }
  }
  _syncCursor() {
    if (!this.canvas) return;
    this.canvas.classList.toggle(
      "panning",
      !!this._space || this.tool === "pan",
    );
    this.canvas.classList.toggle("picking", this.tool === "pick");
  }
  setTool(t) {
    this.tool = t;
    this._dragging = null;
    this._syncCursor();
    this.onChange("tool");
    this.status();
    this.requestDraw();
  }
  setTerrain(i) {
    this.terrain = i;
    this.onChange("terrain");
  }
  setProp(i) {
    this.propIndex = i;
    if (i >= 0 && this.tool !== "prop") this.setTool("prop");
    this.onChange("prop");
  }
  setBrushSize(n) {
    this.brushSize = Math.max(1, Math.min(30, Math.round(n)));
    this.onChange("brush");
  }
  setPropScale(p) {
    this.propScale = Math.max(0.5, Math.min(2, p));
    this.onChange("brush");
  }
  setShape(s) {
    this.shape = s;
    this.onChange("brush");
    this.requestDraw();
  }
  cornerAt(tx, ty) {
    const w = this.world;
    if (!w) return 0;
    return w.corners[ty * w.cw + tx] || 0;
  }
  pickTerrain(tx, ty) {
    const w = this.world;
    if (tx < 0 || ty < 0 || tx >= w.W || ty >= w.H) return;
    const counts = /* @__PURE__ */ new Map();
    for (const [ox, oy] of [
      [0, 0],
      [1, 0],
      [0, 1],
      [1, 1],
    ]) {
      const t = w.corners[(ty + oy) * w.cw + tx + ox];
      counts.set(t, (counts.get(t) || 0) + 1);
    }
    let best = this.cornerAt(tx, ty),
      bestN = -1;
    for (const [t, n] of counts)
      if (n > bestN) {
        bestN = n;
        best = t;
      }
    this.setTerrain(best);
    this.setTool("brush");
  }
  setCorner(x, y, t) {
    const w = this.world;
    if (x < 0 || y < 0 || x >= w.cw || y >= w.ch) return;
    const i = y * w.cw + x;
    if (w.corners[i] !== t) {
      w.corners[i] = t;
      return true;
    }
    return false;
  }
  stamp(tx, ty) {
    const w = this.world;
    if (tx < 0 || ty < 0 || tx >= w.W || ty >= w.H) return false;
    let changed = false;
    for (const [ox, oy] of [
      [0, 0],
      [1, 0],
      [0, 1],
      [1, 1],
    ]) {
      if (this.setCorner(tx + ox, ty + oy, this.terrain)) changed = true;
    }
    if (changed) this.renderer.invalidateCells(tx - 1, ty - 1, tx + 1, ty + 1);
    return changed;
  }
  _paintStroke(tx, ty) {
    const last = this._paintLast;
    let changed = false;
    if (last && (Math.abs(last[0] - tx) > 0 || Math.abs(last[1] - ty) > 0)) {
      const steps = Math.max(Math.abs(tx - last[0]), Math.abs(ty - last[1]));
      for (let s = 1; s <= steps; s++) {
        const ix = Math.round(last[0] + ((tx - last[0]) * s) / steps);
        const iy = Math.round(last[1] + ((ty - last[1]) * s) / steps);
        for (const c of this._brushCells(ix, iy))
          if (this.stamp(c[0], c[1])) changed = true;
      }
    } else {
      for (const c of this._brushCells(tx, ty))
        if (this.stamp(c[0], c[1])) changed = true;
    }
    this._paintLast = [tx, ty];
    if (changed) {
      this._commitOp();
      this.markDirty(true);
      this.minimapDirty = true;
      this.onChange("paint");
    }
  }
  _applyRect(x0, y0, x1, y1) {
    const ax = Math.min(x0, x1),
      bx = Math.max(x0, x1);
    const ay = Math.min(y0, y1),
      by = Math.max(y0, y1);
    const cx = (ax + bx + 1) / 2,
      cy = (ay + by + 1) / 2;
    const rx = (bx - ax + 1) / 2,
      ry = (by - ay + 1) / 2;
    let changed = false;
    for (let y = ay; y <= by + 1; y++) {
      for (let x = ax; x <= bx + 1; x++) {
        if (this.shape === "round") {
          const dx = (x - cx) / rx,
            dy = (y - cy) / ry;
          if (dx * dx + dy * dy > 1) continue;
        }
        if (this.setCorner(x, y, this.terrain)) changed = true;
      }
    }
    if (changed) this.renderer.invalidateCells(ax - 1, ay - 1, bx + 1, by + 1);
    if (changed) {
      this._commitOp();
      this.markDirty(true);
      this.minimapDirty = true;
      this.onChange("paint");
    }
  }
  _lineCells(x0, y0, x1, y1) {
    const steps = Math.max(Math.abs(x1 - x0), Math.abs(y1 - y0));
    const out = [];
    for (let s = 0; s <= steps; s++) {
      const ix = steps ? Math.round(x0 + ((x1 - x0) * s) / steps) : x0;
      const iy = steps ? Math.round(y0 + ((y1 - y0) * s) / steps) : y0;
      for (const c of this._brushCells(ix, iy)) out.push(c);
    }
    return out;
  }
  _applyLine(x0, y0, x1, y1) {
    let changed = false;
    for (const c of this._lineCells(x0, y0, x1, y1))
      if (this.stamp(c[0], c[1])) changed = true;
    if (changed) {
      this._commitOp();
      this.markDirty(true);
      this.minimapDirty = true;
      this.onChange("paint");
    }
  }
  floodFill(tx, ty) {
    const w = this.world;
    if (tx < 0 || ty < 0 || tx >= w.W || ty >= w.H) return;
    const sig = (x, y) => {
      const a = w.corners[y * w.cw + x],
        b = w.corners[y * w.cw + x + 1];
      const c = w.corners[(y + 1) * w.cw + x],
        d = w.corners[(y + 1) * w.cw + x + 1];
      return a + "," + b + "," + c + "," + d;
    };
    const target = sig(tx, ty);
    const seen = new Uint8Array(w.W * w.H);
    const stack = [tx, ty];
    let changed = false;
    while (stack.length) {
      const y = stack.pop(),
        x = stack.pop();
      if (x < 0 || y < 0 || x >= w.W || y >= w.H) continue;
      const i = y * w.W + x;
      if (seen[i]) continue;
      if (sig(x, y) !== target) continue;
      seen[i] = 1;
      if (this.stamp(x, y)) changed = true;
      stack.push(x + 1, y, x - 1, y, x, y + 1, x, y - 1);
    }
    if (changed) {
      this._commitOp();
      this.markDirty(true);
      this.minimapDirty = true;
      this.onChange("paint");
    }
  }
  erasePropAt(wx, wy) {
    for (let i = this.world.props.length - 1; i >= 0; i--) {
      const p = this.world.props[i];
      const row = PROPS[p.s];
      if (!row) continue;
      const sc = p.sc || 1;
      const hw = (row[2] * sc) / 2,
        h = row[3] * sc;
      if (wx >= p.x - hw && wx <= p.x + hw && wy >= p.y - h && wy <= p.y) {
        this.world.props.splice(i, 1);
        this.markDirty(true);
        this.minimapDirty = true;
        this.afterEdit();
        return true;
      }
    }
    return false;
  }
  placeProp(wx, wy) {
    if (this.propIndex < 0) return;
    const row = PROPS[this.propIndex];
    if (!row) return;
    const w = this.world;
    if (wx < 0 || wy < 0 || wx > w.W * TILE || wy > w.H * TILE) return;
    w.props.push({
      x: Math.round(wx),
      y: Math.round(wy),
      s: this.propIndex,
      flip: Math.random() < 0.5 ? 1 : 0,
      kind: row[4],
      sc: this.propScale,
    });
    w.props.sort((a, b) => a.y - b.y || a.x - b.x);
    this.markDirty(true);
    this.minimapDirty = true;
    this.afterEdit();
  }
  _selectDown(tx, ty, wp, e) {
    let hit = -1;
    for (let i = this.world.props.length - 1; i >= 0; i--) {
      const p = this.world.props[i];
      const row = PROPS[p.s];
      if (!row) continue;
      const sc = p.sc || 1;
      const hw = (row[2] * sc) / 2,
        h = row[3] * sc;
      if (
        wp.x >= p.x - hw &&
        wp.x <= p.x + hw &&
        wp.y >= p.y - h &&
        wp.y <= p.y
      ) {
        hit = i;
        break;
      }
    }
    this.selectedProp = hit;
    this.opts.selectedProp = hit;
    if (hit >= 0) {
      this.snapshot("move prop");
      this._movingProp = hit;
    }
    this.status();
    this.onChange("select");
    this.requestDraw();
  }
  deleteProp(i) {
    if (i < 0 || i >= this.world.props.length) return;
    this.world.props.splice(i, 1);
    this.selectedProp = -1;
    this.opts.selectedProp = -1;
    this.markDirty(true);
    this.minimapDirty = true;
    this.afterEdit();
  }
  clearProps() {
    this.snapshot("clear props");
    this.world.props.length = 0;
    this.markDirty(true);
    this.minimapDirty = true;
    this.afterEdit();
  }
  snapshot(label) {
    if (!this.world) return;
    this._beginOp(label);
    this._commitOp();
  }
  _beginOp(label) {
    if (!this.world || this._pendingSnap) return;
    this._pendingSnap = {
      label,
      corners: new Uint8Array(this.world.corners),
      props: this.world.props.map((p) => ({ ...p })),
    };
  }
  _commitOp() {
    if (!this._pendingSnap) return;
    this._undoStack = this._undoStack || [];
    this._redoStack = [];
    this._undoStack.push(this._pendingSnap);
    this._undoBytes =
      (this._undoBytes || 0) +
      this._pendingSnap.corners.length +
      this._pendingSnap.props.length * 40;
    this._pendingSnap = null;
    while (this._undoStack.length > 1 && this._undoBytes > this.maxHistBytes) {
      const gone = this._undoStack.shift();
      this._undoBytes -= gone.corners.length + gone.props.length * 40;
    }
    this.onHistory();
  }
  _cancelOp() {
    this._pendingSnap = null;
  }
  canUndo() {
    return !!(this._undoStack && this._undoStack.length);
  }
  canRedo() {
    return !!(this._redoStack && this._redoStack.length);
  }
  _currentState() {
    return {
      corners: new Uint8Array(this.world.corners),
      props: this.world.props.map((p) => ({ ...p })),
    };
  }
  _restore(snap) {
    this.world.corners = new Uint8Array(snap.corners);
    this.world.props = snap.props.map((p) => ({ ...p }));
    this.selectedProp = -1;
    this.opts.selectedProp = -1;
    this.minimapDirty = true;
    this.renderer.invalidate();
    this.markDirty(true);
    this.onHistory();
    this.afterEdit();
  }
  undo() {
    this._undoStack = this._undoStack || [];
    if (!this._undoStack.length) return;
    this._redoStack = this._redoStack || [];
    this._redoStack.push({ ...this._currentState() });
    const snap = this._undoStack.pop();
    this._undoBytes -= snap.corners.length + snap.props.length * 40;
    this._restore(snap);
  }
  redo() {
    this._redoStack = this._redoStack || [];
    if (!this._redoStack.length) return;
    this._undoStack = this._undoStack || [];
    this._undoStack.push({ ...this._currentState() });
    const snap = this._redoStack.pop();
    this._restore(snap);
  }
  afterEdit() {
    this.onChange("edit");
    this.status();
    this.requestDraw();
  }
  refreshMinimap() {
    const w = this.world;
    if (!w) return null;
    this.minimapCanvas = this.renderer.renderMinimap(w, this.minimapSize);
    this.minimapDirty = false;
    return this.minimapCanvas;
  }
  status() {
    const w = this.world;
    if (!w) return;
    const p = this.pointer;
    const inside = p.tx >= 0 && p.ty >= 0 && p.tx < w.W && p.ty < w.H;
    this.onStatus({
      tx: inside ? p.tx : null,
      ty: inside ? p.ty : null,
      terrain: inside ? this.cornerAt(p.tx, p.ty) : null,
      props: w.props.length,
      zoom: this.view.zoom,
      size: w.W + " x " + w.H,
      tool: this.tool,
      selected: this.selectedProp,
      propScale: this.propScale,
      brushSize: this.brushSize,
      shape: this.shape,
    });
  }
};

// ws:src/world.js
var TI = TERRAIN_INDEX;
var THEMES = {
  temperate: {
    label: "Temperate",
    temperature: 0.66,
    moisture: 0.55,
    relief: 0.5,
    autumn: 0.08,
    snow: 0.5,
    fragment: 0.1,
  },
  autumn: {
    label: "Autumn",
    temperature: 0.62,
    moisture: 0.55,
    relief: 0.48,
    autumn: 0.95,
    snow: 0.35,
    fragment: 0.1,
  },
  tropical: {
    label: "Tropical",
    temperature: 0.94,
    moisture: 0.8,
    relief: 0.42,
    autumn: 0,
    snow: 0.05,
    fragment: 0.34,
  },
  desert: {
    label: "Desert",
    temperature: 0.94,
    moisture: 0.06,
    relief: 0.36,
    autumn: 0,
    snow: 0,
    fragment: 0.08,
  },
  tundra: {
    label: "Tundra",
    temperature: 0.22,
    moisture: 0.48,
    relief: 0.55,
    autumn: 0.1,
    snow: 0.95,
    fragment: 0.1,
  },
  boreal: {
    label: "Boreal",
    temperature: 0.36,
    moisture: 0.62,
    relief: 0.52,
    autumn: 0.2,
    snow: 0.75,
    fragment: 0.16,
  },
  swamp: {
    label: "Swamp",
    temperature: 0.78,
    moisture: 0.95,
    relief: 0.16,
    autumn: 0.1,
    snow: 0,
    waterTint: "green",
    fragment: 0.3,
  },
  highland: {
    label: "Highland",
    temperature: 0.56,
    moisture: 0.52,
    relief: 0.92,
    autumn: 0.15,
    snow: 0.45,
    fragment: 0.14,
  },
  volcanic: {
    label: "Volcanic",
    temperature: 0.88,
    moisture: 0.28,
    relief: 0.95,
    autumn: 0,
    snow: 0.1,
    volcanic: true,
    fragment: 0.2,
  },
  archipelago: {
    label: "Archipelago",
    temperature: 0.82,
    moisture: 0.68,
    relief: 0.45,
    autumn: 0.05,
    snow: 0.2,
    island: 0.92,
    seaLevel: 0.6,
    fragment: 0.78,
  },
};
var DEFAULT_PARAMS = {
  seed: 478211,
  width: 96,
  height: 96,
  theme: "temperate",
  seaLevel: 0.44,
  island: 0.45,
  relief: 0.5,
  temperature: 0.58,
  moisture: 0.55,
  snow: 0.45,
  autumn: 0.08,
  rivers: 0.55,
  lakes: 0.5,
  forest: 0.42,
  plants: 0.45,
  rocks: 0.3,
  paths: 0.3,
  fragment: 0.1,
  waterTint: "auto",
};
var THEME_KEYS = [
  "temperature",
  "moisture",
  "relief",
  "autumn",
  "snow",
  "island",
  "seaLevel",
  "fragment",
  "waterTint",
  "volcanic",
];
function normalizeParams(input) {
  const p = { ...DEFAULT_PARAMS, ...(input || {}) };
  const theme = THEMES[p.theme] ? p.theme : "temperate";
  const th = THEMES[theme];
  const explicit = (k) => input && input[k] !== void 0;
  for (const k of THEME_KEYS) {
    const sameAsDefault =
      Math.abs(p[k] - DEFAULT_PARAMS[k]) < 1e-9 || p[k] === DEFAULT_PARAMS[k];
    if (!explicit(k) && sameAsDefault && th[k] !== void 0) p[k] = th[k];
  }
  p.theme = theme;
  p.seed = Math.floor(p.seed) >>> 0;
  p.width = clamp(Math.round(p.width), 16, 512);
  p.height = clamp(Math.round(p.height), 16, 512);
  p.seaLevel = clamp(p.seaLevel, 0.05, 0.95);
  p.island = clamp(p.island, 0, 1);
  p.relief = clamp(p.relief, 0, 1);
  p.temperature = clamp(p.temperature, 0, 1);
  p.moisture = clamp(p.moisture, 0, 1);
  p.snow = clamp(p.snow, 0, 1);
  p.autumn = clamp(p.autumn, 0, 1);
  p.rivers = clamp(p.rivers, 0, 1);
  p.lakes = clamp(p.lakes, 0, 1);
  p.forest = clamp(p.forest, 0, 1.5);
  p.plants = clamp(p.plants, 0, 1.5);
  p.rocks = clamp(p.rocks, 0, 1.5);
  p.paths = clamp(p.paths, 0, 1);
  p.fragment = clamp(p.fragment, 0, 1);
  p.volcanic = !!p.volcanic;
  return p;
}
function MinHeap(cap) {
  const keys = new Float64Array(cap);
  const vals = new Int32Array(cap);
  let size = 0;
  const heap = {
    get size() {
      return size;
    },
    lastKey: 0,
    push(key, val) {
      let i = size++;
      keys[i] = key;
      vals[i] = val;
      while (i > 0) {
        const p = (i - 1) >> 1;
        if (keys[p] <= keys[i]) break;
        const k = keys[p],
          v = vals[p];
        keys[p] = keys[i];
        vals[p] = vals[i];
        keys[i] = k;
        vals[i] = v;
        i = p;
      }
    },
    pop() {
      const topKey = keys[0],
        topVal = vals[0];
      size--;
      if (size > 0) {
        keys[0] = keys[size];
        vals[0] = vals[size];
        let i = 0;
        for (;;) {
          const l = i * 2 + 1,
            r = l + 1;
          let m = i;
          if (l < size && keys[l] < keys[m]) m = l;
          if (r < size && keys[r] < keys[m]) m = r;
          if (m === i) break;
          const k = keys[m],
            v = vals[m];
          keys[m] = keys[i];
          vals[m] = vals[i];
          keys[i] = k;
          vals[i] = v;
          i = m;
        }
      }
      heap.lastKey = topKey;
      return topVal;
    },
  };
  return heap;
}
var PROP_GROUPS = (() => {
  const g = {
    tree: {},
    bush: {},
    plant: [],
    rock: [],
    conifer: [],
    conifer_snow: [],
  };
  PROPS.forEach((row, i) => {
    const kind = row[4],
      palette = row[5];
    if (kind === "tree" || kind === "bush") {
      if (!g[kind][palette]) g[kind][palette] = [];
      g[kind][palette].push(i);
    } else if (kind === "plant") g.plant.push(i);
    else if (kind === "rock") g.rock.push(i);
    else if (kind === "conifer") g.conifer.push(i);
    else if (kind === "conifer_snow") g.conifer_snow.push(i);
  });
  g.treePalettes = Object.keys(g.tree).sort();
  g.bushPalettes = Object.keys(g.bush).sort();
  return g;
})();
function pickFrom(list, rnd) {
  if (!list || !list.length) return -1;
  return list[Math.min(list.length - 1, Math.floor(rnd() * list.length))];
}
function buildTerrain(
  cw,
  ch,
  elev,
  filled,
  depth,
  moist,
  temp,
  rock,
  distWater,
  params,
) {
  const n = cw * ch;
  const corners = new Uint8Array(n);
  const tint = params.waterTint;
  const seed = params.seed;
  const p1 = new Float32Array(n),
    p2 = new Float32Array(n),
    p3 = new Float32Array(n);
  for (let y = 0; y < ch; y++) {
    for (let x = 0; x < cw; x++) {
      const i = y * cw + x;
      p1[i] = valueNoise2D(x * 0.15, y * 0.15, seed + 1234);
      p2[i] = valueNoise2D(x * 0.27 + 17, y * 0.27 + 31, seed + 2468);
      p3[i] = valueNoise2D(x * 0.1 + 53, y * 0.1 + 71, seed + 3579);
    }
  }
  for (let i = 0; i < n; i++) {
    const e = elev[i] - params.seaLevel;
    const d = depth[i];
    const t = temp[i];
    const m = moist[i];
    const r = rock[i];
    const a = p1[i],
      b = p2[i],
      cc = p3[i];
    if (d > 0) {
      const frozen = t < 0.2 - params.snow * 0.06;
      const sandy = m < 0.3 || (t > 0.78 && m < 0.62);
      if (frozen) corners[i] = d < 0.75 ? TI.Ice_Melting : TI.Ice;
      else if (tint === "green" && d > 0.35)
        corners[i] = d < 1.1 ? TI.Water_Green : TI.Water_Deep;
      else if (tint === "purple" && d > 0.35)
        corners[i] = d < 1.1 ? TI.Water_Purple : TI.Water_Deep;
      else if (d < 0.45)
        corners[i] = sandy ? TI.Water_Shallows_Sand : TI.Water_Shallows_Dirt;
      else if (d < 1.3) corners[i] = TI.Water;
      else if (d < 2.4 && b > 0.64) corners[i] = TI.Water;
      else corners[i] = TI.Water_Deep;
      continue;
    }
    if (e < 0.06 && distWater[i] < 4.5) {
      if (t < 0.18) corners[i] = TI.Snow_1;
      else if (t < 0.31)
        corners[i] = r > 0.58 && a > 0.4 ? TI.Gravel_1 : TI.Stone_Tan;
      else corners[i] = r > 0.76 && a > 0.62 ? TI.Gravel_1 : TI.Sand;
      continue;
    }
    const hill = smoothstep(0.14, 0.62, e);
    const rockiness = clamp(
      r * 0.55 + hill * 0.45 * (0.35 + 0.8 * params.relief) - 0.1,
      0,
      1,
    );
    const ma = a * 0.11 - 0.055;
    const mb = b * 0.1 - 0.05;
    if (params.volcanic && rockiness > 0.42 && e > 0.12 && cc > 0.3) {
      corners[i] = a > 0.4 ? TI.Lava : TI.Earth_Cracked;
      continue;
    }
    const mm = clamp(m + ma * 0.9, 0, 1);
    const tt = clamp(t + mb * 0.7, 0, 1);
    const snowT = 0.155 + (1 - params.snow) * 0.145;
    if (tt < snowT - 0.05) {
      corners[i] = cc < 0.55 ? TI.Snow_2 : TI.Snow_1;
      continue;
    }
    if (rockiness > 0.6 + mb) {
      if (t < 0.3) corners[i] = TI.Rock_White;
      else if (m > 0.64)
        corners[i] = cc < 0.55 ? TI.Mudstone_Brown : TI.Rock_Gray;
      else if (m < 0.3 && hill < 0.55)
        corners[i] = cc < 0.55 ? TI.Stone_Tan : TI.Earth_Cracked;
      else if (cc < 0.38) corners[i] = TI.Rock_Gray;
      else if (cc < 0.68) corners[i] = TI.Rock_Dark;
      else corners[i] = TI.Stone_White;
      continue;
    }
    if (rockiness > 0.44 + ma) {
      corners[i] =
        hill > 0.45
          ? cc < 0.5
            ? TI.Rock_Gray
            : TI.Mudstone_Gray
          : m < 0.35
            ? TI.Stone_Tan
            : cc < 0.5
              ? TI.Mudstone_Gray
              : TI.Rock_Gray;
      continue;
    }
    if (tt < snowT + 0.115) {
      if (hill > 0.42 && cc > 0.3) corners[i] = TI.Snow_1;
      else
        corners[i] =
          cc < 0.3
            ? TI.Grass_Dead
            : cc < 0.62
              ? TI.Grass_Dark
              : cc < 0.8
                ? TI.Grass_Dead
                : TI.Stone_Tan;
      continue;
    }
    if (mm < 0.22) {
      if (cc < 0.42) corners[i] = TI.Sand;
      else if (cc < 0.66) corners[i] = TI.Earth_Cracked;
      else if (cc < 0.86) corners[i] = TI.Stone_Tan;
      else corners[i] = TI.Gravel_1;
    } else if (mm < 0.34) {
      corners[i] =
        cc < 0.5 ? TI.Grass_Dead : cc < 0.78 ? TI.Dirt_Tan : TI.Gravel_1;
    } else if (mm < 0.62) {
      corners[i] = cc < 0.78 ? TI.Grass : TI.Grass_Light;
    } else if (mm < 0.8) {
      corners[i] = cc < 0.72 ? TI.Grass_Dark : TI.Soil;
    } else {
      corners[i] =
        cc < 0.45 ? TI.Mud_Brown : cc < 0.8 ? TI.Grass_Dark : TI.Dirt_Roots;
    }
  }
  return corners;
}
function priorityFlood(cw, ch, elev) {
  const n = cw * ch;
  const filled = new Float32Array(elev);
  const order = new Int32Array(n).fill(-1);
  const seen = new Uint8Array(n);
  const heap = MinHeap(n + 8);
  for (let x = 0; x < cw; x++) {
    for (const y of [0, ch - 1]) {
      const i = y * cw + x;
      if (!seen[i]) {
        seen[i] = 1;
        heap.push(elev[i], i);
      }
    }
  }
  for (let y = 0; y < ch; y++) {
    for (const x of [0, cw - 1]) {
      const i = y * cw + x;
      if (!seen[i]) {
        seen[i] = 1;
        heap.push(elev[i], i);
      }
    }
  }
  let tick = 0;
  while (heap.size > 0) {
    const i = heap.pop();
    const e = heap.lastKey;
    order[i] = tick++;
    const x = i % cw,
      y = (i - x) / cw;
    if (x > 0) {
      const j = i - 1;
      if (!seen[j]) {
        seen[j] = 1;
        filled[j] = Math.max(elev[j], e);
        heap.push(filled[j], j);
      }
    }
    if (x < cw - 1) {
      const j = i + 1;
      if (!seen[j]) {
        seen[j] = 1;
        filled[j] = Math.max(elev[j], e);
        heap.push(filled[j], j);
      }
    }
    if (y > 0) {
      const j = i - cw;
      if (!seen[j]) {
        seen[j] = 1;
        filled[j] = Math.max(elev[j], e);
        heap.push(filled[j], j);
      }
    }
    if (y < ch - 1) {
      const j = i + cw;
      if (!seen[j]) {
        seen[j] = 1;
        filled[j] = Math.max(elev[j], e);
        heap.push(filled[j], j);
      }
    }
  }
  return { filled, order };
}
function pruneLakes(cw, ch, filled, elev, minSize) {
  const n = cw * ch;
  const isPit = new Uint8Array(n);
  for (let i = 0; i < n; i++) if (filled[i] - elev[i] > 15e-4) isPit[i] = 1;
  const seen = new Uint8Array(n);
  const stack = [];
  const water = new Uint8Array(n);
  for (let i = 0; i < n; i++) {
    if (!isPit[i] || seen[i]) continue;
    stack.length = 0;
    stack.push(i);
    seen[i] = 1;
    const comp = [];
    while (stack.length) {
      const p = stack.pop();
      comp.push(p);
      const x = p % cw,
        y = (p - x) / cw;
      if (x > 0 && isPit[p - 1] && !seen[p - 1]) {
        seen[p - 1] = 1;
        stack.push(p - 1);
      }
      if (x < cw - 1 && isPit[p + 1] && !seen[p + 1]) {
        seen[p + 1] = 1;
        stack.push(p + 1);
      }
      if (y > 0 && isPit[p - cw] && !seen[p - cw]) {
        seen[p - cw] = 1;
        stack.push(p - cw);
      }
      if (y < ch - 1 && isPit[p + cw] && !seen[p + cw]) {
        seen[p + cw] = 1;
        stack.push(p + cw);
      }
    }
    if (comp.length >= minSize) for (const p of comp) water[p] = 1;
    else for (const p of comp) filled[p] = elev[p];
  }
  return water;
}
function despeckleWater(cw, ch, water) {
  const n = cw * ch;
  for (let pass = 0; pass < 2; pass++) {
    const flip = [];
    for (let y = 0; y < ch; y++) {
      for (let x = 0; x < cw; x++) {
        const i = y * cw + x;
        let wn = 0,
          tot = 0;
        for (let dy = -1; dy <= 1; dy++) {
          for (let dx = -1; dx <= 1; dx++) {
            if (!dx && !dy) continue;
            const nx = x + dx,
              ny = y + dy;
            if (nx < 0 || ny < 0 || nx >= cw || ny >= ch) continue;
            tot++;
            if (water[ny * cw + nx]) wn++;
          }
        }
        if (water[i] && wn === 0) flip.push(i);
        else if (!water[i] && tot >= 6 && wn >= tot - 1) flip.push(i);
      }
    }
    if (!flip.length) break;
    for (const i of flip) water[i] = water[i] ? 0 : 1;
  }
}
function flowAccumulate(cw, ch, filled, order) {
  const n = cw * ch;
  const list = new Int32Array(n);
  for (let i = 0; i < n; i++) list[i] = i;
  const arr = Array.from(list);
  arr.sort((a, b) => filled[b] - filled[a] || order[b] - order[a]);
  const flow = new Float32Array(n).fill(1);
  for (const i of arr) {
    const x = i % cw,
      y = (i - x) / cw;
    let best = -1,
      bestF = Infinity,
      bestO = Infinity;
    for (let dy = -1; dy <= 1; dy++) {
      for (let dx = -1; dx <= 1; dx++) {
        if (!dx && !dy) continue;
        const nx = x + dx,
          ny = y + dy;
        if (nx < 0 || ny < 0 || nx >= cw || ny >= ch) continue;
        const j = ny * cw + nx;
        const f = filled[j];
        if (f < bestF || (f === bestF && order[j] < bestO)) {
          bestF = f;
          bestO = order[j];
          best = j;
        }
      }
    }
    if (best >= 0) flow[best] += flow[i];
  }
  return flow;
}
function distanceTransform(cw, ch, mask) {
  const n = cw * ch;
  const dist = new Float32Array(n).fill(1e9);
  const queue = new Int32Array(n);
  let head = 0,
    tail = 0;
  for (let i = 0; i < n; i++)
    if (mask[i]) {
      dist[i] = 0;
      queue[tail++] = i;
    }
  while (head < tail) {
    const i = queue[head++];
    const x = i % cw,
      y = (i - x) / cw;
    const d = dist[i] + 1;
    if (x > 0 && dist[i - 1] > d) {
      dist[i - 1] = d;
      queue[tail++] = i - 1;
    }
    if (x < cw - 1 && dist[i + 1] > d) {
      dist[i + 1] = d;
      queue[tail++] = i + 1;
    }
    if (y > 0 && dist[i - cw] > d) {
      dist[i - cw] = d;
      queue[tail++] = i - cw;
    }
    if (y < ch - 1 && dist[i + cw] > d) {
      dist[i + cw] = d;
      queue[tail++] = i + cw;
    }
  }
  return dist;
}
function isWaterTerrain(t) {
  return (
    t === TI.Water ||
    t === TI.Water_Deep ||
    t === TI.Water_Shallows_Dirt ||
    t === TI.Water_Shallows_Sand ||
    t === TI.Water_Green ||
    t === TI.Water_Purple ||
    t === TI.Ice ||
    t === TI.Ice_Melting
  );
}
function carvePaths(cw, ch, corners, elev, params, rnd) {
  const n = cw * ch;
  const land = [];
  for (let i = 0; i < n; i++)
    if (!isWaterTerrain(corners[i]) && corners[i] !== TI.Lava) land.push(i);
  if (land.length < 60) return 0;
  const count = Math.max(1, Math.round(params.paths * 6));
  const pathTerrain = rnd() < 0.5 ? TI.Dirt_Tan : TI.Gravel_1;
  const cost = new Float32Array(n);
  for (let i = 0; i < n; i++) {
    const t = corners[i];
    cost[i] = isWaterTerrain(t)
      ? 320
      : t === TI.Sand || t === TI.Gravel_1 || t === TI.Dirt_Tan
        ? 1.4
        : 4;
  }
  const gScore = new Float32Array(n);
  const cameFrom = new Int32Array(n);
  let made = 0;
  for (let k = 0; k < count; k++) {
    let a = -1,
      b = -1,
      bestD = -1;
    for (let tries = 0; tries < 60; tries++) {
      const p = land[Math.floor(rnd() * land.length)];
      const q = land[Math.floor(rnd() * land.length)];
      const d = Math.hypot(
        (p % cw) - (q % cw),
        ((p / cw) | 0) - ((q / cw) | 0),
      );
      if (d > 14 && d < 46 && d > bestD) {
        bestD = d;
        a = p;
        b = q;
      }
      if (bestD > 30) break;
    }
    if (a < 0 || b < 0) continue;
    gScore.fill(Infinity);
    cameFrom.fill(-1);
    const heap = MinHeap(n * 6);
    gScore[a] = 0;
    const goalX = b % cw,
      goalY = (b / cw) | 0;
    const hf = (i) => {
      const x = i % cw,
        y = (i - x) / cw;
      return Math.hypot(x - goalX, y - goalY) * 1.4;
    };
    heap.push(hf(a), a);
    let found = false,
      iter = 0;
    while (heap.size > 0 && iter++ < 6e4) {
      const i = heap.pop();
      const gi = heap.lastKey;
      if (i === b) {
        found = true;
        break;
      }
      if (gi > gScore[i] + hf(i) + 1e-6) continue;
      const x = i % cw,
        y = (i - x) / cw;
      for (let dy = -1; dy <= 1; dy++) {
        for (let dx = -1; dx <= 1; dx++) {
          if (!dx && !dy) continue;
          const nx = x + dx,
            ny = y + dy;
          if (nx < 0 || ny < 0 || nx >= cw || ny >= ch) continue;
          const j = ny * cw + nx;
          const step =
            Math.hypot(dx, dy) *
            cost[j] *
            (1 + Math.abs(elev[j] - elev[i]) * 16);
          const g2 = gScore[i] + step;
          if (g2 < gScore[j] - 1e-6) {
            gScore[j] = g2;
            cameFrom[j] = i;
            heap.push(g2 + hf(j), j);
          }
        }
      }
    }
    if (!found) continue;
    let cur = b,
      guard = 0;
    while (cur >= 0 && guard++ < 8e3) {
      if (!isWaterTerrain(corners[cur]) && corners[cur] !== TI.Lava)
        corners[cur] = pathTerrain;
      cur = cameFrom[cur];
    }
    made++;
  }
  return made;
}
function scatterProps(
  cw,
  ch,
  corners,
  moist,
  temp,
  rock,
  water,
  elev,
  params,
  rnd,
) {
  const props = [];
  const CELL = 10;
  const occ = /* @__PURE__ */ new Map();
  const worldW = (cw - 1) * 32,
    worldH = (ch - 1) * 32;
  const occKey = (gx, gy) => gx * 1e5 + gy;
  const occupied = (x, y, r) => {
    const span = Math.ceil(r / CELL);
    const gx = Math.floor(x / CELL),
      gy = Math.floor(y / CELL);
    for (let dy = -span; dy <= span; dy++)
      for (let dx = -span; dx <= span; dx++) {
        const s = occ.get(occKey(gx + dx, gy + dy));
        if (s === void 0) continue;
        if ((s[0] - x) * (s[0] - x) + (s[1] - y) * (s[1] - y) < r * r)
          return true;
      }
    return false;
  };
  const occupy = (x, y) => {
    const k = occKey(Math.floor(x / CELL), Math.floor(y / CELL));
    if (!occ.has(k)) occ.set(k, [x, y]);
  };
  const sampleAt = (wx, wy) => {
    const cx = clamp(Math.round(wx / 32), 0, cw - 1);
    const cy = clamp(Math.round(wy / 32), 0, ch - 1);
    const ci = cy * cw + cx;
    return {
      t: corners[ci],
      m: moist[ci],
      temp: temp[ci],
      r: rock[ci],
      water: water[ci],
      e: elev[ci] - params.seaLevel,
      cx,
      cy,
    };
  };
  const seed = params.seed;
  const weightsFor = (s) => {
    const t = s.t;
    const w = { tree: 0, bush: 0, plant: 0, rock: 0 };
    const clump =
      0.55 + valueNoise2D(s.cx * 0.09, s.cy * 0.09, seed + 7777) * 0.95;
    if (isWaterTerrain(t) || t === TI.Lava) return w;
    if (t === TI.Snow_1 || t === TI.Snow_2) {
      w.tree = 0.5 * params.forest * clump * (0.42 + s.m * 0.7);
      w.rock = 0.17 * params.rocks * (0.4 + s.r * 0.8);
      w.bush = 0.07 * params.plants;
    } else if (t === TI.Rock_White) {
      w.rock = 0.2 * params.rocks * (0.4 + s.r * 0.9);
      w.tree = 0.14 * params.forest * clump * (0.35 + s.m * 0.5);
      w.bush = 0.04 * params.plants;
    } else if (t === TI.Grass_Dark || t === TI.Soil || t === TI.Dirt_Roots) {
      w.tree = 0.72 * params.forest * clump * (0.45 + s.m * 0.8);
      w.bush = 0.11 * params.plants;
      w.plant = 0.1 * params.plants;
    } else if (t === TI.Mud_Brown) {
      w.tree = 0.32 * params.forest * clump * (0.4 + s.m * 0.7);
      w.bush = 0.14 * params.plants;
      w.plant = 0.1 * params.plants;
    } else if (t === TI.Grass || t === TI.Grass_Light) {
      w.tree = 0.13 * params.forest * clump;
      w.bush = 0.05 * params.plants;
      w.plant = 0.16 * params.plants;
    } else if (t === TI.Grass_Dead) {
      w.tree = 0.06 * params.forest * clump;
      w.bush = 0.06 * params.plants;
      w.plant = 0.07 * params.plants;
      w.rock = 0.05 * params.rocks;
    } else if (t === TI.Sand) {
      w.tree = 0.02 * params.forest * (1 - s.m);
      w.plant = 0.03 * params.plants;
      w.rock = 0.05 * params.rocks;
    } else if (t === TI.Dirt_Tan) {
      w.plant = 0.02 * params.plants;
      w.rock = 0.03 * params.rocks;
    } else {
      w.rock = 0.3 * params.rocks * (0.35 + s.r);
      w.tree = 0.05 * params.forest * (1 - s.r) * clump;
      w.plant = 0.02 * params.plants;
    }
    if (s.temp < 0.28) w.tree *= 0.55;
    return w;
  };
  const palettesForTree = (s) => {
    const t0 = s.temp,
      aut = params.autumn;
    const out = [];
    const add = (k, w) => {
      for (let i = 0; i < w; i++) out.push(k);
    };
    if (params.theme === "desert" || t0 < 0.34) {
      add("dead", 3);
      add("pale", 2);
      return out;
    }
    add("green", 6);
    if (t0 > 0.52) add("orange", Math.round(aut * 7));
    add("brown", Math.round(1 + aut * 5));
    if (t0 < 0.52) add("pale", 1);
    if (t0 > 0.62) add("green", 3);
    return out;
  };
  const g = PROP_GROUPS;
  const passes = [
    { step: 38, kinds: ["tree"], radius: (row) => Math.max(11, row[2] * 0.4) },
    { step: 46, kinds: ["rock"], radius: (row) => Math.max(8, row[2] * 0.45) },
    {
      step: 13,
      kinds: ["bush", "plant"],
      radius: (row) => Math.max(4, row[2] * 0.42),
    },
  ];
  for (const pass of passes) {
    for (let wy = 6; wy < worldH; wy += pass.step) {
      for (let wx = 6; wx < worldW; wx += pass.step) {
        const jx = wx + (rnd() - 0.5) * pass.step * 0.92;
        const jy = wy + (rnd() - 0.5) * pass.step * 0.92;
        const s = sampleAt(jx, jy);
        if (s.water) continue;
        const w = weightsFor(s);
        let total = 0;
        for (const k of pass.kinds) total += w[k];
        if (total <= 0) continue;
        if (rnd() > total) continue;
        let roll = rnd() * total,
          kind = pass.kinds[0];
        for (const k of pass.kinds) {
          roll -= w[k];
          if (roll < 0) {
            kind = k;
            break;
          }
        }
        if (w[kind] <= 0) continue;
        let sprite = -1;
        const snowy =
          s.t === TI.Snow_1 || s.t === TI.Snow_2 || s.t === TI.Rock_White;
        const cold = s.temp < 0.3;
        const coniferChance = snowy
          ? 0.92
          : cold
            ? clamp((0.4 - s.temp) * 2.6, 0, 0.95)
            : params.theme === "boreal" || params.theme === "highland"
              ? 0.2
              : 0;
        if (kind === "tree") {
          if (rnd() < coniferChance)
            sprite = pickFrom(
              snowy || s.temp < 0.2 ? g.conifer_snow : g.conifer,
              rnd,
            );
          if (sprite < 0) {
            const pals = snowy ? ["pale", "dead", "brown"] : palettesForTree(s);
            const pal = pals[Math.floor(rnd() * pals.length)];
            sprite = pickFrom(g.tree[pal] || g.tree[g.treePalettes[0]], rnd);
          }
        } else if (kind === "bush") {
          if (snowy)
            sprite = pickFrom(g.bush.dead || g.bush[g.bushPalettes[0]], rnd);
          else {
            const pals = palettesForTree(s);
            const pal = pals[Math.floor(rnd() * pals.length)];
            sprite = pickFrom(
              g.bush[pal] ||
                g.bush[g.bushPalettes[0]] ||
                g.bush[g.treePalettes[0]],
              rnd,
            );
          }
        } else if (kind === "rock") sprite = pickFrom(g.rock, rnd);
        else sprite = pickFrom(g.plant, rnd);
        if (sprite < 0) continue;
        const row = PROPS[sprite];
        const minSep =
          kind === "tree"
            ? Math.max(13, row[2] * 0.44)
            : kind === "plant"
              ? 4.5
              : Math.max(7, row[2] * 0.48);
        if (occupied(jx, jy, minSep)) continue;
        occupy(jx, jy);
        props.push({
          x: Math.round(jx),
          y: Math.round(jy),
          s: sprite,
          flip: rnd() < 0.5 ? 1 : 0,
          kind,
        });
      }
    }
  }
  return props;
}
function scatterWorldProps(world, params, salt = 0) {
  const p = normalizeParams(params || world.params);
  const f = world.fields;
  const rnd = mulberry32((p.seed + 20973 + salt) >>> 0);
  return scatterProps(
    world.cw,
    world.ch,
    world.corners,
    f.moist,
    f.temp,
    f.rock,
    f.water,
    f.elev,
    p,
    rnd,
  );
}
function generateWorld(inputParams) {
  const params = normalizeParams(inputParams);
  const W = params.width,
    H = params.height;
  const cw = W + 1,
    ch = H + 1;
  const n = cw * ch;
  const seed = params.seed;
  const rnd = mulberry32(seed);
  const elev = new Float32Array(n);
  const cxr = 1 / Math.max(1, cw - 1),
    cyr = 1 / Math.max(1, ch - 1);
  const freq = 3.6 / Math.max(24, Math.min(W, H));
  const frag = params.fragment;
  const fragScale = freq * (3.4 + 2.6 * frag);
  const warpStrength = 0.14 + params.relief * 0.3;
  for (let y = 0; y < ch; y++) {
    for (let x = 0; x < cw; x++) {
      const i = y * cw + x;
      const u = x * freq,
        v = y * freq;
      const wxx =
        u + (fbm2D(u + 3.1, v + 7.7, seed + 101, 3) * 2 - 1) * warpStrength;
      const wyy =
        v + (fbm2D(u + 11.3, v + 2.9, seed + 202, 3) * 2 - 1) * warpStrength;
      let e = fbm2D(wxx, wyy, seed + 11, 6, 2.05, 0.5);
      const r = ridge2D(wxx * 1.6, wyy * 1.6, seed + 313, 5, 2.1, 0.5);
      const land = clamp((e - 0.34) / 0.36, 0, 1);
      e = e * (1 - params.relief * 0.42) + r * land * params.relief * 0.7;
      if (frag > 1e-3) {
        const uf = x * fragScale,
          vf = y * fragScale;
        const sky = fbm2D(
          uf * 0.72 + 4.4,
          vf * 0.72 + 9.1,
          seed + 404,
          4,
          2.1,
          0.55,
        );
        const bump = clamp((sky - 0.44) / 0.3, 0, 1);
        const arch = smoothstep(0.3, 0.72, bump);
        e = e * (1 - frag * 0.55) + arch * frag * 1.15;
      }
      const nx = x * cxr * 2 - 1,
        ny = y * cyr * 2 - 1;
      const d = Math.sqrt(nx * nx * 0.94 + ny * ny * 1.04);
      const coastNoise =
        (fbm2D(u * 0.8 + 31, v * 0.8 + 17, seed + 505, 4) * 2 - 1) * 0.3;
      const fall = smoothstep(
        0.35,
        1.05 + coastNoise,
        d * (1 + 0.2 * (fbm2D(u * 1.5, v * 1.5, seed + 606, 3) * 2 - 1)),
      );
      e -= params.island * fall * 1.35;
      const dEdge = Math.max(Math.abs(nx), Math.abs(ny));
      e -= params.island * 0.5 * smoothstep(0.84, 0.99, dEdge);
      elev[i] = e;
    }
  }
  let lo = Infinity,
    hi = -Infinity;
  for (let i = 0; i < n; i++) {
    if (elev[i] < lo) lo = elev[i];
    if (elev[i] > hi) hi = elev[i];
  }
  const span = Math.max(1e-6, hi - lo);
  for (let i = 0; i < n; i++) elev[i] = (elev[i] - lo) / span;
  const { filled, order } = priorityFlood(cw, ch, elev);
  const lakeMask = pruneLakes(
    cw,
    ch,
    filled,
    elev,
    Math.round(lerp(4, 26, 1 - params.lakes)),
  );
  const oceanMask = new Uint8Array(n);
  {
    const stack = [];
    for (let x = 0; x < cw; x++) {
      for (const y of [0, ch - 1]) {
        const i = y * cw + x;
        if (elev[i] < params.seaLevel && !oceanMask[i]) {
          oceanMask[i] = 1;
          stack.push(i);
        }
      }
    }
    for (let y = 0; y < ch; y++) {
      for (const x of [0, cw - 1]) {
        const i = y * cw + x;
        if (elev[i] < params.seaLevel && !oceanMask[i]) {
          oceanMask[i] = 1;
          stack.push(i);
        }
      }
    }
    while (stack.length) {
      const i = stack.pop();
      const x = i % cw,
        y = (i - x) / cw;
      if (x > 0 && !oceanMask[i - 1] && elev[i - 1] < params.seaLevel) {
        oceanMask[i - 1] = 1;
        stack.push(i - 1);
      }
      if (x < cw - 1 && !oceanMask[i + 1] && elev[i + 1] < params.seaLevel) {
        oceanMask[i + 1] = 1;
        stack.push(i + 1);
      }
      if (y > 0 && !oceanMask[i - cw] && elev[i - cw] < params.seaLevel) {
        oceanMask[i - cw] = 1;
        stack.push(i - cw);
      }
      if (y < ch - 1 && !oceanMask[i + cw] && elev[i + cw] < params.seaLevel) {
        oceanMask[i + cw] = 1;
        stack.push(i + cw);
      }
    }
  }
  const water = new Uint8Array(n);
  const depth = new Float32Array(n);
  for (let i = 0; i < n; i++) {
    if (oceanMask[i]) {
      water[i] = 1;
      depth[i] = 0.3;
    } else if (lakeMask[i]) {
      water[i] = 1;
      depth[i] = clamp(0.3 + (filled[i] - elev[i]) * 22, 0.24, 1.6);
    }
  }
  const flow = flowAccumulate(cw, ch, filled, order);
  const landFlow = [];
  for (let i = 0; i < n; i++)
    if (!oceanMask[i] && !lakeMask[i]) landFlow.push(flow[i]);
  landFlow.sort((a, b) => b - a);
  const riverFrac =
    lerp(0.055, 0.01, params.rivers) * (params.rivers < 0.02 ? 0 : 1);
  const riverThresh =
    params.rivers < 0.02
      ? Infinity
      : Math.max(
          6,
          landFlow[
            Math.min(
              landFlow.length - 1,
              Math.floor(landFlow.length * riverFrac),
            )
          ],
        );
  const riverMax = landFlow[0] || 1;
  let riverCells = 0;
  const WIDEN = [
    [0, 0],
    [1, 0],
    [0, 1],
    [-1, 0],
    [0, -1],
    [1, 1],
    [-1, 1],
    [1, -1],
    [-1, -1],
  ];
  for (let i = 0; i < n; i++) {
    if (oceanMask[i] || lakeMask[i]) continue;
    const f = flow[i];
    if (f < riverThresh) continue;
    const strength = clamp(
      Math.sqrt((f - riverThresh) / Math.max(1, riverMax - riverThresh)),
      0,
      1,
    );
    const x = i % cw,
      y = (i - x) / cw;
    const wid = 1 + Math.round(Math.pow(strength, 1.35) * (WIDEN.length - 1));
    for (let k = 0; k < wid; k++) {
      const nx = x + WIDEN[k][0],
        ny = y + WIDEN[k][1];
      if (nx < 0 || ny < 0 || nx >= cw || ny >= ch) continue;
      const j = ny * cw + nx;
      if (oceanMask[j] || lakeMask[j]) continue;
      const dd =
        k === 0
          ? 0.22 + strength * 1.15
          : (0.22 + strength * 1.15) * (0.9 - k * 0.05);
      if (!water[j]) riverCells++;
      water[j] = 1;
      depth[j] = Math.max(depth[j], Math.min(1.05, dd));
    }
  }
  despeckleWater(cw, ch, water);
  const distWater = distanceTransform(cw, ch, water);
  {
    const landMask = new Uint8Array(n);
    for (let i = 0; i < n; i++) if (!water[i]) landMask[i] = 1;
    const distLand = distanceTransform(cw, ch, landMask);
    for (let i = 0; i < n; i++) {
      if (!oceanMask[i]) continue;
      const shelf =
        0.12 + distLand[i] * 0.16 + Math.max(0, distLand[i] - 5) * 0.24;
      const basin = 0.28 + (params.seaLevel - elev[i]) * 7.5;
      depth[i] = clamp(Math.min(shelf, basin), 0.12, 3.2);
    }
  }
  const moist = new Float32Array(n);
  const temp = new Float32Array(n);
  const rock = new Float32Array(n);
  const latr = 1 / Math.max(1, ch - 1);
  for (let y = 0; y < ch; y++) {
    for (let x = 0; x < cw; x++) {
      const i = y * cw + x;
      const u = x * freq,
        v = y * freq;
      const wet = smoothstep(7, 0, distWater[i]);
      const baseM = fbm2D(u * 1 + 21, v * 1 + 53, seed + 707, 3);
      moist[i] = clamp(
        (baseM - 0.58) * 1.35 + params.moisture + wet * 0.16,
        0,
        1,
      );
      const lat = (ch - 1 - y) * latr;
      const polar = smoothstep(0.62, 1, lat) * 0.22;
      const lapse =
        Math.max(0, elev[i] - params.seaLevel) * (0.3 + 0.42 * params.relief);
      const baseT = fbm2D(u * 0.85 + 71, v * 0.85 + 13, seed + 808, 3);
      temp[i] = clamp(
        (baseT - 0.507) * 1.25 + params.temperature - polar - lapse + wet * 0.1,
        0,
        1,
      );
      const baseR = fbm2D(u * 1.2 + 91, v * 1.2 + 37, seed + 909, 3);
      rock[i] = clamp((baseR - 0.497) * 1.5 + 0.5, 0, 1);
    }
  }
  const corners = buildTerrain(
    cw,
    ch,
    elev,
    filled,
    depth,
    moist,
    temp,
    rock,
    distWater,
    params,
  );
  const pathsMade = carvePaths(cw, ch, corners, elev, params, rnd);
  const props = scatterProps(
    cw,
    ch,
    corners,
    moist,
    temp,
    rock,
    water,
    elev,
    params,
    rnd,
  );
  props.sort((a, b) => a.y - b.y || a.x - b.x);
  return {
    params,
    W,
    H,
    cw,
    ch,
    corners,
    props,
    fields: { elev, water, depth, moist, temp, rock, flow, distWater },
    stats: {
      riverCells,
      pathsMade,
      props: props.length,
      land: n - water.reduce((s, v) => s + v, 0),
    },
  };
}

// ws:src/ui.js
var UI_CSS = `
  :host {
    --bg: #0d1117;
    --bg2: #141b24;
    --bg3: #1b2530;
    --line: #26313d;
    --line2: #33404f;
    --fg: #dbe4ee;
    --fg2: #8ea0b4;
    --fg3: #63758a;
    --accent: #4ea3ff;
    --accent2: #2b7fd4;
    --gold: #ffca45;
    --danger: #ff6b6b;
    --ok: #4ade9a;
  }
  :host {
    display: block;
    position: relative;
    height: 100%;
    min-height: 520px;
    text-align: left;
    background: var(--bg);
    color: var(--fg);
    font: 13px/1.45 system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
    overflow: hidden;
  }
  :host(.forge-fullscreen) {
    position: fixed;
    inset: 0;
    height: 100vh;
    min-height: 0;
    z-index: 2147483000;
  }
  *, *::before, *::after { box-sizing: border-box; }
  button, input, select, textarea { font: inherit; color: var(--fg); }
  button {
    background: var(--bg3);
    border: 1px solid var(--line2);
    border-radius: 7px;
    padding: 5px 10px;
    cursor: pointer;
    white-space: nowrap;
    transition: background .12s, border-color .12s, transform .06s;
  }
  button:hover { background: #24303d; border-color: #46586b; }
  button:active { transform: translateY(1px); }
  button.primary { background: var(--accent2); border-color: var(--accent); color: #fff; font-weight: 600; }
  button.primary:hover { background: #3489dd; }
  button.toggle.on { background: #23405c; border-color: #3d6f9e; color: #cfe6ff; }
  button:disabled { opacity: .42; cursor: default; }
  select, input[type=number], input[type=text], textarea {
    background: var(--bg2); border: 1px solid var(--line2); border-radius: 7px; padding: 4px 7px;
  }
  textarea { resize: vertical; width: 100%; min-height: 48px; }
  input[type=range] { width: 100%; accent-color: var(--accent); }

  #app {
    position: absolute;
    inset: 0;
    display: grid;
    grid-template-columns: 248px 1fr 284px;
    grid-template-rows: auto 1fr auto;
    grid-template-areas: "top top top" "left stage right" "bottom bottom bottom";
  }
  #topbar {
    grid-area: top;
    display: flex; align-items: center; gap: 6px;
    padding: 8px 10px; background: var(--bg2); border-bottom: 1px solid var(--line);
    overflow-x: auto;
  }
  .brand { font-weight: 700; letter-spacing: .3px; margin-right: 8px; white-space: nowrap; }
  .brand b { color: var(--accent); }
  .spacer { flex: 1 1 auto; }
  .sep { width: 1px; align-self: stretch; background: var(--line); margin: 2px 4px; }

  .panel { background: var(--bg2); overflow-y: auto; overflow-x: hidden; }
  #left { grid-area: left; border-right: 1px solid var(--line); }
  #right { grid-area: right; border-left: 1px solid var(--line); }
  .panel section { padding: 10px; border-bottom: 1px solid var(--line); }
  .panel h3 {
    margin: 0 0 7px; font-size: 11px; text-transform: uppercase; letter-spacing: .9px;
    color: var(--fg2); font-weight: 700;
  }
  .toolRail { display: flex; flex-wrap: wrap; gap: 4px; }
  .toolRail button { padding: 5px 7px; flex: 1 1 auto; }
  .tabs { display: flex; gap: 4px; margin-bottom: 8px; }
  .tabs button { flex: 1; }
  .tabs button.on { background: #23405c; border-color: #3d6f9e; color: #cfe6ff; }

  .swatchGrid { display: grid; grid-template-columns: repeat(6, 1fr); gap: 3px; }
  .swatch {
    position: relative; aspect-ratio: 1; border: 1px solid var(--line2); border-radius: 5px;
    background-size: 100% 100%; image-rendering: pixelated; cursor: pointer; padding: 0;
  }
  .swatch.on { border-color: var(--gold); box-shadow: 0 0 0 2px rgba(255,202,69,.35); }

  .catRow { display: flex; flex-wrap: wrap; gap: 3px; margin-bottom: 8px; }
  .catRow button { padding: 3px 6px; font-size: 11px; }
  .propGrid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 4px; }
  .propCell {
    position: relative; aspect-ratio: 1; background: #0a0e13; border: 1px solid var(--line2);
    border-radius: 5px; cursor: pointer; overflow: hidden; padding: 0;
  }
  .propCell.on { border-color: var(--gold); box-shadow: 0 0 0 2px rgba(255,202,69,.35); }
  .propCell canvas { width: 100%; height: 100%; object-fit: contain; image-rendering: pixelated; display: block; }
  .catNote { color: var(--fg3); font-size: 11px; margin-bottom: 6px; }

  #stage { grid-area: stage; position: relative; overflow: hidden; background: #080b0f; }
  #view { position: absolute; inset: 0; width: 100%; height: 100%; display: block; touch-action: none; cursor: crosshair; }
  #view.panning { cursor: grabbing; }
  #view.picking { cursor: copy; }
  #hint {
    position: absolute; left: 10px; bottom: 10px; pointer-events: none;
    background: rgba(10,14,19,.88); border: 1px solid var(--line2); border-radius: 7px;
    padding: 5px 9px; color: #b9c9da; font-size: 11.5px; max-width: 78%;
  }
  #busy {
    position: absolute; inset: 0; display: flex; align-items: center; justify-content: center;
    background: rgba(8,11,15,.62); backdrop-filter: blur(1px); z-index: 5;
  }
  #busy[hidden] { display: none; }
  #busy .box { background: var(--bg2); border: 1px solid var(--line2); border-radius: 12px; padding: 16px 22px; text-align: center; }
  .spinner {
    width: 26px; height: 26px; margin: 0 auto 9px;
    border: 3px solid #2c3b4b; border-top-color: var(--accent); border-radius: 50%;
    animation: spin .8s linear infinite;
  }
  @keyframes spin { to { transform: rotate(360deg); } }

  #statusbar {
    grid-area: bottom; display: flex; align-items: center; gap: 12px;
    padding: 5px 10px; background: var(--bg2); border-top: 1px solid var(--line);
    color: var(--fg2); font-size: 11px; font-variant-numeric: tabular-nums; flex-wrap: wrap;
  }
  #statusbar b { color: var(--fg); font-weight: 600; }
  #miniOverlay {
    position: absolute; right: 10px; bottom: 10px; width: 186px; z-index: 3;
    background: rgba(10,14,19,.9); border: 1px solid var(--line2); border-radius: 9px;
    padding: 7px; box-shadow: 0 6px 20px rgba(0,0,0,.45); backdrop-filter: blur(2px);
  }
  #minimap { display: block; width: 100%; image-rendering: pixelated; border: 1px solid var(--line2); border-radius: 6px; background: #0a0e13; cursor: crosshair; }
  #miniOverlay .aside { text-align: center; margin-top: 5px; line-height: 1.4; }
  @media (max-width: 900px) { #miniOverlay { width: 124px; right: 8px; bottom: 8px; } #miniOverlay .aside { font-size: 9.5px; line-height: 1.3; } }

  .row { display: flex; align-items: center; gap: 6px; margin-bottom: 6px; }
  .row > label { flex: 0 0 74px; color: var(--fg2); font-size: 11px; }
  .row > .val { flex: 0 0 34px; text-align: right; color: var(--fg2); font-size: 11px; font-variant-numeric: tabular-nums; }
  .slider { display: flex; align-items: center; gap: 5px; margin-bottom: 2px; }
  .slider > span { flex: 0 0 78px; color: var(--fg2); font-size: 10.5px; }
  .slider > i { flex: 0 0 26px; text-align: right; color: var(--fg3); font-size: 10.5px; font-style: normal; font-variant-numeric: tabular-nums; }

  .toast {
    position: fixed; left: 50%; bottom: 46px; transform: translateX(-50%);
    background: #1d2a38; border: 1px solid var(--line2); border-radius: 9px;
    padding: 8px 14px; z-index: 40; box-shadow: 0 8px 26px rgba(0,0,0,.5); max-width: 80vw;
  }
  .toast.err { border-color: #7a3b3b; background: #33191b; color: #ffd9d9; }

  .mini-spin {
    display: inline-block; width: 11px; height: 11px; margin-right: 6px;
    border: 2px solid #2c3b4b; border-top-color: var(--accent); border-radius: 50%;
    animation: spin .7s linear infinite; vertical-align: -1px;
  }
  #aiOut { white-space: pre-wrap; word-break: break-word; }
  #loadList .dlgRow { justify-content: space-between; border-bottom: 1px solid var(--line); padding: 7px 0; }
  #loadList .dlgRow:last-child { border-bottom: 0; }

  dialog {
    background: var(--bg2); color: var(--fg); border: 1px solid var(--line2); border-radius: 12px;
    padding: 16px; max-width: 460px; width: 92vw;
  }
  dialog::backdrop { background: rgba(5,8,11,.66); }
  dialog h3 { margin-top: 0; }
  .dlgRow { display: flex; gap: 6px; margin-top: 10px; justify-content: flex-end; }
  .aside { color: var(--fg3); font-size: 11px; }

  @media (max-width: 900px) {
    #app {
      grid-template-columns: 1fr;
      grid-template-rows: auto 1fr auto;
      grid-template-areas: "top" "stage" "bottom";
    }
    #left, #right {
      position: absolute; top: 0; bottom: 0; width: min(88vw, 320px); z-index: 30;
      transition: transform .2s; box-shadow: 0 0 30px rgba(0,0,0,.6);
    }
    #left { left: 0; transform: translateX(-102%); }
    #right { right: 0; transform: translateX(102%); }
    #left.open, #right.open { transform: none; }
    #dpad { display: flex !important; }
  }
`;
var UI_HTML = `
<div id="app">
  <header id="topbar">
    <span class="brand">LPC <b>Map Forge</b></span>
    <button id="genBtn" class="primary" title="Generate a fresh world from the settings on the right">Generate</button>
    <button id="undoBtn" title="Undo (Ctrl+Z)">Undo</button>
    <button id="redoBtn" title="Redo (Ctrl+Shift+Z)">Redo</button>
    <span class="sep"></span>
    <button id="saveBtn" title="Save this map to your browser">Save</button>
    <button id="loadBtn" title="Load a saved map">Load</button>
    <button id="pngBtn" title="Download the full map as a PNG">PNG</button>
    <button id="jsonBtn" title="Download the map data as JSON">JSON</button>
    <button id="importBtn" title="Load map data from a JSON file">Import</button>
    <input type="file" id="importFile" accept=".json,application/json" hidden>
    <span class="sep"></span>
    <button id="fitBtn" title="Fit the map in the view (F)">Fit</button>
    <button id="gridBtn" class="toggle on" title="Show tile grid (G)">Grid</button>
    <button id="propBtn" class="toggle on" title="Show props (P)">Props</button>
    <button id="shadowBtn" class="toggle on" title="Show prop shadows">Shadows</button>
    <span class="spacer"></span>
    <span id="dpad" style="display:none; gap:4px">
      <button id="leftOpen">Palette</button>
      <button id="rightOpen">Settings</button>
    </span>
    <button id="closeBtn" hidden>Close</button>
  </header>

  <aside id="left" class="panel">
    <section>
      <h3>Tools</h3>
      <div class="toolRail" id="toolRail">
        <button data-tool="brush" class="on" title="Paint terrain (B)">Paint</button>
        <button data-tool="rect" title="Rectangle fill (R)">Rect</button>
        <button data-tool="fill" title="Flood fill (F)">Fill</button>
        <button data-tool="line" title="Line (L)">Line</button>
        <button data-tool="pick" title="Eyedropper (I)">Pick</button>
        <button data-tool="prop" title="Place props (T)">Prop</button>
        <button data-tool="select" title="Select / move / delete props (V)">Select</button>
        <button data-tool="pan" title="Pan (H or middle drag)">Pan</button>
      </div>
      <div style="margin-top:8px">
        <div class="slider"><span>Brush size</span><input type="range" id="brushSize" min="1" max="30" value="4"><i id="brushSizeVal">4</i></div>
        <div class="slider"><span>Prop size</span><input type="range" id="propScale" min="50" max="200" value="100"><i id="propScaleVal">100%</i></div>
        <div class="row">
          <label>Shape</label>
          <button id="shapeSquare" class="toggle on">Square</button>
          <button id="shapeRound" class="toggle">Round</button>
        </div>
        <div class="row">
          <label>Randomise</label>
          <button id="scatterBtn" title="Scatter the selected prop naturally over the map">Scatter props</button>
        </div>
        <div class="row">
          <label>Clear props</label>
          <button id="clearPropsBtn" title="Remove every prop from the map">Remove all</button>
        </div>
      </div>
    </section>
    <section>
      <div class="tabs">
        <button class="tab on" data-tab="terrain">Terrain</button>
        <button class="tab" data-tab="props">Props</button>
      </div>
      <div id="terrainPane">
        <div id="terrainPalette" class="swatchGrid"></div>
        <div class="catNote" id="terrainNote" style="margin-top:7px"></div>
      </div>
      <div id="propPane" hidden>
        <div class="catRow" id="propCats"></div>
        <div class="propGrid" id="propPalette"></div>
      </div>
    </section>
  </aside>

  <main id="stage">
    <canvas id="view"></canvas>
    <div id="hint">Left-drag to paint &middot; middle-drag or space to pan &middot; wheel to zoom</div>
    <div id="miniOverlay">
      <canvas id="minimap" title="Click to centre the view here"></canvas>
      <div class="aside" id="mapStats"></div>
    </div>
    <div id="busy" hidden><div class="box"><div class="spinner"></div><span id="busyText">Generating world</span></div></div>
  </main>

  <aside id="right" class="panel">
    <section>
      <h3>World settings</h3>
      <div class="row">
        <label>Theme</label>
        <select id="themeSel" style="flex:1"></select>
      </div>
      <div class="row">
        <label>Seed</label>
        <input type="number" id="seedInput" style="flex:1; min-width:0">
        <button id="randSeedBtn" title="Random seed">Roll</button>
      </div>
      <div class="row">
        <label>Size</label>
        <select id="sizeSel" style="flex:1"></select>
      </div>
      <div id="paramSliders" style="margin-top:8px"></div>
      <button id="resetParamsBtn" style="width:100%; margin-top:4px">Reset to theme default</button>
    </section>
    <section id="aiSection">
      <h3>AI world designer</h3>
      <textarea id="aiPrompt" placeholder="e.g. a rainy temperate island with tall snowy mountains, dense pine forests in the north and sandy beaches in the south"></textarea>
      <div class="row" style="margin-top:6px">
        <button id="aiGenBtn" class="primary" style="flex:1">Generate from description</button>
      </div>
      <div class="row">
        <button id="aiNameBtn" style="flex:1" title="Invent a name and a short legend for this map">Name this map</button>
      </div>
      <div id="aiOut" class="aside" style="margin-top:6px; min-height:16px"></div>
    </section>
    <section>
      <h3>Map info</h3>
      <div class="row"><label>Name</label><input type="text" id="mapName" style="flex:1" placeholder="Unnamed map"></div>
      <div id="legendBox" class="aside"></div>
    </section>
  </aside>

  <footer id="statusbar">
    <span>Tile <b id="stTile">-</b></span>
    <span>Terrain <b id="stTerrain">-</b></span>
    <span>Props <b id="stProps">0</b></span>
    <span>Zoom <b id="stZoom">100%</b></span>
    <span>Size <b id="stSize">-</b></span>
    <span id="stDirty" style="color:var(--gold)"></span>
  </footer>
</div>

<dialog id="saveDlg">
  <h3>Save map</h3>
  <div class="row">
    <label>Name</label>
    <input type="text" id="saveName" style="flex:1">
  </div>
  <div class="aside">Saved maps live in this browser and survive reloads. Saving over an existing name replaces it.</div>
  <div class="dlgRow">
    <button id="saveCancel">Cancel</button>
    <button id="saveOk" class="primary">Save</button>
  </div>
</dialog>

<dialog id="loadDlg">
  <h3>Load map</h3>
  <div id="loadList"></div>
  <div class="dlgRow">
    <button id="loadCancel">Close</button>
  </div>
</dialog>
`;

// ws:src/forge.js
var SIZES = [48, 64, 96, 128, 160, 192, 256];
var KV_FOLDER = "lpcMaps";
var FORMAT = "lpc-map-forge";
var VERSION = 1;
var SLIDERS = [
  ["seaLevel", "Sea level"],
  ["island", "Island-ness"],
  ["fragment", "Fragmentation"],
  ["relief", "Relief"],
  ["temperature", "Temperature"],
  ["moisture", "Moisture"],
  ["snow", "Snow"],
  ["autumn", "Autumn"],
  ["rivers", "Rivers"],
  ["lakes", "Lakes"],
  ["forest", "Forest"],
  ["plants", "Plants"],
  ["rocks", "Rocks"],
  ["paths", "Paths"],
];
var THEME_INHERIT = [
  "temperature",
  "moisture",
  "relief",
  "autumn",
  "snow",
  "island",
  "seaLevel",
  "fragment",
];
var PROP_CATS = [
  { id: "all", label: "All" },
  { id: "tree", label: "Trees" },
  { id: "conifer", label: "Conifers" },
  { id: "bush", label: "Bushes" },
  { id: "plant", label: "Plants" },
  { id: "rock", label: "Rocks" },
];
var AI_PREFIX = `You are the world designer for a top-down fantasy map generator built on the Liberated Pixel Cup (LPC) terrain tileset: grass, light/dark/dead grass, soil, dirt (tan/brown/dark), sand, gravel, snow, ice, mud, cracked earth, rock (white/gray/dark/black), stone, mudstone, shallow/deep ocean water, rivers, lakes and lava.

Translate the player's description into generator settings. Reply with ONLY one JSON object - no prose, no markdown code fence. Use exactly these keys:

{"name":"<evocative map name, 2-4 words>","legend":"<1-2 sentences describing the major regions, landmarks and mood of this map>","theme":"temperate|autumn|tropical|desert|tundra|boreal|swamp|highland|volcanic|archipelago","size":48|64|96|128|160|192|256,"seed":<any integer>,"seaLevel":<0..1>,"island":<0..1>,"fragment":<0..1>,"relief":<0..1>,"temperature":<0..1>,"moisture":<0..1>,"snow":<0..1>,"autumn":<0..1>,"rivers":<0..1>,"lakes":<0..1>,"forest":<0..1>,"plants":<0..1>,"rocks":<0..1>,"paths":<0..1>}

Field meanings: seaLevel higher = more ocean; island higher = smaller landmass ringed by water; fragment higher = the land breaks up into many separate islands and inlets (0 = one solid continent); relief higher = taller mountains and deeper valleys; temperature higher = warmer; moisture higher = wetter (lush/swampy); snow higher = more snow; autumn higher = more orange foliage; rivers/lakes = water feature abundance; forest/plants = vegetation density; rocks = exposed rock and boulders; paths = number of dirt trails carved between flat regions.

Be decisive and express the description strongly - push values well away from 0.5 when the description implies it. Pick a theme whose baseline matches the world (e.g. tropical for jungle islands, volcanic for lava, tundra for frozen wastes).

Player description:
`;
var NAME_PREFIX = `You are naming and describing a map from a top-down fantasy map generator. You will be given the map's generator settings and statistics. Reply with ONLY one JSON object - no prose, no markdown fence: {"name":"<evocative 2-4 word map name>","legend":"<1-2 sentences describing the regions, landmarks and mood>"}.

Map data:
`;
function el(tag, props, children) {
  const n = document.createElement(tag);
  if (props)
    for (const k of Object.keys(props)) {
      const v = props[k];
      if (v == null || v === false) continue;
      if (k === "class") n.className = v;
      else if (k === "text") n.textContent = v;
      else if (k === "html") n.innerHTML = v;
      else if (k === "style" && typeof v === "object")
        Object.assign(n.style, v);
      else if (k.startsWith("on") && typeof v === "function")
        n.addEventListener(k.slice(2).toLowerCase(), v);
      else if (v === true) n.setAttribute(k, "");
      else n.setAttribute(k, v);
    }
  if (children != null)
    for (const c of [].concat(children)) {
      if (c == null || c === false) continue;
      n.appendChild(typeof c === "string" ? document.createTextNode(c) : c);
    }
  return n;
}
function rootScope() {
  try {
    if (typeof root !== "undefined" && root) return root;
  } catch (e) {}
  return window.root || null;
}
function plugin(name) {
  const r = rootScope();
  return r ? r[name] : null;
}
function fmt(v) {
  return Number(v).toFixed(2);
}
function r2(v) {
  return Math.round(v * 100) / 100;
}
function serialize(world, meta) {
  const m = meta || {};
  const out = {
    format: FORMAT,
    version: VERSION,
    name: m.name != null ? String(m.name) : world.name || "",
    legend: m.legend != null ? String(m.legend) : world.legend || "",
    params: { ...(world.params || {}) },
    W: world.W,
    H: world.H,
    cw: world.cw,
    ch: world.ch,
    corners: Array.from(world.corners),
    props: (world.props || []).map((p) => ({ ...p })),
  };
  if (m.saved) out.saved = m.saved;
  if (world.stats) out.stats = { ...world.stats };
  return out;
}
function deserialize(data, fallbackParams) {
  if (!data || typeof data.W !== "number" || !Array.isArray(data.corners))
    throw new Error("not a map file");
  const W = data.W,
    H = data.H,
    cw = data.cw || W + 1,
    ch = data.ch || H + 1;
  const n = cw * ch;
  const corners = Uint8Array.from(data.corners);
  if (corners.length !== n) throw new Error("corner count mismatch");
  const z = () => new Float32Array(n);
  const p = normalizeParams(data.params || fallbackParams);
  return {
    params: p,
    W,
    H,
    cw,
    ch,
    corners,
    props: Array.isArray(data.props) ? data.props.map((r) => ({ ...r })) : [],
    fields: {
      elev: z(),
      water: new Uint8Array(n),
      depth: z(),
      moist: z(),
      temp: z(),
      rock: z(),
      flow: z(),
      distWater: z(),
    },
    stats: data.stats ? { ...data.stats } : null,
    name: data.name || "",
    legend: data.legend || "",
  };
}
function generate(params) {
  return serialize(generateWorld(params || {}));
}
function toTileGrid(world) {
  const W = world.W,
    H = world.H,
    cw = world.cw,
    corners = world.corners;
  const tiles = new Uint8Array(W * H);
  for (let ty = 0; ty < H; ty++) {
    for (let tx = 0; tx < W; tx++) {
      const c0 = corners[ty * cw + tx];
      const c1 = corners[ty * cw + tx + 1];
      const c2 = corners[(ty + 1) * cw + tx];
      const c3 = corners[(ty + 1) * cw + tx + 1];
      let best = c0;
      if (RANK[c1] > RANK[best]) best = c1;
      if (RANK[c2] > RANK[best]) best = c2;
      if (RANK[c3] > RANK[best]) best = c3;
      tiles[ty * W + tx] = best;
    }
  }
  return { W, H, tiles: Array.from(tiles) };
}
var headlessRenderer = null;
async function ensureHeadless(opts) {
  if (!headlessRenderer) headlessRenderer = new Renderer();
  if (!headlessRenderer.ready)
    await headlessRenderer.load({
      tilesetUrl: opts && opts.tilesetUrl,
      propsUrl: opts && opts.propsUrl,
    });
  return headlessRenderer;
}
async function renderFull(world, scale, opts) {
  const r = await ensureHeadless(opts || {});
  return r.renderFull(world, scale || 1, opts || {});
}
async function renderMinimap(world, size, opts) {
  const r = await ensureHeadless(opts || {});
  return r.renderMinimap(world, size || 320);
}
async function renderFullCanvas(world, scale, opts) {
  const src = await renderFull(world, scale, opts);
  const c = document.createElement("canvas");
  c.width = src.width;
  c.height = src.height;
  c.getContext("2d").drawImage(src, 0, 0);
  return c;
}
async function renderMinimapCanvas(world, size, opts) {
  const src = await renderMinimap(world, size, opts);
  const c = document.createElement("canvas");
  c.width = src.width;
  c.height = src.height;
  c.getContext("2d").drawImage(src, 0, 0);
  return c;
}
async function toDataUrl(world, scale, opts) {
  const src = await renderFull(world, scale, opts);
  const blob = src.convertToBlob
    ? await src.convertToBlob({ type: "image/png" })
    : null;
  if (!blob) throw new Error("Render failed");
  return await new Promise((resolve, reject) => {
    const fr = new FileReader();
    fr.onload = () => resolve(fr.result);
    fr.onerror = () => reject(new Error("encode failed"));
    fr.readAsDataURL(blob);
  });
}
var PLUGIN_VERSION = "1.0.0";
function pluginInfo() {
  return {
    name: "lpc-map-forge",
    version: PLUGIN_VERSION,
    themes: Object.keys(THEMES),
    terrains: TERRAINS.slice(),
    sizes: SIZES.slice(),
  };
}
async function mountMapForge(container, options) {
  const o = options || {};
  const shadow =
    container.shadowRoot || container.attachShadow({ mode: "open" });
  shadow.innerHTML = `<style>${UI_CSS}</style>${UI_HTML}`;
  if (o.fullscreen) container.classList.add("forge-fullscreen");
  else container.classList.remove("forge-fullscreen");
  if (o.className)
    container.classList.add(
      ...String(o.className).split(/\s+/).filter(Boolean),
    );
  const $ = (id) => shadow.querySelector("#" + id);
  const $$ = (sel) => shadow.querySelectorAll(sel);
  const renderer = new Renderer();
  const editor = new Editor(renderer);
  let params = normalizeParams({ ...DEFAULT_PARAMS });
  const optionParams = o.params || null;
  const optionTheme = o.theme && THEMES[o.theme] ? o.theme : null;
  const optionSeed =
    o.seed != null ? Math.floor(Number(o.seed) || 0) >>> 0 : null;
  const optionSize = o.size ? Number(o.size) || 0 : 0;
  function applyOptions() {
    if (optionParams) params = normalizeParams({ ...params, ...optionParams });
    if (optionTheme) params.theme = optionTheme;
    if (optionSeed != null) params.seed = optionSeed;
    if (optionSize) params.width = params.height = optionSize;
  }
  let world = null;
  let mapName = o.name || "";
  let legend = "";
  let busyDepth = 0;
  let activeCat = "all";
  let minimapTimer = 0;
  let toastTimer = 0;
  let destroyed = false;
  const listeners = /* @__PURE__ */ new Set();
  const disposers = [];
  function emit(reason) {
    const payload = {
      reason,
      editor,
      world,
      params: world ? world.params : params,
      api,
    };
    for (const cb of Array.from(listeners)) {
      try {
        cb(payload);
      } catch (e) {
        console.error(e);
      }
    }
  }
  function showBusy(label) {
    busyDepth++;
    $("busyText").textContent = label || "Working";
    $("busy").hidden = false;
  }
  function hideBusy() {
    busyDepth = Math.max(0, busyDepth - 1);
    if (!busyDepth) $("busy").hidden = true;
  }
  function nextFrame() {
    return new Promise((r) => requestAnimationFrame(() => setTimeout(r, 16)));
  }
  async function withBusy(label, fn) {
    showBusy(label);
    await nextFrame();
    try {
      return await fn();
    } finally {
      hideBusy();
    }
  }
  function toast(msg, isErr) {
    const t = el("div", { class: "toast" + (isErr ? " err" : ""), text: msg });
    shadow.appendChild(t);
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => t.remove(), isErr ? 5200 : 2600);
  }
  function download(blob, filename) {
    const url = URL.createObjectURL(blob);
    const a = el("a", { href: url, download: filename });
    document.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 5e3);
  }
  function safeName() {
    const n = ($("mapName").value || "lpc-map").trim();
    return (
      n
        .replace(/[^a-z0-9\-_ ]+/gi, "")
        .replace(/\s+/g, "-")
        .toLowerCase() || "lpc-map"
    );
  }
  function applyThemeParams(t) {
    if (!t) return;
    for (const k of THEME_INHERIT) if (t[k] !== void 0) params[k] = t[k];
    params.waterTint = t.waterTint || "auto";
    params.volcanic = !!t.volcanic;
  }
  function buildTerrainPalette() {
    const ctn = $("terrainPalette");
    ctn.innerHTML = "";
    TERRAINS.forEach((name, i) => {
      const c = document.createElement("canvas");
      c.width = 32;
      c.height = 32;
      const g = c.getContext("2d");
      g.imageSmoothingEnabled = false;
      const id = BASE[i];
      g.drawImage(
        renderer.terrainImg,
        (id % COLUMNS) * TILE,
        Math.floor(id / COLUMNS) * TILE,
        TILE,
        TILE,
        0,
        0,
        32,
        32,
      );
      const b = el(
        "button",
        { class: "swatch", title: name.replace(/_/g, " "), "data-terrain": i },
        [c],
      );
      b.addEventListener("click", () => {
        editor.setTerrain(i);
        editor.setTool("brush");
      });
      ctn.appendChild(b);
    });
  }
  function propThumb(idx, size) {
    const row = PROPS[idx];
    const c = document.createElement("canvas");
    c.width = size;
    c.height = size;
    const g = c.getContext("2d");
    g.imageSmoothingEnabled = true;
    g.imageSmoothingQuality = "high";
    const pad = 3;
    const s = Math.min((size - pad * 2) / row[2], (size - pad * 2) / row[3]);
    const w = row[2] * s,
      h = row[3] * s;
    g.drawImage(
      renderer.propImg,
      row[0],
      row[1],
      row[2],
      row[3],
      (size - w) / 2,
      (size - h) / 2,
      w,
      h,
    );
    return c;
  }
  function propsInCat(id) {
    const out = [];
    PROPS.forEach((row, i) => {
      const k = row[4];
      if (id === "all") out.push(i);
      else if (id === "conifer" && (k === "conifer" || k === "conifer_snow"))
        out.push(i);
      else if (k === id) out.push(i);
    });
    return out;
  }
  function buildPropPalette() {
    const cats = $("propCats");
    cats.innerHTML = "";
    for (const c of PROP_CATS) {
      const b = el("button", {
        class: "toggle" + (c.id === activeCat ? " on" : ""),
        text: c.label,
      });
      b.addEventListener("click", () => {
        activeCat = c.id;
        buildPropPalette();
      });
      cats.appendChild(b);
    }
    const grid = $("propPalette");
    grid.innerHTML = "";
    for (const i of propsInCat(activeCat)) {
      const row = PROPS[i];
      const b = el(
        "button",
        {
          class: "propCell" + (i === editor.propIndex ? " on" : ""),
          title: row[4] + " / " + row[5] + " #" + row[6],
          "data-prop": i,
        },
        [propThumb(i, 48)],
      );
      b.addEventListener("click", () => editor.setProp(i));
      grid.appendChild(b);
    }
  }
  function buildParamSliders() {
    const ctn = $("paramSliders");
    ctn.innerHTML = "";
    for (const [key, label] of SLIDERS) {
      const input = el("input", {
        type: "range",
        min: "0",
        max: "1",
        step: "0.01",
        value: String(params[key]),
        "data-param": key,
      });
      const val = el("i", { text: fmt(params[key]) });
      input.addEventListener("input", () => {
        params[key] = +input.value;
        val.textContent = fmt(params[key]);
      });
      input.addEventListener("change", () => {
        params[key] = +input.value;
        val.textContent = fmt(params[key]);
        markSettingsChanged();
      });
      ctn.appendChild(
        el("div", { class: "slider" }, [
          el("span", { text: label }),
          input,
          val,
        ]),
      );
    }
  }
  function syncSliders(p) {
    const ctn = $("paramSliders");
    for (const [key] of SLIDERS) {
      const input = ctn.querySelector('input[data-param="' + key + '"]');
      if (!input) continue;
      input.value = String(p[key]);
      const i = input.nextElementSibling;
      if (i) i.textContent = fmt(p[key]);
    }
  }
  function markSettingsChanged() {
    $("genBtn").classList.add("primary");
  }
  function buildThemeAndSize() {
    const th = $("themeSel");
    th.innerHTML = "";
    for (const key of Object.keys(THEMES))
      th.appendChild(
        el("option", { value: key, text: THEMES[key].label || key }),
      );
    th.addEventListener("change", () => {
      const t = THEMES[th.value];
      if (t) {
        applyThemeParams(t);
        syncSliders(params);
      }
      params.theme = th.value;
      regenerate();
    });
    const sz = $("sizeSel");
    sz.innerHTML = "";
    for (const s of SIZES)
      sz.appendChild(el("option", { value: String(s), text: s + " x " + s }));
    sz.value = String(params.width);
    sz.addEventListener("change", () => {
      params.width = params.height = +sz.value;
      regenerate();
    });
  }
  function syncWorldUI(p) {
    $("themeSel").value = p.theme;
    $("seedInput").value = String(p.seed);
    $("sizeSel").value = String(p.width);
    syncSliders(p);
  }
  function regenerate() {
    return withBusy("Generating world", () => {
      params = normalizeParams(params);
      const w = generateWorld(params);
      w.name = mapName;
      w.legend = legend;
      world = w;
      editor.setWorld(w);
      renderer.ensureWorldImage(w);
      syncWorldUI(w.params);
      refreshStats();
      scheduleMinimap();
      $("genBtn").classList.remove("primary");
      emit("generate");
    });
  }
  function refreshStats() {
    if (!world) return;
    const s = world.stats || {};
    const landPct =
      s.land != null
        ? Math.round((s.land / (world.cw * world.ch)) * 100)
        : null;
    $("mapStats").textContent = [
      landPct != null ? landPct + "% land" : null,
      s.riverCells != null ? s.riverCells + " rivers" : null,
      s.pathsMade ? s.pathsMade + (s.pathsMade > 1 ? " roads" : " road") : null,
    ]
      .filter(Boolean)
      .join(" \xB7 ");
  }
  function scheduleMinimap() {
    clearTimeout(minimapTimer);
    minimapTimer = setTimeout(drawMinimap, 220);
  }
  function drawMinimap() {
    if (!world || !renderer.ready) return;
    const src = editor.refreshMinimap();
    if (!src) return;
    const cvs = $("minimap");
    cvs.width = src.width;
    cvs.height = src.height;
    const g = cvs.getContext("2d");
    g.imageSmoothingEnabled = false;
    g.clearRect(0, 0, src.width, src.height);
    g.drawImage(src, 0, 0);
    $("mapStats").dataset.ready = "1";
  }
  function updateToolUI() {
    const rail = $("toolRail");
    for (const b of rail.querySelectorAll("button"))
      b.classList.toggle("on", b.dataset.tool === editor.tool);
    $("shapeSquare").classList.toggle("on", editor.shape === "square");
    $("shapeRound").classList.toggle("on", editor.shape === "round");
  }
  function updateTerrainUI() {
    const ctn = $("terrainPalette");
    for (const b of ctn.querySelectorAll("button"))
      b.classList.toggle("on", +b.dataset.terrain === editor.terrain);
    $("terrainNote").textContent = TERRAINS[editor.terrain].replace(/_/g, " ");
  }
  function updatePropUI() {
    for (const b of $("propPalette").querySelectorAll("button"))
      b.classList.toggle("on", +b.dataset.prop === editor.propIndex);
  }
  function updateHistoryUI() {
    $("undoBtn").disabled = !editor.canUndo();
    $("redoBtn").disabled = !editor.canRedo();
  }
  function switchTab(name) {
    for (const b of $$(".tab"))
      b.classList.toggle("on", b.dataset.tab === name);
    $("terrainPane").hidden = name !== "terrain";
    $("propPane").hidden = name !== "props";
  }
  function wireToolbar() {
    $("genBtn").addEventListener("click", () => regenerate());
    $("undoBtn").addEventListener("click", () => editor.undo());
    $("redoBtn").addEventListener("click", () => editor.redo());
    $("fitBtn").addEventListener("click", () => editor.fit());
    $("gridBtn").addEventListener("click", (e) => {
      editor.opts.grid = !editor.opts.grid;
      e.currentTarget.classList.toggle("on", editor.opts.grid);
      editor.requestDraw();
    });
    $("propBtn").addEventListener("click", (e) => {
      editor.opts.props = !editor.opts.props;
      e.currentTarget.classList.toggle("on", editor.opts.props);
      editor.requestDraw();
    });
    $("shadowBtn").addEventListener("click", (e) => {
      editor.opts.shadows = !editor.opts.shadows;
      e.currentTarget.classList.toggle("on", editor.opts.shadows);
      editor.requestDraw();
    });
    $("randSeedBtn").addEventListener("click", () => {
      params.seed = Math.floor(Math.random() * 1e9);
      $("seedInput").value = String(params.seed);
      regenerate();
    });
    $("seedInput").addEventListener("change", () => {
      params.seed = Math.max(0, Math.floor(+$("seedInput").value || 0));
      regenerate();
    });
    $("resetParamsBtn").addEventListener("click", () => {
      const t = THEMES[params.theme] || {};
      const base = { ...DEFAULT_PARAMS };
      for (const k of THEME_INHERIT)
        base[k] = t[k] !== void 0 ? t[k] : DEFAULT_PARAMS[k];
      base.theme = params.theme;
      base.seed = params.seed;
      base.width = base.height = params.width;
      base.waterTint = t.waterTint || "auto";
      base.volcanic = !!t.volcanic;
      params = base;
      syncSliders(params);
      regenerate();
    });
    for (const b of $("toolRail").querySelectorAll("button")) {
      b.addEventListener("click", () => {
        editor.setTool(b.dataset.tool);
        if (editor.tool === "prop" && editor.propIndex < 0) switchTab("props");
      });
    }
    $("brushSize").addEventListener("input", (e) => {
      editor.setBrushSize(+e.target.value);
      $("brushSizeVal").textContent = e.target.value;
    });
    $("propScale").addEventListener("input", (e) => {
      editor.setPropScale(+e.target.value / 100);
      $("propScaleVal").textContent = e.target.value + "%";
    });
    $("shapeSquare").addEventListener("click", () => {
      editor.setShape("square");
      updateToolUI();
    });
    $("shapeRound").addEventListener("click", () => {
      editor.setShape("round");
      updateToolUI();
    });
    $("clearPropsBtn").addEventListener("click", () => {
      if (world && world.props.length) {
        editor.clearProps();
        refreshStats();
        scheduleMinimap();
        toast("Removed all props");
      }
    });
    $("scatterBtn").addEventListener("click", scatter);
    for (const b of $$(".tab"))
      b.addEventListener("click", () => switchTab(b.dataset.tab));
    $("leftOpen").addEventListener("click", () => {
      $("left").classList.toggle("open");
      $("right").classList.remove("open");
    });
    $("rightOpen").addEventListener("click", () => {
      $("right").classList.toggle("open");
      $("left").classList.remove("open");
    });
    $("view").addEventListener("pointerdown", () => {
      $("left").classList.remove("open");
      $("right").classList.remove("open");
    });
    $("minimap").addEventListener("click", (e) => {
      if (!world) return;
      const r = e.currentTarget.getBoundingClientRect();
      const fx = (e.clientX - r.left) / r.width,
        fy = (e.clientY - r.top) / r.height;
      editor.centerOn(fx * world.W * TILE, fy * world.H * TILE);
    });
    $("pngBtn").addEventListener("click", exportPng);
    $("jsonBtn").addEventListener("click", exportJson);
    $("importBtn").addEventListener("click", () => $("importFile").click());
    $("importFile").addEventListener("change", importJson);
    $("saveBtn").addEventListener("click", openSave);
    $("loadBtn").addEventListener("click", openLoad);
    $("aiGenBtn").addEventListener("click", aiGenerate);
    $("aiNameBtn").addEventListener("click", aiName);
    $("view").addEventListener(
      "wheel",
      (e) => {
        if (e.ctrlKey) e.preventDefault();
      },
      { passive: false },
    );
  }
  async function exportPng() {
    if (!world) return;
    const px = world.W * TILE;
    let scale = 1;
    for (const s of [4, 3, 2, 1, 0.5, 0.25]) {
      if (px * s <= 4096) {
        scale = s;
        break;
      }
    }
    await withBusy("Rendering PNG", async () => {
      const canvas = renderer.renderFull(world, scale);
      const blob = canvas.convertToBlob
        ? await canvas.convertToBlob({ type: "image/png" })
        : null;
      if (!blob) throw new Error("Render failed");
      download(blob, safeName() + ".png");
    });
    toast("PNG exported (" + Math.round(px * scale) + "px wide)");
  }
  function exportJson() {
    if (!world) return;
    const data = serialize(world, {
      name: $("mapName").value,
      legend: $("legendBox").textContent,
    });
    download(
      new Blob([JSON.stringify(data)], { type: "application/json" }),
      safeName() + ".json",
    );
    toast("Map JSON exported");
  }
  async function importJson(e) {
    const file = e.target.files && e.target.files[0];
    e.target.value = "";
    if (!file) return;
    try {
      const data = JSON.parse(await file.text());
      loadMapData(data);
      toast("Imported " + file.name);
    } catch (err) {
      toast("Import failed: " + err.message, true);
    }
  }
  function loadMapData(data) {
    const w = deserialize(data, params);
    world = w;
    params = w.params;
    mapName = data.name || "Imported map";
    legend = data.legend || "";
    editor.setWorld(w);
    syncWorldUI(w.params);
    $("mapName").value = mapName;
    $("legendBox").textContent = legend;
    refreshStats();
    scheduleMinimap();
    emit("load");
    return w;
  }
  function scatter() {
    if (!world) return;
    const idx = editor.propIndex;
    if (idx >= 0) {
      const n = scatterOne(idx);
      toast(
        n
          ? "Scattered " + n + " " + PROPS[idx][4]
          : "Nothing suitable to place here",
        !n,
      );
      refreshStats();
      scheduleMinimap();
      emit("edit");
      return;
    }
    withBusy("Scattering props", () => {
      editor._beginOp("scatter");
      world.props = scatterWorldProps(world, world.params);
      editor._commitOp();
      editor.markDirty(true);
      editor.minimapDirty = true;
      editor.afterEdit();
    });
    toast("Scattered " + world.props.length + " props");
    refreshStats();
    scheduleMinimap();
    emit("edit");
  }
  function scatterOne(idx) {
    const row = PROPS[idx];
    const kind = row[4];
    const step =
      kind === "plant" ? 20 : kind === "bush" ? 26 : kind === "rock" ? 40 : 42;
    const minSep = Math.max(7, row[2] * (kind === "plant" ? 0.32 : 0.55));
    const seed = world.params.seed;
    const rnd = mulberry32((seed ^ 20973) >>> 0);
    const CELL = 16;
    const occ = /* @__PURE__ */ new Map();
    const gk = (gx, gy) => gx * 1e5 + gy;
    const occupy = (x, y) => {
      const k = gk(Math.floor(x / CELL), Math.floor(y / CELL));
      if (!occ.has(k)) occ.set(k, [x, y]);
    };
    const occupied = (x, y, r) => {
      const span = Math.ceil(r / CELL),
        gx = Math.floor(x / CELL),
        gy = Math.floor(y / CELL);
      for (let dy = -span; dy <= span; dy++)
        for (let dx = -span; dx <= span; dx++) {
          const s = occ.get(gk(gx + dx, gy + dy));
          if (s && (s[0] - x) * (s[0] - x) + (s[1] - y) * (s[1] - y) < r * r)
            return true;
        }
      return false;
    };
    for (const p of world.props) {
      const pr = PROPS[p.s];
      occupy(p.x, p.y);
      if (pr)
        occ.get(gk(Math.floor(p.x / CELL), Math.floor(p.y / CELL)))[2] = pr[2];
    }
    const water = world.fields && world.fields.water;
    const added = [];
    editor._beginOp("scatter prop");
    const worldW = world.W * TILE,
      worldH = world.H * TILE;
    for (let y = 4; y < worldH; y += step) {
      for (let x = 4; x < worldW; x += step) {
        const jx = x + (rnd() - 0.5) * step * 0.9;
        const jy = y + (rnd() - 0.5) * step * 0.9;
        if (jx < 2 || jy < 2 || jx > worldW - 2 || jy > worldH - 2) continue;
        const ci =
          clamp(Math.round(jy / TILE), 0, world.ch - 1) * world.cw +
          clamp(Math.round(jx / TILE), 0, world.cw - 1);
        if (water && water[ci]) continue;
        const clump =
          0.45 + valueNoise2D(jx * 16e-4, jy * 16e-4, seed + 4242) * 1.15;
        if (rnd() > clump) continue;
        if (occupied(jx, jy, minSep)) continue;
        occupy(jx, jy);
        added.push({
          x: Math.round(jx),
          y: Math.round(jy),
          s: idx,
          flip: rnd() < 0.5 ? 1 : 0,
          kind,
          sc: editor.propScale,
        });
      }
    }
    if (!added.length) {
      editor._cancelOp();
      return 0;
    }
    world.props = world.props.concat(added);
    world.props.sort((a, b) => a.y - b.y || a.x - b.x);
    editor._commitOp();
    editor.markDirty(true);
    editor.minimapDirty = true;
    editor.afterEdit();
    return added.length;
  }
  function openSave() {
    const dlg = $("saveDlg");
    $("saveName").value = $("mapName").value || "My map";
    dlg.showModal();
    setTimeout(() => $("saveName").select(), 30);
  }
  async function doSave() {
    const slot = $("saveName").value.trim() || "My map";
    const kv = plugin("kv");
    if (!kv) {
      toast("Storage plugin unavailable", true);
      return false;
    }
    const data = serialize(world, {
      name: $("mapName").value.trim() || slot,
      legend: $("legendBox").textContent,
      saved: Date.now(),
    });
    try {
      await kv[KV_FOLDER].set(slot, data);
      if (!$("mapName").value.trim()) $("mapName").value = slot;
      editor.markDirty(false);
      toast("Saved \u201C" + slot + "\u201D");
      return true;
    } catch (err) {
      toast("Save failed: " + err.message, true);
      return false;
    }
  }
  async function openLoad() {
    const kv = plugin("kv");
    const list = $("loadList");
    list.innerHTML = "";
    if (!kv) {
      list.appendChild(
        el("div", { class: "aside", text: "Storage plugin unavailable." }),
      );
      $("loadDlg").showModal();
      return;
    }
    $("loadDlg").showModal();
    list.appendChild(el("div", { class: "aside", text: "Loading\u2026" }));
    let keys = [];
    try {
      keys = await kv[KV_FOLDER].keys();
    } catch (e) {}
    list.innerHTML = "";
    if (!keys || !keys.length) {
      list.appendChild(
        el("div", { class: "aside", text: "No saved maps yet." }),
      );
      return;
    }
    const metas = [];
    for (const k of keys) {
      let m = null;
      try {
        m = await kv[KV_FOLDER].get(k);
      } catch (e) {}
      metas.push({
        name: k,
        saved: m && m.saved,
        size: m ? m.W + "x" + m.H : "?",
      });
    }
    metas.sort((a, b) => (b.saved || 0) - (a.saved || 0));
    for (const m of metas) {
      const load = el("button", { class: "primary", text: "Load" });
      load.addEventListener("click", async () => {
        const data = await kv[KV_FOLDER].get(m.name);
        try {
          loadMapData(data);
          $("loadDlg").close();
          toast("Loaded \u201C" + m.name + "\u201D");
        } catch (err) {
          toast("Load failed: " + err.message, true);
        }
      });
      const del = el("button", { text: "Delete" });
      del.addEventListener("click", async () => {
        await kv[KV_FOLDER].delete(m.name);
        row.remove();
        toast("Deleted \u201C" + m.name + "\u201D");
      });
      const row = el(
        "div",
        {
          class: "dlgRow",
          style: { justifyContent: "space-between", alignItems: "center" },
        },
        [
          el("div", {}, [
            el("div", { text: m.name }),
            el("div", {
              class: "aside",
              text:
                m.size +
                "  \xB7  " +
                (m.saved ? new Date(m.saved).toLocaleString() : ""),
            }),
          ]),
          el("div", { style: { display: "flex", gap: "6px" } }, [load, del]),
        ],
      );
      list.appendChild(row);
    }
  }
  async function aiCall(instruction, onText) {
    const generateText = plugin("generateText");
    if (!generateText) throw new Error("AI plugin unavailable");
    let buf = "";
    const fn = generateText({
      instruction,
      onChunk: (d) => {
        buf += (d && d.textChunk) || "";
        if (onText) onText(buf);
      },
    });
    const res = await fn;
    if (typeof res === "string" && res.length >= buf.length) return res;
    if (typeof res === "string" && res) return res;
    if (res && typeof res.text === "string") return res.text;
    return buf;
  }
  function extractJson(text) {
    if (!text) return null;
    let t = String(text)
      .replace(/```json/gi, "")
      .replace(/```/g, "")
      .trim();
    const a = t.indexOf("{"),
      b = t.lastIndexOf("}");
    if (a < 0 || b <= a) return null;
    t = t.slice(a, b + 1);
    try {
      return JSON.parse(t);
    } catch (e) {}
    try {
      return JSON.parse(t.replace(/,\s*([}\]])/g, "$1"));
    } catch (e) {}
    return null;
  }
  function aiBusy(label) {
    const out = $("aiOut");
    out.innerHTML = "";
    const tx = el("span", { text: label });
    out.append(el("span", { class: "mini-spin" }), tx);
    return tx;
  }
  async function aiGenerate() {
    const desc = $("aiPrompt").value.trim();
    if (!desc) {
      toast("Describe the world you want first", true);
      return;
    }
    const btn = $("aiGenBtn");
    btn.disabled = true;
    const tx = aiBusy("Designing your world\u2026");
    try {
      const text = await aiCall(AI_PREFIX + desc + "\n", (buf) => {
        const s = buf.replace(/\s+/g, " ").trim();
        tx.textContent = s.length > 140 ? s.slice(s.length - 140) : s;
      });
      const spec = extractJson(text);
      if (!spec)
        throw new Error(
          "Could not understand the AI response - try rephrasing",
        );
      const next = { ...params };
      for (const k of [
        "seaLevel",
        "island",
        "fragment",
        "relief",
        "temperature",
        "moisture",
        "snow",
        "autumn",
        "rivers",
        "lakes",
        "forest",
        "plants",
        "rocks",
        "paths",
      ]) {
        const v = Number(spec[k]);
        if (Number.isFinite(v)) next[k] = clamp(v, 0, 1);
      }
      next.theme = THEMES[spec.theme] ? spec.theme : params.theme;
      next.width = next.height = nearestSize(spec.size) || params.width;
      next.seed = Number.isFinite(Number(spec.seed))
        ? Math.floor(Number(spec.seed)) >>> 0
        : Math.floor(Math.random() * 1e9);
      const ex = THEMES[next.theme] || {};
      next.waterTint = ex.waterTint || "auto";
      params = next;
      if (spec.name) {
        mapName = spec.name;
        $("mapName").value = spec.name;
      }
      legend = spec.legend || "";
      $("legendBox").textContent = legend;
      editor.markDirty(true);
      await regenerate();
      const out = $("aiOut");
      out.innerHTML = "";
      out.append(el("b", { text: spec.name || "New world" }));
      out.append(el("div", { text: spec.legend || "" }));
      out.append(
        el("div", {
          class: "aside",
          text:
            THEMES[next.theme].label +
            " \xB7 " +
            next.width +
            "x" +
            next.height +
            " \xB7 seed " +
            next.seed,
        }),
      );
    } catch (err) {
      const out = $("aiOut");
      out.innerHTML = "";
      out.append(
        el("span", {
          text: err.message || "Generation failed",
          style: { color: "var(--danger)" },
        }),
      );
    } finally {
      btn.disabled = false;
    }
  }
  function nearestSize(v) {
    const n = Number(v);
    if (!Number.isFinite(n)) return 0;
    let best = SIZES[0],
      bd = Infinity;
    for (const s of SIZES) {
      const d = Math.abs(s - n);
      if (d < bd) {
        bd = d;
        best = s;
      }
    }
    return best;
  }
  async function aiName() {
    if (!world) return;
    const btn = $("aiNameBtn");
    btn.disabled = true;
    const tx = aiBusy("Naming\u2026");
    try {
      const summary = {
        theme: world.params.theme,
        size: world.W + "x" + world.H,
        seaLevel: r2(world.params.seaLevel),
        island: r2(world.params.island),
        relief: r2(world.params.relief),
        temperature: r2(world.params.temperature),
        moisture: r2(world.params.moisture),
        snow: r2(world.params.snow),
        forest: r2(world.params.forest),
        rivers: r2(world.params.rivers),
        landFraction: world.stats
          ? r2(world.stats.land / (world.cw * world.ch))
          : null,
        riverTiles: world.stats ? world.stats.riverCells : null,
        props: world.props.length,
      };
      const text = await aiCall(
        NAME_PREFIX + JSON.stringify(summary) + "\n",
        (buf) => {
          const s = buf.replace(/\s+/g, " ").trim();
          tx.textContent = s.length > 120 ? s.slice(s.length - 120) : s;
        },
      );
      const spec = extractJson(text) || {};
      const name = spec.name || String(text).trim().split("\n")[0].slice(0, 60);
      const lg = spec.legend || "";
      mapName = name;
      legend = lg;
      $("mapName").value = name;
      $("legendBox").textContent = lg;
      editor.markDirty(true);
      const out = $("aiOut");
      out.innerHTML = "";
      out.append(el("b", { text: name }));
      if (lg) out.append(el("div", { text: lg }));
    } catch (err) {
      const out = $("aiOut");
      out.innerHTML = "";
      out.append(
        el("span", {
          text: err.message || "Naming failed",
          style: { color: "var(--danger)" },
        }),
      );
    } finally {
      btn.disabled = false;
    }
  }
  function wireEditor() {
    editor.onStatus = (s) => {
      $("stTile").textContent = s.tx == null ? "-" : s.tx + "," + s.ty;
      $("stTerrain").textContent =
        s.terrain == null ? "-" : TERRAINS[s.terrain].replace(/_/g, " ");
      $("stProps").textContent = String(s.props);
      $("stZoom").textContent = Math.round(s.zoom * 100) + "%";
      $("stSize").textContent = s.size;
    };
    editor.onChange = (kind) => {
      if (kind === "tool") updateToolUI();
      else if (kind === "terrain") updateTerrainUI();
      else if (kind === "prop") updatePropUI();
      if (kind === "paint" || kind === "edit") {
        refreshStats();
        scheduleMinimap();
      }
      emit(kind);
    };
    editor.onHistory = updateHistoryUI;
    editor.onDirty = (v) => {
      $("stDirty").textContent = v ? "\u25CF unsaved changes" : "";
    };
    const ro = new ResizeObserver(() => editor.resize());
    ro.observe($("stage"));
    disposers.push(() => ro.disconnect());
    const onBeforeUnload = (e) => {
      if (editor.dirty) {
        e.preventDefault();
        e.returnValue = "";
      }
    };
    window.addEventListener("beforeunload", onBeforeUnload);
    disposers.push(() =>
      window.removeEventListener("beforeunload", onBeforeUnload),
    );
  }
  function wireDialogs() {
    $("saveOk").addEventListener("click", async (e) => {
      e.preventDefault();
      if (await doSave()) $("saveDlg").close();
    });
    $("saveCancel").addEventListener("click", (e) => {
      e.preventDefault();
      $("saveDlg").close();
    });
    $("loadCancel").addEventListener("click", (e) => {
      e.preventDefault();
      $("loadDlg").close();
    });
    $("saveName").addEventListener("keydown", async (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        if (await doSave()) $("saveDlg").close();
      }
    });
  }
  function applyConfig() {
    if (o.useHostConfig === false) return;
    const r = rootScope();
    const cfg = r && r.config;
    if (!cfg) return;
    for (const k of Object.keys(DEFAULT_PARAMS)) {
      let v;
      try {
        v = cfg[k];
      } catch (e) {
        continue;
      }
      if (v == null || v === "") continue;
      const d = DEFAULT_PARAMS[k];
      if (typeof d === "number") {
        const n = Number(v);
        if (Number.isFinite(n)) params[k] = n;
      } else if (typeof d === "string") params[k] = String(v);
    }
  }
  let api = null;
  async function boot() {
    applyConfig();
    applyOptions();
    if (o.showAI === false) $("aiSection").hidden = true;
    if (o.showSave === false) {
      $("saveBtn").hidden = true;
      $("loadBtn").hidden = true;
    }
    buildThemeAndSize();
    buildParamSliders();
    wireToolbar();
    wireEditor();
    wireDialogs();
    updateToolUI();
    if (o.onClose) {
      const cb = $("closeBtn");
      cb.hidden = false;
      cb.addEventListener("click", () => {
        try {
          o.onClose(api);
        } catch (e) {
          console.error(e);
        }
        api.destroy();
      });
    }
    showBusy("Loading tilesets\u2026");
    await nextFrame();
    await renderer.load({ tilesetUrl: o.tilesetUrl, propsUrl: o.propsUrl });
    editor.attach($("view"));
    buildTerrainPalette();
    buildPropPalette();
    updateTerrainUI();
    editor.setTerrain(TERRAIN_INDEX.Grass);
    editor.setTool("brush");
    updateTerrainUI();
    hideBusy();
    window.__app = api;
    if (o.map) loadMapData(o.map);
    else await regenerate();
    if (mapName) $("mapName").value = mapName;
    $("legendBox").textContent = legend;
    editor.status();
  }
  api = {
    el: container,
    shadow,
    renderer,
    editor,
    get world() {
      return world;
    },
    get params() {
      return world ? world.params : params;
    },
    get name() {
      return mapName;
    },
    get legend() {
      return legend;
    },
    getName: () => mapName,
    getLegend: () => legend,
    setName: (n) => {
      mapName = String(n || "");
      $("mapName").value = mapName;
    },
    setLegend: (l) => {
      legend = String(l || "");
      $("legendBox").textContent = legend;
    },
    getMap: () => (world ? serialize(world, { name: mapName, legend }) : null),
    setMap: (data) => loadMapData(data),
    generate: (p) => {
      if (p) params = normalizeParams({ ...params, ...p });
      return regenerate();
    },
    setParams: (p) => {
      params = normalizeParams({ ...params, ...(p || {}) });
      syncWorldUI(params);
    },
    setSeed: (s) => {
      params.seed = Math.floor(Number(s) || 0) >>> 0;
      return regenerate();
    },
    setTheme: (t) => {
      if (THEMES[t]) {
        params.theme = t;
        applyThemeParams(THEMES[t]);
        syncWorldUI(params);
      }
      return regenerate();
    },
    setSize: (n) => {
      params.width = params.height = Number(n) || params.width;
      return regenerate();
    },
    scatter: (propIndex) => {
      if (propIndex != null) editor.setProp(propIndex);
      return scatter();
    },
    renderMinimap: async (size) => {
      if (!renderer.ready)
        await renderer.load({ tilesetUrl: o.tilesetUrl, propsUrl: o.propsUrl });
      return renderer.renderMinimap(world, size || 320);
    },
    renderFull: async (scale, ropts) => {
      if (!renderer.ready)
        await renderer.load({ tilesetUrl: o.tilesetUrl, propsUrl: o.propsUrl });
      return renderer.renderFull(world, scale || 1, ropts || {});
    },
    exportPng,
    exportJson,
    serialize: () =>
      world ? serialize(world, { name: mapName, legend }) : null,
    toTileGrid: () => (world ? toTileGrid(world) : null),
    onChange: (cb) => {
      listeners.add(cb);
      return () => listeners.delete(cb);
    },
    markDirty: (v) => editor.markDirty(v),
    isDirty: () => editor.dirty,
    focus: () => $("view").focus(),
    destroy: () => {
      if (destroyed) return;
      destroyed = true;
      listeners.clear();
      clearTimeout(minimapTimer);
      clearTimeout(toastTimer);
      for (const d of disposers.splice(0)) {
        try {
          d();
        } catch (e) {}
      }
      try {
        editor.detach();
      } catch (e) {}
      shadow.innerHTML = "";
      container.classList.remove("forge-fullscreen");
      if (window.__app === api) window.__app = null;
    },
    ready: null,
  };
  api.ready = boot().then(() => api);
  await api.ready;
  return api;
}
async function openMapForge(options) {
  const o = { ...(options || {}) };
  o.fullscreen = true;
  const outerClose = o.onClose;
  const host = document.createElement("div");
  host.id = "forgeOverlayHost";
  host.style.cssText = "position:fixed;inset:0;z-index:2147483000";
  document.body.appendChild(host);
  let inst = null;
  o.onClose = (i) => {
    if (outerClose) outerClose(i);
  };
  try {
    inst = await mountMapForge(host, o);
  } catch (e) {
    host.remove();
    throw e;
  }
  const innerDestroy = inst.destroy.bind(inst);
  inst.destroy = () => {
    innerDestroy();
    host.remove();
  };
  inst.close = inst.destroy;
  return inst;
}
export {
  DEFAULT_PARAMS,
  PLUGIN_VERSION,
  PROPS,
  TERRAINS,
  THEMES,
  deserialize,
  generate,
  generateWorld,
  mountMapForge,
  normalizeParams,
  openMapForge,
  pluginInfo,
  renderFull,
  renderFullCanvas,
  renderMinimap,
  renderMinimapCanvas,
  serialize,
  toDataUrl,
  toTileGrid,
};
