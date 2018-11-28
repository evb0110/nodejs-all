console.log('starting app');

const fs = require('fs');
const _ = require('lodash');

const arr1 = [ 1, 2, 1, 1, 1, 3, 1, 3, 5, 6];
const arr1_filtered = _.uniq(arr1);
const arr1_chunked = _.chunk(arr1, 2);

console.log(arr1_filtered);
console.log(arr1_chunked);
