function sym(...args) {
        // Define a new Set and an array of sets
        const valueSet = new Set(args[0]);
        const sets = [];
    
        // Loop through all the arguments, except the first, and create a Set 
        // (a Set is an object that only contains one unique value for each value passed in) 
        // from each argument passed in
        for (let i = 1; i < args.length; i++) {
            sets[sets.length] = new Set(args[i]);
        }
    
        // Loop through the rest of the sets in sets array
        for (const set of sets) {
            // Loop through each number in each set
            for (const num of set) {
                // If our first set contains num, delete it from the first set, otherwise add it into our first set
                if (valueSet.has(num)) {
                    valueSet.delete(num);
                } else {
                    valueSet.add(num);
                }
            }
        }
    
        // Return our sets as a true array via destructuring and sort the result in ascending order
        return [...valueSet].sort((a, b) => a - b);
}

module.exports = sym;