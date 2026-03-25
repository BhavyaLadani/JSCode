var fs=require("fs")
fs.writeFileSync("vowel.txt","Hello B4 Student")
fs.appendFileSync("vowel.txt"," Welcome to Node js Tutorial")
var d=fs.readFileSync("vowel.txt","utf-8")
var i=0
var v="aeiouAEIOU"
for (let a=0;a<d.length;a++){
    if(v.includes(d[a])){
        i++;
    }
}
console.log(i)
fs.appendFileSync("vowel.txt","Vowel Count Is : "+i)