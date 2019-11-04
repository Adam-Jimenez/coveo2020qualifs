const express = require("express")
const bodyParser = require("body-parser")
const app = express()

const schema = {
    "teamName": "teamName",
    "teamStreetAddress": "11 rue du Calvados",
    "solutions": null,
    "participants": []
}

const letters = []

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

app.post('/', (req, res) => {
    letters.push(req.body)
    res.json({ success: true })
})

app.get('/', (req, res) => {
    res.json(letters)
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`App is running on port ${ PORT }`);
});
