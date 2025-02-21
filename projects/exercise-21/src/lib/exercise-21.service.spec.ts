import { TestBed } from '@angular/core/testing';

import { Exercise21Service } from './exercise-21.service';

describe('Exercise21Service', () => {
  let service: Exercise21Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Exercise21Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
