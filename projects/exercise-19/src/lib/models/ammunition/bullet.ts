import {AmmunitionInterface} from "../ammunition.interface";

export class Bullet implements AmmunitionInterface {
  public toString(): string {
    return 'Firing bullets, bang bang';
  }
}
