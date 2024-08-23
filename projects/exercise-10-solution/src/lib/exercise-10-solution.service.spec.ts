import { TestBed } from '@angular/core/testing';

import { Exercise10SolutionService } from './exercise-10-solution.service';

describe('Exercise10Service', () => {
  let service: Exercise10SolutionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Exercise10SolutionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
