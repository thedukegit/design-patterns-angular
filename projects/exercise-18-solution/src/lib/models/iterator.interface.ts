import {Ship} from "../domain/ship/ship";

export interface IteratorInterface {
  next(): Ship;

  hasNext(): boolean;
}
