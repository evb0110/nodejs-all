console.log('Starting app');

setTimeout(() => {
  console.log('Inside of callback');
}, 2000);

setTimeout(() => {
  console.log('Inside zero callback');
}, 0)

for (i=0; i< 1000000000; i++) {
  let j = i+1;
}

console.log('Finishing app');
