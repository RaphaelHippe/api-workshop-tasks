
const fs = require('fs');

class JSONManager {

    constructor() {
    }

    read(path) {
        return JSON.parse(fs.readFileSync(path, 'utf8'));
    }

    write(path, data) {
        fs.writeFileSync(path, JSON.stringify(data, null, 4));
        console.log(`File ${path} written successfully`);
    }

}


module.exports = JSONManager;