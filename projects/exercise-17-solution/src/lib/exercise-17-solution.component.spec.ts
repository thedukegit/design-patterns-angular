import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exercise17SolutionComponent } from './exercise-17-solution.component';

describe('Exercise17SolutionComponent', () => {
  let component: Exercise17SolutionComponent;
  let fixture: ComponentFixture<Exercise17SolutionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Exercise17SolutionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Exercise17SolutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
