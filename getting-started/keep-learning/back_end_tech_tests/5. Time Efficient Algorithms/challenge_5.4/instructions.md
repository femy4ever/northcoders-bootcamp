# 5.4 Passing Cars...

## Codility <a href="https://app.codility.com/programmers/lessons/5-prefix_sums/passing_cars/">link</a>

Imagine, you're on a road travelling west to east, and you pass 5 cars. You know you have made 5 passings. But, what if you have a car in front of you? In total, there have been 10 passings. And a car behind you? There are now 15 passes. Quite simple.

But, what if one of those cars has just joined and you are the first one to pass it, then the score becomes 14 as the car in front of you hasn't passed it.

## Task:

Given an Array, A, where 0 determines a car is travelling East, and 1 means a car is travelling West, and A has up to 1,000,000 inputs. Write an algorithm that tells you how many passes between cars there are.

For example: A = [1,0,1,0,1] means there will be 4 passings in total, and A = [0,1,0,1,1] means there will be 5 passings in total.

If you get >= 2,000,000,000 passings, return -1.

This test is also timed, so make sure your algorithm is <a href="https://rob-bell.net/2009/06/a-beginners-guide-to-big-o-notation">time efficient</a>.

As an aside, if your solution is not time efficient, you will be waiting for jest for a very long time! My computer runs the 1,000,000 sized array in about 3 minutes. The aim is to get this down to 5 seconds. The links will help!
