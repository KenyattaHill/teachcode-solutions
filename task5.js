const numbers = [25, 33];

const sum = (x, y) => x + y;
const diff = (x, y) => x - y;
const prod = (x, y) => x * y;
const quot = (x, y) => y ? x / y : y / x;
const rem = (x, y) => x % y;
const exp = (x, y) => x ** y;
console.log(sum(...numbers)) 
console.log(diff(...numbers)) 
console.log(prod(...numbers)) 
console.log(quot(...numbers)) 
console.log(rem(...numbers)) 
console.log(exp(...[25, 2])); 