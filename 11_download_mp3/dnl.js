const axios = require('axios');
const fs = require('fs');

axios.request({
  responseType: 'arraybuffer',
  url: 'https://archive.org/download/TvQuran.com__Al-Ajmy/003.mp3',
  method: 'get',
  headers: {
    'Content-Type': 'audio/mpeg',
  },
}).then((result) => {
  const outputFilename = './file.mp3';
  fs.writeFileSync(outputFilename, result.data);
  return outputFilename;
});