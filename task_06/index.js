const Client = require('./client.js');

const client = new Client();

client.get('projects/2864').then((project) => {
    console.log(project);
    // Task get all trains for the project and print the to the console
    // START WRITING CODE HERE

    // STOP WRITING CODE HERE
}).catch((error) => {
    console.error(error);
});