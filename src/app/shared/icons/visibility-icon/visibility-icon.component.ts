import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';

@Component({
  selector: 'app-visibility-icon',
  templateUrl: 'visibility-24px.svg',
  styleUrls: ['./visibility-icon.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VisibilityIconComponent {

  constructor(
    private cdr: ChangeDetectorRef
  ) {
    cdr.detach();
  }
}
