import Magician from '../Heroes/Magician';

test('Create Magician', () => {
  const received = new Magician('Gandalf');
  const expected = {
    name: 'Gandalf',
    type: 'Magician',
    level: 1,
    health: 100,
    attack: 10,
    defence: 40,
  };
  expect(received).toEqual(expected);
});
