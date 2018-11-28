console.log('starting app');


const fs = require('fs');
const os = require('os');

// console.log(`Hello ${os.userInfo().username}, your uid is ${os.userInfo().uid}`);

const note = require('./note.js');

const multiplyBy3 = 5;

console.log(note.multiplyBy3(6));