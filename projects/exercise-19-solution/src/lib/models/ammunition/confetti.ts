import {AmmunitionInterface} from "../ammunition.interface";

export class Confetti implements AmmunitionInterface {
  public toString(): string {
    return 'Firing confetti, wheeeee';
  }
}
