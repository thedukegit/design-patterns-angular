import {Expression} from "../expression.interface";

export class FromCurrencyExpression implements Expression {
  private currency: string;

  constructor(amount: number, currency: string) {
    this.currency = currency;
  }

  public interpret(context: Map<string, number>): string {
    return this.currency;
  }
}
