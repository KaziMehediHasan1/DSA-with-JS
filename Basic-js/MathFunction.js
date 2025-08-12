// console.log(Math.round(12.4)); // is delete of .4 value, just clg - 12;
// console.log(Math.ceil(11.2)); // is current . point value to up value!
// console.log(Math.floor(12.3)); // is return less value, not up. down
// console.log(Math.pow(2, 5)); // 2 ^ 5; 2 * 2 * 2 * 2 * 2 = 32;
// console.log(Math.sqrt(32))  // root vlaue
// console.log(Math.abs(22)) //
// console.log(Math.max(23,55))
// console.log(Math.random());

const randomNum = Math.random() * 100000 + 1000;
const otp = Math.trunc(randomNum);
console.log(otp);
