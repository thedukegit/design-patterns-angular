export class Memento {
  private shields: number = 0;

  public constructor(shields: number) {
    this.shields = shields;
  }

  public getState(): number {
    return this.shields;
  }

}
