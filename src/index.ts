// Declaring variable age of type number
let age: number = 20;

if (age < 50)
    age += 10;

let sales: number = 123456789;
// we can remove the type annotation after we have compiled it once with the anotation because it has been initialized with it

let level; // here level is of type any
level = 1;
level = "a";
// This is okay but we lose the advantage of type checking
// Hence, any should be used only when absolutely necessary

// Arrays
let numbers: number[] = [1, 2, 3, 4];
// We don't have to add type annotation when the array only contains one type of elements
let newnumbers = []; // this array has type any
newnumbers[0] = 1;
newnumbers[1] = 'a';

// Tuples
let user: [number, string] = [1, 'Mosh'];
// There can be problems when tuples have more than 2 columns because they are stored as arrays when transpiled to JS and 
// array functions like push don't work properly

// Enums
enum Size {Small = 1, Medium, Large}

// Objects 
let obj: {a: number, b: string} = {
    a: 1,
    b: "Hello Moshy"
};