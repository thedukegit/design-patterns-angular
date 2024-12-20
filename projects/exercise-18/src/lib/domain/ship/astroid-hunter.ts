import {Captain} from "../captain";
import {Ship} from "./ship";

export class AstroidHunter implements Ship {
  private readonly name: string;
  private captain: Captain;

  public constructor(name: string, captain: Captain) {
    this.name = name;
    this.captain = captain;
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
    return "Targeting astroid";
  }

  public getCaptain(): Captain {
    return this.captain;
  }

  public getSubordinates(): Array<Ship> {
    return [];
  }

}
