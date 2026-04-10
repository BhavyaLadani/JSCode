var express=require("express")
var app=express();
app.get("/",(req,res)=>{
    // res.set("Content-type","text/html")
    res.type("text/html")

    res.write("<h3>Hello Bachchooo.....</h3>")
    res.send()
})
app.get("/about",(req,res)=>{
    res.write("<h4>Express Js </h4>")
    // res.set("<h2>End Communication After Sending</h2>")
    res.send()
})
app.listen(5007)
