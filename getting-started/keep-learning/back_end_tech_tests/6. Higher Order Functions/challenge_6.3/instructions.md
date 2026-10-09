# 6.3 Generate and Store in a Cache

Sometimes, our programs will have to execute lengthy and long functions that may take some time to return a result... This isn't ideal if we need to make repeat requests for the same information.

If this is the case, then we can store our results in a cache and retrieve the information instantly!

This is what we are going to try and implement in this kata...

## Task

Build a higher order function that takes in a binary function and returns an object...

This object will contain different methods that will either return new information, allow us to search our cache, and delete information from our cache

e.g.

const add2 = genStore((num1, num2) => num1 + num2);

add2.do(1, 2) -> 3;
add2.search(1, 2) -> true;
add2.delete(1, 2) -> true;