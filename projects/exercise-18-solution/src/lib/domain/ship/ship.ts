import { Captain } from "../captain";

export interface Ship {
  getName(): string;

  getCaptain(): Captain;

  getDescription(): string;
  
  getGoal(): string;

  getSubordinates(): Array<Ship>;
}
