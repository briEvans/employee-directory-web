import React, { Component } from 'react';

import '../App.scss';

class Header extends Component {
    render() {
      return (
        <header className="app-header">
          <a className="app-logo" href="/"></a>
          <span className="add"></span>
          <span className="user"></span>
          <div className="search search-small">
            <form className="header-search" onSubmit={this.onSubmit}>
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
