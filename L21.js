var express=require("express")
var app=express();

app.get("/",(req,res)=>{
    res.send(`<form action="/data" method="get">
    Name : <input type="text" name="un"><br><br>
    Password :<input type="password" name="pass"><br><br>
    <input type="submit">
    </form>`)
})

app.get("/data",(req,res)=>{
    console.log(req.query)
    res.send(`<h1>Wlcomw ${req.query.un}</h1>
    <h1>Password Is ${req.query.pass}</h1>
    `)
})
app.listen(1000)