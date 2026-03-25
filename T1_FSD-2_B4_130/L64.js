var eventmitter=require("events");
var ee=new eventmitter()
ee.on("circle",(x)=>{
    if (x<0){
        console.log("Radius Must Be Positive")
    }
    else{
    console.log(`Area Of Circle IS ${3.14*x*x}`)
    }
})
ee.on("square",(y)=>{
    if (y<0){
        console.log("Length Must Be Positive")
    }
    else{
    console.log(`Area Of Square IS ${y*y}`)
    }
})
ee.emit("circle",10)
ee.emit("square",9)