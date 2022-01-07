//continue and break
let sum = 0;
while (true) {
  let value = +prompt("Enter a number", "");
  if (!value) break; // loop stops when entered with no input value
  sum += value;
}
aler("Sum: " + sum);

for (let i = 1; i <= 13; i++) {
  if (i % 2 == 0) continue; // skipping every even values
  console.log(i); // 1, then 3, 5, 7, 9, 11, 13
}

//do while loop
let num;
do {
  num = prompt("Enter a number greater than 100?", 0);
} while (num <= 100 && num);

//label for break/continue
// Example : printing only prime numbers
let n = 27;
nextPrime: for (let i = 2; i <= n; i++) {
  // for each i...
  for (let j = 2; j < i; j++) {
    // look for a divisor..
    if (i % j == 0) continue nextPrime; // not a prime, go next i
  }
  console.log(i);
}
