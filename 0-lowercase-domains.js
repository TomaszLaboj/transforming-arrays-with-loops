/*
function transformToLowerCase(array)

initialise an empty array 

loop takes every element of the input array and applies a string method 'to lower case'

push the transformed element to an empty array

return transformed array


*/

function transformToLowerCase(array){

const transformedArray = array.map(element => element.toLowerCase());

    return transformedArray;
}



console.log(transformToLowerCase(["academy.tech", "GITHUB1212.COM", "StackOverflow.com", "mOzIlLa.OrG"]), 'should be \n', ["academy.tech", "github.com", "stackoverflow.com", "mozilla.org"])

// console.log(transformToLowerCase([]))
// console.log(transformToLowerCase('QWER'))
// console.log(transformToLowerCase(['123','123']))