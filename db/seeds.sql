-- Fill department table --
INSERT INTO department (name)
VALUES ("Engineering"),
      ("Finance"),
      ("Legal"),
      ("Sales");

-- Fill role table --
INSERT INTO role (title, salary, department_id)
VALUES ("Engineer", "100000", 1),
      ("Accountant", "90000", 2),
      ("Lawyer", "125000", 3),
      ("Salesperson", "80000", 4);

-- Fill employee table --
INSERT INTO employee (first_name, last_name)
VALUES ("Sarah", "Jones"),
      ("Jim", "Robinson"),
      ("Deanne", "Smith"),
      ("Joe", "Johnson");
