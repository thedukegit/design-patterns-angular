import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesktopGameComponent } from './desktop-game.component';

describe('Exercise7SolutionComponent', () => {
  let component: DesktopGameComponent;
  let fixture: ComponentFixture<DesktopGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DesktopGameComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DesktopGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
