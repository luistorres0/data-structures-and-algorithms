function findFactorialRecursive(number) {
  if (number === 2) {
    return 2;
  }

  return number * findFactorialRecursive(number - 1);
}

function findFactorialIterative(number) {
  let result = 1;

  for (let i = 2; i <= number; i++) {
    result *= i;
  }

  return result;
}

console.log(findFactorialRecursive(5));
console.log(findFactorialIterative(5));
