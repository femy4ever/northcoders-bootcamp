# 4.2 Create some Shapes Classes

Even more classes, but probably not in the way we're used to, yet. Here, we're going to explore some super classes. This will help us get used to inheritance and abstraction! I hope you enjoy this.

Inheritance is a way of "passing down" information from one class to another. All the information contained by the parent class can be accessed by the child class; the properties it uses and the methods that can be invoked.

However, we can also overwrite methods if we decide a general rule doesn't help a specific child class case. For example, if we have a Triangle super class that calculates the longest side of any triangle given 2 sides, it could be a complicated expression involving trigonometry. But, in the case of right angled triangles, we would want to invoke a simpler method using the Pythagorean Theorem; longestSide = Math.sqrt(a<sup>2</sup> + b<sup>2</sup>). Much nicer!

Abstraction is when we would overwrite the method each and every time for each sub class but, it would still make sense to have the method in the parent class. This is because it is still a method/behaviour of said class, so we don't complete the logic because it's too general to give any good information back.

For example, in this Shapes super class, it would make sense for it to have a getArea() method as every shape <strong>must</strong> have an area. But, how we calculate that area is going to be different for Triangles, Squares, Trapezoids, Pentagons, and any other regular/irregular shape. So, we say, "This shape class has an area, but there isn't enough information right now to use this method, but it makes sense for it to exist here". We can then overwrite this abstract method in any sub class.

An abstract class is any class that has at least 1 abstract method.

## Task:

Create a Shapes super class that will be the parent class to a Cube and Sphere class.

N.B. When the word abstract is used below, all it means is that the function is defined but does not contain a body. It is completely empty. Here is a <a href="https://stackoverflow.com/questions/597769/how-do-i-create-an-abstract-base-class-in-javascript">Stack Overflow</a> page that will help you for this!

Our Shapes class is going to need the following:

- An abstract Constructor that takes a single length/radius (m) and a mass (kg),
- An abstract Volume method (getVolume),
- An abstract Surface Area method (getSurfaceArea),
- An abstract Density method (getDensity),

Our Cube and Sphere classes are going to need to define these things further:

- A Constructor,
- A Volume method,
- A Surface Area method,
- A Density method
