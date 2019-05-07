import React, { Component } from 'react';
class Employee extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isEdit : false
    };

    this.getAllEmployees = props.getAllEmployees.bind(this);
    this.onEdit = this.onEdit.bind(this);
    this.onEditSubmit = this.onEditSubmit.bind(this);
    this.onDelete = this.onDelete.bind(this);
    this.onDeleteSubmit = this.props.onDeleteSubmit.bind(this);
  };

  /* {@func} onEdit - Update isEdit state
   */
   onEdit() {
     this.setState({ isEdit: true });
   };

   /* {@func} onEditSubmit - Massage data, call parent edit handler, refresh data
    * @params {Object} ev the event
    */
    onEditSubmit(ev) {
      ev.preventDefault();

      const newVals = {
        id: this.idInput.value,
        name: this.nameInput.value,
        position: this.positionInput.value,
        email: this.emailInput.value,
        phone: this.phoneInput.value,
        location: this.locationInput.value,
        image: this.imageInput.value
      };

      this.props.onEditSubmit(newVals);
      this.props.getAllEmployees();
      this.setState({isEdit: false});
   };
   /* {@func} onEditDelete - Massage data, call parent delete handler, refresh data
    * @params {Object} ev the event
    */
   onDelete(ev) {
     ev.preventDefault();

     this.props.onDeleteSubmit(this.props.id);
     this.props.getAllEmployees();
   };

   render() {
     const { id, name, email, phone, position, location , image } = this.props;
     return (
       <div className="employee">
        {
          this.state.isEdit
          ? (
            <form onSubmit={this.onEditSubmit}>
              <img className="employee-image" src={image} alt={name}/>
              <div className="employee-details">

                <input type="hidden"
                  ref={imageInput => this.imageInput = imageInput}
                  defaultValue={image}/>

                <input type="hidden"
                  ref={idInput => this.idInput = idInput}
                  defaultValue={id}/>


                <input className="employee-name"
                  placeholder="Name"
                  ref={nameInput => this.nameInput = nameInput}
                  defaultValue={name}/>

                <input className="employee-detail"
                  placeholder="Position"
                  ref={positionInput => this.positionInput = positionInput}
                  defaultValue={position}/>

                <input className="employee-detail"
                  placeholder="Email"
                  ref={emailInput => this.emailInput = emailInput}
                  defaultValue={email}/>

                <input className="employee-detail"
                  placeholder="Phone"
                  ref={phoneInput => this.phoneInput = phoneInput}
                  defaultValue={phone}/>

                <select className="employee-detail" ref={locationInput => this.locationInput = locationInput}>
                  {this.props.locations.map((location) =>
                    <option
                      defaultValue={location.name}
                      key={location.name}
                      value={location.name}>{location.name}
                    </option>)
                  }
                </select>
              </div>

              <button className="btn-crud">Save</button>
            </form>)
           : (
            <div>
              <img className="employee-image" src={image} alt={name}/>

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
