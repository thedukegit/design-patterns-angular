import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exercise3WithComponent } from './exercise-3-with.component';

describe('Exercise3WithComponent', () => {
  let component: Exercise3WithComponent;
  let fixture: ComponentFixture<Exercise3WithComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Exercise3WithComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Exercise3WithComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
