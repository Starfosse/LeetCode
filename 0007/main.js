var reverse = function (x) {
  let res = parseInt(x.toString().split("").reverse().join(""))
  if (res > 2147483647 || x === -2147483648) return 0
  return x < 0 ? -res : res
}
