const accountId = 455655
let email = "dx@yopmail.com"
var password = "789hjk"
city = "Kolkata"
let state // undefined will be printed

// accountId = 90909 
// Will get ==>  "TypeError: Assignment to constant variable." 
//We can't reassign the value to const variable

email = "dc@yopmail.com" // email value will be updated

/* var is not preferred due to issue in block scope and functional scope */

console.table([accountId, email, password, city, state])