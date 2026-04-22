var express=require("express")
var app=express();
data=[{"name":"x","age":20},{"name":"y","age":28},{"name":"z","age":18}]
app.get("/sort",(req,res)=>{
    var g=data.sort((a,b)=>{
        return b.age-a.age
    })
    res.type("text/html")
    res.write(`<table border=2><tr><th>Name</th><th>Age</th></tr>`)
    for (t of g){
        res.write(`<tr><td>${t.name}</td><td>${t.age}</td></tr>`)
    }
    res.write(`</table>`)
    res.send()
})
app.get("/",(req,res)=>{
    res.json(data)
})
app.listen(3003)