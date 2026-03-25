// Path Module
var p=require("path");
var addr='D:/LJ/node/my.html'
var dir=p.dirname(addr);
var base=p.basename(addr);
var ext=p.extname(addr);
console.log(`Directory Is ${dir}`)
console.log(`Basename Is ${base}`)
console.log(`Extension Is ${ext}`)