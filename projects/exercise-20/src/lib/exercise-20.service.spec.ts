import { TestBed } from '@angular/core/testing';

import { Exercise20Service } from './exercise-20.service';

describe('Exercise20Service', () => {
  let service: Exercise20Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Exercise20Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
