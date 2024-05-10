export class Asteroid {
  private readonly message: string = '';

  private constructor(size: number, speed: number) {
    this.message = `I'm a size ${size} asteroid and traveling at a speed of: ${speed}!`;
  }

  public static create(size: number, speed: number): Asteroid {
    return new Asteroid(size, speed);
  }

  public getMessage(): string {
    return this.message;
  }
}
