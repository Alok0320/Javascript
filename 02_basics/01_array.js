// array -- storing a collection of multiple items under a single varible, resizable, can contain different data types, create shallow copy(same reference), 0 indexing.

const myArr = [0, 1, 2, 3, 4, 5]
const myHeros = ["Viratkohli", "Rohitsharma", "Dhoni"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[5]);

// Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9)
// myArr.shift()

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(4));

const newArr = myArr.join()


// console.log(myArr);
// console.log(newArr);

// console.log(typeof myArr);
// console.log(typeof newArr);

// slice, splice -- Difference +++++++++++++++++++++

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)
console.log(myn1);

console.log("B", myArr);

const myn2 = myArr.splice(1, 3)
console.log("C", myArr);
console.log(myn2);

// splice manupulates the array it consider whole range and left array without that range while slice does not cover whole eange aka (1, 3) -- 1,2, and do not affectb on innitial array
