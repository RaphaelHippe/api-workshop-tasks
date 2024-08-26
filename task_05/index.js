// import axios
const axios = require('axios');
const qs = require('qs');

// OAuth request to get the token
function getToken() {
    return new Promise((resolve, reject) => {

        const CLIENT_ID = '';
        const CLIENT_SECRET = '';

        const authString = `${CLIENT_ID}:${CLIENT_SECRET}`;
        const authBytes = Buffer.from(authString).toString('base64');

        axios.post(
            'https://takting.auth.eu-central-1.amazoncognito.com/oauth2/token',
            qs.stringify({ grant_type: 'client_credentials' }),
            {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Authorization': `Basic ${authBytes}`
                }
            }
        ).then(response => {
            const ACCESS_TOKEN = response.data.access_token;
            resolve(ACCESS_TOKEN);
        }).catch(error => {
            console.error('Error fetching access token:', error);
            reject(error);
        });
    });
}

// get the token
getToken().then((token) => {
    // create a new axios instance
    const client = axios.create({
        baseURL: 'https://api.takting.com/api-live/API/public/customer-api/v1/'
    });
    // set the token in the client
    client.defaults.headers.common['TAKTAccessToken'] = token;
    
    // make a get requests to 'projects' and print the JSON response to the console
    // Start writing code here

    // STOP WRITING CODE HERE
});