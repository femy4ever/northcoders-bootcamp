const decryptMessage = require("./decryptMessage.js");

describe("Decrypt the Message", () => {
    test("Returns the same string when the message is not encrypted", () => {
        expect(decryptMessage("", 0)).toBe("");
        expect(decryptMessage("hello", 0)).toBe("hello");
        expect(decryptMessage("northcoders is the best", 0)).toBe("northcoders is the best");
    })

    test("Returns the decrypted message when the shift is positive", () => {
        expect(decryptMessage("dpejoh", 1)).toBe("coding");
        expect(decryptMessage("rdxyjwntzx", 5)).toBe("mysterious");
    })

    test("Returns the decrypted message when the shift is negative", () => {
        expect(decryptMessage("q", -10)).toBe("a");
        expect(decryptMessage("qjgbc", -2)).toBe("slide");
        expect(decryptMessage("fqkb sefbuo yi q dehjxsetuhi jkjeh", -10)).toBe("paul copley is a northcoders tutor");
    })

    test("Returns the decrypted message if there is capitalisation - result should be lowercase", () => {
        expect(decryptMessage("XKYARZ JUKY TUZ TKKJ ZU HK OT AVVKXIGYK", 6)).toBe("result does not need to be in uppercase");
        expect(decryptMessage("SCRiX GfJk", -9)).toBe("blarg post");
        expect(decryptMessage("qnuux vh onuuxf wxacqlxmnab", -17)).toBe("hello my fellow northcoders");
    })

    test("Leaves punctuation alone", () => {
        expect(decryptMessage("fgeTArv vjKU OGuucig!", -24)).toBe("decrypt this message!");
        expect(decryptMessage("Yze rzyyl wtp... estd NZFWO mp l gpcj, gpcj, gpcj otqqtnfwe epde :)", 11))
        .toBe("not gonna lie... this could be a very, very, very difficult test :)");
    })

    test("Works for crazy shifts - courtesy of Paul Copley", () => {
        expect(decryptMessage("mabl bl t oxkr vktsr mxlm...", 253)).toBe("this is a very crazy test...");
        expect(decryptMessage("jul ner jr qbvat guvf?", -1027)).toBe("why are we doing this?");
        expect(decryptMessage("ftue ue bmgx oabxqk... nai paiz nqradq ftq yustfk zo fgfad.", 1000000000)).toBe("this is paul copley... bow down before the mighty nc tutor.");
    })
})