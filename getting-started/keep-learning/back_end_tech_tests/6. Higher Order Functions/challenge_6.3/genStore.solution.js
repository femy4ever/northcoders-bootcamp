const genStore = (generator) => {
    // Create return object and cache to store results
    const obj = {};
    const cache = {};

    obj.do = (...args) => {
        // Convert the args to use as a key in the cache
        const key = args.toString();
        // If the args have never been used, calculate result and store in cache
        if (cache[key] === undefined) {
            const ans = generator(...args);
            cache[key] = ans;
            return ans;
        }
        //Otherwise, find the result in the cache
        return cache[key];
    }

    obj.search = (...args) => {
        // If the value at the key of args doesn't exist return false, otherwise return true
        return cache[args.toString()] !== undefined;
    }

    obj.delete = (...args) => {
        // Convert the args to use as a key in the cache
        const key = args.toString()
        // If the result exists in the cache, delete it and return true
        if (cache[key] !== undefined) {
            delete cache[key];
            return true;
        }
        //Otherwise return false
        return false;
    }

    return obj
}

module.exports = genStore;