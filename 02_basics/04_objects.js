//const tinderUser = new Object() //this is singleton object
const tinderUser = {} //this is non singleton object
//both gives same output 

// singleton means we can represent it as only one time

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

// we can do more and more nesting
const regularUser = {
    email : "some2gmail.com",
    fullname : {
        userfullname : {
            firstname : "bhargav",
            lastname : "tikone",
        }
    }
}

console.log(regularUser.fullname.userfullname.firstname);
// search option chaining

// before we have merged the arrays like that we can also combine objects

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2}
// console.log(obj3); //{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }
//we found the same problem that we found in arrays that it cannot merge properly

// const obj3 = Object.assign({}, obj1, obj2) //{}this is optional parenthesis
// console.log(obj3);
//without using {} --> { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }
//using {} -->{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

// const obj3 = Object.assign({}, obj1, obj2, obj4) 
// console.log(obj3); //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }

// by using spread operator
const obj3 = {...obj1, ...obj2}
console.log(obj3) //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }
// we spread all operator and then we combined it in obj3

// sometimes we got values from databases(users)

const users = [
    {
        id: 1,
        email: "bhargav@gmail.com"
    },
    {
        id: 1,
        email: "bhargav@gmail.com"
    },
    {
        id: 1,
        email: "bhargav@gmail.com"
    },
]


users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser)); //it will give keys
// [ 'id', 'name', 'isLoggedIn' ]
console.log(Object.values(tinderUser)); //it will give values
// [ '123abc', 'Sammy', false ]
console.log(Object.entries(tinderUser));//[keys, values]
// [ [ 'id', '123abc' ], [ 'name', 'Sammy' ], [ 'isLoggedIn', false ] ]

console.log(tinderUser.hasOwnProperty('isLoggedIn'));//true or false-->true
// we can ask manually also