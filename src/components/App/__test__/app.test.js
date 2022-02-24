import React from 'react';
import ReactDOM from 'react-dom';
import App from '../../App/App';
import Card from '../../Card/Card';

import { render, cleanup, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

afterAll(cleanup);

const pokemon = {
  name: 'squirtle',
  img: 'www.image.com',
};

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('shuffle cards is called', () => {
  render(<App />);

  const updateCardsClicked = jest.fn();
  const updateScore = jest.fn();
  const shuffleCards = jest.fn();
  const checkIfGameOver = jest.fn().mockImplementation(() => false);
  const reset = jest.fn();
  const displayCards = jest.fn();

  render(
    <Card
      pokemon={pokemon}
      updateCardsClicked={updateCardsClicked}
      updateScore={updateScore}
      shuffleCards={shuffleCards}
      checkIfGameOver={checkIfGameOver}
    />
  );

  const pokemonCard = screen.getByTestId('Card');
  fireEvent.click(pokemonCard);
});
