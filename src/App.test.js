import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import SocialNetwork from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SocialNetwork />, div);
  ReactDOM.unmountComponentAtNode(div);
});
