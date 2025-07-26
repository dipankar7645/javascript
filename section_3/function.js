function myName(){
    console.log("D");
    console.log("i");
    console.log("p");
    console.log("a");
    console.log("n");
    console.log("k");
    console.log("a");
    console.log("r");
}
// myName()

// function addtwonumbers (num1, num2){
//     console.log(num1+num2);
// }

function addtwonumbers (num1, num2){
    // let result = num1+num2
    // // console.log("Dipankar");
    // return result
    // console.log("Dipankar");

    return num1 + num2
}
// addtwonumbers()
// addtwonumbers(9,9)

const result = addtwonumbers(3,5)

// console.log("Result: ", result);

function loginUserMessage(Username = "sam") {
    // if(!Username){
    //     console.log("please enter a username");
    //     return
    // }
    // if(Username === undefined){
    //     console.log("please enter a username");
    //     return
    // }
    return `${Username} just logged in`
}
// console.log(loginUserMessage("Dipankar"));
// console.log(loginUserMessage());
// console.log(loginUserMessage("Dipankar"));

// function calculateCartPrice(num1){
//     return num1
// }
// console.log(calculateCartPrice(3));

// (...) -> rest operator

function calculateCartPrice(val1, val2, val3, ...num1){
    return num1
}
console.log(calculateCartPrice(200,400,600,800, 3000));