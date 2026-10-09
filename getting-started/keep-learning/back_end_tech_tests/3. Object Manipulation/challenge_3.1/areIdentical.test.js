const areIdentical = require("./areIdentical.js");

describe("Are the Contents of 2 Objects Identical?", () => {
    test("Returns true for empty objects", () => {
        expect(areIdentical({},{})).toBe(true);
    })

    test("Returns false when there is at least 1 difference", () => {
        expect(areIdentical({a: "a"}, {b: "b"})).toBe(false);
        expect(areIdentical({1: 1, 2: 2, 3: 3, 4: 4}, {1: 1, 2: 2, 3: 5, 4: 4})).toBe(false);
    })

    test("Returns false when one object is a subset but not an identical object to the other", () => {
        expect(areIdentical({a: "a", b: "b"}, {a: "a", b: "b", c: "c"})).toBe(false);
        expect(areIdentical({1: 1, 2: 2, 3: 3}, {1: 1, 2: 2})).toBe(false);
    })

    test("Returns true when the objects are identical", () => {
        expect(areIdentical({1: 1, 2: 2, 3: 3}, {1: 1, 2: 2, 3: 3})).toBe(true);
        expect(areIdentical({1: "hello", 2: "goodbye", 3: 4, 4: true}, {1: "hello", 2: "goodbye", 3: 4, 4: true})).toBe(true);
    })

    test("Returns false when nested objects are not identical", () => {
        expect(areIdentical({1: 1, 2: 2, 3: {4: 4, 5: 5}}, {1: 1, 2: 2, 3: {4: 4, 5: 6}})).toBe(false);
        expect(areIdentical({1: 1, 2: 2, 3: {4: 4, 5: {7: 7}}}, {1: 1, 2: 2, 3: {4: 4, 5: {7: 6}}})).toBe(false);
    })

    test("Returns true when nested objects are identical", () => {
        expect(areIdentical({1: 1, 2: 2, 3: {4: 4, 5: 5}}, {1: 1, 2: 2, 3: {4: 4, 5: 5}})).toBe(true);
        expect(areIdentical({1: 1, 2: 2, 3: {4: 4, 5: {7: 7}}}, {1: 1, 2: 2, 3: {4: 4, 5: {7: 7}}})).toBe(true);
    })
})