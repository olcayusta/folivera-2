import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-not-interested-icon',
  templateUrl: 'not_interested-24px.svg',
  styleUrls: ['./not-interested-icon.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NotInterestedIconComponent {

  constructor(
    private cdr: ChangeDetectorRef
  ) {
    cdr.detach();
  }

}
