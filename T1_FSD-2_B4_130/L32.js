var fs=require("fs")
// fs.mkdirSync("abc")
fs.writeFileSync("abc/mt.txt","Node Js")
fs.appendFileSync("./abc/mt.txt","\n How Are You ?");
var r1=fs.readFileSync('./abc/mt.txt');
fs.writeFileSync("./abc/new.txt",r1)
fs.unlinkSync("./abc/mt.txt")
//fs.copyFilesync("./abc/mt.txt","./abc/new.txt");