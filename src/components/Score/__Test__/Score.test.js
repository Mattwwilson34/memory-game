import React from 'react';
import ReactDOM from 'react-dom';
import Score from '../../Score/Score';

import { render, cleanup, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

afterAll(cleanup);

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Score />, div);
  ReactDOM.unmountComponentAtNode(div);
});
