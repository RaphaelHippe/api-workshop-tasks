// import axios
const axios = require('axios');
const https = require('https');

const agent = new https.Agent({  
  rejectUnauthorized: false
});

// make a request to google
axios.get('https://mewtwo.takting.com', { httpsAgent: agent }).then(response => {
    console.log(response.data);
}).catch(error => {
    console.error(error);
});


// Make a request to the mewtwo api with the resource https://mewtwo.takting.com/health using axios 
// and print the response data to the console

// START writing code here


// END writing code here