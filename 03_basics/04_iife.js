// Immediately Invoked Function Expressions ( IIFE )

// IIFE allows you to create closures,
//  which help maintain data privacy.
// You can hide variables and functions inside an IIFE
// global scope declaration ko block scope bnaya ja skta h

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();  // ; is for end the IIFE , 2 IIFE eksath likhne k liye

( () => {
    console.log(`DB CONNECTED $`);
})();

( (name) => {
    console.log(`DB CONNECTED ${name}`);
})('alok');

// ()() -> First paranthesis is for definition and second paranthesis is for excecution
