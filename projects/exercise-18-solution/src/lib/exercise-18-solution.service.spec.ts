import { TestBed } from '@angular/core/testing';

import { Exercise18SolutionService } from './exercise-18-solution.service';

describe('Exercise18SolutionService', () => {
  let service: Exercise18SolutionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Exercise18SolutionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
