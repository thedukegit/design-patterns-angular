export class AsteroidHunter {
  private readonly name = 'Asteroid Hunter';

  public targetAsteroid(): string {
    return `I'm targeting asteroids`;
  }

  public getName(): string {
    return this.name;
  }
}
