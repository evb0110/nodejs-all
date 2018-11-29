console.log('Starting app.js');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');
const notes = require('./notes.js');

const argv = yargs.argv;

let command = argv._[0];

if (command === "add") {
  notes.addNote(argv.title, argv.body);
} else if (command === "list") {
  notes.listNotes();
} else if (command === "del") {
  notes.delNote(argv.title);
} else if (command === "show") {
  notes.showNote(argv.title)
} else {
  console.log(`Unable to recognize command ${argv._[0]}`)
}

