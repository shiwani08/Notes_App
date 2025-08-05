import { log } from './logger.js';
import * as os from 'os';
// console.log(module);
// console.log(log);

const total = os.totalMemory();
const free = os.freemem();

console.log(`Total Memory: ${total}`);
console.log(`Free Memory: ${free}`);
