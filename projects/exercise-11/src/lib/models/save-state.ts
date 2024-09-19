import {Ship} from "./ship";

export class SaveState {
  public ship!: Ship;

  public save(ship: Ship): void {
    this.ship = ship;
  }
}
