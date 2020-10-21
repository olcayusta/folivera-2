import { Component, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-whatshot-icon',
  templateUrl: 'whatshot-24px.svg',
  styleUrls: ['./whatshot-icon.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WhatshotIconComponent {

  constructor(
    private cdr: ChangeDetectorRef
  ) {
    cdr.detach();
  }

}
