// ++++++++++++++++++++++ Numbers ++++++++++++++++++++++

const score = 400
// console.log(score);

const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString().length);
// used in projects while we have to show numbers with many digit after 0
// console.log(balance.toFixed(2));

// const otherNumber = 23.3966
// const otherNumber = 123.3966 // 123
// const otherNumber = 123.8966 // 124
const otherNumber = 1123.3966 // 1.12e+3
// console.log(otherNumber.toPrecision(3));

const hundreds = 1000000
// console.log(hundreds.toLocaleString()); // 10,00,000
// console.log(hundreds.toLocaleString('en-IN'));

// ++++++++++++++++++++++++++++ Maths ++++++++++++++++++++++++++

// for checking different method go to console and type there syntax related to that method, it will show all the methods related to it 

// console.log(Math);
// console.log(Math.abs(-4)); // Negative to positive
// console.log(Math.round(4.6)); // Round of value
// console.log(Math.ceil(4.2)); // 5
// console.log(Math.floor(4.9)); // 4
// console.log(Math.min(4, 2, 6, 8, 9)); // 2
// console.log(Math.max(4, 2, 6, 8, 9)); // 9

console.log(Math.random()); // Always gives value between 0 and 1
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min +1))); // important 



