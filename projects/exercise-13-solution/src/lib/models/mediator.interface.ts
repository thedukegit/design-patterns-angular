import {Player} from "./player";

export interface MediatorInterface {
  mediate(player: Player): void;
}
