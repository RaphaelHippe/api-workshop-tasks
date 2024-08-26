// import axios
const axios = require('axios');

// make a request to google
axios.get('https://mewtwo.takting.com').then(response => {
    console.log(response.data);
}).catch(error => {
    console.error(error);
});


// Make a request to the mewtwo api with the resource /health using axios and print the response data to the console

// START writing code here


// END writing code here