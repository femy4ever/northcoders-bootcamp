function every (predicate) {
    // Return a function that takes in numerous args
    return function (...arg) {
        // Define a function that receives an object/array as an argument
        function loop (ob) {
            // Create a boolean for future returning
            let bool = true;
            // Loop through the obj/arr 
            for (let i in ob) {
                // If there's a nested obj/arr loop through it using recursion
                if (typeof(ob[i]) === "object") {
                    bool = loop(ob[i]);
                    // If bool changes to false, stop search
                    if (!bool) break;
                } else {
                    // If bool is not an obj/arr check if item passes predicate... If not set bool to false
                    if (!predicate(ob[i])) {
                        bool = false;
                        // Stop searching
                        break;
                    }
                }
            }
            // return bool
            return bool;
        }

        // Return the invocation of loop with the given args
        return loop(arg);
    }
}

module.exports = every;
