import { TestBed } from '@angular/core/testing';

import { Exercise5SolutionService } from './exercise-5-solution.service';

describe('Exercise5SolutionService', () => {
  let service: Exercise5SolutionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Exercise5SolutionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
