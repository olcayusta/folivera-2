import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';

@Component({
  selector: 'app-closed-caption-icon',
  templateUrl: 'closed_caption-24px.svg',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ClosedCaptionIconComponent {
  constructor(private cdr: ChangeDetectorRef) {
    cdr.detach();
  }
}
