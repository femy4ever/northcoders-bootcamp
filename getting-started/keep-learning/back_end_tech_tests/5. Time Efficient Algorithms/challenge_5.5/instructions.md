# 5.5 Implement Quick Sort
## Free Code Camp <a href="https://www.freecodecamp.org/learn/coding-interview-prep/algorithms/implement-quick-sort">link</a>
Earlier, I asked you to sort an array of values using Bubble Sort.

Unfortunately, Bubble Sort is a little slow...

Consider the following array: [50, 49, 48, ..., 3, 2, 1], all the numbers counting down from 50 to 1 and our computer working at a rate of 1 loop per ms.

The array would need to be looped 50 * 50 = 2,500 times. That's 2.5 seconds to solve with Bubble Sort; an age in computing terms.

And what would happen if our array was 10,000,000 digits long, processing it at the same rate as above?

Worst case, it would take 100,000,000 seconds. Or, a little over 3 years to sort. Still, better than pushing a button for 3 years every 108 minutes.
<br /><br />
<img src="https://3.bp.blogspot.com/_r0n-VkU_yEI/TAGSYwk4WrI/AAAAAAAAFGI/AkY_9lWYHwI/s320/Desmond+Doesn't+Push+Button.jpg" />
<br />
<sub><a href="https://lostpedia.fandom.com/wiki/Desmond_Hume">Desmond Hume, Lost</a></sub>
<br /><br />
So, naturally, we want to try and shorten this time frame down a bit.

Quick sort is an efficient, recursive divide-and-conquer approach to sorting an array. In this method, a pivot value is chosen in the original array. The array is then partitioned into two subarrays of values less than and greater than the pivot value. We then combine the result of recursively calling the quick sort algorithm on both sub-arrays. This continues until the base case of an empty or single-item array is reached, which we return. The unwinding of the recursive calls return us the sorted array.

Quick sort is a very efficient sorting method, providing O(nlog(n)) performance on average. It is also relatively easy to implement. These attributes make it a popular and useful sorting method.

Bubble sort takes O(n<sup>2</sup>) time to compute, for those interested.

Our 50 number array just got sorted in half a second, max.

Our 10,000 number array just got sorted in, at most, 1 and a half days, assuming the same rate of computing.

## Task:
Let's build a Quick Sort algorithm! It is common to make the pivot of the Quick Sort the middle value.
