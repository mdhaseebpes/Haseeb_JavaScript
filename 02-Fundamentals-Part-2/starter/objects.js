const haseebArray = ['Haseeb',
    2025-1987,
    'Software engineer',
    ['Sports' , 'MMA', 100]
]

const haseeb = {
    firstName : 'Haseeb',
    lastName : 'Khan',
    age : 2025 - 1987,
    job : 'Software engineer',
    hobbies : ['Sports', 'MMA', true ,100],
    friends : ['a', 'b', 'c']

}

console.log(haseeb);
console.log(haseeb.hobbies);
console.log(haseeb['friends']);

const nameKey = 'Name';
console.log(haseeb['first' + nameKey]);
console.log(haseeb['last' + nameKey]);
//console.log(haseeb.last+nameKey)

//const intersection = prompt('What do you want to know about haseeb? Choose between firstName,lastName,job,hobbies');
//console.log(haseeb.intersection);

// if(haseeb[intersection]) {
//     console.log(haseeb[intersection]);
// } else {
//     console.log('Wrong value entered !Choose between firstName , lastName , job , hobbies')
// }

haseeb.location = "INDIA";
haseeb['linkedin'] = "@haseeb.khan";

console.log(haseeb)

//Challenge 
//"Haseeb has 3 friends , and his best friend is called a"

console.log(`${haseeb.firstName} has ${haseeb.friends.length} friends , and his best friend is called ${haseeb.friends[0]}`);


const waiz = {
    firstName : 'Waiz',
    lastName : 'Khan',
    birthYear : 2020,
    job : 'Student',
    hobbies : ['Sports', 'MMA', true ,100],
    friends : ['a', 'b', 'c'],
    haslicence : false,

    // calAge : function(birthYear){
    //     return 2025 - birthYear;
    // }

    // calAge : function(){
    //     console.log(this);
    //     return 2025 - this.birthYear;
    // }

    calAge : function(){
        this.age = 2025 - this.birthYear;
        return this.age;
    },

    hasDrivingLicence :function(){
        if(this.age >= 18){
            return 'a';
        } else {
            return 'no';
        }
    },

    getSummary : function(){
        return `${this.firstName} is a ${this.calAge()} year old ${this.job}, and he has ${this.haslicence ? 'a' : 'no'} driver's licence`
    }
}

// console.log(waiz.calAge(2020));
// console.log(waiz['calAge'](2020));

console.log(waiz.calAge());
console.log(waiz.age);

//Challenge 
//"Waiz is a 5 year old Student , and he has no driver's licence"

console.log(`${waiz.firstName} is a ${waiz.age} year old ${waiz.job}, and he has ${waiz.hasDrivingLicence()} driver's licence`)
console.log(waiz.getSummary());
