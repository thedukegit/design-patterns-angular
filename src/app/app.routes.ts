import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'dummy-exercise',
    loadComponent: () => import('./dummy.component').then(c => c.DummyComponent)
  },
  {
    path: 'exercise-3-without',
    loadComponent: () => import('../../projects/exercise-3-without/src/lib/exercise-3-without.component').then(c => c.Exercise3WithoutComponent)
  }, {
    path: 'exercise-3-with',
    loadComponent: () => import('../../projects/exercise-3-with/src/lib/exercise-3-with.component').then(c => c.Exercise3WithComponent)
  },
];
