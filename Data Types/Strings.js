let str1 = "Hello\nWorld";
let str2 = `Hello
World`;

console.log(str1 == str2); // true

console.log(`I'm the Walrus!`); // I'm the Walrus!4

//cahnging the case
console.log("Elephant".toUpperCase()); // ELEPHANT
console.log("CAT".toLowerCase()); // cat

//searching for substring
let movieTitle = "Mind Field: Vsauce Scariest thing";
console.log(movieTitle.indexOf("Thing")); // -1
console.log(movieTitle.indexOf("Vsauce")); // 12

console.log("Hello".includes("b")); // false
console.log("Widget".startsWith("Wid")); // true, "Widget" starts with "Wid"
console.log("Widget".endsWith("get")); // true, "Widget" ends with "get"

//getting a substring
let str = "stringify";
console.log(str.slice(-4, -1)); // 'gif'
console.log(str.slice(2, 6)); // 'ring'
console.log(str.substring(2, 6)); // 'ring'

//compairing strings
console.log("a" > "Z"); // true
console.log("Österreich" > "Zealand"); // true
console.log("z".codePointAt(0)); // 122
console.log("Z".codePointAt(0)); // 90
