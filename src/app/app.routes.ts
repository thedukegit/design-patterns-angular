import {Routes} from '@angular/router';

export const routes: Routes = [
  {
    path: 'exercise-2-with',
    loadComponent: () => import('../../projects/exercise-2-with/src/lib/exercise-2-with.component').then(c => c.Exercise2WithComponent)
  }, {
    path: 'exercise-3-without',
    loadComponent: () => import('../../projects/exercise-3-without/src/lib/exercise-3-without.component').then(c => c.Exercise3WithoutComponent)
  },
];
