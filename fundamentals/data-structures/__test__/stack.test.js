const createStack = require("../data-structures/stack");
describe('Stack', () => {
    test('should return an object', () => {
        const testStack = createStack()
        expect(typeof testStack).toEqual("object")
    });
    test('should initialize with a quantity 0', () => {
        const testStack = createStack()
        testStack.quantity = 0;
        expect(testStack.quantity).toBe(0)
    });
    test('should initialize with a quantity 0 for an empty storage object', () => {
        const testStack = createStack()
        testStack.storage = {};
        expect(testStack.storage).toEqual({})
    });
    test('should check for the maxSize property when no argument is passed i.e defaults to undefined', () => {
       const testStackWithNoMaxSize = createStack(undefined)
        expect(testStackWithNoMaxSize.maxSize).toBe(undefined)
    });
    test('should check for the maxSize propery when an argument is passed', () => {
        const testStackWithMaxSize = createStack(5)
         expect(testStackWithMaxSize.maxSize).toBe(5)
     });
    test('should increase the quantity when item added', () => {
        const testStack = createStack()
        testStack.push('apple')
        testStack.push('orange')
        expect(testStack.quantity).toBe(2)
    });
    test('should add items with numbered keys when items added', () => {
        const testStack = createStack()
        testStack.push('apple')
        testStack.push('orange')
        expect(testStack.storage).toEqual({1: 'apple', 2: 'orange'})
    });
    test('should decrease the quantity when item added', () => {
        const testStack = createStack()
        testStack.push('apple')
        testStack.push('orange')
        testStack.push('banana')
        const removedItem = testStack.pop()
        expect(removedItem).toBe('banana')
        expect(testStack.quantity).toBe(2)
    });
    test('should return the item when removing items from the stack storage', () => {
        const testStack = createStack()
        testStack.push('apple')
        testStack.push('orange')
        testStack.push('banana')
        testStack.pop()
        expect(testStack.storage).toEqual({1: 'apple', 2: 'orange'})
    });
});