//Map
let recipeMap = new Map([
  ["cucumber", 500],
  ["tomatoes", 350],
  ["onion", 50],
]);

for (let vegetable of recipeMap.keys()) {
  console.log(vegetable); // cucumber, tomatoes, onion
}

for (let amount of recipeMap.values()) {
  console.log(amount); // 500, 350, 50
}

//Set
let peopleSet = new Set();

let john = { name: "John" };
let pete = { name: "Pete" };
let mary = { name: "Mary" };

// visits, some users come multiple times
peopleSet.add(john);
peopleSet.add(pete);
peopleSet.add(mary);
peopleSet.add(john);
peopleSet.add(mary);

// peopleSet keeps only unique values
console.log(peopleSet.size); // 3

for (let user of peopleSet) {
  console.log(user.name); // John (then Pete and Mary)
}
