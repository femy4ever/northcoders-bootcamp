const ageDog = require('../age-dog.js');

/*ageDog
This function will take a single dog object with an age property and a number. You should increment the age property by the provided number and return the aged dog. The original dog object must not be mutated!

Examples:
const dog = { name: 'Otis', age: 1 };

ageDog(dog, 1) // returns { name: 'Otis', age: 2 }

// dog is not mutated and still has the form { name: 'Otis', age: 1 }*/

describe('ageDog', () => {
  it('should increase the age property by the provided number and return the aged dog ', () => {
    //arrange 
    const dog = { name: 'Otis', age: 1 };
    // act
    const agedDog = ageDog(dog, 1)
    // assert
    expect(agedDog).toStrictEqual({ name: 'Otis', age: 2 });
  });
  it('should check that dog is not mutated and still has the form', () => {
    //arrange 
    const dog = { name: 'Otis', age: 1 };
    // act
    ageDog(dog, 1)
    // assert
    expect(dog).toEqual({ name: 'Otis', age: 1 });
  });
});
