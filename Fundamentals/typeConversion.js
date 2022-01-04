// String conversion
let value = true;

value = String(value);

typeof value; // string

// Numeric conversion

let age = Number("an arbitrary string instead of a number");
age; // NaN, conversion failed

"6" / "2"; // 3, strings are converted to numbers
Number(" 123 "); // 123
Number("123z"); // NaN (error reading a number at "z")
Number(undefined); // NaN
Number(null); // 0
Number(false); // 0
Number(true); // 1

// Boolean Conversion

Boolean(""); // false
Boolean(null); //false
Boolean(NaN); //false
Boolean(undefined); //false
Boolean(" "); //true
Boolean("hello"); //true
Boolean(145); //true

// More intuitive type conversion examples

let a = +prompt("First number?", 1);
let b = +prompt("Second number?", 2);
a + b; // 3

"" + 1 + 0; // "10"
"" - 1 + 0; // -1
true + false; // 1
6 / "3"; // 2
"2" * "3"; // 6
4 + 5 + "px"; // "9px"
"$" + 4 + 5; // "$45"
"4" - 2; // 2
"4px" - 2; // NaN
"  -9  " + 5; // "  -9  5"
"  -9  " - 5; // -14
null + 1; // 1 // (5)
undefined + 1; // NaN
" \t \n" - 2; // -2
