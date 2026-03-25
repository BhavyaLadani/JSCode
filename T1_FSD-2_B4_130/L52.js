var p=require("path")
var fs=require('fs')
var mypath='LJ/first.txt';
var dir=p.dirname(mypath);
var base=p.basename(mypath);
// fs.mkdirSync(dir)
fs.writeFileSync("./"+dir+"/"+base,"Hello....")
fs.copyFileSync("./"+dir+"/"+base,"./"+dir+"/second.txt")
fs.unlinkSync("./"+dir+"/"+base)