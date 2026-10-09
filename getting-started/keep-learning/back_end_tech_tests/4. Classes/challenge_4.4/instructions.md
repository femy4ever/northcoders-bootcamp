# 4.4 Binary Search Tree
In Computer Science, a tree is a data structure wherein the data is organised down branches relative to it's "size" against a value. A Binary Tree is a tree that for each value in the tree, the tree offers 2 branches to follow depending on if the value we are comparing is greater or smaller than the value in the tree. Here's a diagram for reference...
<br /><br />
<img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.Yz2ZINJDIFiLFfGonPKMvQHaG8%26pid%3DApi&f=1" width="20%"/>
<br /><br />
Why would we want to use a tree? Surely, it would get too difficult too look at if we have millions of items.

But that's the advantage. As you learn in the next section, time efficiency of an algorithm is an important factor for large data sizes, and even though a tree will look terrible to look at, it's much more efficient for traversing than a standard array.

Let's say we have a tree as such:

                            100
                    50               150
                25      75      125       175

If we wanted to find the number 75, we would only need to go down 2 branches, the smaller one and then the larger one, comparing the number we want to find with the current value.

In a sorted array, it would be 3 steps from the start, and in an unsorted array it could take up to 7 steps.

A well ordered tree, offers a more efficient way to store values and to find them for large data sets.

For the mathsy people reading this. The longest it would take to traverse a well-ordered tree is log(n) where n is the number of nodes. And for an unordered array, the longest it would take is n, the number of values in the array.

For those that aren't so mathsy, if we moved at 1 value per second in both an unordered array and our well-ordered tree. If both our array and tree had 1024 values in them, it would take, maximally, 1024 seconds to completely search the array for our value. Our tree, on the other hand, would take 10 seconds, at most.

This is called the algorithms complexity, which is given in Big O notation, but that's for the next section.

Even if the value wasn't at the end of the array, searching the array will never be faster than searching the tree. It can only ever match the tree up to a certain point.

## Task:
We are going to build a binary search tree. Two classes have already been set up for you, BST and Node, your job is to give it the following functionality.

Node Class:
- Creates an object with a value, larger and smaller references,
- Has a getNode() method that returns the current node,
- Has an insertNode() method that will add a value into the Node,
- insertNode() can place a Node deep into the structure of the Node,
- Has a contains() method that searches the tree for the desired value

BST Class:
- Is a subclass of Node,
- insertNode() and contains() should still work for BST,
- Has a replace() method, replacing the current tree with a new tree,
- Has a locate() method that gives the path to the desired value in the tree
