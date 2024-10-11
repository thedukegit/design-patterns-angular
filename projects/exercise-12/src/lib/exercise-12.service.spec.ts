import { TestBed } from '@angular/core/testing';

import { Exercise12Service } from './exercise-12.service';

describe('Exercise12Service', () => {
  let service: Exercise12Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Exercise12Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
