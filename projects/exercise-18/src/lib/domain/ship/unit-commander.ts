import { Captain } from "../captain";
import { Ship } from "./ship";

export class UnitCommander implements Ship {
  public constructor(
    private name: string,
    private captain: Captain,
    private subordinates: Array<Ship>
  ) {
  }

  public getName(): string {
    return this.name;
  }

  public getDescription(): string {
    const captain = this.getCaptain().toString();
    const name = this.name;
    const action = this.getGoal();
    return `This is ${captain} of ${name}, our goal: ${action}`;
  }

  public getGoal(): string {
    return "Classify asteroids";
  }

  public getCaptain(): Captain {
    return this.captain;
  }

  public getSubordinates(): Array<Ship> {
    return this.subordinates;
  }

}
