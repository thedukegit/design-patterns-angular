import {TestBed} from '@angular/core/testing';

import {Exercise19SolutionService} from './exercise-19-solution.service';

describe('Exercise19Service', () => {
  let service: Exercise19SolutionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Exercise19SolutionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
