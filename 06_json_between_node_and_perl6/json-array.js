const fs = require('fs');

let personString = fs.readFileSync('persons.json', "utf-8");
// setting "utf-8" encoding is crucial!

let person = JSON.parse(personString);
console.log(person.pets.cow);
