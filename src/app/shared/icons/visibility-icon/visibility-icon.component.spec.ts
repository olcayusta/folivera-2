import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisibilityIconComponent } from './visibility-icon.component';

describe('VisibilityIconComponent', () => {
  let component: VisibilityIconComponent;
  let fixture: ComponentFixture<VisibilityIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisibilityIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisibilityIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
