//Dates

let myDate = new Date()
console.log(myDate.toString());//converted values in string (Fri Jun 13 2025 14:51:35 GMT+0000 (Coordinated Universal Time))
console.log(myDate.toDateString());//Fri Jun 13 2025
console.log(myDate.toLocaleString());//6/13/2025, 2:51:35 PM
console.log(myDate.toISOString());//2025-06-13T15:23:34.897Z
console.log(myDate.toJSON());//2025-06-13T15:23:34.897Z
console.log(myDate.toLocaleDateString());//6/13/2025
console.log(myDate.toLocaleTimeString());//3:26:36 PM


//for specific dates
let myCreatedDate = new Date(2023, 0, 23)
console.log(myCreatedDate.toDateString());//Mon Jan 23 2023

let myCreatedDate2 = new Date(2023, 0, 23, 5, 3)
console.log(myCreatedDate2.toLocaleString());//1/23/2023, 5:03:45 AM

let myCreatedDate3 = new Date("2023-01-14")//for(YYYY-MM-DD) month start from 1 not 0
console.log(myCreatedDate3.toLocaleString());//1/14/2023, 12:00:00 AM

let myCreatedDate4 = new Date("01-14-2023")//MM-DD-YYYY (same as above)
console.log(myCreatedDate4.toLocaleString());//1/14/2023, 12:00:00 AM

// times
let myTimeStamp = Date.now()
console.log(myTimeStamp);//for milisecond(1749829285440)from 1-1-1970
console.log(myCreatedDate.getTime());//for milisecond(1674432000000)from 14-1-2023
console.log(Math.floor(Date.now()/1000));//for seconds (1749829285)
//divide by 1000 because 1 second= 1000 milisecond

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// all types are written in page no.39(backside)

newDate.toLocaleString('default',{
    weekday: "long"
}) //for customized dates