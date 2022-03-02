export default class Character {
  // static types = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];
  constructor(name, type) {
    if (name.length < 2 || name.length > 10) {
      throw new Error('Неверное имя героя');
    } else {
      this.name = name;
    }

    if (!(['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'].includes(type))) {
      throw new Error('Неверный тип героя');
    } else {
      this.type = type;
    }

    this.health = 100;
    this.level = 1;

    this.attack = undefined;
    this.defence = undefined;
  }

  levelUp() {
    if (this.health <= 0) {
      throw new Error('Нельзя повысить уровень умершему герою');
    }
    this.level += 1;
    this.health = 100;
    this.attack *= 1.2; // Увеличиваем атаку на 20%
    this.defence *= 1.2; // Увеличиваем защиту на 20%
  }

  damage(points) {
    if (this.health < 0) {
      throw new Error('Нельзя нанести урон погибшему герою');
    }
    this.health -= points * (1 - this.defence / 100);
  }
}
