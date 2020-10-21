import { Component, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-pause-icon',
  templateUrl: 'pause-24px.svg',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PauseIconComponent {

  constructor(
    private cdr: ChangeDetectorRef
  ) {
    cdr.detach();
  }
}
