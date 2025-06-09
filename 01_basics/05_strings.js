
const name = "Bhargav"
const repoCount = 50 //repository count

console.log(name + repoCount + " Value");//Outdated way

// modern way
console.log(`Hello my name is ${name} and my repository count is ${repoCount}`); //backtick(` `)   ${varibale name}

//string methods
const gameName = new String('bhargav-st')

console.log(gameName[0]); //0th index of above string
console.log(gameName.__proto__); //describe prototype

console.log(gameName.length); //describe length of string
console.log(gameName.toUpperCase()); //change to uppercase
// this doesnot change our original string because it is a primitive datatype
console.log(gameName.charAt(7)); //at which index the character belongs to(character at)
console.log(gameName.indexOf('s')); // here we see character's index number

const newString = gameName.substring(0,4) //divide the string from 0th index to 3rd index not include 4th index
console.log(newString);

const anotherString = gameName.slice(-8,4)// here it slice down into new string without modifying the original string
//-9 -8 -7 -6 -5 -4 -3 -2 -1 0
// 0 1 2 3 4 5 6 7 8 9 
// b h a r g a v - s t
//from -8 ie h & 4 ie g means from h to g == ar
console.log(anotherString);

const newStringOne = "   Bhargav   "

console.log(newStringOne);
console.log(newStringOne.trim()); //here extra spaces are removed

const url = "https://bhargav.com/bhargav%20tikone"

console.log(url.replace('%20','-')); //('search value','replace value')
// this will replace from this to this
// console.log(url.includes('bhargav'));
console.log(url.includes('hitesh')); //here it tell that hitesh is included in string or not

const newStringTwo = "Bhargav-uc-com"

console.log(newStringTwo.split('-')); //this will convert string into array
