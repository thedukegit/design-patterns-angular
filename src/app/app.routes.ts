import {Routes} from '@angular/router';

export const routes: Routes = [
  {
    path: 'exercise-4-without',
    loadComponent: () => import('../../projects/exercise-4-without/src/lib/exercise-4-without.component').then(c => c.Exercise4WithoutComponent)
  },
];
