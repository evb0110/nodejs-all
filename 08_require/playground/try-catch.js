const fs = require('fs');

let notes = [];
const note = { country: 'Russia', capital: 'Moscow'};

try {
  const notesString = fs.readFileSync('notes.json');
  notes = JSON.parse(notesString);
} catch (e) {

}


notes.push(note);

fs.writeFileSync('notes.json', JSON.stringify(notes));

console.log(notes);