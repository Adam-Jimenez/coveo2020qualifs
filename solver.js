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
                    matrix[i + relI][j + relJ] = ""
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

module.exports = function solve(matrix) {
    let letterPositions = []
    for (key in rotatedLetters) {
        const letter = rotatedLetters[key]
        const positions = letterPositionsInMatrix(letter, matrix)
        positions.forEach(position => {
            letterPositions.push([key[0], position])
        })
    }
    letterPositions = letterPositions.filter(a => a[1].length > 0)
    letterPositions.sort(function(a, b) {
        return a[1][1] - b[1][1]
    })
    letterPositions = letterPositions.map(x => x[0])
    return letterPositions
}
