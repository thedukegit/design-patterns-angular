import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exercise13SolutionComponent } from './exercise-13-solution.component';

describe('Exercise13SolutionComponent', () => {
  let component: Exercise13SolutionComponent;
  let fixture: ComponentFixture<Exercise13SolutionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Exercise13SolutionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Exercise13SolutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
