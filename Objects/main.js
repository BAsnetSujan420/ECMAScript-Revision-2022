let user = { name: "Tomek", age: 51 };

console.log("age" in user); // true, user.age exists
console.log("location" in user); // false

// for in loop example
let box = {
  width: 200,
  height: 300,
  title: "My parcel box",
};

scaleBox(box);

function scaleBox(obj) {
  for (let key in obj) {
    if (typeof obj[key] === "number") {
      obj[key] *= 2;
    }
  }
}
