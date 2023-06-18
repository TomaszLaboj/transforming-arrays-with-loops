/*
Write a function that takes an array of numbers 
and returns an array of plain objects, with properties:
*/

/*
function transformToString(array)
init new array 
loop through every element and push number to the the new array as an object using string interpolationand convert number to a string

return new array
*/

function insertToObject(array){
    const newArray = array.map(element => ({asNumber:element,asString:`${element}`}))
  
    return newArray;
}

console.log(insertToObject([4, -3.2]), 'should be ',  [{ asNumber: 4, asString: '4' }, { asNumber: -3.2, asString: '-3.2' }])

console.log(insertToObject([5, 6]), 'should be ',  [{ asNumber: 5, asString: '5' }, { asNumber: 6, asString: '6' }])