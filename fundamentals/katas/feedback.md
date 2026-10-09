# Feedback 

In DNA pairs the tests and order of them are brilliant, you should be more specific to the behaviour you are testing in the test descriptions though, instead of `when given "G" ...` it would be better to say `returns correct pair when passed a single letter` and you could add other tests to that same block then. and for the block after. 

Similar for tweet data, your tests are great but you could have better test descriptions, also when you are testing the length or mentions etc, you could just test that property something like 
```js
test('returns object with correct tweet length', () => {
    const result = getTweetData("My awesome tweet")
    expect(result.length).toBe(16)
  })
```
this test then only ever tests the length and if you started to add more stuff to the function wouldn't break 

Good work. If you have any questions about the feedback hit me up on slack.