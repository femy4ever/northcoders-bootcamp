const reverseCapitalisation = (str) => {
    // Use the regex method replace to check each alpha-numeric character,
    // Then, use the second argument to receive the letter and apply some arrow function to it,
    // Convert it to lower or upper case depending on whether it passes or fails the ternary, respectively
    return str.replace(/\w/g, (letter) =>  /[A-Z]/.test(letter) ? letter.toLowerCase() : letter.toUpperCase());
}

module.exports = reverseCapitalisation;