var express=require("express")
var app=express();
student={"name":"xyz","age":15}
app.get("/j1",(req,res)=>{
    res.send(student.age)
})
app.get("/j2",(req,res)=>{
    res.json(student)
})
app.get("/j3",(req,res)=>{
    res.write(student)
    res.send()
})
app.listen(5005)