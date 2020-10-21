import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';

@Component({
  selector: 'app-more-vert-icon',
  templateUrl: 'more_vert-24px.svg',
  styleUrls: ['./more-vert-icon.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MoreVertIconComponent {

  constructor(
    private cdr: ChangeDetectorRef
  ) {
    cdr.detach();
  }
}
