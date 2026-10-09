```js
  test('should check for the maxSize property when no argument is passed i.e defaults to undefined', () => {
       const testStackWithNoMaxSize = createStack(undefined)
        expect(testStackWithNoMaxSize.maxSize).toBe(undefined)
    });
```
This should have a default value when no argument is passed, it's also okay to just pass with no arguments rather than with undefined
    
```js
     test('should decrease the quantity when item added', () => {
        const testStack = createStack()
        testStack.push('apple')
        testStack.push('orange')
        testStack.push('banana')
        const removedItem = testStack.pop()
        expect(removedItem).toBe('banana')
        expect(testStack.quantity).toBe(2)
    });
```

This would be really nice if it was split into 2 tests, one for the removed item ans one for the quanitity, with the appropriate test descriptions

Nice testing you can see you have been following a TDD apporoach 