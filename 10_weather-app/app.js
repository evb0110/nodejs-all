const yargs = require('yargs');

const geocode = require('./geocode/geocode.js');

let longitude; let latitude;

const argv = yargs
  .options({
    a: {
      demand: true,
      alias: 'address',
      describe: 'Address to fetch weather for',
      string: true
    }
  })
  .help()
  .alias('help', 'h')
  .argv;

geocode.geocodeAddress(argv.address, (errorMessage, results) => {
  if (errorMessage) {
    console.log(errorMessage);
  } else {
    console.log(JSON.stringify(results, undefined, 2));
    latitude = results.latitude;
    longitude = results.longitude;
  }
})

// =======================


// const url = `https://api.darksky.net/forecast/a41a5405a2b1677d5c86b950c581ca05/${latitude},${longitude}?units=si`;
const url = `https://api.darksky.net/forecast/a41a5405a2b1677d5c86b950c581ca05/55.732984,37.62765?units=si`;
// ?units=si produces info in si units (Celsius etc.)

const request = require('request');
request({
  url,
  json: true
}, (error, responce, body) => {
  if (error) {
    console.log('Unable to connect to forecast service');
  } else if (!error && responce.statusCode === 200) {
    console.log(body.daily.summary);
  } else {
    console.log('Unable to fetch weather.')
  }
})

// https://api.darksky.net/forecast/a41a5405a2b1677d5c86b950c581ca05/37.8267,-122.4233