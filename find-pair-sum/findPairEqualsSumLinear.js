const { performance } = require("perf_hooks");

function generateArray(size) {
  const array = [];

  for (let i = 0; i < size; i++) {
    array[i] = i + 1;
  }

  return array;
}
const input = { numbers: generateArray(10000000), sum: 0 };

function findPairEqualsSum(input) {
  const t0 = performance.now();
  const { numbers, sum } = input;

  const complements = new Set();

  let found = false;
  for (let i = 0; i < numbers.length; i++) {
    if (complements.has(numbers[i])) {
      found = true;
      break;
    }

    complements.add(sum - numbers[i]);
  }

  const t1 = performance.now();
  console.log("runtime", t1 - t0);
  console.log(numbers, sum);
  return found;
}

const output = findPairEqualsSum(input);
console.log(output);
