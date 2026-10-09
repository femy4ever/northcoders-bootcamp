const wordMatcher = (matcher, str) => {
    // If either matcher or string are empty, return empty array
    if (matcher === "" || str === "") return [];
    
    // Ensure that the wild card in matcher is replaced with the regex equivalent for letters only, \w will check numbers too!
    matcher = matcher.replace(/\?/g, "[a-zA-Z]");

    // Create a regular expression using the new converted form of matcher that must be the start and end of the pattern
    const matchingPattern = new RegExp(`^${matcher}$`);

    // Remove all punctuation, then seperate into a words array
    const words = str.replace(/[."'!?:;,]/g, "").split(" ")
    
    // Using filter, keep all the entries that pass our regex test
    const matches = words.filter(word => matchingPattern.test(word))

    // Return our matches
    return matches
}

module.exports = wordMatcher;