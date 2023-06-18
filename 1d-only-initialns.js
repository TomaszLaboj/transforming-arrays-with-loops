/*
Write a function that takes an array of names (always <firstname> <surname> format) 
and returns an array of initials for each person.
*/

/*
function checkInititals(array)
init new array
loop through all the elements and split them using string method and interpolation
return new array

*/

function checkInitials(array){
    const newArray = array.map(element => `${element.split(' ')[0][0]}.${element.split(' ')[1][0]}.`)
    return newArray;
}

console.log(checkInitials(["Ash Ketchum", "Lucy Heartfilia", "Yugi Moto"]), 'should be ', ["A.K.", "L.H.", "Y.M."])