import React, { Component } from 'react';
class Create extends Component {
  constructor(props) {
    super(props);

      this.state = {
        isCreateMode : false
      };

      this.getAllEmployees = props.getAllEmployees.bind(this);
      this.onCreate = this.onCreate.bind(this);
      this.onCreateSubmit = this.onCreateSubmit.bind(this);
      this.uploadPhoto = this.uploadPhoto.bind(this);
  };

  /* {@func} onCreate - Update isCreateModeState
   * @params {Object} ev the event
   */
  onCreate() {
     this.setState({ isCreateMode: true });
  };

  /* {@func} onCreateSubmit - Massage data, call parent edit handler, refresh data
   * @params {Object} ev the event
   */
  onCreateSubmit(ev) {
   ev.preventDefault();

   const newVals = {
       name: this.nameInput.value,
       position: this.positionInput.value,
       email: this.emailInput.value,
       phone: this.phoneInput.value,
       location: this.locationInput.value,
       image: this.uploadPhoto(this.genderInput.value)
    };

    this.props.onCreateSubmit(newVals);
    this.props.getAllEmployees();
    this.setState({isCreateMode: false});
  };

  /* {@func} uploadPhoto - (Mock) Randomly generates user photos based on genders
   * @params {Object} ev the event
   */
   uploadPhoto (gender) {
     let min = 1;
     let max = 50;
     let urlGender;
     let url = 'https://randomuser.me/api/portraits/lego/8.jpg'; // Default user image
     let randomInt;

     if (gender) {
       urlGender = gender === 'male' ? 'men' : 'women';
       randomInt = Math.floor(Math.random() * (max - min + 1) + min);
       url = 'https://randomuser.me/api/portraits/' + urlGender + '/' + randomInt + '.jpg';
     }

     return url;
  };

  render () {
    return (
      <div>
        {
          this.state.isCreateMode ?
          (
            <div className="employee">
              <form onSubmit={this.onCreateSubmit}>

                <input className="employee-name"
                  placeholder="Name"
                  ref={nameInput => this.nameInput = nameInput}
                  defaultValue=""/>

                <input className="employee-detail"
                  placeholder="Position"
                  ref={positionInput => this.positionInput = positionInput}
                  defaultValue=""/>

                <input className="employee-detail"
                  placeholder="Email"
                  ref={emailInput => this.emailInput = emailInput}
                  defaultValue=""/>

                <input className="employee-detail"
                  placeholder="Phone"
                  ref={phoneInput => this.phoneInput = phoneInput}
                  defaultValue=""
                />

                <select className="employee-detail" ref={locationInput => this.locationInput = locationInput}>
                  {this.props.locations.map((location) =>
                    <option
                      defaultValue={location.name}
                      key={location.name}
                      value={location.name}>{location.name}
                     </option>
                  )}
                </select>

                <select className="employee-detail" ref={genderInput => this.genderInput = genderInput}>
                  <option
                    value="male"
                    defaultValue="male">Male
                  </option>

                  <option
                    value="female"
                    defaultValue="female">Female
                  </option>
                </select>

                <button className="btn-crud create">Create</button>
              </form>
            </div>)
          : (<div className="employee prototype" onClick={this.onCreate}> <p>Create a new employee </p></div>)
        }
      </div>
    );
  };
}

export default Create;
