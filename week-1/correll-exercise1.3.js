
var header = require('../header.js'); 

console.log(header.display("Ashlee", "Correll", "Exercise 1.3")); 
console.log("\n");

var header = require('../header.js');

/*
Title: Exercise 1.3

Author: Richard Krasso

Date: 23 February 2018

Modified by: Ashlee Correll

Description: JavaScript coding assignment to learn about object constructors.
*/

/*
 Expected output:

 FirstName LastName
 <AssignmentName>
 <Today's Date>

 -- DISPLAYING CELL PHONE DETAILS --
 Manufacturer: <manufacturer>
 Model: <model>
 Color: <color>
 Price: <price>


*/

// start program

function Phone (manufacturer, model, color, price){
    this.manufacturer = manufacturer;
    this.model = model;
    this.color = color;
    this.price = price;

    this.getPrice = function (){
        return "Price: " + this.price
    };

    this.getModel = function (){
        return "Model: " + this.model
    };
    
    this.getDetails = function () {
        return ("Manufacturer: " + this.manufacturer + "\n" + this.getPrice() + "\n" + "Color: " + this.color + "\n" + this.getModel());
    };
}
 
var myPhone = new Phone ("Apple", "IPhone 5S", "Rose Gold", "$500");

console.log (myPhone.getDetails())


// end program