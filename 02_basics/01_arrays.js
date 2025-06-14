//Array

// we can declare array into different datatypes and it is resizable in JS
const myArr = [0, 1, 2, 3, 4, 5] //only numbers are declare
const myHeroes = ["Shaktiman", "Naagraj"] //string
const myArr2 = new Array(1, 2, 3, 4)
console.log(myArr[0]);
// we can make a single array with different datatypes 

// Array Methods

// Push(to add element in array)
// Pop(to delet element in array

myArr.push(6)
myArr.push(7)
myArr.pop() //this will pop the last element
myArr.unshift(9) //this will add element to first place(0th index)
myArr.shift()//this will delete element from first place

console.log(myArr.includes(9)); //this will check 9 is included in array or not if not then false otherwise it is true
console.log(myArr.indexOf(3));

const newArr = myArr.join() //this will turn all values of array into string

console.log(myArr);
console.log(newArr);
console.log(typeof newArr); //string

// slice, splice

console.log("A",myArr);

const myn1 = myArr.slice(1,3) // here it will print only 1st index and 2nd index not 3rd one [1,2]
console.log(myn1);

console.log("B",myArr);

const myn2 = myArr.splice(1,3) //here it will print from 1st index to 3rd index[1,2,3]
console.log("C",myArr);
console.log(myn2);
// but this is not the answer that interviewer expect...
// the key difference between slice() and splice() is  that they manipulate the original array.
// slice() creates a new array containing a portion of original array itself
// splice() directly modifies the original array by removing, replacing, or adding elements