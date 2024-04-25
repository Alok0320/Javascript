const name = "alok"
const repoCount = 10

// console.log(name + repoCount + " Value");

// string interpollation -- can do many things on the go
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

// best way to declare a string 
const gameName = new String('alok-au')

console.log(gameName[0]);
console.log(gameName.__proto__);

// To print length of a string -- Methods ( We have to know more and more about methods )
// Go through all methods through documentation 

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('k'));

const newString = gameName.substring(0, 4) // 4 will not included
console.log(newString);

const anotherString = gameName.slice(-6, 4)
console.log(anotherString);

const newStringOne = "   alok   "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://alok.com/alok%20upadhyay"

console.log(url.replace('%20', '-'));

console.log(url.includes('alok'));
console.log(url.includes('shubham'));

console.log(gameName.split('-'));