var mult=require("multer")
var express=require("express")
var app=express()

app.use(express.static(__dirname,{
    index:"l7-3(mult).html"
}))
var store=mult.diskStorage({
    destination:"my",
    filename:(re,file,cb)=>{
        cb(null,file.originalname)
        console.log(file)
    }
    
})
var upload=mult({Storage:store}
)

app.post("/uploadfile",upload.single("mydoc"),(req,res)=>{
    const file=req.file
    if(file){
        res.send(`<h1> File <span style="color:red"> ${
            file.originalname
        } </span> has been uploaded in${file.destination}</h1>`)
    }
})
app.listen(7002)