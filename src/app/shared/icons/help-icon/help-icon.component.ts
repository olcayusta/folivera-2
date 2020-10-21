import {Component, ChangeDetectionStrategy, ChangeDetectorRef} from '@angular/core';

@Component({
  selector: 'app-help-icon',
  templateUrl: 'help_outline-24px.svg',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HelpIconComponent {

  constructor(
    private cdr: ChangeDetectorRef
  ) {
    cdr.detach();
  }

}
