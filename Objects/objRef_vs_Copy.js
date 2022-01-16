// cloning an object with for in  loop
let athlete = {
  name: "Adrian",
  age: 30,
};

let clonedAthlete = {};

for (let key in athlete) {
  clonedAthlete[key] = athlete[key];
}

clonedAthlete.name = "Pasa";

//cloning an object easy way
let athlete = {
  name: "Adrian",
  age: 30,
};

let clonedAthlete = Object.assign({}, athlete);

// merging objects with Object.asign method
let cast = { name: "Tom Cruise" };
let action1 = { canPerformStunt: true };
let action2 = { canDance: true };
Object.assign(cast, action1, action2);
// now cast = { name: "Tom Cruise", canPerformStunt: true, canDance: true }
