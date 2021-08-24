function binarySearch(array, number, start = 0, end = array.length - 1) {
  if (start > end) {
    return false;
  }

  let middle = Math.floor((start + end) / 2);

  if (number > array[middle]) {
    return binarySearch(array, number, middle + 1, end);
  } else if (number < array[middle]) {
    return binarySearch(array, number, start, middle - 1);
  } else {
    return true;
  }
}

console.log(binarySearch([1, 2, 3], 4));

module.exports = binarySearch