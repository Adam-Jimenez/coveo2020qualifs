const letters = {
    "C": [['X', 'X', 'X'],
          ['X', '.', '.'],
          ['X', '.', '.'],
          ['X', '.', '.'],
          ['X', 'X', 'X']],

    "O": [['X', 'X', 'X'],
          ['X', '.', 'X'],
          ['X', '.', 'X'],
          ['X', '.', 'X'],
          ['X', 'X', 'X']],

    "V": [['X', '.', 'X'],
          ['X', '.', 'X'],
          ['X', '.', 'X'],
          ['X', '.', 'X'],
          ['.', 'X', '.']],

    "E": [['X', 'X', 'X'],
          ['X', '.', '.'],
          ['X', 'X', 'X'],
          ['X', '.', '.'],
          ['X', 'X', 'X']],
}

const rotatedLetters = {}

function rotate(matrix) {
    const oldWidth = matrix[0].length
    const oldHeight = matrix.length
    const newWidth = oldHeight
    const newHeight = oldWidth
    const newMatrix = []
    for (let i = 0; i<newHeight; i++) {
        newMatrix.push(new Array(newWidth))
    }
    for (let i = 0; i<oldHeight; i++) {
        for (let j = 0; j<oldWidth; j++) {
            newMatrix[j][newWidth-i-1] = matrix[i][j]
        }
    }
    return newMatrix

}

function computeRotations(letter) {
    last = letters[letter]
    for (let i = 0; i<3; i++) {
        last = rotate(last)
        rotatedLetters[letter+i] = last
    }
}

computeRotations("C")
computeRotations("O")
computeRotations("V")
computeRotations("E")

module.exports = rotatedLetters

