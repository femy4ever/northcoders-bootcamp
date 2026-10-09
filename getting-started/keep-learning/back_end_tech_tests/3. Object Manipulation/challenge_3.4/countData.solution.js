function countData (obj) {
    // Create a new object to hold data
    const dataTypes = {}

    // Loop through the object
    for (let key in obj) {
        // If the current value is an array/object...
        if (typeof(obj[key]) === "object") {
            // Make sure a key value pair for the relevant one exists in dataTypes
            if (Array.isArray(obj[key]) && !dataTypes.array) dataTypes.array = 0;
            else if (!Array.isArray(obj[key]) && !dataTypes.object) dataTypes.object = 0;

            // Increment the value in dataTypes
            Array.isArray(obj[key]) ? dataTypes.array++ : dataTypes.object++;

            // Use recursion and assign the nested info to a new variable
            const nestedData = countData(obj[key])

            // Loop through the nested info and add it into the parent dataTypes object
            for (let key in nestedData) {
                // Add in the key-value pair if needed
                if (!dataTypes[key]) dataTypes[key] = 0;
                // Sum the 2 values together to get the total
                dataTypes[key] += nestedData[key]
            }
        // If it's not an object, just increment the relevant dataTypes key-value pair 
        } else {
            dataTypes[typeof(obj[key])] ? dataTypes[typeof(obj[key])]++ : dataTypes[typeof(obj[key])] = 1
        }
    }

    // Return the object
    return dataTypes;
}

module.exports = countData;