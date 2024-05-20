import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exercise4SolutionComponent } from './exercise-4-solution.component';

describe('Exercise4SolutionComponent', () => {
  let component: Exercise4SolutionComponent;
  let fixture: ComponentFixture<Exercise4SolutionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Exercise4SolutionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Exercise4SolutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
