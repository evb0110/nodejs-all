const appendA = el => el + "A";

const appendB = el => el + "B";

const compose = (...fnArray) => 
  (arg) => 
  fnArray.reduce(
    (accum, fn) => fn(accum), 
    arg
  );

let res = compose(appendA, appendB)('_');

console.log(res);
