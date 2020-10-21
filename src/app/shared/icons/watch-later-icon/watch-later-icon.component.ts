import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-watch-later-icon',
  templateUrl: 'watch_later-24px.svg',
  styleUrls: ['./watch-later-icon.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WatchLaterIconComponent {

  constructor(
    private cdr: ChangeDetectorRef
  ) {
    cdr.detach();
  }

}
