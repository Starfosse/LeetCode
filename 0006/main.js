var convert = function (s, numRows) {
  if (numRows === 1 || s.length < numRows) return s
  let tab = new Array(numRows).fill("")
  let i = 0
  while (s[i]) {
    let vertical = 0
    let zigzag = numRows - 2
    while (s[i] && vertical < numRows) tab[vertical++] += s[i++]
    while (s[i] && zigzag > 0) tab[zigzag--] += s[i++]
  }
  return tab.join("")
}
