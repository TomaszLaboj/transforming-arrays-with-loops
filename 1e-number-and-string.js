/*
Write a function that takes an array of numbers 
and returns an array of plain objects, with properties:
*/

/*
function transformToString(array)
init new array 
loop through every element and push number to the object and convert number to a string

return new array
*/

console.log(transformToString([4, -3.2]), 'should be ',  [{ asNumber: 4, asString: '4' }, { asNumber: -3.2, asString: '-3.2' }])