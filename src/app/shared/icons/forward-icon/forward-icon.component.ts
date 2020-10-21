import {Component, ChangeDetectionStrategy, ChangeDetectorRef} from '@angular/core';

@Component({
  selector: 'app-forward-icon',
  templateUrl: 'forward_10-24px.svg',
  styleUrls: ['./forward-icon.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ForwardIconComponent {

  constructor(
    private cdr: ChangeDetectorRef
  ) {
    cdr.detach();
  }
}
