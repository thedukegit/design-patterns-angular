export abstract class Asteroid {
  protected abstract diameter: number;
  protected abstract velocity: number;

  public toString(): string {
    return `Asteroid of size: ${this.diameter} travelling at ${this.velocity} km/s`;
  }

  // you dont need to touch this code for the exercise
  public move(): void {
    console.log('Asteroid is moving in a random direction');
  }
}
