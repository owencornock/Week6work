let express = require("express")
let bodyparser = require("body-parser")
let app = express()

app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended: true}))

app.get("/", function(req,res){
    res.sendFile(__dirname+"//form1.html")
})

app.post("/process", function(req,res){
    let num1=parseInt(req.body.no1)
    let num2=parseInt(req.body.no2)
    res.write("Form recieved")
    res.write("Total is" +(num1 + num2))
    res.end()
})

app.listen(4005)