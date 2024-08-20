import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exercise9SolutionComponent } from './exercise-9-solution.component';

describe('Exercise9SolutionComponent', () => {
  let component: Exercise9SolutionComponent;
  let fixture: ComponentFixture<Exercise9SolutionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Exercise9SolutionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Exercise9SolutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
