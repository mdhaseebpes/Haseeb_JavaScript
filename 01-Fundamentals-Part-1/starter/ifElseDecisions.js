const age = 12;
const drivingAge = age >= 18;

if(drivingAge) {
    console.log(`Aliza is eligible for driving 🚘`)
} else {
    const yearLeft = 18 - age ;
    console.log(`Aliza is not eligible still ${yearLeft} left for driving 🚘 `)
}