import './App.css';
import React, { useState, useEffect } from 'react';
import Header from '../Header/Header';
import Card from '../Card/Card';
import fetchPokemon from '../../Utils/fetch-pokemon';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [pokemon, setPokemon] = useState([]);

  // const fetchPokemon = async () => {
  //   const promises = [];
  //   for (let i = 1; i <= 3; i++) {
  //     const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
  //     const response = await fetch(url);
  //     const data = await response.json();
  //     promises.push(data);
  //   }
  //   const results = await Promise.all(promises);
  //   const pokemon = results;
  //   const pokemonImages = [];
  //   setIsLoading(false);
  //   setPokemon(pokemon);
  //   console.log(pokemon);
  //   pokemon.forEach((pokemon) =>
  //     pokemonImages.push(pokemon.sprites['front_default'])
  //   );
  //   console.log(pokemonImages);
  //   setPokemonImages(pokemonImages);
  // };

  useEffect(() => {
    (async () => {
      const data = await fetchPokemon(3);
      setIsLoading(false);
      setPokemon(data);
    })();
  }, []);

  return (
    <div className='App' data-testid='App'>
      <Header />
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        pokemon.map((pokemon) => {
          return <Card pokemon={pokemon} />;
        })
      )}
    </div>
  );
}

export default App;
