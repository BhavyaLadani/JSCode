var eventmitter=require("events");
var ee=new eventmitter()
ee.on("First",()=>{console.log("First Task");})
var add=(a,b)=>{console.log(`Addition Is : ${a+b}`)}
ee.on("Second",add);
ee.on("Second",()=>{console.log("Completed....")})
ee.on("First",()=>{console.log("First Task Completed....")})
ee.emit("First")
ee.emit("Second",3,6)
