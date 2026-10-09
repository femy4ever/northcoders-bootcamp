const objFilter = require("./objFilter.js");

describe("Object Filter Method", () => {
    test("Returns an object when passed an empty object", () => {
        expect(objFilter({}, () => true)).toEqual({});
    })

    test("Returns the an identical object when predicate is true", () => {
        expect(objFilter({1: 1, 2: 2, 3: 3}, () => true)).toEqual({1: 1, 2: 2, 3: 3});
    })

    test("Returns an empty object when the predicate evaluates to false", () => {
        expect(objFilter({1: 1, 2: 2, 3: 3}, () => false)).toEqual({});
    })

    test("Returns only those key-value pairs that return true with the predicate value", () => {
        expect(objFilter({1: 1, 2: 2, 3: 3}, (num) => num % 2 === 1)).toEqual({1: 1, 3: 3});
    })

    test("Does not mutate the input object during invocation", () => {
        const obj = {1: 1, 2: 2, 3: 3};
        objFilter(obj, (num) => num % 2 === 0);
        expect(obj).toEqual({1: 1, 2: 2, 3: 3});
    })

    test("Creates a new object and returns it when function is invoked", () => {
        const obj = {1: 1, 2: 2, 3: 3};
        expect(objFilter(obj, (num) => num % 2 === 1)).not.toEqual(obj)
    })
})