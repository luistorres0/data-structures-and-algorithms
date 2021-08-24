const { performance } = require("perf_hooks");

function haveCommonElementsBruteForce(arrayA, arrayB) {
  const t0 = performance.now();
  for (let i = 0; i < arrayA.length; i++) {
    for (let j = 0; j < arrayB.length; j++) {
      if (arrayA[i] === arrayB[j]) {
        return true;
      }
    }
  }

  const t1 = performance.now();
  console.log("runtime", t1 - t0);
  return false;
}

const numElements = 100000;
const a = new Array(numElements).fill("a");
const b = new Array(numElements).fill("b");
console.log(haveCommonElementsBruteForce(a, b));
