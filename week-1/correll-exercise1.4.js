var header = require('../header.js');
console.log(header.display("Ashlee", "Correll", "Exercise 1.4")); 
console.log("\n");

/*
Title: Exercise 1.4

Author: Richard Krasso

Date: 24 February 2018

Modified by: Ashlee Correll

Description: JavaScript coding assignment to learn about duck typing.
*/

/*
 Expected output:

 FirstName LastName
 <AssignmentName>
 <Today's Date>

 Car added to the racetrack!
 Truck added to the racetrack!
 Jeep added to the racetrack!

 -- The following vehicles have been added to the racetrack --
 Truck: <Model>
 Car: <Model>
 Jeep: <Model>

*/

// start program
//Create a function constructor Car class with one parameter
function Car (model) {
    this.model = model;
}
//Add a prototype method called "start"
Car.prototype.start = function(){
    console.log ("Car added to the racetrack!");
};
//Create a function constructor Truck class with two parameters
function Truck (model,year){
    this.model = model;
    this.year = year;
}
//Add a prototype method called "start"
Truck.prototype.start = function (){
    console.log("Truck added to racetrack!");
};
//Create a function constructor Jeep class with three parameters
function Jeep (model,year,color){
    this.model = model;
    this.year = year;
    this.color = color;
}
//Add a prototype method called "start"
Jeep.prototype.start = function(){
    console.log ("Jeep added to racetrack!");
};
//Define an empty array
var racetrack = [];

//Create a driveIt function with one parameter
function driveIt (vehicle){
    //call the start function
    vehicle.start();
    //Push vehicle to racetrack array
    racetrack.push(vehicle);
}
//Create 3 vehicle classes
var alero = new Car ("alero");
var ranger = new Truck ("Ford","1992");
var wrangler = new Jeep ("Wrangler","2001","red");

// pass classes through the driveIt function
driveIt(alero);
driveIt(ranger);
driveIt(wrangler);



// end program