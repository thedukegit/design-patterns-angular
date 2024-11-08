import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exercise14SolutionComponent } from './exercise-14-solution.component';

describe('Exercise14SolutionComponent', () => {
  let component: Exercise14SolutionComponent;
  let fixture: ComponentFixture<Exercise14SolutionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Exercise14SolutionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Exercise14SolutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
