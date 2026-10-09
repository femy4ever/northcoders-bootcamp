const dnaPairs = require('../dna-pairs.js');

/*Create a function that takes a string of DNA and matches each base with its pair, returning a nested array. In DNA, C pairs with G and T pairs with A.

Examples
Here are some examples below.

dnaPair("G");
// should return [ ["G", "C"] ]
dnaPair("AG");
// should return [ ["A", "T"], ["G", "C"] ]
dnaPair("ATAG");
// should return [ ["A", "T"], ["T", "A"], ["A", "T"], ["G", "C"] ]
*/

describe('dnaPair()', () => {
  test('return empty string, if given emptry string', () => {
    // add your test assertion(s) here
    const result = dnaPairs("")
    expect(result).toEqual([])
  });

  test('returns correct pair when passed a single letter', () => {
    // add your test assertion(s) here
    const result = dnaPairs("G")
    expect(result).toEqual([["G", "C"]])
  });

  test('returns correct pair when passed a multiple letters letter', () => {
    // add your test assertion(s) here
    
    const result1 = dnaPairs("AG")
    const result2 = dnaPairs("ATAG")

    expect(result1).toEqual([["A", "T"], ["G", "C"]])
    expect(result2).toEqual([["A", "T"], ["T", "A"], ["A", "T"], ["G", "C"]])
  });
});