import {Routes} from '@angular/router';

export const routes: Routes = [
  {
    path: 'dummy-exercise',
    loadComponent: () =>
      import('./dummy.component').then((c) => c.DummyComponent),
  },
  {
    path: 'exercise-template',
    loadComponent: () =>
      import(
        '../../projects/exercise-template/src/lib/exercise-template.component'
        ).then((c) => c.ExerciseTemplateComponent),
  },
  {
    path: 'exercise-14',
    loadComponent: () =>
      import(
        '../../projects/exercise-14/src/lib/exercise-14.component'
        ).then((c) => c.Exercise14Component),
  },
  {
    path: 'exercise-14-solution',
    loadComponent: () =>
      import(
        '../../projects/exercise-14-solution/src/lib/exercise-14-solution.component'
        ).then((c) => c.Exercise14SolutionComponent),
  },
  {
    path: 'exercise-15-solution',
    loadComponent: () =>
      import(
        '../../projects/exercise-15-solution/src/lib/exercise-15-solution.component'
        ).then((c) => c.Exercise15SolutionComponent),
  },
  {
    path: 'exercise-16',
    loadComponent: () =>
      import(
        '../../projects/exercise-16/src/lib/exercise-16.component'
        ).then((c) => c.Exercise16Component),
  },
  {
    path: 'exercise-16-solution',
    loadComponent: () =>
      import(
        '../../projects/exercise-16-solution/src/lib/exercise-16-solution.component'
        ).then((c) => c.Exercise16SolutionComponent),
  },
  {
    path: 'exercise-17',
    loadComponent: () =>
      import(
        '../../projects/exercise-17/src/lib/exercise-17.component'
        ).then((c) => c.Exercise17Component),
  },
  {
    path: 'exercise-17-solution',
    loadComponent: () =>
      import(
        '../../projects/exercise-17-solution/src/lib/exercise-17-solution.component'
        ).then((c) => c.Exercise17SolutionComponent),
  },
  {
    path: 'exercise-18',
    loadComponent: () =>
      import(
        '../../projects/exercise-18/src/lib/exercise-18.component'
        ).then((c) => c.Exercise18Component),
  },
  {
    path: 'exercise-18-solution',
    loadComponent: () =>
      import(
        '../../projects/exercise-18-solution/src/lib/exercise-18-solution.component'
        ).then((c) => c.Exercise18SolutionComponent),
  },
  {
    path: 'exercise-19',
    loadComponent: () =>
      import(
        '../../projects/exercise-19/src/lib/exercise-19.component'
        ).then((c) => c.Exercise19Component),
  },
  {
    path: 'exercise-19-solution',
    loadComponent: () =>
      import(
        '../../projects/exercise-19-solution/src/lib/exercise-19-solution.component'
        ).then((c) => c.Exercise19SolutionComponent),
  },
  {
    path: 'exercise-20',
    loadComponent: () =>
      import(
        '../../projects/exercise-20/src/lib/exercise-20.component'
        ).then((c) => c.Exercise20Component),
  },
  {
    path: 'exercise-20-solution',
    loadComponent: () =>
      import(
        '../../projects/exercise-20-solution/src/lib/exercise-20-solution.component'
        ).then((c) => c.Exercise20SolutionComponent),
  },
  {
    path: 'exercise-21',
    loadComponent: () =>
      import(
        '../../projects/exercise-21/src/lib/exercise-21.component'
        ).then((c) => c.Exercise21Component),
  },
];
