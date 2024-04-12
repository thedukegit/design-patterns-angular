import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exercise2WithComponent } from './exercise-2-with.component';

describe('Exercise2WithComponent', () => {
  let component: Exercise2WithComponent;
  let fixture: ComponentFixture<Exercise2WithComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Exercise2WithComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Exercise2WithComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
