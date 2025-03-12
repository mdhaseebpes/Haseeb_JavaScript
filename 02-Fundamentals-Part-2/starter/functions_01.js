
const cutFruitPieces = function(fruits) {
    return fruits * 4
}
const foodPorcessor = function(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const organcePieces = cutFruitPieces(oranges);

    return `Juice with ${applePieces} pieces of apple and ${organcePieces} pieces of orange`;
 
}

console.log(foodPorcessor(4,6));


//
const calAge = function(birthYear) {
    return 2025 - birthYear;
}


const yearsUntilRetirement = function(birthYear,firstName) {
    const age  = calAge(birthYear)
    const retirement = 60 - age;
    if(retirement > 0){
        console.log(`${firstName} retirement left ${retirement} years`)
        return retirement;
    } else {
        console.log(`${firstName} already retired 🎊`)
        return -1
    }
    //return `${firstName} retirement left ${retirement} years`
}

console.log(yearsUntilRetirement(1970, 'Jabeen'));
console.log(yearsUntilRetirement(1954, 'Akhil'));
