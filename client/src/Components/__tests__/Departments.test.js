import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import { mount, shallow, render } from 'enzyme';

import Departments from '../Departments';

describe("Departments component", () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    <Router>
      ReactDOM.render(<Departments
        departments={['Department 1', 'Department2', 'Department3']}/>, div);
    </Router>
    ReactDOM.unmountComponentAtNode(div);
  });

  test("it matches the snapshot", () => {
    const component = shallow(<Departments
      departments={['Department 1', 'Department2', 'Department3']}/>);
    expect(component).toMatchSnapshot();
  });
});
