import {Memento} from "./memento";

export class Ship {
  public shields: number = 0;

  public increaseShields(): void {
    this.shields += 10;
  }

  public createMemento(): Memento {
    return new Memento(this.shields);
  }

  public restoreMemento(memento: Memento): void {
    this.shields = memento.getState();
  }
}
