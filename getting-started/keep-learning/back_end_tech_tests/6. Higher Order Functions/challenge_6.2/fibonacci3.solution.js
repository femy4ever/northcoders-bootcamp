const fibonacci3 = (num1, num2, num3) => {
    // Create an array containing the sorted arguments passed, will be stored in the Cove
    let fibSequence = [num1, num2, num3].sort((a, b) => a - b);
    // Create a counter to remember our position in the array, will be stored in the Cove
    let count = 0;
    return function() {
        // On each invocation, calculate the next member of the sequence, and assign it to the end of the array in Cove
        fibSequence[count + 3] = fibSequence[count] + fibSequence[count + 1] + fibSequence[count + 2];
        // Return the value at our current index, and only then increment the counter ready for the next invocation
        return fibSequence[count++];
    }
}

module.exports = fibonacci3;