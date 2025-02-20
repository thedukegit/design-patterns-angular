import {Expression} from "../expression.interface";

export class NumberExpression implements Expression {
  private number: number;

  constructor(number: number) {
    this.number = number;
  }

  public interpret(context: Map<string, number>): number {
    return this.number;
  }
}
