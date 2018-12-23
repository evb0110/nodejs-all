const yargs = require('yargs');
const axios = require('axios');


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

const encodedAddress = encodeURIComponent(argv.address);
const geocodeUrl = `https://www.mapquestapi.com/geocoding/v1/address?key=ywjOiddNkXyZ1WrmNBvuNN3IMtWS71X3&location=${encodedAddress}`;



axios
  .get(geocodeUrl)
  .then((response) => {
    const lat = response.data.results[0].locations[0].latLng.lat;
    const lng = response.data.results[0].locations[0].latLng.lng;
    let weatherURL = `https://api.darksky.net/forecast/a41a5405a2b1677d5c86b950c581ca05/${lat},${lng}?units=si`;
    console.log(JSON.stringify(weatherURL, undefined, 2));
    return axios.get(weatherURL);
  }).then((response) => {
    console.log(response);
  }).catch((e) => {
    if (e.code === 'ENOTFOUND') {
      console.log('Unable to connect to API servers')
    }
  })