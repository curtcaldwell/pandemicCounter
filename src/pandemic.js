export class Pandemic {
  constructor(name) {
    this.name = name;
    this.healthy = 100000;
    this.infected = 0;

  }

  popManipulator() {
      setInterval(() => {
        this.healthy--;
        this.infected++;
        document.getElementById('population').innerHTML = this.healthy;
        document.getElementById('infected').innerHTML = this.infected;
      }, 1);
    }

  popZero() {
    if (this.healthy > 0) {
      return false;
    } else {
      return true;
    }
  }
  curePop() {
    this.healthy = 100000;
    this.infected = 0;
  }
  medicine() {
    this.healthy += 100;
    this.infected -= 100;
  }
  mutation() {
    this.healthy -= 1000;
    this.infected += 1000
  }
  nuke() {
    this.healthy = 0;
    this.infected = 0;
  }
}
