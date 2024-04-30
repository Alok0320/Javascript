// For in loop
// Objects k upr for in and arrays k upr for of except some cases

const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: 'ruby',
    swift: 'swift by apple'
}

for (const key in myObject) {
     console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    // console.log(key);
}

for (const key in programming) {
   // console.log(programming[key]);
}

// Arrays ki by default keys uski index value hi hoti h e.g 0,1,2,3,4,,
// Object mein hm manually key dal skte h 


const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

for (const key in map) { // Not iterable here 
    console.log(key);
}