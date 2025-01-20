import {AmmunitionInterface} from "../ammunition.interface";

export class Fireworks implements AmmunitionInterface {
  public toString(): string {
    return 'Firing fireworks, boom boom';
  }
}
