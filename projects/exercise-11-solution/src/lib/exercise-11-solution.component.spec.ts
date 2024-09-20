import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exercise11SolutionComponent } from './exercise-11-solution.component';

describe('Exercise11SolutionComponent', () => {
  let component: Exercise11SolutionComponent;
  let fixture: ComponentFixture<Exercise11SolutionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Exercise11SolutionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Exercise11SolutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
