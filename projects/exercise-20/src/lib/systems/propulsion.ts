import {FuelTank} from "./fuel-tank";

export class Propulsion {
  // private fuelTank: FuelTank;

  public constructor() {
    // this.fuelTank = new FuelTank();
  }

  public start(): void {
    const fuelLevel = FuelTank.level();
    if (fuelLevel > 10) {
      console.log('Propulsion started');
    } else {
      throw new Error(`Fuel level is ${fuelLevel}%, but should be above 10%`);
    }
  }
}
