"use strict";
;
;
let square = { length: 10, bredth: 10, colour: "red" };
let employee = {
    id: 11,
    name: "Chomu",
    retire: (date) => {
        console.log(date);
    }
};
let age = 20;
if (age < 50)
    age += 10;
let sales = 123456789;
let level;
level = 1;
level = "a";
let numbers = [1, 2, 3, 4];
let newnumbers = [];
newnumbers[0] = 1;
newnumbers[1] = 'a';
let user = [1, 'Mosh'];
var Size;
(function (Size) {
    Size[Size["Small"] = 1] = "Small";
    Size[Size["Medium"] = 2] = "Medium";
    Size[Size["Large"] = 3] = "Large";
})(Size || (Size = {}));
let obj = {
    a: 1,
    b: "Hello Moshy"
};
function calculateTax(income, taxYear) {
    return income;
}
calculateTax(90000);
function PrintID(x) {
    console.log("Your ID is " + x);
}
PrintID(334);
PrintID("Chomu");
let quantity = 100;
function example(ab) {
    if (typeof ab === "number") {
        return ab;
    }
    else if (typeof ab === "string") {
        return 0;
    }
    else {
        return 100;
    }
}
class classyShape {
    constructor(colour) {
        this.colour = colour;
    }
}
class PrivyShape {
    get colour() {
        return this._colour;
    }
    set colour(c) {
        this._colour = c;
    }
    constructor(colour) {
        this._colour = colour;
    }
}
//# sourceMappingURL=syntax.js.map