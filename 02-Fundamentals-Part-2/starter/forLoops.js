// for loop keeps running while condition is true
for(let rep =1 ; rep <=10; rep++){
    console.log(`Lifting weight repetition ${rep} 🏋🏻‍♂️`)
}

const haseeb = {
    firstName : 'Haseeb',
    lastName : 'Khan',
    age : 2025 - 1987,
    job : 'Software engineer',
    hobbies : ['Sports', 'MMA', true ,100],
    friends : ['a', 'b', 'c']
}

const has = ['waiz' , 
       'khan',
       2025-2020,
       'student',
       ['a' , 'b', 'c'],
       true
]
const types = [];

// console.log(has[0]);
// console.log(has[1]);
// console.log(has[2]);

for (let i =0; i < has.length; i++) {
      console.log(has[i], typeof has[i]);

      //filling types array
      types[i] = typeof has[i];
}
console.log('------------------------')
console.log(types);

const years = [1954 , 1962 , 1987 , 1992 , 2017 , 2020]
const ages = [];

for (let i = 0 ; i < years.length ; i++) {
    ages.push(2025 - years[i]);
}

console.log(ages);

//continue and break
console.log('--- ONLY STRINGS ------');
for (let i = 0; i < has.length ; i++) {
    if(typeof has[i] !== 'string') continue;
    console.log(has[i] , typeof has[i]);
}

console.log('--- BREAK WITH NUMBER------');
for (let i =0 ; i < has.length; i++){
    if(typeof has[i] === 'number') break;
    console.log(has[i] , typeof has[i]);
}

//Nested for loops
console.log('--- NESTED FOR LOOP------');
for( let excercise = 1; excercise < 4 ; excercise++) {
    console.log(`------- Starting excercise ${excercise} ----------`);

    for(let rep =1 ; rep < 6; rep++) {
        console.log(`Excercise ${excercise}: Lifting weight repetition ${rep}`);
    }
}

//While loop
console.log('--- WHILE LOOP------');
let rep = 1;
while(rep < 6) {
    console.log(`While : Excercise - Lifting weight repetition ${rep}`);
    rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;

while(dice !== 6){
    console.log(`You rolled a ${dice}`)
    dice = Math.trunc(Math.random() * 6) + 1;
    if(dice == 6) console.log(`Loop is about to end .... as ${dice} is rolled`)
}