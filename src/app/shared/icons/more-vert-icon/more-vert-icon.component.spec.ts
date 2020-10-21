import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreVertIconComponent } from './more-vert-icon.component';

describe('MoreVertIconComponent', () => {
  let component: MoreVertIconComponent;
  let fixture: ComponentFixture<MoreVertIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoreVertIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoreVertIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
