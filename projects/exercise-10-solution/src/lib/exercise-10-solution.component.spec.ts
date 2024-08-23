import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exercise10SolutionComponent } from './exercise-10-solution.component';

describe('Exercise10Component', () => {
  let component: Exercise10SolutionComponent;
  let fixture: ComponentFixture<Exercise10SolutionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Exercise10SolutionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(Exercise10SolutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
