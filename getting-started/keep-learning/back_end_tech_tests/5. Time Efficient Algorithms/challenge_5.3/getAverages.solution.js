function getAverages(arr) {
    //Empty array? return null
    if (arr.length === 0) return null;

    // Create length and sum variables to keep track of needed info
    let length = 0;
    let sum = 0;

    // Loop over the main array
    for (const nums of arr) {
        // Increase the length by each arrays length;
        length += nums.length;
        // Loop over each inner array
        for (const num of nums) {
            // Add each number to the sum variable
            sum += num;
        }
    }

    // Return the average to 2 decimal places
    return +(sum / length).toFixed(2);

}

module.exports = getAverages;