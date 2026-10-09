const once = require("./once.js");

describe("Once Upon a Time", () => {
    test("Returns a function when once is invoked", () => {
        const print3 = () => 3;
        expect(typeof(once(print3))).toBe("function");
    })

    test("Returns the value of the first invocation of the inputted function", () => {
        const print3 = () => 3;
        const printOnce = once(print3);
        expect(printOnce()).toBe(3);
    })

    test("Returns undefined for any additional invocations of inputted function", () => {
        const print3 = () => 3;
        const printOnce = once(print3);
        expect(printOnce()).toBe(3);
        expect(printOnce()).toBe(undefined);
    })

    test("Inputted function is only invoked once regardless of how many invocations are made", () => {
        const mock = jest.fn();
        const test = once(mock);
        test();
        expect(mock).toHaveBeenCalledTimes(1);
        test();
        test();
        test();
        expect(mock).toHaveBeenCalledTimes(1);
    })

    test("Inputted function can accept multiple number of argument to maintain functionality", () => {
        const gen1 = () => 20;
        const gen2 = (a, b, c) => a + b + c;
        const gen3 = (...args) => args.reduce((sum, num) => sum + num, 0);

        const once1 = once(gen1);
        const once2 = once(gen2);
        const once3 = once(gen3);

        expect(once1()).toBe(20);
        expect(once2(1, 2, 4)).toBe(7);
        expect(once3(1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10,1,1,1,1,1,1)).toBe(116);
    })
})