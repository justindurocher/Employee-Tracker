var mysql = require('mysql');

var inquirier = require('inquirer');

var connection = mysql.createConnection({
    host : "localhost",
    port : process.env.PORT || 3306,
    user : "root",
    password : "Newingtonhslax3"
});

connection.connect(function(err){
    if(err) throw err;
    console.log("connected as id " + connection.threadId);
    
    promptQustions();
});

console.log("Welcome to the employee tracker!\n This is where you can keep track of all of your employees");

function promptQustions() {

    inquirier.prompt({

        name : "action",
        type: "list",
        message : "What would you like to do?",
        choices : ["Add Employee" , "Update Employee" , "Remove Employee" , "View Employees"] 

    }).then(function(anwser){

        console.log(anwser);

        switch (anwser.action){
            case "Add Employee":
                addEmployee();
                break;
            case "Update Employee":
                updateEmployee();
                break;
            case "Remove Employee":
                removeEmployee();
                break;
            case "View Employees":
                viewEmployees();
                break;
        }

    });

}

function addEmployee() {

    inquirier.prompt({

        name : "firstName",
        type : "input",
        message : "What is there first name?"

    }).then(function(anwser){

        console.log(anwser.firstName);

    });

}

function updateEmployee() {console.log("404 error")}

function removeEmployee() {console.log("404 error")}

function viewEmployees() {console.log("404 error")}