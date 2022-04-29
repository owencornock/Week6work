let express = require("express")
let cookieparser = require("cookie-parser")
let app = express()

app.use(cookieparser())

app.get("/createCookie", function (req, res) {
    res.cookie("org", "Cookie consulting")
    res.write("cookie created")
    res.end()
})

app.get("/readCookie", function (req, res) {

    console.log(req.cookies.org);
    res.write("ccc")
    res.end()
})

app.listen(4005)