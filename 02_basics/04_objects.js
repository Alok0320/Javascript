// const tinderUser = new Object() -- Singelton Object
const tinderUser = {} // Non-singeleton Object


tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(typeof tinderUser);

// Nested Objects
const regularUser = {
    email: "alokup@gmail.com",
    fullname: {
        userfullname: {
            firstname: "alok",
            lastname: "upadhyay"
        }
    }
}

// console.log(regularUser.fullname);
// console.log(regularUser.fullname.userfullname);
// console.log(regularUser.fullname.userfullname.firstname);


// Combining two arrays ++++++ 

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
const obj4 = {5: "e", 6: "f"}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign(obj1, obj2)
// const obj3 = Object.assign({}, obj1, obj2, obj4) // {} -- Empty object -- Target object ,, obj1, obj2, obj4 --Source Object

const obj3 = {...obj1, ...obj2, ...obj4} // Spread Operator -- Mostly use
// console.log(obj3);

// Database se value aise aati h ,, 
// Array of Objects

const users = [
    {
        id: 1,
        email: "alok@gmail.com"
    },
    {
        id: 1,
        email: "alok@gmail.com"
    },
    {
        id: 1,
        email: "alok@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);

// keys, values, entries, hasOwnProperty all are methods

// console.log(Object.keys(tinderUser)); // Important, To get keys of a object

// console.log(Object.values(tinderUser)); //  to get values of keys in a object

// console.log(Object.entries(tinderUser)); // convert 'key: values' into array, and stores all this arrays into a single array

// console.log(tinderUser.hasOwnProperty('isLoggedIn')); // to check a value is abailable or not



// Object de-structure

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "alok"
}

// course.courseInstructor

const {courseInstructor: instructor} = course  // de-structured

// console.log(courseInstructor);
console.log(instructor);

// React syntax

// const navbar = (company) => {

// }

// navbar(company = "alok")

// Json API

// {
//     name: "alok",
//     coursename: "js in hindi",
//     price: "free"
// }

// randomuser me api
// Json Formatter is a tool which helps in study of api
[
    {},
    {},
    {}
]
