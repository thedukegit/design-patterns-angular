import { TestBed } from '@angular/core/testing';

import { Exercise15SolutionService } from './exercise-15-solution.service';

describe('Exercise15SolutionService', () => {
  let service: Exercise15SolutionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Exercise15SolutionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
