import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";

// Internal js imports
import Header from './Components/Header';
import Base from './Components/Base';
import Employees from './Components/Employees';
import Locations from './Components/Locations';
import Departments from './Components/Departments';

// Internal style imports
import './App.scss';

// TODO: include department support in API
const currDepartments = [
  'Department 1',
  'Department 2',
  'Department 3'
];

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      employees: [],
      locations: [],
      departments: [],
      isLoaded: false,
    };

    this.getAllEmployees = this.getAllEmployees.bind(this);
    this.getAllLocations = this.getAllLocations.bind(this);

    this.onEdit = this.onEdit.bind(this);
    this.onCreate = this.onCreate.bind(this);
    this.onDelete = this.onDelete.bind(this);
   };

   componentDidMount() {
     this.getAllEmployees();
     this.getAllLocations();
     this.setState({
       loaded: true,
       departments: currDepartments
     });
   };

   /* {@func} getAllEmployees - fetches list of employees and updates the state
    * @return {Object} Array of objects
    */
    getAllEmployees() {
      return fetch('/api/employees',
      {
        headers : {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      })
      .then(res => res.json())
      .then(json => {
        this.setState({
          employees: json.data
        });

        return json.data;
      });
    };

    /* {@func} getAllLocations - fetches list of office locations and updates the state
     * @return {Object} Array of objects
     */
    getAllLocations() {
      return fetch('/api/locations',
        {
          headers : {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          }
        })
       .then(res => res.json())
       .then(json => {
         this.setState({
           locations: json.data
         })

         return json.data;
       })
       .catch(error => console.error('Error:', error));
     };

     /* {@func} onEditSubmit - Update an Employee object
      * @params {Object} data an object containing the fields to update
      * @return {Object} Array of objects
      */
     onCreate(data) {
       const endpoint = '/api/employees/create';

       return fetch(endpoint, {
           method: 'POST',
           body: JSON.stringify(data),
           headers: {
             'Content-Type': 'application/json'
           }
         })
         .then(res => res.json())
         .then(response => console.log('Success'))
         .catch(error => console.error('Error:', error));
   };

     /* {@func} onEdit - Update an Employee object
      * @params {Object} data an object containing the fields to update
      * @return {Object} Array of objects
      */
     onEdit(data) {
       const endpoint = '/api/employees/' + data.id;

       return fetch(endpoint, {
           method: 'PUT',
           body: JSON.stringify(data),
           headers: {
             'Content-Type': 'application/json'
           }
         })
         .then(res => res.json())
         .then(response => console.log('Success'))
         .catch(error => console.error('Error:', error));
   };

   /* {@func} onDelete - Delete an Employee
    * @params {Object} id the unique identifier for the employee
    * @return {Object} Array of objects
    */
    onDelete(id) {
      const endpoint = '/api/employees/' + id + '/delete';

      return fetch(endpoint, {
        method: 'DELETE',
        body: JSON.stringify({data: id}),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(res => res.json())
      .then(response => console.log('Success'))
      .catch(error => console.error('Error:', error));
    };

    render() {
      return (
        <Router>
          <Header />
          <Route path="/" component={() => <Base
              category="Base"
          />}/>

          <Route path="/employees" component={() => <Employees
              employees={this.state.employees}
              locations={this.state.locations}
              category="Employees"

              onEdit={this.onEdit}
              onCreate={this.onCreate}
              onDelete={this.onDelete}
              getAllEmployees={this.getAllEmployees}
          />}/>

          <Route path="/locations" component={() => <Locations
              locations={this.state.locations}
              category="Locations"
          />}/>

          <Route path="/departments" component={() => <Departments
              departments={this.state.departments}
              category="Departments"
          />}/>
      </Router>
    );
  }
};

export default App;
