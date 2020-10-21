import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FulscreenExitIconComponent } from './fulscreen-exit-icon.component';

describe('FulscreenExitIconComponent', () => {
  let component: FulscreenExitIconComponent;
  let fixture: ComponentFixture<FulscreenExitIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FulscreenExitIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FulscreenExitIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
