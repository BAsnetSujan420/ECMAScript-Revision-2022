//Nullish Coalesing operator -> igonred null and undefined but not 0
let firstName = null;
let lastName = null;
let nickName = "Supercoder";

// shows the first defined value:
console.log(firstName ?? lastName ?? nickName ?? "Anonymous"); // Supercoder

//differences using || and ??
let height = 0;
console.log(height || 100); // 100
console.log(height ?? 100); // 0  -> does the right thing

let height = null;
let width = null;
let area = (height ?? 100) * (width ?? 50); // important: use parentheses
console.log(area); // 5000
