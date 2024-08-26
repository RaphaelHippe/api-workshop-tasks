let project = {
    id: 1,
    name: 'Project 1',
    description: 'Description 1',
};

console.log(project.id, project.name, project.description);

project.name = 'Project 2';

console.log(project.id, project.name, project.description);

project["takt_time"] = 1;

console.log(project.id, project.name, project.description, project.takt_time);

delete project.description;

console.log(project.id, project.name, project.description, project.takt_time);


// Write a function that takes an object, a key, and a value as arguments and sets the value of the key in the object.
// START WRITING CODE HERE
function update() {
    return 'not implemented';
}
// STOP WRITING CODE HERE
let train = {
    id: 1,
    name: 'Train 1',
    description: 'Description 1',
};
let updated_train = update(train, 'name', 'Train 2');
console.log(updated_train)
