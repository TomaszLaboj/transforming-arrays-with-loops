/*
Write a function that takes an array of strings, 
and returns an array with the number of characters in each string.
*/

/*
function countCharacters(array)
init new array
loop through each element and return lenght of the string
return new array
*/

function countCharacters(array){
    const newArray = [];
    for(element of array){
        newArray.push(element.length);
    }
    return newArray;
}

console.log(countCharacters(["one", "two", "three", "four"]), 'should be ', [3, 3, 5, 4])