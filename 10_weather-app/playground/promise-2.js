const request = require('request');

const geocodeAddress = (address) => {

  return new Promise((resolve, reject) => {

    
    if (address.length < 4) {
      console.log('Address quiery too short');
      return;
    }
    const encodedAddress = encodeURIComponent(address);
    
    request({
      url: `https://www.mapquestapi.com/geocoding/v1/address?key=ywjOiddNkXyZ1WrmNBvuNN3IMtWS71X3&location=${encodedAddress}`,
      json: true,
    }, (error, response, body) => {
      if (error) {
        reject('Unable to connect to the location server')
      } else if (!body)  {
        reject('Unable to get the requested location');
      } else {
        console.log(!body);
        let location = body.results[0].locations[0];
        const { street, adminArea4, adminArea5, adminArea6, adminArea3, postalCode, adminArea1, latLng } = location;
        resolve({
          address: { postalCode, adminArea1, adminArea3, adminArea6, street, adminArea4, adminArea5 },
          latitude: latLng.lat,
          longitude: latLng.lng,
        });
      }
    });
  });
};

geocodeAddress('&&&&&')
  .then((location) => {
    console.log(JSON.stringify(location, undefined, 2))
  }, (errorMessage) => {
    console.log(errorMessage);
  });