var isPalindrome = function (x) {
  if (x < 0) return false
  const string = x.toString()
  for (let i = 0; i < string.length / 2; i++) {
    if (string[i] !== string[string.length - i - 1]) return false
  }
  return true
}
