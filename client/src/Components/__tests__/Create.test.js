import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount, render } from 'enzyme';

import Create from '../Create';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders a name input', () => {
  expect(shallow(<Create />).find('#email').length).toEqual(1)
});

it('renders a email input', () => {
  expect(shallow(<Create />).find('#password').length).toEqual(1)
});

it('renders a position input', () => {
  expect(shallow(<Create />).find('#password').length).toEqual(1)
});

// within the Login components describe function
describe('Email input', () => {

  it('should respond to change event and change the state of the Login Component', () => {

   const wrapper = shallow(<Login />);
   wrapper.find('#email').simulate('change', {target: {name: 'email', value: 'blah@gmail.com'}});

  expect(wrapper.state('email')).toEqual('blah@gmail.com');
  })
 })

 describe('Password input', () => {

  it('should respond to change event and change the state of the Login Component', () => {

   const wrapper = shallow(<Login />);
   wrapper.find('#password').simulate('change', {target: {name: 'password', value: 'cats'}});

   expect(wrapper.state('password')).toEqual('cats');
  })
 })
