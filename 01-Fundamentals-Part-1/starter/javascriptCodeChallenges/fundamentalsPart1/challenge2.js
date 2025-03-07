const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / (heightMark * heightMark);
const BMIJohn = massJohn / (heightJohn * heightJohn);

if(BMIMark > BMIJohn){
console.log("Mark's BMI is higher than John's!");
} else {
console.log("John's BMI is higher than Mark's!");
}

if(BMIJohn > BMIMark) {
console.log(`"John's ${BMIJohn} is higher than Mark's ${BMIMark}!`);
} else {
console.log(`Mark's ${BMIMark} is higher than John's ${BMIJohn}!`);
}