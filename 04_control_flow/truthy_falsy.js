const userEmail = "alok@upadh.ai"

if (userEmail){
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}



// Falsy values --
// false, 0, -0, bigInt 0n, "", null, undefined, Nan

// else are Truthy values like -- 
// "0", 'false', " ", [], {}, function(){} -- Empty function
// "" -- falsy
// " " -- Truthy



// How to detect an Array that it is empty or not

const userMail = []
if (userMail.length === 0) {
    console.log("Array is empty");
}

// How to detect an Object that it is empty or not

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty")

}

// false == 0 --> true
// false == '' --> true
// 0 == '' --> true




// Nullish Coalescing Operator (??): only on null and unndefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
// val1 = null ?? undefined  // undefined
val1 = null ?? 10 ?? 15 // jo phle mil gyi

console.log(val1);

// Terniary Operator

// Condition ? true : false

const iceTeaPrice = 100
iceTeaPrice >= 80 ? console.log("Greater than 80") : console.log("less than 80")


