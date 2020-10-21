import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReplayIconComponent } from './replay-icon.component';

describe('ReplayIconComponent', () => {
  let component: ReplayIconComponent;
  let fixture: ComponentFixture<ReplayIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReplayIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReplayIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
