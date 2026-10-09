# 2.2 Decrypt the Message
In this challenge, a secret message has been encrypted by shifting the letters forward or back in the alphabet to different locations.

All the letters experience the same shift, for example if the shift is +4 then a -> e, b -> f, c -> g, etc...

Any letters at the end, such as z, will continue from the start of the alphabet: w -> a, x -> b, y, -> c, z -> d.

If the shift happens in the opposite direction, the start of the alphabet will shift to the end of the alphabet.

## Task:
Given a jumbled string and a number representing the total shift, determine what the original message was before the encryption happened.