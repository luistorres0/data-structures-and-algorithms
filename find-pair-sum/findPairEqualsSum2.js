const { performance } = require("perf_hooks");
const binarySearch = require("../binary-search/binarySearch");

function generateArray(size){
    const array = [];

    for(let i = 0; i < size; i++){
        array[i] = i + 1;
    }

    return array
}
const input = { numbers: generateArray(10000000), sum: 0 };

function findPairEqualsSum2(input) {
  const t0 = performance.now();
  const { numbers, sum } = input;

  let result = false;

  for (let i = 0; i < numbers.length - 1; i++) {
    const complement = sum - numbers[i];
    if (binarySearch(numbers, complement, i + 1)) {
      result = true;
      break;
    }
  }

  const t1 = performance.now();
  console.log("runtime", t1 - t0);
  console.log(numbers, sum);
  return result;
}

const output = findPairEqualsSum2(input);
console.log(output);
