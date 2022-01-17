let user1 = {
  name: "Tomek",
  address: {
    country: "Poland",
    city: "Marki",
  },
}; // user has no address

let user2 = {
  name: "Sujan",
};

console.log(user2.address?.street); // undefined

// example 2
let instructorLecturer = {
  admin() {
    alert("I am module leader.");
  },
};

let instructorTutor = {};

instructorLecturer.admin?.(); // I am module leader.

instructorTutor.admin?.(); // nothing (no such method)

//example 3
let prize = "cash";
let winner1 = {
  cash: "500K",
};

let winner2 = null;

alert(winner1?.[prize]); // 500k
alert(winner2?.[prize]); // undefined
