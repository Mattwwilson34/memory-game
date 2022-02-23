import React from 'react';
import reactDOM from 'react-dom';
import Card from '../../Card/Card';

import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

afterAll(cleanup);

const pokemon = {
  name: 'squirtle',
  img: 'www.image.com',
};

it('renders without crashing', () => {
  const div = document.createElement('div');
  reactDOM.render(<Card pokemon={pokemon} />, div);
  reactDOM.unmountComponentAtNode(div);
});

it('Handles click event if not gameover', () => {
  const updateCardsClicked = jest.fn();
  const updateScore = jest.fn();
  const shuffleCards = jest.fn();
  const checkIfGameOver = jest.fn().mockImplementation(() => false);

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

  expect(updateCardsClicked).toHaveBeenCalled();
  expect(updateScore).toHaveBeenCalled();
  expect(shuffleCards).toHaveBeenCalled();
  expect(checkIfGameOver).toHaveBeenCalled();
});

it('Handles click event if game over', () => {
  const updateCardsClicked = jest.fn();
  const updateScore = jest.fn();
  const shuffleCards = jest.fn();
  const checkIfGameOver = jest.fn().mockImplementation(() => true);

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

  expect(updateCardsClicked).toHaveBeenCalled();
  expect(updateScore).toHaveBeenCalledTimes(0);
  expect(shuffleCards).toHaveBeenCalledTimes(0);
  expect(checkIfGameOver).toHaveBeenCalledTimes(1);
});
