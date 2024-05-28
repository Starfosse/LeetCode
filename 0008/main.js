var myAtoi = function (s) {
  s = s.trimStart(s)
  let i = 0
  let sign
  if (s[i] === "-") {
    sign = false
    i++
  } else if (s[i] === "+") {
    i++
    sign = true
  }
  if (!s[i] || isNaN(s[i]) || s[i] === " ") return 0
  const res = parseInt(s.substring(i))
  if (isNaN(res)) return 0
  if (res >= 2147483648 && sign === false) return -2147483648
  else if (res > 2147483647) return 2147483647
  return sign === false ? -res : res
}
