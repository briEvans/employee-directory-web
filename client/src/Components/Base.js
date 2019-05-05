import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Search from './Search';

import '../App.scss';

class Base extends Component {
    render() {
      return (
        window.location.pathname === '/' ?
          (<div className="app-body">
          <span className="welcome">
            <p>Hello Admin User. This is a reminder that as an ADMIN user, you have the ability to <span class="colorTurq">create and remove employees</span></p></span>
          <h1>Employee Directory</h1>
          <Search />
          <ul className="nav">
            <li>
              <Link className="app-link bgTurq" to="/employees" >
                <span className="action">List Employees</span>
                <p> See all employees listed in alphabetical order by name</p>
              </Link>
            </li>
            <li>
              <Link className="app-link bgGrass" to="/departments">
                <span className="action">List Departments</span>
              <p> See all Departments listed in alphabetical order in the company</p>
            </Link>
            </li>
            <li>
              <Link className="app-link bgLime" to="/locations">
                <span className="action">List Locations</span>
                <p>See all Locations listed in alphabetical order in the company</p>
                </Link>
            </li>
          </ul>
        </div>)
      :
        (<div className="bg"></div>)
    );
  };
};

export default Base;
