export interface Expression {
  interpret(context: Map<string, number>): string | number;
}
