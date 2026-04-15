var express=require("express")
var app=express();
var entrylog=(req,res,next)=>{
    console.log("Student Entered")
    next()
}
var checkid=(req,res,next)=>{
    var hasid=false;
    if(hasid){
        req.name="XYZ"
        console.log("Verified Student")
        next()
    }
    else{
        console.log("Not Verified")
        res.send("No id Available")
    }
}
app.use("/student",entrylog,checkid)
app.get("/student",(req,res)=>{
    res.send(`Welcome ${req.name}`)
})
app.listen(8001)