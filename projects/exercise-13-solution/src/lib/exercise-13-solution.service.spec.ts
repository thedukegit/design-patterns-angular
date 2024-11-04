import { TestBed } from '@angular/core/testing';

import { Exercise13SolutionService } from './exercise-13-solution.service';

describe('Exercise13SolutionService', () => {
  let service: Exercise13SolutionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Exercise13SolutionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
