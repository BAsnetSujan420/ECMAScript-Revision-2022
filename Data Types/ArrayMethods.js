// Add and remove elements in array

let arr = ["Toy Story", "Sputnik", , "Soul", "Ratatoullie"];
arr.splice(1, 1); // from index 1 remove 1 element
console.log(arr); // ["Toy Story", "Soul", "Ratatoullie"]

let arr2 = ["I", "study", "JavaScript", "right", "now"];
// remove 3 first elements and replace them with another
arr2.splice(0, 3, "Let's", "dance");
console.log(arr2); // now ["Let's", "dance", "right", "now"]

let myNumList = [1, 2, 5];
// from index -1 (one step from the end)
// delete 0 elements,
// then insert toher elements
myNumList.splice(-1, 0, 5, 1, 2);
console.log(myNumList); // 1,2,5,1,2,5

let arr4 = ["d", "r", "a", "g", "o", "n"];
console.log(arr4.slice(1, 4)); // r,a,g (copy from 1 to 4)
console.log(arr4.slice(-2)); // o,n (copy from -2 till the end)

let num = [1, 2];
console.log(num.concat([3, 4])); // 1,2,3,4
console.log(num.concat([3, 4], [5, 6])); // 1,2,3,4,5,6
console.log(num.concat([3, 4], 5, 6)); // 1,2,3,4,5,6

// Searching in array

let myArr = [1, 0, false, 7, 90];
console.log(myArr.indexOf(0)); // 1
console.log(myArr.indexOf(false)); // 2
console.log(myArr.indexOf(33)); // -1

let users = [
  { id: 1, name: "John" },
  { id: 2, name: "Pete" },
  { id: 3, name: "Mary" },
];

let user = users.find((item) => item.id == 1);
// returns array of the first two users
let someUsers = users.filter((item) => item.id < 3);
console.log(someUsers.length); // 2

let names = users.map((item) => item.name);

let numbers = [1, 2, 3, 4, 5, 6];
let result = numbers.reduce((sum, current) => sum + current, 0);
console.log(result); // 21

// sorting array
let arr = [5, 2, 1, -10, 8];
arr.sort((a, b) => b - a);
console.log(arr); // 8,5,2,1,-10
