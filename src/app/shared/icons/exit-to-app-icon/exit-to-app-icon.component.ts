import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';

@Component({
  selector: 'app-exit-to-app-icon',
  templateUrl: 'exit_to_app-24px.svg',
  styles: [`:host {display: inline-flex}`],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExitToAppIconComponent {

  constructor(
    private cdr: ChangeDetectorRef
  ) {
    cdr.detach();
  }
}
