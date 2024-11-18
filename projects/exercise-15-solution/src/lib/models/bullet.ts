import {BulletFlyweight} from "./bullet.flyweight";

export class Bullet {
  private readonly flyweight: BulletFlyweight;
  private speed: number;
  private direction: number;

  constructor(flyweight: BulletFlyweight, speed: number, direction: number) {
    this.flyweight = flyweight;
    this.speed = speed;
    this.direction = direction;
  }

  public getSpeed(): number {
    return this.speed;
  }

  public getDirection(): number {
    return this.direction;
  }

  public getSprite(): string {
    return this.flyweight.getSprite();
  }

  public getSounds(): string {
    return this.flyweight.getSounds();
  }

}
