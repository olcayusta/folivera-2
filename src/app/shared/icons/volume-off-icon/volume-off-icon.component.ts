import { Component, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-volume-off-icon',
  templateUrl: 'volume_off-24px.svg',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VolumeOffIconComponent {

  constructor(
    private cdr: ChangeDetectorRef
  ) {
    cdr.detach();
  }
}
