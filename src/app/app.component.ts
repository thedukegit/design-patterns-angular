import {Component, inject} from '@angular/core';
import {Router, RouterOutlet} from '@angular/router';
import {DummyComponent} from './dummy.component';
import {MatFormField, MatLabel} from '@angular/material/form-field';
import {MatOption, MatSelect} from '@angular/material/select';
import {ExerciseTemplateComponent} from '../../projects/exercise-template/src/lib/exercise-template.component';
import {Exercise14Component} from "../../projects/exercise-14/src/lib/exercise-14.component";
import {Exercise14SolutionComponent} from "../../projects/exercise-14-solution/src/lib/exercise-14-solution.component";
import {Exercise15SolutionComponent} from "../../projects/exercise-15-solution/src/lib/exercise-15-solution.component";

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
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'design-patterns-angular';
  protected components: ComponentInterface[] = [
    {
      name: 'Dummy exercise',
      component: DummyComponent,
      path: 'dummy-exercise',
    },
    {
      name: 'Exercise template',
      component: ExerciseTemplateComponent,
      path: 'exercise-template',
    },
    {
      name: 'Exercise 14',
      component: Exercise14Component,
      path: 'exercise-14',
    },
    {
      name: 'Exercise 14 solution',
      component: Exercise14SolutionComponent,
      path: 'exercise-14-solution',
    },
    {
      name: 'Exercise 15 solution',
      component: Exercise15SolutionComponent,
      path: 'exercise-15-solution',
    },
  ];
  private readonly router: Router = inject(Router);

  protected navigateToComponent(component: ComponentInterface): void {
    console.log(component);

    this.router.navigate([component.path]);
  }
}
