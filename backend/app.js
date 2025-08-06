//synchronous means block the thread until the operation is complete
//asynchronous means non-blocking, it will not block the thread

// import { log } from "./logger.js";
import https from "https";
import * as os from "os";
import fs from "fs";
import { EventEmitter } from "events";

// console.log(module);
// console.log(log);
const eventEmitter = new EventEmitter();
const server = https.createServer();
server.listen(3000);

server.on('connection', (socket) => {
  console.log('New connection established');
});

console.log(`Server running at https://localhost:${server.address().port}/`);

// this is the callback function which is listening to the event
// addEventListener is used to register the event - mostly used in browser
// on can also be  used to register the event - used in only Node.js

eventEmitter.on("This is the message", (event) => {
  console.log("Listener called", event);
});

const total = os.totalmem();
const free = os.freemem();

// console.log(`Total Memory: ${total}`);
// console.log(`Free Memory: ${free}`);

// sync programming
console.log(`File details from Sync: ${fs.readdirSync(".")}`);

// async programming
fs.readdir(".", (err, files) => {
  if (err) {
    console.error("Error reading directory:", err);
    return;
  }
  console.log(`File details from Async: ${files}`);
});

// hello world is the event trigger
eventEmitter.emit("This is the message", "Hello world!");
console.log(`Event Emitter: ${eventEmitter.eventNames()}`);
