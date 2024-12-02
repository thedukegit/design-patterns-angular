import { TestBed } from '@angular/core/testing';

import { Exercise17SolutionService } from './exercise-17-solution.service';

describe('Exercise17SolutionService', () => {
  let service: Exercise17SolutionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Exercise17SolutionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
