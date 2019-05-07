import React, { Component } from 'react';

// Internal Routes
import '../App.scss';

class Departments extends Component {
  render() {
    return (
      <div className="app-body">
        <div className="container">
          <div className="header"><h2>Listing {this.props.category}</h2></div>
          <div className="employees">
            {
              this.props.departments.length > 0 ? (
                this.props.departments.map(item => {
                  return (
                    <div className="department">
                          <h3>{item}</h3>
                    </div>
                  );
                })
              ) : (<div className="employees"><h4> There are no Departments</h4></div>)
            }
          </div>
        </div>
      </div>
    );
  }
};

export default Departments;
