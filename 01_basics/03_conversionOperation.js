let count = null

// console.log(typeof count)
// console.log(typeof(count))

let valueInNumber = Number(count)

// console.log(typeof valueInNumber)
// console.log(valueInNumber)

/* 
* "100" => It will be converted to Number => 100
* "100abc" => It will also be converted to number but it will print NaN which is Not a number => NaN
   NaN is number type
* true => It will be converted to 1; false => It will be converted to 0 => type will be number
* null => null is a object type => it will be converted to number 0
*/

let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)

// console.log(booleanIsLoggedIn)

/* 
* 1 => 1 will be converted to true; 0 => 0 will be converted false
* "" => empty string will be converted to false
* "ab" => it will be converted to true
*/

let someNumber = 56
let stringNumber = String(someNumber)

console.log(stringNumber)
console.log(typeof stringNumber)