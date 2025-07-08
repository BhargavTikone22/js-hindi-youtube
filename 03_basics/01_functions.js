function sayMyName(){
    console.log("B");
    console.log("H");
    console.log("A");
    console.log("R");
    console.log("G");
    console.log("A");
    console.log("V");
}

// sayMyName() //it will give me output
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
}

const result = addTwoNumbers(3, 4)
// console.log("Result:" ,result );


