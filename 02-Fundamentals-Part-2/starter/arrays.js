const friends = ['Shafi' , 'Irfan' , 'Ashraf'];
console.log(friends);



console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length-1]);

//note : only primitive value cannot be changed [immutable] when it is declared with 'const' variable 
//but array is not primitive value so we can change [mutable] on declared with 'const' but we cannot change the entire array but can replace a part of array.

friends[2] = 'Musafir';
console.log(friends);

//friends = ['A' , 'B' , 'C'];
//console.log(friends);

//Different data types
const firstName = 'Haseeb';
const bio = [firstName , 'khan' , 2025 - 1987, 'software' ,friends , true]
console.log(bio);

//what we cannot do in array
const calUmar = function(birthYear) {
    return 2025 - birthYear;
}
const years  = new Array(1987 ,1992 , 2017, 2020);

console.log(calUmar(years)) //NAN

const age1 = calUmar(years[0]);
const age2 = calUmar(years[1]);
const age3 = calUmar(years[2]);
const age4 = calUmar(years[years.length-1]);

console.log(age1, age2 , age3 , age4);

const ages = [calUmar(years[0]), calUmar(years[1]), calUmar(years[2]),calUmar(years[years.length-1])];
console.log(ages);

//Add elements
friends.push("W"); // last element added
console.log(friends);

friends.unshift("A"); //first element added
console.log(friends);

//Remove elements
const removedElement = friends.pop(); // last element removed
console.log(removedElement);
console.log(friends);

friends.shift() // first element removed
console.log(friends);

//provides index position  -- indexOf()
console.log(friends.indexOf('Shafi')); 
console.log(friends.indexOf('Z'));  //-1 -- if element is not present

console.log(friends.push(77));

//true or false - element present or not --includes()
console.log(friends.includes('Shafi'));
console.log(friends.includes('Z'));
console.log(friends.includes('77'));
console.log(friends.includes(77));



