// Control flow or Logic flow


// <, >, <=, >=, ==, !=, ===, !==
// = Assign krta h
// == Value check krta h 
// === value or data type dono check krta h 


// if

if (true){
    // agr true hoga to hi execute hoga
}

if (false){
    // agr false hoga to nhi execute hoga

}


if ( 2 == "2"){
    console.log("executed"); // execution hoga kyunki data type nhi check ho rhi
}

if ( 2 === "2"){
    console.log("executed"); // not executed because 2 is number data type and "2" is a string data type
}

if ( 2 != "2"  ){ // false
    console.log("executed"); // execute nhi hoga kyunki 2 is equal to 2 h as a value and data type checek nhi ho rha h
}

if ( 2 !== "2" ){ // true 
    console.log("executed"); // execute hoga kyunki 2 = 2  as a value to h but as a data type nhi and iss case mein data type bhi check ho rha h 
}


/*
const temperature = 41

if (temperature < 50){ // true - executable
    console.log("less than 50")

} else {
    console.log("temperatue is greater than 50") // Not executable - condition is false

}
*/



/*
const score = 200

if (score > 100){
    const power = "fly"
    console.log(`User power: ${power}`); // $ act as & in c 
}
*/


// const balance = 1000

// if (balance > 500) console.log("test"), console.log("test2");//implicit scope

// Nested if

// if (balance < 500){
//     console.log("Less than 500");
// } else if (balance < 750) {
//     console.log("Less than 750");
// } else {
//     console.log("Less than 1200");
// }


const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true


// Logical Operator


if (userLoggedIn && debitCard) { // both condition should be true
    console.log("Allow to buy course");
}

if (loggedInFromEmail || loggedInFromGoogle) { // any one should be true
    console.log("User logged in");
}

