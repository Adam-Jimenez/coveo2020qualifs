const express = require("express")
const app = express()

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

app.post('/', (req, res) => {
    console.log(req.body)
    res.json({ success: true })
})
