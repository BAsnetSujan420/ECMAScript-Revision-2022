let id = Symbol("id");

let user = {
  name: "John",
  [id]: 123, // not "id": 123
};

//cloning object with Symbol as id
let clone = Object.assign({}, user);

alert(clone[id]); // 123
