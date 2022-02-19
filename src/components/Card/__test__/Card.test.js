import React from 'react';
import ReactDOM from 'react-dom';
import Card from '../../Card/Card';

import { render, cleanup, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

afterAll(cleanup);

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Card />, div);
  ReactDOM.unmountComponentAtNode(div);
});
