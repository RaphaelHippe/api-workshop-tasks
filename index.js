// import axios
const axios = require('axios');



// make a request to google
axios.get('https://mewtwo.takting.com/health').then(response => {
    console.log(response.data);
}).catch(error => {
    console.error(error);
});