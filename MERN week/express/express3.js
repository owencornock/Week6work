let express = require("express")
let cookieparser = require("cookie-parser")

let app = express()

app.use(cookieparser())


app.get("/", function (req, res) {
    res.write("<h1> <center> Click any number </h1>")
    for (let i = 1; i <= 10; i++) {
        res.write(`<a href='http://localhost:4005/secondPage/${i}'> ${i} </a> <br>`)
    }
    res.end()
})

app.get("/secondPage/:T", function (req, res) {

    res.cookie("T", req.params.T)


    res.write(`<h1> Pick a range </h1>`)
    for (let i = 10; i <= 100; i = i + 10) {
        res.write(`<a href='http://localhost:4005/thirdPage/${i}'> ${i} </a> <br>`)
    }
    res.end()
})

app.get("/thirdPage/:range", function (req, res) {

    res.writeHead(200, {'Content-Type': 'text/html'});
    let R = parseInt(req.params.range)
    let T2 = parseInt(req.cookies.T)
    console.log(req.cookies);

    res.write("times table of:" +req.cookies.T2)
    for (let i = 1; i <= R; i++) {
        res.write(`${T2} * ${i} = ${T2 * i} <br>`)
    }
    res.end()
})

app.listen(4005)