const getTweetData = require('../get-tweet-data.js');

/*Get certain data from a tweet
The challenge is to implement a function which returns an object containing data from a given tweet.

We want easy access to the following data:

The length of the tweet.
The amount of hash tags ( #awesomeNorthcoders ) in the tweet as well as an array of them.
The amount of mentions ( @northcoders ) in the tweet as well as an array of them.
We only want to return unique hash tags and handles mentioned.
Examples
You can use these examples to start building up your test suite.

getTweetData("My awesome tweet");
// should return { tags: [], mentions: [], tagCount: 0, mentionCount: 0, length: 16 }
getTweetData("My awesome tweet to @northcoders");
// should return { tags: [], mentions: ['@northcoders'], tagCount: 0, mentionCount: 1, length: 32 }
getTweetData("My awesome tweet about #coding");
// should return { tags: ['#coding'], mentions: [], tagCount: 1, mentionCount: 0, length: 30 }
getTweetData("My awesome tweet about #coding to @northcoders");
// should return { tags: ['#coding'], mentions: ['@northcoders'], tagCount: 1, mentionCount: 1, length: 46 }
getTweetData("I am #coding with @northcoders I love #coding and @northcoders");
// should return { tags: ['#coding'], mentions: ['@northcoders'], tagCount: 1, mentionCount: 1, length: 62 }*/

describe('getTweetData()', () => {
  test('should returns object with the exact tweet length', () => {
    const result = getTweetData("My awesome tweet")
    expect(result).toEqual({ tags: [], mentions: [], tagCount: 0, mentionCount: 0, length: 16 })
  })
  test('should returns object with the correct tweet length and unique data accounted', () => {
    const result = getTweetData("My awesome tweet to @northcoders");
    expect(result).toEqual({ tags: [], mentions: ['@northcoders'], tagCount: 0, mentionCount: 1, length: 32 });
    const result1 = getTweetData("My awesome tweet about #coding");
    expect(result1).toEqual({ tags: ['#coding'], mentions: [], tagCount: 1, mentionCount: 0, length: 30 });
    const result2 = getTweetData("My awesome tweet about #coding to @northcoders");
    expect(result2).toEqual({ tags: ['#coding'], mentions: ['@northcoders'], tagCount: 1, mentionCount: 1, length: 46 });
    const result3 = getTweetData("I am #coding with @northcoders I love #coding and @northcoders");
    expect(result3).toEqual({ tags: ['#coding'], mentions: ['@northcoders'], tagCount: 1, mentionCount: 1, length: 62 });

  });
})