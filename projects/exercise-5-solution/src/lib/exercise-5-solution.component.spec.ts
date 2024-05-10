import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exercise5SolutionComponent } from './exercise-5-solution.component';

describe('Exercise5SolutionComponent', () => {
  let component: Exercise5SolutionComponent;
  let fixture: ComponentFixture<Exercise5SolutionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Exercise5SolutionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Exercise5SolutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
