import {Routes} from '@angular/router';

export const routes: Routes = [
  {
    path: 'dummy-exercise',
    loadComponent: () => import('./dummy.component').then(c => c.DummyComponent)
  },
];
