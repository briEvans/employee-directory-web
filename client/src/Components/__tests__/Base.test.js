import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import { mount, shallow, render } from 'enzyme';

import Base from '../Base';

describe("Base component", () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    <Router>
      ReactDOM.render(<Base/>, div);
    </Router>
    ReactDOM.unmountComponentAtNode(div);
  });

  test("it matches the snapshot", () => {
    const component = shallow(<Base />);
    expect(component).toMatchSnapshot();
  });
});
