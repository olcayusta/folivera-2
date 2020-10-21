import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisibilityOffIconComponent } from './visibility-off-icon.component';

describe('VisibilityOffIconComponent', () => {
  let component: VisibilityOffIconComponent;
  let fixture: ComponentFixture<VisibilityOffIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisibilityOffIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisibilityOffIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
