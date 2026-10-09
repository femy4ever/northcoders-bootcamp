const passingNumbers = require("./passingNumbers.js");

describe("Passing Number", () => {
    test("Returns 0 when input num less than the value to find", () => {
        expect(passingNumbers(0, 1)).toBe(0);
        expect(passingNumbers(0, 1000)).toBe(0);
        expect(passingNumbers(0, 12)).toBe(0);

        expect(passingNumbers(1, 2)).toBe(0);
        expect(passingNumbers(3, 12)).toBe(0);
        expect(passingNumbers(1000, 1500)).toBe(0);
    })

    test("Returns 1 when num === value", () => {
        expect(passingNumbers(0, 0)).toBe(1);
        expect(passingNumbers(10, 10)).toBe(1);
        expect(passingNumbers(5, 5)).toBe(1);
        expect(passingNumbers(10000, 10000)).toBe(1);
    })

    test("Returns number of occurences up to number when num > value", () => {
        expect(passingNumbers(9, 1)).toBe(1);
        expect(passingNumbers(17, 8)).toBe(1);
        expect(passingNumbers(70, 10)).toBe(1);
    })

    test("Returns number of occurences of value when num is much higher than value (num >> value)", () => {
        expect(passingNumbers(100, 1)).toBe(21);
        expect(passingNumbers(100, 9)).toBe(20);
        expect(passingNumbers(1000, 10)).toBe(21);
        expect(passingNumbers(909, 9)).toBe(191);
    })

    test("Returns number of occurences of value for large nums", () => {
        expect(passingNumbers(1000, 1)).toBe(301);
        expect(passingNumbers(20000, 17)).toBe(1600);
        expect(passingNumbers(93518, 62)).toBe(3765);
        expect(passingNumbers(532887, 109)).toBe(2673);
    })

    test("Returns number of occurences of value when value is 'repeatable'", () => {
        expect(passingNumbers(3011, 111)).toBe(13);
        expect(passingNumbers(106732, 101)).toBe(1317);
        expect(passingNumbers(213796, 737)).toBe(624);
        expect(passingNumbers(644891, 11)).toBe(36399);
    })

    test("Can solve large numbers within a 5 second time limit", () => {
        const start = new Date();
        expect(passingNumbers(100000, 7)).toBe(50000);
        expect(new Date() - start).toBeLessThan(100);
        expect(passingNumbers(250000, 87)).toBe(9500);
        expect(new Date() - start).toBeLessThan(500);
        expect(passingNumbers(1567133, 0)).toBe(876124);
        expect(new Date() - start).toBeLessThan(5000);
    })
})