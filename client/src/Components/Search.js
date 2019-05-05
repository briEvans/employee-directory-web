import React, { Component } from 'react';
import '../App.scss';

class Search extends Component {
    render() {
      return (
          <div className="search search-large">
            <form className="product-form" onSubmit={this.onSubmit}>
              <input
                type="text"
                placeholder="John Doe..."
                ref={query => {this.query = query}}
              />
            <button>Go</button>
            </form>
          </div>
        )
      };
    };

export default Search;
