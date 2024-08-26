const axios = require('axios');

const getToken = require('./oauth.js');


class Client {
    constructor() {
        this.client = axios.create({
            baseURL: 'https://api.takting.com/api-live/API/public/customer-api/v1/'
        });
    }

    get(path) {
        return new Promise((resolve, reject) => {
            getToken().then((token) => {
                this.client.defaults.headers.common['TAKTAccessToken'] = token;
                this.client.get(path).then((response) => {
                    resolve(response.data.data);
                }).catch((error) => {
                    reject(error);
                });
            });
        });
    }

    put(path, update) {
        return new Promise((resolve, reject) => {
            getToken().then((token) => {
                this.client.defaults.headers.common['TAKTAccessToken'] = token;
                this.client.put(path, update).then((response) => {
                    resolve(response.data.data);
                }).catch((error) => {
                    reject(error);
                });
            });
        });
    }

    post(path, data) {
        return new Promise((resolve, reject) => {
            getToken().then((token) => {
                this.client.defaults.headers.common['TAKTAccessToken'] = token;
                this.client.post(path, data).then((response) => {
                    resolve(response.data.data);
                }).catch((error) => {
                    reject(error);
                });
            });
        });
    }

    delete(path) {
        return new Promise((resolve, reject) => {
            getToken().then((token) => {
                this.client.defaults.headers.common['TAKTAccessToken'] = token;
                this.client.delete(path).then((response) => {
                    resolve(response.data.data);
                }).catch((error) => {
                    reject(error);
                });
            });
        });
    }

}

module.exports = Client;