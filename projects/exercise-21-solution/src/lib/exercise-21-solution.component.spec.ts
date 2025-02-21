import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exercise21SolutionComponent } from './exercise-21-solution.component';

describe('Exercise21SolutionComponent', () => {
  let component: Exercise21SolutionComponent;
  let fixture: ComponentFixture<Exercise21SolutionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Exercise21SolutionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Exercise21SolutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
