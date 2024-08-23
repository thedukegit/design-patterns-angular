import { Component, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { DummyComponent } from './dummy.component';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatOption, MatSelect } from '@angular/material/select';
import { ExerciseTemplateComponent } from '../../projects/exercise-template/src/lib/exercise-template.component';
import { Exercise10SolutionComponent } from '../../projects/exercise-10-solution/src/lib/exercise-10-solution.component';

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
      name: 'Exercise 10 solution',
      component: Exercise10SolutionComponent,
      path: 'exercise-10-solution',
    },
  ];
  private readonly router: Router = inject(Router);

  protected navigateToComponent(component: ComponentInterface): void {
    console.log(component);

    this.router.navigate([component.path]);
  }
}
