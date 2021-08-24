const { performance } = require("perf_hooks");

function generateArray(size){
    const array = [];

    for(let i = 0; i < size; i++){
        array[i] = i + 1;
    }

    return array
}
const input = { numbers: generateArray(100000), sum: 0 };

function findPairEqualsSum(input) {
  const t0 = performance.now();
  const { numbers, sum } = input;

  let result = false;

  for (let i = 0; i < numbers.length - 1; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[i] + numbers[j] === sum) {
        result = true;
        break;
      }
    }
  }

  const t1 = performance.now();
  console.log("runtime", t1 - t0);
  console.log(numbers, sum);
  return result;
}

const output = findPairEqualsSum(input);
console.log(output);
