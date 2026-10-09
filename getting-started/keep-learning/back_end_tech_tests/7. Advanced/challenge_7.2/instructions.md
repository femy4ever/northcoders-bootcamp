# 7.2 Recover the Secret String
## Code Wars <a href="https://www.codewars.com/kata/53f40dff5f9d31b813000774/train/javascript">link</a>
In this challenge, we are given an array of arrays. The sub-array are of length 3 and are triples of letters that, when all combined, can be used to discover a secret message.

For example, our array could look like:

[<br />
    ["h","l","p"],<br />
    ["h","e","l"],<br />
    ["e","l","p"]<br />
] 

which, our algorithm, should deduce as the string "help".

A note to add, that the secret message will only ever use each letter once, and the letters in the sub arrays will always be in the same order that they appear in the secret string.

## Task:
Our challenge is to write an algorithm that can reveal the secret string.
