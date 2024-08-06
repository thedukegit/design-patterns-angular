import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebGameComponent } from './web-game.component';

describe('Exercise7SolutionComponent', () => {
  let component: WebGameComponent;
  let fixture: ComponentFixture<WebGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WebGameComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WebGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
