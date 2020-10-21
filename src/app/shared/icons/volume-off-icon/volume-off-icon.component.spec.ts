import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VolumeOffIconComponent } from './volume-off-icon.component';

describe('VolumeOffIconComponent', () => {
  let component: VolumeOffIconComponent;
  let fixture: ComponentFixture<VolumeOffIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VolumeOffIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VolumeOffIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
