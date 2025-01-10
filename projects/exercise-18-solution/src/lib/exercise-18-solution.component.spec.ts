import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exercise18SolutionComponent } from './exercise-18-solution.component';

describe('Exercise18SolutionComponent', () => {
  let component: Exercise18SolutionComponent;
  let fixture: ComponentFixture<Exercise18SolutionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Exercise18SolutionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Exercise18SolutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
