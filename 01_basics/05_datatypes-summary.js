// #Primitive 

// 7 types : string, Number, Boolean, Null, Undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail; // value will be undefined aka let userEmail = undefined ;

const id = Symbol('123')
const anotherId = Symbol('123')
// above value is not same symbol make values unique
console.log(id === anotherId);


const bigNumber = 79840493366677n


/* JavaScript is a --Dynamically typed-- language,
 which means that data types of variables are 
 determined by the value they hold at runtime 
 and can change throughout the program as we
  assign different values to them.
  No need to define data type with varible*/


// Reference (Non-primitive) 

// Array, Objects, Functions
// If we want to master JS we have to master Objects and browser's browser or web event 

// Arrays
  const heros = ["shaktiman", "naagraj", "doga"]

  // Objects
//   {
//     name: "alok",
//     age: 18,
//   }

  // Objects storing in a variable
  let myObj = {
    name : "alok",
    age: 18,
  }

  // function
 
  // function(){}

const myFunction = function(){
    console.log("Hello world");
}

// How to identify data type of any variable

console.log(typeof bigNumber);

console.log(typeof scoreValue);

// null ka object data type aata h 
console.log(typeof outsideTemp);

console.log(typeof anotherId);

console.log(typeof myFunction);

console.log(typeof heros);

// In non primtive sbka data type object hi aata h except function 

// Stack (Primitve) -- copy of variable (value not updated)
// Heap (Non-Primitive) -- Reference of original value (value updated)

let myYoutubename = "developeralok"

let anothername = myYoutubename
anothername = "chaiaurcode"

console.log(anothername);
console.log(myYoutubename);

let userOne = {
  email: "user@google.com",
  upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "alok@google.com"

console.log(userOne.email);
console.log(userTwo.email);