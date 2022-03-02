import Character from '../module/Character';

describe('Тест класса Character', () => {
  const testType = 'Zombie';
  test('Валидация имени героя', () => {
    function errorChecking() {
      return new Character('_', '');
    }

    expect(errorChecking).toThrowError(new Error('Неверное имя героя'));
  });

  test('Валидация типа героя', () => {
    function errorChecking() {
      return new Character('name', '');
    }

    expect(errorChecking).toThrowError(new Error('Неверный тип героя'));
  });

  test('Повышение уровня (levelUp)', () => {
    const hero = new Character('Shon', testType);
    const expected = {
      name: 'Shon',
      type: testType,
      level: 2,
      health: 100,
      attack: 48,
      defence: 12,
    };
    hero.health = 50;
    hero.attack = 40;
    hero.defence = 10;
    hero.levelUp();
    expect(hero).toEqual(expected);
  });

  test('Повышение уровня (levelUp) - Ошибка', () => {
    const hero = new Character('name', testType);

    function checkLevelUp() {
      hero.health = 0;
      hero.levelUp();
    }

    expect(checkLevelUp).toThrowError(new Error('Нельзя повысить уровень умершему герою'));
  });

  test('Расчет урона героя', () => {
    const hero = new Character('name', testType);
    hero.attack = 40;
    hero.defence = 10;
    hero.damage(20);
    expect(hero.health).toBe(82);
  });

  test('Расчет урона героя - Ошибка', () => {
    const hero = new Character('name', testType);

    function checkDamage() {
      hero.health = -1;
      hero.damage(20);
    }

    expect(checkDamage).toThrowError(new Error('Нельзя нанести урон погибшему герою'));
  });
});
