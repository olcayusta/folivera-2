import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';

@Component({
  selector: 'app-visibility-off-icon',
  templateUrl: 'visibility_off-24px.svg',
  styleUrls: ['./visibility-off-icon.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VisibilityOffIconComponent {

  constructor(
    private cdr: ChangeDetectorRef
  ) {
    cdr.detach();
  }
}
