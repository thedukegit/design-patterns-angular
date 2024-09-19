import { TestBed } from '@angular/core/testing';

import { Exercise11Service } from './exercise-11.service';

describe('Exercise11Service', () => {
  let service: Exercise11Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Exercise11Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
