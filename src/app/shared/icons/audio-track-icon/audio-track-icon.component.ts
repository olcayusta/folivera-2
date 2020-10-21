import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';

@Component({
  selector: 'app-audio-track-icon',
  templateUrl: 'audiotrack-24px.svg',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AudioTrackIconComponent {
  constructor(
    private cdr: ChangeDetectorRef
  ) {
    cdr.detach();
  }
}
