<<<<<<< Updated upstream
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
=======
import {Component, inject} from '@angular/core';
import {Router, RouterOutlet} from '@angular/router';
import {Exercise2WithComponent} from "../../projects/exercise-2-with/src/lib/exercise-2-with.component";
import {MatOption, MatSelect} from "@angular/material/select";
import {Exercise3WithoutComponent} from "../../projects/exercise-3-without/src/lib/exercise-3-without.component";
import {Exercise4WithoutComponent} from "../../projects/exercise-4-without/src/lib/exercise-4-without.component";

interface ComponentInterface {
  name: string;
  component: any;
  path: string;
}
>>>>>>> Stashed changes

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'design-patterns-angular';
<<<<<<< Updated upstream
=======
  protected components: ComponentInterface[] = [
    {name: 'Exercise 2 With', component: Exercise2WithComponent, path: 'exercise-2-with'},
    {name: 'Exercise 3 Without', component: Exercise3WithoutComponent, path: 'exercise-3-without'},
    {name: 'Exercise 4 Without', component: Exercise4WithoutComponent, path: 'exercise-4-without'},
  ]
  private readonly router: Router = inject(Router);

  protected navigateToComponent(component: ComponentInterface): void {
    this.router.navigate([component.path]);
  }
>>>>>>> Stashed changes
}
