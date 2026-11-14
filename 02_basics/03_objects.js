// object ko declare krne ke do tareeke hote hai e hai literal ki tarah dusra hai constructor ki tarah
// yaha per ek concept aya hai singleton
// singleton ka simple sa mtlb hota hai ki koi bhi constructor se banate hai to singleton object banta hai 
// jub hum literal ki tarah declare krte hai to singleton nhi banta hai 


//singleton
//Object.create 

//object literals
const mySym = Symbol("key1")

const JsUser ={
    name:"Hitesh",
    "full name":"Hitesh choudhary",
    age:18,
    location:"Jaipur",
    [mySym]: "symbolans",
    email :"hitesh@google.com",
    idLoggedIn : false,
    lastLoginDays :["Monday","Saturday"],


}
// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser[mySym]);
// JsUser.email="hitesh@chatgpt.com"
//  Object.freeze(JsUser)
//  JsUser.email="hitesh@microsoft.com"
//  console.log(JsUser);

 JsUser.greeting = function(){
    console.log("hello Js User");
    
 }
 
 JsUser.greetingTwo = function(){
    console.log(`hello js user ${this.name}`);
    
 }

 console.log(JsUser.greeting());
  console.log(JsUser.greetingTwo());
 
