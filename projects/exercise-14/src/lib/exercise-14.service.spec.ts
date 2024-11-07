import { TestBed } from '@angular/core/testing';

import { Exercise14Service } from './exercise-14.service';

describe('Exercise14Service', () => {
  let service: Exercise14Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Exercise14Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
