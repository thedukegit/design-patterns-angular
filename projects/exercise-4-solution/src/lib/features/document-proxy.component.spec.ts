import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentProxyComponent } from './document-proxy.component';

describe('WithAccessControlComponent', () => {
  let component: DocumentProxyComponent;
  let fixture: ComponentFixture<DocumentProxyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DocumentProxyComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DocumentProxyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
