console.log(null > 0) // false
console.log(null == 0) // false
console.log(null >= 0); // true

/* The reson is that an equality check == and comparisons >, <, >=, <= work differently.
   Comparisons convert null to a number, treating it as 0. That's why (3) null >=0 is true and (1) null > 0 is false.
*/

console.log(undefined == 0) // false
console.log(undefined > 0) // false
console.log(undefined >= 0) // false


