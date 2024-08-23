import { Component } from '@angular/core';
import { Ship } from './models/ship';
import { MatAnchor, MatButton } from '@angular/material/button';

@Component({
  selector: 'lib-exercise-10',
  standalone: true,
  imports: [MatButton, MatAnchor],
  templateUrl: './exercise-10-solution.component.html',
  styles: ``,
})
export class Exercise10SolutionComponent {
  protected ship: Ship = new Ship(100, 50);

  protected magneticStorm() {}
}
