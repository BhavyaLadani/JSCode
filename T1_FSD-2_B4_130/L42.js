var fs=require("fs")
fs.writeFileSync("b4.txt","Hello")
console.log("Sync Task Completed")
fs.writeFile("b4.txt","Hello",(e)=>{
    if(e){throw e}
    else{console.log("Async Task Completed..")}
})
console.log("Last Execution..")
