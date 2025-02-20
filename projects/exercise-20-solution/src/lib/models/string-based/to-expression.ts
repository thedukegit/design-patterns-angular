import {Expression} from "../expression.interface";

export class ToExpression implements Expression {
  private amount: Expression;
  private leftExpression: Expression;
  private rightExpression: Expression;

  constructor(amount: Expression, left: Expression, right: Expression) {
    this.amount = amount;
    this.leftExpression = left;
    this.rightExpression = right;
  }

  public interpret(context: Map<string, number>): string | number {
    // return this.leftExpression.interpret(context) + this.rightExpression.interpret(context);
    return '';
  }
}
