import { TestBed } from '@angular/core/testing';

import { Exercise17Service } from './exercise-17.service';

describe('Exercise17Service', () => {
  let service: Exercise17Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Exercise17Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
