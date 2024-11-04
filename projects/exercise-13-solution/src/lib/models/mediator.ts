import {MediatorInterface} from "./mediator.interface";
import {Player} from "./player";

export class Mediator implements MediatorInterface {
  public mediate(player: Player): void {
    player.getTarget();
    throw new Error("Method not complete yet.");
  }

}
