function preventMutation (obj) {
    // Check if obj is array or object and spread into new array/object accordingly
    const newObj = Array.isArray(obj) ? [...obj] : {...obj};

    // Loop through the array or object, for in works as arrays are technically objects
    for (let key in newObj) {
        // Check that the type of the value in the array/object is of type object
        if (typeof newObj[key] === "object") {
            // As we have an array/object, use recusion to create new array/object with same data 
            // and to continue checking for any other arrays/objects that may exist still
            newObj[key] = preventMutation(newObj[key]);
        }
    }

    // Return the new array/object
    return newObj;
}

module.exports = preventMutation;