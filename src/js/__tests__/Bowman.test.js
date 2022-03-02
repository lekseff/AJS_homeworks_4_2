import Bowman from '../Heroes/Bowman';

test('Create Bowman', () => {
  const received = new Bowman('Legolas');
  const expected = {
    name: 'Legolas',
    type: 'Bowman',
    level: 1,
    health: 100,
    attack: 25,
    defence: 25,
  };
  expect(received).toEqual(expected);
});
