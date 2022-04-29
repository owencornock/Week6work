let express=require("express")

let app=express()
app.set("view engine", "ejs")

app.get("/",function(req,res){

    let record = {name:"Owen", phy:89, che:30, mat:60}
    res.render("results.ejs", record)
})

app.listen(4005)