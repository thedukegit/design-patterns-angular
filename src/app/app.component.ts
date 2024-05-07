import {Component, inject} from '@angular/core';
import {Router, RouterOutlet} from '@angular/router';
import {Exercise2WithComponent} from "../../projects/exercise-2-with/src/lib/exercise-2-with.component";
import {MatOption, MatSelect} from "@angular/material/select";
import {Exercise3WithoutComponent} from "../../projects/exercise-3-without/src/lib/exercise-3-without.component";
import {Exercise3WithComponent} from "../../projects/exercise-3-with/src/lib/exercise-3-with.component";

interface ComponentInterface {
  name: string;
  component: any;
  path: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatSelect, MatOption],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'design-patterns-angular';
  protected components: ComponentInterface[] = [
    {name: 'Exercise 2 With', component: Exercise2WithComponent, path: 'exercise-2-with'},
    {name: 'Exercise 3 Without', component: Exercise3WithoutComponent, path: 'exercise-3-without'},
    {name: 'Exercise 3 With', component: Exercise3WithComponent, path: 'exercise-3-with'},
  ]
  private readonly router: Router = inject(Router);

  protected navigateToComponent(component: ComponentInterface): void {
    this.router.navigate([component.path]);
  }
}
