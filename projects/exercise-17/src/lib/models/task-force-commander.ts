import {UnitCommander} from "./unit-commander";

export class TaskForceCommander {
  private readonly name = 'Task Force Commander';

  public constructor(public readonly unitCommanders: Array<UnitCommander>) {
  }

  public mapAsteroids(): string {
    return `I'm mapping asteroids`;
  }

  public getName(): string {
    return this.name;
  }
}
