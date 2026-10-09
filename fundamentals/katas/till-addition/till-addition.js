// Please do not change the name of this function
function tillAddition (coin) {
  let amount = 0;

  if (coin["1p"]) amount += coin["1p"]
  if (coin["2p"]) amount += coin["2p"] * 2;
  if (coin["5p"]) amount += coin["5p"] * 5;
  if (coin["10p"]) amount += coin["10p"] * 10;
  if (coin["20p"]) amount += coin["20p"] * 20;
  if (coin["50p"]) amount += coin["50p"] * 50;
  if (coin["£1"]) amount += coin["£1"] * 100;
  return "£" + (amount/100).toFixed(2)
  
};

module.exports = tillAddition;
