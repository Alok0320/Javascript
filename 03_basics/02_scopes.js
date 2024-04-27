//  Javascript excecutes line by line

if (true) {
    let a = 10  // block scope 
    const b = 20  // block scope
    // var c = 30  // global scope thats why var should be avoided
    // d = 40 // gllobal scope
    // console.log(a);
}
// console.log(a);  // block scope
// console.log(b);  -> block scope
// console.log(c);  // Global scope

// console and environment mein scopes different hote h 

// Nested Scope ++++++++

function one(){
    const username = "alok"

    function two(){
        const website = "youtube"
        // console.log(username); // child parent kon access kr pata h
    }
    // console.log(website); // error -not accessible - scope is not defined

    two()
}

one()

if (true) {
    const username = "alok"
    if (username === "alok") {
        const website = "youtube"
        // console.log(username + website); // will add
    }
    // console.log(website); // not accessable
}

// console.log(username); // scope is not available


// ++++++++++++++++++++++++++++ interesting ++++++++++++++++++++++++

console.log(addone(5)); // can be excecuted before initialization

function addone(num){
    return num + 1

}


console.log(addTwo(5));

const addTwo = function(num){ // another way of defining a function - can't be excecuted before initialization
    return num + 2
} 

