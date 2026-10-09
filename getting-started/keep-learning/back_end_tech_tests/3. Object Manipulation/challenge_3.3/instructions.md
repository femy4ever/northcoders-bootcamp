# 3.3 Object Filter

We have used the Array.prototype.filter() method numerous times throughout the bootcamp. But, there isn't an Object.prototype.filter() method.

Today, we are going to correct that.

## Task:

Create a function objFilter, that takes an object and a predicate and returns only the key-value pairs in a new object that pass the predicate test.

e.g.

const obj = {1: 1, 2: 2, 3: 3, 4: 4}
const divisibleBy2 = objFilter(obj, value => value % 2 === 0) -> {2: 2, 4: 4};
