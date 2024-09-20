import { TestBed } from '@angular/core/testing';

import { Exercise11SolutionService } from './exercise-11-solution.service';

describe('Exercise11SolutionService', () => {
  let service: Exercise11SolutionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Exercise11SolutionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
