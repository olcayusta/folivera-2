import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoLibraryIconComponent } from './video-library-icon.component';

describe('VideoLibraryIconComponent', () => {
  let component: VideoLibraryIconComponent;
  let fixture: ComponentFixture<VideoLibraryIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoLibraryIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoLibraryIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
