// primitive

// 7types : String,number,boolean,null,undefined,symbol,Bigint

// const score = 100;
// const scorevalue = 100.3;

// const isLoggedIn = false;
// const outsideTemp = null;
// let userEmail;  // undefined value

// const id = Symbol('123');
// const anotherId = Symbol('123');

// console.log(id === anotherId);  

// const bigNumber = 4563256n

// Reference (non primitive)

// Array, objects,functions

const heros = ["dip", "golu", "reeks"]
let myObj = {
    name: "dipankar",
    age: 22,
}

const myFunction = function(){
    console.log("hello world");
}

// console.log(typeof bigNumber);
// console.log(typeof outsideTemp);
// console.log(typeof scorevalue);
// console.log(typeof myFunction);
// console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3



// ++++++++++++++++++

// stack (primitive), Heap(Non-primitive)

// let myYouutbename = "DipankarKumar"
// let anothername = myYouutbename
// anothername = "Kumardipankar"

// console.log(myYouutbename);
// console.log(anothername);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne
userTwo.email ="dipankar@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);