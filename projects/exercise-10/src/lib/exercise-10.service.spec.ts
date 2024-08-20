import { TestBed } from '@angular/core/testing';

import { Exercise10Service } from './exercise-10.service';

describe('Exercise10Service', () => {
  let service: Exercise10Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Exercise10Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
