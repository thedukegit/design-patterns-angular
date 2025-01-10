import {IteratorInterface} from "./iterator.interface";
import {Ship} from "../domain/ship/ship";

export class Iterator implements IteratorInterface {
  private ships: Array<Ship> = [];

  public constructor(ship: Ship) {
    // first add the ship itself
    this.addShip(ship);
    // then loop through all the subordinates and add each one
    this.processSubordinates(ship);
  }

  private processSubordinates(ship: Ship) {
    const subordinates = ship.getSubordinates();
    if (subordinates) {
      for (const subordinate of subordinates) {
        this.addShip(subordinate);
        this.processSubordinates(subordinate);
      }
    }
  }

  private addShip(ship: Ship): void {
    this.ships.push(ship)
  }

  public next(): Ship {
    const ship = this.ships.shift();
    if (ship) {
      return ship;
    }
    throw new Error('No more ships');
  }

  public hasNext(): boolean {
    return this.ships.length > 0;
  }
}
