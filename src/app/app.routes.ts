import {Routes} from '@angular/router';

export const routes: Routes = [
  {
    path: 'dummy-exercise',
    loadComponent: () => import('./dummy.component').then(c => c.DummyComponent)
  },
  {
    path: 'exercise-5-solution',
    loadComponent: () => import('../../projects/exercise-5-solution/src/lib/exercise-5-solution.component').then(c => c.Exercise5SolutionComponent)
  },
];
