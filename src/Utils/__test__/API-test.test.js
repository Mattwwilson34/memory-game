import fetchPokemon from './API-test';

beforeEach(() => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve({ id: 1, name: 'bulbasaur' }),
    })
  );
});

it('Works', async () => {
  const pokemon = await fetchPokemon();

  expect(pokemon[0].id).toEqual(1);
  expect(pokemon[0].name).toEqual('bulbasaur');
});
