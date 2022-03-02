import Swordsman from '../Heroes/Swordsman';

test('Create Swordsman', () => {
  const received = new Swordsman('Aragorn');
  const expected = {
    name: 'Aragorn',
    type: 'Swordsman',
    level: 1,
    health: 100,
    attack: 40,
    defence: 10,
  };
  expect(received).toEqual(expected);
});
