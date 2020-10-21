import {Component, ChangeDetectionStrategy, ChangeDetectorRef} from '@angular/core';

@Component({
  selector: 'app-thumb-up-icon',
  templateUrl: 'thumb_up-24px.svg',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ThumbUpIconComponent {

  constructor(
    private cdr: ChangeDetectorRef
  ) {
    cdr.detach();
  }
}
