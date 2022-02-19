export default async function fetchPokemon() {
  const url = `https://pokeapi.co/api/v2/pokemon/1`;
  const pokemonArray = [];
  try {
    for (let i = 1; i <= 3; i++) {
      const response = await fetch(url);
      const data = await response.json();
      const pokemon = {
        id: data.id,
        name: data.name,
      };
      pokemonArray.push(pokemon);
      return pokemonArray;
    }
  } catch (error) {
    console.log(error);
  }
}
