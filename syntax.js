console.log("Hello World!")

// Functions
function add1(a, b) {
    return a + b;
}

console.log(add1(2, 3));

// Function expression
const add2 = function (a, b) {return a + b;}
console.log(add2(6, 7))

// Functions using arrow notation
const add3 = (a, b) => a+b;

// Passing functions to variables
const additive = add1;
console.log(additive(19, 20))

// Passing functions to other functions
function greeting() {
    return "Hello, ";
}
function fullGreeting(funcy, name) {
    return funcy() + name;
}
console.log(fullGreeting(greeting, "Vanshaj"))

// Factory Functions - Functions that Return Newer Functions
function makeGreeting() {
    return function (name) {return "heyo" + name};
}
const greet = makeGreeting();
console.log(greet("Sam"))

// Passing Functions to Factory Functions 
function makeNewGreeting(msg) {
    return function (name) {msg() + name; }
}

function sayHello () {return "Hello ";}
const greeting2 = makeNewGreeting(sayHello);
console.log(greeting2("Sammy"))

// JavaScript Objects can be defined as JSON
const square = {
    colour: "red",
    size: '10',
    draw: function () {
        return 'A ${this.size} pixel '
    }
}

// get property 
console.log(square.colour);

// set property
square.colour = "blue"

// call method
console.log(square.draw())

// Constructor Function - creating objects without a class
function Shape(colour) {
    this.colour = colour;
    this.draw = function () {return "something";}
}

function Square(colour, size) {
    Shape.call(this, colour);
    this.size = size;
    this.draw = function () {
        return "Hello World here";
    }
}

const square = new Square("red", 10);

// Classes - the actual template for creating objects
class newShape {
    constructor(newColour) {this.newColour = newColour;}
    draw() {return "drawing a newShape in class";}
}

class newSquare extends newShape {
    constructor(newColour, newSize) {
        super(newColour);
        this.newSize = newSize;
    }
    draw() {return "Drawing a newSquare from class"}
}

const newsquare = newSquare("red", 55);

// Arrays
let arr1 = []; // empty array
let arr2 = Array(5); // empty array of size 5
let arr3 = [1, 2, 3, 4, 5]; // array with 5 elements
let arr4 = Array(5).fill(99); // array with size 5 and each element is 99
let arr5 = [3, 21, 432, 9, 76];

// Iterating over an array in JS
for (let i = 0; i < arr3.length; i++) {
    console.log(arr3[i]);
}

for (const x of arr5) {
    console.log(x);
}

// Functional Array Methods
const arr6 = arr3.map((x) => x * 10); // maps a new array with value of x manipulated

const arr7 = arr3.find((x) => x % 2 == 0); // finds the first element in the array that satisfies the condition

const arr8 = arr3.filter((x) => x % 2 == 0); // filters and produces an array of elements that satisfy the condition

const arr9 = arr5.find((x) => x % 2 == 0);

// Destructuring Assignment
let [a, b] = arr3; // a = 1, b = 2

