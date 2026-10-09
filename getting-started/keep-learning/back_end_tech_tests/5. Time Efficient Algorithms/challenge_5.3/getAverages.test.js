const getAverages = require("./getAverages.js");

describe("Get Averages in an array of arrays", () => {
    test("Returns 0 when passed an empty array", () => {
        expect(getAverages([])).toEqual(null);
    })

    test("Returns an array with the average when passed an array of arrays of length 1", () => {
        expect(getAverages([[1]])).toEqual(1);
        expect(getAverages([[5]])).toEqual(5);
    })

    test("Returns the average for an inner array", () => {
        expect(getAverages([[1,2,3]])).toEqual(2);
        expect(getAverages([[4,6,8]])).toEqual(6);
    })

    test("Returns the averages of inner arrays in an array", () => {
        expect(getAverages([[1,2,3],[4,5,6],[7,8,9]])).toEqual(5);
        expect(getAverages([[9,1,5],[20,30,40], [12,2], [19,20,21,22,23]])).toEqual(17.23);
    })

    test("Returns the averages of inner array in an array of arrays within the time limit - 6 seconds", () => {
        const arr = [];
        for (let i = 0; i < 100000; i++) {
            arr.push(2 * i);
        }
        const arrs1 = new Array(1000).fill(arr);
        const arrs2 = new Array(20000).fill(arr);

        const start = new Date();
        expect(getAverages(arrs1)).toEqual(99999);
        expect(new Date() - start).toBeLessThan(200);
        expect(getAverages(arrs2)).toBe(99999);
        expect(new Date() - start).toBeLessThan(6000);
        
    })
})