
function getSumIn3Seconds(a,b) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(a + b);
        }, 3000);
    });
}

let a = 1
let b = 2

getSumIn3Seconds(a, b).then((result) => {
    console.log(a, '+', b, '=', result);
});


let promises = [];
promises.push(getSumIn3Seconds(1, 2));
promises.push(getSumIn3Seconds(3, 4));
promises.push(getSumIn3Seconds(5, 6));

Promise.all(promises).then((results) => {
    for (let i = 0; i < results.length; i++) {
        console.log(results[i]);
    }
});

// Write a function that returns a promise that resolves after 3 seconds. 
// The function should take two numbers as arguments and return a promise that resolves 
// with the product of the two numbers after 3 seconds.
// START WRITING CODE HERE

function getProductIn3Seconds() {

}

// STOP WRITING CODE HERE

const products_to_be_calculated = [
    [1, 2],
    [3, 4],
    [5, 6]
];

// Calculate all products of products_to_be_calculated using getProductIn3Seconds and 
// print the results.
// START WRITING CODE HERE

// STOP WRITING CODE HERE