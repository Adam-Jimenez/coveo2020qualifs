const json = require("./req.json")

json.forEach(arr => {
    arr.forEach(a => {
        a.forEach(b => {
            c = b.join("")
            console.log(c)
        })
    })
})
