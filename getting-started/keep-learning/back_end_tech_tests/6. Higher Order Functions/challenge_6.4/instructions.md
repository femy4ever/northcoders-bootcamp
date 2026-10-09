# 6.4 Every Once in A While

I'm sure at some point in your Northcoders career, you have utilised the array method `every`.

It's quite useful when we need it. But this time we want to implement `every` in a new way... A way that will enable us to test whether the arguments of a function all pass the predicate function, regardless of data type we pass in.

## Task:

Implement the `every` higher order function to work for all data types we pass in.

e.g.

const divisibleBy2 = (num) => num % 2 === 0;

const allDivisible = every(divisibleBy2)

allDivisible(2, 3, 4) -> false;
allDivisible([2, 4, 6], {1: 2, 2: 4, 3: 6}) -> true
