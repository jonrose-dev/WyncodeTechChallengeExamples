const { isAnagram, firstNonDuplicate, balancedParenthesis } = require('./index');

describe('isAnagram', () => {
  it('returns false for an empty array', () => {
    expect(isAnagram([])).toBe(false);
  });

  it('returns true for when a single palindrome is sent', () => {
    expect(isAnagram(['abc', 'cba'])).toBe(true);
  });

  it('returns true for when a single palindrome is sent', () => {
    expect(isAnagram(['aBc', 'Cba'])).toBe(true);
  });

})


describe('firstNonDuplicate', () => {

  it('returns "a" for "a"', () => {
    expect(firstNonDuplicate('a')).toBe('a');
  });

  it('returns "a" for "a"', () => {
    expect(firstNonDuplicate('bab')).toBe('a');
  });

  it('returns "T" for "MooTime"', () => {
    expect(firstNonDuplicate('MooTime')).toBe('T');
  });

  it('returns null when no string is sent', () => {
    expect(firstNonDuplicate()).toBe(null);
  });

});

describe('balancedParenthesis', () => {

  it('returns true for an empty string', () => {
    expect(balancedParenthesis('')).toBe(true);
  });

  it('returns true for "(){}"', () => {
    expect(balancedParenthesis('(){}')).toBe(true);
  });

  it('returns true for "[{()()}({[]})]({}[({})])((((((()[])){}))[]{{{({({({{{{{{}}}}}})})})}}}))[][][]"', () => {
    expect(balancedParenthesis('[{()()}({[]})]({}[({})])((((((()[])){}))[]{{{({({({{{{{{}}}}}})})})}}}))[][][]')).toBe(true);
  });

  it('returns false for "({[([)]})"', () => {
    expect(balancedParenthesis('({[([)]})')).toBe(false);
  });

});
