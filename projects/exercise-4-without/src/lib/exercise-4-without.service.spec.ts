import { TestBed } from '@angular/core/testing';

import { Exercise4WithoutService } from './exercise-4-without.service';

describe('Exercise4WithoutService', () => {
  let service: Exercise4WithoutService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Exercise4WithoutService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
