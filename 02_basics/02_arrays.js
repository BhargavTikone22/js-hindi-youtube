const marvel_heros = ["Thor", "Ironman","Spiderman"]
const dc_heros = ["Batman", "flash", "Superman"]

// push operator
// marvel_heros.push(dc_heros);
// console.log(marvel_heros);//[ 'Thor', 'Ironman', 'Spiderman', [ 'Batman', 'flash', 'Superman' ] ]
// this will not merge all elements like we want but by using concat we can do this

// console.log(marvel_heros[3][1]);//to access the only value of flash(single element)
// this is also not a right to do

// concat
const allHeros = marvel_heros.concat(dc_heros)
console.log(allHeros);//[ 'Thor', 'Ironman', 'Spiderman', 'Batman', 'flash', 'Superman' ]
//this is the right way to merge but we conact only two arrays so there is also a another way to merge for 3 or more arrays

//spread operator

const all_new_heros = [...marvel_heros, ...dc_heros]
console.log(all_new_heros);
// [ 'Thor', 'Ironman', 'Spiderman', 'Batman', 'flash', 'Superman' ]
// we preferred mostly this because for more than three or more arrays we cannot concat it 


const another_array = [1, 2, 3, [4, 5, 6], 7,[6, 7,[4, 5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);
// [ 1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5]
// flat()--> it creates a new array with all sub-array elements concatenated into it recursively upto the specified depth (if no depth is provided,then it's default is 1)

console.log(Array.isArray("Bhargav"));//here it ask question..is it an array?-->false
console.log(Array.from("Bhargav"));//here it converts into an array
// ['B', 'h', 'a','r', 'g', 'a','v']
console.log(Array.from({name: "Bhargav"}));//-->[]it gives empty bracket
// because here we have to specify that what we want to print..the keys or the values..if it is not making it it gives an empty array //intersting case(interview)

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3));//[ 100, 200, 300 ]
