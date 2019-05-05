import React, { Component } from 'react';

class Employee extends Component {
  constructor(props) {
     super(props);

     this.state = {
       isEdit : false
     }

     this.onEdit = this.onEdit.bind(this);
     this.onEditSubmit = this.onEditSubmit.bind(this);
     this.onDelete = this.onDelete.bind(this);
   };

   onDelete() {
     this.props.onDelete(this.props.id);
   };

   onEdit() {
     this.setState({ isEdit: true });
   };

   onEditSubmit(ev) {
     ev.preventDefault();

     this.props.onEditSubmit(this.nameInput.value,
       this.positionInput.value,
       this.emailInput.value,
        this.phoneInput.value,
        this.locationInput.value,
     this.props.name);

     this.setState({isEdit: false});
   };
  render() {
    const { id, name, email, phone, position, location , image } = this.props;
    return (
      <div className="employee">
        {
          this.state.isEdit
          ? (
            <form onSubmit={this.onEditSubmit}>
            <img className="employee-image" src={image} alt="Photo of {name}" />
            <div className="employee-details">

              <input className="employee-name"
                placeholder="Name"
                ref={nameInput => this.nameInput = nameInput}
                defaultValue={name}
              />
              <input className="employee-detail"
                placeholder="Position"
                ref={positionInput => this.positionInput = positionInput}
                defaultValue={position}
              />
              <input className="employee-detail"
                placeholder="Email"
                ref={emailInput => this.emailInput = emailInput}
                defaultValue={email}
              />
              <input className="employee-detail"
                placeholder="Phone"
                ref={phoneInput => this.phoneInput = phoneInput}
                defaultValue={phone}
              />
              <select className="employee-detail">
                <option value="Austin">Austin</option>
                  <option value="Sanjose">Sanjose</option>
                  <option value="Tokyo">Tokyo</option>
                ref={locationInput => this.locationInput = locationInput}
                defaultValue={location}
              </select>
            </div>
            <button className="btn-crud">Save</button>
            </form>)
           : (
            <div>
              <img className="employee-image" src={image} alt="Photo of {name}" />
              <div className="employee-details">
                <h3 className="employee-name">{name}</h3>
                <span className="employee-detail colorTurq font-bold">{position}</span>

                <span className="employee-detail"> {email}</span>
                <span className="employee-detail">☎ {phone}</span>
                <span className="employee-detail">{location}</span>
              </div>
              <button className="btn-crud" onClick={this.onDelete}>Delete</button>
              <button className="btn-crud" onClick={this.onEdit}>Edit</button>

            </div>
          )
        }
      </div>
    );
  };
}

export default Employee;
