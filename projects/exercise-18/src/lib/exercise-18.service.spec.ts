import { TestBed } from '@angular/core/testing';

import { Exercise18Service } from './exercise-18.service';

describe('Exercise18Service', () => {
  let service: Exercise18Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Exercise18Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
