const POKEMON = [
  {
    id: 1,
    img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png',
    name: 'bulbasaur',
  },
];

export default async function fetchPokemon(numberOfPokemon) {
  return Promise.resolve(POKEMON);
}
