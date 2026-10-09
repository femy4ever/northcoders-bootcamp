const isWebAddress = require("./isWebAddress.js")

describe("Valid Web Address?", () => {
    test("Returns true if given a simple web address", () => {
        expect(isWebAddress.test("www.google.com")).toBe(true);
        expect(isWebAddress.test("www.bbc.co.uk")).toBe(true);
        expect(isWebAddress.test("www.oxfam.org")).toBe(true);
    })

    test("Returns false if string is not in a url structure", () => {
        expect(isWebAddress.test("abc")).toBe(false);
        expect(isWebAddress.test("hello@northcoders.com")).toBe(false);
    })

    test("Returns true if includes http:// or https:// at the start of the string", () => {
        expect(isWebAddress.test("http://www.google.com")).toBe(true);
        expect(isWebAddress.test("https://www.northcoders.co.uk")).toBe(true);
        expect(isWebAddress.test("http://outlook.com")).toBe(true);
    })
})