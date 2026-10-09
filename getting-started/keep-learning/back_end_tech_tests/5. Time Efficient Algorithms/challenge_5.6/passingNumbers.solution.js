function passingNumbers(upperLimit, num) {
    // Create a regex using a look ahead to search for the num with the global flag, set occurencesOfValue to 0
    const regex = new RegExp(`(?=${num})`, "g");
    let occurencesOfValue = 0;

    // Loop up to upperLimit 
    for (let i = 0; i <= upperLimit; i++) {
        // Search the current i for any and all matches with created regex
        const occurences = i.toString().match(regex);
        // occurences exist, get the length, otherwise set to 0
        const countOccurences = occurences ? occurences.length : 0;
        // Add occurences to occurencesOfValue
        occurencesOfValue += countOccurences;
    }

    return occurencesOfValue;
}

module.exports = passingNumbers;