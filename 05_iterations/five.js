const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach( function (val) {  // call back function ka naam nhi hota h 
//     console.log(val);
// })  

coding.forEach( (item) => {
    // console.log(item);
} )// call back arrow function 

/*
function printMe(item){
    console.log(item);
}

coding.forEach(printMe)
*/

coding.forEach( (item, index, arr)=> {
    // console.log(item, index, arr)
})

const myCoding = [  // objects inside array
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    }
]

myCoding.forEach( (item) => {
    console.log(item.languageName);
})