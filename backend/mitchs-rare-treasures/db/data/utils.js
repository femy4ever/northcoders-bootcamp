function objectToArrays(objArr) {
  if (objArr.length === 0) {
    return [];
  }
  const array = objArr.map((obj) => {
    const innerArr = [];
    for (item in obj) {
      innerArr.push(obj[item]);
    }
    return innerArr
  });
  return array;
}

function swapNameForID(treasures, shop_ids) {
  if (!treasures.length) {
    return [];
  }
  else if (!shop_ids) {
    return treasures;
  }
  else {
    const newAlbum = treasures.map((item) => {
      const newObject = {};
      for (i in item) {
        if (i === 'shop' && item.shop in shop_ids) {
          newObject['shop_id'] = shop_ids[item.shop];
        }
        else {
          newObject[i] = item[i];
        }
      }
      return newObject;
    })  
    return newAlbum;
  }
}

module.exports = { objectToArrays, swapNameForID };
