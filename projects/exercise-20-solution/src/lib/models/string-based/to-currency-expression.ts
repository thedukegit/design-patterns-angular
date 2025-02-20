import {Expression} from "../expression.interface";

export class ToCurrencyExpression implements Expression {
  private currency: string;

  constructor(currency: string) {
    this.currency = currency;
  }

  public interpret(context: Map<string, number>): string {
    return this.currency;
  }
}
