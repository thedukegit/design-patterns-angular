import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'dummy-exercise',
    loadComponent: () =>
      import('./dummy.component').then((c) => c.DummyComponent),
  },
  {
    path: 'exercise-6',
    loadComponent: () =>
      import(
        '../../projects/exercise-6/src/lib/exercise-6/exercise-6.component'
      ).then((c) => c.Exercise6Component),
  },
];
