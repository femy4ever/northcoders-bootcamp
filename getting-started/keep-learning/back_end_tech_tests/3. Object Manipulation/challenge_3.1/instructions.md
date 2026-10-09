# 3.1 Are these 2 Objects Identical?
Sometimes, it is worth while to know if 2 pieces of data are identical. Now, this is easy with primitive values because you can just compare them with the "===" operator.

However, if you try to do this with objects and array, it won't work because the memory references of the objects could be different... Even if the contents are exactly the same.

## Task:
Create a function that allows us to compare 2 objects and will determine if the contents are an exact match