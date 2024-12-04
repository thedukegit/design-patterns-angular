import {AsteroidHunter} from "./asteroid-hunter";

export class UnitCommander {
  private readonly name = 'Unit Commander';

  public constructor(public readonly asteroidHunters: Array<AsteroidHunter>) {
  }

  public classifyAsteroids(): string {
    return `I'm classifying asteroids`;
  }

  public getName(): string {
    return this.name;
  }
}
