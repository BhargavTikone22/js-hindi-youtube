function sayMyName(){
    console.log("B");
    console.log("H");
    console.log("A");
    console.log("R");
    console.log("G");
    console.log("A");
    console.log("V");
}

//  sayMyName() //it will give me output
// if we write it without a parenthesis (syntax)
// sayMyName //here this will not give error because we are giving an reference

// function addTwoNumbers( number1, number2){ //num1,num2 are parameters here
//     console.log(number1 + number2);
// }

// addTwoNumbers(3,4) //here it gives output 7
// addTwoNumbers(3,"4") //here it thinks that both are string-->34
// addTwoNumbers(3,"a")// here it gives a problem -->3a
// addTwoNumbers(3, null) //

// In () values - if we write in function they are parameters and if we write it in calling functions then thay are called arguements.
// (number1, number2) --> here they are parameters
// (3, 4) --> here they are arguements 

function addTwoNumbers(number1, number2){
    // let result= number1 + number2
    // return result
    return number1 + number2
    // console.log(number1 + number2);
    
}

// addTwoNumbers(3,5) -->this can will be applicable when line no.32 is used
const result = addTwoNumbers(3, 4)
//  console.log("Result:" ,result );

// using console log statement does not means that it will return same thing i.e. 7
// /after return statement we cannot declare or print any statement

// we can study about scope in further lectures

function loginUserMessage(username) {
    if(username === undefined){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`    
}

// console.log(loginUserMessage("Bhargav"));
// console.log(loginUserMessage()) //if we dont pass any value it gives undefined
// by using if-else statement we can

// we can give default name also [function loginUSerMessage(username = "sam")] it means if else cannot run and default name is printed




// ********************functions with objects & array*****************************
// ******************************#video-20****************************************


// for shopping cards in e-commerce site 

function calculateCartPrice(val1,val2,...num1){
    return num1
}

// console.log(calculateCartPrice(2))
// here we are printing the only one value that we want to return
// we cannot print many values like 200,300,400 using this in shopping card..
// to avoid this we use rest operator(...) it is same as spread operator but thier usecase is different
//rest operator means to collect all items opposite of spread operator
// console.log(calculateCartPrice(200,300,500));
// [ 200, 300, 500 ] it will put all values in array as we are passing many values

// by using val1, val2
// console.log(calculateCartPrice(200,300,500,2000));
// [ 500, 2000 ] here 200 goes to val1, 300 goes to val2 and remaining values remain in array

const user = {
    username : "bhargav",
    price : 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);  
}

// handleObject(user) //Username is bhargav and price is 199-->here is problem that if we names of username and price like userName and Prices it will give undefined
// we can pass direct object-->
handleObject({
    username : "sam",
    price : 199
})

// we can also pass arrays
const myNewArray = [200, 300, 400, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));//300
console.log(returnSecondValue([200,300,400,600])); //300

