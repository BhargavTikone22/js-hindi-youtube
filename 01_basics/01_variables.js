const account_Id = 144553
let account_Email = "bhargav@google.com"
var account_Password = "12345"
account_City = "Pune"

// account_Id = 2 (This is not allowed)

account_Email = "hcgfc.com"
account_Password = "212121"
account_City = "Bengaluru"
let accountState;

console.log(account_Id);
/*
prefer not to use var 
because of issue in block scope and functional scope
*/
console.table([account_Id, account_Email, account_Password, account_City, accountState]);