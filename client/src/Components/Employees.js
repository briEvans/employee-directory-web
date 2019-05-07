import React, { Component } from 'react';
import { withRouter } from "react-router-dom";

// Internal Routes
import Employee from './Employee';
import Create from './Create';

// Style Routes
import '../App.scss';

class Employees extends Component {
  constructor(props) {
    super(props);

    this.state = {
      query: ''
    };

     this.onEdit = this.props.onEdit.bind(this);
     this.onDelete = this.props.onDelete.bind(this);
     this.onCreate = this.props.onCreate.bind(this);

     this.filterEmployees = this.filterEmployees.bind(this);
     this.handleInputChange = this.handleInputChange.bind(this);
  };

  componentDidMount () {
    this.setState({query: window.location.search.replace('?q=', '')}, () => this.filterEmployees(this.state.query));
  }

  /* {@func} filterEmployees - Hide/Show DOM elements based if the query is present
   * @params {Object} query the query
   */
  filterEmployees (query) {
    let employeeDOM = document.querySelectorAll('.employee');

    // First element is just the prototype/create button
    for (let i = 1; i < employeeDOM.length; i++) {
      let employee = employeeDOM[i];

      if (employee.innerHTML.toLowerCase().includes(query.toLowerCase())) {
          employee.classList.remove('hide');
      } else {
        if (!(employee.classList.contains('hide'))) {
          employee.classList.add('hide');
        }
      }
    }
  };

  /* {@func} handleInputChange - Update the state and browser history when the query changes
   * @params {Object} ev the event
   */
  handleInputChange (ev)  {
    let queryParams = '';

    this.setState({
      query: this.inputQ.value
    }, () => {
      queryParams = this.state.query.length > 0 ? '?q=' + this.state.query : ''
          this.filterEmployees(this.state.query);
          this.props.history.push(window.location.pathname + queryParams);
    })
  };

  render() {
    return (
      <div className="app-body">
        <div className="app-container">
          <div className="search-employees-view">
            <div className="search search-large">
              <form className="product-form">
                <input
                  type="text"
                  placeholder="John Doe..."
                  ref={inputQ => this.inputQ = inputQ}
                  defaultValue={this.state.query}
                  onChange={this.handleInputChange}
                />
              <button>Go</button>
              </form>
            </div>
          </div>
          <div className="app-body-header"><h2>Listing {this.props.category}</h2></div>
          <div className="employees">
            <Create
              locations={this.props.locations}
              getAllEmployees={this.props.getAllEmployees}
              onCreateSubmit={this.props.onCreate}/>

            {
              this.props.employees.length > 0 ? (
                this.props.employees.map(employee => {
                  return (
                    <Employee
                        key={employee.id}
                        id={employee.id}
                        name={employee.name}
                        email={employee.email}
                        phone={employee.phone}
                        image={employee.image}
                        position={employee.position}
                        location={employee.location}
                        locations={this.props.locations}

                        getAllEmployees={this.props.getAllEmployees}
                        onEditSubmit={this.props.onEdit}
                        onDeleteSubmit={this.props.onDelete}/>
                  )
                })
              ) :(<div className="no-employee-msg"><p> There are currently no Employees</p></div>)
            }
          </div>
        </div>
      </div>
    );
  }
};

export default withRouter(Employees);
