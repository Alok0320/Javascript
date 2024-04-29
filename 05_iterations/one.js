// For Loop

// for (let i = 0; i <= 10; i++) {  // ctrl + d --> to select all i at once by clicking again and again
//     // const element = i;
//     console.log(i);
    
// }

for (let i = 0; i <= 10; i++) {  // ctrl + d --> to select all i at once by clicking again and again
    const element = i;
    if (element == 5) {
       // console.log("5 is best number");
    }
    // console.log(i);
}

for (let i = 1; i <= 10; i++) { // i same code mein is liye use kr pa rhe cause upr i ussi block tk limited h to hm iss block mein again usse decleare ya define kr skte h (Block scope)
    // console.log(`Outer loop value: ${i}`);
    for (let j = 1; j < 10; j++) { // Outer loop ek baar chla h inner loop 10 baar chla h 
        // console.log(`Inner loop value: ${j} and inner loop ${i}`);
        // console.log(i + '*' + j + ' = ' + i*j)  // Table Printing
    }
    
}

let myArray = ["flash", "batman", "superman"]
// console.log(myArray.length);
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element)
    
}


// Break and Continue

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
       // console.log(`Detected 5`);
        break; // Loop will not proceed furthur 
    }
    //console.log(`value of i is ${index}`);
    
}


for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
        continue // will let continue the loop 
    }
    console.log(`value of i is ${index}`);
    
}