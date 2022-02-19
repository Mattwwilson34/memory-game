import './App.css';
import React, { useState, useEffect } from 'react';
import Header from '../Header/Header';
import Card from '../Card/Card';
import fetchPokemon from '../../Utils/fetch-pokemon';
import shuffleArray from '../../Utils/shuffle-array';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await fetchPokemon(8);
      shuffleArray(data);
      setIsLoading(false);
      setPokemon(data);
    })();
  }, []);

  useEffect(() => {});

  const shuffleCards = () => {
    const pokemonArray = [...pokemon];
    setPokemon(shuffleArray(pokemonArray));
  };

  return (
    <div className='App' data-testid='App'>
      <Header />
      <div className='CardContainer'>
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          pokemon.map((pokemon) => {
            return (
              <Card
                key={pokemon.id}
                pokemon={pokemon}
                shuffleCards={shuffleCards}
              />
            );
          })
        )}
      </div>
    </div>
  );
}

export default App;
