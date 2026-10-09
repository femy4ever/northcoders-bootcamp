const treatDoggos = require('../treat-doggos.js');

/*This function will take an array of dog objects each with a hasRabies property set to true. It should return a new array of new dog objects. Each dog should have the hasRabies flag flipped to false.

Examples:
const dogs = [{ name: 'Otis', age: 3, hasRabies: true }];

treatDoggos(dogs); // returns [{ name:'Otis', age: 3, hasRabies: false }]

// dogs is not mutated and still has the form [{ name: 'Otis', age: 3, hasRabies: true }]

const dogs = [{ name: 'Otis', age: 3, hasRabies: true }];

const newDogs = treatDoggos(dogs);

// dogs !== newDogs - dogs and newDogs should have different references
*/

describe('treatDoggos', () => {
  it('should return a new array of new dog objects with hasRabies flag flipped to false', () => {
      // arrange
      const dogs = [{ name: 'Otis', age: 3, hasRabies: true }];
      // act
      const newDogs = treatDoggos(dogs);
      //assert
      expect(newDogs).toEqual([{ name:'Otis', age: 3, hasRabies: false }]);
  });

  it('should ensure dogs is not mutated and still has the original form', () => {
    // arrange
    const dogs = [{ name: 'Otis', age: 3, hasRabies: true }];
    // act
    treatDoggos(dogs);
    //assert
    expect(dogs).toEqual([{ name:'Otis', age: 3, hasRabies: true }]);
});

it('should ensure dogs and newDogs should have different references', () => {
  // arrange
  const dogs = [{ name: 'Otis', age: 3, hasRabies: true }];
  // act
  const newDogs = treatDoggos(dogs);
  //assert
  expect(dogs).not.toEqual(newDogs);
});
});
