var header = require('../header.js');
console.log(header.display("Ashlee", "Correll", "Exercise 3.2"));
console.log("\n");


/*
Title: Exercise 3.2

Author: Richard Krasso

Date: 11 March 2018

Modified by: Ashlee Correll

Description: JavaScript coding assignment to learn about the Factory Pattern.
*/

/*
 Expected output:

 FirstName LastName
 <AssignmentName>
 <Today's Date>

 Oracle {
    username: '<username>',
    password: '<password>',
    server: '<server>',
    version: '<version>'
 }

 Informix {
    username: '<username>',
    password: '<password>',
    server: '<server>'
 }

*/

// start program
function Postgres(properties) {
    this.username = properties.username || "admin";
    this.password = properties.password || "s3cret";
    this.server = properties.server || "localhost:5432";
}

function MySql(properties) {
    this.username = properties.username || "ca-admin";
    this.password = properties.password || "ca-s3cret";
    this.server = properties.server || "localhost:8000";
    this.version = properties.version || 5.7
}
//Create database class oracle
function Oracle(properties){
    this.username = properties.username || "admin";
    this.password = properties.password || "password";
    this.server = properties.server || "localhost:5050";
    this.version = properties.version || "10g"
}
//Create database class Informix
function Informix(properties){
    this.username = properties.username || "admin";
    this.password = properties.password ||"password";
    this.server = properties.server || "localhost:6060";
}

function DatabaseFactory() {}
//update if/else block
DatabaseFactory.prototype.databaseClass = Oracle;
DatabaseFactory.prototype.createDatabase = function(properties) {
    if (properties.databaseType === "Postgres") {
        this.databaseClass = Postgres;
    } if (properties.databaseType === "MySql") {
        this.databaseClass = MySql;
    } if (properties.databaseType === "Oracle"){
        this.databaseClase = Oracle;
    } if (properties.databaseType === "Informix"){
        this.databaseClass = Informix;
    }

    return new this.databaseClass(properties);
};

var postgresFactory = new DatabaseFactory();
var postgres = postgresFactory.createDatabase({
    databaseType: "Postgres",
    username: "admin",
    password: "SuperSecret"
});

var mySqlFactory = new DatabaseFactory();
var mySql = mySqlFactory.createDatabase({
    databaseType: 'MySQL',
    username: "default",
    password: "password"
});

//create new oracleFactory and call createDatabase()
var oracleFactory = new DatabaseFactory();
var Oracle = oracleFactory.createDatabase({
    databaseType: "Oracle",
    username: "Ashlee",
    password: "CannotTell",
});

//create new inforxixFactory and call createDatabase()
var informixFactory = new DatabaseFactory();
var Informix = informixFactory.createDatabase({
    databaseType: "Informix",
    username: "user1",
    password: "unknown",
});
//output the results
console.log(Oracle);
console.log(Informix);






// end program