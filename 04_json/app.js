const fs = require('fs');

let personObjectOriginal = {
  name: "Mark",
  age: 25,
  pets: {
    cat: "Pussy", 
    dog: "Wolfy",
  },
};

let personObjectString = JSON.stringify(personObjectOriginal);

fs.writeFileSync('person.json', personObjectString);

console.log(personObjectOriginal);
console.log(personObjectString);

personNewString = fs.readFileSync('person.json');

let personObjectNew = JSON.parse(personNewString);
console.log(personObjectNew.pets.cat);
