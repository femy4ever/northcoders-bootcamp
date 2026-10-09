function objFilter (obj, predicate) {
    // Create a new object
    const newObj = {};
    // Loop through the contents of the input object
    for (let key in obj) {
        // If the predicate returns true, add in the key-value pair into newObj;
        if (predicate(obj[key])) {
            newObj[key] = obj[key];
        }
    }

    // Return filtered object
    return newObj;
}

module.exports = objFilter;