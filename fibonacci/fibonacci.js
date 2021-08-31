function fibonacciRecursive(n) {
  if (n < 2) {
    return n;
  }

  return fibonacciRecursive(n - 2) + fibonacciRecursive(n - 1);
}

function fibonacciIterative(n) {
  if (n < 2) {
    return n;
  }

  let fibonacci = [0, 1];
  for (let i = 2; i <= n; i++) {
    fibonacci.push(fibonacci[i - 2] + fibonacci[i - 1]);
  }

  return fibonacci[n];
}

console.log(fibonacciRecursive(8));
console.log(fibonacciIterative(8));
