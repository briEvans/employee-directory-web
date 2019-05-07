import React, { Component } from 'react';

// Internal Routes
import '../App.scss';

class Locations extends Component {

  render() {
    return (
      <div className="app-body">
        <div className="container">
          <div className="header"><h2>Listing {this.props.category}</h2></div>
          <div className="employees">
            {
              this.props.locations.length > 0 ? (
                this.props.locations.map(item => {
                  return (
                    <div className="location">
                      <img className="location-image" src={item.image} alt={item.name} />
                      <h3>{item.name}</h3>
                      <span className="location-detail">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                           Lorem Ipsum has been the industry's standard dummy text ever since the</span>
                    </div>
                  );
                })
              ) :(<div className="employees"><h4> There are no Locations</h4></div>)
            }
          </div>
        </div>
      </div>
    );
  }
};

export default Locations;
