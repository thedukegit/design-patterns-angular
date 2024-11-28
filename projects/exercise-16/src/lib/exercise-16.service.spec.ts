import { TestBed } from '@angular/core/testing';

import { Exercise16Service } from './exercise-16.service';

describe('Exercise16Service', () => {
  let service: Exercise16Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Exercise16Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
