const inquirer = require('inquirer');
//? insert db here???...
const db = require('./server');

const startProgram = function() {
  inquirer
  .prompt([
    {
      type: 'list',
      name: 'action',
      message: 'Choose an action:',
      choices: [
        'View all departments',
        'View all roles',
        'View all employees',
        'Add a department',
        'Add a role',
        'Add an employee',
        'Update an employee'
      ]
    }
])
// Based on their choice --> calls a certain query
.then((choice) => {
  if(choice.action === 'View all departments'){
    readDepartment();
    startProgram();
  } else if (choice.action === 'View all roles'){
    readRole();
    startProgram();
  } else if (choice.action === 'View all employees'){
    readEmployee();
    startProgram();
  } else if (choice.action === 'Add a department') {
    createDepartment();
    startProgram();
  } else if (choice.action === 'Add a role'){
    createRole();
    startProgram();
  } else if (choice.action === 'Add an employee'){
    createEmployee();
    startProgram();
  } else if (choice.action === 'Update an employee'){
    updateEmployee();
    startProgram();
  } else {
    console.log('Bye!')
    return
  };
});
};

const readDepartment = () => {
  db.query('SELECT id, name FROM department', function (err, results) {
  console.log(results);
});
};

startProgram();

module.exports = startProgram;

//! Read Queries
// Read department table in the terminal
// db.query('SELECT id, name FROM department', function (err, results) {
//   console.log(results);
// });

// Read role table
// db.query('SELECT id, title, salary, department_id FROM role', function (err, results) {
//   console.log(results);
// });

// Read employee table
// db.query('SELECT id, first_name, last_name, role_id, manager_id FROM employee', function (err, results) {
//   console.log(results);
// });