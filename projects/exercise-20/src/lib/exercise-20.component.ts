import {Component} from '@angular/core';
import {Propulsion} from "./systems/propulsion";
import {MatButton} from "@angular/material/button";

@Component({
  selector: 'lib-exercise-20',
  standalone: true,
  imports: [
    MatButton
  ],
  templateUrl: './exercise-20.component.html',
  styles: ``
})
export class Exercise20Component {
  private readonly propulsion: Propulsion

  public constructor() {
    this.propulsion = new Propulsion()
  }

  protected startEngine(): void {
    this.propulsion.start();
  }
}
