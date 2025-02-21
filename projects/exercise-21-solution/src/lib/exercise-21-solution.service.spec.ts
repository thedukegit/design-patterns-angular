import { TestBed } from '@angular/core/testing';

import { Exercise21SolutionService } from './exercise-21-solution.service';

describe('Exercise21SolutionService', () => {
  let service: Exercise21SolutionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Exercise21SolutionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
