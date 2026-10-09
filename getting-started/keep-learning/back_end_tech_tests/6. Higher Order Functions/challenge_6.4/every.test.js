const every = require("./every.js")

describe("every", () => {
    test("every returns a function", () => {
        expect(typeof(every())).toBe("function");
    })
    
    test("every receives a predicate and tests each subsequent value against it", () => {
        const mock = jest.fn(() => true);
        const bool = every(mock);
        bool(2);
        bool(3);
        expect(mock).toHaveBeenCalledTimes(2);
    })

    test("is invoked n times for each time for an array or object of length n", () => {
        const mock = jest.fn(() => true);
        const bool = every(mock);
        bool([1,2,3,4]);
        bool({1: 1, 2: 2, 3: 3});
        expect(mock).toHaveBeenCalledTimes(7);
    })

    test("can test multiple mixed types", () => {
        const mock = jest.fn(() => true);
        const bool = every(mock);
        bool(1)
        bool(2);
        bool(3,4);
        bool([1,2,3])
        bool({1:1, 2:2});
        expect(mock).toHaveBeenCalledTimes(9);
    })

    test("returns true when passed a predicate", () => {
        const mock = jest.fn((num) => num % 2 === 0)
        const bool = every(mock);
        expect(bool(2)).toBe(true);
        expect(bool([2,4,6,8])).toBe(true);
    })

    test("Is called the correct number of times for multiple args with arrays and objects", () => {
        const mock = jest.fn(() => true)
        const bool = every(mock);
        bool([1,2,3], {1:1, 2:2, 3:3})
        bool(1)
        expect(mock).toHaveBeenCalledTimes(7);
    })

    test("Works for multiple args of arrays and objects", () => {
        const mock = jest.fn((num) => num % 2 === 0)
        const bool = every(mock);
        expect(bool([2,4,6], {1: 2, 2: 4, 3: 6})).toBe(true)
        expect(bool([2,4,6], {1: 2, 2: 5, 3: 6})).toBe(false);
    })

    test("Called for multiple args of nested arrays and objects", () => {
        const mock = jest.fn(() => true);
        bool = every(mock);
        bool([1,2,[3,4]])
        bool([1,[2]], {1:2, 3:4, 5: {6:[7]}})
        expect(mock).toHaveBeenCalledTimes(9)
    })

    test("Returns correct boolean of multiple args of nested arrays and objects", () => {
        const mock = jest.fn((num) => num % 2 ===0)
        const bool = every(mock);
        expect(bool([1,2,[3,4]])).toBe(false);
        expect(bool([1,[2]], {1:2, 3:4, 5: {6:[7]}})).toBe(false);
        expect(bool([2,[4,[6]]],{1:2, 4: 6, 7:[6,8,4,2]}, 2, 6, 10, {1: [{1: [2, 4, 6]}]})).toBe(true);
    })

    test("Is only called optimal number of times to get correct boolean result", () => {
        const mock = jest.fn((num) => num % 3 === 0);
        const bool = every(mock);
        bool(3,6,9);
        bool([1,2,3],{1:3, 2: 6, 7: 9});
        bool(3, [3,6], 5, {1:2, 2:3});
        expect(mock).toHaveBeenCalledTimes(8);
    })
})