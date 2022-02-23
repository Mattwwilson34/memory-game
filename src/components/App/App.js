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
      const data = await fetchPokemon(36);
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
    const cardIndex = cardsClicked.findIndex((name) => name === pokemonName);
    return cardIndex !== -1 ? reset() : false;
  };

  const reset = () => {
    if (highScore < score) {
      setHighScore(score);
    }
    setScore(0);
    setCardsClicked([]);
    shuffleCards();
    return true;
  };

  // checks for an unwinnable board
  const checkForUnwinnable = (copyPokemonArray) => {
    // convert pokemon objects to name array
    const pokeNames = copyPokemonArray.map((x) => x.name);

    // check each name against pokemon already clicked on
    const truthArray = pokeNames.map((name) => cardsClicked.includes(name));

    // if all elements are true the board is unplayable
    return truthArray.every((x) => x === true);
  };

  const displayCards = (numberOfCards) => {
    if (isLoading) {
      return <div className='Loading'>Content Loading...</div>;
    } else {
      // reduce number of pokemon cards displayed
      let copyPokemonArray = pokemon.slice(pokemon.length - numberOfCards);

      // check if board is unwinnable if not reshuffle cards
      if (score >= 12) {
        while (checkForUnwinnable(copyPokemonArray)) {
          shuffleCards();
          copyPokemonArray = pokemon.slice(pokemon.length - numberOfCards);
        }
      }

      // rreturn pokemon card components
      return copyPokemonArray.map((pokemon) => {
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
      <div className='CardContainer'>{displayCards(12)}</div>
    </div>
  );
}

export default App;

// Must make sure that a card is a winning card
// after splice run pokemon names against pokemonNames array for comparison if at least 1 poekmon name is not present proceed if not reshuffle.
