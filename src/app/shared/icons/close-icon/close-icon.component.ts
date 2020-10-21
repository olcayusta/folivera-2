import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';

@Component({
  selector: 'app-close-icon',
  styles: [':host {display: inline-flex}'],
  templateUrl: 'close-24px.svg',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CloseIconComponent {
  constructor(private cdr: ChangeDetectorRef) {
    cdr.detach();
  }
}
