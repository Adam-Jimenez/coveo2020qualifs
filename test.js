const solver = require("./solver.js")
const { pprint } = require('./utils')
const cases = require('./requests/req.json')


const testCase = cases[6]
pprint(testCase)
console.log(solver(testCase).join(""))
console.log("Expected: EOVEOEECCCECVOOOCE")
// for (const idx in cases) {
//     const testCase = cases[idx]
//     console.log("===============")
//     console.log(testCase)
//     console.log("==>")
//     console.log(solver(testCase))
// }

