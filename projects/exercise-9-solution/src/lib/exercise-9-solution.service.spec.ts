import { TestBed } from '@angular/core/testing';

import { Exercise9SolutionService } from './exercise-9-solution.service';

describe('Exercise9SolutionService', () => {
  let service: Exercise9SolutionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Exercise9SolutionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
