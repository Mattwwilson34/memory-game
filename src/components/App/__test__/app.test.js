import React from 'react';
import ReactDOM from 'react-dom';
import App from '../../App/App';

import { render, cleanup, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import TestRenderer from 'react-test-renderer';
afterAll(cleanup);

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
