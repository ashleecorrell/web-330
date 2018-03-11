var header = require('../header.js');
console.log(header.display("Ashlee", "Correll", "Exercise 3.3"));
console.log("\n");


/*
Title: Exercise 3.3

Author: Richard Krasso

Date: 11 March 2018

Modified by: Ashlee Correll

Description: JavaScript coding assignment to learn about the Singleton Pattern.
*/

/*
 Expected output:

 FirstName LastName
 <AssignmentName>
 <Today's Date>

 Same database instance? true

*/

// start program

var DatabaseSingleton = (function() { var instance;
    function createInstance() {
        var postgresDatabase = new Object("Database instance initialized!");
        return postgresDatabase; }
        
        return {
            getInstance: function() {
                if (!instance) {
                 instance = createInstance();
    }
                return instance; }
    } })();

 // create databaseSingletonTest function   
function DatabaseSingletonTest(){
    //create two new database instances
    var oracle = DatabaseSingleton.getInstance();
    var postgres = DatabaseSingleton.getInstance();
    //output whether the instances match
    console.log("Same database instange? ", oracle === postgres);
}
//call the DatabaseSingletonTest() function
DatabaseSingletonTest();

// end program