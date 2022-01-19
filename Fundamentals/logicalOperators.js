// Logical OR
let hour = 12;
let isWeekend = true;

if (hour < 10 || hour > 18 || isWeekend) {
  console.log("The office is closed."); // it is the weekend
}

console.log(1 || 0); // 1 (1 is truthy)

console.log(null || 1); // 1 (1 is the first truthy value)
console.log(null || 0 || 1); // 1 (the first truthy value)
console.log(null || 2 || undefined); // 2
console.log(undefined || null || 0); // 0 (all falsy, returns the last value)

//Logical AND
let hour = 12;
let minute = 30;

if (hour == 12 && minute == 30) {
  console.log("The time is 12:30");
}

console.log(1 && null && 2); // null
console.log(null || (2 && 3) || 4); // 3  -> Precedence of AND > OR

let age = 25;
if (age >= 14 && age <= 90) console.log("You are an strong person.");

age = 7;
if (age < 14 || age > 90) console.log("You are pricky and weak.");

if (-1 || 0) console.log("first"); // first
if (-1 && 0) console.log("second"); // doesn't runs
if (null || (-1 && 1)) console.log("third"); //third

//NOT
console.log(!true); // false
console.log(!0); // true
