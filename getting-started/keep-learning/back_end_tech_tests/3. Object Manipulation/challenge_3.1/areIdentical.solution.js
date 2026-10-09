function areIdentical(obj1, obj2) {
    // Check the length of the surface of the object and make sure we have smallest object as obj1
    if (Object.keys(obj1).length < Object.keys(obj2).length) {
        const tempObj = obj1;
        obj1 = obj2;
        obj2 = tempObj;
    }

    // Loop through the smaller object
    for(let key in obj1) {
        // If both values in the objects for the same key are objects continue here
        if(typeof(obj1[key]) === "object" && typeof(obj2[key] === "object")) {
            // As both obj1[key] and obj2[key] are objects, use recursion to check inside objects
            // we place this inside an if statement as we want to continue checking all other entries if
            // the return value of this expression is true
            if (!areIdentical(obj1[key], obj2[key])){
                // If they don't match, return false
                return false
            }
        // Check if the values at the same keys are the same
        } else if (obj1[key] !== obj2[key]) {
            return false
        }
    }
    
    // As no falses have been hit, we want to return true to finish
    return true;
}

module.exports = areIdentical;