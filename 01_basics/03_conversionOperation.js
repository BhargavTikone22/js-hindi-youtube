//conversion of all datatypes into number

//let score = 33  //here it is number
//let score = "33" //it is a string
//let score = "33abc" //here it is mix string+number.it can convert in number but value is NaN(not a Number)
//let score = null //if it is not convertable, we see that it use NaN or 0(in null case)
//let score = undefined //it is not defined then non-convertable so NaN
//let score = true //here it is true=1 & false=0
let score = "Bhargav" //not convertible in number so NaN


//console.log(typeof score);
//console.log(typeof(score));

let valueInNumber =Number(score) //N should be capital
//console.log(typeof valueInNumber);
//console.log(valueInNumber);

//"33"--> 33
//"33abc"-->NaN
//true-->1; false-->0

//Conversion into boolean number

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
//console.log(booleanIsLoggedIn);

//1--> true; 0-->false
//""-->false
//"Bhargav"-->true


//Converting a number into string
let someNumber = 33

let stringNumber = String(someNumber)
//console.log(stringNumber);
//console.log(typeof stringNumber);


//*******************Operations*********************************/

let value = 3
let negValue = -value
//console.log(negValue);

//Basic Operations
// console.log(2+2); 
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

//Addition of Two string; No substraction possible
let str1 = "hello"
let str2 = " bhargav"

let str3 = str1 + str2
//console.log(str3);

//Complex situation
//Addition of one string and one number
// console.log("1"+ 2);
// console.log(1 +"2");
// console.log("1" +2 +2);//we think firstly they 2+2 "14" but ans-->122
// console.log(1 + 2 +"2");//here 1+2=3 and and 2as it is -->32

// console.log((3+4)*5%3);//not necessary to this

//unneccesary tricky operations
//console.log(+true);//no need to write +symbol infront of true; it is bad for code readability
//console.log(+"");

//to define variables in different types
let num1, num2, num3

num1 = num2 = num3 = 2+2 //this looks smart but code readility is most preferred

let gameCounter = 100
//gameCounter++; //gives value before incrementing
++gameCounter;//gives value after incrementing
console.log(gameCounter);
