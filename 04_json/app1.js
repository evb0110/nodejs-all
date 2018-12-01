const fs = require('fs');

let personNewString = fs.readFileSync('persons.json', "utf8");


let personObjectNew = JSON.parse(personNewString);
console.log(personObjectNew.pets.cat);
