import fetchPokemon from './fetch-pokemon';
jest.mock('./fetch-pokemon');

const POKEMON = [
  {
    id: 1,
    img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png',
    name: 'bulbasaur',
  },
];

it('Mocks the API call', async () => {
  const response = await fetchPokemon(1);
  expect(response).toStrictEqual(POKEMON);
});
