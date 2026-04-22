var express=require("express")
var app=express();

app.get("/",(req,res)=>{
    res.send(`<form action="/add" method="post">
    Number-1 : <input type="text" name="n1"><br><br>
    Number-2 :<input type="text" name="n2"><br><br>
    <input type="submit">
    </form>`)
})
app.use(express.urlencoded())
app.post("/add",(req,res)=>{
    console.log(req.body)
    res.send(`<h1>Addition Of ${req.body.n1} & ${req.body.n2}</h1>
    <h1>Ans : ${parseInt((req.body.n1))+parseInt((req.body.n2))}</h1>
    `)
})
app.listen(1007)