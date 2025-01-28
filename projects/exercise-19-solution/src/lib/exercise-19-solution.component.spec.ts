import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exercise19SolutionComponent } from './exercise-19-solution.component';

describe('Exercise19SolutionComponent', () => {
  let component: Exercise19SolutionComponent;
  let fixture: ComponentFixture<Exercise19SolutionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Exercise19SolutionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Exercise19SolutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
