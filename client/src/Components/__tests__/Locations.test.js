import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import { mount, shallow, render } from 'enzyme';

import Locations from '../Locations';

const baseProps = {
  'locations': [
    {
      "id": 1,
      "name": "Austin, Texas",
      "image": "https://www.mymilestone.com/blog/wp-content/uploads/2017/12/forecast-1.jpg"
    },
    {
      "id": 2,
      "name": "San Jose, California",
      "image": "https://www.valleyinnsanjose.com/gallery-images/properties/5/0/1/1540545718_attractions_1.jpg"

    },
    {
      "id": 3,
      "name": "Tokyo, Japan",
      "image": "https://www.telegraph.co.uk/content/dam/Travel/Destinations/Asia/Japan/Tokyo/tokyo-city-scape.jpg?imwidth=450"
    }
  ]
};

describe("Locations component", () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    <Router>
      ReactDOM.render(<Locations
        {...baseProps}/>, div);
    </Router>
    ReactDOM.unmountComponentAtNode(div);
  });

  test("it matches the snapshot", () => {
    const component = shallow(<Locations
      {...baseProps}/>);
    expect(component).toMatchSnapshot();
  });
});
