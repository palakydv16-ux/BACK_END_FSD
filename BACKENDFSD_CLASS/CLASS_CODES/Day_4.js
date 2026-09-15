// Program 1
// emit() on()

const EventEmitter = require("events");
const event = new EventEmitter();

// event.on("greet", () => {
//     console.log("this is event emitter");
// });

event.once("greet", () => {
    console.log("event trigger only one time");
});

event.emit("greet");
event.emit("greet");
event.emit("greet");
event.emit("greet");


// Program 1: Create custom EventEmitter that triggers "greet" or "exit"

class MyEmitter extends EventEmitter {}

const myEvent = new MyEmitter();

myEvent.on("greet", (name) => {
    console.log(`Hello ${name}`); // template literals `${}`
});

myEvent.on("exit", () => {
    console.log("Exits my custom event emitter..");
});

myEvent.emit("greet", "CSE24");
myEvent.emit("exit");