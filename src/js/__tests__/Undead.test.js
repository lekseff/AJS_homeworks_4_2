import Undead from '../Heroes/Undead';

test('Create Undead', () => {
  const received = new Undead('Fred');
  const expected = {
    name: 'Fred',
    type: 'Undead',
    level: 1,
    health: 100,
    attack: 25,
    defence: 25,
  };
  expect(received).toEqual(expected);
});
