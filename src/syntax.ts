// Type Aliases
// we can define our own tyoe
type Employee = {
    id: number,
    name: string,
    retire: (date: Date) => void
}

type PointCoordinate = {x: number, y: number};

type SimpleCallback = (data: string) => void;

// Interfaces - another way to type alias
// but this can extend wrt inheiritance
interface Shape {colour: string};
interface Square extends Shape {length: number, bredth: number};
let square = {length: 10, bredth: 10, colour:"red"} as Square;

// obj of type employee
let employee: Employee = {
    id: 11,
    name: "Chomu",
    retire: (date:Date) => {
        console.log(date);
    }
};

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

// Functions
function calculateTax(income: number, taxYear?: number): number { // we can annotate return type of a function
    return income; // if we did not return a value or returned a value of a different type, it would have raised an error
}

calculateTax(90000); // the function accepts only one parameter because taxYear is an optional parameter because of ?
// we can also give taxYear a default value by writing TaxYear = 2022 in the function declaration

// Union Types
function PrintID(x : number | string): void {
    console.log("Your ID is " + x);
}

PrintID(334);
PrintID("Chomu"); // both work

type CrazyWidget = Employee & PointCoordinate; 

// Literal Types
let quantity: 50 | 100 = 100;

type betterQuantity = 50 | 100;

// Type Narrowing
// we want code to behave in a way if its one type
function example(ab: number | string): number {
    if (typeof ab === "number") {
        return ab;
    } else if (typeof ab === "string") {
        return 0;
    } else {
        return 100;
    }
}

// Classes in TS
class classyShape {
    constructor(public colour: string) {} // public means colour is a property
}

class PrivyShape {
    private _colour: string; // private + underscore: hidden properties to be used with get & set
    get colour() {
        return this._colour;
    }
    set colour(c : string) {
        this._colour = c;
    }
    constructor(colour: string) {
        this._colour = colour;
    }
}