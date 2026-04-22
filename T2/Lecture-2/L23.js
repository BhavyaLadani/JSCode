var express=require("express")
var app=express();

app.get("/",(req,res)=>{
    res.send(`<form action="/data" method="post">
    Name : <input type="text" name="un"><br><br>
    Password :<input type="password" name="pass"><br><br>
    <input type="submit">
    </form>`)
})
app.use(express.urlencoded())
app.post("/data",(req,res)=>{
    console.log(req.body)
    res.send(`<h1>Welcome ${req.body.un}</h1>
    <h1>Password Is ${req.body.pass}</h1>
    `)
})
app.listen(1001)