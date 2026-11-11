//Date
let myDate = new Date();
// console.log("1   "+myDate.toString())
// console.log("2   "+myDate.toDateString())
// console.log("3   "+myDate.toISOString())
// console.log("4   "+myDate.toJSON())
// console.log("5   "+myDate.toLocaleDateString())
// console.log("6  "+myDate.toLocaleString())
// console.log("7   "+myDate.toLocaleTimeString())

// let myCreatedDate = new Date(2023,0,23)//method 1
// let myCreatedDate = new Date(2023,0,23,5,3)
// let myCreatedDate = new Date("2023-01-14")//method 2

let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.toLocaleString());
 
let myTimeStamp = Date.now();
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth()+1);
 
//`${(newDate.getMonth()+1} and the time is 

newDate.toLocaleString('default',{
    weekday :"long",
})


