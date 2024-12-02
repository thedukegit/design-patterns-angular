export class TaskForceCommander {
  private readonly name = 'Task Force Commander';

  public mapAsteroids(): void {
    console.log('Map asteroids');
  }

  public getName(): string {
    return this.name;
  }
}
