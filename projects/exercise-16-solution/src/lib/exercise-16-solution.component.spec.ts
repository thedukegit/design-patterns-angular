import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exercise16SolutionComponent } from './exercise-16-solution.component';

describe('Exercise16SolutionComponent', () => {
  let component: Exercise16SolutionComponent;
  let fixture: ComponentFixture<Exercise16SolutionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Exercise16SolutionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Exercise16SolutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
