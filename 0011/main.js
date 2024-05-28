var maxArea = function (height) {
  let maxContainer = 0
  let left = 0
  let right = height.length - 1
  while (left < right) {
    let minHeight = Math.min(height[left], height[right])
    let res = minHeight * (right - left)
    maxContainer = Math.max(maxContainer, res)
    height[left] > height[right] ? right-- : left++
  }
  return maxContainer
}
