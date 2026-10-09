const wordMatcher = require("./wordMatcher.js");

describe("Match the Pattern in the String", () => {
    test("Returns an empty array when there are no matches", () => {
        expect(wordMatcher("", "")).toEqual([]);
        expect(wordMatcher("Hello", "B?l")).toEqual([]);
        expect(wordMatcher("Never gonna work", "")).toEqual([]);
    })

    test("Returns a match when there is an exact match", () => {
        expect(wordMatcher("Hello", "Hello")).toEqual(["Hello"]);
        expect(wordMatcher("Northcoders", "Northcoders is great!")).toEqual(["Northcoders"]);
        expect(wordMatcher("I", "I don't really understand what I am doing")).toEqual(["I", "I"]);
    })

    test("Returns matches for only words and not matches inside a word", () => {
        expect(wordMatcher("a", "this is a little experiment that should only retrieve 1 match")).toEqual(["a"]);
        expect(wordMatcher("one", "Once upon a time a stone appeared kept appearing one second after another one but it was on a phone"))
        .toEqual(["one", "one"]);
    })

    test("Returns matches when punctuation is involved", () => {
        expect(wordMatcher("fly", "I love to fly: flying is the best thing since I learnt to fly.")).toEqual(["fly", "fly"]);
        expect(wordMatcher("sing", "Jigglypuff loves to sing. It's deadliest singing move is sing, but really it is Sing not sing...")).toEqual(["sing", "sing", "sing"]);
    })

    test("Returns matches when wildcards are used", () => {
        expect(wordMatcher("???", "This should match all the 3 letter words in this sentence")).toEqual(["all", "the"]);
        expect(wordMatcher("?a?a?as", "I like to eat bananas, apples, and papayas")).toEqual(["bananas", "papayas"]);
        expect(wordMatcher("??st", "The first question is never the last or best or on a Mast, but the test must never to nest on jest... Always cast fast"))
        .toEqual(["last", "best", "Mast", "test", "must", "nest", "jest", "cast", "fast"]);
    })

    test("Returns matches for random words", () => {
        expect(wordMatcher("??e?", "leet, beat, seet, sethring, 99e9, Seep, blep, flem, M4er")).toEqual(["leet", "seet", "Seep", "blep", "flem"]);
        expect(wordMatcher("t??s", "tea's please, t33s not here tips, nice")).toEqual(["teas", "tips"]);
    })
})