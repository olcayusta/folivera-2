import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForwardIconComponent } from './forward-icon.component';

describe('ForwardIconComponent', () => {
  let component: ForwardIconComponent;
  let fixture: ComponentFixture<ForwardIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForwardIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForwardIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
