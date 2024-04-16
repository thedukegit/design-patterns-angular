import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exercise3WithoutComponent } from './exercise-3-without.component';

describe('Exercise3WithoutComponent', () => {
  let component: Exercise3WithoutComponent;
  let fixture: ComponentFixture<Exercise3WithoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Exercise3WithoutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Exercise3WithoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
