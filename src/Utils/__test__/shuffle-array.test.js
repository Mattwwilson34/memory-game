import shuffleArray from '../shuffle-array';

it('returns a shuffled array', () => {
  const testArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const shuffledArray = shuffleArray(testArray);
  expect(shuffledArray[0]).not.toBe(1);
});
