import {HolidayBehaviourInterface} from "../holiday-behaviour.interface";
import {Ship} from "../ship";

export class NewYearsEve implements HolidayBehaviourInterface {
  private ship: Ship;

  public constructor(ship: Ship) {
    this.ship = ship;

  }

  getIntoHolidaySpirit(): void {

  }

}
