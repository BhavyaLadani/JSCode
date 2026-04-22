var cp=require("cookie-parser")
var express=require("express")
var app=express()
app.use(cp())
app.use(express.urlencoded());
app.use(express.static(__dirname,{index:"L62.html"}))
app.post("/next",(req,res)=>{
    res.cookie("fn",req.body.fName)
    res.cookie("ln",req.body.lName)
    res.cookie("password",req.body.pass)
    res.redirect("/admin")
})
app.get("/admin",(req,res)=>{
    res.clearCookie("ln")
    res.send(`<h1>Welcome ${req.cookies.fn}</h1><h2>Password Is : ${req.cookies.password}</h2>`)
})
app.listen(7009)