// array

const myArr = [1,2,3,4];
const myHeros = ["shaktiman","naaraj"]

const myArr2 = new Array(2,3,4,5)
// console.log(myArr[0]);

// Array method 

// myArr.push(6) // add
// myArr.push(7)
// myArr.pop() //delete

// myArr.unshift(9) //start add
// myArr.shift() //start element delete

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(4));

// const newArr = myArr.join()

// console.log(myArr);
// console.log(newArr);
// console.log(typeof newArr);

// slice, splice

console.log("A",myArr);

const myn1 = myArr.slice(1,3)

console.log(myn1);
console.log("B",myArr);


const myn2 = myArr.splice(1,3)
console.log("c",myArr);
console.log(myn2);