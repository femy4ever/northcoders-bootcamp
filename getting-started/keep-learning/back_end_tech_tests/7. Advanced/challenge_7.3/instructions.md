# 7.3 Happy Prime Numbers

Do you watch Doctor Who? Did you watch the 2007 series with David Tennant and Freema Agyeman? And if so, did you watch the episode 42?

If you didn't, don't worry; I'll explain this task here!

In the episode, the Doctor and Martha have to switch on the engines of a space ship because if they don't they'll crash into a sun.

However, there are numerous doors that have been locked and to open them they have to answer a round of multiple questions for each door.

One of the questions is, find the next number in the sequence: 313, 331, 367, ...

The answer is 379. Here's the <a href="https://www.youtube.com/watch?v=ee2If8jSxUo">clip</a> if you want to watch it. With a very quick explanation of a happy prime.

A happy number is a number that when you break it down into its individual digits, square each one and then add them back together will give you a new number. You then repeat the same process with this new number. If you eventually hit 1 after repeating this process as many times as you need, you have a happy number!

For example: 68 --> 6<sup>2</sup> + 8<sup>2</sup> --> 36 + 64 --> 100 --> 1<sup>2</sup> + 0<sup>2</sup> + 0<sup>2</sup> --> 1 + 0 + 0 --> 1; 68 is a happy number.

A happy prime is a prime number that will also hit one when you apply this "happy" process to it. Here's a <a href="https://en.wikipedia.org/wiki/Happy_number">link</a> for more info.

## Task:

Our task is to create a function that will determine whether a number is a happy prime number or not. The function should return true or false.
