function letterCombinations(digits: string): string[] {
  const digitMap: { [key: string]: string[] } = {
    "2": ["a", "b", "c"],
    "3": ["d", "e", "f"],
    "4": ["g", "h", "i"],
    "5": ["j", "k", "l"],
    "6": ["m", "n", "o"],
    "7": ["p", "q", "r", "s"],
    "8": ["t", "u", "v"],
    "9": ["w", "x", "y", "z"],
  };
  if (digits.length === 0) return [];
  function generateCombinations(index: number, currentCombi: string): string[] {
    if (index === digits.length) {
      return [currentCombi];
    }
    const currentDigit = digits[index];
    const letters = digitMap[currentDigit];
    let combinations: string[] = [];
    for (const letter of letters) {
      const subCombinations = generateCombinations(
        index + 1,
        currentCombi + letter
      );
      combinations.push(...subCombinations);
    }
    return combinations;
  }
  return generateCombinations(0, "");
}
