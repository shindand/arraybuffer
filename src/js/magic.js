class Magician {
  constructor(power) {
    this.attack = 100;
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
    return this.power;
  }
  set stoned(square) {
    this.power = (this.attack / 100) * this.damage[square] -
      Math.log(square).toFixed(0) * 5;
  }
}

let mag = new Magician();
mag.stoned = 2;
console.log(mag.power);
