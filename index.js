// import axios
const axios = require('axios');

const https = require('https');

const agent = new https.Agent({  
  rejectUnauthorized: false
});

axios.get('https://mewtwo.takting.com/health', { httpsAgent: agent }).then(response => {
    console.log(response.data);
}).catch(error => {
    console.error(error);
});