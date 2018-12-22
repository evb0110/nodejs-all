const request = require('request');


const geocodeAddress = (addressString, callback) => {
  if (addressString.length < 4) {
    console.log('Address quiery too short');
    return;
  }
  const encodedAddress = encodeURIComponent(addressString);

  request({
    url: `https://www.mapquestapi.com/geocoding/v1/address?key=ywjOiddNkXyZ1WrmNBvuNN3IMtWS71X3&location=${encodedAddress}`,
    json: true,
  }, (error, response, body) => {
    if (error) {
      callback('Unable to connect to the location server')
    } else {
      let location = body.results[0].locations[0];
      const { street, adminArea4, adminArea5, adminArea6, adminArea3, postalCode, adminArea1, latLng } = location;
      callback(undefined, {
        address:{ postalCode, adminArea1, adminArea3, adminArea6, street, adminArea4, adminArea5},
        latitude: latLng.lat,
        longitude: latLng.lng,
      });
    }
  });
}

module.exports = {
  geocodeAddress
}