import {Component} from '@angular/core';
import {MatButton} from "@angular/material/button";
import {Calculator} from "./models/calculator";
import {MatFormField, MatHint, MatInput} from "@angular/material/input";
import {MatLabel} from "@angular/material/form-field";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'lib-exercise-20',
  standalone: true,
  imports: [
    MatButton,
    MatInput,
    MatFormField,
    MatLabel,
    MatHint,
    FormsModule
  ],
  templateUrl: './exercise-20.component.html',
  styles: ``
})
export class Exercise20Component {
  protected result = '';
  protected prompt = '';

  protected calculate(): void {
    const calculator = new Calculator();
    this.result = calculator.calculate(this.prompt);

  }
}
