const fibonacci3 = require("./fibonacci3.js");

describe("Fibonacci 3", () => {
    test("Returns a function", () => {
        expect(typeof(fibonacci3())).toBe("function");
    })

    test("Returns the first Fib3 number of the sequence", () => {
        const fib = fibonacci3(0,0,1);
        expect(fib()).toBe(0);
    })

    test("After 3 invocations returns the correct arg passed", () => {
        const fib = fibonacci3(0,0,1);
        fib();
        fib();
        expect(fib()).toBe(1);
    })

    test("Returns the smallest number first if the args are not in ascending order", () => {
        const fib = fibonacci3(2,0,12);
        expect(fib()).toBe(0);
        expect(fib()).toBe(2);
        expect(fib()).toBe(12);
    })

    test("Returns next sequence of fib3 when invoked", () => {
        const fib = fibonacci3(0,0,1);
        fib();
        fib();
        fib();
        expect(fib()).toBe(1);
        expect(fib()).toBe(2);
        expect(fib()).toBe(4);
        expect(fib()).toBe(7);
    })

    test("Returns correct number after numerous invocations", () => {
        const fib = fibonacci3(1, 2, 3);
        for (let i = 0; i < 49; i++) {
            fib();
        }

        expect(fib()).toBe(8864740270458);
    })
})