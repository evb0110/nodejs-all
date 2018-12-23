const request = require('request');

const getWeather = (lat, lng, callback) => {

  const url = `https://api.darksky.net/forecast/a41a5405a2b1677d5c86b950c581ca05/${lat},${lng}?units=si`;
  // ?units=si produces info in si units (Celsius etc.)
  
  request({
    url,
    json: true
  }, (error, responce, body) => {
    if (error) {
      callback('Unable to connect to forecast service')
      // console.log('Unable to connect to forecast service');
    } else if (!error && responce.statusCode === 200) {
      callback(undefined, {
        temperature: body.currently.temperature,
        apparentTemperature: body.currently.apparentTemperature,
        dailySummary: body.daily.summary,
      });
      // console.log(body.daily.summary);
    } else {
      callback('Unable to fetch weather.')
    }
  })
}

module.exports = {
  getWeather,
}





// https://api.darksky.net/forecast/a41a5405a2b1677d5c86b950c581ca05/37.8267,-122.4233

// const url = `https://api.darksky.net/forecast/a41a5405a2b1677d5c86b950c581ca05/${latitude},${longitude}?units=si`;