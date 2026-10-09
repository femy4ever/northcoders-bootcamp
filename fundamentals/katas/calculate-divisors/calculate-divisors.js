// Please do not change the name of this function
function calculateDivisors(num) {
  let sum = 0;
  for (let i = 1; i < num; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
    }
  }
  return sum;
}

module.exports = calculateDivisors;