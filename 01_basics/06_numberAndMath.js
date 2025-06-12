const score = 400
console.log(score);

const balance = new Number(100)
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2));  //use this in E-commerce website because client want precise value it will print 100.00

const otherNumber = 123.8966
console.log(otherNumber.toPrecision(4));

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-In'));

//*********************************Maths*******************************************

console.log(Math);
console.log(Math.abs(-4)); //it gives absolute value
console.log(Math.round(4.6));//it gives round off value
console.log(Math.ceil(4.2));//it gives ceiling value means 4.2-->5(greater than 4 =5)
console.log(Math.floor(4.9)); //it gies floor value means 4.9-->4(smaller than 5 =4)
console.log(Math.min( 4, 3, 6, 8));//it gives minimum value in array
console.log(Math.max( 4, 3, 6, 8));//it gives maximum value in array

const min = 10
const max = 20
console.log(Math.random());//it gives random value between 0 to 9
console.log((Math.random()* 10) + 1);
console.log(Math.floor(Math.random() * (max - min + 1)) + min);
// above explanation is given on page no. 38(backside)

