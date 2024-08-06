import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exercise7SolutionComponent } from './exercise-7-solution.component';

describe('Exercise7SolutionComponent', () => {
  let component: Exercise7SolutionComponent;
  let fixture: ComponentFixture<Exercise7SolutionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Exercise7SolutionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Exercise7SolutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
