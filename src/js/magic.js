class War {
  constructor(power, damage) {
    this.power = power;
    this.damage = {
      1: 100,
      2: 90,
      3: 80,
      4: 70,
      5: 60,
    }

  get stoned() {
    return this.power;
  }
  set stoned() {
    this.power = (this.attack / 100) * this.damage[this.square] -
      Math.log(this.square).toFixed(0) * 5;
  }
}

class Magician extends War{
  constructor(power, damage, attack, square){
    super(power, damage);
    this.attack = attack;
    this.square = square;
  }
}

let mag = new Magician(100, 2);
console.log(mag.stoned);
