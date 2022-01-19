// default parameter in function
function showMessage(from, text = "no text given") {
  alert(from + ": " + text);
}

showMessage("Ann"); // Ann: no text given

// reusable and short function doing only one thing
function showPrimes(n) {
  for (let i = 2; i < n; i++) {
    if (!isPrime(i)) continue;

    console.log(i); // a prime
  }
}

function isPrime(n) {
  for (let i = 2; i < n; i++) {
    if (n % i == 0) return false;
  }
  return true;
}

// function expression
let sum = function (a, b) {
  return a + b;
};

// arrow functions

let sum2 = (a, b) => a + b;

let ask = (question, yes, no) => (confirm(question) ? yes() : no());

ask(
  "Do you agree?",
  () => console.log("You agreed"),
  () => console.log("You interrupted execution")
);
