import { Component, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-volume-up-icon',
  templateUrl: 'volume_up-24px.svg',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VolumeUpIconComponent {

  constructor(private cdr: ChangeDetectorRef) {
    cdr.detach();
  }
}
