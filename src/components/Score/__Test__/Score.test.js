import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';

import Score from '../../Score/Score';

import { cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';

afterAll(cleanup);

it('renders without crashing', () => {
  const div = document.createElement('div');
  render(<Score />, div);
  unmountComponentAtNode(div);
});

it('renders without score', () => {
  const div = document.createElement('div');
  render(<Score />, div);
  expect(div.textContent).toBe('Chose a pokemon');
  unmountComponentAtNode(div);
});

it('renders with', () => {
  const div = document.createElement('div');
  render(<Score score={'0'} />, div);
  expect(div.textContent).toBe('Score: 0');
  unmountComponentAtNode(div);
});
