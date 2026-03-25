var fs=require("fs")
fs.writeFile("a.txt","LJ Univercity",(e)=>{
    if (e) console.log(e);
    else{
        console.log("First File Created.....")
    }
})
fs.writeFile("a1.txt","Hi",(e)=>{
    if (e) {throw e;}
    else{console.log("Second File Created.....")}
})
fs.appendFile("a1.txt","Lj Univercity",(e)=>{
    if (e) {throw e;}
    else{console.log("Data Appended Successfully....")}
})
fs.unlink("a.txt",(e)=>{
    if(e){throw (e)}
    else{console.log("Deleted...")}
})