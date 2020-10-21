import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VolumeUpIconComponent } from './volume-up-icon.component';

describe('VolumeUpIconComponent', () => {
  let component: VolumeUpIconComponent;
  let fixture: ComponentFixture<VolumeUpIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VolumeUpIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VolumeUpIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
