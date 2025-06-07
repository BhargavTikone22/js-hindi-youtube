//Primitive

//7 types: String, Number, Boolean, Null, Undefined, BigInt, Symbol

const score = 100 //string
const scoreValue = 100.3 //number

const loggedIn = false //boolean
const outsideTemp = null //null- empty space
let userEmail; //undefined

const id = Symbol('123') //symbol
const anotherId = Symbol('123')
console.log(id === anotherId);

const bigNumber = 378988913879502849n //bigint

// Reference(Non-Primitve)
// These are values in which memory reference is directly allocate.

// Types: Array, Objects, Functions

const heros = ["Shaktiman", "Naagraj", "Doga"] //array
//object
let myObj = {
    name: bhargav, //everything in curly braces {} is object
    age:20,
}

//function
const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof score);