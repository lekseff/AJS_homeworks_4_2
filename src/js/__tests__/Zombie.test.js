import Zombie from '../Heroes/Zombie';

test('Create Zombie', () => {
  const received = new Zombie('Shon');
  const expected = {
    name: 'Shon',
    type: 'Zombie',
    level: 1,
    health: 100,
    attack: 40,
    defence: 10,
  };
  expect(received).toEqual(expected);
});
