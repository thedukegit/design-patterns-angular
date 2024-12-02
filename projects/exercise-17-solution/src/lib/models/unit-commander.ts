export class UnitCommander {
  private readonly name = 'Unit Commander';

  public classifyAsteroids(): void {
    console.log('Classify asteroids');
  }

  public getName(): string {
    return this.name;
  }
}
