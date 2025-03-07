//type conversion
const inputYear = '1991';
console.log(Number(inputYear));

console.log(inputYear + 19);
console.log(Number(inputYear) + 19);

console.log(Number('Mohsin'));
console.log(typeof NaN);

//string
console.log(String(2023));
console.log(String(2023) , 2023);

//type coercion
console.log('I am ' + 37 + ' years old');
console.log('23' + '10' + 3);
console.log('23' - '10' - 3);
console.log('23' *  '10');
console.log('23' /  '10');

//5 falsy values :
//0 , '' , undefined , null , NAN

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Mohsin'));
console.log(Boolean({}));
console.log(Boolean(''));
console.log(Boolean(null));
console.log(Boolean(NaN));

const money = 0;
if(money) {
    console.log("Don't spend all money 💸")
} else {
    console.log("Please get money by earning ");
}

let height = 0;
if(height) {
    console.log("Height is defined")
} else {
    console.log("Height is Undefined");
}




