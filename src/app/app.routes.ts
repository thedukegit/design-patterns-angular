import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'dummy-exercise',
    loadComponent: () =>
      import('./dummy.component').then((c) => c.DummyComponent),
  },
  {
    path: 'exercise-5',
    loadComponent: () =>
      import('../../projects/exercise-5/src/lib/exercise-5.component').then(
        (c) => c.Exercise5Component,
      ),
  },
];
