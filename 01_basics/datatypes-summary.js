// Primitive

// 7 types : String , Number , Boolean , null , undefined , Symbol , BigInt

// js is dynamically typed
const score =100;
const scoreValue = 100.3

const isLoggedIN = false
const outsideTemp = null 
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
// console.log(id===anotherId);

const bigNumbers = 478454343445555555n



//Reference (Non primitive)

//Arrays , Objects , Functions

const heros =["shaktiman","naagraj", "doga"]
let myObj={
    name:"hitesh",
    age:22,
}

const myFunction = function(){
    console.log("hello world")
}

console.log(typeof myFunction);

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

