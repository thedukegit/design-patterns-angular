import {TaskForceCommander} from "./task-force-commander";

export class FleetCommander {
  private readonly name = 'Fleet Commander';

  public constructor(public readonly taskForceCommanders: Array<TaskForceCommander>) {
  }

  public deployFleet(): string {
    return `I'm deploying the fleet`;
  }

  public getName(): string {
    return this.name;
  }
}
