import {Component} from '@angular/core';
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


  protected calculate(): void {
    throw new Error('Not implemented yet');
  }
}
