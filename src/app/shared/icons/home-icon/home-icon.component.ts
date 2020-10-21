import {Component, ChangeDetectionStrategy, ChangeDetectorRef} from '@angular/core';

@Component({
  selector: 'app-home-icon',
  templateUrl: 'home-24px.svg',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeIconComponent {

  constructor(
    private cdr: ChangeDetectorRef
  ) {
    cdr.detach();
  }
}
