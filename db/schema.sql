DROP DATABASE IF EXISTS company_db;
CREATE DATABASE company_db;

-- Use this database --
USE company_db;

-- Create department table --
CREATE TABLE department (
  id INT PRIMARY KEY,
  name VARCHAR(30)
);

-- Create role table --
CREATE TABLE role (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(30),
  salary DECIMAL,
  department_id INT,
  FOREIGN KEY (department_id)
  REFERENCES department(id)
);

-- Create employee table --
CREATE TABLE employee (
  id INT PRIMARY KEY,
  first_name VARCHAR(30),
  last_name VARCHAR(30),
  role_id INT,
  manager_id INT, 
  FOREIGN KEY (role_id)
  REFERENCES role(id),
  FOREIGN KEY (manager_id)
  REFERENCES employee(id)
);
