const solver = require("./solver.js")

const cases =  [
    [
        ['X', 'X', 'X'],
        ['X', '.', 'X'],
        ['X', '.', 'X'],
        ['X', '.', 'X'],
        ['X', 'X', 'X'],
    ],
    [
        ['X', '.', '.','.','X'],
        ['X', '.', '.','.','X'],
        ['X', 'X', 'X','X','X'],
    ],
    [
        [
            "X",
            "X",
            "X"
        ],
        [
            "X",
            ".",
            "X"
        ],
        [
            "X",
            ".",
            "X"
        ],
        [
            "X",
            ".",
            "X"
        ],
        [
            "X",
            "X",
            "X"
        ]
    ],
    [
        [
            "X",
            ".",
            "X",
            ".",
            "X"
        ],
        [
            "X",
            ".",
            "X",
            ".",
            "X"
        ],
        [
            "X",
            "X",
            "X",
            "X",
            "X"
        ]
    ],
]

for (const idx in cases) {
    const testCase = cases[idx]
    console.log("===============")
    console.log(testCase)
    console.log("==>")
    console.log(solver(testCase))
}

