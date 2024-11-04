import {Component} from '@angular/core';
import {Player} from "./models/player";
import {MatButton} from "@angular/material/button";

@Component({
  selector: 'lib-exercise-13-solution',
  standalone: true,
  imports: [
    MatButton
  ],
  templateUrl: 'exercise-13-solution.component.html',
  styles: ``
})
export class Exercise13SolutionComponent {
  protected Marlin = new Player('Marlin');
  protected Randy = new Player('Randy');
  protected Emiel = new Player('Emiel');

}
