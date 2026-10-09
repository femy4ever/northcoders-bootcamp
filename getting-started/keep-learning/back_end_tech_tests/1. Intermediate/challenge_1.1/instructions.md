# 1.1 Which Doors are Open?
## Free Code Camp <a href="https://www.freecodecamp.org/learn/coding-interview-prep/rosetta-code/100-doors">link</a>
In this challenge, we have some number, n, of doors that we will pass by, all of which are initially closed. We walk past each door and when we walk past them the first time we toggle all the doors. On our next iteration, we only toggle every 2nd door. On our next iteration, we toggle every 3rd door. Where each iteration we increase the value of the door we toggle. Until we toggle only the final door.

For the visually oriented. Assume this collection of 0's and 1's represent if a door is closed or open, respectively.

0 0 0 0 0 ...;

After our first loop we change all the doors states,

1 1 1 1 1 ...;

After our second loop, we change every second door's states,

1 0 1 0 1 ...;

After our third loop we change every 3rd door's states,

1 0 0 0 1 ...;

And so on...  

## Task:
We want to find out the index of the doors that are open after our final pass.

For example, given 5 doors, our function doorsOpened(5) should return an array of [1, 4] because 1 and 4 are the only opened doors.
