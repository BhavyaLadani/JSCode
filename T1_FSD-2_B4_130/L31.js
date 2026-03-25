var fs=require("fs")
// fs.mkdirSync("b4")
fs.writeFileSync("test.txt","Hello Students!")
// fs.rmdirSync("b4")
var r=fs.readFileSync('test.txt');
console.log(r);
console.log(r.toString())
fs.appendFileSync("test.txt","\n How Are You ?");
var o=fs.readFileSync("test.txt","utf-8")
console.log(o)
fs.renameSync("test.txt","temp.txt")
fs.unlinkSync("temp.txt")