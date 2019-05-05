const express = require('express');
const employees = require('./employees.json');
const locations = require('./locations.json');

const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/allEmployees', (req, res) => {
  res.send({ data: employees });
});

app.get('/api/allLocations', (req, res) => {
  res.send({ data: locations });
});

app.get('/api/allLocations', (req, res) => {
  res.send({ data: employees });
});


app.post('/api/world', (req, res) => {
  console.log(req.body);
  res.send(
    `I received your POST request. This is what you sent me: ${req.body.post}`,
  );
});

app.listen(port, () => console.log(`Listening on port ${port}`));
