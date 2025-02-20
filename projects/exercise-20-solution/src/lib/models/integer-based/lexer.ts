import {Token} from "./token";
import {TokenType} from "./token-type";

export class Lexer {
  public static lex(prompt: string): Array<Token> {
    const result: Array<Token> = [];
    const parts = prompt.split(' ');
    result.push(new Token(TokenType.INTEGER, parts[0]));
    result.push(new Token(TokenType.PLUS, parts[1]));
    result.push(new Token(TokenType.INTEGER, parts[2]));
    return result;
  }
}
