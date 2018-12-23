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
    const addressInfo = response.data.results[0].locations[0];

    const outputInfo = Object.keys(addressInfo)
      .filter((a) => (a.includes('street') || a.includes('adminArea') || a.includes('postalCode')))
      .map(x => addressInfo[x])
      .filter(s => (s.length > 0))
      .join(', ')

    const lat = response.data.results[0].locations[0].latLng.lat;
    const lng = response.data.results[0].locations[0].latLng.lng;

    console.log("Location: ", outputInfo);
    console.log("Latitude:", lat);
    console.log("Longitude:", lng);

    let weatherURL = `https://api.darksky.net/forecast/a41a5405a2b1677d5c86b950c581ca05/${lat},${lng}?units=si`;
    return axios.get(weatherURL);
  }).then((response) => {
    console.log(`Current temperature: ${response.data.currently.temperature}\nGeneral forecast: ${response.data.daily.summary}`);
  }).catch((e) => {
    if (e.code === 'ENOTFOUND') {
      console.log('Unable to connect to API servers')
    }
  })