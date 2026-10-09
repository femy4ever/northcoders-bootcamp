# 3.4 Count the Data Types

Sometimes, we need to know metadata about our information as the total quantity of info can be overwhelming or won't give us a good trend to go off of for analysis.

Here, we're going to attempt to analyse our objects and investigate what types of data they will be using.

We want to make sure it works for nested objects, too!

## Task:

Build a function that receives an object and returns an object sharing the quantity of data types inside of it. It must work for nested objects.

e.g. countData({1:[2,3,4]}) -> {array: 1, number: 3}