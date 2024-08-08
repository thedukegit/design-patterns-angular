import { Asteroid } from './asteroid';

export class AsteroidBuilder {
  private size: number = 0;
  private speed: number = 0;
  private durability: number = 0;

  public withSize(size: number): AsteroidBuilder {
    this.size = size;
    return this;
  }

  public withSpeed(speed: number): AsteroidBuilder {
    this.speed = speed;
    return this;
  }

  public withDurability(durability: number): AsteroidBuilder {
    this.durability = durability;
    return this;
  }

  public build(): Asteroid {
    return new Asteroid(this.size, this.speed, this.durability);
  }
}
