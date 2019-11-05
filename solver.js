const { pprint } = require('./utils')
const rotatedLetters = require('./letters.js')

function isValidIndex(matrix, i, j) {
    if (i < 0 || j < 0) {
        return false
    }
    if (i >= matrix.length) {
        return false
    }
    if (j >= matrix[0].length) {
        return false
    }
    return true
}

function letterAtPosition(letter, matrix, i, j) {
    for (let relI = 0; relI < letter.length; relI++) {
        for (let relJ = 0; relJ < letter[0].length; relJ++) {
            if (isValidIndex(matrix, i + relI, j + relJ)) {
                if (matrix[i + relI][j + relJ] != letter[relI][relJ]) {
                    return false
                }
            } else {
                return false
            }
        }
    }
    return true
}
function eraseLetter(letter, matrix, i, j) {
    for (let relI = 0; relI < letter.length; relI++) {
        for (let relJ = 0; relJ < letter[0].length; relJ++) {
            if (isValidIndex(matrix, i + relI, j + relJ)) {
                if (matrix[i + relI][j + relJ] != letter[relI][relJ]) {
                    console.log("Should never happen")
                } else {
                    matrix[i + relI][j + relJ] = " "
                }
            } else {
                console.log("Should never happen")
            }
        }
    }
}

function letterPositionsInMatrix(letter, matrix) {
    const positions = []
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            if (letterAtPosition(letter, matrix, i, j)) {
                eraseLetter(letter, matrix, i, j)
                positions.push([i, j])
            }
        }
    }
    return positions
}

function getNeighbors(matrix, i, j) {
    const neighbors = []
    if (isValidIndex(matrix, i+1, j)) {
        neighbors.push([i+1, j])
    }
    if (isValidIndex(matrix, i-1, j)) {
        neighbors.push([i-1, j])
    }
    if (isValidIndex(matrix, i, j+1)) {
        neighbors.push([i, j+1])
    }
    if (isValidIndex(matrix, i, j-1)) {
        neighbors.push([i, j-1])
    }
    return neighbors
}

function noisyPositions(matrix) {
    const positions = []
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            if (matrix[i][j] == 'X') {
                const neighbors = getNeighbors(matrix, i, j)
                neighbors.forEach(neighbor => {
                    let i = neighbor[0]
                    let j = neighbor[1]
                    if (matrix[i][j] == ' ') {
                        while (isValidIndex(matrix, i-1, j) && matrix[i-1][j] == ' ') {
                            i -= 1
                        }
                        while (isValidIndex(matrix, i, j-1) && matrix[i][j-1] == ' ') {
                            j -= 1
                        }
                        positions.push([i, j])
                    }
                })
            }
        }
    }
    return positions
}

module.exports = function solve(matrix) {
    let letterPositions = []
    const keys = Object.keys(rotatedLetters)
    keys.sort()
    keys.reverse()
    keys.forEach(key => {
        const letter = rotatedLetters[key]
        const positions = letterPositionsInMatrix(letter, matrix)
        positions.forEach(position => {
            letterPositions.push([key[0], position])
        })
    })
    // remove positions that are noisy
    noisies = noisyPositions(matrix)
    letterPositions = letterPositions.filter(letterPos => {
        const i = letterPos[1][0]
        const j = letterPos[1][1]
        return noisies.every(noisy => {
            const i2 = noisy[0]
            const j2 = noisy[1]
            return !(i == i2 && j == j2)
        })
    })
    letterPositions = letterPositions.filter(a => a[1].length > 0)
    letterPositions.sort(function(a, b) {
        return a[1][0] - b[1][0] || a[1][1] - b[1][1]
    })
    letterPositions = letterPositions.map(x => x[0])
    return letterPositions
}
