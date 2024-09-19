export class Ship {
  public shields: number = 0;

  public increaseShields(): void {
    this.shields += 10;
  }
}
