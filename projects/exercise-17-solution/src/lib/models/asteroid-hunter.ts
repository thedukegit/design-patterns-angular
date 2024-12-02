export class AsteroidHunter {
  private readonly name = 'Asteroid Hunter';

  public targetAsteroid(): void {
    console.log('Targeting asteroid');
  }

  public getName(): string {
    return this.name;
  }
}
