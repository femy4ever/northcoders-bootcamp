function decodeBinary(binaryString) {
    // Create and instantiate variables sentence, value and letter
    let sentence = "";
    let value = 0;
    let letter;

    // Loop through the binary string
    for (let i = 0; i < binaryString.length; i++) {
        // For each position the 1's or 0's take, add the base 10 value to value
        value += binaryString[i] * Math.pow(2, 4 - (i % 5));
        
        // When the next iteration of the loop is divisible by 5, do the following...
        if ((i + 1) % 5 === 0) {
            // If the value is 27 set the next letter to a blank space, otherwise, using fromCharCode and value get the utf-8
            // character (we need to add 96 as the "a" corresponds to 97)
            value === 27 ? letter = " " : letter = String.fromCharCode(96 + value);
            // Add the letter to the sentence
            sentence += letter;
            // Reset the  value and letter components
            value = 0;
            letter = ""
        }
    }

    // Return the decoded sentence
    return sentence;
}

module.exports = decodeBinary;