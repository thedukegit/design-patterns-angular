import {HolidayBehaviourInterface} from "../holiday-behaviour.interface";
import {Ship} from "../ship";

export class FourthOfJuly implements HolidayBehaviourInterface {
  private ship: Ship;

  public constructor(ship: Ship) {
    this.ship = ship;
  }

  public getIntoHolidaySpirit(): void {
    this.ship.fireFireworks();
  }
}
