import {Ship} from "./ship";
import {HolidayType} from "../exercise-19-solution.component";

export class ShipFacade {
  private readonly ship: Ship;

  public constructor() {
    this.ship = new Ship();
  }

  public fire(holidayType: HolidayType): void {
    switch (holidayType) {
      case HolidayType.XMASS:
        this.ship.unwrapCandyCanes();
        this.ship.dehydrateFiringTubes();
        this.ship.loadCandyCanes();
        this.ship.fireCandyCanes();
        break;
      case HolidayType.NYE:
        this.ship.loadConfetti();
        this.ship.primeGasCanisters();
        this.ship.fireConfetti();
        break;
      case HolidayType.FOJ:
        this.ship.loadFireworks();
        this.ship.igniteFuse();
        break;
      default:
        this.ship.fireBullets()
        break;

    }
  }
}
