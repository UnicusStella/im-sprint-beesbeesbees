const Bee = require('./Bee');

class ForagerBee extends Bee {
  // TODO..
  constructor(color, food) {
    super(food, color);
    this.age = 10;
    this.job = 'find pollen';
    this.canFly = true;
    this.treasureChest = [];
  }

  forage() {
    this.treasureChest = ['pollen', 'flowers', 'gold'];
  }
}

module.exports = ForagerBee;
