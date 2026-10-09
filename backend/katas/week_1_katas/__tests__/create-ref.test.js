const createRef = require('../create-ref.js');

describe('createRef', () => {
  it("should convert an array of people into a reference object that can be used to look up a person's phone number from their name", () => {
    // arrange
    const people = [
      { name: 'vel', phoneNumber: '01134445566', address: 'Northcoders, Leeds' },
      {
        name: 'ant',
        phoneNumber: '01612223344',
        address: 'Northcoders, Manchester'
      },
      { name: 'mitch', phoneNumber: '07777777777', address: null }
    ];
    // act
    const refPeople = createRef(people);
    //assert
    expect(refPeople).toEqual([{ vel:'01134445566', ant:'01612223344', mitch:'07777777777'}]);
  });
});
