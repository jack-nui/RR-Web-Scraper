//Modules
const axios = require('axios');
const cheerio = require('cheerio');
const express = require('express');

//Port
const PORT = 5000;
const app = express();

//Retail Radio URL
const url = "https://onlineaudio.co.nz/scheduler3/report_store_sync_analysis.php?dept=twentyfour&period=24";


//Gets data from url

async function rrScraper() {
  await axios(url), {}, {
    auth: {
      username: 'Jack',
      password: 'Ra5ram4d!'
    }
  };
    const html_data = response.data;
    const $ = cheerio.load(html_data);
};
  


//Starts local server
app.listen(PORT, () => console.log(`server running on port ${PORT}`)
  );