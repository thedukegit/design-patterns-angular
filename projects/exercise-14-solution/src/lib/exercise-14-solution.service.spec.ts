import { TestBed } from '@angular/core/testing';

import { Exercise14SolutionService } from './exercise-14-solution.service';

describe('Exercise14SolutionService', () => {
  let service: Exercise14SolutionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Exercise14SolutionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
