alert("2" > 1); // true, string '2' becomes a number 2
alert("01" == 1); // true, string '01' becomes a number 1

// Exception with type coersion before comparisions
let a = 0;
alert(Boolean(a)); // false
let b = "0";
alert(Boolean(b)); // true  -> type coersion
alert(a == b); // true  -> type coersion before comparision

alert(null > 0); //  false
alert(null == 0); // false
alert(null >= 0); // true   -> type coersion converts null to 0

// Strict equality comparisions to avoid type coersion

alert(0 === false); // false, because the types are different
alert(null === undefined); // false

// More Intuitive examples
5 > 4; // true
"apple" > "pineapple"; // false
"2" > "12"; // true
undefined == null; // true    -> null and undefined equal each other only
undefined === null; // false
null == "\n0\n"; // false
null === +"\n0\n"; // false  -> strict equality of different types
