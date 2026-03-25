var eventmitter=require("events");
var ee=new eventmitter()
var fs=require("fs")
ee.on("createfolder",()=>{
    if(!fs.existsSync("abc")){
        fs.mkdirSync("abc")
    }
    else{
        console.log("Folder Already Exists")
    }
    ee.emit("writefile")
})
ee.on("writefile",()=>{
    fs.writeFileSync("abc/xyz.txt","Hello Employe!")
})
ee.on("appendfile",()=>{
    fs.appendFileSync("abc/xyz.txt","\nKem Chho Maja Ma ?")
})
ee.emit("createfolder")
ee.emit("appendfile")           