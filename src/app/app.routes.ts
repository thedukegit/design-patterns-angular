import { Routes } from '@angular/router';

<<<<<<< Updated upstream
export const routes: Routes = [];
=======
export const routes: Routes = [
  {
    path: 'exercise-2-with',
    loadComponent: () => import('../../projects/exercise-2-with/src/lib/exercise-2-with.component').then(c => c.Exercise2WithComponent)
  }, {
    path: 'exercise-3-without',
    loadComponent: () => import('../../projects/exercise-3-without/src/lib/exercise-3-without.component').then(c => c.Exercise3WithoutComponent)
  }, {
    path: 'exercise-4-without',
    loadComponent: () => import('../../projects/exercise-4-without/src/lib/exercise-4-without.component').then(c => c.Exercise4WithoutComponent)
  },
];
>>>>>>> Stashed changes
