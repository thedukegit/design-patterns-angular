import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'dummy-exercise',
    loadComponent: () =>
      import('./dummy.component').then((c) => c.DummyComponent),
  },
  {
    path: 'exercise-7-solution',
    loadComponent: () =>
      import(
        '../../projects/exercise-7-solution/src/lib/exercise-7-solution.component'
      ).then((c) => c.Exercise7SolutionComponent),
  },
  {
    path: 'exercise-8-solution',
    loadComponent: () =>
      import(
        '../../projects/exercise-8-solution/src/lib/exercise-8-solution.component'
      ).then((c) => c.Exercise8SolutionComponent),
  },
];
