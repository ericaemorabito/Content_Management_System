-- Fill department table --
INSERT INTO department (id, name)
VALUES (1, "Engineering"),
      (2, "Finance"),
      (3, "Legal"),
      (4, "Sales");

-- Fill role table --
INSERT INTO role (title, salary)
VALUES ("Engineer", "100000"),
      ("Accountant", "90000"),
      ("Lawyer", "125000"),
      ("Salesperson", "80000");

-- Fill employee table --
INSERT INTO employee (first_name, last_name, role_id)
VALUES ("Sarah", "Jones", 1),
      ("Jim", "Robinson", 2),
      ("Deanne", "Smith", 3),
      ("Joe", "Johnson", 4);
