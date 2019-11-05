exports.pprint = function(matrix) {
    matrix.forEach(x => {
        x.forEach(y => {
            process.stdout.write(y)
        })
        console.log()
    })
}
