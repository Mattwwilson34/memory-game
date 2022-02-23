import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import HighScore from '../../HighScore/HighScore';

import { cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';

afterAll(cleanup);

it('renders without crashing and without score', () => {
  const div = document.createElement('div');
  render(<HighScore />, div);
  unmountComponentAtNode(div);
});

it('renders with score', () => {
  const div = document.createElement('div');
  render(<HighScore highScore={'0'} />, div);
  expect(div.textContent).toBe('High Score: 0');
  unmountComponentAtNode(div);
});
