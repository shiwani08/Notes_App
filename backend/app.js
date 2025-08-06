//synchronous means block the thread until the operation is complete
//asynchronous means non-blocking, it will not block the thread

import { log } from "./logger.js";
import * as os from "os";
import fs from "fs";
import { EventEmitter } from "events";

// console.log(module);
// console.log(log);
const eventEmitter = new EventEmitter();

// this is the callback function which is listening to the event
eventEmitter.on("This is the message", (arg) => {
  console.log("Listener called", arg);
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
