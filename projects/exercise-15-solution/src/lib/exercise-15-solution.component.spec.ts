import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exercise15SolutionComponent } from './exercise-15-solution.component';

describe('Exercise15SolutionComponent', () => {
  let component: Exercise15SolutionComponent;
  let fixture: ComponentFixture<Exercise15SolutionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Exercise15SolutionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Exercise15SolutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
