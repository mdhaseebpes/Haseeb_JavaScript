/*
CHALLENGE #1
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / (height * height) (mass in kg and height in meters).

Your task is to write some code to help them:

Store Mark's and John's mass and height in variables called massMark, heightMark, massJohn and heightJohn.

Calculate both their BMIs using the formula, and store the results in two variables called BMIMark and BMIJohn.

Log the value of BMIMark and BMIJohn to the console.

BONUS: Create a boolean variable markHigherBMI containing information about whether Mark has a higher BMI than John. Log it to the console too

TEST DATA 1: Marks weighs 78 kg and is 1.69 m tall. John weighs 92 kg and is 1.95 m tall.

TEST DATA 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.


👋 OPTIONAL: You can watch my solution in video format in the next lecture

IMPORTANT: The ** operator is not supported in this editor. Please make sure to use exactly this formula mass / (height * height), and not this one mass / (height ** 2).

*/

let markHeight = 1.69
let markMass = 78;
let johnHeight = 1.95
let johnMass = 92;

let marksBMI  = markMass / (markHeight * markHeight);
console.log(marksBMI);


let johnBMI  = johnMass / (johnHeight * johnHeight);
console.log(johnBMI);

let markHigherBMI = marksBMI > johnBMI;
console.log("Mark has higher BMI " + marksBMI + " " + markHigherBMI);


const markHeight1 = 1.88;
const markMass1 = 95;
const johnHeight1 = 1.76;
const johnMass1 = 85;

let marksBMI1  = markMass1 / (markHeight1 * markHeight1);
console.log(marksBMI1);


let johnBMI1  = johnMass1 / (johnHeight1 **2);
console.log(johnBMI1);

const HigherBMI = marksBMI1 < johnBMI1 ;
console.log(marksBMI1,johnBMI1,HigherBMI);