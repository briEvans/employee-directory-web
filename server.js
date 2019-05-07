const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
const port = process.env.PORT || 5000;

// Files to Read/Write
let employees = require('./employees.json');
let locations = require('./locations.json');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// GET list of all employees
app.get('/api/employees', (req, res) => {
  res.send({ data: employees });
});

// GET list of all locations
app.get('/api/locations', (req, res) => {
  res.send({ data: locations });
});

// UPDATE employee with :id
app.put('/api/employees/:id', (req, res) => {
  employees = employees.map(employee => {
    if (employee.id === req.body.id) {
      employee = req.body;
    }
    return employee;
  });

  fs.writeFile('./employees.json', JSON.stringify(employees), function (err) {
    console.log('employees:', JSON.stringify(employees));
    if (err) {
      return console.log('Err: ', err);
    }
    res.send({status: 200});
  });
});

// CREATE new employee with :id
app.post('/api/employees/create', (req, res) => {
  let newEmployee = req.body;

  newEmployee.id = '_' + Math.random().toString(36).substr(2, 9);
  employees.push(newEmployee);
  fs.writeFile('./employees.json', JSON.stringify(employees), function (err) {
    if (err) {
      return console.log('Err: ', err);
    }
    console.log('Successfully wrote to file');
  });

  res.send({status: 200});
});

// DELETE employee with :id
app.delete('/api/employees/:id/delete', (req, res) => {
  employees = employees.filter(employee => {
      return employee.id !== req.body.data;
  });

  fs.writeFile('./employees.json', JSON.stringify(employees), function (err) {
    if (err) {
      return console.log('Err: ', err);
    }
    res.send({status: 200});
  });
});

app.listen(port, () => console.log(`Listening on port ${port}`));
