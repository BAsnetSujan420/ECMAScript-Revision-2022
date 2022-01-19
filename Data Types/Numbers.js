let capital = 17e15; // 17000,000,000,000,000,000

let microsecond = 1e-6; //  0.0000001

let a = 0b11111111;
let b = 0o377;

console.log(a === b); // true

let num = 255;
console.log(num.toString(16)); // ff
console.log(num.toString(2)); // 11111111

let num = 12.34;
console.log(num.toFixed(5)); // "12.34000" toFixed() is a string

// imprescision calculations
console.log(0.1 + 0.2 == 0.3); // false
console.log(0.1 + 0.2); //  0.30000000000000004

let sum = 0.1 + 0.2;
console.log(+sum.toFixed(2)); // 0.344

//tests isInfinite and isNaN
console.log(isNaN(NaN)); // true
console.log(isNaN("str")); // true
console.log(NaN === NaN); // false, do not compare NaN with equality operator

console.log(isFinite("15")); // true
console.log(isFinite("")); // true
console.log(isFinite("str")); // false, because a special value: NaN
console.log(isFinite(Infinity)); // false, because a special value: Infinity

// converting to Numeric
console.log(parseInt("100px")); // 100
console.log(parseFloat("12.5em")); // 12.5

console.log(parseInt("12.3")); // 12, only the integer part is returned
console.log(parseFloat("12.3.4")); // 12.3, the second point stops the reading

console.log(parseInt("a123")); // NaN, the first symbol stops the process

//Math functions
console.log(Math.random()); // 0.1234567894322
console.log(Math.max(3, 56, -10, 0, 1)); // 56
console.log(Math.min(1, 2, -7)); // -7
console.log(Math.pow(2, 6)); // 2 in power 6 = 64
