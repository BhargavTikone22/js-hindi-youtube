// var c= 300
a = 300

if(true){
    let a = 10
    const b = 20
    // var c = 30
    console.log("Inner: ",a)
} 
//here var is working then why we are using let & const? because these blocks dont work like we want
// reason- in {} braces this is also called scope.this curly braces we found in functions,if-else and many more.In objects we also found {} but they are for object declaration but {}come with function or ifelse then it is said to be scope...scope of that program/scope of function

console.log(a)
// console.log(b)
// console.log(c)

// things we write in if-else is block scope and remaining above is global scope
// things we write in global scope will be available in block one but values in block scope cannot go out of scope

// Inner:  10
// 300
// here globally ans is 300 but in block one is 10.

// how we use scope in windows and node
// the core scope and scope in code environment we run using node the global scope is different

// scope means the access or visibility of variables,functions and objects within different parts of code.