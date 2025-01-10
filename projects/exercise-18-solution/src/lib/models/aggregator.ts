import {AggregateInterface} from "./aggregate.interface";
import {IteratorInterface} from "./iterator.interface";
import {Iterator} from "./iterator";
import {Ship} from "../domain/ship/ship";

export class Aggregator implements AggregateInterface {

  public constructor(private readonly ship: Ship) {
  }

  createIterator(): IteratorInterface {
    return new Iterator(this.ship);
  }

}
