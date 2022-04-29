let express=require("express")


let app=express()
app.set("view engine", "ejs")


app.get("/",function(req,res){

    res.render("homepage.ejs")
})
app.get("/secondpage/:T",function(req,res){

    let A=req.params.T
    res.render("secondpage.ejs", {TimesTable:A})
})
app.get("/thirdpage/:T/:R",function(req,res){

    let timestable=req.params.T
    let range=req.params.R

    res.render("thirdpage.ejs", {TimesTable:timestable, Range:range})
})

app.listen(4005)