const express=require("express");
const router=express.Router()
var obj=[{name:'X',id:101,branch:"CSE",city:"Ahmedabad",age:30},
         {name:"y",id:102,branch:"CE",city:"Rajkot",age:20},
         {name:"z",id:103,branch:"IT",city:"Surat",age:70},
         {name:"a",id:104,branch:"CSE",city:"Rajkot",age:20},
         {name:"y",id:105,branch:"CE",city:"Jamnagar",age:24},
         {name:"g",id:106,branch:"CEA",city:"Amreli",age:40}]
router.get("/",(req,res)=>{
    res.type("text/html")
    for (o of obj){
        res.write(`<h2>Name : ${o.name}
                       Id : ${o.id}
                       Branch : ${o.branch}
                       City : ${o.city}
                       Age : ${o.age}</h2>`)
    }
    res.send()
})
router.get("/id/:id",(req,res)=>{
    var data=obj.filter((i)=>i.id==req.params.id)
    if(data.length>0){
        res.send(data);
    }
    else{
        res.send("No Student Data Found.....")
    }
})
router.get("/branch/:branch",(req,res)=>{
    var data=obj.filter((i)=>i.branch.toLowerCase()==req.params.branch.toLowerCase())
    if(data.length>0){
        res.send(data);
    }
    else{
        res.send("No Student Data Found.....")
    }
})
module.exports=router