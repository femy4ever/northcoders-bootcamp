const calculateDivisors = require('../calculate-divisors.js');

/*
Add FizzBuzz multiples below a certain number
The challenge is to implement a function which adds all the multiples of three and five below a certain number

Examples
If we list all the numbers below 12 that are multiples of 3 or 5, we get 3, 5, 6, 9 and 10. The sum of these multiples is 33.

Here are some examples below.

calculateDivisors(1);
// should return 0
calculateDivisors(5);
// should return 3
calculateDivisors(6);
// should return 8
calculateDivisors(10);
// should return 23
calculateDivisors(12);
// should return 33
*/

describe('calculateDivisors', () => {
  it('should return 0, if given 1', () => {
    expect(calculateDivisors(1)).toBe(0);
  });
 
  it('should return 3, if given 5', () => {
    expect(calculateDivisors(5)).toBe(3);
  });

  it('should return 8, if given 6', () => {
    expect(calculateDivisors(6)).toBe(8);
  });

  it('should return 23, if given 10', () => {
    expect(calculateDivisors(10)).toBe(23);
  });

  it('should return 33, if given 12', () => {
    expect(calculateDivisors(12)).toBe(33);
  });
});
