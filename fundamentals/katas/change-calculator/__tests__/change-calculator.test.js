const changeCalculator = require('../change-calculator.js')

/*
Change Calculator
The challenge is to implement a function that calculates the coins you would use to give a customer their change in a shop. The function takes one argument, which is the amount of change needed, in pence. The function should always return an object.

Examples
You can use these examples to start building up your test suite.

changeCalculator(1);
// should return {'1':1}
changeCalculator(2);
// should return {'2':1}
changeCalculator(7);
// should return {'5':1,'2':1}
changeCalculator(13);
// should return {'10':1,'2':1,'1':1}
*/

describe('changeCalculator', () => {
  it.only('should return nothing, if no change is required', () => {
    expect(changeCalculator(0)).toEqual({});
  });
 
  it.only('should return the correct equavalent coin(s) as change, if given 5', () => {
    const change = changeCalculator(1);
    const change1 = changeCalculator(2);
    const change2 = changeCalculator(7);
    const change3 = changeCalculator(13);
    expect(change).toEqual ({'1':1})
    expect(change1).toEqual ({'2':1})
    expect(change2).toEqual({'5':1,'2':1})
    expect(change3).toEqual ({'10':1,'2':1,'1':1})
  });
});
