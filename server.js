var mysql = require('mysql');

var inquirier = require('inquirer');

var password = require('./password');

var connection = mysql.createConnection({
    host : "localhost",
    port : process.env.PORT || 3306,
    user : "root",
    password : "Newingtonhslax3",
    database : "employees_db"
});

connection.connect(function(err){
    if(err) throw err;
    console.log("connected as id " + connection.threadId);
    
    promptQustions();
});

function promptQustions() {

    console.log("Welcome to the employee tracker!\n This is where you can keep track of all of your employees");

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

    inquirier.prompt([

      {  
        name : "firstName",
        type : "input",
        message : "What is their first name?"
      },
      {
        name : "lastName",
        type : "input",
        message : "What is their last name?"
      }
      ,
      {
          name : "title",
          type : "input",
          message : "What is their title?"
      },
      {
          name : "salary",
          type : "input",
          message : "What is their salary?"
      },
      {
          name : "department",
          type : "input",
          message : "What department do they work in?"

      }
    

    ]).then(function(anwser){

        console.log(anwser.firstName);

        console.log(anwser.lastName);

        connection.end();

    });

}

function updateEmployee() {

    inquirier.prompt([
        {  
            name : "updateWho",
            type : "input",
            message : "What employee would you like to update?"
          },
          {  
            name : "updating",
            type : "list",
            message : "What will you be updating?",
            choices : ["First Name","Last Name","Department","Title","Salary"]
          }
    ]).then(function(anwser){

        console.log(anwser.updateWho);

        connection.end();

    });

}

function removeEmployee() {
    
    inquirier.prompt({
        name : "employeeRemoved",
        type : "input",
        message : "What employee would you like to remove?"
    }).then(function(anwser){

        console.log(anwser.employeeRemoved + " Has been removed");

        connection.end();

    })

}

function viewEmployees() {console.log("404 error")}