//1. uppercase constant for global constant
const COLOR_ORANGE = "#ff652f";

let myColor = COLOR_ORANGE;

// 2. Assigning values to variables
let user1, admin;

user1 = "Tomek";

admin = user1;

console.log(admin); // "Tomek"

// 3. Datatypes -> (6+2) = 8 datatypes

//number, string, boolean, bigint,null, undefined, object, symbol
let message = `Hello ${admin}, welcome to the system!!!`;

let sameUser = admin === user1;

typeof 10n; // "bigint"

typeof null; // object

typeof Math; // objrct

typeof alert; // function
