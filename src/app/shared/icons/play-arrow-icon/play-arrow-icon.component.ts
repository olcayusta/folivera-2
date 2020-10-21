import {Component, ChangeDetectionStrategy, ChangeDetectorRef} from '@angular/core';

@Component({
  selector: 'app-play-arrow-icon',
  templateUrl: 'play_arrow-24px.svg',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlayArrowIconComponent {

  constructor(
    private cdr: ChangeDetectorRef
  ) {
    cdr.detach();
  }
}
