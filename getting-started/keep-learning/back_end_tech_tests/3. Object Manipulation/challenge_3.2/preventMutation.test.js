const preventMutation = require("./preventMutation.js");

const checkMutation = (intialObj, finalObj) => {
    expect(finalObj).toEqual(intialObj);
    expect(finalObj).not.toBe(intialObj);

    for (let key in intialObj) {
        if (typeof intialObj[key] === "object") {
            const newObj = intialObj[key];
            expect(finalObj[key]).not.toBe(newObj);
            expect(finalObj[key]).toEqual(newObj);
            checkMutation(newObj, finalObj[key]);
        }
    }
}

describe("Prevent Mutation", () => {
    test("Creates a new array/object from a non-nested array/object", () => {
        const obj = {1: 1, 2: 2, 3: 3};
        const arr = [1, 2, 3];
        const newObj = preventMutation(obj);
        const newArr = preventMutation(arr);
        
        expect(obj).toEqual({1:1, 2:2, 3:3});
        expect(arr).toEqual([1, 2, 3]);
        checkMutation(obj, newObj);
        checkMutation(arr, newArr);
    })
    
    test("Creates new arrays/objects from a 2-level nested arrays/objects", () => {
        const obj = {1: 1, 2: {3: 3, 4: 4}, 5: {a: "a", b: "b", c: "c"}};
        const arr = [1, 2 , [3, 4], [5, 6, 7]];
        const newObj = preventMutation(obj);
        const newArr = preventMutation(arr);
        
        expect(obj).toEqual({1: 1, 2: {3: 3, 4: 4}, 5: {a: "a", b: "b", c: "c"}});
        expect(arr).toEqual([1, 2 , [3, 4], [5, 6, 7]]);
        checkMutation(obj, newObj);
        checkMutation(arr, newArr);
    })

    test("Creates new arrays/objects from an n-level nested arrays/objects", () => {
        const obj = {1:1, a: "a", b: {c: "c", d: "d"}, 2: {3: 3, 4: {5: 5, 6: {7: 7, 8: {9: 9, 10: 10}}}}};
        const arr = [1, 2, [3, [4, 5, [6, 7, [8]], [1, 2, 3, 4, [5, [6, [7, [[[[[10]]]],9],10],11]]]]]];
        const newObj = preventMutation(obj);
        const newArr = preventMutation(arr);

        expect(obj).toEqual({1:1, a: "a", b: {c: "c", d: "d"}, 2: {3: 3, 4: {5: 5, 6: {7: 7, 8: {9: 9, 10: 10}}}}});
        expect(arr).toEqual([1, 2, [3, [4, 5, [6, 7, [8]], [1, 2, 3, 4, [5, [6, [7, [[[[[10]]]],9],10],11]]]]]]);
        checkMutation(obj, newObj);
        checkMutation(arr, newArr);
    })

    test("Does not mutate a mixture of nested arrays and objects", () => {
        const arrayObjects = [{1:1}, [[1,3],2,2], {4:[1,2,1, {7:1, 1:4, 9:{12:1}, 5:[6,1,3,1]}], 10: 1},[1,1,{1:1}], [[[[[[[[[7]]]]]]]]]];
        const objectArrays = {1:[1,2,3], 2: {1: 1, 2:[{1:1, 2:[1,2], 3:3},5,6], 7:1}, 3: {1:{1:{1:{1:{1:{1:{1:["hi"]}, "hi": "hi"}}, 2:[12,3]}}}}, tutor: "Edd is the best tutor!"};
        const newArrayObjects = preventMutation(arrayObjects);
        const newObjectArrays = preventMutation(objectArrays);

        expect(arrayObjects).toEqual([{1:1}, [[1,3],2,2], {4:[1,2,1, {7:1, 1:4, 9:{12:1}, 5:[6,1,3,1]}], 10: 1},[1,1,{1:1}], [[[[[[[[[7]]]]]]]]]]);
        expect(objectArrays).toEqual({1:[1,2,3], 2: {1: 1, 2:[{1:1, 2:[1,2], 3:3},5,6], 7:1}, 3: {1:{1:{1:{1:{1:{1:{1:["hi"]}, "hi": "hi"}}, 2:[12,3]}}}}, tutor: "Edd is the best tutor!"});
        checkMutation(arrayObjects, newArrayObjects);
        checkMutation(objectArrays, newObjectArrays);
    })
})