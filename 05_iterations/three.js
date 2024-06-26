// for of loop

// ["", "', ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
     console.log(num);
}

const greetings = "Hello world!"
for (const greet of greetings) {
  //  console.log(`Each char is ${greet}`)
}

// Maps

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")  // will not count same values

// console.log(map);

for (const key of map) {
     console.log(key);
}

for (const [key, value] of map) { // destructure of array
    console.log(key, ':-', value);
}

// for of loop on object

const myObject = {
    'game1': 'NFS',
    'game2': 'Spiderman'
}

// for (const [key, value] of myObject) { // Not working 
//     console.log(key, ':-', value);
// }