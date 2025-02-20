import {TokenType} from "./token-type";

export class Token {
  public type: TokenType;
  public prompt: string;

  public constructor(type: TokenType, prompt: string) {
    this.type = type;
    this.prompt = prompt
  }

}
