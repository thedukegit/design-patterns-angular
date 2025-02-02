import { TestBed } from '@angular/core/testing';

import { Exercise20SolutionService } from './exercise-20-solution.service';

describe('Exercise20SolutionService', () => {
  let service: Exercise20SolutionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Exercise20SolutionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
