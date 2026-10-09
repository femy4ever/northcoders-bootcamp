const decryptMessage = (message, shift) => {

    // Get the remainder of the desired shift divided by 26, for super large shifts
    shift = shift % 26;

    // Create an inner function to shift the character codes at the ends of the alphabet
    // so they can "loop" back to the other end
    const adjustCharacterCodes = (charcode) => {
        // a is char code 97, shift anything below back up to z subtracting the remaining shift for the letter
        if (charcode < 97) {
            return 123 - (97 - charcode);

        // z is char code 122, shift anything above back down to a adding the remaining shift for the letter
        } else if (charcode > 122) {
            return 97 + (charcode - 123);

        // Keep all other shifted characters the same
        } else {
            return charcode;
        }
    }
    
    // Remove any problematic upper cases
    message = message.toLowerCase();

    // Split the string into an array and then use reduce, 
    const decryptedMessage = message.split("").reduce((str, letter) => {

        // Convert each letter into its decrypted form by getting its
        // character code, subtracting the desired shift and then adjusting any codes that have fallen outside the alpabetical range
        // by using the inner function created above. Keep non-letters the same
        const decryptedCharCode = /[a-z]/i.test(letter) ? adjustCharacterCodes(letter.charCodeAt(0) - shift) : letter.charCodeAt(0);

        // Convert the decryptedCharCode into an alphabetical character and add it onto the string solution
        str += String.fromCharCode(decryptedCharCode);

        // Return the str to update the final result of reduce
        return str;
    }, "")

    // Return the final decryption
    return decryptedMessage;
}

module.exports = decryptMessage;