import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyboardArrowLeftIconComponent } from './keyboard-arrow-left-icon.component';

describe('KeyboardArrowLeftIconComponent', () => {
  let component: KeyboardArrowLeftIconComponent;
  let fixture: ComponentFixture<KeyboardArrowLeftIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KeyboardArrowLeftIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KeyboardArrowLeftIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
