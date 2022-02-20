//sum all numbers till given one
function sumTo(n) {
  if (n == 1) return 1;
  return n + sumTo(n - 1);
}

alert(sumTo(100)); // 5050

// find factorial of number
function factorial(n) {
  return n != 1 ? n * factorial(n - 1) : 1;
}

alert(factorial(5)); // 120

// find fibonacci of number
function fib(n) {
  return n <= 1 ? n : fib(n - 1) + fib(n - 2);
}

alert(fib(3)); // 2
alert(fib(7)); // 13
