function mergeSortedArrays(arrOne, arrTwo) {
  const result = [];

  let i = 0,
    j = 0;

  while (i < arrOne.length || j < arrTwo.length) {
    if (i < arrOne.length && j < arrTwo.length) {
      if (arrOne[i] < arrTwo[j]) {
        result.push(arrOne[i]);
        i++;
      } else {
        result.push(arrTwo[j]);
        j++;
      }
    } else if (i < arrOne.length) {
      result.push(arrOne[i]);
      i++;
    } else {
      result.push(arrTwo[j]);
      j++;
    }
  }

  return result;
}

module.exports = mergeSortedArrays;
