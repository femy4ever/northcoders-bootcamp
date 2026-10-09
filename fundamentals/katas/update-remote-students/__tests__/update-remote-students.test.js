const updateRemoteStudents = require('../update-remote-students.js');
/*

*/
describe('updateRemoteStudents()', () => {
  test('return "remote", if given an array with a student without location', () => {
    const givenDetails = [{ name: 'Euler', age: 27 }];
    const updatedDetails = updateRemoteStudents(givenDetails);
    expect(updatedDetails).toEqual([{ name: 'Euler', age: 27, location: 'remote' }]);
    updateRemoteStudents([{ name: 'Euler', age: 27 }])
    expect(givenDetails).toEqual([{ name: 'Euler', age: 27 }]); // checking purity
  });

  test('return update for only students without location in an array of multiple students', () => {
    const givenDetails = [
      { name: 'Hypatia', age: 31, location: 'leeds' },
      { name: 'Ramanujan', age: 22 },
      { name: 'Tao', age: 47, location: 'manchester' }
    ];
    const updatedDetails = updateRemoteStudents(givenDetails);
    expect(updatedDetails).toEqual([
      { name: 'Hypatia', age: 31, location: 'leeds' },
      { name: 'Ramanujan', age: 22, location: 'remote' },
      { name: 'Tao', age: 47, location: 'manchester' }
    ]);
    updateRemoteStudents([
        { name: 'Hypatia', age: 31, location: 'leeds' },
        { name: 'Ramanujan', age: 22 },
        { name: 'Tao', age: 47, location: 'manchester' }
      ])
    expect(givenDetails).toEqual([
      { name: 'Hypatia', age: 31, location: 'leeds' },
      { name: 'Ramanujan', age: 22 },
      { name: 'Tao', age: 47, location: 'manchester' }
    ])
  });
});
