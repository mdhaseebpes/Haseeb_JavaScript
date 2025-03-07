//String template
const firstName = 'Haseeb';
const job = "software engineer " ;
const year = 2025;
const birthYear = 1987;

const bio = "I'm " + firstName + " ,a " + (year - birthYear) + ' year old ' + job + '!';
console.log(bio);

const bio1 = `I'm ${firstName} ,a ${year-birthYear} year old ${job} !`;
console.log(bio1);

console.log(`just a regular string ....`);

console.log('String with \n\
multiple \n\
lines');

console.log(`String with 
multiple
lines`);
