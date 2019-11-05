const solver = require("./solver.js")
const cases = require('./requests/req.json')


const testCase = cases[4]
testCase.forEach(x => {
    x.forEach(y => {
        process.stdout.write(y)
    })
    console.log()
})
console.log(solver(testCase))
// for (const idx in cases) {
//     const testCase = cases[idx]
//     console.log("===============")
//     console.log(testCase)
//     console.log("==>")
//     console.log(solver(testCase))
// }

