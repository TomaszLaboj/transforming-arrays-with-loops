/*Challenge: Write a function that takes an array of numbers,
 and returns an array with the same numbers, but signs flipped.
*/

/*
function invertNumbers(array){
    intit new array
    loop through every element and multiply by -1
    push result to new array
    return new array

}
*/

function invertNumbers(array){
    const invertedArray = [];
    for(element of array){
        invertedArray.push(element*-1);
    }
    return invertedArray;
}

console.log(invertNumbers([1, -3, 2, 8, -10]), 'should be ', [-1, 3, -2, -8, 10]);