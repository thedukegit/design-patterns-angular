import { TestBed } from '@angular/core/testing';

import { Exercise16SolutionService } from './exercise-16-solution.service';

describe('Exercise16SolutionService', () => {
  let service: Exercise16SolutionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Exercise16SolutionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
