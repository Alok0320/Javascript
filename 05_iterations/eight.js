// Reduce Method
// Important


const myNums = [1, 2, 3]
/*
const myTotal = myNums.reduce(function (accumalator, currentval) {
    console.log(`accumalator: ${accumalator} and currentval: ${currentval}`);
    return accumalator + currentval
}, 0) // This is zero is for accumalator initial value 
*/

// implementing with arrow function

/*
const myTotal = myNums.reduce( (accumalator, currentval) => {
    console.log(`accumalator: ${accumalator} and currentval: ${currentval}`)
    return accumalator + currentval
}, 0)
*/

 const myTotal = myNums.reduce( (acc, currval) => acc+currval, 0)
console.log(myTotal);



const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    }
]

// Sare price ko add krna h 

const priceToPay = shoppingCart.reduce( (acc, item) => acc + item.price, 0)
console.log(priceToPay);