const genStore = require("./genStore.js");

describe("Generate and Store", () => {
    test("Returns an object on invocation", () => {
        expect(typeof(genStore())).toBe("object");
    })

    test("Returns an object with a do, search and delete functions inside", () => {
        const createGen = genStore();

        expect(createGen).toEqual({
            do: expect.any(Function),
            search: expect.any(Function),
            delete: expect.any(Function)
        })
    })

    test("When do is invoked, returns the desired output", () => {
        const gen = genStore(() => "Hello Northcoders!");

        expect(gen.do()).toBe("Hello Northcoders!");
    })

    test("When do is invoked with arguments, returns desired output", () => {
        const gen1 = genStore((word1, word2) => word1 + " " + word2);
        const gen2 = genStore((a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p) => a - b - c- d - e - f - g - h - i - j - k - l - m - n - o - p);

        expect(gen1.do("Hello", "Northcoders!")).toBe("Hello Northcoders!");
        expect(gen2.do(100,1,2,3,4,5,6,7,8,9,1,2,3,4,5,6)).toBe(34);
    })

    test("When do is invoked with the same arguments, the gen function is only invoked once", () => {
        const mock = jest.fn((num1, num2) => num1 + num2);

        const gen = genStore(mock);

        expect(gen.do(1,1)).toBe(2);
        expect(gen.do(1,1)).toBe(2);
        expect(gen.do(1,1)).toBe(2);

        expect(mock).toHaveBeenCalledTimes(1);
    })

    test("Search returns a true if the function has been invoked with the previous args", () => {
        const gen = genStore(word => word + "!");

        expect(gen.search("Hello")).toBe(false);
        gen.do("Hello");
        expect(gen.search("Hello")).toBe(true);
    })

    test("Delete returns a boolean if the value was successfully deleted from the cache", () => {
        const gen = genStore((a, b) => a * b);

        expect(gen.delete(1,2)).toBe(false);
        gen.do(1,2);
        expect(gen.delete(1,2)).toBe(true);
        expect(gen.search(1,2)).toBe(false);
    })
})