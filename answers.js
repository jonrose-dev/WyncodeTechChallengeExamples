const isAnagram = (anagram) => {
  if (!anagram.length) {
    return false;
  }
  const [first, second] = anagram;
  const firstSorted = first.toLowerCase().split('').sort((a, b) => a > b ? 1 : -1).join('');
  const secondSorted = second.toLowerCase().split('').sort((a, b) => a > b ? 1 : -1).join('');
  return firstSorted === secondSorted;
}


const firstNonDuplicate = (word) => {
  if (!word) return null;
  if (word.length === 1) return word;
  const lowerCasedArray = word.toLowerCase().split('');
  for (let index = 0; index < word.length; index++) {
    const letter = word[index];
    const lowerCasedLetter = letter.toLowerCase();
    if (lowerCasedArray.indexOf(lowerCasedLetter) === lowerCasedArray.lastIndexOf(lowerCasedLetter)) {
      return letter;
    }
  }
  return null;
}

const balancedParenthesis = (parens) => {
  if (!parens) return true;
  const parenMap = {
    '{': '}',
    '(': ')',
    '[': ']',
  }
  const isOpeningParen = (paren) => Object.keys(parenMap).includes(paren);

  const openParenStack = [];
  const parensArray = parens.split('');
  for (let index = 0; index < parensArray.length; index++) {
    const paren = parensArray[index];
    if (isOpeningParen(paren)) {
      openParenStack.push(paren)
    } else {
      const lastOpeningParen = openParenStack.pop();
      if (parenMap[lastOpeningParen] !== paren) {
        return false;
      }
    }
  }
  return !openParenStack.length;
}

module.exports = {
  isAnagram,
  firstNonDuplicate,
  balancedParenthesis,
}