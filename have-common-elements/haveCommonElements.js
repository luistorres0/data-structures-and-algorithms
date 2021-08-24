const { performance } = require("perf_hooks");

function haveCommonElements(arrayA, arrayB) {
  const t0 = performance.now();
  const map = arrayB.reduce((acc, element) => {
    acc[element] = element;
    return acc;
  }, {});

  for(let element of arrayA){
      if(map[element]){
          return true;
      }
  }

  const t1 = performance.now();
  console.log("runtime", t1 - t0);
  return false
}

const numElements = 100000;
const a = new Array(numElements).fill("a");
const b = new Array(numElements).fill("b");
console.log(haveCommonElements(a, b));
