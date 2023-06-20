class Magician {
  constructor(att, square, damage, power) {
    this.att = att;
    this.square = square;
    this.power = power;
    this.damage = {
      1: 100,
      2: 90,
      3: 80,
      4: 70,
      5: 60,
    };
  }
  get stoned() {
    return this.square;
  }
  set stoned(square) {
    return square;
  }

  get attack() {
    this.power =
      (this.att / 100) * this.damage[this.square] -
      Math.log(this.square).toFixed(0) * 5;
    return this.power;
  }
  set attack(att) {
    return att;
  }
}

class Daemon extends Magician {
  constructor(att, square, damage, power) {
    super(att, square, damage, power);
  }
}

let mag = new Magician(100, 4);
console.log(mag.attack);
let dem = new Daemon(90, 2);
console.log(dem.attack);
