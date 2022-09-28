//Import Packages
const axios = require('axios');
const cheerio = require('cheerio');
const express = require('express');
const bodyParser = require('body-parser')

const port = process.env.PORT || 5000;

const app = express();
app.set('view engine', 'ejs');
var path = require ('path');
app.use(express.static(path.join(__dirname + '/')))
app.use('/public', express.static('public'));
app.use(bodyParser.json());

const url ='https://onlineaudio.co.nz/scheduler3/report_store_sync_analysis.php?dept=twentyfour&period=24'


axios
.get(url, {
  //Axios looks for auth option
  auth: {
    username: 'Jack',
    password: 'Ra5ram4d!'
  }
})
.then(({ data }) => { 
  const $ = cheerio.load(data); 

  const storeNames = $('body') 
    .map((_, store) => { 
      const $store = $(store); 
      return $store.text() 
    }) 
    .toArray(); 
  console.log(storeNames) 
});

//Listen to server
//app.listen(port, () => {
  //console.log(`Server Established and  running on Port ⚡${port}`)
//})