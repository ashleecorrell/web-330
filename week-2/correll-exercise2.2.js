var header = require('../header.js');
console.log(header.display("Ashlee", "Correll", "Exercise 2.2")); 
console.log("\n");

/*
 Expected output:

 FirstName LastName
 <AssignmentName>
 <Today's Date>

 The person's full name is '<fullname>.'
 The person's age is '<age>.'

*/

// start program

//creat object literal with one function
var Person = {
    getAge: function () {
        return this.age;
    }
}
//create new object literal
var ashlee = Object.create (Person,{
    "age": {
        "value": "25" 
    },
    "fullname":{
        "value": "Ashlee Correll"
    }

});

ashlee.getAge(); //pass the getAge function

console.log(ashlee.age); //output the age

console.log(ashlee.fullname); //output full name



// end program