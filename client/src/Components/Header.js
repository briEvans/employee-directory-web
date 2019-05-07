import React, { Component } from 'react';

import '../App.scss';

class Header extends Component {
    render() {
      return (
        <header className="app-header">
          <a className="app-header-logo" href="/" alt="Employee Director"> .</a>
          <span className="app-header-user"></span>
          <div className="search search-small">
            <form className="app-header-search" onSubmit={this.onSubmit}>
              <input
                type="text"
                placeholder="John Doe..."
                ref={query => {this.query = query}}
              />
            </form>
            </div>
        </header>
    );
  };
};

export default Header;
