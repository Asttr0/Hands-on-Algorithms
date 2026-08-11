function missingInteger(nums: number[]): number {
  const n = nums.length;
  let counter = nums[0];

  for (let i = 0; i < n; i++) {
    if (nums[i] == nums[i + 1] - 1) {
      counter += nums[i + 1];
    } else break;
  }
  const numSet = new Set(nums);

  while (numSet.has(counter)) {
    counter++;
  }

  return counter;
}

console.log(missingInteger([3, 4, 5, 1, 12, 14, 13]));
