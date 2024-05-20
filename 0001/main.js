var twoSum = function (nums, target) {
  const numMap = new Map()
  let length = nums.length

  for (let i = 1; i <= length; i++) {
    let value = nums.pop()
    let actual_index = length - i
    const complement = target - value
    if (numMap.has(complement)) {
      return [numMap.get(complement), actual_index]
    }
    numMap.set(value, actual_index)
  }

  return undefined
}
