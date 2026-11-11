// Primitive

// 7 types : String , Number , Boolean , null , undefined , Symbol , BigInt



// js is dynamically typed
const score =100;
const scoreValue = 100.3

const isLoggedIN = false
const outsideTemp = null 
let userEmail;
let unserEmails = undefined; 

const id = Symbol('123')
const anotherId = Symbol('123')
// console.log(id===anotherId);// even though vaule of id and nothid is same but still it is not same coz we used Symbol .. co returned value is different

const bigNumbers = 478454343445555555n // when we used n at the end of any number it automatically become bigInt



//Reference (Non primitive)

//Arrays , Objects , Functions

const heros =["shaktiman","naagraj", "doga"]// we write array in square bracket and object in curlly brackets
let myObj={
    name:"hitesh",
    age:22,
}

const myFunction = function(){
    console.log("hello world")
}

// console.log(typeof myFunction);

// Return type of variables in JavaScript
// 1) Primitive Datatypes
//        Number => number
//        String  => string
//        Boolean  => boolean
//        null  => object
//        undefined  =>  undefined
//        Symbol  =>  symbol
//        BigInt  =>  bigint

// 2) Non-primitive Datatypes
//        Arrays  =>  object
//        Function  =>  function
//        Object  =>  object


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//Stack (Primitive), Heap(Non-Primitive) 
// whenever we use  stack memory it means whatever variable we declared uski we get a copy
// when we use Heap memory then we get reference of the declared variable (jo bhi change karenge vo original value of change hoga)


let myYoutubename = "hiteshchoudhary.com"

let anothername = myYoutubename
anothername= "chaiaurcode"

console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email :"user@google.com",
    upi :"user@ybl"
}
let userTwo = userOne

userTwo.email="hitesh@google.com"

console.log(userOne.email);
console.log(userTwo.email);





