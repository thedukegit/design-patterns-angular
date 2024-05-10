import { TestBed } from '@angular/core/testing';

import { Exercise4Service } from './exercise-4.component.scss';

describe('Exercise4Service', () => {
  let service: Exercise4Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Exercise4Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
