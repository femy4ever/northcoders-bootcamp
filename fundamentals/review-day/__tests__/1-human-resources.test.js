const {
  createPoll,
  makeNameTags,
  removeAgents,
} = require("../sections/1-human-resources.js");

const NCFruitBowl = require("../data/poll-data.js")


// Human Resources 1 - removeAgents
// For each of these challenges, be sure to use an appropriate array-method and demonstrate your understanding of TDD.

// The functions in this section should be pure - so you should also aim to implement test cases to check the functions have no side effects, besides any other functionality.

// Human Resources 1 - removeAgents
// After a survey of your organisation, it has transpired that a few of the respondents have been very open about committing corporate espionage. As a diligent HR professional, please remove each employee whose admitted profession is mole;

// Your function should take an array of people objects, and return a new array of people objects whose profession is not mole.

// const employees = [
//   { name: "Sam", profession: "artist" },
//   { name: "Mitch", profession: "mole" },
// ];

// removeAgents(employees); // returns [{name: 'Sam', profession: 'artist'}];

// Following the Happy Path!

describe("removeAgents", () => {
   test("should return exact array if 'moles' are not present", () => {
      //arrange
      const employees = [
        { name: "Sam", profession: "artist" },
        { name: "Mitch", profession: "media presenter" },
        ];
      // act
      const unchangedEmployees = removeAgents(employees)
      //assert
      expect(unchangedEmployees).toEqual([
        { name: "Sam", profession: "artist" },
        { name: "Mitch", profession: "media presenter" },
        ]);
    });
    
    test("should return a new array of people objects whose profession is not mole", () => {
    //arrange
    const employees = [
        { name: "Sam", profession: "artist" },
        { name: "Mitch", profession: "mole" },
      ];
    // act
    const loyalEmployees = removeAgents(employees)
    //assert
    expect(loyalEmployees).toEqual([
      { name: "Sam", profession: "artist" }
      ]);
  });
  test("should check for no side effect on the original array", () => {
    //arrange
    const employees = [
        { name: "Sam", profession: "artist" },
        { name: "Mitch", profession: "mole" },
      ];
    // act
    const originalArr = [
      { name: "Sam", profession: "artist" },
      { name: "Mitch", profession: "mole" },
    ];
    removeAgents(employees)
    //assert
    expect(employees).toEqual(originalArr);
  });
})


// Human Resources 2 - makeNameTags
// You wouldn't usually be found doing work like this, but Jon is off sick, and the HR Director is having a meeting in a couple of hours to discuss the recent espionage problems. Please make name tags for each of the guests.

// Given an array of guest objects containing title, forename, surname and company keys, your makeNameTags function should return a new array with the text (formatted as <title> <forename> <surname>, <company>) for each name tag.

// const guests = [
//   {
//     title: "Mr",
//     forename: "Sam",
//     surname: "Caine",
//     age: 30,
//     company: "Northcoders",
//   },
//   {
//     title: "Mr",
//     forename: "Kermit",
//     surname: "The Frog",
//     age: 35,
//     company: "Jim Henson Studios",
//   },
// ];

// makeNameTags(guests); // returns ['Mr Sam Caine, Northcoders', 'Mr Kermit The Frog, Jim Henson Studios'];

describe("makeNameTags", () => {
  test("should return empty array if there are no guest", () => {
     //arrange
     const guests = [];
     // act
     const noGuests = makeNameTags([])
     //assert
     expect(noGuests).toEqual([]);
   });
   test("should return a new array with guest formated informations for each name tag", () => {
    //arrange
    const guests = [
        {
          title: "Mr",
          forename: "Sam",
          surname: "Caine",
          age: 30,
          company: "Northcoders",
        },
        {
          title: "Mr",
          forename: "Kermit",
          surname: "The Frog",
          age: 35,
          company: "Jim Henson Studios",
        },
      ];
    // act
    const guestInfo = makeNameTags(guests)
    //assert
    expect(guestInfo).toEqual(['Mr Sam Caine, Northcoders', 'Mr Kermit The Frog, Jim Henson Studios']);
  });
  test("should return undefined in cases of missing guest info", () => {
    //arrange
    const guests = [
        {
          forename: "Sam",
          surname: "Caine",
          age: 30,
          company: "Northcoders",
        },
        {
          title: "Mr",
          forename: "Kermit",
          surname: "The Frog",
          age: 35,
          },
      ];
    // act
    const guestInfo = makeNameTags(guests)
    //assert
    expect(guestInfo).toEqual(['undefined Sam Caine, Northcoders', 'Mr Kermit The Frog, undefined']);
  });
  test("should not mutate the original array", () => {
    const guests = [
      {
        title: "Mr",
        forename: "Sam",
        surname: "Caine",
        age: 30,
        company: "Northcoders",
      },
      {
        title: "Mr",
        forename: "Kermit",
        surname: "The Frog",
        age: 35,
        company: "Jim Henson Studios",
      },
    ];
    const originalArr = [...guests] // making shallow copy
    makeNameTags(guests); 
    expect(guests).toEqual(originalArr);
  });
});

// Human Resources 3 - createPoll
// Usually we'd use SurveyMonkey, but the managers have taken to building polls across the organisation as strings. Given an array of strings, please build a much more useful poll object.

// createPoll(["cake", "biscuit", "biscuit"]); // returns { cake: 1, biscuit: 2 }
// createPoll(["dog", "dog", "dog"]); // returns { dog: 3 }
// Your final test should be using the NCFruitBowl from the data/poll-data.js file. DO NOT COPY AND PASTE THIS INTO YOUR TEST FILE - it's huge! Be sure to export it properly. It should return the following object:

// {
//   apple: 276,
//   pear: 223,
//   banana: 263,
//   orange: 238,
//   'lonesome plum': 1
// }

describe("createPoll", () => {
  test.only("should return empty object if no data given", () => {
     //arrange
     const pollvotes = [];
     // act
     const emptyPoll = createPoll([])
     //assert
     expect(emptyPoll).toEqual({});
   });
   test.only("should cater for similar strings in array", () => {
    //arrange
    const pollVotes = ["dog", "dog", "dog"];
    // act
    const pollCount = { dog: 3 }
    //assert
    expect(createPoll(pollVotes)).toEqual(pollCount);
  });
  test.only("should return correct counts of various strings in poll", () => {
    //arrange
    const pollVotes1 = ["cake", "biscuit", "biscuit"];
    const pollVotes2 = NCFruitBowl //using the NCFruitBowl from the data/poll-data.js file.
    // act
    const pollCount1 = { cake: 1, biscuit: 2 }
    const pollCount2 = {
        apple: 276,
        pear: 223,
        banana: 263,
        orange: 238,
        'lonesome plum': 1
      }
      //assert
    expect(createPoll(pollVotes1)).toEqual(pollCount1)
    expect(createPoll(pollVotes2)).toEqual(pollCount2);
    });
    test.only("should not mutate the original array", () => {
      // arrange
      const pollVotes = NCFruitBowl
      // act
      const originalPoll = [...pollVotes];
      createPoll(pollVotes);
      // assert
      expect(pollVotes).toEqual(originalPoll);
    });
  });