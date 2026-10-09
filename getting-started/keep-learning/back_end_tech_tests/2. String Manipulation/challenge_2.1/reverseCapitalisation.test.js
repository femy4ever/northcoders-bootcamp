const reverseCapitalisation = require("./reverseCapitalisation.js");

describe("Reverse the Capitalisation", () => {
    test("Returns an empty string when passed an empty string", () => {
        expect(reverseCapitalisation("")).toBe("");
    })

    test("Returns the opposite capitalisation when passed a single character", () => {
        expect(reverseCapitalisation("a")).toBe("A");
        expect(reverseCapitalisation("K")).toBe("k");
    })

    test("Returns the opposite off all upper or lower case letters in a string", () => {
        expect(reverseCapitalisation("abcdefg")).toBe("ABCDEFG");
        expect(reverseCapitalisation("XYZIODPS")).toBe("xyziodps");
    })

    test("Returns the reverse capitalisation with a mixed string", () => {
        expect(reverseCapitalisation("AbCdEfGhI")).toBe("aBcDeFgHi");
        expect(reverseCapitalisation("Welcome to THe NoRtHCoDERs gRAD Repo")).toBe("wELCOME TO thE nOrThcOderS Grad rEPO");
    })

    test("Returns the reverse capitalisation of a sentence when punctuation is included", () => {
        expect(reverseCapitalisation("hello, This iS THE greatest KATA evER!! :)")).toBe("HELLO, tHIS Is the GREATEST kata EVer!! :)");
        expect(reverseCapitalisation("LinUX is... By FAR, the BETTER OpERAting SyStEm. YEAH ***(!!!)"))
        .toBe("lINux IS... bY far, THE better oPeraTING sYsTeM. yeah ***(!!!)");
        expect(reverseCapitalisation("19 is the first happy prime number, 4 is not, and 42 is the answer to everything --- it is!"))
        .toBe("19 IS THE FIRST HAPPY PRIME NUMBER, 4 IS NOT, AND 42 IS THE ANSWER TO EVERYTHING --- IT IS!")
    })
})