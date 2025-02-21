import {CommandInterface} from "./command.interface";
import {Ship} from "./ship";

export class FireBlastersCommand implements CommandInterface {
  private ship: Ship;

  public constructor(ship: Ship) {
    this.ship = ship;
  }

  public execute(): void {
    this.ship.fireBlasters();
  }
}
