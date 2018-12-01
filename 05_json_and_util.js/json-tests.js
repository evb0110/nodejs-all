const util = require('util');

let a = {
  name: 'George',
  age: 25,
  pets: {
    dog: 'Wolfy',
    cat: "Kitty"
  }
};

let aString = JSON.stringify(a);

console.log(`a: ${util.inspect(a)}`);
console.log(`aString: ${aString}`);


