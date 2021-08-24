function moveZeros(nums) {
  if (!nums || !Array.isArray(nums)) {
    return null;
  }

  if (nums.length < 2) {
    return nums;
  }

  let i = 0;
  let j = 1;


  while (i < nums.length && j < nums.length) {
    if (nums[i] === 0) {
      if (nums[j] !== 0) {
        const temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
        i++;
        j++;
      } else {
        j++;
      }
    } else {
      i++;
      j++;
    }
  }

  return nums;
}

module.exports = moveZeros;