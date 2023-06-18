/*
Challenge: Write a function that takes an array of names, 
and returns an array with a greeting for each of those names: "Hello, <name>!".
*/
/*
function addGreeting(array){
    a loop takes every element and adds a string before every element using the string interpolation
    push new string to a new array
    return new array
}
*/
function addGreeting(array){
    // const newArray = [];
    // for(element of array){
    //     newArray.push(`Hello, ${element}!`)
    // }
    const newArray = array.map(element => `Hello, ${element}!`)
    return newArray;
}

console.log(addGreeting(["Ash", "Beth", "Ciara"]), 'should be', ["Hello, Ash!", "Hello, Beth!", "Hello, Ciara!"]);
