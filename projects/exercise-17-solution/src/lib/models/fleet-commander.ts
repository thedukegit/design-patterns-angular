export class FleetCommander {
  private readonly name = 'Fleet Commander';

  public deployFleet(): void {
    console.log('Deploying fleet');
  }

  public getName(): string {
    return this.name;
  }
}
