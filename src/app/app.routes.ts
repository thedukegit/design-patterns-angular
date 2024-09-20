import {Routes} from '@angular/router';

export const routes: Routes = [
  {
    path: 'dummy-exercise',
    loadComponent: () =>
      import('./dummy.component').then((c) => c.DummyComponent),
  },
  {
    path: 'exercise-template',
    loadComponent: () =>
      import(
        '../../projects/exercise-template/src/lib/exercise-template.component'
        ).then((c) => c.ExerciseTemplateComponent),
  },
  {
    path: 'exercise-11-solution',
    loadComponent: () =>
      import(
        '../../projects/exercise-11-solution/src/lib/exercise-11-solution.component'
        ).then((c) => c.Exercise11SolutionComponent),
  },
];
