function isValid(s: string): boolean {
  const stack = [];
  const bracketPairs = {
    ")": "(",
    "}": "{",
    "]": "[",
  };
  for (let char of s) {
    if (char in bracketPairs) {
      if (
        stack.length === 0 ||
        stack[stack.length - 1] !== bracketPairs[char]
      ) {
        return false;
      }
      stack.pop();
    } else {
      stack.push(char);
    }
  }
  return stack.length === 0;
}
