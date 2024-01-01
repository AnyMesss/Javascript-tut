const accountId = 144553
let accounrEmail = "animesh@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

// accountId = 2 // not allowed

accounrEmail = "sama@gmail.com"
accountPassword = "12342233"
accountCity = "Mumbai"

console.log(accountId);

/* Prefer not to use var 
becasue of issue in block scope and functional scope
*/

console.table([accountId,accounrEmail,accountPassword,accountCity, accountState])