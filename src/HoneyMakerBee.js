const Bee = require('./Bee');

class HoneyMakerBee extends Bee {
  // TODO..
  constructor(food, color) {
    super(food, color);
    this.age = 10;
    this.job = 'make honey';
    this.canFly = true;
    this.treasureChest = [];
    this.honeyPot = 0;
  }

  makeHoney() {
    this.honeyPot++;
  }

  giveHoney() {
    this.honeyPot--;
  }
}

module.exports = HoneyMakerBee;
