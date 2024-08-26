// import axios
const axios = require('axios');
const qs = require('qs');


let ACCESS_TOKEN = null;

// OAuth request to get the token
function getToken() {
    return new Promise((resolve, reject) => {

        // if token is already fetched, return it
        if (ACCESS_TOKEN) {
            resolve(ACCESS_TOKEN);
            return;
        }

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
            ACCESS_TOKEN = response.data.access_token;
            resolve(ACCESS_TOKEN);
        }).catch(error => {
            console.error('Error fetching access token:', error);
            reject(error);
        });
    });
}

module.exports = getToken;