export class Ship {
  private shields: number;
  private firingSpeed: number;

  public constructor(shields: number, firingSpeed: number) {
    this.shields = shields;
    this.firingSpeed = firingSpeed;
  }

  public getShields(): number {
    return this.shields;
  }

  public getFiringSpeed(): number {
    return this.firingSpeed;
  }

  public increaseShields() {
    this.shields *= 1.2;
  }
}
