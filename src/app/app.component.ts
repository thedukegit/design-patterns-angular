import {Component, inject} from '@angular/core';
import {Router, RouterOutlet} from '@angular/router';
import {DummyComponent} from "./dummy.component";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatOption, MatSelect} from "@angular/material/select";
import {Exercise5SolutionComponent} from "../../projects/exercise-5-solution/src/lib/exercise-5-solution.component";

interface ComponentInterface {
  name: string;
  component: any;
  path: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatFormField, MatSelect, MatOption, MatLabel],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'design-patterns-angular';
  protected components: ComponentInterface[] = [
    {name: 'Dummy exercise', component: DummyComponent, path: 'dummy-exercise'},
    {name: 'Exercise 5 Solution', component: Exercise5SolutionComponent, path: 'exercise-5-solution'},
  ]
  private readonly router: Router = inject(Router);

  protected navigateToComponent(component: ComponentInterface): void {
    this.router.navigate([component.path]);
  }
}
