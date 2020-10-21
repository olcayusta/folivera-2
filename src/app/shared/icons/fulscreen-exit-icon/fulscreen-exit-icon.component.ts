import {Component, ChangeDetectionStrategy, ChangeDetectorRef} from '@angular/core';

@Component({
  selector: 'app-fulscreen-exit-icon',
  templateUrl: 'fullscreen_exit-24px.svg',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FulscreenExitIconComponent {

  constructor(
    private cdr: ChangeDetectorRef
  ) {
    cdr.detach();
  }
}
