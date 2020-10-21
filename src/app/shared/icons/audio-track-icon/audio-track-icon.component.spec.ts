import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AudioTrackIconComponent } from './audio-track-icon.component';

describe('AudioTrackIconComponent', () => {
  let component: AudioTrackIconComponent;
  let fixture: ComponentFixture<AudioTrackIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AudioTrackIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AudioTrackIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
