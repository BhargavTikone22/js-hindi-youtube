// singleton
//object.create

// object literals

const mySym = Symbol("key1")

const JsUser = {
    name : "Bhargav", //here name and all other are act as string
    "full name" : "Bhargav Tikone", //here it gives an error if we don't give " "
    [mySym] : "mykey1", //to refer a symbol in object we use square bracket[]
    age : 18, //we can declare number also
    location : "Pune",
    email : "Bhargav@google.com",
    isLoggedIn : false, //we can declare boolean also
    lastLoginDays : ["Monday", "Saturday"] //we can declare array also
}

console.log(JsUser.email);//this is a way to access that we mostly use 
console.log(JsUser["email"]) //this is also a way, we use lesser it 
console.log(JsUser["full name"]) //this is the reason why we use square bracket not the dot operator
console.log(JsUser[mySym])//the way to access symbol
console.log(typeof JsUser[mySym]) //here it's typeof is string 

JsUser.email = "bhargav@chatgpt.com"
//Object.freeze(JsUser)//here wehave freeze the object and henceforth we cannot update it
JsUser.email = "bhargav@microsoft.com"//this email can't be updated because we have freeze the object
console.log(JsUser);

JsUser.greeting = function() {
    console.log("Hello JS User");
}

JsUser.greeting2 = function(){
    console.log(`Hello JS User, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greeting2());
