var express=require("express")
var app=express();
app.get("/user/:uid",(req,res)=>{
    console.log(req.params)
    console.log(req.query)
    res.type("text/html")
    res.write(`<h1>Welcome ${req.query.name}</h1>
            <h2>Your ID Is : ${req.params.uid}</h2>`)
    if(parseInt(req.query.age)<18){
        res.write("You Are Minor")
    }
    else{
        res.write("You are an Adult")
    }
    res.send()
})
app.listen(7009)