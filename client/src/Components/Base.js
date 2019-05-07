import React, { Component } from 'react';
import { Link } from "react-router-dom";

import '../App.scss';

class Base extends Component {
  constructor(props) {
    super(props);

    this.state = {
      query: ''
    };

    this.onSearch = this.onSearch.bind(this);
};

  /* {@func} onSearch - Handler to send user to employees listing with input as the query.
   * @params {Object} ev the event
   */
  onSearch (ev) {
    ev.preventDefault();

    let queryPath;

    this.setState({
      query: this.inputQ.value
    }, () => {
      queryPath = '/employees?q=' + this.state.query;
      window.location = queryPath;
    });
  };

  render() {
    return (
      window.location.pathname === '/' ?
        (<div className="app-body">
        <h1>Employee Directory</h1>
          <div className="search search-large">
            <form className="product-form" onSubmit={this.onSearch}>
              <input
                type="text"
                placeholder="John Doe..."
                ref={inputQ => {this.inputQ = inputQ}}/>

              <button>Go</button>
            </form>
          </div>
        <ul className="app-nav">
          <li>
            <Link className="app-link bgTurq" to="/employees" >
              <span className="action">List Employees</span>
              <p> See all employees listed in alphabetical order by name</p>
            </Link>
          </li>
          <li>
            <Link className="app-link bgGrass" to="/locations">
              <span className="action">List Locations</span>
              <p>See all Locations listed in alphabetical order in the company</p>
          </Link>
          </li>
          <li>
            <Link className="app-link bgLime" to="/departments">
              <span className="action">List Departments</span>
                <p> See all Departments listed in alphabetical order in the company</p>
              </Link>
          </li>
        </ul>
      </div>)
      : (<div className="bg"></div>)
    );
  };
};

export default Base;
