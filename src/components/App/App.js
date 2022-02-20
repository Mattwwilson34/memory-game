import './App.css';
import React, { useState, useEffect } from 'react';
import Header from '../Header/Header';
import Card from '../Card/Card';
import fetchPokemon from '../../Utils/fetch-pokemon';
import shuffleArray from '../../Utils/shuffle-array';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [pokemon, setPokemon] = useState([]);
  const [cardsClicked, setCardsClicked] = useState([]);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  useEffect(() => {
    (async () => {
      const data = await fetchPokemon(8);
      shuffleArray(data);
      setIsLoading(false);
      setPokemon(data);
    })();
  }, []);

  const shuffleCards = () => {
    const pokemonArray = [...pokemon];
    setPokemon(shuffleArray(pokemonArray));
  };

  const updateScore = () => setScore(score + 1);

  const updateCardsClicked = (pokemonName) => {
    const copyCardsClicked = [...cardsClicked];
    copyCardsClicked.push(pokemonName);
    setCardsClicked([...copyCardsClicked]);
  };

  const checkIfGameOver = (pokemonName) => {
    console.log(cardsClicked);
    const cardIndex = cardsClicked.findIndex((name) => name === pokemonName);
    return cardIndex !== -1 ? reset() : false;
  };

  const reset = () => {
    setHighScore(score);
    setScore(0);
    setCardsClicked([]);
    shuffleCards();
    return true;
  };

  const displayCards = () => {
    if (isLoading) {
      return <div>Content Loading...</div>;
    } else {
      return pokemon.map((pokemon) => {
        return (
          <Card
            key={pokemon.id}
            pokemon={pokemon}
            updateCardsClicked={updateCardsClicked}
            updateScore={updateScore}
            shuffleCards={shuffleCards}
            checkIfGameOver={checkIfGameOver}
          />
        );
      });
    }
  };

  return (
    <div className='App' data-testid='App'>
      <Header score={score} highScore={highScore} />
      <div className='CardContainer'>{displayCards()}</div>
    </div>
  );
}

export default App;
