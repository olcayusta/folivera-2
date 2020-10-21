import {Component, ChangeDetectionStrategy, ChangeDetectorRef} from '@angular/core';

@Component({
  selector: 'app-fullscreen-icon',
  templateUrl: 'fullscreen-24px.svg',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FullscreenIconComponent {

  constructor(
    private cdr: ChangeDetectorRef
  ) {
    cdr.detach();
  }
}
