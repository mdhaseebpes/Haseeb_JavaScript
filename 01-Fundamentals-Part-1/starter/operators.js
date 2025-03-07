
//Math operators
const now = new Date().getFullYear();
const ageAliza = now - 2017;
const ageWaiz = now  - 2020;
console.log(ageAliza, ageWaiz); 

/*
console.log(ageAliza *2);
console.log(ageAliza / 10);
console.log(2 ** 3); // 2 to the power of 3 = 2 * 2 * 2
*/

const firstNames = 'Mohammed';
const lastNames = 'Khan';
console.log(firstNames + ' ' + lastNames);

//Assignment operators
let x = 10 + 20;
x += 15; //x = x+15 = 45
x *=4; //x = x*4 = 180
x++; // x+1; = 181
x--; //x-1 = 180
console.log(x);

//Comparison operators
console.log(ageAliza > ageWaiz); // > ,<, >= ,<=
console.log(ageAliza >=18);
console.log(now - 2017 > now -2020);

let x1,y1 ;
x = y = 25-10-5;
console.log(x,y);

//Grouping
const averageAge = (ageAliza + ageWaiz)/2;
console.log(ageAliza , ageWaiz , averageAge);

//Equality operators
//Strict equality

const age = '18';
if(age === 18 ) console.log("You are adult ! - Strict equality");

//loose equality 
if(age == 18) console.log("You are adult - loose equality")

/*
const favourite = Number(prompt("What's your favorite number!"));
console.log(favourite);
console.log(typeof favourite);
if(favourite === 7) {
     console.log(`Cool your number is ${favourite} and actual number is 7 `); 
} else if (favourite == 23) {
        console.log(`Cool your number is ${favourite} and actual number is 23 `); 
} else {
        console.log(`Cool your number is ${favourite} and actual number is 7 or 23 `); 
}

if (favourite !== 23) console.log("Why not 23 !");

*/

//logical operators
const hasDriverLicence = true //A
const hasGoodVision = true //B

console.log(hasDriverLicence && hasGoodVision);
console.log(hasDriverLicence || hasGoodVision);
console.log(!hasDriverLicence);


const isTired = false ; //C

if(hasDriverLicence && hasGoodVision && !isTired) {
        console.log("Is able to Driver 🏎️")
} else {
        console.log("Someone else needs to driver 🏎️")
}








