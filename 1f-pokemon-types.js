/*
Write a function that takes an array of objects representing Pokémon,
 with string properties name and type, 
and returns a descriptive sentence about them and their type: 
"<name> is a <type in lowercase> type Pokémon.".
*/

/*
function describePokemon(array){
    init newArray
    loop through each element in the array and access the name and type properties, 
    push a interpolated string to the new array changing the type to lower case
    return new array
}
*/


function describePokemon(array){
    const newArray = array.map(element => (`${element.name} is a ${element.type.toLowerCase()} type Pokémon.`))

    
    return newArray;
}

console.log(describePokemon([{ name: 'Bulbasaur', type: 'Grass' }, { name: 'Charmander', type: 'Fire' }, { name: 'Squirtle', type: 'Water' }]), 'should be ', ["Bulbasaur is a grass type Pokémon.", "Charmander is a fire type Pokémon.", "Squirtle is a water type Pokémon."])