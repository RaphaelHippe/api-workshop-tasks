const Client = require('./client.js');

const client = new Client();

client.get('projects/2402').then((project) => {
    console.log("ONE PROJECT");
    console.log(project);
    client.get(`projects/${project.id}/trains`).then((trains) => {
        console.log("TRAINS");
        console.log(trains);
        for (let train of trains) {
            client.get(`projects/${project.id}/trains/${train.id}/taktareas`).then((taktareas) => {
                console.log("taktareas");
                console.log(taktareas);
            });
        }
    });
}).catch((error) => {
    console.error(error);
});