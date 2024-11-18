import {BulletFlyweight} from "./bullet.flyweight";

export enum SizeEnum {
  SMALL = 'small',
  MEDIUM = 'medium',
  LARGE = 'large'
}

export class BulletFlyweightFactory {
  private readonly flyweightBullets: Record<string, BulletFlyweight> = {};

  public getBulletFlyweight(size: SizeEnum) {
    if (this.flyweightBullets[size]) return this.flyweightBullets[size];
    else return new BulletFlyweight();
  }

}
