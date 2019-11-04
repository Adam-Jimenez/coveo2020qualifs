const express = require("express")
const bodyParser = require("body-parser")
const solver = require("./solver")
const app = express()

const schema = {
    "teamName": "𓂺",
    "teamStreetAddress": "11 rue du Calvados",
    "solutions": null,
    "participants": [
        {
            "isCaptain": true,
            "fullName": "Adam Jimenez",
            "email": "jimenez.adam0@gmail.com",
            "googleAccount": "jimenez.adam0@gmail.com",
            "phone": "(438) 797-7794",
            "school": "École de Technologie Supérieure",
            "schoolProgram": "Génie Logiciel",
            "graduationDate": 1620187200000,
            "shirtSize": "m-M"
        },
        {
            "isCaptain": false,
            "fullName": "Guillaume Baril",
            "email": "gbaril@gmail.com",
            "googleAccount": "gbaril@gmail.com",
            "phone": "(438) 505-9237",
            "school": "École de Technologie Supérieure",
            "schoolProgram": "Génie Logiciel",
            "graduationDate": 1620187200000,
            "shirtSize": "m-XL"
        },
        {
            "isCaptain": false,
            "fullName": "Jonathan Lalande",
            "email": "lalande.gg@gmail.com",
            "googleAccount": "lalande.gg@gmail.com",
            "phone": "(514) 706-3076",
            "school": "École de Technologie Supérieure",
            "schoolProgram": "Génie Logiciel",
            "graduationDate": 1597529582000,
            "shirtSize": "m-M"
        },
        {
            "isCaptain": false,
            "fullName": "David Sylvestre",
            "email": "david.sylvestre27@gmail.com",
            "googleAccount": "david.sylvestre27@gmail.com",
            "phone": "(514) 796-7337",
            "school": "École de Technologie Supérieure",
            "schoolProgram": "Génie Logiciel",
            "graduationDate": 1587268800,
            "shirtSize": "m-M"
        }
    ]
}

const letters = []

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

app.post('/', (req, res) => {
    const val = {
        ...schema
    }
    const solutions = []
    const problems = req.body
    problems.forEach(problem => {
        solutions.push(solver(problem).join(""))
    })
    val.solutions = solutions
    res.json(val)
})

app.get('/', (req, res) => {
    res.json(letters)
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`App is running on port ${ PORT }`);
});
