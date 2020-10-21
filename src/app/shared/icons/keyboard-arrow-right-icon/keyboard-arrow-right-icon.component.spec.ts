import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyboardArrowRightIconComponent } from './keyboard-arrow-right-icon.component';

describe('KeyboardArrowRightIconComponent', () => {
  let component: KeyboardArrowRightIconComponent;
  let fixture: ComponentFixture<KeyboardArrowRightIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KeyboardArrowRightIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KeyboardArrowRightIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
