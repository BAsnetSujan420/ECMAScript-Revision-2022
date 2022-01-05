console.log(14 % 3); // 2, a remainder of 8 divided by 3

console.log(3 ** 3); // 3³ = 27

console.log(8 ** (1 / 3)); // 2 (power of 1/3 is the same as a cubic root)

console.log("1" + 2); // "12"
console.log(2 + "1"); // "21"
console.log(2 + 2 + "1"); // "41" and not "221"
console.log("1" + 2 + 2); // "122" and not "14"

console.log(6 - "2"); // 4, converts '2' to a number
console.log("6" / "2"); // 3, converts both operands to numbers

// Converts non-numbers to number
console.log(+true); // 1
console.log(+""); // 0

let apples = "2";
let oranges = "3";
console.log(+apples + +oranges); // 5

//modify & assign
let n = 2;
n += 5; // now n = 7 (same as n = n + 5)
n *= 2; // now n = 14 (same as n = n * 2)

console.log(n); // 14

let counter1 = 1;
let a = ++counter1; // prefix

console.log(a); // 2

let counter2 = 1;
let b = counter2++; // postfix
console.log(b); // 1


// More Intuitive examples

let w = 1,
  x = 1;
let y = ++w;
let z = x++;
console.log(w, x, y, z); // w=2, x=2, y=2, z=1

let p = 2;
let q = 1 + (p *= 2);
console.log(p, q); // p=4, q=5
