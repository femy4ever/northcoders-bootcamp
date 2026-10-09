const tillAddition = require('../till-addition.js');

/* Cash up the cafe till at the end of the day
The challenge is to implement a function which cashes up a till at the end of the day. The function should always return a string.

Examples
The till can contain the following denominations:

1p piece

2p piece

5p piece

10p piece

20p piece

50p piece

£1 coin

£2 coin

£5 note

£10 note

£20 note

£50 note

The till contents should be a javascript object in this format:

const till = {
  "1p": 1,
  "2p": 1,
  "5p": 1,
  "10p": 1,
  "20p": 1,
  "50p": 1,
  "£1": 1,
  "£2": 1,
  "£5": 1,
  "£10": 1,
  "£20": 1,
  "£50": 1
};
You can use these examples to start building up your test suite:

till({ "1p": 1, "2p": 1 });
// should return "£0.03"
till({ "1p": 1, "2p": 1, "5p": 1, "10p": 1, "20p": 1 });
// should return "£0.38"
till({ "5p": 1, "10p": 1, "20p": 1, "50p": 1, "£1": 1 });
// should return "£1.85"
*/
describe('tillAddition', () => {
  it('should return "£0.00", if till is empty', () => {
    expect(tillAddition(0)).toBe("£0.00");
  });
  it('should return the correct amount when given a single coin', () => {
    const sumAmount = tillAddition({ "2p": 1 })
    expect(sumAmount).toBe("£0.02");
  });
  
  it('should return the correct sum amount when given multiple coins', () => {
    const sumAmount = tillAddition({ "1p": 1, "2p": 1 })
    expect(sumAmount).toBe("£0.03");
    const sumAmount1 = tillAddition({ "1p": 1, "2p": 1, "5p": 1, "10p": 1, "20p": 1 })
    expect(sumAmount1).toBe("£0.38");
  })
  it('should return the correct sum amount when coin is above pence', () => {
    const sumAmount = tillAddition({ "5p": 1, "10p": 1, "20p": 1, "50p": 1, "£1": 1 });
    console.log(sumAmount)
    expect(sumAmount).toBe("£1.85");
  })
})