import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import { mount, shallow, render } from 'enzyme';

import Employees from '../Employees';

const baseProps = {
  'employees': [
    {
      "name":"Jennifer White",
      "position":"Software Engineer II",
      "email":"bevans@company.com",
      "phone":"555-5555",
      "location":"Austin, Texas",
      "image":"https://randomuser.me/api/portraits/women/3.jpg",
      "id":"_c1wjwpsrz"
    },
    {
      "id":"_40oqpfswf",
      "name":"Joseph Gray",
      "position":"Business Development Lead",
      "email":"jg@gmail.com",
      "phone":"555-5555",
      "location":"Austin, Texas",
      "image":"https://randomuser.me/api/portraits/men/38.jpg"
    }
  ]
};

describe("Employees component", () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    <Router>
      ReactDOM.render(<Employees
        {...baseProps}/>, div);
    </Router>
    ReactDOM.unmountComponentAtNode(div);
  });

  test("it matches the snapshot", () => {
    const component = shallow(<Employees
      {...baseProps}/>);
    expect(component).toMatchSnapshot();
  });
});
