import {HolidayBehaviourInterface} from "../holiday-behaviour.interface";
import {Ship} from "../ship";

export class Christmas implements HolidayBehaviourInterface {
  private readonly ship: Ship;

  public constructor(ship: Ship) {
    this.ship = ship;
  }

  public getIntoHolidaySpirit(): void {
    this.ship.fireCandyCanes();
  }
}
