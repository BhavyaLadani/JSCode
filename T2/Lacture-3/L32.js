var express=require("express")
var app=express();
app.get("/login",(req,res,next)=>{
    res.send(`<form action="/data" method="post">
    Name : <input type="text" name="un"><br><br>
    Password :<input type="pass" name="pass1"><br><br>
    Confirm Password :<input type="pass" name="pass2"><br><br>
    <input type="submit">
    </form>`)
    next()
})
app.use(express.urlencoded())
app.post("/data",(req,res,next)=>{
    if(req.body.pass1==req.body.pass2){
        res.send(`Welcome ${req.body.un}`)
        next()
    }
    else{
        res.send("Please Enter Valid Password")
    }
})
app.listen(1000)