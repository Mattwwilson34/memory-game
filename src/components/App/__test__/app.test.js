import React from 'react';
import ReactDOM from 'react-dom';
import App from '../../App';

import { render, cleanup, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import TestRenderer from 'react-test-renderer';
afterAll(cleanup);

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders App correctly', () => {
  render(<App />);
  expect(screen.getByTestId('App')).toHaveTextContent('Test');
});

it('matches snapshot', () => {
  const tree = TestRenderer.create(<App />).toJSON();
  expect(tree).toMatchSnapshot();
});
