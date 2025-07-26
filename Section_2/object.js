// singleton
// object create

// object literals

const mySym = Symbol("key1")

const jsuser = {
    name: "Dipankar",
    "full name": "Dipankar Kumar",
    [mySym]: "mykey1",
    // mySym: "mykey1",
    age: 21,
    location: "patna",
    email: "dipankar@google.com",
    isLoggedIn: false,
    lastLoginDays: ["monday","tuesday"]
}

// console.log(jsuser.email);
// console.log(jsuser ["email"]);
// console.log(jsuser["full name"]);
// console.log(jsuser[mySym]);

// jsuser.email = "dipankar@chatgpt.com"
// // Object.freeze(jsuser)
// jsuser.email = "dipankar@microsoft"
// // console.log(jsuser);

// jsuser.greeting = function(){
//     console.log("Hello js user");
// }

// jsuser.greetingTwo = function(){
//     console.log(`Hello js user,${this.name}`);
// }
// // console.log(jsuser.greeting());
// console.log(jsuser.greeting());
// console.log(jsuser.greetingTwo());

// object2

// const tinderUser = new Object() //single term object
const tinderUser = {} //non single term object

tinderUser.id = "123abc"
tinderUser.name = "Dipankar"
tinderUser.isLogged = false

// console.log(tinderUser);

const regularUser = {
    email: "dipankar@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Dipankar",
            lastname: "Kumar"
        }
    }
}
// console.log(regularUser.email.fullname);
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
const obj4 = {5: "e", 6: "f"}

// const obj3 = {obj1,obj2}
// const obj3 = Object.assign({},obj1, obj2, obj4)

// const obj3 = {...obj1, ...obj2, ...obj4}
// console.log(obj3);


const users = [
    {
        id: 1,
        email: "dipank@gmail.com"
    },
    {
        id: 1,
        email: "dipank@gmail.com"
    },
    {
        id: 1,
        email: "dipank@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLogged'));


const course = {
    coursename: "js in hindi",
    price: "9999",
    courseInstructor: "Dipankar"
}

// course.courseInstructor
// const {courseInstructor} = course
const {courseInstructor: instructor} = course
// console.log(courseInstructor);
console.log(instructor);

// {
//     "name": "Dipnkar",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]