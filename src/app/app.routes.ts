import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'dummy-exercise',
    loadComponent: () =>
      import('./dummy.component').then((c) => c.DummyComponent),
  },
  {
    path: 'exercise-4-solution',
    loadComponent: () =>
      import(
        '../../projects/exercise-4-solution/src/lib/exercise-4-solution.component'
      ).then((c) => c.Exercise4SolutionComponent),
  },
];
