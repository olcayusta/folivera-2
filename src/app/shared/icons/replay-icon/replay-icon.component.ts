import { Component, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-replay-icon',
  templateUrl: 'replay_10-24px.svg',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReplayIconComponent {

  constructor(
    private cdr: ChangeDetectorRef
  ) {
    cdr.detach();
  }
}
