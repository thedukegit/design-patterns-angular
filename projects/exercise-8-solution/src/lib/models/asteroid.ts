export class Asteroid {
  protected size: number;
  protected speed: number;
  protected durability: number;

  public constructor(size: number, speed: number, durability: number) {
    this.size = size;
    this.speed = speed;
    this.durability = durability;
  }

  public toString(): string {
    return `Asteroid: size=${this.size}, speed=${this.speed}, durability=${this.durability}`;
  }
}
