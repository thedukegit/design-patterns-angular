import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exercise17Component } from './exercise-17.component';

describe('Exercise17Component', () => {
  let component: Exercise17Component;
  let fixture: ComponentFixture<Exercise17Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Exercise17Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Exercise17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
