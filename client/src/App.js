import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Header from './Components/Header';
import Base from './Components/Base';
import List from './Components/List';


import './App.scss';

const endpoint = '/api/allEmployees';

// To do: include departments in API call
const currDepartments = ['Department 1', 'Department 2', 'Department 3'];

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      allEmployees: [],
      locations: [],
      departments: [],
      isLoaded: false,
     };

     this.getAllEmployees = this.getAllEmployees.bind(this);
     this.getAllLocations = this.getAllLocations.bind(this);

   };

   componentDidMount() {
     this.getAllEmployees();
     this.getAllLocations();

     this.setState({loaded: true, departments: currDepartments});
    }

   /* {@func} getAllEmployees - fetches list of products and updates the state
    * @return {Object} Array of objects
    */
   getAllEmployees() {
     return fetch(endpoint)
      .then(res => res.json())
      .then(json => {
        this.setState({
          allEmployees: json.data
        });
        return json.data;
      });
    };

    getAllLocations() {
      return fetch('/api/allLocations')
       .then(res => res.json())
       .then(json => {
         this.setState({
           locations: json.data
         });
         return json.data;
       });
     };

    render() {
      return (
        <Router>
            <Header />
              <Route path="/" component={() => <Base/>}
              />
            <Route path="/employees" component={() => <List
              list={this.state.allEmployees}
              category="Employees"
              theme="color-Turq"
              />}
            />

          <Route path="/departments" component={() => <List
                list={this.state.departments}
                category="Departments"
                theme="colorGrass"
                />}
              />

            <Route path="/locations" component={() => <List
                    list={this.state.locations}
                    category="Locations"
                    theme="colorLime"
                    />}
                  />
        </Router>
      );
    }
}

export default App;
