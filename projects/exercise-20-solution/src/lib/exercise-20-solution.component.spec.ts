import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exercise20SolutionComponent } from './exercise-20-solution.component';

describe('Exercise20SolutionComponent', () => {
  let component: Exercise20SolutionComponent;
  let fixture: ComponentFixture<Exercise20SolutionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Exercise20SolutionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Exercise20SolutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
