import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClosedCaptionIconComponent } from './closed-caption-icon.component';

describe('ClosedCaptionIconComponent', () => {
  let component: ClosedCaptionIconComponent;
  let fixture: ComponentFixture<ClosedCaptionIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClosedCaptionIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClosedCaptionIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
