import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exercise4WithoutComponent } from './exercise-4-without.component';

describe('Exercise4WithoutComponent', () => {
  let component: Exercise4WithoutComponent;
  let fixture: ComponentFixture<Exercise4WithoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Exercise4WithoutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Exercise4WithoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
