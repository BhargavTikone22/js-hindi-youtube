//Basic Comparisons
// console.log(2 > 1); 
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 >= 1);
// console.log(2 == 1);
// console.log(2 != 1);

// console.log("2" >1);
// console.log("02" >1);

//console.log(null > 0);
//console.log(null == 0);
//console.log(null >= 0);
//there is a problem in value conversion and it gives unpredictable answer
//In JS the equality check == and comparisons > < >= <= works differently
//Comparisons convert null to a number,treating it as 0.
//if we compare with null then null is coverted to 0

console.log(undefined == 0);
console.log(undefined >0);
console.log(undefined < 0);
//In all above cases we find only false value

//=== -->strictly checked
console.log("2" === 2);//here they check strictly like 2is string and a number

//avoid the above comparisons(null and undefined)