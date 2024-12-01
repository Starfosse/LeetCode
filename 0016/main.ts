function threeSumClosest(nums: number[], target: number): number {
  nums.sort((a, b) => a - b);
  let res: number = nums[0] + nums[1] + nums[2];
  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    let left = i + 1;
    let right = nums.length - 1;
    while (left < right) {
      const currentSum = nums[i] + nums[left] + nums[right];
      if (Math.abs(currentSum - target) < Math.abs(res - target)) {
        res = currentSum;
      }
      if (currentSum < target) {
        left++;
        while (left < right && nums[left] === nums[left - 1]) left++;
      } else if (currentSum > target) {
        right--;
        while (left < right && nums[right] === nums[right + 1]) right--;
      } else {
        return currentSum;
      }
    }
  }
  return res;
}
