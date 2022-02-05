// Array destructuring
let arr = ["John", "Smith"];
let [firstName, surname] = arr;
console.log(firstName); // John
console.log(surname); // Smith

// Rest parameter
let [name1, name2, ...titles] = [
  "Julius",
  "Caesar",
  "Consul",
  "of the Roman Republic",
];
console.log(titles); // titles = ["Consul", "of the Roman Republic"]

// Object Destructuring
let user = {
  name: "John",
  years: 30,
};

let { name, years: age, isAdmin = false } = user;

console.log(name); // John
console.log(age); // 30
console.log(isAdmin); // false

// The rest pattern
let options = {
  title: "Menu",
  height: 200,
  width: 100,
};

let { title, ...rest } = options;
console.log(rest.height); // 200
console.log(rest.width); // 100
console.log(title); // "Menu"

// Nested Object Destructuring
let options = {
  size: {
    width: 100,
    height: 200,
  },
  items: ["Cake", "Donut"],
  extra: true,
};

let {
  size: { width, height },
  items: [item1, item2],
  title = "Menu",
} = options;

console.log(title); // Menu
console.log(width); // 100
console.log(item2); // Donut
