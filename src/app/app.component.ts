import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Exercise2WithComponent} from "../../projects/exercise-2-with/src/lib/exercise-2-with.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Exercise2WithComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'design-patterns-angular';
}
