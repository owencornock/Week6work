let express = require("express")

let app = express()

app.all("/qa", function (req, res) {
    res.write("Qa is back")
    res.end()
}
)

app.get("/uk1", function (req, res, next) {

    res.write("England")
    next()
},
    function (req, res, next) {
        res.write("Wales")
        next()
    },
    function (req, res, next) {
        res.write("Ireland")
        res.end()
    },
)

let f1 = function (req, res, next) {

    res.write("England")
    next()
}
let f2 = function (req, res, next) {

    res.write("Wales")
    next()
}
let f3 = function (req, res, next) {

    res.write("Ireland")
    next()
    res.end()
}

app.get("/uk2", [f1, f2, f3])

app.get(["/Owen", "/Eoghan", "/Owain"], function (req, res) {
    res.write("owen is back")
    res.end()
})

app.listen(4005)
