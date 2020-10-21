import {Component, ChangeDetectionStrategy, ChangeDetectorRef} from '@angular/core';

@Component({
  selector: 'app-video-library-icon',
  templateUrl: 'video_library-24px.svg',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VideoLibraryIconComponent {

  constructor(
    private cdr: ChangeDetectorRef
  ) {
    cdr.detach();
  }
}
