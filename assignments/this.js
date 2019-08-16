// /* The for principles of "this";
// * in your own words. explain the four principle for the "this" keyword below.
// *
// * 1. Global or window binding. The value of this in the global scope is the console/window object. 
// * 2. Implicit binding. Refers to the nearest object that it is inside of. When a funciont is called by a preceeding dot, the object left of the dot gets "this".
// * 3. New binding. When a constructor function is used, 'this' refers to the specific instance of the object that is created and resturned by the constructor function. 
// * 4. Explicit binding. Call, apply, or bind to push an object to a function. When JS's call or bind method is applied, 'this' is explicitly defined. 
// *
// * write out a code example of each explanation above
// */

// // Principle 1
// // code example for Window Binding
function myName(name) {
    console.log(this);
    return name;
}
myName('Pikachu');


// // Principle 2
// // code example for Implicit Binding

const myObj = {
    greeting: 'Konnichiwa',
    sayHello: function(name) {
        console.log(`${this.greeting} my name is ${name}`);
        
    }
};
myObj.sayHello('Pikachu');

// // Principle 3
// // code example for New Binding

function CordialPerson(greeter) {
    this.greeting = 'Konnichiwa, ';
    this.greeter = greeter;
    this.speak = function() {
        console.log(this.greeting + this.greeter);
        
    };
}
const daniel = new CordialPerson('Pikachu');
const pikachu = new CordialPerson('Daniel');

daniel.speak();
pikachu.speak();


// // Principle 4
// // code example for Explicit Binding

// function CordialPerson(greeter) {
//     this.greeting = 'Konnichiwa, ';
//     this.greeter = greeter;
//     this.speak = function() {
//         console.log(this.greeting + this.greeter);
//         // console.log(this);
//     };
// }
// const daniel = new CordialPerson('Pikachu');
// const pikachu = new CordialPerson('Daniel');

// daniel.speak();
// pikachu.speak();

// daniel.speak.call(pikachu);
// pikachu.speak.apply(daniel);

