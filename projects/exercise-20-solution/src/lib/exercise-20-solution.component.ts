import {Component, OnInit} from '@angular/core';
import {Token} from "./models/integer-based/token";
import {Lexer} from "./models/integer-based/lexer";

@Component({
  selector: 'lib-exercise-20-solution',
  standalone: true,
  imports: [],
  template: `
    <p>
      exercise-20-solution works!
    </p>
  `,
  styles: ``
})
export class Exercise20SolutionComponent implements OnInit {
  public ngOnInit(): void {
    this.integerBasedPrompt();
    this.stringBasedPrompt();
  }

  private stringBasedPrompt() {
    const stringBasedPrompt = '12 STONES TO CAPS';
    const parts = stringBasedPrompt.split(' ');
    // const expression = new ToExpression(parts[0], parts[1], parts[3]);
    // const tokes: Array<Token> = lex(prompt);
  }

  private integerBasedPrompt() {
    const prompt = '13 + 4';
    const tokens: Array<Token> = Lexer.lex(prompt);
    console.log(tokens);
  }
}
