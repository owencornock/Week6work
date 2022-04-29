let express = require("express")

let app = express()

// app.get("/trainers", function (req, res) {
//     console.log("Hello trainers by get method");
//     res.end()
// })
// app.post("/trainers", function (req, res) {
//     console.log("Hello via post");
//     res.end()
// })

app.get("/msg", function (req, res) {
    console.log("Owen is back");
    res.end()
})

app.get("/", function (req, res) {
    res.write("<h1> <center> Click any number </h1>")
    for (let i = 1; i <= 10; i++) {
        res.write(`<a href='http://localhost:4005/printing/${i}'> ${i} </a> <br>`)
    }
    res.end()
})

app.get("/printing/:T", function (req, res) {
    console.log(req.params);
    let T = req.params.T

    res.write(`<h1> Times table of:${T} </h1>`)
    for (let i = 1; i <= 10; i++) {
        res.write(`${T} x ${i} = ${T * i} <br>`)
    }
    res.end()
})
app.get("/add/:T1/:T2", function(req, res) {
    console.log(req.params);
    let T1 = parseInt(req.params.T1)
    let T2 = parseInt(req.params.T2)

    res.write(`<h1> addition of: ${T1} and ${T2} <br>`)
    res.write(`${T1} + ${T2} = ${T1 + T2} <br>`)

    res.end()
})
app.get("/subtract/:T1/:T2", function(req, res) {
    console.log(req.params);
    let T1 = parseInt(req.params.T1)
    let T2 = parseInt(req.params.T2)

    res.write(`<h1> subtract of: ${T1} and ${T2} <br>`)
    res.write(`${T1} - ${T2} = ${T1 - T2} <br>`)

    res.end()
})

app.listen(4005)

