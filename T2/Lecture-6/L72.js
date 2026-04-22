var cp=require("cookie-parser")
var session=require("express-session")
var express=require("express")
var app=express();
app.use(session({secret:"LJU123",resave:false,saveUninitialized:false,cookie:{maxAge:10000}}))
app.use(cp())
app.use(express.urlencoded());
app.use(express.static(__dirname,{index:"L72.html"}))
app.post("/savesession",(req,res)=>{
    res.cookie("name",req.body.n)
    res.cookie("pass",req.body.p)
    res.redirect("/fetchsession")
})
app.get("/fetchsession",(req,res)=>{
    res.send(`<h1>Welcome ${req.cookies.name}</h1><h2>Password Is : ${req.cookies.pass}</h2>
    <a href="/deletesession">LogOut</a>`)
})
app.get("/deletesession",(req,res)=>{
    req.session.destroy()
    res.redirect("/L72.html")
})
app.listen(7000)