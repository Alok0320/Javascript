// singleton
// object.create


// objects literals

// const JsUser = {}  --  Empty Object

const mySym = Symbol("key1")

const JsUser = {
    name: "Alok", // Here name is key and "Alok" is value ,, name is tracked as string
    "full name": "Alok Upadhyay", // Not possible to access with the help of "."
    // mySym: "mykey1", -- will not be remain as a symbol it will convert in string (wrong way to define a symbol)
    [mySym]: "mykey1",
    age: 18,
    location: "Chandigarh",
    email: "alok@gmail.com",
    ifLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// How to access objects

// console.log(JsUser.email) // 1st way
// console.log(JsUser[email]) --  will give error because email is tracked as a string and for accessing it we have to give it in form of string
// console.log(JsUser["email"]) // 2nd way
// console.log(JsUser["full name"])
// console.log(JsUser[mySym]) // way to access a symbol (3rd way) - all ways have different uses

//  How to change values of a object

JsUser.email = "alokup@gmail.com"
// Object.freeze(JsUser) // will lock the values (will not change)
JsUser.email = "alok@google.com"
// console.log(JsUser) // accessing entire object

// how to add a function in a object

JsUser.greeting = function(){
    console.log("Hello js user");
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`); // Important Line
}

// console.log(JsUser.greeting); 
 console.log(JsUser.greeting());
 console.log(JsUser.greetingTwo());





