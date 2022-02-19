export default async function fetchPokemon(numberOfPokemon) {
  // holds each pokemon promise
  const promises = [];

  // call pokeAPI and stores promise
  for (let i = 1; i <= numberOfPokemon; i++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
    const response = await fetch(url);
    const data = await response.json();
    promises.push(data);
  }

  // wait for all pokemon promises to resolve
  const results = await Promise.all(promises);

  // extract pokemon ID, Name, image source
  const pokemonArray = [];
  results.forEach((pokemon) => {
    pokemonArray.push({
      id: pokemon.id,
      name: pokemon.name,
      img: pokemon.sprites.other['official-artwork']['front_default'],
    });
  });
  console.log(pokemonArray);

  return pokemonArray;
}
