const user = {
    username: "alok",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }
}
// this -> current context(values)

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this); // {} -> cause no global context(value) to be refered by this

// sbse jada global objects browser console mein windows k h 

/*
function chai(){
    let username = "alok"
    console.log(this.username); // undefined --> "this" only works in object not functions
} 
chai()  // function call 
*/

// const chai = function () {
//     let username = "alok"
//     console.log(this.username);
// }
// chai()  undefined


// const chai = () => {   // Arrow Function - function keyword replaces by "=>"
//     let username = "alok"
//     console.log(this);  // empty
// }
// chai()

// () => {}    // Arrow function

/* const addTwo = (num1, num2) => {
    return num1 + num2
}

console.log(addTwo(3, 4)); */

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 ) // Implicit return
// {}  use kiya to return likhna pdega, {} nhi use kiye to return nhi likhna pdega
// console.log(addTwo(3, 4));

// how to return Objects using implicit return

const rcb = () => ({username: "alok upadhyay"})  // Paranthesis are necessary

console.log(rcb());
    
