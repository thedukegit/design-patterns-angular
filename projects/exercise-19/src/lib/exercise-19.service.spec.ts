import { TestBed } from '@angular/core/testing';

import { Exercise19Service } from './exercise-19.service';

describe('Exercise19Service', () => {
  let service: Exercise19Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Exercise19Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
