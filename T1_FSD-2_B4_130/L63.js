var eventmitter=require("events");
var ee=new eventmitter()
var fs=require("fs")
var fun1=(x)=>{console.log(`Message From Fun1 is ${x}`)}
var fun2=(x)=>{console.log(`Message From Fun2 is ${x}`)}
ee.on("event1",fun1);
ee.on("event2",fun2);
ee.on("event1",fun2);
ee.on("event2",fun1);
var c=ee.listenerCount("event1")
console.log(`Count Is ${c}`)
ee.emit("event2","FSD-2")
ee.emit("event1","B4 Student!")
ee.removeListener("event1",fun2)
ee.removeAllListeners("event2")
var c1=ee.listenerCount("event2")
console.log(c1)