import { Component, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-feedback-icon',
  templateUrl: 'feedback-24px.svg',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FeedbackIconComponent {

  constructor(
    private cdr: ChangeDetectorRef
  ) {
    cdr.detach();
  }
}
