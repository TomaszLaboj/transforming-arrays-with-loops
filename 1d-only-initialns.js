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
    const newArray = [];
    for (element of array){
        let FirstSecond = element.split(' ');
        newArray.push(`${FirstSecond[0]}.${FirstSecond[1]}.`);
        
    }

    return newArray;
}

console.log(checkInitials(["Ash Ketchum", "Lucy Heartfilia", "Yugi Moto"]), 'should be ', ["A.K.", "L.H.", "Y.M."])