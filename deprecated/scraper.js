const rp = require('request-promise');
const url = 'onlineaudio.co.nz';

rp(url)
  .then(function(html){
    //success!
    console.log(html);
  })
  .catch(function(err){
    //handle error
  });
