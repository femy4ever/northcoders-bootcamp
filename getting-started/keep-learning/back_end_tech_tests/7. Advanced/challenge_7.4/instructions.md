# 7.4 What is the Nested Object Pathway?

Consider this: you're working in MongoDB and want to sort your documents by any key. The problem though is that you have nested objects within nested objects. Now, you could hard code this, but... the conditional logic will get very big very quickly. So, instead you decide to build a function that will give you the object key path that you need. For example let's say you want to sort this array of "objects" by price:

const item = {
name: "Ball",
pricing: {
price: 599,
salePrice: 399,
clearance: 299
},
weight: 500,
dimensions: {
height: 10,
width: 10
}
},

You would need the object path "pricing.price". But, if you want to sort by weight you would just need "weight". And as we want to sort by any value, we need to build a function that will give us this path.

## Task:

Build a nestedObjectPath that takes an object and a string that will return the pathway through the object that get's us to our desired key-value pair of a nested object (no arrays will be present). If there are duplicate key-value pairs, we want to find the first one that does not contain an object as the value.
