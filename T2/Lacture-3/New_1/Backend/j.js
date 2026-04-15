var express=require("express")
var app=express();
var path=require("path")
var sp=path.join(__dirname,"../frontend")
app.use(express.static(sp,{index:"h.html"}));
app.listen(2007)