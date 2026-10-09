const once = (generator) => {
    // Initialise a boolean to control invocations
    let notUsed = true;
    return function(...args) {
        // If notUsed then set to false and execute function with args, otherwise return undefined
        if (notUsed) {
            notUsed = false;
            return generator(...args);
        }
    }
}

module.exports = once;