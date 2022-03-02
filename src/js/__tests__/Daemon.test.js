import Daemon from '../Heroes/Daemon';

test('Create Daemon', () => {
  const received = new Daemon('Gollum');
  const expected = {
    name: 'Gollum',
    type: 'Daemon',
    level: 1,
    health: 100,
    attack: 10,
    defence: 40,
  };
  expect(received).toEqual(expected);
});
