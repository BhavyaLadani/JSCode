var express=require("express")
var app=express();
var name=(req,rex,next)=>{
    req.name="Test-1"
    console.log("Name Middleware")
}
var age=(req,rex,next)=>{
    var age=20
    console.log("Age Middleware")
}
app.use("/",name)
app.use("/page",age)
app.get("/",(req,res)=>{
    res.send("Home Page")
})
app.get("/page",(req,res)=>{
    res.send("About Page")
})
app.listen(3003)