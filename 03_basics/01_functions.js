

function sayMyName(){
    console.log("A");
    console.log("L");
    console.log("O");
    console.log("k");
}

// sayMyName()

// function addTwoNumbers(number1, number2){ // number1 and number2 are the parameters here
//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){ // number1 and number2 are the parameters here
    
    // let result = number1 + number2
    // return result   // return k baad kuch bhi print nhi jota h 
    // console.log(alok)
    return number1 + number2
}

// addTwoNumbers() // NaN -> Not a number
// addTwoNumbers(3, 4) // 3 and 4 are arguments
// addTwoNumbers(3, "4") // 34
// addTwoNumbers(3, null) // 3

const result = addTwoNumbers(3, 5)

// console.log("Result: ",result); // Undefined

function loginUserMessage(username = "sam"){ // hrer sam is default value
    // if(username === undefined){
    //     console.log("Please enter a username");
    //     return
    // }
    // same below
    if(!username){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("alok"))
// console.log(loginUserMessage("Alok"))

// function calculateCartPrice(...num1){  // Rest Operator
//     return num1
// }

// console.log(calculateCartPrice(200, 400, 500))

function calculateCartPrice(val1, val2, ...num1){  // Rest Operator
    return num1
}

console.log(calculateCartPrice(200, 400, 500, 2000))  // 200 and 400 will given to val and val2 respectively


const user = {
    username: "alok",
    price: 199
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);

}

// handleObject(user)

handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray))

console.log(returnSecondValue([200, 400, 100, 600]))
