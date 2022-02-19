export default async function fetchPokemon(numberOfPokemon) {
  // holds each pokemon promise
  const pokemonPromises = [];

  // call pokeAPI and stores promise
  for (let i = 1; i <= numberOfPokemon; i++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      const pokemon = {
        id: data.id,
        name: data.name,
        img: data.sprites.other['official-artwork']['front_default'],
      };
      pokemonPromises.push(pokemon);
    } catch (error) {
      console.log(error);
    }
  }

  // wait for all pokemon promises to resolve
  try {
    return await Promise.all(pokemonPromises);
  } catch (error) {
    console.log(error);
  }
}
