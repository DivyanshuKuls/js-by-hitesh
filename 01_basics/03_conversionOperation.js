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

// console.log(stringNumber)
// console.log(typeof stringNumber)

// ************************************Operations***************************************************

let value = 5
let negativeValue = -value

// console.log(negativeValue) // It will print negative value
// console.log(5+5);
// console.log(5-5);
// console.log(5*5);
// console.log(5**5);
// console.log(5/5);
// console.log(5%4);

let str1 = "Be"
let str2 = " Postive"

let str3 = str1 + str2
console.log(str3)

// console.log(5 + "2") // 52
// console.log("5" + 2); // 52
// console.log("5" + "2"); //52
// console.log("5" + 2 + 3); //523
// console.log(3 + 2 + "5"); //55

// console.log(+true); // + does the conversion from boolean to number and it will print 1
// console.log(+""); // + does the conversion from empty string to number and it will print 0 

let num1, num2, num3
num1 = num2 = num3 = 2 + 22 //(Not a good practice)

console.log(num1, num2, num3)

let counter = 100
console.log(counter++); // print 100
console.log(counter) // print 101

// study pre and post increment from mdn