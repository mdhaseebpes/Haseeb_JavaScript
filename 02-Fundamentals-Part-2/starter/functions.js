function logger(){
    console.log(`My name is khan`);
}

//calling / running/ invoking function
logger();
logger();

function juiceProcessor(apples, oranges){
  const juice = `Juice with ${apples} apples and ${oranges} oranges`;
  return juice;
}

const appleJuice = juiceProcessor(5, 0);
console.log(appleJuice);

console.log(juiceProcessor(4, 3));


//function declaration
function calculateAge(birthYear){
    return 2025 - birthYear;
}

const age = calculateAge(1987);

//function expression
const calculateAge1 = function(birthYear){
    return 2025 - birthYear;
}
const age2 = calculateAge(1990);
console.log(age , age2);

//function declaration can be called first first and declare later
//ex: 
//const age = calculateAge(1987);
//function calculateAge(birthYear){
  //return 2025 - birthYear;
//}
//function expression cannot be called first throws reference error
//Same will not work here ex :
//const age = calculateAge(1987);
//function calculateAge(birthYear){
  //return 2025 - birthYear;
//}


//Arrow function
const calculateAge2 = birthYear => 2025 - birthYear;
const age3 = calculateAge(2017);
console.log(age3);

const isRetirementAge = (birthYear, firstName)=> {
      const age = 2025 - birthYear;
      const retirement = 65 - age;
      return `${firstName} retires in ${retirement} years`;
}

console.log(isRetirementAge(1987, 'Khan'));
console.log(isRetirementAge(1983, 'Khan'));