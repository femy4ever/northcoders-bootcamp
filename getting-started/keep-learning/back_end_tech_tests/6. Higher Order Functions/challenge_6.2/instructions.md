# 6.2 Fibonacci... but with 3 Numbers!

We all have heard of the Fibonacci sequence: 0, 1, 1, 2, 3, 5, 8, 13, 21, ...

Where the next number in the sequence is found by adding the previous 2 numbers of the sequence.

It's quite a beautiful sequence as it crops up all through out the natural world!

## Task:

Build a higher order function that takes in 3 numbers and returns a function that when invoked returns the next value of the sequence.

e.g.

const fib = fibonacci3(0, 0, 1)

fib() -> 0,
fib() -> 0,
fib() -> 1,
fib() -> 1,
fib() -> 2,
fib() -> 4,
...