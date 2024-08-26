const Client = require('./client.js');
const JSONManager = require('./json_manager.js');
const client = new Client();
const json_manager = new JSONManager();

client.get('projects/1').then((project) => {
    json_manager.write('project.json', project);
    client.get(`projects/${project.id}/trains`).then((trains) => {
        json_manager.write('trains.json', trains);
        let taktareas_arr = [];
        promises = [];
        for (let train of trains) {
            promises.push(client.get(`projects/${project.id}/trains/${train.id}/taktareas`));
        }
        Promise.all(promises).then((res) => {
            for (let taktareas of res) {
                taktareas_arr = [...taktareas_arr, ...taktareas];
            }
            json_manager.write('taktareas.json', taktareas_arr);
        });
    });
}).catch((error) => {
    console.error(error);
});