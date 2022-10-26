const inquirer = require('inquirer');
const db = require('./server');

const startProgram = function() {
  inquirer
  .prompt([
    {
      type: 'list',
      name: 'action',
      message: 'What would you like to do?',
      choices: [
        'View all departments',
        'View all roles',
        'View all employees',
        'Add a department',
        'Add a role',
        'Add an employee',
        'Update an employee',
        'Quit'
      ]
    }
])
// Based on their choice --> calls a certain query
.then((choice) => {
  if(choice.action === 'View all departments'){
    readDepartment();
  } else if (choice.action === 'View all roles'){
    readRole();
  } else if (choice.action === 'View all employees'){
    readEmployee();
  } else if (choice.action === 'Add a department') {
    createDepartment();
  } else if (choice.action === 'Add a role'){
    createRole();
  } else if (choice.action === 'Add an employee'){
    createEmployee();
  } else if (choice.action === 'Update an employee'){
    updateEmployee();
  } else {
    console.log('Bye!')
    return
  };
});
};

//--- Read Queries
const readDepartment = () => {
  db.query('SELECT id, name FROM department', function (err, results) {
  console.table(results);
  startProgram();
});
};

const readRole = () => {
  db.query('SELECT id, title, salary, department_id FROM role', function (err, results) {
    console.table(results);
    startProgram();
});
}

const readEmployee = () => {
  db.query('SELECT id, first_name, last_name, role_id, manager_id FROM employee', function (err, results) {
    console.table(results);
    startProgram();
  });
}

//--- Create Queries

// Create a department
const createDepartment = () => {
  inquirer
  .prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is the name of the department?',
    }
])
.then((input) => {
  let new_department_name = input.name;
  db.query(`INSERT INTO department (name) VALUES (${new_department_name})`, function (err, results) {
    console.log(`${new_department_name} has been added the database`)
    startProgram();
  })
})
};

// Create a role
const createRole = () => {
  inquirer
  .prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is the name of the role?',
    },
    {
      type: 'input',
      name: 'salary',
      message: 'What is the salary of the role?',
    },
    {
      type: 'input',
      name: 'department',
      message: 'Which department does the role belong to?',
    }
])
.then((input) => {
  let role = input.name;
  let salary = input.salary;
  let department = input.department;
  db.query(`INSERT INTO role (title, salary, department_id) VALUES (${role}, ${salary}, ${department})`, function (err, results) {
    console.log(`${role} has been added to the database.`)
    startProgram();
  })
})
}

// Create an employee
const createEmployee = () => {
  inquirer
  .prompt([
    {
      type: 'input',
      name: 'first',
      message: 'What is their first name?',
    },
    {
      type: 'input',
      name: 'last',
      message: 'What is their last name?',
    },
    {
      type: 'input',
      name: 'role',
      message: 'What is their role?',
    },
    {
      type: 'input',
      name: 'manager',
      message: 'Who is their manager?',
    }
])
.then((input) => {
  let firstName = input.first;
  let lastName = input.last;
  let role = input.role;
  let manager = input.manager;
  db.query(`INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (${firstName}, ${lastName}, ${role}, ${manager})`, function (err, results) {
    console.log(`${firstName} ${lastName} has been added to the database.`)
    startProgram();
  })
})
}

//TODO: --- Update Employee
// const updateEmployee = () => {
//     inquirer
//     .prompt[
//       {
//         type: 'list',
//         name: 'name',
//         message: 'Select employee to update.',
//         choices: [
//           results.name
//         ]
//       }
//     ].then((input) => {
//       let name = input.name;
//       db.query(`INSERT INTO role (title, salary, department_id) VALUES (${role}, ${salary}, ${department})`, function (err, results) {
//       })
//     })
// };

startProgram();

module.exports = startProgram;