# 6.1 Once Upon a Time

Have you ever been on the payment section of a website, hitting "Order Now" and nothing happens... So, you click again, and nothing happens. You try again, the payment goes through... But it's gone through 3 times?!

Probably not.

That's because websites have protections from allowing someone to hit that button more than once. Today, we're going to build a higher order function that does exactly this.

## Task:

Create a higher order function that when it receives a function will only allow that function to be invoked once.

e.g.

const print3 = () => 3;
once(print3)() -> 3
once(print3)() -> undefined 