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
    path: 'exercise-14',
    loadComponent: () =>
      import(
        '../../projects/exercise-14/src/lib/exercise-14.component'
        ).then((c) => c.Exercise14Component),
  },
  {
    path: 'exercise-14-solution',
    loadComponent: () =>
      import(
        '../../projects/exercise-14-solution/src/lib/exercise-14-solution.component'
        ).then((c) => c.Exercise14SolutionComponent),
  },
  {
    path: 'exercise-15-solution',
    loadComponent: () =>
      import(
        '../../projects/exercise-15-solution/src/lib/exercise-15-solution.component'
        ).then((c) => c.Exercise15SolutionComponent),
  },
];
