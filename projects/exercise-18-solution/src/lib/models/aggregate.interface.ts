import {IteratorInterface} from "./iterator.interface";

export interface AggregateInterface {
  createIterator(): IteratorInterface;
}
