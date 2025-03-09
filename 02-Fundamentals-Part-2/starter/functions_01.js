
const cutFruitPieces = function(fruits) {
    return fruits * 4
}
const foodPorcessor = function(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const organcePieces = cutFruitPieces(oranges);

    return `Juice with ${applePieces} pieces of apple and ${organcePieces} pieces of orange`;
 
}

console.log(foodPorcessor(4,6));