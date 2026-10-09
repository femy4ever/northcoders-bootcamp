// Please do not change the name of this function
function changeCalculator (num) {
  if (num === 0)
  return {}

  const sum = {}
  const coins = [10, 5, 2, 1];

  for (let coin of coins) {
    if(num >= coin) {
      sum[coin] = Math.floor(num/coin)
      num = num%coin
    }
  } 
  return sum
};

module.exports = changeCalculator;


