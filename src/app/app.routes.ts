import { Routes } from '@angular/router';

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
    path: 'exercise-10-solution',
    loadComponent: () =>
      import(
        '../../projects/exercise-10-solution/src/lib/exercise-10-solution.component'
      ).then((c) => c.Exercise10SolutionComponent),
  },
];
